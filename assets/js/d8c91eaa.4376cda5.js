"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[1806],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return d}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),f=p(t),d=i,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||l;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,a=new Array(l);a[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3451:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var r=t(7462),i=t(3366),l=(t(7294),t(3905)),a=["components"],o={id:"FlightPlanResponseEvent",title:"Interface: FlightPlanResponseEvent",sidebar_label:"FlightPlanResponseEvent",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"framework/interfaces/FlightPlanResponseEvent",id:"framework/interfaces/FlightPlanResponseEvent",isDocsHomePage:!1,title:"Interface: FlightPlanResponseEvent",description:"An event generated when an instrument responds to a full",source:"@site/docs/framework/interfaces/FlightPlanResponseEvent.md",sourceDirName:"framework/interfaces",slug:"/framework/interfaces/FlightPlanResponseEvent",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/FlightPlanResponseEvent",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"FlightPlanResponseEvent",title:"Interface: FlightPlanResponseEvent",sidebar_label:"FlightPlanResponseEvent",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"FlightPlanRequestEvent",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/FlightPlanRequestEvent"},next:{title:"FlightPlanSegmentEvent",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/FlightPlanSegmentEvent"}},c=[{value:"Properties",id:"properties",children:[{value:"flightPlans",id:"flightplans",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"planIndex",id:"planindex",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:c};function f(e){var n=e.components,t=(0,i.Z)(e,a);return(0,l.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"An event generated when an instrument responds to a full\nflight plan set request."),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"flightplans"},"flightPlans"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"flightPlans"),": ",(0,l.kt)("a",{parentName:"p",href:"../classes/FlightPlan"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightPlan")),"[]"),(0,l.kt)("p",null,"The plans contained by the flight planner."),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,"src/sdk/flightplan/FlightPlanner.ts:168"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"planindex"},"planIndex"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"planIndex"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"The index of the active plan."),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,"src/sdk/flightplan/FlightPlanner.ts:171"))}f.isMDXComponent=!0}}]);