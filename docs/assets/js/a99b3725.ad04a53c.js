"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[829],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>y});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=l,y=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(y,a(a({ref:t},u),{},{components:r})):n.createElement(y,a({ref:t},u))}));function y(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5978:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),l=(r(7294),r(3905));const o={},a="File cell",i={unversionedId:"features/cells/body/body-cell-file",id:"features/cells/body/body-cell-file",title:"File cell",description:"Description",source:"@site/docs/features/cells/body/body-cell-file.mdx",sourceDirName:"features/cells/body",slug:"/features/cells/body/body-cell-file",permalink:"/obsidian-dashboards/features/cells/body/body-cell-file",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dashboards/tree/master/docusaurus/docs/features/cells/body/body-cell-file.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Embed cell",permalink:"/obsidian-dashboards/features/cells/body/body-cell-embed"},next:{title:"Formula cell",permalink:"/obsidian-dashboards/features/cells/body/body-cell-formula"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2}],u={toc:c},d="wrapper";function p(e){let{components:t,...r}=e;return(0,l.kt)(d,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"file-cell"},"File cell"),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"This cell renders an Obsidian link."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"When the menu opens, a list of vault notes will appear. Type any value to filter the list of notes. Notes are filtered using the fuzzy sort algorithm. You may use the ",(0,l.kt)("inlineCode",{parentName:"p"},"up")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"down")," arrow keys to navigate the list. Click an item or press ",(0,l.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"return")," to select the highlighted value. The value you choose will be saved."))}p.isMDXComponent=!0}}]);