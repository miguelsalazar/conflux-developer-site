(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return i}));var r=n(1),a=n(9),o=(n(0),n(192)),c={},b={id:"conflux-dex-sdk/boomflow-frontend/README",title:"README",description:"## Conflux BoomFlow Frontend SDK\r",source:"@site/docs/conflux-dex-sdk/boomflow-frontend/README.md",permalink:"/docs/conflux-dex-sdk/boomflow-frontend/README",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-dex-sdk/boomflow-frontend/README.md",lastUpdatedBy:"ConfluxBot",lastUpdatedAt:1586243264},p=[{value:"Conflux BoomFlow Frontend SDK",id:"conflux-boomflow-frontend-sdk",children:[{value:"Contract Functions",id:"contract-functions",children:[]},{value:"DEX Functions",id:"dex-functions",children:[]},{value:"Token Addresses",id:"token-addresses",children:[]},{value:"ABI Interfaces",id:"abi-interfaces",children:[]},{value:"Examples",id:"examples",children:[]}]}],l={rightToc:p};function i(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"conflux-boomflow-frontend-sdk"},"Conflux BoomFlow Frontend SDK"),Object(o.b)("hr",null),Object(o.b)("p",null,"Conflux BoomFlow is the Decentralized Exchange solution for Conflux Chain"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Scenarios"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Scripts"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Deposit")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@examples/deposit")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Deposit ERC777 to CRC-L token")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("strong",{parentName:"td"},"Signature")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"@examples/sign")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Sign and issue DEX request, such as placing/cancelling orders and withdraw")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Note: ",Object(o.b)("strong",{parentName:"p"},"Force Withdraw")," should only apply in emergency situations. For regular withdraw, please submit withdraw requests to DEX")),Object(o.b)("hr",null),Object(o.b)("h3",{id:"contract-functions"},"Contract Functions"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async function getTokenAddress(token) -> BigNumber")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Returns the ERC777 contract address corresponding to the CRCL token\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async function balanceOf(token, account) -> BigNumber")," "),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Returns the balance of the account in either ERC777 or CRCL token\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async function deferTime(token) -> BigNumber")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Returns the force withdraw deferring time of the CRCL token\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async function getOrderInfo(token) -> BigNumber")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Returns the order info including order status, hash and filled amount\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async function getRequestHash(token) -> BigNumber")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Returns the request hash\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async function getWithdrawHash(token) -> BigNumber")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Returns the withdraw hash\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async function deposit(cfx, sender, token, recipient, value, nonce)")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Deposits from sender's ERC777 address to recipient's CRCL address with the value units of token.\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async function requestForceWithdraw(cfx, sender, token, nonce)")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Requests for future force withdraw in the CRCL token.\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async function forceWithdraw(cfx, sender, token, recipient, nonce)")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Forcely Withdraws all the balance from sender's CRCL address to recipient's ERC777 address.\n"))),Object(o.b)("h3",{id:"dex-functions"},"DEX Functions"),Object(o.b)("p",null,"OrderService is the object that interat with DEX REST APIs."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"OPCODE")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"OPCODE = {\n    PlaceOrder: 0,\n    Cancel: 1,\n    Withdraw: 2,\n}\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async init(opts)")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Initalize OrderService object\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async getLocalBoomflow()")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Return current Boomflow address\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async setLocalBoomflow(boomflowAddr)")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Set the current Boomflow address\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async getAssetAddress(name)")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Return asset address of a given asset name\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async getSystemTime()")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Return the UNIX time in ms.\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async getOrder(orderId)")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Return the order content corrsponding to the order ID.\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async construct(order, baseAssetAddress, quoteAssetAddress, nonce, op)")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Construct the type data for signature.\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async submit(order, timestamp, signature, clientOrderId=null)")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Place order to DEX.\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async cancel(orderId, timestamp, signature)")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Cancel order to DEX.\n")),Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("inlineCode",{parentName:"p"},"async withdraw(request, timestamp, signature)")),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Withdraw request to DEX.\n"))),Object(o.b)("h3",{id:"token-addresses"},"Token Addresses"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Note: Contract Addresses are no longer exported via NPM packages")),Object(o.b)("h3",{id:"abi-interfaces"},"ABI Interfaces"),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"crclABI"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"CRCL ABI interface\n")),Object(o.b)("p",{parentName:"blockquote"},"erc777ABI"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"ERC777 ABI interface\n")),Object(o.b)("p",{parentName:"blockquote"},"boomflowABI"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"Boomflow ABI interface\n"))),Object(o.b)("h3",{id:"examples"},"Examples"),Object(o.b)("p",null,"Please see ",Object(o.b)("inlineCode",{parentName:"p"},"example")))}i.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),i=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},d=function(e){var t=i(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=i(n),s=r,O=d["".concat(c,".").concat(s)]||d[s]||u[s]||o;return n?a.a.createElement(O,b({ref:t},l,{components:n})):a.a.createElement(O,b({ref:t},l))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var b={};for(var p in t)hasOwnProperty.call(t,p)&&(b[p]=t[p]);b.originalType=e,b.mdxType="string"==typeof e?e:r,c[1]=b;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);