(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{157:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),l=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},b=function(e){var n=l(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(t),p=r,m=b["".concat(c,".").concat(p)]||b[p]||d[p]||o;return t?a.a.createElement(m,i(i({ref:n},u),{},{components:t})):a.a.createElement(m,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=p;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=t[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},91:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var r=t(3),a=t(7),o=(t(0),t(157)),c={},i={unversionedId:"conflux-doc/docs/key_management",id:"conflux-doc/docs/key_management",isDocsHomePage:!1,title:"key_management",description:"In this document, we go through the process of using command-line interface toolkit",source:"@site/docs/conflux-doc/docs/key_management.md",sourceDirName:"conflux-doc/docs",slug:"/conflux-doc/docs/key_management",permalink:"/conflux-doc/docs/key_management",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-doc/docs/key_management.md",version:"current",frontMatter:{}},s=[{value:"Get Key Management Toolkit",id:"get-key-management-toolkit",children:[]},{value:"Create Key Pair Using KeyMgr",id:"create-key-pair-using-keymgr",children:[]},{value:"Generate, Sign, and Submit Token Transferring Transaction",id:"generate-sign-and-submit-token-transferring-transaction",children:[]}],u={toc:s};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this document, we go through the process of using command-line interface toolkit\nto create and manage your key-pair, create and sign your transaction, and submit your\ntransaction to Conflux. "),Object(o.b)("h2",{id:"get-key-management-toolkit"},"Get Key Management Toolkit"),Object(o.b)("p",null,"You can download the key management toolkit of Conflux (",Object(o.b)("strong",{parentName:"p"},"keymgr"),") from here.\nOr you can directly build ",Object(o.b)("strong",{parentName:"p"},"keymgr")," from Conflux source code with the following steps."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-markdown"},"$ git clone ssh://git@base.conflux-chain.org:2222/source/conflux-rust.git\n$ cd conflux-rust/key_manager/cli\n$ cargo build\n")),Object(o.b)("p",null,"The binary of ",Object(o.b)("strong",{parentName:"p"},"keymgr")," is then under the folder ",Object(o.b)("inlineCode",{parentName:"p"},"conflux-rust/key_manager/cli/target/"),"."),Object(o.b)("h2",{id:"create-key-pair-using-keymgr"},"Create Key Pair Using KeyMgr"),Object(o.b)("p",null,"You can use ",Object(o.b)("strong",{parentName:"p"},"keymgr")," to create your own secret/public key-pair."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-markdown"},"$ keymgr generate random\n")),Object(o.b)("p",null,"A sample output is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-markdown"},"secret:  074842cdfa28a02fd23f244126618bcb49588a5530e7135dcd8c86aa3fbf0103\npublic:  7827b388197a9b4c4c97aafff400b1d168439b0b6b2428dad9a8f8ec461789155a9318c7d0d38a2e696e41c99faa0e7f7ab55bc21814b6e7809936f1d51ee5b0\naddress: 71e177b579a4b1ad24382f4b559f479ca0099572\n")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"address"))," is the 160-bit account Id derived from the public key. You can keep privately your secret key at anywhere that only you know. "),Object(o.b)("h2",{id:"generate-sign-and-submit-token-transferring-transaction"},"Generate, Sign, and Submit Token Transferring Transaction"),Object(o.b)("p",null,"Conflux provides Javascript library ",Object(o.b)("strong",{parentName:"p"},"CfxWeb")," to help user generate transactions in programmable way. The following is a sample code snippet."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-Javascript"},"#!/usr/bin/env node\n\nvar Tx = require('ethereumjs-tx');\nvar secretKey = Buffer.from('e331b6d69882b4cb4ea581d88e0b604039a3de5967688d3dcffdd2270c0fd109', 'hex')\nvar rawTx = {\n nonce: '0x00',\n gasPrice: '0x09184e72a000',\n gasLimit: '0x2710',\n to: '0x0000000000000000000000000000000000000000',\n value: '0x00',\n data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057'\n}\nvar tx = new Tx(rawTx);\ntx.sign(secretKey);\nconsole.log('0x' + serializedTx.toString('hex'));\n\nvar Web3 = require('web3');\nvar web3 = new Web3();\nweb3.setProvider(new web3.providers.HttpProvider('http://localhost:12345'));\nlet answer = web3.cfx.sendRawTransaction('0x' + serializedTx.toString('hex'));\nconsole.log(answer);\n\n")),Object(o.b)("p",null,"To run the above code, you need to first install Node.js and CfxWeb.js."))}l.isMDXComponent=!0}}]);