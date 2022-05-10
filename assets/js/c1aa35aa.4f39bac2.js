"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[5671],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return k}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),o=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(r),k=a,b=m["".concat(d,".").concat(k)]||m[k]||u[k]||i;return r?n.createElement(b,l(l({ref:t},p),{},{components:r})):n.createElement(b,l({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=r[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2569:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return k},frontMatter:function(){return s},metadata:function(){return o},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),l=["components"],s={id:"SubscribableArray",title:"Interface: SubscribableArray<T>",sidebar_label:"SubscribableArray",sidebar_position:0,custom_edit_url:null},d=void 0,o={unversionedId:"framework/interfaces/SubscribableArray",id:"version-0.2.0/framework/interfaces/SubscribableArray",title:"Interface: SubscribableArray<T>",description:"An array which allows others to subscribe to be notified of changes in its state.",source:"@site/versioned_docs/version-0.2.0/framework/interfaces/SubscribableArray.md",sourceDirName:"framework/interfaces",slug:"/framework/interfaces/SubscribableArray",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/SubscribableArray",draft:!1,editUrl:null,tags:[],version:"0.2.0",sidebarPosition:0,frontMatter:{id:"SubscribableArray",title:"Interface: SubscribableArray<T>",sidebar_label:"SubscribableArray",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"Subscribable",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/Subscribable"},next:{title:"SubscribableSet",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/SubscribableSet"}},p={},u=[{value:"Type parameters",id:"type-parameters",level:2},{value:"Implemented by",id:"implemented-by",level:2},{value:"Properties",id:"properties",level:2},{value:"length",id:"length",level:3},{value:"Defined in",id:"defined-in",level:4},{value:"Methods",id:"methods",level:2},{value:"get",id:"get",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getArray",id:"getarray",level:3},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"sub",id:"sub",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"tryGet",id:"tryget",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"unsub",id:"unsub",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-5",level:4}],m={toc:u};function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"An array which allows others to subscribe to be notified of changes in its state."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"))))),(0,i.kt)("h2",{id:"implemented-by"},"Implemented by"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/msfs-avionics-mirror/docs/framework/classes/AbstractSubscribableArray"},(0,i.kt)("inlineCode",{parentName:"a"},"AbstractSubscribableArray")))),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"length"},"length"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"length"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"number")),(0,i.kt)("p",null,"The length of this array."),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"src/sdk/sub/SubscribableArray.ts:27"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"get"},"get"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"get"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"index"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("p",null,"Retrieves an element from this array."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," Error if index is out of bounds."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The index of the element.")))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("p",null,"the element at the specified index."),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"src/sdk/sub/SubscribableArray.ts:35"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getarray"},"getArray"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getArray"),"(): readonly ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,i.kt)("p",null,"Gets a read-only version of this array."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,"readonly ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[]"),(0,i.kt)("p",null,"a read-only version of this array."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"src/sdk/sub/SubscribableArray.ts:48"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sub"},"sub"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"sub"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"handler"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"initialNotify?"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"paused?"),"): ",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Subscription"},(0,i.kt)("inlineCode",{parentName:"a"},"Subscription"))),(0,i.kt)("p",null,"Subscribes to changes in this array's state."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"handler")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/msfs-avionics-mirror/docs/framework/modules#subscribablearrayhandler"},(0,i.kt)("inlineCode",{parentName:"a"},"SubscribableArrayHandler")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"A function which is called when this array's state changes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"initialNotify?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether to immediately invoke the callback function with this array's current state. Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),". This argument is ignored if the subscription is initialized as paused.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"paused?")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Whether the new subscription should be initialized as paused. Defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"),".")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Subscription"},(0,i.kt)("inlineCode",{parentName:"a"},"Subscription"))),(0,i.kt)("p",null,"The new subscription."),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"src/sdk/sub/SubscribableArray.ts:58"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"tryget"},"tryGet"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"tryGet"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"index"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("p",null,"Attempts to retrieve an element from this array."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"index")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"number")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The index of the element.")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"T")),(0,i.kt)("p",null,"the element at the specified index, or undefined if index is out of bounds."),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"src/sdk/sub/SubscribableArray.ts:42"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"unsub"},"unsub"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"unsub"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"handler"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"Unsubscribes a callback function from this array."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"deprecated"))," This method has been deprecated in favor of using the ",(0,i.kt)("a",{parentName:"p",href:"/msfs-avionics-mirror/docs/framework/interfaces/Subscription"},"Subscription")," object returned by ",(0,i.kt)("inlineCode",{parentName:"p"},".sub()"),"\nto manage subscriptions."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"handler")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/msfs-avionics-mirror/docs/framework/modules#subscribablearrayhandler"},(0,i.kt)("inlineCode",{parentName:"a"},"SubscribableArrayHandler")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The function to unsubscribe.")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"src/sdk/sub/SubscribableArray.ts:66"))}k.isMDXComponent=!0}}]);