(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{120:function(e,c,n){"use strict";n.r(c),n.d(c,"frontMatter",(function(){return s})),n.d(c,"metadata",(function(){return r})),n.d(c,"toc",(function(){return b})),n.d(c,"default",(function(){return i}));var a=n(3),t=n(7),o=(n(0),n(157)),s={id:"pubsub",title:"Publish-Subscribe API",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/pubsub.md",keywords:["conflux","pubsub","sdk"]},r={unversionedId:"conflux-doc/docs/pubsub",id:"conflux-doc/docs/pubsub",isDocsHomePage:!1,title:"Publish-Subscribe API",description:"The Publish-Subscribe API of Conflux (also called pub-sub) makes it possible to query certain items on an ongoing basis, without polling through the JSON-RPC HTTP interface. You can use this API on top of a TCP or WebSocket connection.",source:"@site/docs/conflux-doc/docs/pubsub.md",sourceDirName:"conflux-doc/docs",slug:"/conflux-doc/docs/pubsub",permalink:"/conflux-doc/docs/pubsub",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/pubsub.md",version:"current",frontMatter:{id:"pubsub",title:"Publish-Subscribe API",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/pubsub.md",keywords:["conflux","pubsub","sdk"]},sidebar:"api",previous:{title:"cfx Namespace",permalink:"/conflux-doc/docs/json_rpc"},next:{title:"CLI Sub-commands",permalink:"/conflux-doc/docs/cli_sub_commands"}},b=[{value:"Subscriptions",id:"subscriptions",children:[]},{value:"<code>newHeads</code>",id:"newheads",children:[]},{value:"<code>epochs</code>",id:"epochs",children:[]},{value:"<code>logs</code>",id:"logs",children:[]},{value:"Node.js example",id:"nodejs-example",children:[]}],d={toc:b};function i(e){var c=e.components,n=Object(t.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},d,n,{components:c,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Publish-Subscribe API of Conflux (also called pub-sub) makes it possible to query certain items on an ongoing basis, without polling through the JSON-RPC HTTP interface. You can use this API on top of a TCP or WebSocket connection."),Object(o.b)("p",null,"To use the pub-sub API, please make sure that you have access to a node with its TCP or WebSocket port open. If you maintain your own node, you can set these using the ",Object(o.b)("inlineCode",{parentName:"p"},"--jsonrpc-tcp-port PORT")," and ",Object(o.b)("inlineCode",{parentName:"p"},"--jsonrpc-ws-port PORT")," CLI flags (see ",Object(o.b)("inlineCode",{parentName:"p"},"conflux --help"),") or through the ",Object(o.b)("inlineCode",{parentName:"p"},"jsonrpc_tcp_port")," and ",Object(o.b)("inlineCode",{parentName:"p"},"jsonrpc_ws_port")," configuration parameters (see ",Object(o.b)("inlineCode",{parentName:"p"},"run/default.toml"),"). In this document, we will use the default TCP (",Object(o.b)("inlineCode",{parentName:"p"},"12536"),") and WebSocket (",Object(o.b)("inlineCode",{parentName:"p"},"12535"),") ports."),Object(o.b)("h2",{id:"subscriptions"},"Subscriptions"),Object(o.b)("p",null,"You can subscribe to a topic through a ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_subscribe")," JSON-RPC call. This will result in a subscription ID, which can later be used to unsubscribe through a ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_unsubscribe")," JSON-RPC call."),Object(o.b)("p",null,"The following example shows how to create a subscription over a TCP connection using ",Object(o.b)("inlineCode",{parentName:"p"},"nc")," (",Object(o.b)("inlineCode",{parentName:"p"},"netcat"),"):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'> nc localhost 12536\n{ "jsonrpc": "2.0", "method": "cfx_subscribe", "params": ["topic"], "id": 1 }\n{ "jsonrpc": "2.0", "result": "0x2ee8e71befef9049", "id": 1 }\n...\n{ "jsonrpc": "2.0", "method": "cfx_unsubscribe", "params": ["0x2ee8e71befef9049"], "id": 2 }\n{ "jsonrpc": "2.0", "result": true, "id": 2 }\n')),Object(o.b)("p",null,"The following example shows how to create a subscription over a WebSocket connection using ",Object(o.b)("inlineCode",{parentName:"p"},"websocat"),":"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'> websocat ws://localhost:12535\n{ "jsonrpc": "2.0", "method": "cfx_subscribe", "params": ["topic"], "id": 1 }\n{ "jsonrpc": "2.0", "result": "0x2ee8e71befef9049", "id": 1 }\n...\n{ "jsonrpc": "2.0", "method": "cfx_unsubscribe", "params": ["0x2ee8e71befef9049"], "id": 2 }\n{ "jsonrpc": "2.0", "result": true, "id": 2 }\n')),Object(o.b)("p",null,"Currently, we support the following topics: ",Object(o.b)("inlineCode",{parentName:"p"},"newHeads"),", ",Object(o.b)("inlineCode",{parentName:"p"},"epochs"),", ",Object(o.b)("inlineCode",{parentName:"p"},"logs"),"."),Object(o.b)("h2",{id:"newheads"},Object(o.b)("inlineCode",{parentName:"h2"},"newHeads")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"newHeads")," topic streams all new block headers participating in the consensus."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "jsonrpc": "2.0", "method": "cfx_subscribe", "params": ["newHeads"], "id": 1 }\n{ "jsonrpc": "2.0", "result": "0x2ee8e71befef9049", "id": 1 }\n\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "adaptive": false, "blame": 0, "deferredLogsBloomHash": "0xd397b3b043d87fcd6fad1291ff0bfd16401c274896d8c63a923727f077b8e0b5", "deferredReceiptsRoot": "0x959684cc863003d5ac5cb31bcf5baf7e1b4fc60963fcc36fbc1bf4394a0e2e3c", "deferredStateRoot": "0x72884d26f7de73cce4a06bddb985a7d9f8406c836dffdc8000f309684e55f9f3", "difficulty": "0x4", "epochNumber": "0x6a", "gasLimit": "0xb2d05e00", "hash": "0xcdd3831280b42552c4bdfe2893892d96008f1788f37122cbccf09b172f7035df", "height": "0x6a", "miner": "CFX:TYPE.USER:AARC9ABYCUE0HHZGYRR53M6CXEDGCCRMMYYBJGH4XG", "nonce": "0xd68368be06ba1a73", "parentHash": "0x16a3dfdb6beeb91a36019efedcb4863b854d98353ed1b260e4088f3cbb6510ad", "refereeHashes": [], "stable": true, "timestamp": "0x5e478223", "transactionsRoot": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347" }, "subscription": "0x7b40ad26c24752d3" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "adaptive": false, "blame": 0, "deferredLogsBloomHash": "0xd397b3b043d87fcd6fad1291ff0bfd16401c274896d8c63a923727f077b8e0b5", "deferredReceiptsRoot": "0x959684cc863003d5ac5cb31bcf5baf7e1b4fc60963fcc36fbc1bf4394a0e2e3c", "deferredStateRoot": "0xd7bb2ad6406b7ec8c4ed3f424b5cb08f23483a6208f1c551e7f8a54e7c764462", "difficulty": "0x4", "epochNumber": "0x6b", "gasLimit": "0xb2d05e00", "hash": "0xd8f1eead32f32fdd909e3654357d90846114e26931448701af086a41fcf725ef", "height": "0x6b", "miner": "CFX:TYPE.USER:AARC9ABYCUE0HHZGYRR53M6CXEDGCCRMMYYBJGH4XG", "nonce": "0xf590aad206a65c1c", "parentHash": "0xcdd3831280b42552c4bdfe2893892d96008f1788f37122cbccf09b172f7035df", "refereeHashes": [], "stable": true, "timestamp": "0x5e478224", "transactionsRoot": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347" }, "subscription": "0x7b40ad26c24752d3" }}\n...\n')),Object(o.b)("h2",{id:"epochs"},Object(o.b)("inlineCode",{parentName:"h2"},"epochs")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"epochs")," topic streams consensus results: the total order of blocks, as expressed by a sequence of epochs."),Object(o.b)("p",null,"The returned series of epoch numbers is monotonically increasing with an increment of one. If you see the same epoch twice, this suggests a pivot chain reorg has happened (this might happen for recent epochs)."),Object(o.b)("p",null,"An optional parameter can be passed to control the subscribed epoch. available value is ",Object(o.b)("inlineCode",{parentName:"p"},"latest_state")," and ",Object(o.b)("inlineCode",{parentName:"p"},"latest_mined")," (default)."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "jsonrpc": "2.0", "method": "cfx_subscribe", "params": ["epochs"], "id": 1 }\n{ "jsonrpc": "2.0", "result": "0xde5801fda9520049", "id": 1 }\n\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x6a7", "epochHashesOrdered": ["0x6f21f408476f404ecc07f0a52170ffdf62ca23497bdc3e3d64429b2c26308e00"]}, "subscription": "0xcd73be4533944f33" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x6a8", "epochHashesOrdered": ["0x1bb99ee21dade175959da6a0a373a6f75732a2a7ea67adbda97f1bf7b4574ff1"]}, "subscription": "0xcd73be4533944f33" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x6a8", "epochHashesOrdered": ["0xd8d4ed0ff02c3d61bbcd13095b1a4d21eb43cee8c40e7e7e7c5a41a861cda409"]}, "subscription": "0xcd73be4533944f33" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x6a9", "epochHashesOrdered": ["0x1bb99ee21dade175959da6a0a373a6f75732a2a7ea67adbda97f1bf7b4574ff1", "0x9df97d1c8228d33dacd7367e4db4fd29f879fcf2679f947ee90f5d4ce035a206"]}, "subscription": "0xcd73be4533944f33" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x6aa", "epochHashesOrdered": ["0xe322882ee1acb79e0b7eb394db9aeede67c6198641762da8a50b4bb6b48cc2a4"]}, "subscription": "0xcd73be4533944f33" }}\n...\n')),Object(o.b)("p",null,"For each epoch, the ",Object(o.b)("strong",{parentName:"p"},"last")," hash in ",Object(o.b)("inlineCode",{parentName:"p"},"epochHashesOrdered")," is the hash of the pivot block. In the example above, we know that currently the last section of the pivot chain is:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"0x6f21f408476f404ecc07f0a52170ffdf62ca23497bdc3e3d64429b2c26308e00 (epoch 0x6a7)\n0xd8d4ed0ff02c3d61bbcd13095b1a4d21eb43cee8c40e7e7e7c5a41a861cda409 (epoch 0x6a8)\n0x9df97d1c8228d33dacd7367e4db4fd29f879fcf2679f947ee90f5d4ce035a206 (epoch 0x6a9)\n0xe322882ee1acb79e0b7eb394db9aeede67c6198641762da8a50b4bb6b48cc2a4 (epoch 0x6aa)\n")),Object(o.b)("h2",{id:"logs"},Object(o.b)("inlineCode",{parentName:"h2"},"logs")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"logs")," topic streams all logs matching a certain filter, in order."),Object(o.b)("p",null,"The filter format follows that of the ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_getLogs")," JSON-RPC API. It is a JSON object with the (optional) fields ",Object(o.b)("inlineCode",{parentName:"p"},"address")," (contract address), and ",Object(o.b)("inlineCode",{parentName:"p"},"topics")," (order-dependent array of indexed log topics)."),Object(o.b)("p",null,"In case of a pivot chain reorg (which might affect recent logs), a special ",Object(o.b)("inlineCode",{parentName:"p"},"revert")," message is sent. All logs received previously that belong to epochs larger than the one in this message should be considered invalid."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'{ "jsonrpc": "2.0", "method": "cfx_subscribe", "params": ["logs", { "topics": ["0xc822296d568499547c3a5b93a500428bab54ef8f6a481f352c7086f1daf4277f"] }], "id": 1 }\n{ "jsonrpc": "2.0", "result": "0x2dd59588c475a772", "id": 1 }\n\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x3f3", "transactionHash": "0x89ee0aa76bc1a7c9340f3efcfc7c8263a212cadcb32f0231ef1395ef9c587899", "address": "CFX:TYPE.CONTRACT:ACC7UAWF5UBTNMEZVHU9DHC6SGHEA0403Y2DGPYFJP", "blockHash": "0x929ad718797e03cce31f66f234e12893c8be5e959dba14b8328205c9c136ddbe", "data": "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d", "logIndex": "0x0", "topics": ["0xc822296d568499547c3a5b93a500428bab54ef8f6a481f352c7086f1daf4277f", "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d"], "transactionIndex": "0x0", "transactionLogIndex": "0x0" }, "subscription": "0x2dd59588c475a772" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x40f", "transactionHash": "0x5cf00bb4ee966c340f459c57a53e4be7357bdf23bb055a95066d4408d5ecf118", "address": "CFX:TYPE.CONTRACT:ACCKUCYY5FHZKNBXMEEXWTAJ3BXMEG25B2B50PTA6V", "blockHash": "0xede319ddfa7a9710aef627aa152052da190d3798d2ad7fd7da8d953b48a1785e", "data": "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d", "logIndex": "0x0", "topics": ["0xc822296d568499547c3a5b93a500428bab54ef8f6a481f352c7086f1daf4277f", "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d"], "transactionIndex": "0x0", "transactionLogIndex": "0x0" }, "subscription": "0x2dd59588c475a772" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x411", "transactionHash": "0xf639c7b26df0d60bc8306c7877d7ec3c361b2157d14b12b704ea5500d70d8798", "address": "CFX:TYPE.CONTRACT:ACC7UAWF5UBTNMEZVHU9DHC6SGHEA0403Y2DGPYFJP", "blockHash": "0x3742f695f9b2270b51b9a409ff499caf298dd46dc9d3bbe8360c4997ce9b00c7", "data": "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d", "logIndex": "0x0", "topics": ["0xc822296d568499547c3a5b93a500428bab54ef8f6a481f352c7086f1daf4277f", "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d"], "transactionIndex": "0x0", "transactionLogIndex": "0x0" }, "subscription": "0x2dd59588c475a772" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "revertTo": "0x40f" }, "subscription": "0x2dd59588c475a772" }}\n{ "jsonrpc": "2.0", "method": "cfx_subscription", "params": { "result": { "epochNumber": "0x410", "transactionHash": "0xf639c7b26df0d60bc8306c7877d7ec3c361b2157d14b12b704ea5500d70d8798", "address": "CFX:TYPE.CONTRACT:ACCKUCYY5FHZKNBXMEEXWTAJ3BXMEG25B2B50PTA6V", "blockHash": "0x24faa39196ee34d1d04cd4c44012bd28a757b251e0551d9503bf6685b467e0d5", "data": "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d", "logIndex": "0x0", "topics": ["0xc822296d568499547c3a5b93a500428bab54ef8f6a481f352c7086f1daf4277f", "0x000000000000000000000000f8b133b3dad547cdf0be685399b39241f2e6e77d"], "transactionIndex": "0x0", "transactionLogIndex": "0x0" }, "subscription": "0x2dd59588c475a772" }}\n...\n')),Object(o.b)("p",null,"In the example above, the ",Object(o.b)("inlineCode",{parentName:"p"},"revert")," message ",Object(o.b)("strong",{parentName:"p"},"invalidates all logs with an epoch number greater than ",Object(o.b)("inlineCode",{parentName:"strong"},"0x40f"))," (i.e. epochs ",Object(o.b)("inlineCode",{parentName:"p"},"0x410"),", ",Object(o.b)("inlineCode",{parentName:"p"},"0x411"),", etc). Transaction ",Object(o.b)("inlineCode",{parentName:"p"},"0xf639c7b...")," is re-executed and the corresponding log is published again. This time, the transaction ends up in epoch ",Object(o.b)("inlineCode",{parentName:"p"},"0x410")," instead of ",Object(o.b)("inlineCode",{parentName:"p"},"0x411"),". All logs in the epochs up to (and including) ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("inlineCode",{parentName:"strong"},"0x40f"))," remain valid."),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note: The ",Object(o.b)("inlineCode",{parentName:"em"},"logs")," pub-sub topic is not supported on light nodes.")),Object(o.b)("h2",{id:"nodejs-example"},"Node.js example"),Object(o.b)("p",null,"Below is a simple example of using the pub-sub API through Node.js. In this example, we detect pivot chain reorgs using the ",Object(o.b)("inlineCode",{parentName:"p"},"epochs")," topic. We rely on ",Object(o.b)("inlineCode",{parentName:"p"},"js-conflux-sdk"),". For simplicity, we omit error handling."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'const sdk = require("js-conflux-sdk")\nconst cfx = new sdk.Conflux({ url: "ws://127.0.0.1:12535" });\n\n(async function () {\n    subscription = await cfx.subscribeEpochs()\n    let latest_epoch = 0;\n    subscription.on(\'data\', data => {\n        let epoch = data.epochNumber\n        console.log(`epoch ${epoch} produced`)\n        if (epoch <= latest_epoch) {\n            console.log(`chain reorg of depth ${latest_epoch - epoch} (${latest_epoch} --\x3e ${epoch})`);\n        }\n        latest_epoch = epoch;\n    })\n})()\n\n')),Object(o.b)("p",null,"Example output:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"epoch 3136 produced\nepoch 3137 produced\nepoch 3138 produced\nepoch 3139 produced\nepoch 3140 produced\nepoch 3141 produced\nchain reorg of depth 1 (3142 --\x3e 3141)\nchain reorg of depth 1 (3143 --\x3e 3142)\n...\n")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Note: Shallow pivot chain reorgs are quite common as the end of the pivot chain tends to oscillate before it stabilizes.")))}i.isMDXComponent=!0},157:function(e,c,n){"use strict";n.d(c,"a",(function(){return p})),n.d(c,"b",(function(){return u}));var a=n(0),t=n.n(a);function o(e,c,n){return c in e?Object.defineProperty(e,c,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[c]=n,e}function s(e,c){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);c&&(a=a.filter((function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var c=1;c<arguments.length;c++){var n=null!=arguments[c]?arguments[c]:{};c%2?s(Object(n),!0).forEach((function(c){o(e,c,n[c])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(c){Object.defineProperty(e,c,Object.getOwnPropertyDescriptor(n,c))}))}return e}function b(e,c){if(null==e)return{};var n,a,t=function(e,c){if(null==e)return{};var n,a,t={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],c.indexOf(n)>=0||(t[n]=e[n]);return t}(e,c);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],c.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var d=t.a.createContext({}),i=function(e){var c=t.a.useContext(d),n=c;return e&&(n="function"==typeof e?e(c):r(r({},c),e)),n},p=function(e){var c=i(e.components);return t.a.createElement(d.Provider,{value:c},e.children)},l={inlineCode:"code",wrapper:function(e){var c=e.children;return t.a.createElement(t.a.Fragment,{},c)}},f=t.a.forwardRef((function(e,c){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=b(e,["components","mdxType","originalType","parentName"]),p=i(n),f=a,u=p["".concat(s,".").concat(f)]||p[f]||l[f]||o;return n?t.a.createElement(u,r(r({ref:c},d),{},{components:n})):t.a.createElement(u,r({ref:c},d))}));function u(e,c){var n=arguments,a=c&&c.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var r={};for(var b in c)hasOwnProperty.call(c,b)&&(r[b]=c[b]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var d=2;d<o;d++)s[d]=n[d];return t.a.createElement.apply(null,s)}return t.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);