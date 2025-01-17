/**********************************************************************
 * Copyright (C) 2023 Red Hat, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * SPDX-License-Identifier: Apache-2.0
 ***********************************************************************/

import { beforeEach, describe, expect, test, vi } from 'vitest';
import type { InternalContainerProvider } from '/@/plugin/container-registry.js';
import { ContainerProviderRegistry } from '/@/plugin/container-registry.js';
import type { Telemetry } from '/@/plugin/telemetry/telemetry.js';
import type { Certificates } from '/@/plugin/certificates.js';
import type { Proxy } from '/@/plugin/proxy.js';
import { ImageRegistry } from '/@/plugin/image-registry.js';
import type { ApiSenderType } from '/@/plugin/api.js';
import Dockerode from 'dockerode';
import { EventEmitter } from 'node:events';
import type * as podmanDesktopAPI from '@podman-desktop/api';
import nock from 'nock';
import { LibpodDockerode } from './dockerode/libpod-dockerode.js';
import moment from 'moment';

/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-null/no-null */

const fakeContainerWithComposeProject: Dockerode.ContainerInfo = {
  Id: '1234567890',
  Names: ['/container1'],
  Image: 'image1',
  ImageID: 'image1',
  Command: 'command1',
  Created: 1234567890,
  State: 'running',
  Status: 'running',
  Ports: [],
  // Fake the labels to use com.docker.compose.project
  Labels: {
    'com.docker.compose.project': 'project1',
  },
  Mounts: [],
  HostConfig: {
    NetworkMode: 'bridge',
  },
  // Fake NetworkSettings
  NetworkSettings: {
    Networks: {
      bridge: {
        IPAddress: '',
        IPPrefixLen: 0,
        Gateway: '',
        NetworkID: '',
        EndpointID: '',
        IPv6Gateway: '',
        GlobalIPv6Address: '',
        GlobalIPv6PrefixLen: 0,
        MacAddress: '',
      },
    },
  },
};

const fakeContainer: Dockerode.ContainerInfo = {
  Id: '1234',
  Names: ['/container2'],
  Image: 'image2',
  ImageID: 'image2',
  Command: 'command2',
  Created: 1234567890,
  State: 'running',
  Status: 'running',
  Ports: [],
  Labels: {},
  Mounts: [],
  HostConfig: {
    NetworkMode: 'bridge',
  },
  NetworkSettings: {
    Networks: {
      bridge: {
        IPAddress: '',
        IPPrefixLen: 0,
        Gateway: '',
        NetworkID: '',
        EndpointID: '',
        IPv6Gateway: '',
        GlobalIPv6Address: '',
        GlobalIPv6PrefixLen: 0,
        MacAddress: '',
      },
    },
  },
};
class TestContainerProviderRegistry extends ContainerProviderRegistry {
  public getMatchingEngine(engineId: string): Dockerode {
    return super.getMatchingEngine(engineId);
  }

  public getMatchingContainer(engineId: string, containerId: string): Dockerode.Container {
    return super.getMatchingContainer(engineId, containerId);
  }

  addInternalProvider(name: string, provider: InternalContainerProvider): void {
    this.internalProviders.set(name, provider);
  }

  addContainerProvider(name: string, provider: podmanDesktopAPI.ContainerProviderConnection): void {
    this.containerProviders.set(name, provider);
  }
}

let containerRegistry: TestContainerProviderRegistry;

const telemetryTrackMock = vi.fn().mockResolvedValue({});
const telemetry: Telemetry = { track: telemetryTrackMock } as unknown as Telemetry;

beforeEach(() => {
  const certificates: Certificates = {
    init: vi.fn(),
    getAllCertificates: vi.fn(),
  } as unknown as Certificates;
  const proxy: Proxy = {
    onDidStateChange: vi.fn(),
    onDidUpdateProxy: vi.fn(),
    isEnabled: vi.fn(),
  } as unknown as Proxy;

  const imageRegistry = new ImageRegistry({} as ApiSenderType, telemetry, certificates, proxy);
  containerRegistry = new TestContainerProviderRegistry({} as ApiSenderType, imageRegistry, telemetry);
});

test('tag should reject if no provider', async () => {
  await expect(
    containerRegistry.tagImage('dummy', 'image:latest', 'quay.io/podman-desktop/image'),
  ).rejects.toThrowError('no engine matching this engine');
});

test('tag should succeed if provider', async () => {
  const engine = {
    getImage: vi.fn().mockReturnValue({ tag: vi.fn().mockResolvedValue({}) }),
  };
  vi.spyOn(containerRegistry, 'getMatchingEngine').mockReturnValue(engine as unknown as Dockerode);
  const result = await containerRegistry.tagImage('dummy', 'image:latest', 'quay.io/podman-desktop/image');
  expect(result).toBeUndefined();
});

test('push should reject if no provider', async () => {
  await expect(containerRegistry.pushImage('dummy', 'image:latest', () => {})).rejects.toThrowError(
    'no engine matching this engine',
  );
});

test('push should succeed if provider', async () => {
  const engine = {
    getImage: vi.fn().mockReturnValue({ push: vi.fn().mockResolvedValue({ on: vi.fn() }) }),
  };
  vi.spyOn(containerRegistry, 'getMatchingEngine').mockReturnValue(engine as unknown as Dockerode);
  const result = await containerRegistry.pushImage('dummy', 'image:latest', () => {});
  expect(result).toBeUndefined();
});

test('restartContainersByLabel should succeed successfully if project name is provided and call restartContainer', async () => {
  const engine = {
    // Fake that we have 3 containers of the same project
    listSimpleContainers: vi
      .fn()
      .mockResolvedValue([
        fakeContainerWithComposeProject,
        fakeContainerWithComposeProject,
        fakeContainerWithComposeProject,
        fakeContainer,
      ]),
    getContainer: vi.fn().mockReturnValue({ restart: vi.fn().mockResolvedValue({}) }),
    listPods: vi.fn().mockResolvedValue([]),
    restartContainer: vi.fn().mockResolvedValue({}),
  };
  vi.spyOn(containerRegistry, 'getMatchingEngine').mockReturnValue(engine as unknown as Dockerode);
  vi.spyOn(containerRegistry, 'listSimpleContainers').mockReturnValue(engine.listSimpleContainers());

  // Spy on restartContainer to make sure it's called
  // it is NOT called if there are no matches.. So it's important to check this.
  const restartContainer = vi.spyOn(containerRegistry, 'restartContainer');

  // Restart all containers in the 'project1' project
  const result = await containerRegistry.restartContainersByLabel('dummy', 'com.docker.compose.project', 'project1');
  expect(result).toBeUndefined();

  // Expect restartContainer tohave been called 3 times
  expect(restartContainer).toHaveBeenCalledTimes(3);
});

// Same test but with startContainersByLabel

test('startContainersByLabel should succeed successfully if project name is provided and call startContainer', async () => {
  const engine = {
    // Fake that we have 3 containers of the same project
    listSimpleContainers: vi
      .fn()
      .mockResolvedValue([
        fakeContainerWithComposeProject,
        fakeContainerWithComposeProject,
        fakeContainerWithComposeProject,
      ]),
    getContainer: vi.fn().mockReturnValue({ start: vi.fn().mockResolvedValue({}) }),
    listPods: vi.fn().mockResolvedValue([]),
    startContainer: vi.fn().mockResolvedValue({}),
  };
  vi.spyOn(containerRegistry, 'getMatchingEngine').mockReturnValue(engine as unknown as Dockerode);
  vi.spyOn(containerRegistry, 'listSimpleContainers').mockReturnValue(engine.listSimpleContainers());

  // Spy on startContainer to make sure it's called
  // it is NOT called if there are no matches.. So it's important tot check this.
  const startContainer = vi.spyOn(containerRegistry, 'startContainer');

  // Start all containers in the 'project1' project
  const result = await containerRegistry.startContainersByLabel('dummy', 'com.docker.compose.project', 'project1');
  expect(result).toBeUndefined();

  // Expect startContainer to NOT have been called since our containers are "running"
  expect(startContainer).not.toHaveBeenCalled();
});

// Same test but with stopContainersByLabel
test('stopContainersByLabel should succeed successfully if project name is provided and call stopContainer', async () => {
  const engine = {
    // Fake that we have 3 containers of the same project
    listSimpleContainers: vi
      .fn()
      .mockResolvedValue([
        fakeContainerWithComposeProject,
        fakeContainerWithComposeProject,
        fakeContainerWithComposeProject,
      ]),
    getContainer: vi.fn().mockReturnValue({ stop: vi.fn().mockResolvedValue({}) }),
    listPods: vi.fn().mockResolvedValue([]),
    stopContainer: vi.fn().mockResolvedValue({}),
  };
  vi.spyOn(containerRegistry, 'getMatchingEngine').mockReturnValue(engine as unknown as Dockerode);
  vi.spyOn(containerRegistry, 'listSimpleContainers').mockReturnValue(engine.listSimpleContainers());

  // Spy on stopContainer to make sure it's called
  // it is NOT called if there are no matches.. So it's important tot check this.
  const stopContainer = vi.spyOn(containerRegistry, 'stopContainer');

  // Restart all containers in the 'project1' project
  const result = await containerRegistry.stopContainersByLabel('dummy', 'com.docker.compose.project', 'project1');
  expect(result).toBeUndefined();

  // Expect stopContainer to have been called 3 times
  expect(stopContainer).toHaveBeenCalledTimes(3);
});

// Test deleting containers by label
test('deleteContainersByLabel should succeed successfully if project name is provided and call deleteContainer', async () => {
  const engine = {
    // Fake that we have 3 containers of the same project
    listSimpleContainers: vi
      .fn()
      .mockResolvedValue([
        fakeContainerWithComposeProject,
        fakeContainerWithComposeProject,
        fakeContainerWithComposeProject,
        fakeContainer,
      ]),
    getContainer: vi.fn().mockReturnValue({ remove: vi.fn().mockResolvedValue({}) }),
    listPods: vi.fn().mockResolvedValue([]),
    deleteContainer: vi.fn().mockResolvedValue({}),
  };
  vi.spyOn(containerRegistry, 'getMatchingEngine').mockReturnValue(engine as unknown as Dockerode);
  vi.spyOn(containerRegistry, 'listSimpleContainers').mockReturnValue(engine.listSimpleContainers());

  // Spy on deleteContainer to make sure it's called
  // it is NOT called if there are no matches.. So it's important to check this.
  const deleteContainer = vi.spyOn(containerRegistry, 'deleteContainer');

  // Delete all containers in the 'project1' project
  const result = await containerRegistry.deleteContainersByLabel('dummy', 'com.docker.compose.project', 'project1');
  expect(result).toBeUndefined();

  // Expect deleteContainer tohave been called 3 times
  expect(deleteContainer).toHaveBeenCalledTimes(3);
});

test('test listSimpleContainersByLabel with compose label', async () => {
  const engine = {
    // Fake that we have 3 containers of the same project
    listSimpleContainers: vi
      .fn()
      .mockResolvedValue([
        fakeContainerWithComposeProject,
        fakeContainerWithComposeProject,
        fakeContainerWithComposeProject,
        fakeContainer,
      ]),
    listPods: vi.fn().mockResolvedValue([]),
  };
  vi.spyOn(containerRegistry, 'getMatchingEngine').mockReturnValue(engine as unknown as Dockerode);
  vi.spyOn(containerRegistry, 'listSimpleContainers').mockReturnValue(engine.listSimpleContainers());

  // List all containers with the label 'com.docker.compose.project' and value 'project1'
  const result = await containerRegistry.listSimpleContainersByLabel('com.docker.compose.project', 'project1');

  // We expect ONLY to return 3 since the last container does not have the correct label.
  expect(result).toHaveLength(3);
});

describe('execInContainer', () => {
  // stream using first Byte being header
  const writeData = (eventEmitter: EventEmitter, type: 'stdout' | 'stderr', data: string) => {
    const header = Buffer.alloc(8);
    // first byte is type
    header.writeUInt8(type === 'stdout' ? 1 : 2, 0);

    // write fourth byte is size of the message in big endian layout
    header.writeUInt32BE(data.length, 4);

    // full string is header + data
    const fullString = Buffer.concat([header, Buffer.from(data)]);

    eventEmitter.emit('data', fullString);
  };

  test('test exec in a container', async () => {
    const startStream = new EventEmitter();

    const startExecMock = vi.fn();
    startExecMock.mockResolvedValue(startStream);

    const inspectExecMock = vi.fn();
    inspectExecMock.mockResolvedValue({ Running: true });

    const execMock = {
      start: startExecMock,
      inspect: inspectExecMock,
    };

    const containerExecMock = vi.fn().mockResolvedValue(execMock);

    const dockerode = new Dockerode();
    const modem = dockerode.modem;

    const dockerodeContainer = {
      exec: containerExecMock,
      modem: modem,
    } as unknown as Dockerode.Container;

    vi.spyOn(containerRegistry, 'getMatchingContainer').mockReturnValue(dockerodeContainer);

    let stdout = '';
    const stdoutFunction = (data: Buffer) => {
      stdout += data.toString();
    };

    let stderr = '';
    const stderrFunction = (data: Buffer) => {
      stderr += data.toString();
    };

    const promiseExec = containerRegistry.execInContainer(
      'dummy',
      '1234567890',
      ['echo', 'hello', 'world'],
      stdoutFunction,
      stderrFunction,
    );
    // wait method is initialized
    await new Promise(resolve => setTimeout(resolve, 100));

    // send data on stdout
    writeData(startStream, 'stdout', 'hello ');
    writeData(startStream, 'stdout', 'world');

    // send data on stderr
    writeData(startStream, 'stderr', 'warning ');
    writeData(startStream, 'stderr', 'message');

    // wait and then say that stream is ended
    await new Promise(resolve => setTimeout(resolve, 100));

    startStream.emit('end', {});

    // wait the end
    await promiseExec;

    console.log('stdout', stdout);
    expect(stdout).toBe('hello world');
    expect(stderr).toBe('warning message');
  });

  test('test exec in a container with interval inspect', async () => {
    const startStream = new EventEmitter();

    // add a destroy method
    const destroyMock = vi.fn();
    (startStream as any).destroy = destroyMock;

    const startExecMock = vi.fn();
    startExecMock.mockResolvedValue(startStream);

    const inspectResult = { Running: true };
    const inspectExecMock = vi.fn();
    inspectExecMock.mockResolvedValue(inspectResult);

    const execMock = {
      start: startExecMock,
      inspect: inspectExecMock,
    };

    const containerExecMock = vi.fn().mockResolvedValue(execMock);

    const dockerode = new Dockerode();
    const modem = dockerode.modem;

    const dockerodeContainer = {
      exec: containerExecMock,
      modem: modem,
    } as unknown as Dockerode.Container;

    vi.spyOn(containerRegistry, 'getMatchingContainer').mockReturnValue(dockerodeContainer);

    let stdout = '';
    const stdoutFunction = (data: Buffer) => {
      stdout += data.toString();
    };

    let stderr = '';
    const stderrFunction = (data: Buffer) => {
      stderr += data.toString();
    };

    const promiseExec = containerRegistry.execInContainer(
      'dummy',
      '1234567890',
      ['echo', 'hello', 'world'],
      stdoutFunction,
      stderrFunction,
    );
    // wait method is initialized
    await new Promise(resolve => setTimeout(resolve, 100));

    // send data on stdout
    writeData(startStream, 'stdout', 'hello ');
    writeData(startStream, 'stdout', 'world');

    // send data on stderr
    writeData(startStream, 'stderr', 'warning ');
    writeData(startStream, 'stderr', 'message');

    // wait and then say that stream is ended
    await new Promise(resolve => setTimeout(resolve, 100));

    // here we don't send end but says that the process is no longer running
    inspectResult.Running = false;

    // wait the end
    await promiseExec;

    // expect destroy to have been called
    expect(destroyMock).toHaveBeenCalled();

    expect(stdout).toBe('hello world');
    expect(stderr).toBe('warning message');
  });
});

test('getFirstRunningConnection', async () => {
  const fakeDockerode = {} as Dockerode;

  // set providers with docker being first
  containerRegistry.addInternalProvider('docker1', {
    name: 'docker1',
    id: 'docker1',
    connection: {
      type: 'docker',
    },
    api: fakeDockerode,
  } as InternalContainerProvider);
  containerRegistry.addInternalProvider('podman1', {
    name: 'podman1',
    id: 'podman1',
    connection: {
      type: 'podman',
    },
    api: fakeDockerode,
  } as InternalContainerProvider);

  containerRegistry.addInternalProvider('docker2', {
    name: 'docker2',
    id: 'docker2',
    connection: {
      type: 'docker',
    },
    api: fakeDockerode,
  } as InternalContainerProvider);

  containerRegistry.addInternalProvider('podman2', {
    name: 'podman2',
    id: 'podman2',
    connection: {
      type: 'podman',
    },
    api: fakeDockerode,
  } as InternalContainerProvider);

  // add provider for podman1
  containerRegistry.addContainerProvider('podman1', {
    name: 'podman1',
    endpoint: {
      socketPath: '/podman1.socket',
    },
  } as podmanDesktopAPI.ContainerProviderConnection);

  const connection = containerRegistry.getFirstRunningConnection();

  // first should be podman 1 as we're first ordering podman providers
  expect(connection[0].name).toBe('podman1');
  expect(connection[0].endpoint.socketPath).toBe('/podman1.socket');
});

describe('listContainers', () => {
  test('list containers with Podman API', async () => {
    const containersWithPodmanAPI = [
      {
        AutoRemove: false,
        Command: ['httpd-foreground'],
        Created: '2023-08-10T15:37:44.555961563+02:00',
        CreatedAt: '',
        Exited: true,
        ExitedAt: 1691674673,
        ExitCode: 0,
        Id: '31a4b282691420be2611817f203765402d8da7e13cd530f80a6ddd1bb4aa63b4',
        Image: 'docker.io/library/httpd:latest',
        ImageID: '911d72fc5020723f0c003a134a8d2f062b4aea884474a11d1db7dcd28ce61d6a',
        IsInfra: false,
        Labels: {
          'io.buildah.version': '1.30.0',
          maintainer: 'Podman Maintainers',
        },
        Mounts: [],
        Names: ['admiring_wing'],
        Namespaces: {},
        Networks: ['podman'],
        Pid: 0,
        Pod: '',
        PodName: '',
        Ports: [
          {
            host_ip: '',
            container_port: 8080,
            host_port: 8080,
            range: 1,
            protocol: 'tcp',
          },
        ],
        Restarts: 0,
        Size: null,
        StartedAt: 1691674664,
        State: 'running',
        Status: '',
      },
    ];

    nock('http://localhost').get('/v4.2.0/libpod/containers/json?all=true').reply(200, containersWithPodmanAPI);

    // mock listPods

    nock('http://localhost').get('/v4.2.0/libpod/pods/json').reply(200, []);

    const dockerAPI = new Dockerode({ protocol: 'http', host: 'localhost' });

    const libpod = new LibpodDockerode();
    libpod.enhancePrototypeWithLibPod();

    // set providers with docker being first
    containerRegistry.addInternalProvider('podman1', {
      name: 'podman',
      id: 'podman1',
      api: dockerAPI,
      libpodApi: dockerAPI,
      connection: {
        type: 'podman',
      },
    } as unknown as InternalContainerProvider);

    const containers = await containerRegistry.listContainers();

    // ensure the field are correct
    expect(containers).toBeDefined();
    expect(containers).toHaveLength(1);
    const container = containers[0];
    expect(container.engineId).toBe('podman1');
    expect(container.engineName).toBe('podman');
    expect(container.engineType).toBe('podman');
    expect(container.StartedAt).toBe('2023-08-10T13:37:44.000Z');
    expect(container.pod).toBeUndefined();
    expect(container.Id).toBe('31a4b282691420be2611817f203765402d8da7e13cd530f80a6ddd1bb4aa63b4');
    expect(container.Command).toBe('httpd-foreground');
    expect(container.Names).toStrictEqual(['/admiring_wing']);
    expect(container.Image).toBe('docker.io/library/httpd:latest');
    expect(container.ImageID).toBe('sha256:911d72fc5020723f0c003a134a8d2f062b4aea884474a11d1db7dcd28ce61d6a');
    expect(container.Created).toBe(1691674664);
    expect(container.Ports).toStrictEqual([
      {
        IP: '',
        PrivatePort: 8080,
        PublicPort: 8080,
        Type: 'tcp',
      },
    ]);
    expect(container.Labels).toStrictEqual({
      'io.buildah.version': '1.30.0',
      maintainer: 'Podman Maintainers',
    });
    expect(container.State).toBe('running');
  });

  test('list containers with Docker API', async () => {
    const containersWithDockerAPI = [
      {
        Id: '31a4b282691420be2611817f203765402d8da7e13cd530f80a6ddd1bb4aa63b4',
        Names: ['/admiring_wing'],
        Image: 'docker.io/library/httpd:latest',
        ImageID: 'sha256:911d72fc5020723f0c003a134a8d2f062b4aea884474a11d1db7dcd28ce61d6a',
        Command: 'httpd-foreground',
        Created: 1691674664,
        Ports: [
          {
            PrivatePort: 8080,
            PublicPort: 8080,
            Type: 'tcp',
          },
        ],
        Labels: {
          'io.buildah.version': '1.30.0',
          maintainer: 'Podman Maintainers',
        },
        State: 'running',
        Status: 'Up 2 minutes',
        NetworkSettings: {
          Networks: {
            podman: {
              IPAMConfig: null,
              Links: null,
              Aliases: ['31a4b2826914'],
              NetworkID: 'podman',
              EndpointID: '',
              Gateway: '10.88.0.1',
              IPAddress: '10.88.0.4',
              IPPrefixLen: 16,
              IPv6Gateway: '',
              GlobalIPv6Address: '',
              GlobalIPv6PrefixLen: 0,
              MacAddress: '7e:49:fe:9b:2e:3a',
              DriverOpts: null,
            },
          },
        },
        Mounts: [],
        Name: '',
        Config: null,
        NetworkingConfig: null,
        Platform: null,
        AdjustCPUShares: false,
      },
    ];

    nock('http://localhost').get('/containers/json?all=true').reply(200, containersWithDockerAPI);

    // mock listPods

    nock('http://localhost').get('/v4.2.0/libpod/pods/json').reply(200, []);

    const dockerAPI = new Dockerode({ protocol: 'http', host: 'localhost' });

    // set providers with docker being first
    containerRegistry.addInternalProvider('docker', {
      name: 'docker',
      id: 'docker1',
      api: dockerAPI,
      connection: {
        type: 'docker',
      },
    } as unknown as InternalContainerProvider);

    const containers = await containerRegistry.listContainers();

    // ensure the field are correct
    expect(containers).toBeDefined();
    expect(containers).toHaveLength(1);
    const container = containers[0];
    expect(container.engineId).toBe('docker1');
    expect(container.engineName).toBe('docker');
    expect(container.engineType).toBe('docker');

    // grab StartedAt from the containerWithDockerAPI
    const started = container.StartedAt;

    //convert with moment
    const diff = moment.now() - moment(started).toDate().getTime();
    const delta = Math.round(moment.duration(diff).asMinutes());

    // expect delta to be 2 minutes
    expect(delta).toBe(2);
    expect(container.pod).toBeUndefined();

    expect(container.Id).toBe('31a4b282691420be2611817f203765402d8da7e13cd530f80a6ddd1bb4aa63b4');
    expect(container.Command).toBe('httpd-foreground');
    expect(container.Names).toStrictEqual(['/admiring_wing']);
    expect(container.Image).toBe('docker.io/library/httpd:latest');
    expect(container.ImageID).toBe('sha256:911d72fc5020723f0c003a134a8d2f062b4aea884474a11d1db7dcd28ce61d6a');
    expect(container.Created).toBe(1691674664);
    expect(container.Ports).toStrictEqual([
      {
        PrivatePort: 8080,
        PublicPort: 8080,
        Type: 'tcp',
      },
    ]);
    expect(container.Labels).toStrictEqual({
      'io.buildah.version': '1.30.0',
      maintainer: 'Podman Maintainers',
    });
    expect(container.State).toBe('running');
  });
});
