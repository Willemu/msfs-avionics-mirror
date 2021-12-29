"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[485],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return c}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,h=u["".concat(l,".").concat(c)]||u[c]||d[c]||i;return n?o.createElement(h,a(a({ref:t},m),{},{components:n})):o.createElement(h,a({ref:t},m))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4410:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],s={sidebar_position:2},l="Creating Your First Component",p={unversionedId:"getting-started/creating-your-first-component",id:"getting-started/creating-your-first-component",isDocsHomePage:!1,title:"Creating Your First Component",description:"Building an Instrument Template",source:"@site/docs/getting-started/creating-your-first-component.md",sourceDirName:"getting-started",slug:"/getting-started/creating-your-first-component",permalink:"/msfs-avionics-mirror/docs/getting-started/creating-your-first-component",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Setting Up Your Environment",permalink:"/msfs-avionics-mirror/docs/getting-started/setting-up-your-environment"},next:{title:"Styling Your Component",permalink:"/msfs-avionics-mirror/docs/getting-started/styling-your-component"}},m=[{value:"Building an Instrument Template",id:"building-an-instrument-template",children:[],level:2},{value:"Linking Your Instrument to Code",id:"linking-your-instrument-to-code",children:[],level:2},{value:"Building a Hello World Component",id:"building-a-hello-world-component",children:[{value:"Framework Imports",id:"framework-imports",children:[],level:3},{value:"DisplayComponent",id:"displaycomponent",children:[],level:3}],level:2},{value:"Rendering Your Component",id:"rendering-your-component",children:[{value:"FSComponent.render()",id:"fscomponentrender",children:[],level:3}],level:2},{value:"Build Your Component",id:"build-your-component",children:[],level:2}],d={toc:m};function u(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-your-first-component"},"Creating Your First Component"),(0,i.kt)("h2",{id:"building-an-instrument-template"},"Building an Instrument Template"),(0,i.kt)("p",null,"In MSFS, all HTML instruments require a HTML template to render to, as well as to pull in any other Javascript and CSS that go along with the instrument. Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"MyInstrument.html")," in your project root with the following content:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/html" id="MyInstrument">\n  <div id="InstrumentContent"></div>\n<\/script>\n\n<link rel="stylesheet" href="MyInstrument.css" />\n<script type="text/html" import-script="/Pages/VCockpit/Instruments/MyInstrument/MyInstrument.js"><\/script>\n')),(0,i.kt)("p",null,"This is a very basic template that can be loaded by the MSFS VCockpit system. First we defined a HTML template, where we put just one ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element with the ID ",(0,i.kt)("inlineCode",{parentName:"p"},"InstrumentContent"),". We then name this HTML template with the ID ",(0,i.kt)("inlineCode",{parentName:"p"},"MyInstrument"),". This ID will be used later to inform the VCockpit system which HTML template to use to display the instrument."),(0,i.kt)("p",null,"We then link to our bundled CSS stylesheet, which we will place alongside our HTML. Finally, we link what will become our bundled and compiled Javascript using the VCockpit ",(0,i.kt)("inlineCode",{parentName:"p"},"import-script")," attribute. This lets the VCockpit system bootstrap its own dependencies, and then load any further dependencies it finds with ",(0,i.kt)("inlineCode",{parentName:"p"},"import-script")," attributes."),(0,i.kt)("h2",{id:"linking-your-instrument-to-code"},"Linking Your Instrument to Code"),(0,i.kt)("p",null,"In the MSFS VCockpit system, all instruments must originate and extend from the class ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseInstrument"),". This class contains code that the system communicates with to bootstrap and initialize the instrument, and place it into the HTML that is displayed on the screen in the simulator. It is then possible to register that class with the VCockpit system as the instrument to be displayed."),(0,i.kt)("p",null,"Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"MyInstrument.tsx")," in the project root alongside your ",(0,i.kt)("inlineCode",{parentName:"p"},"MyInstrument.html")," file. Add the following code to the file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"class MyInstrument extends BaseInstrument {\n  get templateID(): string {\n    return 'MyInstrument';\n  }\n}\n\nregisterInstrument('my-instrument', MyInstrument);\n")),(0,i.kt)("p",null,"Note that this class contains the property ",(0,i.kt)("inlineCode",{parentName:"p"},"templateID"),", which returns a string. This property ",(0,i.kt)("strong",{parentName:"p"},"must")," be provided and the returned string ",(0,i.kt)("strong",{parentName:"p"},"must")," match the name of your instrument template you provided in the HTML, in this case ",(0,i.kt)("inlineCode",{parentName:"p"},"MyInstrument"),"."),(0,i.kt)("p",null,"Finally, we call the VCockpit function ",(0,i.kt)("inlineCode",{parentName:"p"},"registerInstrument()")," to register our instrument class with the system. This function takes two parameters: the name that you would like to give your instrument (any name is fine, and need not match any other IDs or tags), and the instrument class for the VCockpit system to instantiate."),(0,i.kt)("h2",{id:"building-a-hello-world-component"},"Building a Hello World Component"),(0,i.kt)("p",null,"We are going to create a very simple component that displays the text ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello World!")," on the page, within the instrument. Create a file ",(0,i.kt)("inlineCode",{parentName:"p"},"MyComponent.tsx")," in the project root, and add the following code:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FSComponent, DisplayComponent, VNode } from 'msfssdk';\n\nexport class MyComponent extends DisplayComponent<any> {\n  public render(): VNode {\n    return (\n      <div class='my-component'>Hello World!</div>\n    );\n  }\n}\n")),(0,i.kt)("p",null,"Let's go through what's happening in this code a bit."),(0,i.kt)("h3",{id:"framework-imports"},"Framework Imports"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FSComponent, DisplayComponent, VNode } from 'msfssdk';\n")),(0,i.kt)("p",null,"In order to use code from the framework, it must be ",(0,i.kt)("em",{parentName:"p"},"imported")," into the TypeScript file. While a complete discussion of the usage of imports is beyond the scope of these documents, do note that in order to use JSX within a component, you must at least import ",(0,i.kt)("inlineCode",{parentName:"p"},"FSComponent"),". This is similar to needing to import ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," when using React components."),(0,i.kt)("h3",{id:"displaycomponent"},"DisplayComponent"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"export class MyComponent extends DisplayComponent<any> {\n...\n")),(0,i.kt)("p",null,"In the FSComponent framework, all components must extend from ",(0,i.kt)("inlineCode",{parentName:"p"},"DisplayComponent"),", much like in React, all class components must extend from ",(0,i.kt)("inlineCode",{parentName:"p"},"React.Component"),". All components must implement at least one public method, named ",(0,i.kt)("inlineCode",{parentName:"p"},"render()"),", that returns some JSX elements. When the component is rendered to the DOM, this is what will be placed there. This can contain other HTML elements, like ",(0,i.kt)("inlineCode",{parentName:"p"},"div"),"s, other components, or any combination of the two."),(0,i.kt)("p",null,"In this way, just as in React, one can compose components and HTML together seamlessly."),(0,i.kt)("h2",{id:"rendering-your-component"},"Rendering Your Component"),(0,i.kt)("p",null,"Right now, our component lives on its own, ready to display its contents, but it has not been rendered anywhere into our instrument. Go back to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyInstrument.tsx")," file and add the following to the top of the file to import our component as well as enable the usage of JSX:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FSComponent } from 'msfssdk';\nimport { MyComponent } from './MyComponent';\n")),(0,i.kt)("p",null,"Then, add this implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"connectedCallback()")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyInstrument")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"public connectedCallback(): void {\n  super.connectedCallback();\n\n  FSComponent.render(<MyComponent />, document.getElementById('InstrumentContent'));\n}\n")),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Always")," call ",(0,i.kt)("inlineCode",{parentName:"p"},"super.connectedCallback()")," first thing in any implementation of ",(0,i.kt)("inlineCode",{parentName:"p"},"BaseInstrument.connectedCallback()"),". The base class does important work that is necessary for your instrument to function inside its implementation. Failing to call ",(0,i.kt)("inlineCode",{parentName:"p"},"super")," will cause your instrument to fail during load."))),(0,i.kt)("p",null,"The full contents of your file should now look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { FSComponent } from 'msfssdk';\nimport { MyComponent } from './MyComponent';\n\nclass MyInstrument extends BaseInstrument {\n  get templateID(): string {\n    return 'MyInstrument';\n  }\n\n  public connectedCallback(): void {\n    super.connectedCallback();\n\n    FSComponent.render(<MyComponent />, document.getElementById('InstrumentContent'));\n  }\n}\n\nregisterInstrument('my-instrument', MyInstrument);\n")),(0,i.kt)("h3",{id:"fscomponentrender"},"FSComponent.render()"),(0,i.kt)("p",null,"You may notice that we added a call to ",(0,i.kt)("inlineCode",{parentName:"p"},"FSComponent.render()")," in our instrument's ",(0,i.kt)("inlineCode",{parentName:"p"},"connectedCallback()")," function. Like ",(0,i.kt)("inlineCode",{parentName:"p"},"React.render()"),", this function takes JSX and renders it to the specified element. In this case, we are taking our newly created ",(0,i.kt)("inlineCode",{parentName:"p"},"MyComponent")," component, and rendering it to the element with the ID ",(0,i.kt)("inlineCode",{parentName:"p"},"InstrumentContent"),". The was the ID that we gave our single ",(0,i.kt)("inlineCode",{parentName:"p"},"div")," element inside our instrument template."),(0,i.kt)("p",null,"The method ",(0,i.kt)("inlineCode",{parentName:"p"},"connectedCallback()")," will be called by the browser DOM when the ",(0,i.kt)("inlineCode",{parentName:"p"},"MyInstrument")," element, registered via ",(0,i.kt)("inlineCode",{parentName:"p"},"registerInstrument()"),", is instantiated fully and inserted into the DOM on the page. Therefore, our component will be rendered using ",(0,i.kt)("inlineCode",{parentName:"p"},"FSComponent.render()")," once the instrument is in the DOM, and guarantees that the div with the ID ",(0,i.kt)("inlineCode",{parentName:"p"},"InstrumentContent")," is available to render to."),(0,i.kt)("h2",{id:"build-your-component"},"Build Your Component"),(0,i.kt)("p",null,"You can now build your component using the NPM script that we added in the previous steps:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"> npm run build\n")),(0,i.kt)("p",null,"This will run our Rollup build and output our built files to the ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," folder. You can then copy the HTML file from the root and the compiled Javascript file from ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," to your MSFS package sources folder, and run your package build and resync in MSFS to see your instrument on your panel."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The location of the Javascript file within the package sources must match the path that was provided in the HTML template ",(0,i.kt)("inlineCode",{parentName:"p"},"import-script")," attribute. In this case, that attribute is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"/Pages/VCockpit/Instruments/MyInstrument/MyInstrument.js"),". All HTML sources loaded by the Coherent GT framework in MSFS reside in the ",(0,i.kt)("inlineCode",{parentName:"p"},"html_ui")," root folder, so the final package folder path that you should copy the file to should be ",(0,i.kt)("inlineCode",{parentName:"p"},"html_ui/Pages/VCockpit/Instruments/MyInstrument/MyInstrument.js"),"."))))}u.isMDXComponent=!0}}]);