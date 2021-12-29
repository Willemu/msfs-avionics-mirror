"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[8702],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return f}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function d(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=s(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||o;return n?t.createElement(m,a(a({ref:r},c),{},{components:n})):t.createElement(m,a({ref:r},c))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var d={};for(var l in r)hasOwnProperty.call(r,l)&&(d[l]=r[l]);d.originalType=e,d.mdxType="string"==typeof e?e:i,a[1]=d;for(var s=2;s<o;s++)a[s]=n[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7439:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var t=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],d={id:"XPDRSimVars",title:"Interface: XPDRSimVars",sidebar_label:"XPDRSimVars",sidebar_position:0,custom_edit_url:null},l=void 0,s={unversionedId:"framework/interfaces/XPDRSimVars",id:"framework/interfaces/XPDRSimVars",isDocsHomePage:!1,title:"Interface: XPDRSimVars",description:"Simvar definitions related to a transponder.",source:"@site/docs/framework/interfaces/XPDRSimVars.md",sourceDirName:"framework/interfaces",slug:"/framework/interfaces/XPDRSimVars",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/XPDRSimVars",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"XPDRSimVars",title:"Interface: XPDRSimVars",sidebar_label:"XPDRSimVars",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"VorFacility",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/VorFacility"},next:{title:"IntrinsicElements",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/FSComponent.JSX.IntrinsicElements"}},c=[{value:"Properties",id:"properties",children:[{value:"xpdrCode1",id:"xpdrcode1",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"xpdrIdent",id:"xpdrident",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"xpdrMode1",id:"xpdrmode1",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],p={toc:c};function u(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Simvar definitions related to a transponder."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"xpdrcode1"},"xpdrCode1"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"xpdrCode1"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"Transponder1 code"),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,"src/sdk/instruments/XPDR.ts:8"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"xpdrident"},"xpdrIdent"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"xpdrIdent"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")),(0,o.kt)("p",null,"Sending Ident"),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,"src/sdk/instruments/XPDR.ts:12"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"xpdrmode1"},"xpdrMode1"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"xpdrMode1"),": ",(0,o.kt)("a",{parentName:"p",href:"../enums/XPDRMode"},(0,o.kt)("inlineCode",{parentName:"a"},"XPDRMode"))),(0,o.kt)("p",null,"Transponder1 Mode"),(0,o.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,o.kt)("p",null,"src/sdk/instruments/XPDR.ts:10"))}u.isMDXComponent=!0}}]);