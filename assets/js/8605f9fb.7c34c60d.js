"use strict";(self.webpackChunkdocs_api=self.webpackChunkdocs_api||[]).push([[1789],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9594:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],l={sidebar_position:1},s="Setting Up Your Environment",p={unversionedId:"getting-started/setting-up-your-environment",id:"getting-started/setting-up-your-environment",isDocsHomePage:!1,title:"Setting Up Your Environment",description:"Prerequisites",source:"@site/docs/getting-started/setting-up-your-environment.md",sourceDirName:"getting-started",slug:"/getting-started/setting-up-your-environment",permalink:"/msfs-avionics-mirror/docs/getting-started/setting-up-your-environment",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"MSFS Avionics Framework",permalink:"/msfs-avionics-mirror/docs/intro"},next:{title:"Creating Your First Component",permalink:"/msfs-avionics-mirror/docs/getting-started/creating-your-first-component"}},u=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Getting the Framework Source",id:"getting-the-framework-source",children:[],level:2},{value:"Building the Framework",id:"building-the-framework",children:[],level:2},{value:"Creating a Framework Project",id:"creating-a-framework-project",children:[],level:2},{value:"Installing the Framework Into Your Project",id:"installing-the-framework-into-your-project",children:[],level:2},{value:"Initializing Your TypeScript Project",id:"initializing-your-typescript-project",children:[],level:2},{value:"Installing and Configuring Rollup",id:"installing-and-configuring-rollup",children:[],level:2}],c={toc:u};function m(e){var t=e.components,n=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setting-up-your-environment"},"Setting Up Your Environment"),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"The examples in this documentation assume that you have already set up a MSFS project in the SDK/dev mode, have an aircraft ",(0,o.kt)("inlineCode",{parentName:"p"},"panel.cfg")," appropriately created or in use, and understand how to modify that config file to point at the example HTML avionics instrument. For more information on how to use and set up the aircraft ",(0,o.kt)("inlineCode",{parentName:"p"},"panel.cfg"),", please see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.flightsimulator.com/html/index.htm#t=Content_Configuration%2FInstruments%2FPanel_Config_Definition.htm"},"MSFS SDK Documentation"),"."),(0,o.kt)("p",null,"You will also need ",(0,o.kt)("strong",{parentName:"p"},"Node 12+"),", ",(0,o.kt)("strong",{parentName:"p"},"npm"),", and ",(0,o.kt)("strong",{parentName:"p"},"git")," installed on your machine, as well as a quality code editor. We recommend Visual Studio Code for this purpose."),(0,o.kt)("h2",{id:"getting-the-framework-source"},"Getting the Framework Source"),(0,o.kt)("p",null,"Getting the framework source is very straightforward: simply clone the GitHub repository to a local folder on your machine by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> git clone https://github.com/microsoft/msfs-avionics-mirror.git\n")),(0,o.kt)("p",null,"This will clone the repository into the ",(0,o.kt)("inlineCode",{parentName:"p"},"msfs-avionics-mirror")," folder under where you ran the command."),(0,o.kt)("h2",{id:"building-the-framework"},"Building the Framework"),(0,o.kt)("p",null,"Navigate to the ",(0,o.kt)("inlineCode",{parentName:"p"},"msfs-avionics-mirror")," folder on the command line and use the following commands to build the framework:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> cd ./src/sdk\n> npm install\n> npm run build\n")),(0,o.kt)("p",null,"This will install all of the required framework prerequisites into the project and then build the framework so it can be used by your components later on."),(0,o.kt)("h2",{id:"creating-a-framework-project"},"Creating a Framework Project"),(0,o.kt)("p",null,"Create a folder next to the ",(0,o.kt)("inlineCode",{parentName:"p"},"msfs-avionics-mirror")," folder (but not inside it) that will house your project. For this tutorial, we will call it ",(0,o.kt)("inlineCode",{parentName:"p"},"my-avionics"),". After you have create that folder, navigate to it on the command line and create an npm project:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> npm init\n")),(0,o.kt)("p",null,"NPM will ask you a series of questions; you can simply press ",(0,o.kt)("inlineCode",{parentName:"p"},"Enter")," to accept the defaults. After this command has finished, you should now have a ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file in your ",(0,o.kt)("inlineCode",{parentName:"p"},"my-avionics")," folder."),(0,o.kt)("h2",{id:"installing-the-framework-into-your-project"},"Installing the Framework Into Your Project"),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Ensure that you have completed the 'Building the Framework' step or this step will fail."))),(0,o.kt)("p",null,"Now that you have a npm project initialized and the framework source built, you can install the framework into your project and TypeScript itself:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> npm install ../msfs-avionics-mirror/src/sdk/build typescript --save-dev\n")),(0,o.kt)("p",null,"Additionally, copy the contents of ",(0,o.kt)("inlineCode",{parentName:"p"},"msfs-avionics-mirror/src/msfstypes")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"types/msfstypes")," within your ",(0,o.kt)("inlineCode",{parentName:"p"},"my-avionics")," folder. You should then have ",(0,o.kt)("inlineCode",{parentName:"p"},"my-avionics/types/msfstypes"),", which contains a number of important MSFS SDK TypeScript typings (",(0,o.kt)("em",{parentName:"p"},"d.ts files"),") required during development time."),(0,o.kt)("h2",{id:"initializing-your-typescript-project"},"Initializing Your TypeScript Project"),(0,o.kt)("p",null,"While it is possible to use the framework from plain vanilla Javascript, we highly recommend using TypeScript for development, and all the examples presented will assume that you are using TypeScript as your language of choice. To initialize your TypeScript project, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"--init")," option of ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> npx tsc --init\n")),(0,o.kt)("p",null,"This will create a ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," that contains the compilation options for TypeScript for this project. We will want to adjust some of the options within this file. Ensure that your ",(0,o.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," has the following options set:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'}\n  "compilerOptions": {\n    "incremental": true, /* Enables incremental builds */\n    "target": "es2017", /* Specifies the ES2017 target, compatible with Coherent GT */\n    "module": "es2015", /* Ensures that modules are at least es2015 */\n    "strict": true, /* Enables strict type checking, highly recommended but optional */\n    "esModuleInterop": true, /* Emits additional JS to work with CommonJS modules */\n    "skipLibCheck": true, /* Skip type checking on library .d.ts files */\n    "forceConsistentCasingInFileNames": true, /* Ensures correct import casing */\n    "outDir": "build", /* Sets the output folder to ./build */\n    "moduleResolution": "node", /* Enables compatibility with MSFS SDK bare global imports */\n    "jsxFactory": "FSComponent.buildComponent", /* Required for FSComponent framework JSX */\n    "jsxFragmentFactory": "FSComponent.Fragment", /* Required for FSComponent framework JSX */\n    "jsx": "react" /* Required for FSComponent framework JSX */\n  }\n}\n')),(0,o.kt)("h2",{id:"installing-and-configuring-rollup"},"Installing and Configuring Rollup"),(0,o.kt)("p",null,"Because the Coherent GT system used by MSFS uses a custom URL scheme (",(0,o.kt)("em",{parentName:"p"},"coui://"),"), it can be difficult to use the standard module systems and import syntaxes available. We recommend using a bundling system to bundle your project into a single file, and we will configure Rollup for that purpose here."),(0,o.kt)("p",null,"To install Rollup along with a few plugins we will use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"> npm install rollup @rollup/plugin-node-resolve @rollup/plugin-typescript rollup-plugin-import-css --save-dev\n")),(0,o.kt)("p",null,"This will install Rollup itself, as well as the following plugins:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"plugin-typescript")," - Allows Rollup to bundle and compile TypeScript in one step, without needing to run ",(0,o.kt)("inlineCode",{parentName:"li"},"tsc")," manually."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"plugin-node-resolve")," - Allows Rollup to resolve packages that were installed via NPM, such as the avionics framework, and bundle that along with your code"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"rollup-plugin-import-css")," - Allows you to use import declarations in your code (like ",(0,o.kt)("inlineCode",{parentName:"li"},"import './MyComponent.css'"),") that point to CSS, and then bundle all that CSS into a single CSS file")),(0,o.kt)("p",null,"Once everything is installed, create a ",(0,o.kt)("inlineCode",{parentName:"p"},"rollup.config.js")," file in your project root with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"import typescript from '@rollup/plugin-typescript';\nimport resolve from '@rollup/plugin-node-resolve';\nimport css from 'rollup-plugin-import-css';\n\nexport default {\n  input: 'MyInstrument.tsx',\n  output: {\n    dir: 'build',\n    format: 'es'\n  },\n  plugins: [css({ output: 'MyInstrument.css' }), resolve(), typescript()]\n}\n")),(0,o.kt)("p",null,"This configuration imports the plugins that we installed earlier, and then exports a Rollup configuration. The configuration takes in ",(0,o.kt)("inlineCode",{parentName:"p"},"MyInstrument.tsx")," and will output the bundle into the ",(0,o.kt)("inlineCode",{parentName:"p"},"./build")," folder with the Coherent GT/MSFS compatible ES module format. We also configure the CSS plugin to output a bundled ",(0,o.kt)("inlineCode",{parentName:"p"},"MyInstrument.css"),", which will also appear in the output folder."),(0,o.kt)("p",null,"Finally, add the following to your ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," file to configure an NPM step that will run your Rollup build:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'...\n"scripts": {\n  "build": "npx rollup -c" //Add this line to the scripts configuration object\n},\n...\n')))}m.isMDXComponent=!0}}]);