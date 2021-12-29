"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[100],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,f=s["".concat(d,".").concat(m)]||s[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=s;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5835:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"VNavPathMode",title:"Enumeration: VNavPathMode",sidebar_label:"VNavPathMode",sidebar_position:0,custom_edit_url:null},d=void 0,u={unversionedId:"framework/enums/VNavPathMode",id:"framework/enums/VNavPathMode",isDocsHomePage:!1,title:"Enumeration: VNavPathMode",description:"The current VNAV path mode.",source:"@site/docs/framework/enums/VNavPathMode.md",sourceDirName:"framework/enums",slug:"/framework/enums/VNavPathMode",permalink:"/msfs-avionics-mirror/docs/framework/enums/VNavPathMode",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"VNavPathMode",title:"Enumeration: VNavPathMode",sidebar_label:"VNavPathMode",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"VNavMode",permalink:"/msfs-avionics-mirror/docs/framework/enums/VNavMode"},next:{title:"VorClass",permalink:"/msfs-avionics-mirror/docs/framework/enums/VorClass"}},c=[{value:"Enumeration members",id:"enumeration-members",children:[{value:"None",id:"none",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"PathActive",id:"pathactive",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"PathArmed",id:"patharmed",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"PathInvalid",id:"pathinvalid",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],p={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The current VNAV path mode."),(0,a.kt)("h2",{id:"enumeration-members"},"Enumeration members"),(0,a.kt)("h3",{id:"none"},"None"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"None")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"0")),(0,a.kt)("p",null,"VNAV path is not active."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"src/sdk/autopilot/VerticalNavigation.ts:17"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pathactive"},"PathActive"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"PathActive")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"2")),(0,a.kt)("p",null,"VNAV path is actively navigating."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"src/sdk/autopilot/VerticalNavigation.ts:23"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"patharmed"},"PathArmed"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"PathArmed")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"1")),(0,a.kt)("p",null,"VNAV path is armed for capture."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"src/sdk/autopilot/VerticalNavigation.ts:20"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"pathinvalid"},"PathInvalid"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"PathInvalid")," = ",(0,a.kt)("inlineCode",{parentName:"p"},"3")),(0,a.kt)("p",null,"The current VNAV path is not valid."),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,"src/sdk/autopilot/VerticalNavigation.ts:26"))}s.isMDXComponent=!0}}]);