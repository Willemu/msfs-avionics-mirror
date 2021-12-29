"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[4423],{3905:function(e,r,n){n.d(r,{Zo:function(){return s},kt:function(){return f}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),p=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},s=function(e){var r=p(e.components);return t.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return n?t.createElement(m,o(o({ref:r},s),{},{components:n})):t.createElement(m,o({ref:r},s))}));function f(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4203:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var t=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={id:"ApproachTransition",title:"Interface: ApproachTransition",sidebar_label:"ApproachTransition",sidebar_position:0,custom_edit_url:null},l=void 0,p={unversionedId:"framework/interfaces/ApproachTransition",id:"framework/interfaces/ApproachTransition",isDocsHomePage:!1,title:"Interface: ApproachTransition",description:"An arrival-to-approach transition.",source:"@site/docs/framework/interfaces/ApproachTransition.md",sourceDirName:"framework/interfaces",slug:"/framework/interfaces/ApproachTransition",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/ApproachTransition",editUrl:null,tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"ApproachTransition",title:"Interface: ApproachTransition",sidebar_label:"ApproachTransition",sidebar_position:0,custom_edit_url:null},sidebar:"docsSidebar",previous:{title:"ApproachProcedure",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/ApproachProcedure"},next:{title:"BaseFlightPathVector",permalink:"/msfs-avionics-mirror/docs/framework/interfaces/BaseFlightPathVector"}},s=[{value:"Properties",id:"properties",children:[{value:"legs",id:"legs",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"name",id:"name",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3}],level:2}],u={toc:s};function d(e){var r=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"An arrival-to-approach transition."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"legs"},"legs"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"legs"),": readonly ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly"),"<",(0,a.kt)("a",{parentName:"p",href:"FlightPlanLeg"},(0,a.kt)("inlineCode",{parentName:"a"},"FlightPlanLeg")),">","[]"),(0,a.kt)("p",null,"The legs that make up this procedure."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,"src/sdk/navigation/Facilities.ts:260"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"name"},"name"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Readonly")," ",(0,a.kt)("strong",{parentName:"p"},"name"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("p",null,"The name for this transition."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,"src/sdk/navigation/Facilities.ts:257"))}d.isMDXComponent=!0}}]);