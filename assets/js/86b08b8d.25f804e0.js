(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{127:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),r=(n(0),n(164)),i={id:"send_transaction",title:"My First Transaction",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/send_transaction.md",keywords:["conflux","transaction","sdk"]},c={unversionedId:"conflux-doc/docs/send_transaction",id:"conflux-doc/docs/send_transaction",isDocsHomePage:!1,title:"My First Transaction",description:"This document will guide you through composing and sending your first transaction into the Conflux network. We will introduce the technical details of Conflux transaction and some basic techniques to track the status of sent transactions and handle errors.",source:"@site/docs/conflux-doc/docs/send_transaction.md",sourceDirName:"conflux-doc/docs",slug:"/conflux-doc/docs/send_transaction",permalink:"/conflux-doc/docs/send_transaction",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/send_transaction.md",version:"current",frontMatter:{id:"send_transaction",title:"My First Transaction",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/send_transaction.md",keywords:["conflux","transaction","sdk"]},sidebar:"docs",previous:{title:"Run a Light Node",permalink:"/conflux-doc/docs/light_node"},next:{title:"Transaction Explanation",permalink:"/sending-tx/en/transaction_explain"}},l=[{value:"Compose and send my first transaction",id:"compose-and-send-my-first-transaction",children:[{value:"Create an account with Conflux Portal",id:"create-an-account-with-conflux-portal",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Send transaction by JavaScript program",id:"send-transaction-by-javascript-program",children:[]}]},{value:"Track my transaction",id:"track-my-transaction",children:[{value:"1. Rejected by the RPC provider immediately",id:"1-rejected-by-the-rpc-provider-immediately",children:[]},{value:"2. Stuck in the transaction pool",id:"2-stuck-in-the-transaction-pool",children:[]},{value:"3. Mined but skipped",id:"3-mined-but-skipped",children:[]},{value:"4. Mined and executed with some error outcome",id:"4-mined-and-executed-with-some-error-outcome",children:[]},{value:"5. Mined and executed with no error outcome",id:"5-mined-and-executed-with-no-error-outcome",children:[]}]}],s={toc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"This document will guide you through composing and sending your first transaction into the Conflux network. We will introduce the technical details of Conflux transaction and some basic techniques to track the status of sent transactions and handle errors."),Object(r.b)("p",null,"For common users, it is recommended to use a Conflux wallet like ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-portal"},"Conflux Portal"),", which is easy, safe and user-friendly."),Object(r.b)("p",null,"For developers who want to compose and send transaction in your own applications, Conflux provides several SDKs in different languages:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/js-conflux-sdk"},"JavaScript: js-conflux-sdk")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/java-conflux-sdk"},"Java: java-conflux-sdk")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/go-conflux-sdk"},"Go: go-conflux-sdk"))),Object(r.b)("p",null,"The following document will use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/js-conflux-sdk"},"js-conflux-sdk")," as an example."),Object(r.b)("h2",{id:"compose-and-send-my-first-transaction"},"Compose and send my first transaction"),Object(r.b)("h3",{id:"create-an-account-with-conflux-portal"},"Create an account with Conflux Portal"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Install ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-portal"},"Conflux Portal"),".")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Generate a new account.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Get test-net tokens from the faucet.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Export and copy your private key to somewhere, we'll use it later."))),Object(r.b)("h3",{id:"installation"},"Installation"),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"npm install js-conflux-sdk")),Object(r.b)("h3",{id:"send-transaction-by-javascript-program"},"Send transaction by JavaScript program"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Import ",Object(r.b)("inlineCode",{parentName:"li"},"js-conflux-sdk")," and set a Conflux provider. For the Conflux test-net, there is a node provided at ",Object(r.b)("inlineCode",{parentName:"li"},"https://test.confluxrpc.com"),". It can also be changed to any other Conflux node, even your own.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst cfx = new Conflux({\n  url: 'https://test.confluxrpc.com',\n  defaultGasPrice: 100, // The default gas price of your following transactions\n  defaultGas: 1000000, // The default gas of your following transactions\n  logger: console,\n  networkId: 1,\n});\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Paste your private key into the program")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const PRIVATE_KEY = 'Your Private Key';\n// const PRIVATE_KEY = '0x5f15f9e52fc5ec6f77115a9f306c120a7e80d83115212d33a843bb6b7989c261';\nconst account = cfx.wallet.addPrivateKey(PRIVATE_KEY); // create account instance\nconst receiver = 'cfxtest:aarc9abycue0hhzgyrr53m6cxedgccrmmy8m50bu1p'\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Compose your transaction, here are the fields could be filled with:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"nonce"),": optional, the nonce of a transaction to keep the order of your sending transactions, starting with some random large number and increase one by one. If missing, the result of ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getNextNonce")," will be automatically filled in and it works for general scenarios. Some cases, like sending a lot of transactions in a short period. It's recommended to maintain the nonce on your own."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"gasPrice"),": optional, the price in Drip that you would like to pay for each gas consumed. If missing, the result of ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_gasPrice")," will be automatically filled in, which is the median of recent transactions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"gas"),": optional, the max gas you would like to use in the transaction. After the end of transaction processing, the unused gas will be refunded if ",Object(r.b)("inlineCode",{parentName:"li"},"used_gas >= gas * 0.75"),". If missing, the result of ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_estimateGasAndCollateral")," will be automatically filled in and it works for general scenarios."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"to"),": the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md"},"base32 address")," of the receiver of the transaction, could be a personal account (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"CFXTEST:TYPE.USER:AARC9ABYCUE0HHZGYRR53M6CXEDGCCRMMY8M50BU1P"),") or a contract (e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"CFXTEST:TYPE.CONTRACT:ACC7UAWF5UBTNMEZVHU9DHC6SGHEA0403YWJZ6WTPG"),"). Leave a null here to deploy a contract."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"value"),": the value (in Drip) to be transferred."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"storageLimit"),": optional, the max storage (in Byte) you would like to collateralize in the transaction. If missing, the result of ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_estimateGasAndCollateral")," will be automatically filled in and it works for general senarios.transactions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"epochHeight"),": optional, a transaction is can be verified only in epochs in the range ",Object(r.b)("inlineCode",{parentName:"li"},"[epochHeight - 100000, epochHeight + 100000]"),", so it's  a timeout mechanism. If missing, the result of ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_epochNumber")," will be automatically filled in and it works for general scenarios."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"data"),": optional, it's either an attached message of a transaction or a function signature of a contract call. If missing, a null will be filled into it."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"chainId"),": optional, it used for dealing with a hard fork or preventing a transaction replay attack. If missing, the SDK will get it from RPC. Currently mainnet chainId is 1029, testnet is 1."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"from"),": The sender account(with private key) to sign the transaction.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"let txParams = {\n  from: account, // from account instance and will by sign by account.privateKey\n  // nonce\n  // gasPrice\n  // gas\n  to: receiver, // accept address string or account instance\n  value: Drip.fromCFX(0.125), // use the conversion utility function\n  // storageLimit\n  // epochHeight\n  // data\n};\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Send it away by ",Object(r.b)("inlineCode",{parentName:"li"},"cfx.sendTransaction")," and get the returned transaction hash, then you can view the transaction details by searching the hash on ",Object(r.b)("a",{parentName:"li",href:"http://confluxscan.io/"},"Conflux Scan"),".")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"async function main() {\n  const txHash = await cfx.sendTransaction(txParams);\n  console.log(txHash);\n}\n\nmain().catch(e => console.error(e));\n")),Object(r.b)("h2",{id:"track-my-transaction"},"Track my transaction"),Object(r.b)("p",null,"After sending, the transaction could be in several different states:"),Object(r.b)("h3",{id:"1-rejected-by-the-rpc-provider-immediately"},"1. Rejected by the RPC provider immediately"),Object(r.b)("p",null,"After the provider got the ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction")," RPC call, it will try to do the basic verification and insert it into the transaction pool. If there an obvious error of the transaction, e.g., RLP decoding error, signature verification error, it will be rejected immediately. Otherwise, it will be inserted into the transaction pool and start to wait to be mined, and the RPC will return a transaction hash."),Object(r.b)("h3",{id:"2-stuck-in-the-transaction-pool"},"2. Stuck in the transaction pool"),Object(r.b)("p",null,"However, the transaction hash you got does not mean it was successfully executed. Conflux will store as many verified transactions in the pool as possible, even transactions whose nonce does not match the expected one or the balance is not enough to pay the ",Object(r.b)("inlineCode",{parentName:"p"},"value + gas * gasPrice + storageLimit * (10^18/1024)"),"."),Object(r.b)("p",null,"So if you wait for 1 minute and still cannot find the transaction in ConfluxScan after sending it, it very likely got stuck in the transaction pool."),Object(r.b)("p",null,"Use ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_getTransactionByHash"),", ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_getBalance")," and ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_getNextNonce")," to check if your transaction is ready to be packed and mined, for example:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"cfx_getBalance","params":["cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg"],"id":1}\' -H "Content-Type: application/json" https://test.confluxrpc.com\n')),Object(r.b)("p",null,"And compare the result with ",Object(r.b)("inlineCode",{parentName:"p"},"value + gas * gasPrice + storage_limit * (10^18/1024)"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"cfx_getNextNonce","params":["cfx:type.user:aarc9abycue0hhzgyrr53m6cxedgccrmmyybjgh4xg"],"id":1}\' -H "Content-Type: application/json" https://test.confluxrpc.com\n')),Object(r.b)("p",null,"And compare the result with the nonce you filled in."),Object(r.b)("p",null,"You can always get the transaction details by ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_getTransactionByHash"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'curl -X POST --data \'{"jsonrpc":"2.0","method":"cfx_getTransactionByHash","params":["0x53fe995edeec7d241791ff32635244e94ecfd722c9fe90f34ddf59082d814514"],"id":1}\' -H "Content-Type: application/json" https://test.confluxrpc.com\n')),Object(r.b)("p",null,"In this situation, you may want to send a new transaction after fixing the nonce or balance problem. Note that, for replacing a transaction in the pool with the same nonce, a higher gasPrice is necessary."),Object(r.b)("h3",{id:"3-mined-but-skipped"},"3. Mined but skipped"),Object(r.b)("p",null,"If you can view the transaction on ConfluxScan but its status always shows \"skip\". Which means it didn't pass the basic verification (etc, nonce doesn't match, balance can't cover the basic fee) in execution engine and got skipped."),Object(r.b)("p",null,"In this situation, you may want to send a new transaction after fixing the nonce or balance problem. Note that, for replacing a transaction in the pool with the same nonce, a higher gasPrice is necessary."),Object(r.b)("h3",{id:"4-mined-and-executed-with-some-error-outcome"},"4. Mined and executed with some error outcome"),Object(r.b)("p",null,"In this case, you'll see an error message on ConfluxScan. This could be in several causes:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"EVM error: like assert, require"),Object(r.b)("li",{parentName:"ul"},"balance is enough to pay the basic fee, but not for the whole transaction fee"),Object(r.b)("li",{parentName:"ul"},"storageLimit reached")),Object(r.b)("p",null,"It's a good idea to double-check your contract in Conflux Studio and check the storageLimit and balance issue by ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," RPC."),Object(r.b)("h3",{id:"5-mined-and-executed-with-no-error-outcome"},"5. Mined and executed with no error outcome"),Object(r.b)("p",null,"Congrats! Your first transaction finally got there."))}u.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(i,".").concat(p)]||d[p]||b[p]||r;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);