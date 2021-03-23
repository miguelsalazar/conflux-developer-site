(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{165:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return b}));var a=t(2),r=t(9),c=(t(0),t(215)),o={},i={id:"js-conflux-sdk/docs/overview",title:"overview",description:"Overview",source:"@site/docs/js-conflux-sdk/docs/overview.md",permalink:"/docs/js-conflux-sdk/docs/overview",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/docs/overview.md",lastUpdatedAt:1616480795},l=[{value:"Pre-requisites",id:"pre-requisites",children:[]},{value:"Initialize",id:"initialize",children:[{value:"Testnet",id:"testnet",children:[]}]},{value:"Add account",id:"add-account",children:[]},{value:"Send JSON-RPC request",id:"send-json-rpc-request",children:[{value:"Conflux hex address",id:"conflux-hex-address",children:[]},{value:"Conflux base32 checksum address",id:"conflux-base32-checksum-address",children:[]},{value:"Send Transaction",id:"send-transaction",children:[]},{value:"chainId",id:"chainid",children:[]},{value:"RPC endpoint",id:"rpc-endpoint",children:[]},{value:"Hex value and epochNumber and tags",id:"hex-value-and-epochnumber-and-tags",children:[]},{value:"JSBI",id:"jsbi",children:[]},{value:"Drip",id:"drip",children:[]},{value:"Websocket provider",id:"websocket-provider",children:[]},{value:"Pub/Sub",id:"pubsub",children:[]},{value:"Interact with contract",id:"interact-with-contract",children:[]},{value:"Type conversion",id:"type-conversion",children:[]},{value:"Sign",id:"sign",children:[]}]}],s={rightToc:l};function b(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"overview"},"Overview"),Object(c.b)("p",null,"The purpose of this page is to give you a sense of everything js-conflux-sdk can do and serve as a quick reference guide"),Object(c.b)("h2",{id:"pre-requisites"},"Pre-requisites"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Node.js environment to install this SDK"),Object(c.b)("li",{parentName:"ol"},"Conflux account with some CFX (Use Conflux Portal to create account and get testnet CFX from faucet)"),Object(c.b)("li",{parentName:"ol"},"Conflux RPC endpoint, for example ",Object(c.b)("inlineCode",{parentName:"li"},"http://test.confluxrpc.org/v2")," is a testnet RPC endpoint")),Object(c.b)("h2",{id:"initialize"},"Initialize"),Object(c.b)("p",null,"After installing ",Object(c.b)("inlineCode",{parentName:"p"},"js-conflux-sdk")," (via npm), you\u2019ll need to specify the provider url. You can use the\nmainnet(",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://main.confluxrpc.org/v2"}),"https://main.confluxrpc.org/v2"),"), or testnet(",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://test.confluxrpc.org/v2"}),"https://test.confluxrpc.org/v2"),"), or ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/independent_chain"}),"run your own Conflux node"),"."),Object(c.b)("h3",{id:"testnet"},"Testnet"),Object(c.b)("p",null,"With a RPC endpoint we can initialize a Conflux object, which can be used to send JSON RPC request."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { Conflux } = require('js-conflux-sdk');\n// initialize a Conflux object\nconst conflux = new Conflux({\n    url: 'http://test.confluxrpc.org/v2',\n    logger: console, // for debug\n    networkId: 1,\n});\n")),Object(c.b)("p",null,"Besides ",Object(c.b)("inlineCode",{parentName:"p"},"url")," and ",Object(c.b)("inlineCode",{parentName:"p"},"logger")," you can pass ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"../api.md"}),"other options")," to initialize a Conflux object"),Object(c.b)("h2",{id:"add-account"},"Add account"),Object(c.b)("p",null,"Private keys are required to approve any transaction made on your behalf, ",Object(c.b)("inlineCode",{parentName:"p"},"conflux.wallet")," provide utility help you manage your accounts"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"conflux.wallet.addPrivateKey('0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef');\n")),Object(c.b)("p",null,"Only after you add your account to wallet, then you can use them send transactions."),Object(c.b)("h2",{id:"send-json-rpc-request"},"Send JSON-RPC request"),Object(c.b)("p",null,"There are a lot methods on cfx object which are one-to-one with Conflux node RPC methods.\nAll conflux methods will return a promise, so you can use it with ",Object(c.b)("inlineCode",{parentName:"p"},"async/await")," syntax."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"\nasync function main() {\n  // get balance\n  const balance = await conflux.getBalance('cfxtest:aak2rra2njvd77ezwjvx04kkds9fzagfe6d5r8e957');\n  console.log(balance.toString()); // 10098788868004995614504\n}\n\nmain();\n")),Object(c.b)("p",null,"Besides balance you can get a lot blockchain information through it, for example: nonce, block, transaction, receipt and so on.\nYou can check ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"../api.md"}),"API")," and ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/json_rpc"}),"RPC")),Object(c.b)("h3",{id:"conflux-hex-address"},"Conflux hex address"),Object(c.b)("p",null,"In Conflux network there are three kind address:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Normal address ",Object(c.b)("inlineCode",{parentName:"li"},"0x1")," prefix: ",Object(c.b)("inlineCode",{parentName:"li"},"0x1386B4185A223EF49592233b69291bbe5a80C527")),Object(c.b)("li",{parentName:"ul"},"Contract address ",Object(c.b)("inlineCode",{parentName:"li"},"0x8")," prefix: ",Object(c.b)("inlineCode",{parentName:"li"},"0x80a17fd515c1fc819e87e606c058490ac1f14ca7")),Object(c.b)("li",{parentName:"ul"},"Internal contract address ",Object(c.b)("inlineCode",{parentName:"li"},"0x0888")," prefix: ",Object(c.b)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000000"))),Object(c.b)("p",null,"So normally a ethereum's address cann't used as conflux address, otherwise it starts with ",Object(c.b)("inlineCode",{parentName:"p"},"0x1")),Object(c.b)("p",null,"Notice: one address can have two form ",Object(c.b)("inlineCode",{parentName:"p"},"checksumed")," and ",Object(c.b)("inlineCode",{parentName:"p"},"not checksumed"),", these two actually are same account. For example\n",Object(c.b)("inlineCode",{parentName:"p"},"0x1386B4185A223EF49592233b69291bbe5a80C527")," and ",Object(c.b)("inlineCode",{parentName:"p"},"0x1386b4185a223ef49592233b69291bbe5a80c527")," which point to same account."),Object(c.b)("h3",{id:"conflux-base32-checksum-address"},"Conflux base32 checksum address"),Object(c.b)("p",null,"From ",Object(c.b)("inlineCode",{parentName:"p"},"conflux-rust 1.1.1")," Conflux has switch to base32Checksum address for example ",Object(c.b)("inlineCode",{parentName:"p"},"cfxtest:aak2rra2njvd77ezwjvx04kkds9fzagfe6d5r8e957"),".\nIt was introduced by ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md"}),"CIP37"),". ",Object(c.b)("inlineCode",{parentName:"p"},"js-conflux-sdk")," add support for it from version ",Object(c.b)("inlineCode",{parentName:"p"},"1.5.10"),", check ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/js-conflux-sdk/docs/conflux_checksum_address"}),"here")," for details."),Object(c.b)("h3",{id:"send-transaction"},"Send Transaction"),Object(c.b)("p",null,"Check ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/js-conflux-sdk/docs/how_to_send_tx"}),"here")," for details"),Object(c.b)("h3",{id:"chainid"},"chainId"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"chainId")," is used to distinguish different network and prevent replay attack, currently:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"mainnet: ",Object(c.b)("inlineCode",{parentName:"li"},"1029")),Object(c.b)("li",{parentName:"ul"},"testnet: ",Object(c.b)("inlineCode",{parentName:"li"},"1"))),Object(c.b)("h3",{id:"rpc-endpoint"},"RPC endpoint"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"mainnet"),": ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://main.confluxrpc.org"}),"https://main.confluxrpc.org")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"testnet"),": ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://test.confluxrpc.org"}),"https://test.confluxrpc.org"))),Object(c.b)("h3",{id:"hex-value-and-epochnumber-and-tags"},"Hex value and epochNumber and tags"),Object(c.b)("p",null,"You can find the epochNumber doc at official developer ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/json_rpc#hex-value-encoding"}),"RPC doc")),Object(c.b)("h3",{id:"jsbi"},"JSBI"),Object(c.b)("p",null,"Because in blockchain world there are a lot big numbers (uint256), only modern JS VM and Node.js support ",Object(c.b)("inlineCode",{parentName:"p"},"BigInt"),", so we use JSBI in browser environment to handle these big number.\nFor how to use ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/jsbi"}),"JSBI")," check it's documentation"),Object(c.b)("p",null,"Note: jsbi currently cann't pretty log, you need convert it to string before log."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const max = JSBI.BigInt(Number.MAX_SAFE_INTEGER);\nconsole.log(String(max));\n// \u2192 '9007199254740991'\nconsole.log(max.toString()); // directly log a jsbi is very ugly\n// JSBI(2) [ -1, 2097151, sign: false ]\n")),Object(c.b)("p",null,"Note: When a js integer is bigger than ",Object(c.b)("inlineCode",{parentName:"p"},"Number.MAX_SAFE_INTEGER")," (2^53 - 1 or 9,007,199,254,740,991) you should use ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt"}),Object(c.b)("inlineCode",{parentName:"a"},"BigInt"))," to contain it."),Object(c.b)("h3",{id:"drip"},"Drip"),Object(c.b)("p",null,"In Conflux network there are there unit: CFX, Drip, Gdrip. Drip is the minimum unit in Conflux  1 CFX=10^18Drip, 1Gdrip=10^9Drip. When getting account's balance, send transaction, specify gasPrice, all unit will be Drip.\nThe SDK has provide a class Drip, which can use to easily convert between different unit."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'import {Drip} from "js-conflux-sdk"\n\nlet drip1 = Drip.fromCFX(1);\nconsole.log(drip1);\n// 1000-000-000-000-000-000\nlet drip2 = Drip.fromGDrip(1);\nconsole.log(drip1);\n// 1000-000-000\nlet drip3 = new Drip(1);\nconsole.log(drip3);\n// 1\nconsole.log(drip3.toCFX());\n// 1\nconsole.log(drip1.toGdrip());\n// 1000-000-000\n')),Object(c.b)("h3",{id:"websocket-provider"},"Websocket provider"),Object(c.b)("p",null,"The SDK also provide a websocket provider, and the default Conflux node ws port is ",Object(c.b)("inlineCode",{parentName:"p"},"12535"),"."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Conflux } = require('js-conflux-sdk');\n\nasync function main() {\n  // initialize a Conflux object\n  const cfx = new Conflux({\n      url: 'ws://localhost:12535',\n      logger: console, // for debug\n  });\n  // get balance\n  const balance = await cfx.getBalance('cfxtest:aak2rra2njvd77ezwjvx04kkds9fzagfe6d5r8e957');\n  console.log(balance.toString()); // 10098788868004995614504\n\n  // you need manual close the websocket connection\n  cfx.close();\n}\n\nmain();\n")),Object(c.b)("h3",{id:"pubsub"},"Pub/Sub"),Object(c.b)("p",null,"Conflux node support pub/sub makes it possible to query certain items on an ongoing basis, without polling through the JSON-RPC HTTP interface, currently three topics are supported: ",Object(c.b)("inlineCode",{parentName:"p"},"newHeads"),", ",Object(c.b)("inlineCode",{parentName:"p"},"epochs"),", ",Object(c.b)("inlineCode",{parentName:"p"},"logs"),", for detail explain of Pub/Sub check the ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/pubsub"}),"official doc")),Object(c.b)("p",null,"Use JS SDK it will be very easy to use Pub/Sub."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { Conflux } = require('js-conflux-sdk');\n\nasync function main() {\n  const cfx = new Conflux({\n      url: 'ws://localhost:12535',\n  });\n  // sub\n  let newHeadEmitter = await cfx.subscribeNewHeads();\n  newHeadEmitter.on('data', console.log);\n  let logEmitter = await cfx.subscribeLogs();\n  logEmitter.on('data', console.log);\n  let epochEmitter = await cfx.subscribeEpochs();\n  epochEmitter.on('data', console.log);\n  // unsubscribe\n  cfx.unsubscribe(epochEmitter);\n}\n\nmain();\n")),Object(c.b)("h3",{id:"interact-with-contract"},"Interact with contract"),Object(c.b)("p",null,"You can use this SDK get and update contract state, we have a complete ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/js-conflux-sdk/docs/interact_with_contract"}),"documentation")," for you."),Object(c.b)("h3",{id:"type-conversion"},"Type conversion"),Object(c.b)("p",null,"If you want convert a hex to number, or uint, you can use ",Object(c.b)("inlineCode",{parentName:"p"},"format"),", for example:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { format } = require('js-conflux-sdk');\nformat.uInt('0x10');\n// 16\nformat.bigUInt('0.0')\n// 0n\nformat.hex(1)\n// \"0x01\"\n")),Object(c.b)("h3",{id:"sign"},"Sign"),Object(c.b)("p",null,"The SDK also provide most common used crypto utilities in ",Object(c.b)("inlineCode",{parentName:"p"},"sign")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const { sign } = require('js-conflux-sdk');\n// generate a random buffer\nlet buf = sign.randomBuffer(0);\n// \nlet keccakHash = sign.keccak256(buf);\n// random generate a private key\nlet privateKey = sign.randomPrivateKey(buf);\n// get public key from private key\nlet pubKey = sign.privateKeyToPublicKey(privateKey);\n// get address from public key\nlet address = sign.publicKeyToAddress(pubKey);\n// use private key sign (ecdsa) a buffer\nlet signResult = sign.ecdsaSign(buf, privateKey);\n// recover public key from signature and buf, then convert it to address\nsign.publicKeyToAddress(sign.ecdsaRecover(buf, sign.ecdsaSign(signResult, privateKey)))\n")))}b.isMDXComponent=!0},215:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return f}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=b(t),p=a,f=d["".concat(o,".").concat(p)]||d[p]||u[p]||c;return t?r.a.createElement(f,i(i({ref:n},s),{},{components:t})):r.a.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=p;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);