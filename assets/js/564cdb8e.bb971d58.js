"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[213],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>k});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,k=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?t.createElement(k,l(l({ref:n},c),{},{components:r})):t.createElement(k,l({ref:n},c))}));function k(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},683:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var t=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4},l="Funktionen",o={unversionedId:"learning/javascript/basics/functions",id:"learning/javascript/basics/functions",title:"Funktionen",description:"Lernziele",source:"@site/docs/learning/javascript/basics/functions.mdx",sourceDirName:"learning/javascript/basics",slug:"/learning/javascript/basics/functions",permalink:"/software-engineering-toolbox/docs/learning/javascript/basics/functions",draft:!1,editUrl:"https://github.com/wasdJens/software-engineering-toolbox/docs/learning/javascript/basics/functions.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"learningSidebar",previous:{title:"Control Flow",permalink:"/software-engineering-toolbox/docs/learning/javascript/basics/control-flow"},next:{title:"Arrays",permalink:"/software-engineering-toolbox/docs/learning/javascript/basics/arrays"}},u={},s=[{value:"Lernziele",id:"lernziele",level:2},{value:"Weiterf\xfchrende Links",id:"weiterf\xfchrende-links",level:2},{value:"Grundlagen",id:"grundlagen",level:2},{value:"Function Expressions",id:"function-expressions",level:2},{value:"Parameter",id:"parameter",level:2},{value:"Funktionen als Parameter",id:"funktionen-als-parameter",level:2},{value:"Arrow Functions",id:"arrow-functions",level:2},{value:"\xdcbung",id:"\xfcbung",level:2}],c={toc:s},p="wrapper";function d(e){let{components:n,...r}=e;return(0,a.kt)(p,(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"funktionen"},"Funktionen"),(0,a.kt)("h2",{id:"lernziele"},"Lernziele"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Funktionen definieren"),(0,a.kt)("li",{parentName:"ul"},"Arrow functions"),(0,a.kt)("li",{parentName:"ul"},"Parameter \xdcbergabe")),(0,a.kt)("h2",{id:"weiterf\xfchrende-links"},"Weiterf\xfchrende Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Glossary/IIFE"},"https://developer.mozilla.org/en-US/docs/Glossary/IIFE")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions"))),(0,a.kt)("h2",{id:"grundlagen"},"Grundlagen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Funktionen werden mit dem ",(0,a.kt)("inlineCode",{parentName:"li"},"function")," keyword deklariert"),(0,a.kt)("li",{parentName:"ul"},"An Funktionen k\xf6nnen beliebige Parameter \xfcbergeben werden"),(0,a.kt)("li",{parentName:"ul"},"Funktionen sind Objekte in Javascript")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function square(number) {\n  return number * number;\n}\n\nconsole.log(square(5)); // 25\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Funktionen geben immer ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined")," zur\xfcck"),(0,a.kt)("li",{parentName:"ul"},"Um einen Wert zur\xfcckzugeben verwendet man das ",(0,a.kt)("inlineCode",{parentName:"li"},"return")," statement"),(0,a.kt)("li",{parentName:"ul"},"Primitive Paramter werden ",(0,a.kt)("inlineCode",{parentName:"li"},"pass by value")," an die Funktion \xfcbergeben"),(0,a.kt)("li",{parentName:"ul"},"Nicht primitive Parameter werden ",(0,a.kt)("inlineCode",{parentName:"li"},"pass by reference")," an die Funktion \xfcbergeben"),(0,a.kt)("li",{parentName:"ul"},"Das bedeutet wenn Sie eine Property ver\xe4ndern innerhalb der Funktion, wird diese \xc4nderung auch au\xdferhalb sichtbar")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const phone = {\n  make: 'Apple',\n  model: 'iPhone',\n  year: '2021'\n}\n\nconsole.log(phone.year); // 2021\n\nfunction updatePhone(phone) {\n  phone.year = '2022';\n}\n\nupdatePhone(phone);\nconsole.log(phone.year); // 1995\n")),(0,a.kt)("h2",{id:"function-expressions"},"Function Expressions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Funktionen k\xf6nnen auch anonym deklariert werden"),(0,a.kt)("li",{parentName:"ul"},"Der Unterschied zu einer normalen Funktion ist der Funktion Name"),(0,a.kt)("li",{parentName:"ul"},"K\xf6nnen auch als ",(0,a.kt)("inlineCode",{parentName:"li"},"Immediately Invoked Function")," Expression verwendet werden (Funktionen die sofort ausgef\xfchrt wird)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const square = function(number) {\n  return number * number;\n}\n\nconsole.log(square(5)) // 25\n")),(0,a.kt)("h2",{id:"parameter"},"Parameter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Nicht \xfcbergebene Parameter werden ",(0,a.kt)("inlineCode",{parentName:"li"},"undefined")),(0,a.kt)("li",{parentName:"ul"},"Default Parameter k\xf6nnen angegeben werden")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function addPrefix(input, prefix = 'id: ') {\n  return `${prefix} ${input}`\n}\nconsole.log(addPrefix('Test')); // id: Test\nconsole.log(addPrefix('iPhone', 'unreleased')) // unreleased iPhone\n")),(0,a.kt)("h2",{id:"funktionen-als-parameter"},"Funktionen als Parameter"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Funktionen  k\xf6nnen auch als Parameter \xfcbergeben werden")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const upperCase = function(value) {\n  return (value.toUpperCase())\n}\n\nfunction transformUserInput(upperCaseFunction, input) {\n  return upperCaseFunction(input);\n}\n\nconsole.log(transformUserInput(upperCase, 'Hallo Welt')); // HALLO WELT\n")),(0,a.kt)("h2",{id:"arrow-functions"},"Arrow Functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Funktionen k\xf6nnen auch als ",(0,a.kt)("inlineCode",{parentName:"li"},"arrow functions =>")," deklariert werden"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Arrow functions")," haben einige Einschr\xe4nkungen gegen\xfcber normalen Funktionen"),(0,a.kt)("li",{parentName:"ul"},"Geben implizit einen R\xfcckgabewert zur\xfcck")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const sum = (a,b) => a +b;\nconsole.log(sum(25,10)); // 35\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Kein binding auf ",(0,a.kt)("inlineCode",{parentName:"li"},"this")," operator"),(0,a.kt)("li",{parentName:"ul"},"Sollten nicht als Methoden in Objekten deklariert werden"),(0,a.kt)("li",{parentName:"ul"},"K\xf6nnen nicht als Konstruktor verwendet werden")),(0,a.kt)("h2",{id:"\xfcbung"},"\xdcbung"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Definieren Sie sich zwei beliebige Funktionen f\xfcr das Subtrahieren von zwei Zahlen"),(0,a.kt)("li",{parentName:"ul"},"Definieren Sie sich eine Arrow Function als anonyme Funktion"),(0,a.kt)("li",{parentName:"ul"},"Verwenden Sie eine beliebige Funktion als Parameter in einer anderen Funktion")))}d.isMDXComponent=!0}}]);