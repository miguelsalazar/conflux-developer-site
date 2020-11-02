(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{136:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),c=a(9),r=(a(0),a(203)),b={id:"light_node",title:"Run a Light Node",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/light-nodes.md",keywords:["conflux","light node"]},o={id:"conflux-doc/docs/light_node",title:"Run a Light Node",description:"Overview",source:"@site/docs/conflux-doc/docs/light-nodes.md",permalink:"/docs/conflux-doc/docs/light_node",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/light-nodes.md",lastUpdatedAt:1604298877},i=[{value:"Overview",id:"overview",children:[]},{value:"Running a light node",id:"running-a-light-node",children:[]},{value:"Interacting with a light node",id:"interacting-with-a-light-node",children:[{value:"RPC queries",id:"rpc-queries",children:[]},{value:"JavaScript",id:"javascript",children:[]},{value:"Other SDKs",id:"other-sdks",children:[]}]},{value:"Troubleshooting",id:"troubleshooting",children:[]},{value:"RPC availability",id:"rpc-availability",children:[]}],l={rightToc:i};function s(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"Light nodes are special nodes in the Conflux network that store block headers only, and retrieve everything else from their peers on-demand. This means that by default, light nodes do not store transactions, nor do they store the state trees. This can drastically reduce the disk and bandwidth use of light nodes compared to full and archive nodes, especially under high TPS. As a trade-off, RPC queries have a higher latency on light nodes."),Object(r.b)("p",null,"Light nodes execute GHAST consensus on their local header graph, and they also verify each item retrieved on-demand using Merkle proofs and other similar mechanisms. Items retrieved on-demand include accounts, bloom filters, transactions, and transaction receipts. This means that, while light nodes need to rely on their peers to fulfill RPC queries, they do this in a trustless manner."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"The current light node implementation is still considered experimental, bugs are expected to exist. If you encounter any issues, please let us know by opening an issue on the ",Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://github.com/Conflux-Chain/conflux-rust/issues"}),"conflux-rust")," repository.")),Object(r.b)("h2",{id:"running-a-light-node"},"Running a light node"),Object(r.b)("p",null,"Light nodes are implemented as a part of the official ",Object(r.b)("inlineCode",{parentName:"p"},"conflux-rust")," binary and can be enabled using the ",Object(r.b)("inlineCode",{parentName:"p"},"--light")," command line flag."),Object(r.b)("p",null,"Please start by downloading the latest release from the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-rust/releases"}),"conflux-rust")," repository, or by building from source following ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"installation"}),"this")," guide. Then, you can simply run the node using these commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"> cd run\n> ./conflux --config tethys.toml --light 2> stderr.txt\n")),Object(r.b)("p",null,"Alternatively, if you want your node to connect to the testnet, you will need to pass ",Object(r.b)("inlineCode",{parentName:"p"},"testnet.toml")," instead. Similarly to full nodes, you will know when your node is fully synced with the network once it prints:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"Catch-up mode: false\n")),Object(r.b)("h2",{id:"interacting-with-a-light-node"},"Interacting with a light node"),Object(r.b)("p",null,"Similarly to full and archive nodes, you can interact with a light node through an HTTP, TCP, or WebSocket connection. By default, local HTTP queries are enabled through port ",Object(r.b)("inlineCode",{parentName:"p"},"12539"),". For details, please refer to the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"json_rpc"}),"JSON-RPC")," documentation."),Object(r.b)("h3",{id:"rpc-queries"},"RPC queries"),Object(r.b)("p",null,"Light nodes support most Conflux RPC APIs, and support for the rest is also ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461"}),"on the way"),". As light nodes need to query their peers to fulfill RPC requests, the overall latency is slightly larger. (It is significantly larger for ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_getLogs"),", see ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#im-searching-through-event-logs-why-is-it-so-slow"}),"below"),".)"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'> curl -X POST --data \'{ "jsonrpc": "2.0", "method": "cfx_clientVersion", "id": 1 }\' -H "Content-Type: application/json" localhost:12539\n{ "jsonrpc": "2.0", "result": "conflux-rust-1.0.0", "id": 1 }\n\n> curl -X POST --data \'{ "jsonrpc":"2.0", "method":"cfx_getBalance", "params": ["0x17def97480eb8e5a6169a436531469c962bf577f"], "id": 2 }\' -H "Content-Type: application/json" localhost:12539\n{ "jsonrpc": "2.0", "result": "0x5fc346d4363f84249d4a", "id": 2 }\n\n> curl -X POST --data \'{ "jsonrpc": "2.0", "method": "cfx_getLogs", "params": [{ "address": "0x8e2f2e68eb75bb8b18caafe9607242d4748f8d98", "fromEpoch": "0x1c8b8", "toEpoch": "0x1c8d6" }], "id": 3}\' -H "Content-Type: application/json" localhost:12539\n{ "jsonrpc": "2.0", "result": [{ "address": "0x8e2f2e68eb75bb8b18caafe9607242d4748f8d98", "blockHash": "0x694898c77602511b6c411860ec230ac7ca58c08a4cbe3cad904e724b2eb97fee", "data": "0x0000000000000000000000000000000000000000000000049b9ca9a694340000000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000141da5f533abef1b82a4a6d698415b8a56894b7b410000000000000000000000000000000000000000000000000000000000000000000000000000000000000000", "epochNumber": "0x1c8bf", "logIndex": "0x0", "topics": ["0x06b541ddaa720db2b10a4d0cdac39b8d360425fc073085fac19bc82614677987","0x0000000000000000000000001da5f533abef1b82a4a6d698415b8a56894b7b41","0x0000000000000000000000001da5f533abef1b82a4a6d698415b8a56894b7b41","0x00000000000000000000000080bb30efc5683758128b404fe5da03432eb16634"], "transactionHash": "0x7dcfeb245369e509f2d154f2d5523e3ebe0b54f1d420e02edf56c70cdcae278d", "transactionIndex": "0x0", "transactionLogIndex": "0x0" },{ "address": "0x8e2f2e68eb75bb8b18caafe9607242d4748f8d98", "blockHash": "0x694898c77602511b6c411860ec230ac7ca58c08a4cbe3cad904e724b2eb97fee", "data": "0x0000000000000000000000000000000000000000000000049b9ca9a694340000", "epochNumber": "0x1c8bf", "logIndex": "0x1", "topics": ["0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef","0x0000000000000000000000001da5f533abef1b82a4a6d698415b8a56894b7b41","0x00000000000000000000000080bb30efc5683758128b404fe5da03432eb16634"], "transactionHash": "0x7dcfeb245369e509f2d154f2d5523e3ebe0b54f1d420e02edf56c70cdcae278d", "transactionIndex": "0x0", "transactionLogIndex": "0x1" }], "id": 3 } -H "Content-Type: application/json" localhost:12539\n')),Object(r.b)("h3",{id:"javascript"},"JavaScript"),Object(r.b)("p",null,"Light nodes support most of the functionalities of the JavaScript SDK (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/js-conflux-sdk"}),"js-conflux-sdk"),"). You can install the SDK using the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"> npm install --save js-conflux-sdk@1.0.0-beta.1\n")),Object(r.b)("p",null,"Then, you can query the blockchain and send transactions:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const { Conflux, Drip } = require('js-conflux-sdk');\n\nconst PRIVATE_KEY = '0x...';\nconst RECEIVER = '0x...';\n\nasync function main() {\n  const conflux = new Conflux({ url: 'http://localhost:12539' });\n\n  // query node version\n  const client_version = await conflux.provider.call('cfx_clientVersion');\n  console.log('client_version:', client_version);\n\n  // query account balance\n  const balance = await conflux.getBalance('0x17def97480eb8e5a6169a436531469c962bf577f');\n  console.log('balance:', balance.toString(10));\n\n  // query smart contract logs\n  const logs = await conflux.getLogs({\n    address: '0x8e2f2e68eb75bb8b18caafe9607242d4748f8d98',\n    fromEpoch: 116920,\n    toEpoch: 116950,\n  });\n\n  console.log('logs:', logs);\n\n  // send transaction\n  const account = conflux.wallet.addPrivateKey(PRIVATE_KEY);\n\n  const tx = {\n    from: account.address,\n    to: RECEIVER,\n    value: Drip.fromCFX(0.1),\n    gasPrice: '0x1',\n  };\n\n  try {\n    const receipt = await conflux.sendTransaction(tx).executed();\n    console.log('receipt:', receipt);\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nmain();\n")),Object(r.b)("h3",{id:"other-sdks"},"Other SDKs"),Object(r.b)("p",null,"While it has not been tested, light nodes are expected to work with the Java and Go SDKs as well."),Object(r.b)("h2",{id:"troubleshooting"},"Troubleshooting"),Object(r.b)("h4",{id:"why-do-i-get-an-error-when-calling-a-contract-method"},"Why do I get an error when calling a contract method?"),Object(r.b)("p",null,"If you run the following code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const admin = await cfx.InternalContract('AdminControl').getAdmin('0x8e2f2e68eb75bb8b18caafe9607242d4748f8d98');\nconsole.log('admin:', admin);\n")),Object(r.b)("p",null,"... you will get this error:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"RPCError: This API is not implemented yet\n    at HttpProvider.call\n    at processTicksAndRejections\n    at async Conflux.call\n    at async MethodTransaction.call\n    at async MethodTransaction.then {\n  code: -32000,\n  data: 'Tracking issue: https://github.com/Conflux-Chain/conflux-rust/issues/1461'\n}\n")),Object(r.b)("p",null,"This is because contract calls use the ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_call")," RPC API which is not yet supported on light nodes. For details, please refer to ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"#rpc-availability"}),"this")," table."),Object(r.b)("p",null,"Suppose you would like to send a transaction to a smart contract:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"conflux.InternalContract('AdminControl').setAdmin('0x8e2f2e68eb75bb8b18caafe9607242d4748f8d98', '0x189121b8f0cdfef0b56eb22d9cb76c97b9c7cfbc').sendTransaction({\n  from: account,\n}).executed();\n")),Object(r.b)("p",null,"You will get a similar error. This is because for contract transactions, ",Object(r.b)("inlineCode",{parentName:"p"},"js-conflux-sdk")," will automatically attempt to estimate the gas limit and storage limit using the ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," RPC, and it will also set the current gas price using the ",Object(r.b)("inlineCode",{parentName:"p"},"cfx_gasPrice")," RPC, both of which are not yet supported on light nodes. You can address this by manually setting these parameters:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"conflux.InternalContract('AdminControl').setAdmin('0x8e2f2e68eb75bb8b18caafe9607242d4748f8d98', '0x189121b8f0cdfef0b56eb22d9cb76c97b9c7cfbc').sendTransaction({\n  from: account,\n  gas: '0x1111',\n  storageLimit: '0x0',\n  gasPrice: '0x1',\n}).executed();\n")),Object(r.b)("p",null,"If you encounter a ",Object(r.b)("inlineCode",{parentName:"p"},"This API is not implemented yet")," error, you can set the debug logger on the conflux object to find out which RPC is causing it."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const cfx = new Conflux({\n  url: 'http://localhost:12539',\n  logger: console,\n});\n")),Object(r.b)("h4",{id:"why-do-i-see-timeout-instead-of-null"},"Why do I see timeout instead of null?"),Object(r.b)("p",null,"For most operations, you might sometimes see a timeout error:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'RPCError: Operation timeout: "Timeout while retrieving transaction with hash 0x497755f45baef13a35347933c48c0b8940f2cc3347477b5ed9f165581b082699"\n')),Object(r.b)("p",null,"This is because light nodes have to retrieve transactions and other items from their peers. If no peer responds within 4 seconds, you will get a timeout error. In most cases, retrying the query will succeed."),Object(r.b)("p",null,"You will also get a timeout if you call ",Object(r.b)("inlineCode",{parentName:"p"},"conflux.getTransactionByHash")," and pass a transaction hash that does not exist. This is because the ",Object(r.b)("em",{parentName:"p"},'"non-existence"')," or transactions is not something light nodes can verify, so returning ",Object(r.b)("inlineCode",{parentName:"p"},"null")," might be misleading. This behavior might change in the future."),Object(r.b)("h4",{id:"im-searching-through-event-logs-why-is-it-so-slow"},"I'm searching through event logs, why is it so slow?"),Object(r.b)("p",null,"Log filtering is a very expensive operation on light nodes. For each epoch in the range you specify, the node needs to perform 1 to 3 queries. We recommend you make multiple queries with smaller epoch ranges."),Object(r.b)("p",null,"Instead of..."),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const fromEpoch = 110000;\nconst toEpoch = 119999;\n\n// NOT RECOMMENDED\nconst logs = await cfx.getLogs({ fromEpoch, toEpoch, address: '0x8e2f2e68eb75bb8b18caafe9607242d4748f8d98' });\nconsole.log('logs:', logs);\n")),Object(r.b)("p",null,"... you are encouraged to do this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"for (ii = 0; ii < 10; ++ii) {\n  const fromEpoch = 110000 + ii * 1000;\n  const toEpoch = 110000 + (ii + 1) * 1000 - 1;\n  const logs = await cfx.getLogs({ fromEpoch, toEpoch, address: '0x8e2f2e68eb75bb8b18caafe9607242d4748f8d98' });\n  console.log('logs:', logs);\n}\n")),Object(r.b)("h2",{id:"rpc-availability"},"RPC availability"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"RPC"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"supported"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_call"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_call"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461"}),"not yet"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_checkbalanceagainsttransaction"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_checkBalanceAgainstTransaction"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461"}),"not yet"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_clientversion"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_clientVersion"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_epochnumber"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_epochNumber"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_estimategasandcollateral"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_estimateGasAndCollateral"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461"}),"not yet"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_gasprice"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_gasPrice"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461"}),"not yet"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getaccount"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getAccount"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getaccumulateinterestrate"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getAccumulateInterestRate"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461"}),"not yet"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getadmin"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getAdmin"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getbalance"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getBalance"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getbestblockhash"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getBestBlockHash"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getblockbyepochnumber"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getBlockByEpochNumber"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getblockbyhash"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getBlockByHash"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getblockbyhashwithpivotassumption"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getBlockByHashWithPivotAssumption"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getblockrewardinfo"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getBlockRewardInfo"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461"}),"not yet"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getblocksbyepoch"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getBlocksByEpoch"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getcode"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getCode"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getcollateralforstorage"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getCollateralForStorage"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getconfirmationriskbyhash"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getConfirmationRiskByHash"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getinterestrate"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getInterestRate"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"https://github.com/Conflux-Chain/conflux-rust/issues/1461"}),"not yet"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getlogs"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getLogs"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getnextnonce"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getNextNonce"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getskippedblocksbyepoch"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getSkippedBlocksByEpoch"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getsponsorinfo"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getSponsorInfo"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getstakingbalance"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getStakingBalance"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getstatus"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getStatus"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getstorageat"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getStorageAt"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_getstorageroot"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getStorageRoot"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_gettransactionbyhash"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getTransactionByHash"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_gettransactionreceipt"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_getTransactionReceipt"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"json_rpc#cfx_sendrawtransaction"}),Object(r.b)("inlineCode",{parentName:"a"},"cfx_sendRawTransaction"))),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"OK")))))}s.isMDXComponent=!0},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var n=a(0),c=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=c.a.createContext({}),s=function(e){var t=c.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},j=c.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=s(a),j=n,O=d["".concat(b,".").concat(j)]||d[j]||p[j]||r;return a?c.a.createElement(O,o(o({ref:t},l),{},{components:a})):c.a.createElement(O,o({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=j;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,b[1]=o;for(var l=2;l<r;l++)b[l]=a[l];return c.a.createElement.apply(null,b)}return c.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);