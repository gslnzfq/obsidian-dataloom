"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,g=s["".concat(p,".").concat(u)]||s[u]||m[u]||l;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8100:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={},o="Create a snippet",i={unversionedId:"guides/create-a-snippet",id:"guides/create-a-snippet",title:"Create a snippet",description:"A snippet is a css file that overrides existing styles in Obsidian.",source:"@site/docs/guides/create-a-snippet.mdx",sourceDirName:"guides",slug:"/guides/create-a-snippet",permalink:"/guides/create-a-snippet",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dataloom/tree/master/docusaurus/docs/guides/create-a-snippet.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Omnisearch",permalink:"/integrations/omni-search"},next:{title:"Loom file",permalink:"/other/loom-file"}},p={},d=[{value:"Change the padding of cells",id:"change-the-padding-of-cells",level:2},{value:"Classes",id:"classes",level:2}],c={toc:d},s="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(s,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-snippet"},"Create a snippet"),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"https://help.obsidian.md/Extending+Obsidian/CSS+snippets"},"snippet")," is a ",(0,r.kt)("inlineCode",{parentName:"p"},"css")," file that overrides existing styles in Obsidian."),(0,r.kt)("h2",{id:"change-the-padding-of-cells"},"Change the padding of cells"),(0,r.kt)("p",null,"For example, if you wanted to change the padding size of cells, you could create a snippet that targets all of the cell containers"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"/* dataloom-padding-snippet.css */\n\n.dataloom-cell--header__inner-container {\n    padding: 10px;\n}\n\n.dataloom-cell--body__container {\n    padding: 20px 10px;\n}\n\n.dataloom-cell--footer__container {\n    padding: 20px 10px;\n}\n")),(0,r.kt)("h2",{id:"classes"},"Classes"),(0,r.kt)("p",null,"The following table is a list of various plugin classes that you may override."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Class"),(0,r.kt)("th",{parentName:"tr",align:null},"Element"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".dataloom-app")),(0,r.kt)("td",{parentName:"tr",align:null},"App")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".dataloom-option-bar")),(0,r.kt)("td",{parentName:"tr",align:null},"Option bar")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".dataloom-table")),(0,r.kt)("td",{parentName:"tr",align:null},"Table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".dataloom-cell--header")),(0,r.kt)("td",{parentName:"tr",align:null},"Header cell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".dataloom-cell--header__container")),(0,r.kt)("td",{parentName:"tr",align:null},"Header cell container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".dataloom-cell--header__inner-container")),(0,r.kt)("td",{parentName:"tr",align:null},"Header cell inner container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".dataloom-cell--body")),(0,r.kt)("td",{parentName:"tr",align:null},"Body cell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".dataloom-cell--body__container")),(0,r.kt)("td",{parentName:"tr",align:null},"Body cell container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".dataloom-cell--footer")),(0,r.kt)("td",{parentName:"tr",align:null},"Footer cell")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".dataloom-cell--footer__container")),(0,r.kt)("td",{parentName:"tr",align:null},"Footer cell container")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".dataloom-button")),(0,r.kt)("td",{parentName:"tr",align:null},"Button")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},".dataloom-p")),(0,r.kt)("td",{parentName:"tr",align:null},"Text")))))}m.isMDXComponent=!0}}]);