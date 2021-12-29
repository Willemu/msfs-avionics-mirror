"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[5381],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),k=s(n),g=r,u=k["".concat(d,".").concat(g)]||k[g]||o[g]||i;return n?a.createElement(u,l(l({ref:t},m),{},{components:n})):a.createElement(u,l({ref:t},m))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},395:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return k}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],p={id:"DefaultUserSettingManager",title:"Class: DefaultUserSettingManager<T>",sidebar_label:"DefaultUserSettingManager",sidebar_position:0,custom_edit_url:null},d=void 0,s={unversionedId:"framework/classes/DefaultUserSettingManager",id:"framework/classes/DefaultUserSettingManager",isDocsHomePage:!1,title:"Class: DefaultUserSettingManager<T>",description:"A manager for user settings. Provides settings using their names as keys, publishes value change events on the",source:"@site/docs/framework/classes/DefaultUserSettingManager.md",sourceDirName:"framework/classes",slug:"/framework/classes/DefaultUserSettingManager",permalink:"/msfs-avionics-mirror/docs/framework/classes/DefaultUserSettingManager",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"DefaultUserSettingManager",title:"Class: DefaultUserSettingManager<T>",sidebar_label:"DefaultUserSettingManager",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"DebounceTimer",permalink:"/msfs-avionics-mirror/docs/framework/classes/DebounceTimer"},next:{title:"DeltaPacer",permalink:"/msfs-avionics-mirror/docs/framework/classes/DeltaPacer"}},m=[{value:"Type parameters",id:"type-parameters",children:[],level:2},{value:"Implements",id:"implements",children:[],level:2},{value:"Constructors",id:"constructors",children:[{value:"constructor",id:"constructor",children:[{value:"Type parameters",id:"type-parameters-1",children:[],level:4},{value:"Parameters",id:"parameters",children:[],level:4},{value:"Defined in",id:"defined-in",children:[],level:4}],level:3}],level:2},{value:"Properties",id:"properties",children:[{value:"bus",id:"bus",children:[],level:3},{value:"publisher",id:"publisher",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"settings",id:"settings",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"subscriber",id:"subscriber",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3},{value:"SYNC_TOPIC_PREFIX",id:"sync_topic_prefix",children:[{value:"Defined in",id:"defined-in-4",children:[],level:4}],level:3}],level:2},{value:"Methods",id:"methods",children:[{value:"getAllSettings",id:"getallsettings",children:[{value:"Returns",id:"returns",children:[],level:4},{value:"Defined in",id:"defined-in-5",children:[],level:4}],level:3},{value:"getSetting",id:"getsetting",children:[{value:"Type parameters",id:"type-parameters-2",children:[],level:4},{value:"Parameters",id:"parameters-1",children:[],level:4},{value:"Returns",id:"returns-1",children:[],level:4},{value:"Implementation of",id:"implementation-of",children:[],level:4},{value:"Defined in",id:"defined-in-6",children:[],level:4}],level:3},{value:"mapTo",id:"mapto",children:[{value:"Type parameters",id:"type-parameters-3",children:[],level:4},{value:"Parameters",id:"parameters-2",children:[],level:4},{value:"Returns",id:"returns-2",children:[],level:4},{value:"Defined in",id:"defined-in-7",children:[],level:4}],level:3},{value:"onSettingValueChanged",id:"onsettingvaluechanged",children:[{value:"Type parameters",id:"type-parameters-4",children:[],level:4},{value:"Parameters",id:"parameters-3",children:[],level:4},{value:"Returns",id:"returns-3",children:[],level:4},{value:"Defined in",id:"defined-in-8",children:[],level:4}],level:3},{value:"onSettingValueSynced",id:"onsettingvaluesynced",children:[{value:"Type parameters",id:"type-parameters-5",children:[],level:4},{value:"Parameters",id:"parameters-4",children:[],level:4},{value:"Returns",id:"returns-4",children:[],level:4},{value:"Defined in",id:"defined-in-9",children:[],level:4}],level:3},{value:"whenSettingChanged",id:"whensettingchanged",children:[{value:"Type parameters",id:"type-parameters-6",children:[],level:4},{value:"Parameters",id:"parameters-5",children:[],level:4},{value:"Returns",id:"returns-5",children:[],level:4},{value:"Implementation of",id:"implementation-of-1",children:[],level:4},{value:"Defined in",id:"defined-in-10",children:[],level:4}],level:3}],level:2}],o={toc:m};function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"A manager for user settings. Provides settings using their names as keys, publishes value change events on the\nevent bus, and keeps setting values up to date when receiving change events across the bus."),(0,i.kt)("h2",{id:"type-parameters"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("a",{parentName:"td",href:"../modules#usersettingtype"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSettingType")),">")))),(0,i.kt)("h2",{id:"implements"},"Implements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../interfaces/UserSettingManager"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSettingManager")),"<",(0,i.kt)("inlineCode",{parentName:"li"},"T"),">")),(0,i.kt)("h2",{id:"constructors"},"Constructors"),(0,i.kt)("h3",{id:"constructor"},"constructor"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"new DefaultUserSettingManager"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"bus"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"settingDefs"),")"),(0,i.kt)("p",null,"Constructor."),(0,i.kt)("h4",{id:"type-parameters-1"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("a",{parentName:"td",href:"../modules#usersettingtype"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSettingType")),">")))),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"bus")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"EventBus"},(0,i.kt)("inlineCode",{parentName:"a"},"EventBus"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"The bus used by this manager to publish setting change events.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"settingDefs")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../interfaces/UserSettingDefinition"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSettingDefinition")),"<keyof ",(0,i.kt)("inlineCode",{parentName:"td"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"T"),"[keyof ",(0,i.kt)("inlineCode",{parentName:"td"},"T"),"]",">","[]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The setting definitions used to initialize this manager's settings.")))),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSetting.ts:108"),(0,i.kt)("h2",{id:"properties"},"Properties"),(0,i.kt)("h3",{id:"bus"},"bus"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"bus"),": ",(0,i.kt)("a",{parentName:"p",href:"EventBus"},(0,i.kt)("inlineCode",{parentName:"a"},"EventBus"))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"publisher"},"publisher"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"publisher"),": ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/Publisher"},(0,i.kt)("inlineCode",{parentName:"a"},"Publisher")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSetting.ts:100"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"settings"},"settings"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"settings"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Map"),"<keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("a",{parentName:"p",href:"../modules#usersettingmanagerentry"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSettingManagerEntry")),"<keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"]",">",">"),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSetting.ts:99"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"subscriber"},"subscriber"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"subscriber"),": ",(0,i.kt)("a",{parentName:"p",href:"EventSubscriber"},(0,i.kt)("inlineCode",{parentName:"a"},"EventSubscriber")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"any"),">"),(0,i.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSetting.ts:101"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"sync_topic_prefix"},"SYNC","_","TOPIC","_","PREFIX"),(0,i.kt)("p",null,"\u25aa ",(0,i.kt)("inlineCode",{parentName:"p"},"Static")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Private")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,i.kt)("strong",{parentName:"p"},"SYNC","_","TOPIC","_","PREFIX"),": ",(0,i.kt)("inlineCode",{parentName:"p"},'"usersetting."')),(0,i.kt)("h4",{id:"defined-in-4"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSetting.ts:97"),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"getallsettings"},"getAllSettings"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getAllSettings"),"(): ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/UserSetting"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSetting")),"<keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"]",">","[]"),(0,i.kt)("p",null,"Gets an array of all settings of this manager."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../interfaces/UserSetting"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSetting")),"<keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[keyof ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"]",">","[]"),(0,i.kt)("p",null,"an array of all settings of this manager."),(0,i.kt)("h4",{id:"defined-in-5"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSetting.ts:147"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"getsetting"},"getSetting"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"getSetting"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"K"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"): ",(0,i.kt)("a",{parentName:"p",href:"../interfaces/UserSetting"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSetting")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"K"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[",(0,i.kt)("inlineCode",{parentName:"p"},"K"),"]",">"),(0,i.kt)("p",null,"Gets a setting from this manager."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," Error if no setting with the specified name exists."),(0,i.kt)("h4",{id:"type-parameters-2"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"K")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"))))),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"K")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of the setting to get.")))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../interfaces/UserSetting"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSetting")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"K"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[",(0,i.kt)("inlineCode",{parentName:"p"},"K"),"]",">"),(0,i.kt)("p",null,"a setting."),(0,i.kt)("h4",{id:"implementation-of"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../interfaces/UserSettingManager"},"UserSettingManager"),".",(0,i.kt)("a",{parentName:"p",href:"../interfaces/UserSettingManager#getsetting"},"getSetting")),(0,i.kt)("h4",{id:"defined-in-6"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSetting.ts:134"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"mapto"},"mapTo"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"mapTo"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"M"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"map"),"): ",(0,i.kt)("a",{parentName:"p",href:"MappedUserSettingManager"},(0,i.kt)("inlineCode",{parentName:"a"},"MappedUserSettingManager")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"M"),">"),(0,i.kt)("p",null,"Maps a user setting manager to abstracted settings keys."),(0,i.kt)("h4",{id:"type-parameters-3"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"M")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"Record"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"any"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"boolean"),">")))),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"map")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"MappedUserSettingDefinition"),"<",(0,i.kt)("inlineCode",{parentName:"td"},"M"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"T"),">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The map of key abstractions to apply.")))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"MappedUserSettingManager"},(0,i.kt)("inlineCode",{parentName:"a"},"MappedUserSettingManager")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"M"),">"),(0,i.kt)("p",null,"A new mapped user setting manager."),(0,i.kt)("h4",{id:"defined-in-7"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSetting.ts:171"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onsettingvaluechanged"},"onSettingValueChanged"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("strong",{parentName:"p"},"onSettingValueChanged"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"K"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"entry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"value"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"A callback which is called when one of this manager's settings has its value changed locally."),(0,i.kt)("h4",{id:"type-parameters-4"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"K")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"))))),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entry")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules#usersettingmanagerentry"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSettingManagerEntry")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"K"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"T"),"[",(0,i.kt)("inlineCode",{parentName:"td"},"K"),"]",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The entry for the setting that was changed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"value")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"T"),"[",(0,i.kt)("inlineCode",{parentName:"td"},"K"),"]"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The new value of the setting.")))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-8"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSetting.ts:180"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"onsettingvaluesynced"},"onSettingValueSynced"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("inlineCode",{parentName:"p"},"Protected")," ",(0,i.kt)("strong",{parentName:"p"},"onSettingValueSynced"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"K"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"entry"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"data"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("p",null,"A callback which is called when a setting changed event is received over the event bus."),(0,i.kt)("h4",{id:"type-parameters-5"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"K")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"))))),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"entry")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules#usersettingmanagerentry"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSettingManagerEntry")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"K"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"T"),"[",(0,i.kt)("inlineCode",{parentName:"td"},"K"),"]",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The entry for the setting that was changed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"data")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"../modules#usersettingmanagersyncdata"},(0,i.kt)("inlineCode",{parentName:"a"},"UserSettingManagerSyncData")),"<",(0,i.kt)("inlineCode",{parentName:"td"},"T"),"[",(0,i.kt)("inlineCode",{parentName:"td"},"K"),"]",">"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The sync data.")))),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"void")),(0,i.kt)("h4",{id:"defined-in-9"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSetting.ts:190"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"whensettingchanged"},"whenSettingChanged"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"whenSettingChanged"),"<",(0,i.kt)("inlineCode",{parentName:"p"},"K"),">","(",(0,i.kt)("inlineCode",{parentName:"p"},"name"),"): ",(0,i.kt)("a",{parentName:"p",href:"Consumer"},(0,i.kt)("inlineCode",{parentName:"a"},"Consumer")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[",(0,i.kt)("inlineCode",{parentName:"p"},"K"),"]",">"),(0,i.kt)("p",null,"Gets a consumer which notifies handlers when the value of a setting changes."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," Error if no setting with the specified name exists."),(0,i.kt)("h4",{id:"type-parameters-6"},"Type parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"K")),(0,i.kt)("td",{parentName:"tr",align:"left"},"extends ",(0,i.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"number")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"td"},"symbol"))))),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"K")),(0,i.kt)("td",{parentName:"tr",align:"left"},"The name of a setting.")))),(0,i.kt)("h4",{id:"returns-5"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"Consumer"},(0,i.kt)("inlineCode",{parentName:"a"},"Consumer")),"<",(0,i.kt)("inlineCode",{parentName:"p"},"T"),"[",(0,i.kt)("inlineCode",{parentName:"p"},"K"),"]",">"),(0,i.kt)("p",null,"a consumer which notifies handlers when the value of the setting changes."),(0,i.kt)("h4",{id:"implementation-of-1"},"Implementation of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../interfaces/UserSettingManager"},"UserSettingManager"),".",(0,i.kt)("a",{parentName:"p",href:"../interfaces/UserSettingManager#whensettingchanged"},"whenSettingChanged")),(0,i.kt)("h4",{id:"defined-in-10"},"Defined in"),(0,i.kt)("p",null,"src/sdk/settings/UserSetting.ts:157"))}k.isMDXComponent=!0}}]);