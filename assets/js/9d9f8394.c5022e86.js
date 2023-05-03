"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9360],{5318:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),u=p(t),c=o,h=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return t?a.createElement(h,l(l({ref:n},m),{},{components:t})):a.createElement(h,l({ref:n},m))}));function c(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,l=new Array(i);l[0]=u;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6304:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>p});var a=t(5773),o=(t(7378),t(5318));const i={sidebar_position:7},l="Troubleshooting",r={unversionedId:"troubleshooting",id:"troubleshooting",title:"Troubleshooting",description:"If you cannot find your issue here or in the documentation, please fill an issue on our repository. You can also explore the discussions and do a search on similar issues on the repository.",source:"@site/docs/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/troubleshooting",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/troubleshooting.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"mySidebar",previous:{title:"Installing",permalink:"/docs/extensions/install/"}},s={},p=[{value:"Podman Issues",id:"podman-issues",level:2},{value:"Unable to see any image or container after downloading Podman Desktop",id:"unable-to-see-any-image-or-container-after-downloading-podman-desktop",level:3},{value:"System Requirements",id:"system-requirements",level:4},{value:"Check connection",id:"check-connection",level:4},{value:"Unable to locate Podman Engine",id:"unable-to-locate-podman-engine",level:3},{value:"Issue:",id:"issue",level:4},{value:"Explanation:",id:"explanation",level:4},{value:"Solution:",id:"solution",level:4},{value:"Unable to see information about active containers",id:"unable-to-see-information-about-active-containers",level:3},{value:"Issue:",id:"issue-1",level:4},{value:"Solution:",id:"solution-1",level:4},{value:"Unable to set custom binary path for Podman on macOS",id:"unable-to-set-custom-binary-path-for-podman-on-macos",level:3},{value:"Issue:",id:"issue-2",level:4},{value:"Solution:",id:"solution-2",level:4},{value:"Warning about Docker compatibility mode",id:"warning-about-docker-compatibility-mode",level:3},{value:"Issue:",id:"issue-3",level:4},{value:"Solution:",id:"solution-3",level:4},{value:"Code Ready Containers",id:"code-ready-containers",level:2},{value:"Other Issues",id:"other-issues",level:2},{value:"Fixing corrupted Podman Machine in Windows",id:"fixing-corrupted-podman-machine-in-windows",level:3},{value:"Podman machine on Apple Silicon",id:"podman-machine-on-apple-silicon",level:3},{value:"Issue",id:"issue-4",level:4},{value:"Explanation",id:"explanation-1",level:4},{value:"Solution",id:"solution-4",level:4},{value:"The terminal session attaches to Podman Desktop when launching it from the command line in Windows",id:"the-terminal-session-attaches-to-podman-desktop-when-launching-it-from-the-command-line-in-windows",level:3},{value:"Issue",id:"issue-5",level:4},{value:"Solution",id:"solution-5",level:4}],m={toc:p};function d(e){let{components:n,...i}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("p",null,"If you cannot find your issue here or in the documentation, please fill an issue on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues"},"repository"),". You can also explore the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/discussions"},"discussions")," and do a search on similar issues on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman-desktop/issues"},"repository"),"."),(0,o.kt)("h2",{id:"podman-issues"},"Podman Issues"),(0,o.kt)("h3",{id:"unable-to-see-any-image-or-container-after-downloading-podman-desktop"},"Unable to see any image or container after downloading Podman Desktop"),(0,o.kt)("h4",{id:"system-requirements"},"System Requirements"),(0,o.kt)("p",null,"The tool connects to Podman using the socket on the host on macOS and on a named pipe on Windows.\nThis is available only on Podman 4.0.2+\nSo, please check your version and update."),(0,o.kt)("p",null,"On Windows, the named pipe is ",(0,o.kt)("inlineCode",{parentName:"p"},"//./pipe/docker_engine")," when Docker Desktop is not installed. It will be solved by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/issues/13502"},"https://github.com/containers/podman/issues/13502")," / ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/pull/13655"},"https://github.com/containers/podman/pull/13655"),". During that time, you may start Docker Desktop so the named pipe is the one expected."),(0,o.kt)("h4",{id:"check-connection"},"Check connection"),(0,o.kt)("p",null,"Check at least a Podman machine is running on Windows & macOS:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"podman machine list\n")),(0,o.kt)("p",null,"And check a connection can be made with the CLI"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ podman run quay.io/podman/hello\n!... Hello Podman World ...!\n\n         .--"--.\n       / -     - \\\n      / (O)   (O) \\\n   ~~~| -=(,Y,)=- |\n    .---. /`  \\   |~~\n ~/  o  o \\~~~~.----. ~~\n  | =(X)= |~  / (O (O) \\\n   ~~~~~~~  ~| =(Y_)=-  |\n  ~~~~    ~~~|   U      |~~\n\nProject:   https://github.com/containers/podman\nWebsite:   https://podman.io\nDocuments: https://docs.podman.io\nTwitter:   @Podman_io\n')),(0,o.kt)("h3",{id:"unable-to-locate-podman-engine"},"Unable to locate Podman Engine"),(0,o.kt)("h4",{id:"issue"},"Issue:"),(0,o.kt)("p",null,"Despite having Podman Engine installed, you may receive an error as follows -\n",(0,o.kt)("inlineCode",{parentName:"p"},"Error: No such keg: /usr/local/Cellar/podman"),"\nor any similar error denoting that Podman Engine does not exist."),(0,o.kt)("h4",{id:"explanation"},"Explanation:"),(0,o.kt)("p",null,"The Podman Installer and Homebrew use different locations to store the Podman Engine files in the file system. For example, Podman Installer installs Podman Engine in the path ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/podman")," whereas Homebrew uses the path ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local")," for macOS Intel, ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/homebrew")," for Apple Silicon and ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/linuxbrew/.linuxbrew")," for Linux."),(0,o.kt)("h4",{id:"solution"},"Solution:"),(0,o.kt)("p",null,"To check where exactly is your Podman Engine installed, run the command-"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"which podman\n")),(0,o.kt)("p",null,"This returns the path where the Podman Engine would be installed. This would help determine further action."),(0,o.kt)("p",null,"For example, if you\u2019re looking to completely uninstall Podman Engine from your system for a fresh installation, running ",(0,o.kt)("inlineCode",{parentName:"p"},"which podman")," returns the exact path where Podman still exists. This could be the path where Podman Installer stores Podman Engine i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"/opt/podman"),". Once you know the path, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm -rf /opt/podman\n")),(0,o.kt)("p",null,"Or"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm -rf path-where-podman-exists\n")),(0,o.kt)("p",null,"Here, you would replace ",(0,o.kt)("inlineCode",{parentName:"p"},"path-where-podman-exists")," with the output of ",(0,o.kt)("inlineCode",{parentName:"p"},"which podman"),"."),(0,o.kt)("p",null,"You can now proceed for a fresh installation of Podman Desktop"),(0,o.kt)("h3",{id:"unable-to-see-information-about-active-containers"},"Unable to see information about active containers"),(0,o.kt)("h4",{id:"issue-1"},"Issue:"),(0,o.kt)("p",null,'In this scenario, the screen may be displaying "No Containers" as shown below despite active containers runnning in the background.\n',(0,o.kt)("img",{alt:"img",src:t(9590).Z,width:"2880",height:"1800"})),(0,o.kt)("h4",{id:"solution-1"},"Solution:"),(0,o.kt)("p",null,"There are three ways to work this out."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"To solve this issue, open the Terminal and run the following commands-")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"podman machine stop\n")),(0,o.kt)("p",null,"and then,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"podman machine start\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"If this does not work for you, you may proceed with the following commands-")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"podman machine rm\n")),(0,o.kt)("p",null,"and then,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"podman machine init\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"If both of the abovementioned steps don't work for you, run the following commands-")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~/.local/share/containers/podman\n")),(0,o.kt)("p",null,"and then,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"rm -rf ~/.config/containers/\n")),(0,o.kt)("p",null,"After this, you can start off again by initializing a new Podman Machine and loading up the containers."),(0,o.kt)("h3",{id:"unable-to-set-custom-binary-path-for-podman-on-macos"},"Unable to set custom binary path for Podman on macOS"),(0,o.kt)("h4",{id:"issue-2"},"Issue:"),(0,o.kt)("p",null,"When setting a custom binary path (under Preferences -> Custom binary path), Podman is unable to find ",(0,o.kt)("inlineCode",{parentName:"p"},"gvproxy")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"podman-mac-helper"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'Error: unable to start host networking: "could not find \\"gvproxy\\" in one of [/usr/local/opt/podman/libexec /opt/homebrew/bin /opt/homebrew/opt/podman/libexec /usr/local/bin /usr/local/libexec/podman /usr/local/lib/podman /usr/libexec/podman /usr/lib/podman $BINDIR/../libexec/podman].  To resolve this error, set the helper_binaries_dir key in the `[engine]` section of containers.conf to the directory containing your helper binaries."\n')),(0,o.kt)("h4",{id:"solution-2"},"Solution:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download ",(0,o.kt)("inlineCode",{parentName:"li"},"gvproxy")," from the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/gvisor-tap-vsock/releases"},"gvisor-tap-vsock release page"),"."),(0,o.kt)("li",{parentName:"ol"},"Build the ",(0,o.kt)("inlineCode",{parentName:"li"},"podman-mac-helper")," from the source code on the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/containers/podman/tree/main/cmd/podman-mac-helper"},"Podman GitHub page"),"."),(0,o.kt)("li",{parentName:"ol"},"Add the ",(0,o.kt)("inlineCode",{parentName:"li"},"helpers_binaries_dir")," entry to ",(0,o.kt)("inlineCode",{parentName:"li"},"~/.config/containers/conf"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'[containers]\n\nhelper_binaries_dir=["/Users/user/example_directory"]\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"NOTE"),": A pre-built binary will be added to the Podman release page so you do not have to build ",(0,o.kt)("inlineCode",{parentName:"p"},"podman-mac-helper"),". An ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/containers/podman/issues/16746"},"issue is open for this"),"."),(0,o.kt)("h3",{id:"warning-about-docker-compatibility-mode"},"Warning about Docker compatibility mode"),(0,o.kt)("h4",{id:"issue-3"},"Issue:"),(0,o.kt)("p",null,"When running the Podman provider, a warning shows regarding Docker compatibility mode on the dashboard:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"\u26a0\ufe0f Docker Socket Compatibility: Podman is not emulating the default Docker socket path: '/var/run/docker.sock'. Docker-specific tools may not work. See troubleshooting page on podman-desktop.io for more information.\n")),(0,o.kt)("p",null,"This may appear when either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Docker socket is not mounted correctly"),(0,o.kt)("li",{parentName:"ul"},"Docker Desktop is also being ran at the same time")),(0,o.kt)("h4",{id:"solution-3"},"Solution:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On macOS:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Stop Docker Desktop (if install)")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the ",(0,o.kt)("inlineCode",{parentName:"p"},"podman-mac-helper")," binary:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo podman-mac-helper install\n")),(0,o.kt)("p",{parentName:"li"},"for additional options please run the command:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo podman-mac-helper install --help\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Restart the Podman machine (the default Docker socket path will be recreated and Podman will emulate it)"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"On Linux / Windows:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop Docker Desktop (if installed)"),(0,o.kt)("li",{parentName:"ol"},"Restart the Podman machine (the default Docker socket path will be recreated and Podman will emulate it)")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note:")," If Docker Desktop is started again, it will automatically re-alias the default Docker socket location and the Podman compatibilty warning will re-appear."),(0,o.kt)("h2",{id:"code-ready-containers"},"Code Ready Containers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Check that Podman preset is defined. (",(0,o.kt)("inlineCode",{parentName:"li"},"crc config get preset"),")"),(0,o.kt)("li",{parentName:"ul"},"Check that ",(0,o.kt)("inlineCode",{parentName:"li"},"crc")," binary is available in the user PATH (",(0,o.kt)("inlineCode",{parentName:"li"},"/usr/local/bin/crc"),")"),(0,o.kt)("li",{parentName:"ul"},"Check that ",(0,o.kt)("inlineCode",{parentName:"li"},"crc setup --check-only")," is running without errors.")),(0,o.kt)("h2",{id:"other-issues"},"Other Issues"),(0,o.kt)("h3",{id:"fixing-corrupted-podman-machine-in-windows"},"Fixing corrupted Podman Machine in Windows"),(0,o.kt)("p",null,"If at all you are not able to stop your Podman Machine, you will find such an error in the Logs-\n",(0,o.kt)("inlineCode",{parentName:"p"},"Error: Error stopping sysd: exit status 1")),(0,o.kt)("p",null,"It is highly unlikely that you may be stuck in such a situation but if you are, here's a quick fix for it."),(0,o.kt)("p",null,"Assuming the name of the Podman Machine to be ",(0,o.kt)("inlineCode",{parentName:"p"},"my-machine"),", run the following commands in the terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wsl --list\n")),(0,o.kt)("p",null,"This shall display a list of active distributions i.e. ",(0,o.kt)("inlineCode",{parentName:"p"},"my-machine")," in this case."),(0,o.kt)("p",null,"Then,"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"wsl --unregister my-machine\n")),(0,o.kt)("p",null,"(Replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"my-machine")," with the name that is displayed under ",(0,o.kt)("inlineCode",{parentName:"p"},"wsl --list")," for your Podman Machine)"),(0,o.kt)("p",null,"This will stop the Podman Machine for you."),(0,o.kt)("h3",{id:"podman-machine-on-apple-silicon"},"Podman machine on Apple Silicon"),(0,o.kt)("h4",{id:"issue-4"},"Issue"),(0,o.kt)("p",null,"If you are using an Apple Silicon and brew, you might encounter the following error when starting Podman from Podman Desktop"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Error: qemu exited unexpectedly with exit code 1, stderr: qemu-system-x86_64: invalid accelerator hvf\nqemu-system-x86_64: falling back to tcg\nqemu-system-x86_64: unable to find CPU model 'host'\n")),(0,o.kt)("h4",{id:"explanation-1"},"Explanation"),(0,o.kt)("p",null,"Podman machine is running as a ",(0,o.kt)("inlineCode",{parentName:"p"},"x86_64")," process and it could be due to a dual install of homebrew: one for ",(0,o.kt)("inlineCode",{parentName:"p"},"x86_64")," and one for ",(0,o.kt)("inlineCode",{parentName:"p"},"arm64"),"."),(0,o.kt)("h4",{id:"solution-4"},"Solution"),(0,o.kt)("p",null,"You can"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Uninstall Podman machine on your ",(0,o.kt)("inlineCode",{parentName:"li"},"x86_64")," brew install (for example from a terminal running under rosetta) ",(0,o.kt)("inlineCode",{parentName:"li"},"brew uninstall podman-machine")),(0,o.kt)("li",{parentName:"ol"},"or uninstall brew ",(0,o.kt)("inlineCode",{parentName:"li"},"x86_64")," as most brew receipe have now arm64 support: follow ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/homebrew/install#uninstall-homebrew"},"these instructions")," from a terminal running under rosetta")),(0,o.kt)("p",null,"Then run a terminal in native mode (default) and install Podman machine ",(0,o.kt)("inlineCode",{parentName:"p"},"brew install podman-machine")),(0,o.kt)("p",null,"Finally clean the Podman machine VMs that had been previously created, and create new ones."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"podman machine rm podman-machine-default\npodman machine init\n")),(0,o.kt)("p",null,"You should be a happy camper from here."),(0,o.kt)("h3",{id:"the-terminal-session-attaches-to-podman-desktop-when-launching-it-from-the-command-line-in-windows"},"The terminal session attaches to Podman Desktop when launching it from the command line in Windows"),(0,o.kt)("h4",{id:"issue-5"},"Issue"),(0,o.kt)("p",null,"When you start Podman Desktop from the command line in Windows the terminal session attaches to it. You cannot quit the terminal because it will kill Podman Desktop as well."),(0,o.kt)("h4",{id:"solution-5"},"Solution"),(0,o.kt)("p",null,"Set the environment variable ",(0,o.kt)("inlineCode",{parentName:"p"},"ELECTRON_NO_ATTACH_CONSOLE")," to true before launching Podman Desktop."))}d.isMDXComponent=!0},9590:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/containers_error-2ddfc1139b9345ae8d06c597551608ad.png"}}]);