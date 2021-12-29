"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[1993],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return u}});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=i.createContext({}),p=function(e){var n=i.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=p(e.components);return i.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),h=p(t),u=r,f=h["".concat(d,".").concat(u)]||h[u]||c[u]||l;return t?i.createElement(f,a(a({ref:n},s),{},{components:t})):i.createElement(f,a({ref:n},s))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,a=new Array(l);a[0]=h;var o={};for(var d in n)hasOwnProperty.call(n,d)&&(o[d]=n[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},1069:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return s},default:function(){return h}});var i=t(7462),r=t(3366),l=(t(7294),t(3905)),a=["components"],o={id:"MetarPhenomenon",title:"Interface: MetarPhenomenon",sidebar_label:"MetarPhenomenon",sidebar_position:0,custom_edit_url:null},d=void 0,p={unversionedId:"framework/interfaces/MetarPhenomenon",id:"framework/interfaces/MetarPhenomenon",isDocsHomePage:!1,title:"Interface: MetarPhenomenon",description:"A METAR weather phenomenon.",source:"@site/docs/framework/interfaces/MetarPhenomenon.md",sourceDirName:"framework/interfaces",slug:"/framework/interfaces/MetarPhenomenon",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/MetarPhenomenon",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"MetarPhenomenon",title:"Interface: MetarPhenomenon",sidebar_label:"MetarPhenomenon",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"MetarCloudLayer",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/MetarCloudLayer"},next:{title:"MockEventTypes",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/MockEventTypes"}},s=[{value:"Properties",id:"properties",children:[{value:"blowing",id:"blowing",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"drifting",id:"drifting",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"freezing",id:"freezing",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"intensity",id:"intensity",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"partial",id:"partial",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"patches",id:"patches",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"phenom",id:"phenom",children:[{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"shallow",id:"shallow",children:[{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"tempo",id:"tempo",children:[{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3},{value:"vicinity",id:"vicinity",children:[{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3}],level:2}],c={toc:s};function h(e){var n=e.components,t=(0,r.Z)(e,a);return(0,l.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"A METAR weather phenomenon."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"blowing"},"blowing"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"blowing"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Whether this phenomenon has the blowing modifier."),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,"src/sdk/navigation/Facilities.ts:1089"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"drifting"},"drifting"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"drifting"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Whether this phenomenon has the drifting modifier."),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,"src/sdk/navigation/Facilities.ts:1095"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"freezing"},"freezing"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"freezing"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Whether this phenomenon has the freezing modifier."),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,"src/sdk/navigation/Facilities.ts:1092"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"intensity"},"intensity"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"intensity"),": ",(0,l.kt)("a",{parentName:"p",href:"../enums/MetarPhenomenonIntensity"},(0,l.kt)("inlineCode",{parentName:"a"},"MetarPhenomenonIntensity"))),(0,l.kt)("p",null,"The intensity of this phenomenon."),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,"src/sdk/navigation/Facilities.ts:1086"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"partial"},"partial"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"partial"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Whether this phenomenon has the partial modifier."),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,"src/sdk/navigation/Facilities.ts:1101"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"patches"},"patches"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"patches"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Whether this phenomenon has the patches modifier."),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,"src/sdk/navigation/Facilities.ts:1107"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"phenom"},"phenom"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"phenom"),": ",(0,l.kt)("a",{parentName:"p",href:"../enums/MetarPhenomenonType"},(0,l.kt)("inlineCode",{parentName:"a"},"MetarPhenomenonType"))),(0,l.kt)("p",null,"The type of this phenomenon."),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,"src/sdk/navigation/Facilities.ts:1081"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"shallow"},"shallow"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"shallow"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Whether this phenomenon has the shallow modifier."),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,"src/sdk/navigation/Facilities.ts:1104"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"tempo"},"tempo"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"tempo"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Whether this phenomenon has the temporary modifier."),(0,l.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,l.kt)("p",null,"src/sdk/navigation/Facilities.ts:1110"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"vicinity"},"vicinity"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"vicinity"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Whether this phenomenon has the vicinity modifier."),(0,l.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,l.kt)("p",null,"src/sdk/navigation/Facilities.ts:1098"))}h.isMDXComponent=!0}}]);