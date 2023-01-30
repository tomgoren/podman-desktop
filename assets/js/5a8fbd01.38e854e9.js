"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4531],{5318:(t,n,e)=>{e.d(n,{Zo:()=>p,kt:()=>m});var i=e(7378);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function s(t,n){if(null==t)return{};var e,i,a=function(t,n){if(null==t)return{};var e,i,a={},o=Object.keys(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(i=0;i<o.length;i++)e=o[i],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var r=i.createContext({}),d=function(t){var n=i.useContext(r),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},p=function(t){var n=d(t.components);return i.createElement(r.Provider,{value:n},t.children)},c={inlineCode:"code",wrapper:function(t){var n=t.children;return i.createElement(i.Fragment,{},n)}},w=i.forwardRef((function(t,n){var e=t.components,a=t.mdxType,o=t.originalType,r=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),w=d(e),m=a,u=w["".concat(r,".").concat(m)]||w[m]||c[m]||o;return e?i.createElement(u,l(l({ref:n},p),{},{components:e})):i.createElement(u,l({ref:n},p))}));function m(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var o=e.length,l=new Array(o);l[0]=w;var s={};for(var r in n)hasOwnProperty.call(n,r)&&(s[r]=n[r]);s.originalType=t,s.mdxType="string"==typeof t?t:a,l[1]=s;for(var d=2;d<o;d++)l[d]=e[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,e)}w.displayName="MDXCreateElement"},3561:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=e(2685),a=(e(7378),e(5318));const o={sidebar_position:1,title:"Installing Podman Desktop on Windows",description:"How to install Podman on Windows.",tags:["podman-desktop","installing","windows"],keywords:["podman desktop","containers","podman","installing","installation","windows"]},l="Installing Podman Desktop using the Windows installer",s={unversionedId:"Installation/windows-install/index",id:"Installation/windows-install/index",title:"Installing Podman Desktop on Windows",description:"How to install Podman on Windows.",source:"@site/docs/Installation/windows-install/index.md",sourceDirName:"Installation/windows-install",slug:"/Installation/windows-install/",permalink:"/docs/Installation/windows-install/",draft:!1,editUrl:"https://github.com/containers/podman-desktop/tree/main/website/docs/Installation/windows-install/index.md",tags:[{label:"podman-desktop",permalink:"/docs/tags/podman-desktop"},{label:"installing",permalink:"/docs/tags/installing"},{label:"windows",permalink:"/docs/tags/windows"}],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Installing Podman Desktop on Windows",description:"How to install Podman on Windows.",tags:["podman-desktop","installing","windows"],keywords:["podman desktop","containers","podman","installing","installation","windows"]},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/docs/Installation/"},next:{title:"Installing Podman Desktop silently",permalink:"/docs/Installation/windows-install/installing-podman-desktop-silently-with-the-windows-installer"}},r={},d=[{value:"Procedure",id:"procedure",level:4},{value:"Next steps",id:"next-steps",level:4}],p={toc:d};function c(t){let{components:n,...e}=t;return(0,a.kt)("wrapper",(0,i.Z)({},p,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installing-podman-desktop-using-the-windows-installer"},"Installing Podman Desktop using the Windows installer"),(0,a.kt)("p",null,"Consider using this installation method if you don't require another method such as:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"windows-install/installing-podman-desktop-silently-with-the-windows-installer"},"Installing silently with the Windows installer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"windows-install/installing-podman-desktop-with-chocolatey"},"Installing with Chocolatey")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Installation/windows-install/installing-podman-desktop-with-scoop"},"Installing with Scoop")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/Installation/windows-install/installing-podman-desktop-with-winget"},"Installing with Winget"))),(0,a.kt)("h4",{id:"procedure"},"Procedure"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/downloads/windows"},"Download the Windows installer"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the downloaded file to start the Podman Desktop installer."))),(0,a.kt)("h4",{id:"next-steps"},"Next steps"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"windows-install/installing-podman-with-podman-desktop"},"Installing Podman")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/getting-started/getting-started"},"Getting Started with Podman Desktop"))))}c.isMDXComponent=!0}}]);