"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[1858],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return n?r.createElement(m,l(l({ref:t},o),{},{components:n})):r.createElement(m,l({ref:t},o))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2355:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return o},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],d={id:"IcaoSearch",title:"Class: IcaoSearch",sidebar_label:"IcaoSearch",sidebar_position:0,custom_edit_url:null},s=void 0,p={unversionedId:"framework/classes/IcaoSearch",id:"framework/classes/IcaoSearch",isDocsHomePage:!1,title:"Class: IcaoSearch",description:"An ICAO search session, which allows searching for ICAO strings that match a particular ident string.",source:"@site/docs/framework/classes/IcaoSearch.md",sourceDirName:"framework/classes",slug:"/framework/classes/IcaoSearch",permalink:"/msfs-avionics-mirror/docs/framework/classes/IcaoSearch",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"IcaoSearch",title:"Class: IcaoSearch",sidebar_label:"IcaoSearch",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"ICAO",permalink:"/msfs-avionics-mirror/docs/framework/classes/ICAO"},next:{title:"ImageCache",permalink:"/msfs-avionics-mirror/docs/framework/classes/ImageCache"}},o=[{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"MAX_RETRIES",id:"max_retries",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"batch",id:"batch",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"filterMap",id:"filtermap",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"opId",id:"opid",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"searchGuid",id:"searchguid",children:[{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"delay",id:"delay",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"doSearch",id:"dosearch",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"genGuid",id:"genguid",children:[{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3},{value:"mapResult",id:"mapresult",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3}],level:2}],c={toc:o};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An ICAO search session, which allows searching for ICAO strings that match a particular ident string."),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new IcaoSearch"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"facilityRepo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"filter"),")"),(0,i.kt)("p",null,"Constructor."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"facilityRepo")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"FacilityRespository"},(0,i.kt)("inlineCode",{parentName:"a"},"FacilityRespository"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The local facility repository included in this search session.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"filter")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../enums/IcaoSearchFilter"},(0,i.kt)("inlineCode",{parentName:"a"},"IcaoSearchFilter"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The filter applied to this search session.")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"src/sdk/data/gpssearch/IcaoSearch.ts:36"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"max_retries"},"MAX","_","RETRIES"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"MAX","_","RETRIES"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"6")),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"src/sdk/data/gpssearch/IcaoSearch.ts:19"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"batch"},"batch"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"batch"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"SimVarBatch")),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"src/sdk/data/gpssearch/IcaoSearch.ts:18"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"filtermap"},"filterMap"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"filterMap"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<",(0,i.kt)("a",{parentName:"p",href:"../enums/IcaoSearchFilter"},(0,i.kt)("inlineCode",{parentName:"a"},"IcaoSearchFilter")),", ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"src/sdk/data/gpssearch/IcaoSearch.ts:20"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"opid"},"opId"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"opId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")," = ",(0,i.kt)("inlineCode",{parentName:"p"},"0")),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"src/sdk/data/gpssearch/IcaoSearch.ts:29"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"searchguid"},"searchGuid"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"searchGuid"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"src/sdk/data/gpssearch/IcaoSearch.ts:17"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"delay"},"delay"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"delay"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"time"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"Artificial delay for skipping cycles during search."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"time")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The time to wait.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"void"),">"),(0,i.kt)("p",null,"a Promise which fulfills when the delay expires."),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,"src/sdk/data/gpssearch/IcaoSearch.ts:130"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"dosearch"},"doSearch"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"doSearch"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"ident"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,i.kt)("p",null,"Executes a new search in this session with a specified ident string to match. Only one active search can run\nsimultaneously. Therefore, if doSearch() is called while a previous search is still running, the newer search will\npre-empt the older one, causing the older one to fail."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," Error if the search was pre-empted by a newer one."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ident")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string")),(0,i.kt)("td",{parentName:"tr",align:"left"},"An ident string.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Promise"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]",">"),(0,i.kt)("p",null,"a Promise which is fulfilled with an array of ICAO strings that matched the ident string."),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,"src/sdk/data/gpssearch/IcaoSearch.ts:49"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"genguid"},"genGuid"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"genGuid"),"(): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Generates a unique id for search context."),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"A unique ID string."),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,"src/sdk/data/gpssearch/IcaoSearch.ts:138"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mapresult"},"mapResult"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("strong",{parentName:"p"},"mapResult"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"items"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"Maps the search results to an array of ICAO strings."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"items")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"any"),"[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The search results.")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string"),"[]"),(0,i.kt)("p",null,"an array of ICAO strings."),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,"src/sdk/data/gpssearch/IcaoSearch.ts:121"))}u.isMDXComponent=!0}}]);