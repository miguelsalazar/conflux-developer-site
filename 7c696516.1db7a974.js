(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{170:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return d}));var a=t(2),c=t(9),r=(t(0),t(199)),l={},b={id:"js-conflux-sdk/CHANGE_LOG",title:"CHANGE_LOG",description:"change log",source:"@site/docs/js-conflux-sdk/CHANGE_LOG.md",permalink:"/docs/js-conflux-sdk/CHANGE_LOG",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/CHANGE_LOG.md",lastUpdatedAt:1594710016},i=[{value:"v0.13.3",id:"v0133",children:[]},{value:"v0.13.2",id:"v0132",children:[]},{value:"v0.13.1",id:"v0131",children:[]},{value:"v0.13.0",id:"v0130",children:[]},{value:"v0.12.0",id:"v0120",children:[]},{value:"v0.11.0",id:"v0110",children:[]},{value:"v0.10.3",id:"v0103",children:[]},{value:"v0.10.2",id:"v0102",children:[]},{value:"v0.10.1",id:"v0101",children:[]},{value:"v0.10.0-alpha",id:"v0100-alpha",children:[]},{value:"v0.9.2",id:"v092",children:[]},{value:"v0.9.1",id:"v091",children:[]},{value:"v0.9.0-beta",id:"v090-beta",children:[]}],o={rightToc:i};function d(e){var n=e.components,t=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"change-log"},"change log"),Object(r.b)("h2",{id:"v0133"},"v0.13.3"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Account.encrypt returned address drop '0x' prefix")),Object(r.b)("h2",{id:"v0132"},"v0.13.2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"use scrypt-js")),Object(r.b)("h2",{id:"v0131"},"v0.13.1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"RPC returned all number as hex")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"fix ",Object(r.b)("inlineCode",{parentName:"p"},"sendTransaction"),", ",Object(r.b)("inlineCode",{parentName:"p"},"call"),", ",Object(r.b)("inlineCode",{parentName:"p"},"estimateGasAndCollateral")," shallow copy ",Object(r.b)("inlineCode",{parentName:"p"},"options")))),Object(r.b)("h2",{id:"v0130"},"v0.13.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Account.decrypt")," required keystoreV3 object as input, and put ",Object(r.b)("inlineCode",{parentName:"li"},"password")," as second parameter")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nAccount.decrypt('password', {salt:..., iv:..., cipher:..., mac:...})\n\n// new\nAccount.decrypt({\n  version: 3,\n  id: '0bb47ee0-aac3-a006-2717-03877afa15f0',\n  address: '0x1cad0b19bb29d4674531d6f115237e16afce377c',\n  crypto: {\n    ciphertext: 'a8ec41d2440311ce897bacb6f7942f3235113fa17c4ae6732e032336038a8f73',\n    cipherparams: { iv: '85b5e092c1c32129e3d27df8c581514d' },\n    cipher: 'aes-128-ctr',\n    kdf: 'scrypt',\n    kdfparams: {\n      dklen: 32,\n      salt: 'b662f09bdf6751ac599219732609dceac430bc0629a7906eaa1451555f051ebc',\n      n: 8192,\n      r: 8,\n      p: 1\n    },\n    mac: 'cc89df7ef6c27d284526a65cabf8e5042cdf1ec1aa4ee36dcf65b965fa34843d'\n  }\n}, 'password')\n\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Account.prototype.encrypt")," returned keystoreV3 format object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"const account = new Account('0x0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcdef');\n\n// old\naccount.encrypt('password')\n/*\n{\n  algorithm: 'aes-128-ctr', \n  N: 8192, \n  r: 8, \n  p: 1, \n  dkLen: 32, \n  salt: '0xb662f09bdf6751ac599219732609dceac430bc0629a7906eaa1451555f051ebc', \n  iv: '0x85b5e092c1c32129e3d27df8c581514d',\n  cipher: '0xa8ec41d2440311ce897bacb6f7942f3235113fa17c4ae6732e032336038a8f73',\n  mac: '0xcc89df7ef6c27d284526a65cabf8e5042cdf1ec1aa4ee36dcf65b965fa34843d'\n}\n*/\n\n// new\naccount.encrypt('password')\n/*\n{\n  version: 3,\n  id: '0bb47ee0-aac3-a006-2717-03877afa15f0',\n  address: '0x1cad0b19bb29d4674531d6f115237e16afce377c',\n  crypto: {\n    ciphertext: 'a8ec41d2440311ce897bacb6f7942f3235113fa17c4ae6732e032336038a8f73',\n    cipherparams: { iv: '85b5e092c1c32129e3d27df8c581514d' },\n    cipher: 'aes-128-ctr',\n    kdf: 'scrypt',\n    kdfparams: {\n      dklen: 32,\n      salt: 'b662f09bdf6751ac599219732609dceac430bc0629a7906eaa1451555f051ebc',\n      n: 8192,\n      r: 8,\n      p: 1\n    },\n    mac: 'cc89df7ef6c27d284526a65cabf8e5042cdf1ec1aa4ee36dcf65b965fa34843d'\n  }\n}\n*/\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"epochNumber accept ",Object(r.b)("inlineCode",{parentName:"li"},"earliest"),", ",Object(r.b)("inlineCode",{parentName:"li"},"latest_checkpoint"),", ",Object(r.b)("inlineCode",{parentName:"li"},"latest_confirmed")," label")),Object(r.b)("h2",{id:"v0120"},"v0.12.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add ",Object(r.b)("inlineCode",{parentName:"li"},"getAdmin"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"await cfx.getAdmin('0x89996a8aefb2228593aae723d47f9517eef1341d')\n// \"0x1be45681ac6c53d5a40475f7526bac1fe7590fb8\"\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"sendTransaction accept privateKey as ",Object(r.b)("inlineCode",{parentName:"li"},"from"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cfx.sendTransaction({\n  from: PRIVATE_KEY, // accept Account instance or privateKey\n  to: ADDRESS, // accept Account instance or address\n  ...,\n})\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"create Account accept address")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"new Account(PRIVATE_KEY); // {privateKey:'0x...', publicKey: '0x...', address: '0x...'}\nnew Account(PUBLIC_KEY); // {publicKey: '0x...', address: '0x...'}\nnew Account(ADDRESS); // {address: '0x...'}\n")),Object(r.b)("h2",{id:"v0110"},"v0.11.0"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"defaultGasPrice, only use for sendTransaction")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultGasPrice: 100,\n})\n\n// old\ncfx.call({\n  address: '0x...',\n  data: '0x...',\n}); // => cfx_call{defaultGasPrice:'0x64',address:'0x...',data:'0x...'}\n\n\n// new\ncfx.call({\n  address: '0x...',\n  data: '0x...',\n}); // => cfx_call{address:'0x...',data:'0x...'}\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"remove defaultEpoch, defaultChainId, defaultGas, defaultStorageLimit")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\ncfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultEpoch: 'latest_state',\n  defaultChainId: 1,\n  defaultGasPrice: 100,\n  defaultGas: 10,\n  defaultStorageLimit: 1,\n})\n\n// new\ncfx = new Conflux({\n  url: 'http://testnet-jsonrpc.conflux-chain.org:12537',\n  defaultGasPrice: 100,\n})\n\n// user could `epochNumber` and `chainId` manual on each method.\n")),Object(r.b)("h2",{id:"v0103"},"v0.10.3"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"fix broken sourcemap")),Object(r.b)("h2",{id:"v0102"},"v0.10.2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"fix: include crypto into browserify build")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nConfluxJSSDK.util.sign.randomPrivateKey() // TypeError randomBytes is not a function\n\n")),Object(r.b)("h2",{id:"v0101"},"v0.10.1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add format.bytes")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"format.bytes('abcd'); // <Buffer 61 62 63 64>\nformat.bytes([0, 1, 2, 3]); // <Buffer 00 01 02 03>\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add contract method & event type or signature indexes")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// solidity\nfunction override(bytes memory str) public\nfunction override(string memory str) public\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"contract.override('str'); // Error: can not determine override\n\ncontract['override(string)']('str'); // specify override method by type\ncontract['0x227ffd52']('str'); // specify override method by signature\n")),Object(r.b)("h2",{id:"v0100-alpha"},"v0.10.0-alpha"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add ",Object(r.b)("inlineCode",{parentName:"li"},"getStatus"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cfx.getStatus()\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"remove ",Object(r.b)("inlineCode",{parentName:"li"},"getRiskCoefficient")," and replace with ",Object(r.b)("inlineCode",{parentName:"li"},"getConfirmationRiskByHash"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\ncfx.getRiskCoefficient(epochNumber)\n\n// new\ncfx.getConfirmationRiskByHash(blockHash)\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"remove ",Object(r.b)("inlineCode",{parentName:"p"},"getAccount")," cause it's internal RPC.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"use ",Object(r.b)("inlineCode",{parentName:"p"},"require")," replace ",Object(r.b)("inlineCode",{parentName:"p"},"import")," to gen code."))),Object(r.b)("h2",{id:"v092"},"v0.9.2"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"add defaultStorageLimit and defaultChainId for Conflux")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nconst cfx = new Conflux({\n  url: 'http://localhost:8000',\n  defaultGasPrice: 100,\n  defaultGas: 100000,\n})\n\n// new\nconst cfx = new Conflux({\n  url: 'http://localhost:8000',\n  defaultGasPrice: 100,\n  defaultGas: 100000,\n  defaultStorageLimit: 4096,\n  defaultChainId: 0,\n})\n")),Object(r.b)("h2",{id:"v091"},"v0.9.1"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"abi implicitly converting string to number")),Object(r.b)("p",null,"solidity method: ",Object(r.b)("inlineCode",{parentName:"p"},"function add(uint,uint) public returns (uint);")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nawait contract.add(1, '2'); // error! can not accept string \n\n// new version\nawait contract.add(1, '2'); // good, converting string to number\n")),Object(r.b)("h2",{id:"v090-beta"},"v0.9.0-beta"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"format nonce as JSBI.BigInt")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"nonce = await cfx.getNextNonce(...)\n\n// old\n100000\n\n// new\nJSBI.BigInt(100000)\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"format transaction fields")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'tx = await cfx.getTransactionByHash(txHash)\n// old\n{\n  storageLimit: "0x64",\n  chainId: "0x0",\n  epochHeight: "0x400",\n  ...\n}\n\n// new\n{\n  storageLimit: JSBI.BigInt(100), // JSBI\n  chainId: 0,\n  epochHeight: 1024,\n  ...\n}\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"unit return string")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\nunit.fromCFXToGDrip(123) => JSBI.BigInt(123000000000)\nunit.fromCFXToGDrip('0.1234567891') => Error('Cannot convert JSBI.BigInt')\n\n// new\nunit.fromCFXToGDrip(123) => \"123000000000\"\nunit.fromCFXToGDrip('0.1234567891') => \"123456789.1\"\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},'contract fields "code" rename to "bytecode"')),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"// old\ncfx.Contract({code, abi, address})\n\n// new\ncfx.Contract({bytecode, abi, address})\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"abi decodeData and decodeLog return object")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"result = contract.abi.decodeData('0x....')\n\n// old\n[\"Tom\", JSBI.BigInt(18)]\n\n// new\n{\n  name: 'func'\n  fullName: 'func(string name, uint age)',\n  type: 'func(string,uint)',\n  signature: '0x812600df',\n  array: [\"Tom\", JSBI.BigInt(18)],\n  object: {\n    name: \"Tom\",\n    age: JSBI.BigInt(18),\n  }\n}\n")))}d.isMDXComponent=!0},199:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return s}));var a=t(0),c=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,c=function(e,n){if(null==e)return{};var t,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(c[t]=e[t]);return c}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var o=c.a.createContext({}),d=function(e){var n=c.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},u=function(e){var n=d(e.components);return c.a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return c.a.createElement(c.a.Fragment,{},n)}},f=c.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=d(t),f=a,s=u["".concat(l,".").concat(f)]||u[f]||p[f]||r;return t?c.a.createElement(s,b(b({ref:n},o),{},{components:t})):c.a.createElement(s,b({ref:n},o))}));function s(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=f;var b={};for(var i in n)hasOwnProperty.call(n,i)&&(b[i]=n[i]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var o=2;o<r;o++)l[o]=t[o];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);