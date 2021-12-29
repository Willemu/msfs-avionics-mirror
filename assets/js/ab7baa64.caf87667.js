"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[7463],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return s}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=d(a),s=r,u=c["".concat(p,".").concat(s)]||c[s]||k[s]||l;return a?n.createElement(u,i(i({ref:t},m),{},{components:a})):n.createElement(u,i({ref:t},m))}));function s(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6005:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],o={id:"AbstractFlightPathLegCalculator",title:"Class: AbstractFlightPathLegCalculator",sidebar_label:"AbstractFlightPathLegCalculator",sidebar_position:0,custom_edit_url:null},p=void 0,d={unversionedId:"framework/classes/AbstractFlightPathLegCalculator",id:"framework/classes/AbstractFlightPathLegCalculator",isDocsHomePage:!1,title:"Class: AbstractFlightPathLegCalculator",description:"Abstract implementation of FlightPathLegCalculator.",source:"@site/docs/framework/classes/AbstractFlightPathLegCalculator.md",sourceDirName:"framework/classes",slug:"/framework/classes/AbstractFlightPathLegCalculator",permalink:"/msfs-avionics-mirror/docs/framework/classes/AbstractFlightPathLegCalculator",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"AbstractFlightPathLegCalculator",title:"Class: AbstractFlightPathLegCalculator",sidebar_label:"AbstractFlightPathLegCalculator",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"XPDRMode",permalink:"/msfs-avionics-mirror/docs/framework/enums/XPDRMode"},next:{title:"AbstractSubscribable",permalink:"/msfs-avionics-mirror/docs/framework/classes/AbstractSubscribable"}},m=[{value:"Hierarchy",id:"hierarchy",children:[],level:2},{value:"Implements",id:"implements",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"facilityCache",id:"facilitycache",children:[],level:3},{value:"skipWhenActive",id:"skipwhenactive",children:[],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"calculate",id:"calculate",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Implementation of",id:"implementation-of",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"calculateVectors",id:"calculatevectors",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"getLegTrueCourse",id:"getlegtruecourse",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"getPositionFromIcao",id:"getpositionfromicao",children:[{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"getTerminatorPosition",id:"getterminatorposition",children:[{value:"Parameters",id:"parameters-5",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"resolveIngressToEgress",id:"resolveingresstoegress",children:[{value:"Parameters",id:"parameters-6",children:[],level:4},{value:"Returns",id:"returns-5",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"shouldSkipWhenActive",id:"shouldskipwhenactive",children:[{value:"Parameters",id:"parameters-7",children:[],level:4},{value:"Returns",id:"returns-6",children:[],level:4},{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3}],level:2}],k={toc:m};function c(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Abstract implementation of FlightPathLegCalculator."),(0,l.kt)("h2",{id:"hierarchy"},"Hierarchy"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("inlineCode",{parentName:"strong"},"AbstractFlightPathLegCalculator"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"DiscontinuityLegCalculator"},(0,l.kt)("inlineCode",{parentName:"a"},"DiscontinuityLegCalculator"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"TrackToFixLegCalculator"},(0,l.kt)("inlineCode",{parentName:"a"},"TrackToFixLegCalculator"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"DirectToFixLegCalculator"},(0,l.kt)("inlineCode",{parentName:"a"},"DirectToFixLegCalculator"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"TurnToFixLegCalculator"},(0,l.kt)("inlineCode",{parentName:"a"},"TurnToFixLegCalculator"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"CircleInterceptLegCalculator"},(0,l.kt)("inlineCode",{parentName:"a"},"CircleInterceptLegCalculator"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"TrackFromFixLegCalculator"},(0,l.kt)("inlineCode",{parentName:"a"},"TrackFromFixLegCalculator"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"CourseToFixLegCalculator"},(0,l.kt)("inlineCode",{parentName:"a"},"CourseToFixLegCalculator"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"ProcedureTurnLegCalculator"},(0,l.kt)("inlineCode",{parentName:"a"},"ProcedureTurnLegCalculator"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"CourseToManualLegCalculator"},(0,l.kt)("inlineCode",{parentName:"a"},"CourseToManualLegCalculator"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"CourseToAltitudeLegCalculator"},(0,l.kt)("inlineCode",{parentName:"a"},"CourseToAltitudeLegCalculator"))),(0,l.kt)("p",{parentName:"li"},"\u21b3 ",(0,l.kt)("a",{parentName:"p",href:"HoldLegCalculator"},(0,l.kt)("inlineCode",{parentName:"a"},"HoldLegCalculator"))))),(0,l.kt)("h2",{id:"implements"},"Implements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"../interfaces/FlightPathLegCalculator"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightPathLegCalculator")))),(0,l.kt)("h2",{id:"constructors"},"Constructors"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("strong",{parentName:"p"},"new AbstractFlightPathLegCalculator"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"facilityCache"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"skipWhenActive?"),")"),(0,l.kt)("p",null,"Constructor."),(0,l.kt)("h4",{id:"parameters"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"facilityCache")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Map"),"<",(0,l.kt)("inlineCode",{parentName:"td"},"string"),", ",(0,l.kt)("a",{parentName:"td",href:"../interfaces/Facility"},(0,l.kt)("inlineCode",{parentName:"a"},"Facility")),">"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"This calculator's cache of facilities.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"skipWhenActive")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"false")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether this calculator will skip calculations for active legs when the leg has already been calculated. False by default.")))),(0,l.kt)("h4",{id:"defined-in"},"Defined in"),(0,l.kt)("p",null,"src/sdk/flightplan/FlightPathLegCalculator.ts:70"),(0,l.kt)("h2",{id:"properties"},"Properties"),(0,l.kt)("h3",{id:"facilitycache"},"facilityCache"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"facilityCache"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,l.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,l.kt)("a",{parentName:"p",href:"../interfaces/Facility"},(0,l.kt)("inlineCode",{parentName:"a"},"Facility")),">"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"skipwhenactive"},"skipWhenActive"),(0,l.kt)("p",null,"\u2022 ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,l.kt)("strong",{parentName:"p"},"skipWhenActive"),": ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")," = ",(0,l.kt)("inlineCode",{parentName:"p"},"false")),(0,l.kt)("h2",{id:"methods"},"Methods"),(0,l.kt)("h3",{id:"calculate"},"calculate"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("strong",{parentName:"p"},"calculate"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"legs"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"calculateIndex"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"activeLegIndex"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"state"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"resolveIngressToEgress?"),"): ",(0,l.kt)("a",{parentName:"p",href:"../interfaces/LegCalculations"},(0,l.kt)("inlineCode",{parentName:"a"},"LegCalculations"))),(0,l.kt)("p",null,"Calculates flight path vectors for a flight plan leg and adds the calculations to the leg."),(0,l.kt)("h4",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"legs")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../interfaces/LegDefinition"},(0,l.kt)("inlineCode",{parentName:"a"},"LegDefinition")),"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"A sequence of flight plan legs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"calculateIndex")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index of the leg to calculate.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"activeLegIndex")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index of the active leg.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../interfaces/FlightPathState"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightPathState"))),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"undefined")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The current flight path state.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"resolveIngressToEgress")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"boolean")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"true")),(0,l.kt)("td",{parentName:"tr",align:"left"},"-")))),(0,l.kt)("h4",{id:"returns"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../interfaces/LegCalculations"},(0,l.kt)("inlineCode",{parentName:"a"},"LegCalculations"))),(0,l.kt)("p",null,"The flight plan leg calculations."),(0,l.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"../interfaces/FlightPathLegCalculator"},"FlightPathLegCalculator"),".",(0,l.kt)("a",{parentName:"p",href:"../interfaces/FlightPathLegCalculator#calculate"},"calculate")),(0,l.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,l.kt)("p",null,"src/sdk/flightplan/FlightPathLegCalculator.ts:126"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"calculatevectors"},"calculateVectors"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,l.kt)("inlineCode",{parentName:"p"},"Abstract")," ",(0,l.kt)("strong",{parentName:"p"},"calculateVectors"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"legs"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"calculateIndex"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"activeLegIndex"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"state"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Calculates flight path vectors for a flight plan leg."),(0,l.kt)("h4",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"legs")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../interfaces/LegDefinition"},(0,l.kt)("inlineCode",{parentName:"a"},"LegDefinition")),"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A sequence of flight plan legs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"calculateIndex")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index of the leg to calculate.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"activeLegIndex")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index of the active leg.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../interfaces/FlightPathState"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightPathState"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The current flight path state.")))),(0,l.kt)("h4",{id:"returns-1"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"The number of vectors added to the sequence."),(0,l.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,l.kt)("p",null,"src/sdk/flightplan/FlightPathLegCalculator.ts:200"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getlegtruecourse"},"getLegTrueCourse"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,l.kt)("strong",{parentName:"p"},"getLegTrueCourse"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"leg"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"point"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"Gets the true course for a flight plan leg. If the leg defines an origin or fix VOR facility, then the magnetic\nvariation defined at the VOR is used to adjust magnetic course, otherwise the computed magnetic variation for the\nspecified point is used."),(0,l.kt)("h4",{id:"parameters-3"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"leg")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../interfaces/FlightPlanLeg"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightPlanLeg"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"A flight plan leg.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"point")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../interfaces/LatLonInterface"},(0,l.kt)("inlineCode",{parentName:"a"},"LatLonInterface"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The location from which to get magnetic variation, if an origin VOR is not found.")))),(0,l.kt)("h4",{id:"returns-2"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"number")),(0,l.kt)("p",null,"the true course for the flight plan leg."),(0,l.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,l.kt)("p",null,"src/sdk/flightplan/FlightPathLegCalculator.ts:108"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getpositionfromicao"},"getPositionFromIcao"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,l.kt)("strong",{parentName:"p"},"getPositionFromIcao"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"icao"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"out"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"GeoPoint"},(0,l.kt)("inlineCode",{parentName:"a"},"GeoPoint"))),(0,l.kt)("p",null,"Gets a geographical position from an ICAO string."),(0,l.kt)("h4",{id:"parameters-4"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"icao")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"An ICAO string.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"out")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"GeoPoint"},(0,l.kt)("inlineCode",{parentName:"a"},"GeoPoint"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"A GeoPoint object to which to write the result.")))),(0,l.kt)("h4",{id:"returns-3"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"GeoPoint"},(0,l.kt)("inlineCode",{parentName:"a"},"GeoPoint"))),(0,l.kt)("p",null,"The geographical position corresponding to the ICAO string, or undefined if one could not be obtained."),(0,l.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,l.kt)("p",null,"src/sdk/flightplan/FlightPathLegCalculator.ts:79"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"getterminatorposition"},"getTerminatorPosition"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,l.kt)("strong",{parentName:"p"},"getTerminatorPosition"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"leg"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"icao"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"out"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"GeoPoint"},(0,l.kt)("inlineCode",{parentName:"a"},"GeoPoint"))),(0,l.kt)("p",null,"Gets the geographic position for a flight plan leg terminator."),(0,l.kt)("h4",{id:"parameters-5"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"leg")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../interfaces/FlightPlanLeg"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightPlanLeg"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"A flight plan leg.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"icao")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"string")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The ICAO string of the leg's terminator fix.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"out")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"GeoPoint"},(0,l.kt)("inlineCode",{parentName:"a"},"GeoPoint"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"A GeoPoint object to which to write the result.")))),(0,l.kt)("h4",{id:"returns-4"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,l.kt)("a",{parentName:"p",href:"GeoPoint"},(0,l.kt)("inlineCode",{parentName:"a"},"GeoPoint"))),(0,l.kt)("p",null,"The position of the leg terminator, or undefined if it could not be determined."),(0,l.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,l.kt)("p",null,"src/sdk/flightplan/FlightPathLegCalculator.ts:91"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"resolveingresstoegress"},"resolveIngressToEgress"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,l.kt)("strong",{parentName:"p"},"resolveIngressToEgress"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"legCalc"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("p",null,"Calculates the ingress to egress vectors for a flight plan leg and adds them to a leg calculation."),(0,l.kt)("h4",{id:"parameters-6"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"legCalc")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../interfaces/LegCalculations"},(0,l.kt)("inlineCode",{parentName:"a"},"LegCalculations"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The calculations for a flight plan leg.")))),(0,l.kt)("h4",{id:"returns-5"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"void")),(0,l.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,l.kt)("p",null,"src/sdk/flightplan/FlightPathLegCalculator.ts:206"),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"shouldskipwhenactive"},"shouldSkipWhenActive"),(0,l.kt)("p",null,"\u25b8 ",(0,l.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,l.kt)("strong",{parentName:"p"},"shouldSkipWhenActive"),"(",(0,l.kt)("inlineCode",{parentName:"p"},"legs"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"calculateIndex"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"activeLegIndex"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"state"),"): ",(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Checks whether vector calculations should be skipped when the leg to calculate is the active leg."),(0,l.kt)("h4",{id:"parameters-7"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"legs")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../interfaces/LegDefinition"},(0,l.kt)("inlineCode",{parentName:"a"},"LegDefinition")),"[]"),(0,l.kt)("td",{parentName:"tr",align:"left"},"A sequence of flight plan legs.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"calculateIndex")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index of the leg to calculate.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"activeLegIndex")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:"left"},"The index of the active leg.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"state")),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("a",{parentName:"td",href:"../interfaces/FlightPathState"},(0,l.kt)("inlineCode",{parentName:"a"},"FlightPathState"))),(0,l.kt)("td",{parentName:"tr",align:"left"},"The current flight path state.")))),(0,l.kt)("h4",{id:"returns-6"},"Returns"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"boolean")),(0,l.kt)("p",null,"Whether to skip vector calculations."),(0,l.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,l.kt)("p",null,"src/sdk/flightplan/FlightPathLegCalculator.ts:187"))}c.isMDXComponent=!0}}]);