"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[199],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9679:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const l={},i="Date cell",o={unversionedId:"views/table/cells/date",id:"views/table/cells/date",title:"Date cell",description:"Description",source:"@site/docs/views/table/cells/date.mdx",sourceDirName:"views/table/cells",slug:"/views/table/cells/date",permalink:"/views/table/cells/date",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dataloom/tree/master/docusaurus/docs/views/table/cells/date.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creation time cell",permalink:"/views/table/cells/creation-time"},next:{title:"Embed cell",permalink:"/views/table/cells/embed"}},c={},s=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Date format",id:"date-format",level:3},{value:"Settings",id:"settings",level:2}],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"date-cell"},"Date cell"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This cell renders a date."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Select a date cell to open the date cell edit menu. Type a date value. Press ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," for it to be saved. If the value is invalid, a red outline will appear around the input. Enter a valid value and press ",(0,a.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," for the value to be saved."),(0,a.kt)("p",null,"To close the menu without saving, click outside of the menu or press ",(0,a.kt)("inlineCode",{parentName:"p"},"esc"),"."),(0,a.kt)("h3",{id:"date-format"},"Date format"),(0,a.kt)("p",null,"The date format is how the date will be displayed. Changing the date format for a cell will change the date format for all cells in the same column."),(0,a.kt)("p",null,"You may clear the date by pressing the ",(0,a.kt)("inlineCode",{parentName:"p"},"clear")," button."),(0,a.kt)("h2",{id:"settings"},"Settings"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"../../../views/table/column-settings#linking-loom-files#date-format"},"Date format")))}d.isMDXComponent=!0}}]);