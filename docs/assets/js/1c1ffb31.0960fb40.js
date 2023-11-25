"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[23],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),u=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,f=p["".concat(c,".").concat(d)]||p[d]||s[d]||r;return n?l.createElement(f,o(o({ref:t},m),{},{components:n})):l.createElement(f,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<r;u++)o[u]=n[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},751:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>u});var l=n(7462),a=(n(7294),n(3905));const r={sidebar_position:3},o="Column calculations",i={unversionedId:"views/table/column-calculations",id:"views/table/column-calculations",title:"Column calculations",description:"Calculations can be preformed on all the cells in a column. Click the Calculate button at the bottom of a column. A menu will appear with a list of calculations that can be preformed on the column.",source:"@site/docs/views/table/column-calculations.mdx",sourceDirName:"views/table",slug:"/views/table/column-calculations",permalink:"/views/table/column-calculations",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dataloom/tree/master/docusaurus/docs/views/table/column-calculations.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Rows",permalink:"/views/table/rows"},next:{title:"Column settings",permalink:"/views/table/column-settings"}},c={},u=[{value:"General Calculations",id:"general-calculations",level:2},{value:"Numeric Calculations",id:"numeric-calculations",level:2}],m={toc:u},p="wrapper";function s(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"column-calculations"},"Column calculations"),(0,a.kt)("p",null,"Calculations can be preformed on all the cells in a column. Click the ",(0,a.kt)("inlineCode",{parentName:"p"},"Calculate")," button at the bottom of a column. A menu will appear with a list of calculations that can be preformed on the column."),(0,a.kt)("h2",{id:"general-calculations"},"General Calculations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"None")," - Do nothing"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Count all")," - The total number of cells"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Count values")," - The total number of values. This count each tag as a single value."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Count unique")," - The total number of unique values"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Count empty")," - The number of empty cells"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Count not empty")," - The number of non-empty cells"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Percent empty")," - The percentage of empty cells"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Percent not empty")," - The percentage of non-empty cells")),(0,a.kt)("h2",{id:"numeric-calculations"},"Numeric Calculations"),(0,a.kt)("p",null,"Numeric calculations can only be preformed on a column set to type ",(0,a.kt)("inlineCode",{parentName:"p"},"Number")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Sum")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Average")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Min")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Max")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Median")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Range"))))}s.isMDXComponent=!0}}]);