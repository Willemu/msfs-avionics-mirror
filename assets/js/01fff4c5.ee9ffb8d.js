"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[5496],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,k=m["".concat(o,".").concat(u)]||m[u]||s[u]||i;return r?n.createElement(k,l(l({ref:t},p),{},{components:r})):n.createElement(k,l({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2810:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],d={id:"CircleInterceptBuilder",title:"Class: CircleInterceptBuilder",sidebar_label:"CircleInterceptBuilder",sidebar_position:0,custom_edit_url:null},o=void 0,c={unversionedId:"framework/classes/CircleInterceptBuilder",id:"framework/classes/CircleInterceptBuilder",isDocsHomePage:!1,title:"Class: CircleInterceptBuilder",description:"Builds great-circle paths to intercept other geo circles.",source:"@site/docs/framework/classes/CircleInterceptBuilder.md",sourceDirName:"framework/classes",slug:"/framework/classes/CircleInterceptBuilder",permalink:"/msfs-avionics-mirror/docs/framework/classes/CircleInterceptBuilder",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"CircleInterceptBuilder",title:"Class: CircleInterceptBuilder",sidebar_label:"CircleInterceptBuilder",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"BitFlags",permalink:"/msfs-avionics-mirror/docs/framework/classes/BitFlags"},next:{title:"CircleInterceptLegCalculator",permalink:"/msfs-avionics-mirror/docs/framework/classes/CircleInterceptLegCalculator"}},p=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"circleVectorBuilder",id:"circlevectorbuilder",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"greatCircleBuilder",id:"greatcirclebuilder",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"geoCircleCache",id:"geocirclecache",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"intersectionCache",id:"intersectioncache",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"build",id:"build",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4},{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3}],level:2}],s={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Builds great-circle paths to intercept other geo circles."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new CircleInterceptBuilder"),"()"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"circlevectorbuilder"},"circleVectorBuilder"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"circleVectorBuilder"),": ",(0,i.kt)("a",{parentName:"p",href:"CircleVectorBuilder"},(0,i.kt)("inlineCode",{parentName:"a"},"CircleVectorBuilder"))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"src/sdk/flightplan/FlightPathVectorBuilder.ts:361"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"greatcirclebuilder"},"greatCircleBuilder"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"greatCircleBuilder"),": ",(0,i.kt)("a",{parentName:"p",href:"GreatCircleBuilder"},(0,i.kt)("inlineCode",{parentName:"a"},"GreatCircleBuilder"))),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"src/sdk/flightplan/FlightPathVectorBuilder.ts:360"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"geocirclecache"},"geoCircleCache"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"geoCircleCache"),": ",(0,i.kt)("a",{parentName:"p",href:"GeoCircle"},(0,i.kt)("inlineCode",{parentName:"a"},"GeoCircle")),"[]"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"src/sdk/flightplan/FlightPathVectorBuilder.ts:357"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"intersectioncache"},"intersectionCache"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"intersectionCache"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Float64Array"),"[]"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"src/sdk/flightplan/FlightPathVectorBuilder.ts:358"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"build"},"build"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"build"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"vectors"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"course"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"circle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"flags?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Builds a sequence of vectors representing a great-circle path from a defined start point to an intersection with\nanother geo circle."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vectors")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/CircleVector"},(0,i.kt)("inlineCode",{parentName:"a"},"CircleVector")),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The flight path vector sequence to which to add the vectors.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The index in the sequence at which to add the vectors.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"start")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/LatLonInterface"},(0,i.kt)("inlineCode",{parentName:"a"},"LatLonInterface"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Float64Array")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The start point.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"course")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The initial true course bearing.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"circle")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"GeoCircle"},(0,i.kt)("inlineCode",{parentName:"a"},"GeoCircle"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The circle to intercept.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"flags?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The flags to set on the vector. Defaults to none (0).")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The number of vectors added to the sequence."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"src/sdk/flightplan/FlightPathVectorBuilder.ts:374"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"build"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"vectors"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"index"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"start"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"startPath"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"circle"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"flags?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"Builds a sequence of vectors representing a path from a defined start point to an intersection with another geo\ncircle."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," Error if ",(0,i.kt)("inlineCode",{parentName:"p"},"start")," does not lie on ",(0,i.kt)("inlineCode",{parentName:"p"},"startPath"),"."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"vectors")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/CircleVector"},(0,i.kt)("inlineCode",{parentName:"a"},"CircleVector")),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The flight path vector sequence to which to add the vectors.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The index in the sequence at which to add the vectors.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"start")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/LatLonInterface"},(0,i.kt)("inlineCode",{parentName:"a"},"LatLonInterface"))," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"Float64Array")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The start point.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"startPath")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"GeoCircle"},(0,i.kt)("inlineCode",{parentName:"a"},"GeoCircle"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The initial path.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"circle")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"GeoCircle"},(0,i.kt)("inlineCode",{parentName:"a"},"GeoCircle"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The circle to intercept.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"flags?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The flags to set on the vector. Defaults to none (0).")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The number of vectors added to the sequence."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"src/sdk/flightplan/FlightPathVectorBuilder.ts:394"))}m.isMDXComponent=!0}}]);