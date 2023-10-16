"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[9197],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),c=r,k=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return t?a.createElement(k,l(l({ref:n},u),{},{components:t})):a.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6992:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={sidebar_position:1},l="Getting Started",o={unversionedId:"learning/javascript/node-js/usage",id:"learning/javascript/node-js/usage",title:"Getting Started",description:"Installation",source:"@site/docs/learning/javascript/node-js/usage.mdx",sourceDirName:"learning/javascript/node-js",slug:"/learning/javascript/node-js/usage",permalink:"/software-engineering-toolbox/docs/learning/javascript/node-js/usage",draft:!1,editUrl:"https://github.com/wasdJens/software-engineering-toolbox/docs/learning/javascript/node-js/usage.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"learningSidebar",previous:{title:"Introduction",permalink:"/software-engineering-toolbox/docs/learning/javascript/node-js/intro"}},s={},d=[{value:"Installation",id:"installation",level:2},{value:"Das erste Programm",id:"das-erste-programm",level:2},{value:"Standalone NodeJS",id:"standalone-nodejs",level:2},{value:"Mit Modulen Arbeiten",id:"mit-modulen-arbeiten",level:2},{value:"CommonJS",id:"commonjs",level:3},{value:"ESModules",id:"esmodules",level:3},{value:"NPM Packages installieren",id:"npm-packages-installieren",level:2},{value:"\xdcbung",id:"\xfcbung",level:2}],u={toc:d},p="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NodeJS ist f\xfcr alle g\xe4ngigen Betriebssysteme Verf\xfcgbar"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")),(0,r.kt)("li",{parentName:"ul"},"NodeJS installiert automatisch NPM mit")),(0,r.kt)("h2",{id:"das-erste-programm"},"Das erste Programm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nach der Node Installation k\xf6nnen Javascript Programme mit ",(0,r.kt)("inlineCode",{parentName:"li"},"node")," ausgef\xfchrt werden")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const message = "Hello World";\nconsole.log(message);\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node program.js\n")),(0,r.kt)("h2",{id:"standalone-nodejs"},"Standalone NodeJS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mit dem Befehl ",(0,r.kt)("inlineCode",{parentName:"li"},"node")," kann eine interaktive Javascript Umgebung aufgerufen werden"),(0,r.kt)("li",{parentName:"ul"},"Hier k\xf6nnen beliebige Javascript Befehle ausgef\xfchrt werden")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"node\n")),(0,r.kt)("h2",{id:"mit-modulen-arbeiten"},"Mit Modulen Arbeiten"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"NodeJS kann mit CommonJS als auch ECMAscriot Modules (ESModules) verwendet werden",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Als Standard wird das CommonJS Module System verwendet"),(0,r.kt)("li",{parentName:"ul"},"Mit der Dateiendung ",(0,r.kt)("inlineCode",{parentName:"li"},".mjs")," k\xf6nnen ESModules verwendet werden"),(0,r.kt)("li",{parentName:"ul"},"Alternativ kann in der package.json der module type definiert werden")))),(0,r.kt)("h3",{id:"commonjs"},"CommonJS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In CommonJS werden Funktionalit\xe4ten aus Node mit ",(0,r.kt)("inlineCode",{parentName:"li"},"require")," importiert werden")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const fs = require('fs');\nconst data = fs.readFileSync('users.txt', 'utf8');\nconsole.log(data.toString())\n")),(0,r.kt)("h3",{id:"esmodules"},"ESModules"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ESModules kann auf die ",(0,r.kt)("inlineCode",{parentName:"li"},"import")," Syntax zur\xfcckgegriffen werden")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { readFileSync } from 'node:js';\n\nconst data = fs.readFileSync('users.txt', 'utf8');\nconsole.log(data.toString())\n")),(0,r.kt)("h2",{id:"npm-packages-installieren"},"NPM Packages installieren"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In Javascript Programmen ist es \xfcblich mit externen paketen zu arbeiten"),(0,r.kt)("li",{parentName:"ul"},"Mit NPM k\xf6nnen wir solche Pakete unserer Anwendung hinzuf\xfcgen"),(0,r.kt)("li",{parentName:"ul"},"Pakete werden nur lokal installiert"),(0,r.kt)("li",{parentName:"ul"},"Um ein Projekt f\xfcr NPM vorzubereiten, verwendet man den ",(0,r.kt)("inlineCode",{parentName:"li"},"npm init")," befehl")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm init\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nachdem man das Setup abgeschlossen hat liegt eine ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," Datei im Verzeichnis")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-project",\n  "version": "1.0.0",\n  "description": "My first NodeJS project",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n  },\n  "author": "Jens Reiner",\n  "license": "ISC"\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," ist die wichtigste Datei in einem Node Projekt"),(0,r.kt)("li",{parentName:"ul"},"Sie beschreibt welche Pakete unsere Anwendung verwendet"),(0,r.kt)("li",{parentName:"ul"},"Sie kann auch Scripte ausf\xfchren wie z.B. ",(0,r.kt)("inlineCode",{parentName:"li"},"build")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"test")),(0,r.kt)("li",{parentName:"ul"},"Ein Paket kann \xfcber ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install <paket name>")," installiert werden")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm install express\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In unserer ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," finden wir nun das express Paket unter ",(0,r.kt)("inlineCode",{parentName:"li"},"dependencies"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-project",\n  "version": "1.0.0",\n  "description": "My first NodeJS project",\n  "main": "index.js",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n  },\n  "author": "Jens Reiner",\n  "license": "ISC",\n  "dependencies": {\n    "express": "^4.17.1"\n  }\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Installation von express hat auch weitere Abh\xe4ngigkeiten installiert"),(0,r.kt)("li",{parentName:"ul"},"NPM legt alle installierten ",(0,r.kt)("inlineCode",{parentName:"li"},"dependencies")," in einen ",(0,r.kt)("inlineCode",{parentName:"li"},"node_modules")," Ordner ab"),(0,r.kt)("li",{parentName:"ul"},"Um ein Projekt initial zu installieren kann ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install")," verwendet werden"),(0,r.kt)("li",{parentName:"ul"},"Innerhalb der ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," Datei kann die property ",(0,r.kt)("inlineCode",{parentName:"li"},"type: module")," angegeben werden, um Node Programme als ESModule auszuf\xfchren")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "my-project",\n  "version": "1.0.0",\n  "description": "My first NodeJS project",\n  "main": "index.js",\n  "type": "module",\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1",\n  },\n  "author": "Jens Reiner",\n  "license": "ISC",\n  "dependencies": {\n    "express": "^4.17.1"\n  }\n}\n')),(0,r.kt)("h2",{id:"\xfcbung"},"\xdcbung"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erstellen Sie eine ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," Datei und schreiben Sie sich ein kleines Javascript Programm, welches Sie mit ",(0,r.kt)("inlineCode",{parentName:"li"},"node")," ausf\xfchren k\xf6nnen"),(0,r.kt)("li",{parentName:"ul"},"Installieren Sie sich ein Paket aus npm und integrieren sie die Funktionalit\xe4t in ihrem Programm",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bspw: date-fns")))))}m.isMDXComponent=!0}}]);