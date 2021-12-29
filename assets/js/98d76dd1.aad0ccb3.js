"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[7998],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return k}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),o=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=o(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=o(n),k=a,c=m["".concat(p,".").concat(k)]||m[k]||u[k]||i;return n?r.createElement(c,l(l({ref:t},s),{},{components:n})):r.createElement(c,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4649:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return p},metadata:function(){return o},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],d={id:"SubscribableArray",title:"Interface: SubscribableArray<T>",sidebar_label:"SubscribableArray",sidebar_position:0,custom_edit_url:null},p=void 0,o={unversionedId:"framework/interfaces/SubscribableArray",id:"framework/interfaces/SubscribableArray",isDocsHomePage:!1,title:"Interface: SubscribableArray<T>",description:"An array which allows others to subscribe to be notified of changes in its state.",source:"@site/docs/framework/interfaces/SubscribableArray.md",sourceDirName:"framework/interfaces",slug:"/framework/interfaces/SubscribableArray",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/SubscribableArray",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"SubscribableArray",title:"Interface: SubscribableArray<T>",sidebar_label:"SubscribableArray",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"Subscribable",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/Subscribable"},next:{title:"TaskQueue",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/TaskQueue"}},s=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Implemented by",id:"implemented-by",children:[],level:2},{value:"Properties",id:"properties",children:[{value:"length",id:"length",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"get",id:"get",children:[{value:"Parameters",id:"parameters",children:[],level:4},{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"getArray",id:"getarray",children:[{value:"Returns",id:"returns-1",children:[],level:4},{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"sub",id:"sub",children:[{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"tryGet",id:"tryget",children:[{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3},{value:"unsub",id:"unsub",children:[{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3}],level:2}],u={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An array which allows others to subscribe to be notified of changes in its state."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../classes/ArraySubject"},(0,i.kt)("inlineCode",{parentName:"a"},"ArraySubject"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../classes/NearestSubscription"},(0,i.kt)("inlineCode",{parentName:"a"},"NearestSubscription"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../classes/SortedMappedSubscribableArray"},(0,i.kt)("inlineCode",{parentName:"a"},"SortedMappedSubscribableArray")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"length"},"length"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"length"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The length of this array."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/Subscribable.ts:78"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"get"},"get"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"get"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"index"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("p",null,"Retrieves an element from this array."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," Error if index is out of bounds."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The index of the element.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("p",null,"the element at the specified index."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/Subscribable.ts:86"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getarray"},"getArray"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getArray"),"(): readonly ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,i.kt)("p",null,"Gets a read-only version of this array."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,"readonly ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,i.kt)("p",null,"a read-only version of this array."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/Subscribable.ts:99"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sub"},"sub"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sub"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"fn"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"initialNotify?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Subscribes to this array with a callback function. The function will be called whenever this array changes."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"index"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("a",{parentName:"td",href:"../enums/SubscribableArrayEventType"},(0,i.kt)("inlineCode",{parentName:"a"},"SubscribableArrayEventType")),", ",(0,i.kt)("inlineCode",{parentName:"td"},"item"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"T")," ","|"," readonly ",(0,i.kt)("inlineCode",{parentName:"td"},"T"),"[], ",(0,i.kt)("inlineCode",{parentName:"td"},"array"),": readonly ",(0,i.kt)("inlineCode",{parentName:"td"},"T"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:"left"},"A function which is called when this array's state changes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"initialNotify?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether to immediately notify the callback function after it is subscribed. False by default.")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/Subscribable.ts:106"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tryget"},"tryGet"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"tryGet"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"index"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("p",null,"Attempts to retrieve an element from this array."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The index of the element.")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("p",null,"the element at the specified index, or undefined if index is out of bounds."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/Subscribable.ts:93"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unsub"},"unsub"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"unsub"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"fn"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Unsubscribes a callback function from this array."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"fn")),(0,i.kt)("td",{parentName:"tr",align:"left"},"(",(0,i.kt)("inlineCode",{parentName:"td"},"index"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"number"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"type"),": ",(0,i.kt)("a",{parentName:"td",href:"../enums/SubscribableArrayEventType"},(0,i.kt)("inlineCode",{parentName:"a"},"SubscribableArrayEventType")),", ",(0,i.kt)("inlineCode",{parentName:"td"},"item"),": ",(0,i.kt)("inlineCode",{parentName:"td"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"T")," ","|"," readonly ",(0,i.kt)("inlineCode",{parentName:"td"},"T"),"[], ",(0,i.kt)("inlineCode",{parentName:"td"},"array"),": readonly ",(0,i.kt)("inlineCode",{parentName:"td"},"T"),"[]) => ",(0,i.kt)("inlineCode",{parentName:"td"},"void")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The function to unsubscribe.")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"src/sdk/utils/Subscribable.ts:112"))}m.isMDXComponent=!0}}]);