"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[240],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},360:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return p}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:1},l="Simvars",m={unversionedId:"interacting-with-msfs/simvars",id:"version-0.2.0/interacting-with-msfs/simvars",title:"Simvars",description:"Introduction",source:"@site/versioned_docs/version-0.2.0/interacting-with-msfs/simvars.md",sourceDirName:"interacting-with-msfs",slug:"/interacting-with-msfs/simvars",permalink:"/msfs-avionics-mirror/docs/interacting-with-msfs/simvars",draft:!1,tags:[],version:"0.2.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Refs and the Component Lifecycle",permalink:"/msfs-avionics-mirror/docs/getting-started/refs-and-component-lifecycle"},next:{title:"Key Events",permalink:"/msfs-avionics-mirror/docs/interacting-with-msfs/key-events"}},c={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Types of Simvars",id:"types-of-simvars",level:2},{value:"A Vars",id:"a-vars",level:3},{value:"L Vars",id:"l-vars",level:3},{value:"Setting Simvars in JS",id:"setting-simvars-in-js",level:2},{value:"More Information",id:"more-information",level:2}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"simvars"},"Simvars"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"One of the primary ways by which addons can communicate with MSFS is via Simulation Variables, or ",(0,i.kt)("em",{parentName:"p"},"simvars"),". These variable contain data and information about the state of the simulator itself, your airplane, and various other components of MSFS."),(0,i.kt)("p",null,"From Javascript, you can utilize two of the types of simvars available in MSFS."),(0,i.kt)("h2",{id:"types-of-simvars"},"Types of Simvars"),(0,i.kt)("h3",{id:"a-vars"},"A Vars"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"A vars")," are normal MSFS simulation variables which can be queried. Historically, they have been called ",(0,i.kt)("strong",{parentName:"p"},"A vars")," due to needing to prefix those simvars with the text ",(0,i.kt)("strong",{parentName:"p"},"A:"),", but this is not required from the Javascript framework. To query a simvar, supply the simvar name and the units you would like to return the value in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const indicatedAirspeed = SimVar.GetSimVarValue('INDICATED AIRSPEED', 'knots');\n")),(0,i.kt)("p",null,"Some simvars in the sim can also take an index, such as with engine simvars. This index can be appended to the end of the simvar to specify which in a collection of items the value should be retrieved for:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const engineN1 = SimVar.GetSimVarValue('TURB ENG N1:1', 'percent');\n")),(0,i.kt)("h3",{id:"l-vars"},"L Vars"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"L vars")," are customizeable user settable values that can have any name, and are prefixed with the text ",(0,i.kt)("strong",{parentName:"p"},"L:")," in their name. These variables are used to store addon specific information that is to be shared with other parts of the addon or with the outside world."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"const isInMenuMode = SimVar.GetSimVarValue('L:IS_MENU_ACTIVE', 'bool');\n")),(0,i.kt)("p",null,"L vars must be properly prefixed and their name must be a contiguous string with no spaces. Setting an L var for the first time creates the variable; it is not necessary to define them anywhere ahead of time. All L vars can hold only ",(0,i.kt)("strong",{parentName:"p"},"numeric")," data, and not arbitrary string or binary data."),(0,i.kt)("h2",{id:"setting-simvars-in-js"},"Setting Simvars in JS"),(0,i.kt)("p",null,"Setting a simvar is very straightforward:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"SimVar.SetSimVarValue('GENERAL ENG THROTTLE LEVER POSITION:1', 'percent', 100);\n")),(0,i.kt)("p",null,"However, do note that setting simvars via JS is an asynchronous operation that is not guaranteed to finish by the time the next line of code is run. ",(0,i.kt)("inlineCode",{parentName:"p"},"SetSimVarValue()")," returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise<void>"),", which allows you to wait until the command has been accepted to run additional code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"//Using .then\nSimVar.SetSimVarValue('LIGHT NAV', 'bool', true)\n  .then(() => console.log('Nav light is on!'));\n\n//Using async/await\nawait SimVar.SetSimVarValue('LIGHT NAV', 'bool', true);\nconsole.log('Nav light is on!');\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For some simvars, even awaiting the ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," will not guarantee the update is complete. Calls into the sim are cached and run at frame end for performance reasons and not all sim systems are synchronous. Nonetheless, we still highly recommend using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Promise")," form, which yeilds much more consistent results for these cases."),(0,i.kt)("p",{parentName:"div"},"Most usages of setting simvars will not fall into this case, where explicit post-set timings are required."))),(0,i.kt)("h2",{id:"more-information"},"More Information"),(0,i.kt)("p",null,"For more information about the various simvars available in MSFS as well as a full list and description of each one, please see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flightsimulator.com/html/index.htm#t=Programming_Tools%2FSimVars%2FSimulation_Variables.htm"},"MSFS SDK Documentation"),"."))}d.isMDXComponent=!0}}]);