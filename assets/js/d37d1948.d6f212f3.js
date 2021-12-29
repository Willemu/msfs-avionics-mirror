"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[8475],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return f}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=i,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||a;return r?t.createElement(m,o(o({ref:n},c),{},{components:r})):t.createElement(m,o({ref:n},c))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8819:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var t=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],l={id:"RunwayTransition",title:"Interface: RunwayTransition",sidebar_label:"RunwayTransition",sidebar_position:0,custom_edit_url:null},u=void 0,s={unversionedId:"framework/interfaces/RunwayTransition",id:"framework/interfaces/RunwayTransition",isDocsHomePage:!1,title:"Interface: RunwayTransition",description:"An arrival transition for a particular selected runway.",source:"@site/docs/framework/interfaces/RunwayTransition.md",sourceDirName:"framework/interfaces",slug:"/framework/interfaces/RunwayTransition",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/RunwayTransition",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"RunwayTransition",title:"Interface: RunwayTransition",sidebar_label:"RunwayTransition",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"RunwayFacility",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/RunwayFacility"},next:{title:"ScreenStateEvent",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/ScreenStateEvent"}},c=[{value:"Properties",id:"properties",children:[{value:"legs",id:"legs",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"runwayDesignation",id:"runwaydesignation",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"runwayNumber",id:"runwaynumber",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],d={toc:c};function p(e){var n=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An arrival transition for a particular selected runway."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"legs"},"legs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"legs"),": readonly ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,a.kt)("a",{parentName:"p",href:"FlightPlanLeg"},(0,a.kt)("inlineCode",{parentName:"a"},"FlightPlanLeg")),">","[]"),(0,a.kt)("p",null,"The legs that make up this procedure."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"src/sdk/navigation/Facilities.ts:238"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"runwaydesignation"},"runwayDesignation"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"runwayDesignation"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The letter designation for the runway, if any (L, C, R)"),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"src/sdk/navigation/Facilities.ts:235"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"runwaynumber"},"runwayNumber"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"runwayNumber"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("p",null,"The number of the runway."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,"src/sdk/navigation/Facilities.ts:232"))}p.isMDXComponent=!0}}]);