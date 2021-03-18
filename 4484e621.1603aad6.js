(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(9),s=(n(0),n(215)),c={},o={id:"js-conflux-sdk/docs/conflux_checksum_address",title:"conflux_checksum_address",description:"Conflux Base32Check Addresses",source:"@site/docs/js-conflux-sdk/docs/conflux_checksum_address.md",permalink:"/docs/js-conflux-sdk/docs/conflux_checksum_address",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/js-conflux-sdk/docs/conflux_checksum_address.md",lastUpdatedAt:1616036156},l=[{value:"Before CIP37",id:"before-cip37",children:[]},{value:"CIP37 Addresses",id:"cip37-addresses",children:[]},{value:"Conflux Fullnode RPC",id:"conflux-fullnode-rpc",children:[]},{value:"Contract",id:"contract",children:[]},{value:"js-conflux-sdk",id:"js-conflux-sdk",children:[]}],i={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"conflux-base32check-addresses"},"Conflux Base32Check Addresses"),Object(s.b)("p",null,"As a new public chain, Conflux realizes high performance as well as compatibility with Ethereum. Conflux adopts address format compatible with Ethereum addresses, and thus is compatible with Ethereum Virtual Machine (EVM).\nThe advantage of the compatibility between Conflux and Ethereum is obvious:  it reduces the cost and difficulty of cross-chain migration. But there are also some problems. Since the addresses on Conflux and Ethereum are similar, users may loss their assets when performing cross-chain transactions using ShuttleFlow if they transfer to a mistake address, which is a serious problem. To improve user experience and reduce address mistakes when users use cross-chain functions, Conflux introduces a new address format: base32Check in ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md"}),"CIP37"),"."),Object(s.b)("h3",{id:"before-cip37"},"Before CIP37"),Object(s.b)("p",null,"At first, Conflux adopts the address format similar with Ethereum, which is a hex40 address (hex code with a length of 40 bits). The difference is that Conflux differentiate the addresses with different starts: 0x1 for ordinary individual addresses, 0x8 for smart contracts and 0x0 for in-built contracts."),Object(s.b)("p",null,"Only hex40 addresses with these three starts are available on Conflux. Some Ethereum addresses (with a 0x1 start) can be used as Conflux addresses, while a Conflux address has a 1/16 chance of being used as an Ethereum address."),Object(s.b)("p",null,"Currently, there are three kinds of addresses:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Ordinary addresses: ",Object(s.b)("inlineCode",{parentName:"li"},"0x1"),"386b4185a223ef49592233b69291bbe5a80c527"),Object(s.b)("li",{parentName:"ul"},"Smart contract addresses: ",Object(s.b)("inlineCode",{parentName:"li"},"0x8"),"269f0add11b4915d78791470d091d25cff73ee5"),Object(s.b)("li",{parentName:"ul"},"In-built contract addresses: ",Object(s.b)("inlineCode",{parentName:"li"},"0x0"),"888000000000000000000000000000000000002")),Object(s.b)("p",null,"Because the addresses are not completely compatible on Conflux and Ethereum, users will loss assets when they use a wrong address. Ethereum has introduced a regulation with a checksum in ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/ethereum/EIPs/blob/master/EIPS/eip-55.md"}),"EIP55")," to change the characters meeting the requirement into the upper case in order to prevent transferring to wrong addresses. Conflux also introduces regulations to change checksums."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Non-chechsum address: 0x1386",Object(s.b)("inlineCode",{parentName:"li"},"b"),"4185",Object(s.b)("inlineCode",{parentName:"li"},"a"),"223",Object(s.b)("inlineCode",{parentName:"li"},"ef"),"49592233b69291bbe5a80",Object(s.b)("inlineCode",{parentName:"li"},"c"),"527"),Object(s.b)("li",{parentName:"ul"},"Chechsum address: 0x1386",Object(s.b)("inlineCode",{parentName:"li"},"B"),"4185",Object(s.b)("inlineCode",{parentName:"li"},"A"),"223",Object(s.b)("inlineCode",{parentName:"li"},"EF"),"49592233b69291bbe5a80",Object(s.b)("inlineCode",{parentName:"li"},"C"),"527")),Object(s.b)("h3",{id:"cip37-addresses"},"CIP37 Addresses"),Object(s.b)("p",null,"In order to solve the problems of mistakenly using wrong addresses, we introduces a brand new base32 checksum address format in ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/CIPs/blob/master/CIPs/cip-37.md"}),"CIP37"),". Besides checksum, the new addresses also include information such as network, type."),Object(s.b)("p",null,"Old address vs new address:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"hex40 address: ",Object(s.b)("inlineCode",{parentName:"li"},"0x1"),"386b4185a223ef49592233b69291bbe5a80c527"),Object(s.b)("li",{parentName:"ul"},"base32 address: cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91")),Object(s.b)("p",null,"The new addresses use customized base32 code address. Currently applied characters are: ",Object(s.b)("inlineCode",{parentName:"p"},"abcdefghjkmnprstuvwxyz0123456789")," (i, l, o, q removed)."),Object(s.b)("p",null,"In new format addresses, network types are included. Up to now there are three types: cfx\uff0ccfxtest\uff0cnet","[n]"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91"),Object(s.b)("li",{parentName:"ul"},"cfxtest:aak2rra2njvd77ezwjvx04kkds9fzagfe6d5r8e957"),Object(s.b)("li",{parentName:"ul"},"net1921:aak2rra2njvd77ezwjvx04kkds9fzagfe65k87kwdf")),Object(s.b)("p",null,"Meanwhile, new addresses also include address type information, currently four types (types are usually in upper case):"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"user: CFX:TYPE.USER:AAK2RRA2NJVD77EZWJVX04KKDS9FZAGFE6KU8SCZ91"),Object(s.b)("li",{parentName:"ul"},"contract: CFX:TYPE.CONTRACT:ACB2RRA2NJVD77EZWJVX04KKDS9FZAGFE640XW9UAE"),Object(s.b)("li",{parentName:"ul"},"builtin: CFX:TYPE.BUILTIN:AAEJUAAAAAAAAAAAAAAAAAAAAAAAAAAAAJRWUC9JNB"),Object(s.b)("li",{parentName:"ul"},"null: CFX:TYPE.NULL:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0SFBNJM2")),Object(s.b)("p",null,"The two address formats (hex40 and base32) are convertible to each other. They are the same if converted to byte arrays. However, when converting hex40 addresses (starting with 0x) into base32check addresses, the network ID information is also required."),Object(s.b)("h3",{id:"conflux-fullnode-rpc"},"Conflux Fullnode RPC"),Object(s.b)("p",null,"From v1.1.1, Conflux-rust will apply the new address format. If returns include address information, it will be in the new format."),Object(s.b)("p",null,"If you use hex40 addresses to call RPC, it will return with an error:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    "code": -32602,\n    "message": "Invalid params: Invalid base32 address: zero or multiple prefixes."\n}\n')),Object(s.b)("p",null,"If you use a wrong network type (eg. use a testnet address for the mainnet PRC), it will return with an error:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    "code": -32602,\n    "message": "Invalid parameters: address",\n    "data": "\\"network prefix unexpected: ours cfx, got cfxtest\\""\n}\n')),Object(s.b)("p",null,"When invoke conflux RPC related method, you can catch the error, the ",Object(s.b)("inlineCode",{parentName:"p"},"message")," and ",Object(s.b)("inlineCode",{parentName:"p"},"data")," will be helpful."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"try {\n    const balance = await cfx.getBalance('0xxxxxxxx');\n} catch(e) {\n    console.log(e.message);\n    console.log(e.data); // hex encoded data, can convert to string: Buffer.from(e.data, 'hex').toString()\n}\n")),Object(s.b)("p",null,"If you use base32 address to call 1.1.0 or below RPC server, it will return with an error:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'"error": {\n    "code": -32602,\n    "message": "Invalid params: 0x prefix is missing."\n}\n')),Object(s.b)("h3",{id:"contract"},"Contract"),Object(s.b)("p",null,"The new CIP-37 address will not affect interactions with smart contracts. Data constructed when calling smart contracts are still using hex40 addresses ultimately. The js-jdk will change the address format automatically. "),Object(s.b)("h3",{id:"js-conflux-sdk"},"js-conflux-sdk"),Object(s.b)("p",null,"From v1.5, js-sdk will start to support the new address format. networkId is needed when generating new addresses, so many functions increase an optional configuration ",Object(s.b)("inlineCode",{parentName:"p"},"networkId"),", 1029 as default. "),Object(s.b)("p",null,"'NOTE' NetworkId needs to be set correctly before using Conflux Objects. Currently, there are two ways to set this:"),Object(s.b)("p",null,"When initializing a Conflux object, specify through the networkId option,"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const conflux = new Conflux({\n    url: 'http://test.confluxrpc.org',\n    networkId: 1\n});\n")),Object(s.b)("p",null,"The other is to obtain from RPC by calling conflux.updateNetworkId after initialization."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const conflux = new Conflux({\n    url: 'http://test.confluxrpc.org',\n});\nawait conflux.updateNetworkId();  // this line should be in a async function\n")),Object(s.b)("h4",{id:"util"},"util"),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"format.address")," Return with new addresses, and add an optional configuration ",Object(s.b)("inlineCode",{parentName:"p"},"networkId"),", 1029 as default. Only when the input address is hex40, a second configuration is needed."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"format.address('cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91');\n// cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91\nformat.address('0x1386b4185a223ef49592233b69291bbe5a80c527');\n// cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91\nformat.address('0x1386b4185a223ef49592233b69291bbe5a80c527', 1);\n// cfxtest:aak2rra2njvd77ezwjvx04kkds9fzagfe6d5r8e957\nformat.address('0x1386b4185a223ef49592233b69291bbe5a80c527', 1, true);\n// CFXTEST:TYPE.USER:AAK2RRA2NJVD77EZWJVX04KKDS9FZAGFE6D5R8E957\n")),Object(s.b)("p",null,"New function ",Object(s.b)("inlineCode",{parentName:"p"},"format.hexAddress")," returns with hex40 address."),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"format.hexAddress('cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91');\n// 0x1386b4185a223ef49592233b69291bbe5a80c527\nformat.hexAddress('0x1386b4185a223ef49592233b69291bbe5a80c527');\n// 0x1386b4185a223ef49592233b69291bbe5a80c527\n")),Object(s.b)("p",null,"The address format can be converted through these two functions.",Object(s.b)("br",{parentName:"p"}),"\n",Object(s.b)("inlineCode",{parentName:"p"},"format.checksumAddress")," and ",Object(s.b)("inlineCode",{parentName:"p"},"sign.checksumAddress")," are tagged as deprecated, which means it may be removed or renamed in the future."),Object(s.b)("h4",{id:"methods-added-new-parameter-networkid"},"Methods added new parameter ",Object(s.b)("inlineCode",{parentName:"h4"},"networkId")),Object(s.b)("p",null,"PrivateKeyAccount "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Construction method"),Object(s.b)("li",{parentName:"ul"},"Static method decrypt"),Object(s.b)("li",{parentName:"ul"},"Static method random")),Object(s.b)("p",null,"Wallet "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Construction method")),Object(s.b)("p",null,"Message"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"sign")),Object(s.b)("h4",{id:"conflux"},"Conflux"),Object(s.b)("p",null,"Usage of Conflux is the same as before. The old and new formats are both supported, but addresses in return data will be in the new format."),Object(s.b)("h4",{id:"smart-contract-interaction"},"Smart Contract Interaction"),Object(s.b)("p",null,"Basically, this improvement does not affect smart contract, so when interacting with smart contracts, hex40 addresses are still in use.\nBut the SDK realizes compatibility processing. When you call smart contract methods, the new format will be supported when addresses are involved, and the returns and log decode involving addresses will also be in the new format."),Object(s.b)("p",null,"Please note: if the method returns with non-Conflux addresses, the addresses will still be in hex40 format."))}d.isMDXComponent=!0},215:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=d(n),p=a,f=b["".concat(c,".").concat(p)]||b[p]||u[p]||s;return n?r.a.createElement(f,o(o({ref:t},i),{},{components:n})):r.a.createElement(f,o({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,c=new Array(s);c[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var i=2;i<s;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);