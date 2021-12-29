"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[1703],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),f=i,d=m["".concat(a,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:i,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7117:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return a},metadata:function(){return s},toc:function(){return u},default:function(){return m}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),l=["components"],c={id:"ClockEvents",title:"Interface: ClockEvents",sidebar_label:"ClockEvents",sidebar_position:0,custom_edit_url:null},a=void 0,s={unversionedId:"framework/interfaces/ClockEvents",id:"framework/interfaces/ClockEvents",isDocsHomePage:!1,title:"Interface: ClockEvents",description:"Events related to the clock.",source:"@site/docs/framework/interfaces/ClockEvents.md",sourceDirName:"framework/interfaces",slug:"/framework/interfaces/ClockEvents",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/ClockEvents",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ClockEvents",title:"Interface: ClockEvents",sidebar_label:"ClockEvents",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"CircleVector",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/CircleVector"},next:{title:"CollectionComponentProps",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/CollectionComponentProps"}},u=[{value:"Properties",id:"properties",children:[{value:"realTime",id:"realtime",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"simTime",id:"simtime",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],p={toc:u};function m(e){var t=e.components,r=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Events related to the clock."),(0,o.kt)("h2",{id:"properties"},"Properties"),(0,o.kt)("h3",{id:"realtime"},"realTime"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"realTime"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"A UNIX timestamp corresponding to the real-world (operating system) time."),(0,o.kt)("h4",{id:"defined-in"},"Defined in"),(0,o.kt)("p",null,"src/sdk/instruments/Clock.ts:9"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"simtime"},"simTime"),(0,o.kt)("p",null,"\u2022 ",(0,o.kt)("strong",{parentName:"p"},"simTime"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"number")),(0,o.kt)("p",null,"A UNIX timestamp corresponding to the simulation time."),(0,o.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,o.kt)("p",null,"src/sdk/instruments/Clock.ts:12"))}m.isMDXComponent=!0}}]);