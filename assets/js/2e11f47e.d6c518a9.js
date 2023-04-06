"use strict";(self.webpackChunkdocusaurus_docs=self.webpackChunkdocusaurus_docs||[]).push([[263],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var l=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=l.createContext({}),u=function(e){var n=l.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return l.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),d=r,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||a;return t?l.createElement(g,i(i({ref:n},p),{},{components:t})):l.createElement(g,i({ref:n},p))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<a;u++)i[u]=t[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},16:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=t(7462),r=(t(7294),t(3905));const a={sidebar_position:3},i="Control Flow",o={unversionedId:"learning/javascript/control-flow",id:"learning/javascript/control-flow",title:"Control Flow",description:"Lernziele",source:"@site/docs/learning/javascript/control-flow.mdx",sourceDirName:"learning/javascript",slug:"/learning/javascript/control-flow",permalink:"/software-engineering-toolbox/docs/learning/javascript/control-flow",draft:!1,editUrl:"https://github.com/wasdJens/software-engineering-toolbox/docs/learning/javascript/control-flow.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"learningSidebar",previous:{title:"Grundlagen",permalink:"/software-engineering-toolbox/docs/learning/javascript/basics"}},s={},u=[{value:"Lernziele",id:"lernziele",level:2},{value:"Weiterf\xfchrende Links",id:"weiterf\xfchrende-links",level:2},{value:"Binary Operators",id:"binary-operators",level:2},{value:"Werte vergleichen",id:"werte-vergleichen",level:2},{value:"Ternary Operator (?)",id:"ternary-operator-",level:2},{value:"If Statement",id:"if-statement",level:2},{value:"Switch Statement",id:"switch-statement",level:2},{value:"Loops",id:"loops",level:2},{value:"For Loop",id:"for-loop",level:3},{value:"Do ... While",id:"do--while",level:3},{value:"While",id:"while",level:3},{value:"For ... in",id:"for--in",level:3},{value:"For ... of",id:"for--of",level:3},{value:"Kommentare",id:"kommentare",level:2},{value:"\xdcbung",id:"\xfcbung",level:2}],p={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"control-flow"},"Control Flow"),(0,r.kt)("h2",{id:"lernziele"},"Lernziele"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bedingunte Ausf\xfchrungen"),(0,r.kt)("li",{parentName:"ul"},"Schleifen"),(0,r.kt)("li",{parentName:"ul"},"Kommentare")),(0,r.kt)("h2",{id:"weiterf\xfchrende-links"},"Weiterf\xfchrende Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dorey.github.io/JavaScript-Equality-Table/"},"https://dorey.github.io/JavaScript-Equality-Table/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while"},"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while"))),(0,r.kt)("h2",{id:"binary-operators"},"Binary Operators"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Binary Operatoren f\xfcr das vergleichen von Werten (Oder Variablen)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'console.log(3 > 2); // true\nconsole.log(3 < 2); // false\n\nconsole.log(25 >= 10); // true\nconsole.log(100 <= 50); // false\n\nconsole.log("Apple" == "Orange") // false\nconsole.log("Apple" != "Cherry") // true\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Logische Operatoren")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(true && false); // false\nconsole.log(true && true); // true\n\nconsole.log(true || false); // true\nconsole.log(false || false) // false\n\n// unary operator\nconsole.log(!true); // false\nconsole.loog(!false); // true\n")),(0,r.kt)("h2",{id:"werte-vergleichen"},"Werte vergleichen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"==")," Abstract Equality (Datentyp Umwandlung)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"===")," Strict Equality (Keine Umwandlung)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Object.is")," (Keine Umwandlung ES2015)"),(0,r.kt)("li",{parentName:"ul"},"F\xfcr das Vergleichen von Zwei Variablen sollte immer ",(0,r.kt)("inlineCode",{parentName:"li"},"===")," verwendet werden"),(0,r.kt)("li",{parentName:"ul"},"Object.is sollte auch nur in Ausnahmen verwendet werden",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Wenn man mit Float Numbers arbeitet und +0 und -0 unterschiedlich behandelt"),(0,r.kt)("li",{parentName:"ul"},"Wenn man mit NaN arbeitet bei Floating Point Zahlen (Negative Unendlichkeit addiert zu positiver Unendlichkeit)")))),(0,r.kt)("h2",{id:"ternary-operator-"},"Ternary Operator (?)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nimmt eine Bedingung und wertet diese aus"),(0,r.kt)("li",{parentName:"ul"},"Ist die Bedingung true wird der left hand operator ausgef\xfchrt"),(0,r.kt)("li",{parentName:"ul"},"Ist die Bedingung false wird der right hand operator ausgef\xfchrt")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"console.log(true ? 1 : 2); // 1\nconsole.log(false ? 1 : 2); // 2\n")),(0,r.kt)("h2",{id:"if-statement"},"If Statement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bedinungen pr\xfcft man in Javascript mit ",(0,r.kt)("inlineCode",{parentName:"li"},"if")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"if(condition)")," evaluiert einen Ausdruck und sprint in den n\xe4chsten Block, wenn die Bedingung zutrifft (true)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const price = 800;\nconst discount = 200;\nlet canPurchase;\n\n// When price is equal or lower than 600 we want to purchase the item\nif ((price - discount) <= 600) {\n  canPurchase = true;\n} else { // When price is larger than 600 we can not purchase it\n  canPurchase = false;\n}\nconsole.log(canPurchase); // true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die zu pr\xfcfende Bedingung wird immer in einen Boolean Wert umgewandelt"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"0"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"undefined"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"NaN"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"''")," (empty string) sind immer ",(0,r.kt)("inlineCode",{parentName:"li"},"false"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let userInput =  null;\nlet hasUserInput;\n\nif (userInput) {\n  hasUserInput = true;\n} else {\n  hasUserInput = false;\n}\nconsole.log(hasUserInput) // false\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Verzweigungen k\xf6nnen mit else und else if ausgef\xfchrt werden"),(0,r.kt)("li",{parentName:"ul"},"if kann auch ohne Verzweigung verwendet werden")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const price = 2000;\nif (price < 2000) {\n  console.log('Cheap!');\n} else if (price > 2000) {\n  console.log('Expensive!');\n} else {\n  console.log('Just right!');\n}\n")),(0,r.kt)("h2",{id:"switch-statement"},"Switch Statement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Mehrere if Statements k\xf6nnen vereinfacht werden mit einem switch"),(0,r.kt)("li",{parentName:"ul"},"Switch hat einen oder n case Abschnitt und einen optionalen default Abschnitt"),(0,r.kt)("li",{parentName:"ul"},"Case Abschnitte werden mit break beendet")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let price = 2000;\nswitch (price) {\n  case 2000:\n    console.log('Just right!');\n    break;\n  case 1000:\n    console.log('Cheap!');\n    break;\n  case 3000:\n    console.log('Expensive!');\n    break;\n  default:\n    console.log('Unknown price!');\n}\n")),(0,r.kt)("h2",{id:"loops"},"Loops"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Schleifen k\xf6nnen Ausdr\xfccke wiederholt ausf\xfchren"),(0,r.kt)("li",{parentName:"ul"},"In Javascript gibt es die g\xe4ngigen Schleifen Konstrukte",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"for"),(0,r.kt)("li",{parentName:"ul"},"while"),(0,r.kt)("li",{parentName:"ul"},"do while"))),(0,r.kt)("li",{parentName:"ul"},"Zus\xe4tzlich",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"for in"),(0,r.kt)("li",{parentName:"ul"},"for of"))),(0,r.kt)("li",{parentName:"ul"},"Mit break kann man einen Schleifen durchlauf abbrechen"),(0,r.kt)("li",{parentName:"ul"},"Mit continue kann man zur n\xe4chsten Iteration springen")),(0,r.kt)("h3",{id:"for-loop"},"For Loop"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For loops wiederholen sich so lange bis eine Bedingung nicht mehr erf\xfcllt ist"),(0,r.kt)("li",{parentName:"ul"},"Die JS for loop ist \xe4hnlich zu Java und C")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"for (begin; condition; step) {\n  // repeat until false\n}\n\nfor (let i = 0; i <= 100; i++) {\n  console.log(i);\n}\n")),(0,r.kt)("h3",{id:"do--while"},"Do ... While"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"do .. while wiederholen sich bis eine Bedingung erf\xfcllt ist"),(0,r.kt)("li",{parentName:"ul"},"Die Bedingung wird erst nach dem ersten Durchlauf gepr\xfcft")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"do\n  statement\nwhile (condition);\n\nlet i = 0;\ndo {\n  console.log(i)\n  i++\n} while (i <= 100);\n")),(0,r.kt)("h3",{id:"while"},"While"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"while wiederholt sich solange die Bedingung erf\xfcllt ist"),(0,r.kt)("li",{parentName:"ul"},"Die Bedingung wird vor dem ersten Durchlauf gepr\xfcft")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"while(condition) {\n\n}\n\nlet i = 0;\nwhile (i <= 100) {\n  console.log(i);\n  i++;\n}\n")),(0,r.kt)("h3",{id:"for--in"},"For ... in"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die for \u2026 in Loop kann \xfcber Objekt properties loopen ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const user = {\n  name: "Jens",\n  age: 25,\n  gender: "m",\n}\n\nfor (const i in user) {\n  console.log(i); // name, age, gender\n}\n')),(0,r.kt)("h3",{id:"for--of"},"For ... of"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die for \u2026 of Loop iteriert \xfcber iterierbare Objekte (String, Array, Map, Set etc.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const array1= ['A', 'B', 'C', 'D'];\n\nfor (const char of array1) {\n  console.log(char); // A, B, C, D\n}\n")),(0,r.kt)("h2",{id:"kommentare"},"Kommentare"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In JS entweder mit // f\xfcr single-line-comments"),(0,r.kt)("li",{parentName:"ul"},"Alternativ /* */ f\xfcr multi-block-comments")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// This is a single line comment\n\n/**\n * This is a multi-line comment\n */\n")),(0,r.kt)("h2",{id:"\xfcbung"},"\xdcbung"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Definieren Sie sich eine Schleife die alle zahlen von 0 \u2013 25 ausgibt"),(0,r.kt)("li",{parentName:"ul"},"Definieren Sie sich ein Objekt und eine Schleife, welche das Objekt mit seinen key value Werten ausgibt"),(0,r.kt)("li",{parentName:"ul"},"Definieren Sie sich eine endlos Schleife")))}m.isMDXComponent=!0}}]);