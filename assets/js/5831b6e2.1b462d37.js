"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[7034],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5578:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"TCASSensitivity",title:"Interface: TCASSensitivity",sidebar_label:"TCASSensitivity",sidebar_position:0,custom_edit_url:null},p=void 0,c={unversionedId:"framework/interfaces/TCASSensitivity",id:"framework/interfaces/TCASSensitivity",isDocsHomePage:!1,title:"Interface: TCASSensitivity",description:"Sensitivity settings for TCAS.",source:"@site/docs/framework/interfaces/TCASSensitivity.md",sourceDirName:"framework/interfaces",slug:"/framework/interfaces/TCASSensitivity",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/TCASSensitivity",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"TCASSensitivity",title:"Interface: TCASSensitivity",sidebar_label:"TCASSensitivity",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"TCASIntruder",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/TCASIntruder"},next:{title:"ThrottledTaskQueueHandler",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/ThrottledTaskQueueHandler"}},s=[{value:"Implemented by",id:"implemented-by",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"lookaheadTime",id:"lookaheadtime",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"protectedHeight",id:"protectedheight",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"protectedRadius",id:"protectedradius",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],d={toc:s};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Sensitivity settings for TCAS."),(0,a.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../classes/AbstractTCASSensitivity"},(0,a.kt)("inlineCode",{parentName:"a"},"AbstractTCASSensitivity")))),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"lookaheadtime"},"lookaheadTime"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"lookaheadTime"),": ",(0,a.kt)("a",{parentName:"p",href:"Subscribable"},(0,a.kt)("inlineCode",{parentName:"a"},"Subscribable")),"<",(0,a.kt)("a",{parentName:"p",href:"NumberUnitInterface"},(0,a.kt)("inlineCode",{parentName:"a"},"NumberUnitInterface")),"<",(0,a.kt)("a",{parentName:"p",href:"../enums/UnitFamily#duration"},(0,a.kt)("inlineCode",{parentName:"a"},"Duration")),", ",(0,a.kt)("a",{parentName:"p",href:"Unit"},(0,a.kt)("inlineCode",{parentName:"a"},"Unit")),"<",(0,a.kt)("a",{parentName:"p",href:"../enums/UnitFamily#duration"},(0,a.kt)("inlineCode",{parentName:"a"},"Duration")),">",">",">"),(0,a.kt)("p",null,"A subscribable which provides the lookahead time for TCA."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"src/sdk/traffic/TCAS.ts:126"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"protectedheight"},"protectedHeight"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"protectedHeight"),": ",(0,a.kt)("a",{parentName:"p",href:"Subscribable"},(0,a.kt)("inlineCode",{parentName:"a"},"Subscribable")),"<",(0,a.kt)("a",{parentName:"p",href:"NumberUnitInterface"},(0,a.kt)("inlineCode",{parentName:"a"},"NumberUnitInterface")),"<",(0,a.kt)("a",{parentName:"p",href:"../enums/UnitFamily#distance"},(0,a.kt)("inlineCode",{parentName:"a"},"Distance")),", ",(0,a.kt)("a",{parentName:"p",href:"Unit"},(0,a.kt)("inlineCode",{parentName:"a"},"Unit")),"<",(0,a.kt)("a",{parentName:"p",href:"../enums/UnitFamily#distance"},(0,a.kt)("inlineCode",{parentName:"a"},"Distance")),">",">",">"),(0,a.kt)("p",null,"A subscribable which provides the half-height of the own airplane's protected zone."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"src/sdk/traffic/TCAS.ts:132"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"protectedradius"},"protectedRadius"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"protectedRadius"),": ",(0,a.kt)("a",{parentName:"p",href:"Subscribable"},(0,a.kt)("inlineCode",{parentName:"a"},"Subscribable")),"<",(0,a.kt)("a",{parentName:"p",href:"NumberUnitInterface"},(0,a.kt)("inlineCode",{parentName:"a"},"NumberUnitInterface")),"<",(0,a.kt)("a",{parentName:"p",href:"../enums/UnitFamily#distance"},(0,a.kt)("inlineCode",{parentName:"a"},"Distance")),", ",(0,a.kt)("a",{parentName:"p",href:"Unit"},(0,a.kt)("inlineCode",{parentName:"a"},"Unit")),"<",(0,a.kt)("a",{parentName:"p",href:"../enums/UnitFamily#distance"},(0,a.kt)("inlineCode",{parentName:"a"},"Distance")),">",">",">"),(0,a.kt)("p",null,"A subscribable which provides the radius of the own airplane's protected zone."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"src/sdk/traffic/TCAS.ts:129"))}u.isMDXComponent=!0}}]);