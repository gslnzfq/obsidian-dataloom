"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[173],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return a?r.createElement(f,i(i({ref:t},d),{},{components:a})):r.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7402:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var r=a(7462),n=a(7294),o=a(3905);function i(){return n.createElement("a",{href:"https://buymeacoffee.com/decaf_dev",target:"_blank",rel:"noopener"},n.createElement("img",{width:"175",src:"https://github.com/decaf-dev/obsidian-dataloom/assets/40307803/dee919ac-1065-4595-8511-7e7e7a962356",alt:"Buy me a coffee"}))}function s(){return n.createElement("div",{style:{display:"flex",columnGap:"10px",margin:"10px 0px"}},n.createElement("img",{src:"https://img.shields.io/badge/dynamic/json?logo=obsidian&color=%23483699&label=downloads&query=%24%5B%22notion-like-tables%22%5D.downloads&url=https%3A%2F%2Fraw.githubusercontent.com%2Fobsidianmd%2Fobsidian-releases%2Fmaster%2Fcommunity-plugin-stats.json",referrerPolicy:"no-referrer",height:"20"}),n.createElement("a",{href:"https://github.com/decaf-dev/obsidian-dataloom",target:"_blank",rel:"noopener"},n.createElement("img",{src:"https://img.shields.io/github/stars/decaf-dev/obsidian-dataloom?style=social",referrerPolicy:"no-referrer",alt:"Github stars"})))}const l=a.p+"assets/images/cover-c60d0c36dd11a1d9335e9a80349cac37.png",c={sidebar_position:1,hide_title:!0,sidebar_label:"Home",slug:"/"},d=void 0,p={unversionedId:"index",id:"index",title:"index",description:"Notice",source:"@site/docs/index.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/decaf-dev/obsidian-dataloom/tree/master/docusaurus/docs/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,hide_title:!0,sidebar_label:"Home",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Quick start",permalink:"/quick-start"}},u={},m=[{value:"Notice",id:"notice",level:2}],f={toc:m},b="wrapper";function h(e){let{components:t,...a}=e;return(0,o.kt)(b,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("img",{src:l,height:"200"}),(0,o.kt)("h2",{id:"notice"},"Notice"),(0,o.kt)("p",null,"DataLoom is ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/decaf-dev/obsidian-dataloom/issues/958"},"no longer maintained"),"."),(0,o.kt)("p",null,"Please ",(0,o.kt)("a",{parentName:"p",href:"https://dataloom.xyz/basics/export"},"export")," any existing DataLoom files into raw markdown format. This will make your data available with the native Obsidian table editor."),(0,o.kt)("p",null,"If you run into any problems with exporting, please open a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/decaf-dev/obsidian-dataloom/issues/new?assignees=&labels=bug"},"bug report"),". I will promptly respond and fix the issue."),(0,o.kt)("p",null,"As alternatives for DataLoom, I recommend the following plugins:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/decaf-dev/obsidian-vault-explorer"},"Vault Explorer"),' - This is my new plugin for viewing notes using their frontmatter properties. It mimics the "sources" feature of DataLoom.'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/marcusolsson/obsidian-projects"},"Projects")," - This is a mature and stable project manager that is implemented using native Obsidian UI.")),(0,o.kt)("p",null,"For general table usage, I recommend using the new ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=kl47U4CgyJg"},"Obsidian table editor")," released in 1.5.0."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"To check out the old README, click here."),(0,o.kt)(s,{mdxType:"Badges"}),(0,o.kt)("p",null,"DataLoom is an ",(0,o.kt)("a",{parentName:"p",href:"https://obsidian.md/"},"Obsidian.md")," plugin for desktop and mobile. It allows you to create databases similar to ",(0,o.kt)("a",{parentName:"p",href:"https://notion.so"},"Notion.so"),"."),(0,o.kt)("p",null,"With DataLoom, you can weave together data from diverse sources and display them in different views. Use this plugin if you want a straightforward way to create and manage databases and enhance the organization of your Obsidian vault."),(0,o.kt)(i,{mdxType:"BuyMeACoffee"})))}h.isMDXComponent=!0}}]);