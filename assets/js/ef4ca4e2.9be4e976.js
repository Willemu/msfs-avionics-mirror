"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[5025],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return v}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),v=a,h=p["".concat(c,".").concat(v)]||p[v]||u[v]||i;return n?r.createElement(h,o(o({ref:t},m),{},{components:n})):r.createElement(h,o({ref:t},m))}));function v(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},243:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return m},default:function(){return p}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:2},c="Key Events",l={unversionedId:"interacting-with-msfs/key-events",id:"interacting-with-msfs/key-events",isDocsHomePage:!1,title:"Key Events",description:"Introduction",source:"@site/docs/interacting-with-msfs/key-events.md",sourceDirName:"interacting-with-msfs",slug:"/interacting-with-msfs/key-events",permalink:"/msfs-avionics-mirror/docs/interacting-with-msfs/key-events",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Simvars",permalink:"/msfs-avionics-mirror/docs/interacting-with-msfs/simvars"},next:{title:"Receiving H Events",permalink:"/msfs-avionics-mirror/docs/interacting-with-msfs/receiving-h-events"}},m=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Initiating A Key Event",id:"initiating-a-key-event",children:[],level:2},{value:"Listening For A Key Event",id:"listening-for-a-key-event",children:[],level:2},{value:"More Information",id:"more-information",children:[],level:2}],u={toc:m};function p(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"key-events"},"Key Events"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"Key Events represent the MSFS control binding system: all controls that are bindable though the simulator controls menu are available to also be driven and read via code. Examples of things you can bind in the controls menu would be pressing various autopilot buttons, moving your trim axis, turning on an engine starter, and the like."),(0,i.kt)("p",null,"All of these events have names within MSFS and we can use the names to interact with those events within Javascript."),(0,i.kt)("h2",{id:"initiating-a-key-event"},"Initiating A Key Event"),(0,i.kt)("p",null,"In the Javascript framework, key events are run by using the SimVar class, and prefixing the key event name with a ",(0,i.kt)("strong",{parentName:"p"},"K:")," (which gives key events their alternate name, K events). For example, to send the simulator the event to increase the flaps position:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"//Will do the same thing as if the button bound to 'Flaps Increase' in the\n//menu was pressed\nSimVar.SetSimVarValue('K:FLAPS_INCR', 'number', 0);\n")),(0,i.kt)("p",null,"For events that don't take a value, the second two parameters are ignored. But, some key events ",(0,i.kt)("em",{parentName:"p"},"do")," take a value (such as a control axis):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"SimVar.SetSimVarValue('K:AXIS_ELEVATOR_SET', 'number', -8225);\n")),(0,i.kt)("h2",{id:"listening-for-a-key-event"},"Listening For A Key Event"),(0,i.kt)("p",null,"For many addons, it can be beneficial to also be notified when a key event has been received by the simulator, and then take appropriate action. This could be augmenting some action the sim is already taking, or even blocking the sim from recieving the event altogether and entirely replacing behavior."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"//The key intercept manager requires a EventBus to publish to\nconst eventBus = new EventBus();\n\n//Get the key intercept manager\nconst manager = await KeyInterceptManager.getManager(eventBus);\n\n//Set the AP nav hold key event to be intercepted, but still pass through to the sim\nmanager.interceptKey('AP_NAV1_HOLD', true);\n\n//Set the AP master on/off key event to be intercepted, but _not_ pass through to the sim\nmanager.interceptKey('AP_MASTER', false);\n\nconst subscriber = eventBus.getSubscriber<KeyEvents>();\nsubscriber.on('key_intercept').handle(keyData => {\n  switch (keyData.key) {\n    case 'AP_NAV1_HOLD':\n      console.log('Toggled autopilot nav hold!');\n      break;\n    case 'AP_MASTER':\n      console.log('Toggled autopilot master!');\n      break;\n  }\n});\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"If you have set the key intercept to ",(0,i.kt)("em",{parentName:"p"},"not")," pass through to the simulator, the simulator will not respond to the key event in any way: from the inside of the simulator's perspective, the key event was never sent. This is a very powerful tool for crafting custom behavior for many complex systems, but requires some care."))),(0,i.kt)("h2",{id:"more-information"},"More Information"),(0,i.kt)("p",null,"For more information about the key event IDs that are available and what they do, please see the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.flightsimulator.com/html/index.htm#t=Programming_Tools%2FSimVars%2FEvent_IDs.htm"},"MSFS SDK Documentation"),"."))}p.isMDXComponent=!0}}]);