(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{175:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return d}));var a=t(2),c=t(9),r=(t(0),t(210)),l={},b={id:"js-conflux-sdk/CHANGE_LOG",title:"CHANGE_LOG",description:"change log",source:"@site/docs/js-conflux-sdk/CHANGE_LOG.md",permalink:"/docs/js-conflux-sdk/CHANGE_LOG",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/CHANGE_LOG.md",lastUpdatedAt:1607421135},o=[{value:"v1.1.6",id:"v116",children:[]},{value:"v1.1.5",id:"v115",children:[]},{value:"v1.1.4",id:"v114",children:[]},{value:"v1.1.3",id:"v113",children:[]},{value:"v1.1.2",id:"v112",children:[]},{value:"v1.1.1",id:"v111",children:[]},{value:"v1.1.0",id:"v110",children:[]},{value:"v1.0.1",id:"v101",children:[]},{value:"v1.0.0",id:"v100",children:[]},{value:"v0.13.4",id:"v0134",children:[]},{value:"v0.13.3",id:"v0133",children:[]},{value:"v0.13.2",id:"v0132",children:[]},{value:"v0.13.1",id:"v0131",children:[]},{value:"v0.13.0",id:"v0130",children:[]},{value:"v0.12.0",id:"v0120",children:[]},{value:"v0.11.0",id:"v0110",children:[]},{value:"v0.10.3",id:"v0103",children:[]},{value:"v0.10.2",id:"v0102",children:[]},{value:"v0.10.1",id:"v0101",children:[]},{value:"v0.10.0-alpha",id:"v0100-alpha",children:[]},{value:"v0.9.2",id:"v092",children:[]},{value:"v0.9.1",id:"v091",children:[]},{value:"v0.9.0-beta",id:"v090-beta",children:[]}],i={rightToc:o};function d(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"change-log"},"change log"),Object(r.b)("h2",{id:"v116"},"v1.1.6"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"export ",Object(r.b)("inlineCode",{parentName:"li"},"Contract"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// nodejs\nconst { Contract } = require('js-conflux-sdk');\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"import { Contract } from 'js-conflux-sdk'\n")),Object(r.b)("h2",{id:"v115"},"v1.1.5"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add ",Object(r.b)("inlineCode",{parentName:"li"},"stateMutability")," for method from abi")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'console.log(contract.symbol.stateMutability) // "view"\nconsole.log(contract.transfer.stateMutability) // "nonpayable"\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"rename EventLog.params to EventLog.arguments")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"await conflux.contract.Transfer(null, null, null).getLogs({\n  fromEpoch: 2868400,\n  toEpoch: 2868500,\n})\n\n/*\n[\n  {\n    data: '0x0000000000000000000000000000000000000000000000000001184b321b4e44',\n    topics: [\n      '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',\n      '0x0000000000000000000000001dc05200485776b79f195a1e617dbccb6826f1c4',\n      '0x000000000000000000000000882c4ddb1d3210b5ae778360729c04cd3242df70'\n    ],\n    ...\n    arguments: NamedTuple(from,to,value)(3) [\n      '0x1dc05200485776b79f195a1e617dbccb6826f1c4',\n      '0x882c4ddb1d3210b5ae778360729c04cd3242df70',\n      308186218974788n\n    ]\n  }\n]\n*/\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add ",Object(r.b)("inlineCode",{parentName:"li"},"subscribeLogs")," for EventLog")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"subscription = await contract.Transfer(null, null, null).subscribeLogs();\n\nsubscription.on('data', data => {\n  console.log(data);\n});\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"contract decode constructor data with out bytecode ")),Object(r.b)("h2",{id:"v114"},"v1.1.4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add ",Object(r.b)("inlineCode",{parentName:"li"},"conflux.getSupplyInfo"))),Object(r.b)("h2",{id:"v113"},"v1.1.3"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"WebsocketProvider with Websocket options")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"new Conflux({\n  url: 'ws://127.0.0.1',\n  clientConfig: {\n    maxReceivedFrameSize: 10*1000*1000, // 10 MB\n  }\n})\n")),Object(r.b)("h2",{id:"v112"},"v1.1.2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"add ",Object(r.b)("inlineCode",{parentName:"p"},"conflux.getVoteList"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"add ",Object(r.b)("inlineCode",{parentName:"p"},"conflux.getDepositList"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"update ",Object(r.b)("inlineCode",{parentName:"p"},"conflux.getTransactionReceipt")))),Object(r.b)("h2",{id:"v111"},"v1.1.1"),Object(r.b)("p",null,"fix: update request id avoid repeat"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'// old\nconflux.provider.requestId(); // "16055917399420726"\n\n// new\nconflux.provider.requestId(); // "175d4b91862001f4f81eb443"\n')),Object(r.b)("h2",{id:"v110"},"v1.1.0"),Object(r.b)("p",null,"fix: use native websocket for front-end"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"use BigInt for nodejs, JSBI for browser")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// for nodejs\n\n// old\nconflux.getBalance(ADDRESS); // JSBI(1) [ -1153374696, sign: false ]\n\n// new\nconflux.getBalance(ADDRESS); // 3141592600n\n")),Object(r.b)("h2",{id:"v101"},"v1.0.1"),Object(r.b)("p",null,"fix: EventCoder, FunctionCoder, valueCoder decode return string but not JSBI"),Object(r.b)("h2",{id:"v100"},"v1.0.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add ",Object(r.b)("inlineCode",{parentName:"li"},"defaultGasRatio")," and ",Object(r.b)("inlineCode",{parentName:"li"},"defaultStorageRatio"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"conflux = new Conflux({\n  defaultGasRatio: 1.1,\n  defaultStorageRatio: 1.1,\n  ...\n})\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add ",Object(r.b)("inlineCode",{parentName:"li"},"BaseAccount")," and ",Object(r.b)("inlineCode",{parentName:"li"},"PrivateKeyAccount"))),Object(r.b)("p",null,"Account ",Object(r.b)("inlineCode",{parentName:"p"},"signTransaction")," and ",Object(r.b)("inlineCode",{parentName:"p"},"signMessage")," to be ",Object(r.b)("inlineCode",{parentName:"p"},"async")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add wallet")),Object(r.b)("p",null,"wallet use for create and manage ",Object(r.b)("inlineCode",{parentName:"p"},"Account")," by address"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"account = conflux.wallet.addRandom()\nconsole.log(conflux.wallet.has(account.address)); // true\n\naccount = conflux.wallet.addPrivateKey(PRIVATE_KEY)\nconsole.log(conflux.wallet.has(account.address)); // true\n\naccount = conflux.wallet.addKeystore(keystore, password)\nconsole.log(conflux.wallet.has(account.address)); // true\n")),Object(r.b)("p",null,"wallet use for sendTransaction"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\naccount = conflux.Account(PRIVATE_KEY);\n\nconflux.sendTransaction({\n  from: account.address, // address will call `cfx_sendTranscion`\n  ...\n})\n\nconflux.sendTransaction({\n  from: account, // must be instance of `Account` to sign by sdk and call `cfx_sendRawTransaction`\n  ...\n})\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// new\nconflux.sendTransaction({\n  from: address, // if address not in `conflux.wallet`, call `cfx_sendTranscion`\n  ...\n})\n\naccount = conflux.wallet.addPrivate(PRIVATE_KEY);\n\nconflux.sendTransaction({\n  from: account.address, // if account in `conflux.wallet`, sign by account and call `cfx_sendRawTransaction`\n  ...\n})\n\nconflux.sendTransaction({\n  from: account, // same as `from: account.address`, but some user think input account instance with privateKey is unsafe\n  ...\n})\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add Subscription")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"await conflux.subscribe(name, ...args); // => id\nawait conflux.subscribeEpochs(); // => Subscription with event 'data'\nawait conflux.subscribeNewHeads(); // => Subscription with event 'data'\nawait conflux.subscribeLogs(); // => Subscription with event 'data', 'revert'\nawait conflux.unsubscribe(id); // => boolean\nawait conflux.unsubscribe(subscription); // => boolean  \n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add internal contract")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"contract = conflux.InternalContract('AdminControl');\nconsole.log(contract);\n\ncontract = conflux.InternalContract('SponsorWhitelistControl');\nconsole.log(contract);\n\ncontract = conflux.InternalContract('Staking');\nconsole.log(contract);\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add checksum address")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nconflux.getBalance('0x1B716c51381e76900EBAA7999A488511A4E1fD0a'); // ok\nconflux.getBalance('0x1B716c51381e76900EBAA7999A488511A4E1fD0A'); // ok\n\n// new\nconflux.getBalance('0x1B716c51381e76900EBAA7999A488511A4E1fD0a'); // ok \nconflux.getBalance('0x1B716c51381e76900EBAA7999A488511A4E1fD0A'); // Error('address checksum error')\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"providerFactory")," only accept first argument as override options")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nprovider = providerFactory('http://localhost:12537')\n\n// new\nprovider = providerFactory({ url: 'http://localhost:12537' })\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add batch request")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"provider = providerFactory({ url: 'http://localhost:12537' })\n\narray = await provider.batch([\n  { method: 'cfx_epochNumber' },\n  { method: 'cfx_getBalance', params: ['0x0123456789012345678901234567890123456789'] },\n])\n/*\n[\n  '0x1381',\n  '0x0',\n]\n*/\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add WebSocketProvider")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"provider = providerFactory({ url: 'ws://localhost:12535' })\n\nprovider.close(); // user need to close before process ternimal\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"BaseProvider instanceof EventEmitter")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"const EventEmitter = require('events');\n\n// old\nconsole.log(new BaseProvider() instanceof EventEmitter); // false\nconsole.log(new HttpProvider() instanceof EventEmitter); // false\n\n// new\nconsole.log(new BaseProvider({}) instanceof EventEmitter); // true\nconsole.log(new HttpProvider({}) instanceof EventEmitter); // true\nconsole.log(new WebSocketProvider({}) instanceof EventEmitter); // true\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add CONST")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"const { CONST } = require('js-conflux-sdk');\n\nconsole.log(CONST.EPOCH_NUMBER)\n\n/*\n{\n  LATEST_MINED: 'latest_mined',\n  LATEST_STATE: 'latest_state',\n  LATEST_CONFIRMED: 'latest_confirmed',\n  LATEST_CHECKPOINT: 'latest_checkpoint',\n  EARLIEST: 'earliest'\n}\n*/\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"export ",Object(r.b)("inlineCode",{parentName:"li"},"format")," and ",Object(r.b)("inlineCode",{parentName:"li"},"sign")," without ",Object(r.b)("inlineCode",{parentName:"li"},"util"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nconst { util: {format, sign} } = require('js-conflux-sdk');\n\n// new\nconst { format, sign } = require('js-conflux-sdk');\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add ",Object(r.b)("inlineCode",{parentName:"li"},"Drip")," to replace unit")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nconst { util } = require('js-conflux-sdk');\n\nconst balance = await conflux.getBalance(ADDRESS);\nconsole.log(util.unit.fromDripToCFX(balance))\n\n// new\nconst { Drip } = require('js-conflux-sdk');\n\nconst balance = await conflux.getBalance(ADDRESS);\nconsole.log(Drip(balance).toCFX())\n")),Object(r.b)("p",null,"for input, use ",Object(r.b)("inlineCode",{parentName:"p"},"Drip.fromXXX")," to get drip number string"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nconst { util } = require('js-conflux-sdk');\n\nconst tx = {\n  to: ADDRESS,\n  value: util.unit.fromCFXToDrip(0.1),\n  ...\n}\n\n// new\nconst { Drip } = require('js-conflux-sdk');\n\nconst tx = {\n  to: ADDRESS,\n  value: Drip.fromCFX(0.1),\n  ...\n}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"include all method from conflux JSON_RPC document")),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/json_rpc"}),"JSON_RPC")," "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"friendly example code")),Object(r.b)("p",null,"example will guide user to use SDK step by step"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"charming code organization")),Object(r.b)("p",null,"split abi coder with types"),Object(r.b)("p",null,"split contract method, event and override"),Object(r.b)("h2",{id:"v0134"},"v0.13.4"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"rename ",Object(r.b)("inlineCode",{parentName:"li"},"send_transaction")," to ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_sendTransaction"))),Object(r.b)("h2",{id:"v0133"},"v0.13.3"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Account.encrypt returned address drop '0x' prefix")),Object(r.b)("h2",{id:"v0132"},"v0.13.2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"use scrypt-js")),Object(r.b)("h2",{id:"v0131"},"v0.13.1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"RPC returned all number as hex")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"fix ",Object(r.b)("inlineCode",{parentName:"p"},"sendTransaction"),", ",Object(r.b)("inlineCode",{parentName:"p"},"call"),", ",Object(r.b)("inlineCode",{parentName:"p"},"estimateGasAndCollateral")," shallow copy ",Object(r.b)("inlineCode",{parentName:"p"},"options")))),Object(r.b)("h2",{id:"v0130"},"v0.13.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Account.decrypt")," required keystoreV3 object as input, and put ",Object(r.b)("inlineCode",{parentName:"li"},"password")," as second parameter")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nAccount.decrypt('password', {salt:..., iv:..., cipher:..., mac:...})\n\n// new\nAccount.decrypt({\n  version: 3,\n  id: '0bb47ee0-aac3-a006-2717-03877afa15f0',\n  address: '0x1cad0b19bb29d4674531d6f115237e16afce377c',\n  crypto: {\n    ciphertext: 'a8ec41d2440311ce897bacb6f7942f3235113fa17c4ae6732e032336038a8f73',\n    cipherparams: { iv: '85b5e092c1c32129e3d27df8c581514d' },\n    cipher: 'aes-128-ctr',\n    kdf: 'scrypt',\n    kdfparams: {\n      dklen: 32,\n      salt: 'b662f09bdf6751ac599219732609dceac430bc0629a7906eaa1451555f051ebc',\n      n: 8192,\n      r: 8,\n      p: 1\n    },\n    mac: 'cc89df7ef6c27d284526a65cabf8e5042cdf1ec1aa4ee36dcf65b965fa34843d'\n  }\n}, 'password')\n\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Account.prototype.encrypt")," returned keystoreV3 format object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"const account = new Account('0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef');\n\n// old\naccount.encrypt('password')\n/*\n{\n  algorithm: 'aes-128-ctr', \n  N: 8192, \n  r: 8, \n  p: 1, \n  dkLen: 32, \n  salt: '0xb662f09bdf6751ac599219732609dceac430bc0629a7906eaa1451555f051ebc', \n  iv: '0x85b5e092c1c32129e3d27df8c581514d',\n  cipher: '0xa8ec41d2440311ce897bacb6f7942f3235113fa17c4ae6732e032336038a8f73',\n  mac: '0xcc89df7ef6c27d284526a65cabf8e5042cdf1ec1aa4ee36dcf65b965fa34843d'\n}\n*/\n\n// new\naccount.encrypt('password')\n/*\n{\n  version: 3,\n  id: '0bb47ee0-aac3-a006-2717-03877afa15f0',\n  address: '0x1cad0b19bb29d4674531d6f115237e16afce377c',\n  crypto: {\n    ciphertext: 'a8ec41d2440311ce897bacb6f7942f3235113fa17c4ae6732e032336038a8f73',\n    cipherparams: { iv: '85b5e092c1c32129e3d27df8c581514d' },\n    cipher: 'aes-128-ctr',\n    kdf: 'scrypt',\n    kdfparams: {\n      dklen: 32,\n      salt: 'b662f09bdf6751ac599219732609dceac430bc0629a7906eaa1451555f051ebc',\n      n: 8192,\n      r: 8,\n      p: 1\n    },\n    mac: 'cc89df7ef6c27d284526a65cabf8e5042cdf1ec1aa4ee36dcf65b965fa34843d'\n  }\n}\n*/\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"epochNumber accept ",Object(r.b)("inlineCode",{parentName:"li"},"earliest"),", ",Object(r.b)("inlineCode",{parentName:"li"},"latest_checkpoint"),", ",Object(r.b)("inlineCode",{parentName:"li"},"latest_confirmed")," label")),Object(r.b)("h2",{id:"v0120"},"v0.12.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add ",Object(r.b)("inlineCode",{parentName:"li"},"getAdmin"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"await cfx.getAdmin('0x89996a8aefb2228593aae723d47f9517eef1341d')\n// \"0x1be45681ac6c53d5a40475f7526bac1fe7590fb8\"\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"sendTransaction accept privateKey as ",Object(r.b)("inlineCode",{parentName:"li"},"from"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cfx.sendTransaction({\n  from: PRIVATE_KEY, // accept Account instance or privateKey\n  to: ADDRESS, // accept Account instance or address\n  ...,\n})\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"create Account accept address")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"new Account(PRIVATE_KEY); // {privateKey:'0x...', publicKey: '0x...', address: '0x...'}\nnew Account(PUBLIC_KEY); // {publicKey: '0x...', address: '0x...'}\nnew Account(ADDRESS); // {address: '0x...'}\n")),Object(r.b)("h2",{id:"v0110"},"v0.11.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"defaultGasPrice, only use for sendTransaction")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultGasPrice: 100,\n})\n\n// old\ncfx.call({\n  address: '0x...',\n  data: '0x...',\n}); // => cfx_call{defaultGasPrice:'0x64',address:'0x...',data:'0x...'}\n\n\n// new\ncfx.call({\n  address: '0x...',\n  data: '0x...',\n}); // => cfx_call{address:'0x...',data:'0x...'}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"remove defaultEpoch, defaultChainId, defaultGas, defaultStorageLimit")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\ncfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultEpoch: 'latest_state',\n  defaultChainId: 1,\n  defaultGasPrice: 100,\n  defaultGas: 10,\n  defaultStorageLimit: 1,\n})\n\n// new\ncfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultGasPrice: 100,\n})\n\n// user could `epochNumber` and `chainId` manual on each method.\n")),Object(r.b)("h2",{id:"v0103"},"v0.10.3"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"fix broken sourcemap")),Object(r.b)("h2",{id:"v0102"},"v0.10.2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"fix: include crypto into browserify build")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nConfluxJSSDK.util.sign.randomPrivateKey() // TypeError randomBytes is not a function\n\n")),Object(r.b)("h2",{id:"v0101"},"v0.10.1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add format.bytes")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"format.bytes('abcd'); // <Buffer 61 62 63 64>\nformat.bytes([0, 1, 2, 3]); // <Buffer 00 01 02 03>\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add contract method & event type or signature indexes")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// solidity\nfunction override(bytes memory str) public\nfunction override(string memory str) public\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"contract.override('str'); // Error: can not determine override\n\ncontract['override(string)']('str'); // specify override method by type\ncontract['0x227ffd52']('str'); // specify override method by signature\n")),Object(r.b)("h2",{id:"v0100-alpha"},"v0.10.0-alpha"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add ",Object(r.b)("inlineCode",{parentName:"li"},"getStatus"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cfx.getStatus()\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"remove ",Object(r.b)("inlineCode",{parentName:"li"},"getRiskCoefficient")," and replace with ",Object(r.b)("inlineCode",{parentName:"li"},"getConfirmationRiskByHash"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\ncfx.getRiskCoefficient(epochNumber)\n\n// new\ncfx.getConfirmationRiskByHash(blockHash)\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"remove ",Object(r.b)("inlineCode",{parentName:"p"},"getAccount")," cause it's internal RPC.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"use ",Object(r.b)("inlineCode",{parentName:"p"},"require")," replace ",Object(r.b)("inlineCode",{parentName:"p"},"import")," to gen code."))),Object(r.b)("h2",{id:"v092"},"v0.9.2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add defaultStorageLimit and defaultChainId for Conflux")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nconst cfx = new Conflux({\n  url: 'http://localhost:8000',\n  defaultGasPrice: 100,\n  defaultGas: 100000,\n})\n\n// new\nconst cfx = new Conflux({\n  url: 'http://localhost:8000',\n  defaultGasPrice: 100,\n  defaultGas: 100000,\n  defaultStorageLimit: 4096,\n  defaultChainId: 0,\n})\n")),Object(r.b)("h2",{id:"v091"},"v0.9.1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"abi implicitly converting string to number")),Object(r.b)("p",null,"solidity method: ",Object(r.b)("inlineCode",{parentName:"p"},"function add(uint,uint) public returns (uint);")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nawait contract.add(1, '2'); // error! can not accept string \n\n// new version\nawait contract.add(1, '2'); // good, converting string to number\n")),Object(r.b)("h2",{id:"v090-beta"},"v0.9.0-beta"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"format nonce as JSBI.BigInt")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"nonce = await cfx.getNextNonce(...)\n\n// old\n100000\n\n// new\nJSBI.BigInt(100000)\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"format transaction fields")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'tx = await cfx.getTransactionByHash(txHash)\n// old\n{\n  storageLimit: "0x64",\n  chainId: "0x0",\n  epochHeight: "0x400",\n  ...\n}\n\n// new\n{\n  storageLimit: JSBI.BigInt(100), // JSBI\n  chainId: 0,\n  epochHeight: 1024,\n  ...\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"unit return string")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nunit.fromCFXToGDrip(123) => JSBI.BigInt(123000000000)\nunit.fromCFXToGDrip('0.1234567891') => Error('Cannot convert JSBI.BigInt')\n\n// new\nunit.fromCFXToGDrip(123) => \"123000000000\"\nunit.fromCFXToGDrip('0.1234567891') => \"123456789.1\"\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'contract fields "code" rename to "bytecode"')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\ncfx.Contract({code, abi, address})\n\n// new\ncfx.Contract({bytecode, abi, address})\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"abi decodeData and decodeLog return object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"result = contract.abi.decodeData('0x....')\n\n// old\n[\"Tom\", JSBI.BigInt(18)]\n\n// new\n{\n  name: 'func'\n  fullName: 'func(string name, uint age)',\n  type: 'func(string,uint)',\n  signature: '0x812600df',\n  array: [\"Tom\", JSBI.BigInt(18)],\n  object: {\n    name: \"Tom\",\n    age: JSBI.BigInt(18),\n  }\n}\n")))}d.isMDXComponent=!0},210:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return j}));var a=t(0),c=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var i=c.a.createContext({}),d=function(e){var n=c.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},u=function(e){var n=d(e.components);return c.a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},s=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=d(t),s=a,j=u["".concat(l,".").concat(s)]||u[s]||p[s]||r;return t?c.a.createElement(j,b(b({ref:n},i),{},{components:t})):c.a.createElement(j,b({ref:n},i))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=s;var b={};for(var o in n)hasOwnProperty.call(n,o)&&(b[o]=n[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var i=2;i<r;i++)l[i]=t[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);