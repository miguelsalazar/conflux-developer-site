(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),c=n(9),r=(n(0),n(202)),o={},s={id:"js-conflux-sdk/README",title:"README",description:"js-conflux-sdk",source:"@site/docs/js-conflux-sdk/README.md",permalink:"/docs/js-conflux-sdk/README",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/README.md",lastUpdatedAt:1603080205},i=[{value:"npm",id:"npm",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Quick Usage",id:"quick-usage",children:[{value:"Nodejs",id:"nodejs",children:[]},{value:"Frontend",id:"frontend",children:[]}]},{value:"Complete usage",id:"complete-usage",children:[{value:"Send an transaction",id:"send-an-transaction",children:[]},{value:"Advanced usage of <code>sendTransaction</code>",id:"advanced-usage-of-sendtransaction",children:[]},{value:"Deploy or interact with contract",id:"deploy-or-interact-with-contract",children:[]}]},{value:"Document",id:"document",children:[]},{value:"Change log",id:"change-log",children:[]}],l={rightToc:i};function u(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"js-conflux-sdk"},"js-conflux-sdk"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/js-conflux-sdk"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/js-conflux-sdk.svg",alt:"npm"})))),Object(r.b)("h2",{id:"npm"},Object(r.b)("a",Object(a.a)({parentName:"h2"},{href:"https://www.npmjs.com/package/js-conflux-sdk"}),Object(r.b)("img",Object(a.a)({parentName:"a"},{src:"https://img.shields.io/npm/dm/js-conflux-sdk.svg",alt:"npm"})))),Object(r.b)("p",null,"JavaScript Conflux Software Development Kit"),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"npm install js-conflux-sdk")),Object(r.b)("h2",{id:"quick-usage"},"Quick Usage"),Object(r.b)("h3",{id:"nodejs"},"Nodejs"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { Conflux } = require('js-conflux-sdk');\n\nasync function main() {\n  // initalize a Conflux object\n  const cfx = new Conflux({\n    url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n    defaultGasPrice: 100,\n    defaultGas: 1000000,\n    logger: console,\n  });\n  // get balance\n  const balance = await cfx.getBalance('0xbbd9e9be525ab967e633bcdaeac8bd5723ed4d6b');\n  console.log(balance); // 937499420597305000n\n}\n\nmain();\n")),Object(r.b)("p",null,"require deep nested file/dir  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const util = require('js-conflux-sdk/src/util');\n")),Object(r.b)("h3",{id:"frontend"},"Frontend"),Object(r.b)("h4",{id:"umd"},"umd"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Conflux } from 'js-conflux-sdk/dist/js-conflux-sdk.umd.min.js';\n")),Object(r.b)("p",null,"or if your bundler supports the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.npmjs.com/files/package.json#browser"}),Object(r.b)("inlineCode",{parentName:"a"},"browser")," field")," in ",Object(r.b)("inlineCode",{parentName:"p"},"package.json"),"  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"import { Conflux } from 'js-conflux-sdk';\n")),Object(r.b)("p",null,"or  "),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),'<script type="text/javascript" src="node_modules/js-conflux-sdk/dist/js-conflux-sdk.umd.min.js"><\/script>\n<script type="text/javascript">\n  const cfx = new window.Conflux.Conflux({\n    url: \'http://testnet-jsonrpc.conflux-chain.org:12537\',\n    defaultGasPrice: 100,\n    defaultGas: 1000000,\n    logger: console,\n  });\n<\/script>\n')),Object(r.b)("h2",{id:"complete-usage"},"Complete usage"),Object(r.b)("h3",{id:"send-an-transaction"},"Send an transaction"),Object(r.b)("p",null,"If you want send a transaction to conflux network, you can use the SDK's ",Object(r.b)("inlineCode",{parentName:"p"},"sendTransaction")," method, for example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const account = cfx.Account(PRIVATE_KEY); // create account instance\nconst txHash = await cfx.sendTransaction({\n    from: account, // from account instance and will by sign by account.privateKey\n    to: "0x-another-address", // accept address string or account instance\n    value: util.unit.fromCFXToDrip(0.125), // use unit to transfer from CFX to Drip\n});\nconst tx = await cfx.getTransactionByHash(txHash);  // status 0x0 means success\nconst txReceipt = await cfx.getTransactionReceipt(txHash);  // outcomeStatus 0x0 means success\n')),Object(r.b)("p",null,"That's it, it's so easy. Besides ",Object(r.b)("inlineCode",{parentName:"p"},"from"),", ",Object(r.b)("inlineCode",{parentName:"p"},"to"),", ",Object(r.b)("inlineCode",{parentName:"p"},"value")," there are other fields you can set and should know:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"gas"),Object(r.b)("li",{parentName:"ul"},"gasPrice"),Object(r.b)("li",{parentName:"ul"},"epochHeight"),Object(r.b)("li",{parentName:"ul"},"chainId"),Object(r.b)("li",{parentName:"ul"},"data"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"storageLimit")),Object(r.b)("li",{parentName:"ul"},"nonce")),Object(r.b)("p",null,"For the detail explanation of these fields check ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/send_transaction#installation"}),"official doc"),"."),Object(r.b)("p",null,"You should pay more attention to ",Object(r.b)("inlineCode",{parentName:"p"},"storageLimit"),", it's a conflux special tx parameter, if you transaction execute failed or stucked in tx pool, you can try this parameter."),Object(r.b)("p",null,"If you have encounter problem when sending transaction, you should check ",Object(r.b)("inlineCode",{parentName:"p"},"nonce"),", ",Object(r.b)("inlineCode",{parentName:"p"},"gas"),", ",Object(r.b)("inlineCode",{parentName:"p"},"storageLimit")," and your balance.\nAfter adjust your parameter you can send a new transaction with same(or correct) nonce and higher gasPrice."),Object(r.b)("h3",{id:"advanced-usage-of-sendtransaction"},"Advanced usage of ",Object(r.b)("inlineCode",{parentName:"h3"},"sendTransaction")),Object(r.b)("p",null,"The SDK's ",Object(r.b)("inlineCode",{parentName:"p"},"sendTransaction")," and ",Object(r.b)("inlineCode",{parentName:"p"},"sendRawTransaction")," method have several advance method will be helpful."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'let txParameters = {\n  from: account,\n  to: "0x-a-address",\n  value: "0x100"\n};\nconst txHash = await cfx.sendTransaction(txParameters);  // send the tx and return a hash\nconst tx = await cfx.sendTransaction(txParameters).get();  // will also get the tx by hash\nconst tx = await cfx.sendTransaction(txParameters).mined();  // wait tx mined and return the tx\nconst receipt = await cfx.sendTransaction(txParameters).executed();  // wait tx executed and return receipt\nconst receipt = await cfx.sendTransaction(txParameters).confirmed();  // wait tx confirmed and return receipt\n')),Object(r.b)("h3",{id:"deploy-or-interact-with-contract"},"Deploy or interact with contract"),Object(r.b)("p",null,"If you use this SDK, probability you want to deploy a contract or interact with a contract.\nWhen deploy a contract you need contract's ",Object(r.b)("inlineCode",{parentName:"p"},"bytecode")," and ",Object(r.b)("inlineCode",{parentName:"p"},"abi")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"// create contract instance\nconst contract = cfx.Contract({\n  abi: USER_YOUR_CONTRACT_ABI,\n  bytecode: USER_YOUR_CONTRACT_BYTECODE,\n});\n// deploy the contract, and get `contractCreated`\nconst receipt = await contract.constructor()  // fill the parameter to your constructor\n  .sendTransaction({ from: account })  // you can set other tx parameters such as: gas, gasPrice, storageLimit and so on (leave `to` empty)\n  .confirmed();\nconsole.log(receipt); // contract address is receipt.contractCreated\n")),Object(r.b)("p",null,"With a deployed contract's address and abi, you can interact with it: query or change contract state."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const contract = cfx.Contract({\n    abi: YOUR_CONTRACT_ABI,\n    address: 'YOUR-CONTRACT-ADDRESS',\n});\n// query contract state\nlet ret = await contract.get(); // `get` is a method of your contract\nconsole.log(ret.toString()); \n// change contract state by send a transaction\nconst receipt = await contract.inc(1).sendTransaction({  // `inc` is also your contract's method \n  from: account,  // you can set other tx parameter such as `gas`, `gasPrice`, `storageLimit` and so on\n}).confirmed();\n")),Object(r.b)("h2",{id:"document"},"Document"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/js-conflux-sdk/tree/master/example"}),"Example")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/Conflux-Chain/js-conflux-sdk/blob/master/api.md"}),"API"))),Object(r.b)("h2",{id:"change-log"},"Change log"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/js-conflux-sdk/tree/master/CHANGE_LOG.md"}),"see")))}u.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(o,".").concat(p)]||d[p]||b[p]||r;return n?c.a.createElement(m,s(s({ref:t},l),{},{components:n})):c.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);