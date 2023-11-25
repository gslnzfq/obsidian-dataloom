"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=u(n),p=r,b=d["".concat(c,".").concat(p)]||d[p]||m[p]||l;return n?o.createElement(b,i(i({ref:t},s),{},{components:n})):o.createElement(b,i({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=p;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[d]="string"==typeof e?e:r,i[1]=a;for(var u=2;u<l;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>a,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const l={sidebar_position:1},i="Columns",a={unversionedId:"views/table/columns",id:"views/table/columns",title:"Columns",description:"Add column",source:"@site/docs/views/table/columns.mdx",sourceDirName:"views/table",slug:"/views/table/columns",permalink:"/views/table/columns",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dataloom/tree/master/docusaurus/docs/views/table/columns.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Import",permalink:"/basics/import"},next:{title:"Rows",permalink:"/views/table/rows"}},c={},u=[{value:"Add column",id:"add-column",level:2},{value:"Delete column",id:"delete-column",level:2},{value:"Column visbility",id:"column-visbility",level:2},{value:"Resize column",id:"resize-column",level:2},{value:"Resize by dragging",id:"resize-by-dragging",level:3},{value:"Fit content",id:"fit-content",level:3},{value:"Reorder columns",id:"reorder-columns",level:2}],s={toc:u},d="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"columns"},"Columns"),(0,r.kt)("h2",{id:"add-column"},"Add column"),(0,r.kt)("p",null,"To add a column, click the plus button that is right of the last column of the table. A new column will be added. A new column always has the name ",(0,r.kt)("inlineCode",{parentName:"p"},"New Column"),". You can click on the column header to edit the name of the column."),(0,r.kt)("h2",{id:"delete-column"},"Delete column"),(0,r.kt)("p",null,"To delete a column, open a column header and click ",(0,r.kt)("strong",{parentName:"p"},"Delete")," option."),(0,r.kt)("h2",{id:"column-visbility"},"Column visbility"),(0,r.kt)("p",null,"To change the visibility of a column, click the ",(0,r.kt)("strong",{parentName:"p"},"Toggle")," button found in the upper right hand corner. You will see a switch button for every column. Toggle the switch to hide the column. Toggle it again to display it."),(0,r.kt)("h2",{id:"resize-column"},"Resize column"),(0,r.kt)("h3",{id:"resize-by-dragging"},"Resize by dragging"),(0,r.kt)("p",null,"Hover your mouse near the right border of the column header. An indicator will appear. Hold your mosue down and drag to resize the column."),(0,r.kt)("h3",{id:"fit-content"},"Fit content"),(0,r.kt)("p",null,"Hover your mouse between two column headers. An indicator will appear. Double click the indicator to resize the column to the max size of its content."),(0,r.kt)("h2",{id:"reorder-columns"},"Reorder columns"),(0,r.kt)("p",null,"TODO"))}m.isMDXComponent=!0}}]);