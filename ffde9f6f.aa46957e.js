(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{205:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return r})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return s})),n.d(e,"default",(function(){return d}));var a=n(2),c=n(9),o=(n(0),n(207)),r={},i={id:"js-conflux-sdk/docs/interact_with_contract",title:"interact_with_contract",description:"Interact with contract",source:"@site/docs/js-conflux-sdk/docs/interact_with_contract.md",permalink:"/docs/js-conflux-sdk/docs/interact_with_contract",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/docs/interact_with_contract.md",lastUpdatedAt:1605855854},s=[{value:"How to deploy a contract",id:"how-to-deploy-a-contract",children:[]},{value:"How to get and update contract status",id:"how-to-get-and-update-contract-status",children:[]},{value:"How to play with InternalContract",id:"how-to-play-with-internalcontract",children:[]}],l={rightToc:s};function d(t){var e=t.components,n=Object(c.a)(t,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"interact-with-contract"},"Interact with contract"),Object(o.b)("p",null,"In Conflux world you may often need to interact with contracts, with JS SDK this can be done very easy."),Object(o.b)("h3",{id:"how-to-deploy-a-contract"},"How to deploy a contract"),Object(o.b)("p",null,"One contract must be created before interacting with it. To create a contract you can write it with ",Object(o.b)("inlineCode",{parentName:"p"},"solidity"),".\nThen compile it with solidity compiler, you will get ",Object(o.b)("inlineCode",{parentName:"p"},"bytecode")," and ",Object(o.b)("inlineCode",{parentName:"p"},"abi"),". With ",Object(o.b)("inlineCode",{parentName:"p"},"bytecode"),", ",Object(o.b)("inlineCode",{parentName:"p"},"abi")," you can deploy it by send transaction."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const { Conflux } = require(\'js-conflux-sdk\');\nconst { abi, bytecode } = MINI_ERC20; // see https://github.com/Conflux-Chain/js-conflux-sdk/tree/master/example/contract/miniERC20.json\n\nconst PRIVATE_KEY = \'0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef\'; // sender private key\n\nasync function main() {\n  const conflux = new Conflux({ url: \'http://test.confluxrpc.org\' });\n  const account = conflux.wallet.addPrivateKey(PRIVATE_KEY);\n\n  // 1. initialize a contract with abi and bytecode\n  const contract = conflux.Contract({ abi, bytecode });\n\n  // 2. specify constructor\'s parameter \n  const receipt = await contract.constructor(\'MiniERC20\', 18, \'MC\', 10000)\n  // 3. send transaction to deploy the contract, you can specify any transaction parameter here  \n    .sendTransaction({ from: account })   \n    .executed();\n  console.log(receipt);\n  // 4. If your transaction executed successfully then you have deploy a new contract\n  // 5. The receipt.contractCreated is the address of the new deployed contract\n  /*\n  {\n    "index": 0,\n    "epochNumber": 318456,\n    "outcomeStatus": 0,\n    "gasUsed": 1054531n,\n    "gasFee": 1054531000000000n,\n    "blockHash": "0x4a8b07e2694e358af075f7a9e96e78842b77ac2d511e2ab33f6acfff34a5846c",\n    "contractCreated": "0x8a9c270e1a99c05ca90ef0f0008b8f6444cf1a97",\n    "from": "0x1bd9e9be525ab967e633bcdaeac8bd5723ed4d6b",\n    "logs": [],\n    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n    "stateRoot": "0x0940d4870e25bae1e7a5e5d7c19411b41922c025aa3de61aea2be17759673b1a",\n    "to": null,\n    "transactionHash": "0x6f55e67b486b5ef0c658c6d50cb5b89a2a2ddfecc1a1f2e414bbbefe36ef8dd5"\n  }\n  */\n\n  // create contract address "0x8a9c270e1a99c05ca90ef0f0008b8f6444cf1a97"\n}\n\nmain();\n')),Object(o.b)("p",null,"Check the transaction you will find the tx data is the contract bytecode and constructor's encoded signature."),Object(o.b)("h3",{id:"how-to-get-and-update-contract-status"},"How to get and update contract status"),Object(o.b)("p",null,"After you got the contract address, you can interact with it. The Conflux network makes a distinction between writing data to the network and reading data from it, and this distinction plays a significant part in how you write your application, and this behavior is very like Ethereum network. In general, writing data is called a transaction whereas reading data is called a call. Transactions and calls are treated very differently, and have the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.trufflesuite.com/docs/truffle/getting-started/interacting-with-your-contracts#reading-and-writing-data"}),"following characteristics"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { Conflux } = require('js-conflux-sdk');\nconst { abi } = MINI_ERC20;\n\nasync function main() {\n  const conflux = new Conflux({ url: 'http://test.confluxrpc.org' });\n  const account = conflux.wallet.addPrivateKey(PRIVATE_KEY);\n  // 1. initialize contract with abi and address\n  const contract = conflux.Contract({ abi, address: '0x8a9c270e1a99c05ca90ef0f0008b8f6444cf1a97' });\n  // 2. call method to get contract state\n  const name = await contract.name(); \n  console.log(name); // MiniERC20\n  // 3. user can set options by `contract.name().call({ from: account, ... })`\n\n  // 4. call method with arguments\n  const balance = await contract.balanceOf(account.address); \n  console.log(balance); // 10000n\n\n  // 4. change contract state by send a transaction\n  const transactionHash = await contract.transfer(ADDRESS, 10).sendTransaction({ from: account }); \n  console.log(transactionHash); // 0xb31eb095b62bed1ef6fee6b7b4ee43d4127e4b42411e95f761b1fdab89780f1a\n}\n\nmain();\n")),Object(o.b)("h3",{id:"how-to-play-with-internalcontract"},"How to play with InternalContract"),Object(o.b)("p",null,"Conflux network has provide three Internal Contract ",Object(o.b)("inlineCode",{parentName:"p"},"AdminControl"),", ",Object(o.b)("inlineCode",{parentName:"p"},"SponsorWhitelistControl"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Staking"),", these internal contract are very helpful to contract developer, for detail documentation check ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.conflux-chain.org/docs/conflux-rust/internal_contract/internal_contract"}),"official doc"),". This SDK have fully support for Internal Contract, you can use them like this."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const { Conflux } = require('js-conflux-sdk');\n\nasync function main() {\n    const conflux = new Conflux({ url: 'http://test.confluxrpc.org' });\n    \n    // 1. get internal contract through InternalContract method and pass the internal contract name\n    const sponsor = conflux.InternalContract('SponsorWhitelistControl');\n    const gasSponsor = await sponsor.getSponsorForGas('0x8dc687aef9ee127335434e1a0b6a16a5941d3b67');\n}\nmain();\n")))}d.isMDXComponent=!0},207:function(t,e,n){"use strict";n.d(e,"a",(function(){return u})),n.d(e,"b",(function(){return f}));var a=n(0),c=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}var l=c.a.createContext({}),d=function(t){var e=c.a.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return c.a.createElement(l.Provider,{value:e},t.children)},b={inlineCode:"code",wrapper:function(t){var e=t.children;return c.a.createElement(c.a.Fragment,{},e)}},p=c.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,r=t.parentName,l=s(t,["components","mdxType","originalType","parentName"]),u=d(n),p=a,f=u["".concat(r,".").concat(p)]||u[p]||b[p]||o;return n?c.a.createElement(f,i(i({ref:e},l),{},{components:n})):c.a.createElement(f,i({ref:e},l))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,r=new Array(o);r[0]=p;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,r[1]=i;for(var l=2;l<o;l++)r[l]=n[l];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);