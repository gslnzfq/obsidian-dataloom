"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[358],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),y=o,b=p["".concat(l,".").concat(y)]||p[y]||d[y]||a;return n?r.createElement(b,i(i({ref:t},u),{},{components:n})):r.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:2},i="Keyboard navigation",s={unversionedId:"basics/keyboard-navigation",id:"basics/keyboard-navigation",title:"Keyboard navigation",description:"Navigate focusable elements using the tab button, arrow keys, and enter button on your keyboard. An element is focused when it has an accent border around it. This is purple in the default Obsidian theme.",source:"@site/docs/basics/keyboard-navigation.mdx",sourceDirName:"basics",slug:"/basics/keyboard-navigation",permalink:"/basics/keyboard-navigation",draft:!1,editUrl:"https://github.com/trey-wallis/obsidian-dataloom/tree/master/docusaurus/docs/basics/keyboard-navigation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Menu system",permalink:"/basics/menu-system"},next:{title:"Hot keys",permalink:"/basics/hot-keys"}},l={},c=[{value:"Type without clicking",id:"type-without-clicking",level:2},{value:"Open a menu",id:"open-a-menu",level:2},{value:"Delete cell contents",id:"delete-cell-contents",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"keyboard-navigation"},"Keyboard navigation"),(0,o.kt)("p",null,"Navigate focusable elements using the tab button, arrow keys, and enter button on your keyboard. An element is focused when it has an accent border around it. This is purple in the default Obsidian theme."),(0,o.kt)("h2",{id:"type-without-clicking"},"Type without clicking"),(0,o.kt)("p",null,"If a body cell is focused, you may press any key on your keyboard. The cell edit menu will then open and the key that was pressed will be appended to the cell input."),(0,o.kt)("h2",{id:"open-a-menu"},"Open a menu"),(0,o.kt)("p",null,"If an element is focused, you may open its menu by pressing the ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," key."),(0,o.kt)("h2",{id:"delete-cell-contents"},"Delete cell contents"),(0,o.kt)("p",null,"If a body cell is focused, you may delete its contents by pressing ",(0,o.kt)("inlineCode",{parentName:"p"},"delete")," on your keyboard"))}d.isMDXComponent=!0}}]);