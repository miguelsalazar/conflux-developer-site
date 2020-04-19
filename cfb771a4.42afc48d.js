(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{192:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"default",(function(){return i}));var r=t(1),o=t(9),a=(t(0),t(203)),c={id:"provider_api",title:"Portal Provider API",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/API_Reference/Conflux_Provider.md"},s={id:"conflux-portal/docs/en/portal/API_Reference/provider_api",title:"Portal Provider API",description:"Conflux Portal injects a global API into websites visited by its users at",source:"@site/docs/conflux-portal/docs/en/portal/API_Reference/Conflux_Provider.md",permalink:"/docs/conflux-portal/docs/en/portal/API_Reference/provider_api",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/API_Reference/Conflux_Provider.md",lastUpdatedBy:"yqrashawn",lastUpdatedAt:1585033639,sidebar:"docs",previous:{title:"Sending Transactions",permalink:"/docs/conflux-portal/docs/en/portal/Main_Concepts/sending_transactions"},next:{title:"Signing Data with Conflux Portal",permalink:"/docs/conflux-portal/docs/en/portal/API_Reference/signing_data_with_portal"}},l={};function i(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Conflux Portal injects a global API into websites visited by its users at\n","window.conflux",". This API allows websites to request user login, load data from\nblockchains the user has a connection to, and suggest that the user sign\nmessages and transactions. You can use this API to detect the user of an Conflux\nbrowser. "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"if (typeof window.conflux !== 'undefined') {\n\n  // Conflux user detected. You can now use the provider.\n  const provider = window['conflux']\n}\n")),Object(a.b)("p",null,"The provider API itself is very simple, and wraps ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/conflux-portal/docs/en/portal/API_Reference/json_rpc_api"}),"Conflux\nJSON-RPC")," formatted messages, which is why developers usually\nuse a convenience library for interacting with the provider, like\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/package/js-conflux-sdk"}),"js-conflux-sdk"),",\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/liuis/conffle#readme"}),"conffle"),", or others. From those tools,\nyou can generally find sufficient documentation to interact with the provider,\nwithout reading this lower-level API. "),Object(a.b)("p",null,"However, for developers of convenience libraries, and for developers who would\nlike to use features that are not yet supported by their favorite libraries,\nknowledge of the provider API is essential. "),Object(a.b)("h3",{id:"user-content-upcoming-provider-changes"},"Upcoming Provider Changes"),Object(a.b)("p",null,"In early 2020, we will be introducing some changes changes to this API, and\nbeginning to deprecate some old synchronous methods. You can ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://medium.com/metamask/breaking-changes-to-the-metamask-inpage-provider-b4dde069dd0a"}),"read more about\nthat transition\nhere"),". "),Object(a.b)("p",null,"We will begin supporting the new API in early 2020. AWe will support the old and\nnew APIs for at least 6 weeks, after which some of the older methods will be\ndeprecated. These changes will make the Conflux Portal inpage provider fully\ncompatible with ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/conflux/EIPs/blob/master/EIPS/eip-1193.md"}),"EIP\n1193")," and ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/conflux/EIPs/blob/master/EIPS/eip-1102.md"}),"EIP\n1102"),". "),Object(a.b)("p",null,"You can continue reading to learn about the current API. Otherwise, ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#new-api"}),"click here\nto learn about the upcoming API changes"),". "),Object(a.b)("h3",{id:"user-content-a-note-on-language"},"A Note on Language"),Object(a.b)("p",null,"In our usage, if a feature is ",Object(a.b)("em",{parentName:"p"},"deprecated"),", we strongly discourage its use, and\nmay remove it in the future. Features that will be ",Object(a.b)("em",{parentName:"p"},"removed")," or ",Object(a.b)("em",{parentName:"p"},"replaced")," on a\nparticular date are clearly marked as such. We do not anticipate any need for\nfurther breaking changes after Q1 2020. "),Object(a.b)("h1",{id:"user-content-current-api"},"Current API"),Object(a.b)("h2",{id:"user-content-properties"},"Properties"),Object(a.b)("p",null,"These properties can be used to check the current state of the connected user,\nwhich can be important things to verify before sending a transaction. "),Object(a.b)("h3",{id:"user-content-confluxnetworkversion"},"conflux.networkVersion"),Object(a.b)("p",null,"Returns a numeric string representing the current blockchain's network ID. A few\nexample values: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"'1': Conflux Main Network\n'2': Conflux Test network\n")),Object(a.b)("h3",{id:"user-content-confluxselectedaddress"},"conflux.selectedAddress"),Object(a.b)("p",null,"Returns a hex-prefixed string representing the current user's selected address,\nex: ",'"0xfdea65c8e26263f6d9a1b5de9555d2931a33b825"',". "),Object(a.b)("h3",{id:"user-content-confluxisconfluxportal"},"conflux.isConfluxPortal"),Object(a.b)("p",null,"Returns ","true"," or ","false",", representing whether the user has Conflux Portal\ninstalled. "),Object(a.b)("h2",{id:"user-content-methods"},"Methods"),Object(a.b)("h3",{id:"user-content-confluxenable"},"conflux.enable()"),Object(a.b)("p",null,"Requests the user provides an conflux address to be identified by. Returns a\npromise of an array of hex-prefixed conflux address strings. "),Object(a.b)("h4",{id:"user-content-example-es6"},"Example (ES6)"),Object(a.b)("p",null,"Using an ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"}),"async\nfunction"),". "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"try {\n  const accounts = await conflux.enable()\n  // You now have an array of accounts!\n  // Currently only ever one:\n  // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']\n\n} catch (error) {\n  // Handle error. Likely the user rejected the login\n  console.error(error)\n}\n")),Object(a.b)("h4",{id:"user-content-example-es5"},"Example (ES5)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"conflux.enable()\n.then(function (accounts) {\n  // You now have an array of accounts!\n  // Currently only ever one:\n  // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']\n})\n.catch(function (error) {\n  // Handle error. Likely the user rejected the login\n  console.error(error)\n})\n")),Object(a.b)("h3",{id:"user-content-confluxsendoptions-callback-to-be-replaced"},"conflux.send(options, callback) (To Be Replaced)"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"This will be replaced with ","conflux.send(method: string, params: Array<any>)","\non ",Object(a.b)("strong",{parentName:"em"},"January 13, 2020"),".")," ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/Conflux-Chain/conflux-portal-docs/blob/new-provider/03_API_Reference/01_Conflux_Provider.md#confluxsendmethod-string-params-array"}),"Click\nhere"),"\nfor more information.")," "),Object(a.b)("p",null,"See ","conflux.sendAsync",", directly below."),Object(a.b)("h3",{id:"user-content-confluxsendasyncoptions-callback"},"conflux.sendAsync(options, callback)"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"To be superceded by the promise-returning send() method in ",Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1193.md"}),"EIP\n1193"),".")," "),Object(a.b)("p",null,"Sends a message to the web3 browser. Message format maps to the format of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/json-rpc/"}),"the\nConflux JSON-RPC\nAPI"),". "),Object(a.b)("p",null,"Here's an example of everyone's favorite method, ","cfx_sendTransaction",", which is\nboth how Ether is sent, and how smart contract methods are called: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'params: [{\n  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",\n  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",\n  "gas": "0x76c0", // 30400\n  "gasPrice": "0x9184e72a000", // 10000000000000\n  "value": "0x9184e72a", // 2441406250\n  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"\n}]\n\nconflux.sendAsync({\n  method: \'cfx_sendTransaction\',\n  params: params,\n  from: accounts[0], // Provide the user\'s account to use.\n}, function (err, result) {\n  // A typical node-style, error-first callback.\n  // The result varies by method, per the JSON RPC API.\n  // For example, this method will return a transaction hash on success.\n})\n')),Object(a.b)("h3",{id:"user-content-confluxautorefreshonnetworkchange-to-be-removed"},"conflux.autoRefreshOnNetworkChange (To Be Removed)"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"This will be removed on January 13, 2020. At this time, Conflux Portal will also\nstop reloading the page on network changes.")," ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://medium.com/metamask/no-longer-reloading-pages-on-network-change-fbf041942b44"}),"Click\nhere"),"\nfor more details.")," "),Object(a.b)("p",null,"When the network is changed, Conflux Portal will reload any pages that have made\nrequests to the provider. This automatic reload behavior will be removed in a\nfuture release of Conflux Portal, but in the meantime it can be disabled with\nthis flag. "),Object(a.b)("p",null,"To disable auto-refresh on a network change you can do:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"conflux.autoRefreshOnNetworkChange = false;\n")),Object(a.b)("p",null,"This can be toggled on or off at any time."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," Setting this flag to ","true"," results in the default behavior, which is\nsubject to change. If your site relies upon Conflux Portal reloading it upon\nnetwork change, you will need to trigger the reload yourself in a\n","networkChanged"," event handler to ensure it continues to work with future\nreleases.  "),Object(a.b)("h3",{id:"user-content-confluxoneventname-callback"},"conflux.on(eventName, callback)"),Object(a.b)("p",null,"The provider supports listening for some events:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"accountsChanged",", returns updated account array."),Object(a.b)("li",{parentName:"ul"},"networkChanged",", returns network ID string.")),Object(a.b)("h4",{id:"user-content-example"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"conflux.on('accountsChanged', function (accounts) {\n  // Time to reload your interface with accounts[0]!\n})\n")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Note:")," At the moment, the ","networkChanged"," event is only useful if you\ndisable auto-refresh on network change by setting\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"#conflux.autorefreshonnetworkchange"}),"conflux.autoRefreshOnNetworkChange")," to\n","false",". Otherwise, Conflux Portal will default to auto-reloading pages upon\nnetwork change if they have made requests to the provider. ",Object(a.b)("em",{parentName:"p"},"Conflux Portal will\nstop reloading pages on network change on January 13, 2020, and this setting\nwill be removed.")," ",Object(a.b)("em",{parentName:"p"},Object(a.b)("a",Object(r.a)({parentName:"em"},{href:"https://medium.com/metamask/no-longer-reloading-pages-on-network-change-fbf041942b44"}),"Click\nhere"),"\nfor more details.")," "),Object(a.b)("h1",{id:"user-content-new-api"},"New API"),Object(a.b)("p",null,"This API will become available during the week of ",Object(a.b)("strong",{parentName:"p"},"November 25, 2019"),". It will\nbe the only API supported starting ",Object(a.b)("strong",{parentName:"p"},"January 13, 2020.")," If you want examples of\nhow to setup your dapp using the new API, you can check out ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://gist.github.com/rekmarks/d318677c8fc89e5f7a2f526e00a0768a"}),"this\ngist"),". "),Object(a.b)("h2",{id:"user-content-methods-1"},"Methods"),Object(a.b)("h3",{id:"user-content-confluxsendcfx_requestaccounts"},"conflux.send('cfx_requestAccounts')"),Object(a.b)("h4",{id:"user-content-confluxenable-deprecated"},"conflux.enable() (Deprecated)"),Object(a.b)("p",null,"Requests that the user provides an conflux address to be identified by. Returns\na promise of an array of hex-prefixed conflux address strings. See ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/conflux/EIPs/blob/master/EIPS/eip-1102.md"}),"EIP\n1102")," for more\ndetails. "),Object(a.b)("h4",{id:"user-content-example-es6-1"},"Example (ES6)"),Object(a.b)("p",null,"Using an ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function"}),"async\nfunction"),". "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"try {\n  const accounts = await conflux.send('cfx_requestAccounts')\n  // You now have an array of accounts!\n  // Currently only ever one:\n  // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']\n\n} catch (error) {\n  if (error.code === 4001) { // EIP 1193 userRejectedRequest error\n    console.log('Please connect to Conflux Portal.')\n  } else {\n    console.error(error)\n  }\n}\n")),Object(a.b)("h4",{id:"user-content-example-es5-1"},"Example (ES5)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"conflux.send('cfx_requestAccounts')\n.then(function (accounts) {\n  // You now have an array of accounts!\n  // Currently only ever one:\n  // ['0xFDEa65C8e26263F6d9A1B5de9555D2931A33b825']\n})\n.catch(function (error) {\n  if (error.code === 4001) { // EIP 1193 userRejectedRequest error\n    console.log('Please connect to Conflux Portal.')\n  } else {\n    console.error(error)\n  }\n})\n")),Object(a.b)("h3",{id:"user-content-confluxsendmethod-string-params-arrayany"},"conflux.send(method: string, params: Array<any>)"),Object(a.b)("p",null,"The way to send requests to the dapp browser. ","method"," and ","params"," should\nfollow ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/conflux/wiki/wiki/JSON-RPC#json-rpc-methods"}),"the Conflux JSON-RPC\nAPI"),". "),Object(a.b)("p",null,"Returns a ","Promise"," that resolves to the result of the method. Not all methods\nrequire ","params",", e.g. ","conflux.send('cfx_accounts')",". "),Object(a.b)("p",null,"Here's an example of everyone's favorite method, ","cfx_sendTransaction",", which is\nboth how Ether is sent, and how smart contract methods are called: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'params: [{\n  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",\n  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",\n  "gas": "0x76c0", // 30400\n  "gasPrice": "0x9184e72a000", // 10000000000000\n  "value": "0x9184e72a", // 2441406250\n  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"\n}]\n\nconflux.send(\'cfx_sendTransaction\', params)\n.then(function (result) {\n  // The result varies by method, per the JSON RPC API.\n  // For example, this method will return a transaction hash on success.\n})\n.catch(function (error) {\n // Like a typical promise, returns an error on rejection.\n})\n')),Object(a.b)("h3",{id:"user-content-confluxoneventname-callback-1"},"conflux.on(eventName, callback)"),Object(a.b)("p",null,"The provider supports listening for all events specified in ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/conflux/EIPs/blob/master/EIPS/eip-1193.md#events"}),"EIP\n1193"),". "),Object(a.b)("p",null,"The following are especially important for managing the state of your dapp:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"accountsChanged",", returns an array of the currently available accounts."),Object(a.b)("li",{parentName:"ul"},"chainChanged",", returns the hex-formatted chain ID string of the currently\nused chain/network. "),Object(a.b)("li",{parentName:"ul"},"networkChanged",", ",Object(a.b)("em",{parentName:"li"},"(Discouraged)")," returns decimal-formatted network ID string\nof the currently used chain/network. ")),Object(a.b)("h4",{id:"user-content-example-1"},"Example"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"conflux.on('accountsChanged', function (accounts) {\n  // Time to reload your interface with accounts[0]!\n})\n\nconflux.on('chainChanged', function (chainId) {\n  // Time to make sure your any calls are directed to the correct chain!\n})\n")),Object(a.b)("h4",{id:"user-content-list-of-chain-and-network-ids"},"List of Chain and Network IDs"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"'1': Conflux Main Network\n'2': Conflux Test network\n")),Object(a.b)("h3",{id:"user-content-confluxsendasyncoptions-callback-deprecated"},"conflux.sendAsync(options, callback) (Deprecated)"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"We strongly discourage the use of this method, which may be removed in the\nfuture.")," "),Object(a.b)("p",null,"Sends a message to the dapp browser. Message format maps to the format of ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/json-rpc/"}),"the\nConflux JSON-RPC\nAPI"),". "),Object(a.b)("p",null,"Here's an example of everyone's favorite method, ","cfx_sendTransaction",", which is\nboth how Ether is sent, and how smart contract methods are called: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'params: [{\n  "from": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",\n  "to": "0xd46e8dd67c5d32be8058bb8eb970870f07244567",\n  "gas": "0x76c0", // 30400\n  "gasPrice": "0x9184e72a000", // 10000000000000\n  "value": "0x9184e72a", // 2441406250\n  "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"\n}]\n\nconflux.sendAsync({\n  method: \'cfx_sendTransaction\',\n  params: params,\n  from: accounts[0], // Provide the user\'s account to use.\n}, function (err, result) {\n  // A typical node-style, error-first callback.\n  // The result varies by method, per the JSON RPC API.\n  // For example, this method will return a transaction hash on success.\n})\n')),Object(a.b)("h2",{id:"user-content-properties-1"},"Properties"),Object(a.b)("p",null,"Useful for knowing whether ","window.conflux"," is Conflux Portal, but not much else."),Object(a.b)("h3",{id:"user-content-confluxisconflux-portal"},"conflux.isConflux Portal"),Object(a.b)("p",null,"true"," if the user has Conflux Portal installed, ","false"," otherwise."),Object(a.b)("h3",{id:"user-content-confluxnetworkversion-deprecated"},"conflux.networkVersion (Deprecated)"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"We strongly discourage the use of this property, which may be removed in the\nfuture.")," "),Object(a.b)("p",null,"Returns a numeric string representing the current blockchain's network ID. A few\nexample values: "),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"'1': Conflux Main Network\n'2': Conflux Test network\n")),Object(a.b)("h3",{id:"user-content-confluxselectedaddress-deprecated"},"conflux.selectedAddress (Deprecated)"),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"We strongly discourage the use of this property, which may be removed in the\nfuture.")," "),Object(a.b)("p",null,"Returns a hex-prefixed string representing the current user's selected address,\nex: ",'"0xfdea65c8e26263f6d9a1b5de9555d2931a33b825"',". "))}i.isMDXComponent=!0},203:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=o.a.createContext({}),u=function(e){var n=o.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s({},n,{},e)),t},b=function(e){var n=u(e.components);return o.a.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=u(t),p=r,h=b["".concat(c,".").concat(p)]||b[p]||d[p]||a;return t?o.a.createElement(h,s({ref:n},i,{components:t})):o.a.createElement(h,s({ref:n},i))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<a;i++)c[i]=t[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);