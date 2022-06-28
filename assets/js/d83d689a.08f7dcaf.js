"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[68],{5318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var a=t(7378);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=o,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,r=new Array(i);r[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=t[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6766:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return m}});var a=t(5773),o=t(808),i=(t(7378),t(5318)),r=["components"],l={sidebar_position:3},s="MacOS",c={unversionedId:"Installation/macos-install",id:"Installation/macos-install",title:"MacOS",description:"Installing Podman Desktop on MacOS using .dmg file",source:"@site/docs/Installation/macos-install.md",sourceDirName:"Installation",slug:"/Installation/macos-install",permalink:"/docs/Installation/macos-install",editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/Installation/macos-install.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},p={},m=[{value:"Installing Podman Desktop on MacOS using .dmg file",id:"installing-podman-desktop-on-macos-using-dmg-file",level:2},{value:"Installing Podman Desktop on MacOS using brew.",id:"installing-podman-desktop-on-macos-using-brew",level:2},{value:"1. Install Podman Container Engine",id:"1-install-podman-container-engine",level:3},{value:"2. Initialize &amp; Start the Podman Machine",id:"2-initialize--start-the-podman-machine",level:3},{value:"3. Install Podman Desktop Application for MacOS",id:"3-install-podman-desktop-application-for-macos",level:3}],u={toc:m};function d(e){var n=e.components,t=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"macos"},"MacOS"),(0,i.kt)("h2",{id:"installing-podman-desktop-on-macos-using-dmg-file"},"Installing Podman Desktop on MacOS using .dmg file"),(0,i.kt)("p",null,"If you already have a Podman machine up and running, you can check out the ",(0,i.kt)("a",{parentName:"p",href:"/downloads/macos"},"Downloads")," section of this website to get the applicable .dmg file depending on your Mac Hardware Architecture (i.e. Intel or Apple M1)."),(0,i.kt)("p",null,"Simply download the file from the ",(0,i.kt)("a",{parentName:"p",href:"/downloads/macos"},"Downloads")," section and open it in your machine to install Podman Desktop."),(0,i.kt)("h2",{id:"installing-podman-desktop-on-macos-using-brew"},"Installing Podman Desktop on MacOS using ",(0,i.kt)("a",{parentName:"h2",href:"https://brew.sh/"},"brew"),"."),(0,i.kt)("p",null,"The following instructions will help you install Podman Desktop on your Mac through ",(0,i.kt)("a",{parentName:"p",href:"https://brew.sh/"},"Homebrew"),". So make sure you have that installed and set up. After which, you can install Podman Desktop in 3 simple steps."),(0,i.kt)("h3",{id:"1-install-podman-container-engine"},"1. Install Podman Container Engine"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew install podman \n")),(0,i.kt)("p",null,"In case you have Podman already installed, make sure it is up-to-date. "),(0,i.kt)("h3",{id:"2-initialize--start-the-podman-machine"},"2. Initialize & Start the Podman Machine"),(0,i.kt)("p",null,"On Mac, each Podman machine is backed by a ",(0,i.kt)("a",{parentName:"p",href:"https://qemu.org"},"QEMU"),"-based virtual machine. All the tasks related to Podman are executed within this Virtual Machine (VM) as they remotely communicate with the podman service running in the VM."),(0,i.kt)("p",null,"To initialize the machine, the command is"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"podman machine init\n")),(0,i.kt)("p",null,"After which, you can start the machine with the command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"podman machine start\n")),(0,i.kt)("h3",{id:"3-install-podman-desktop-application-for-macos"},"3. Install Podman Desktop Application for MacOS"),(0,i.kt)("p",null,"After the Podman Machine is initialized and started, you can work with it using the Podman Desktop Application. To install the same, simply run the command below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"brew install podman-desktop\n")),(0,i.kt)("p",null,"After the command is executed, you can find the Podman Desktop Application within the Applications directory of the MacOS."))}d.isMDXComponent=!0}}]);