(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{197:function(e,a,c){"use strict";c.r(a),c.d(a,"frontMatter",(function(){return b})),c.d(a,"metadata",(function(){return i})),c.d(a,"rightToc",(function(){return d})),c.d(a,"default",(function(){return f}));var n=c(2),t=c(9),r=(c(0),c(215)),b={},i={id:"conflux-rust/accounts/cfxkey/README",title:"README",description:"cfxkey-cli",source:"@site/docs/conflux-rust/accounts/cfxkey/README.md",permalink:"/docs/conflux-rust/accounts/cfxkey/README",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/accounts/cfxkey/README.md",lastUpdatedAt:1616137107},d=[{value:"cfxkey-cli",id:"cfxkey-cli",children:[{value:"Usage",id:"usage",children:[]},{value:"Examples",id:"examples",children:[]}]}],l={rightToc:d};function f(e){var a=e.components,c=Object(t.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},l,c,{components:a,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"cfxkey-cli"},"cfxkey-cli"),Object(r.b)("p",null,"Conflux keys generator. It is built on top of the counterpart of Parity Ethereum. Note that Conflux\naddress scheme is different from Ethereum. You cannot directly import Ethereum key files into Conflux."),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'Conflux Keys Generator.\n  Copyright 2020 Conflux Foundation\n\nUsage:\n    cfxkey info <secret-or-phrase> [options]\n    cfxkey generate random [options]\n    cfxkey generate prefix <prefix> [options]\n    cfxkey sign <secret> <message>\n    cfxkey verify public <public> <signature> <message>\n    cfxkey verify address <address> <signature> <message>\n    cfxkey recover <address> <known-phrase>\n    cfxkey [-h | --help]\n\nOptions:\n    -h, --help         Display this message and exit.\n    -s, --secret       Display only the secret key.\n    -p, --public       Display only the public key.\n    -a, --address      Display only the address.\n    -b, --brain        Use parity brain wallet algorithm. Not recommended.\n\nCommands:\n    info               Display public key and address of the secret.\n    generate random    Generates new random Ethereum key.\n    generate prefix    Random generation, but address must start with a prefix ("vanity address").\n    sign               Sign message using a secret key.\n    verify             Verify signer of the signature by public key or address.\n    recover            Try to find brain phrase matching given address from partial phrase.\n')),Object(r.b)("h3",{id:"examples"},"Examples"),Object(r.b)("h4",{id:"info-secret"},Object(r.b)("inlineCode",{parentName:"h4"},"info <secret>")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Display info about private key.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<secret>")," - conflux secret, 32 bytes long")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cfxkey info 17d08f5fe8c77af811caa0c9a187e668ce3b74a99acc3f6d976f075fa8e0be55\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"secret:  17d08f5fe8c77af811caa0c9a187e668ce3b74a99acc3f6d976f075fa8e0be55\npublic:  689268c0ff57a20cd299fa60d3fb374862aff565b20b5f1767906a99e6e09f3ff04ca2b2a5cd22f62941db103c0356df1a8ed20ce322cab2483db67685afd124\naddress: 26d1ec50b4e62c1d1a40d16e7cacc6a6580757d5\n")),Object(r.b)("p",null,"--"),Object(r.b)("h4",{id:"info---brain-phrase"},Object(r.b)("inlineCode",{parentName:"h4"},"info --brain <phrase>")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Display info about private key generate from brain wallet recovery phrase.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<phrase>")," - Parity recovery phrase, 12 words")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'cfxkey info --brain "this is sparta"\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"The recover phrase was not generated by Parity: The word 'this' does not come from the dictionary.\n\nsecret:  aa22b54c0cb43ee30a014afe5ef3664b1cde299feabca46cd3167a85a57c39f2\npublic:  c4c5398da6843632c123f543d714d2d2277716c11ff612b2a2f23c6bda4d6f0327c31cd58c55a9572c3cc141dade0c32747a13b7ef34c241b26c84adbb28fcf4\naddress: 006e27b6a72e1f34c626762f3c4761547aff1421\n")),Object(r.b)("p",null,"--"),Object(r.b)("h4",{id:"generate-random"},Object(r.b)("inlineCode",{parentName:"h4"},"generate random")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Generate new keypair randomly.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cfxkey generate random\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"secret:  7d29fab185a33e2cd955812397354c472d2b84615b645aa135ff539f6b0d70d5\npublic:  35f222d88b80151857a2877826d940104887376a94c1cbd2c8c7c192eb701df88a18a4ecb8b05b1466c5b3706042027b5e079fe3a3683e66d822b0e047aa3418\naddress: a8fa5dd30a87bb9e3288d604eb74949c515ab66e\n")),Object(r.b)("p",null,"--"),Object(r.b)("h4",{id:"generate-random---brain"},Object(r.b)("inlineCode",{parentName:"h4"},"generate random --brain")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Generate new keypair with recovery phrase randomly.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cfxkey generate random --brain\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"recovery phrase: thwarting scandal creamer nuzzle asparagus blast crouch trusting anytime elixir frenzied octagon\nsecret:  001ce488d50d2f7579dc190c4655f32918d505cee3de63bddc7101bc91c0c2f0\npublic:  4e19a5fdae82596e1485c69b687c9cc52b5078e5b0668ef3ce8543cd90e712cb00df822489bc1f1dcb3623538a54476c7b3def44e1a51dc174e86448b63f42d0\naddress: 00cf3711cbd3a1512570639280758118ba0b2bcb\n")),Object(r.b)("p",null,"--"),Object(r.b)("h4",{id:"generate-prefix-prefix"},Object(r.b)("inlineCode",{parentName:"h4"},"generate prefix <prefix>")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Generate new keypair randomly with address starting with prefix.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<prefix>")," - desired address prefix, 0 - 32 bytes long.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cfxkey generate prefix ff\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"secret:  2075b1d9c124ea673de7273758ed6de14802a9da8a73ceb74533d7c312ff6acd\npublic:  48dbce4508566a05509980a5dd1335599fcdac6f9858ba67018cecb9f09b8c4066dc4c18ae2722112fd4d9ac36d626793fffffb26071dfeb0c2300df994bd173\naddress: fff7e25dff2aa60f61f9d98130c8646a01f31649\n")),Object(r.b)("p",null,"--"),Object(r.b)("h4",{id:"generate-prefix---brain-prefix"},Object(r.b)("inlineCode",{parentName:"h4"},"generate prefix --brain <prefix>")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Generate new keypair with recovery phrase randomly with address starting with prefix.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<prefix>")," - desired address prefix, 0 - 32 bytes long.")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cfxkey generate prefix --brain 00cf\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"recovery phrase: thwarting scandal creamer nuzzle asparagus blast crouch trusting anytime elixir frenzied octagon\nsecret:  001ce488d50d2f7579dc190c4655f32918d505cee3de63bddc7101bc91c0c2f0\npublic:  4e19a5fdae82596e1485c69b687c9cc52b5078e5b0668ef3ce8543cd90e712cb00df822489bc1f1dcb3623538a54476c7b3def44e1a51dc174e86448b63f42d0\naddress: 00cf3711cbd3a1512570639280758118ba0b2bcb\n")),Object(r.b)("p",null,"--"),Object(r.b)("h4",{id:"sign-secret-message"},Object(r.b)("inlineCode",{parentName:"h4"},"sign <secret> <message>")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Sign a message with a secret.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<secret>")," - conflux secret, 32 bytes long"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<message>")," - message to sign, 32 bytes long")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cfxkey sign 17d08f5fe8c77af811caa0c9a187e668ce3b74a99acc3f6d976f075fa8e0be55 bd50b7370c3f96733b31744c6c45079e7ae6c8d299613246d28ebcef507ec987\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"c1878cf60417151c766a712653d26ef350c8c75393458b7a9be715f053215af63dfd3b02c2ae65a8677917a8efa3172acb71cb90196e42106953ea0363c5aaf200\n")),Object(r.b)("p",null,"--"),Object(r.b)("h4",{id:"verify-public-public-signature-message"},Object(r.b)("inlineCode",{parentName:"h4"},"verify public <public> <signature> <message>")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Verify the signature.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<public>")," - conflux public, 64 bytes long"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<signature>")," - message signature, 65 bytes long"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<message>")," - message, 32 bytes long")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cfxkey verify public 689268c0ff57a20cd299fa60d3fb374862aff565b20b5f1767906a99e6e09f3ff04ca2b2a5cd22f62941db103c0356df1a8ed20ce322cab2483db67685afd124 c1878cf60417151c766a712653d26ef350c8c75393458b7a9be715f053215af63dfd3b02c2ae65a8677917a8efa3172acb71cb90196e42106953ea0363c5aaf200 bd50b7370c3f96733b31744c6c45079e7ae6c8d299613246d28ebcef507ec987\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"true\n")),Object(r.b)("p",null,"--"),Object(r.b)("h4",{id:"verify-address-address-signature-message"},Object(r.b)("inlineCode",{parentName:"h4"},"verify address <address> <signature> <message>")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Verify the signature.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<address>")," - conflux address, 20 bytes long"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<signature>")," - message signature, 65 bytes long"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<message>")," - message, 32 bytes long")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"cfxkey verify address 689268c0ff57a20cd299fa60d3fb374862aff565b20b5f1767906a99e6e09f3ff04ca2b2a5cd22f62941db103c0356df1a8ed20ce322cab2483db67685afd124 c1878cf60417151c766a712653d26ef350c8c75393458b7a9be715f053215af63dfd3b02c2ae65a8677917a8efa3172acb71cb90196e42106953ea0363c5aaf200 bd50b7370c3f96733b31744c6c45079e7ae6c8d299613246d28ebcef507ec987\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),"true\n")),Object(r.b)("p",null,"--"),Object(r.b)("h4",{id:"recover-address-known-phrase"},Object(r.b)("inlineCode",{parentName:"h4"},"recover <address> <known-phrase>")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Try to recover an account given expected address and partial (too short or with invalid words) recovery phrase.")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<address>")," - conflux address, 20 bytes long"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<known-phrase>")," - known phrase, can be in a form of ",Object(r.b)("inlineCode",{parentName:"li"},"thwarting * creamer"))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'RUST_LOG="info" cfxkey recover "00cf3711cbd3a1512570639280758118ba0b2bcb" "thwarting scandal creamer nuzzle asparagus blast crouch trusting anytime elixir frenzied octag"\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{}),'INFO:cfxkey::brain_recover: Invalid word \'octag\', looking for potential substitutions.\nINFO:cfxkey::brain_recover: Closest words: ["ocean", "octagon", "octane", "outage", "tag", "acting", "acts", "aorta", "cage", "chug"]\nINFO:cfxkey::brain_recover: Starting to test 7776 possible combinations.\n\nthwarting scandal creamer nuzzle asparagus blast crouch trusting anytime elixir frenzied octagon\nsecret:  001ce488d50d2f7579dc190c4655f32918d505cee3de63bddc7101bc91c0c2f0\npublic:  4e19a5fdae82596e1485c69b687c9cc52b5078e5b0668ef3ce8543cd90e712cb00df822489bc1f1dcb3623538a54476c7b3def44e1a51dc174e86448b63f42d0\naddress: 00cf3711cbd3a1512570639280758118ba0b2bcb\n')))}f.isMDXComponent=!0},215:function(e,a,c){"use strict";c.d(a,"a",(function(){return o})),c.d(a,"b",(function(){return u}));var n=c(0),t=c.n(n);function r(e,a,c){return a in e?Object.defineProperty(e,a,{value:c,enumerable:!0,configurable:!0,writable:!0}):e[a]=c,e}function b(e,a){var c=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),c.push.apply(c,n)}return c}function i(e){for(var a=1;a<arguments.length;a++){var c=null!=arguments[a]?arguments[a]:{};a%2?b(Object(c),!0).forEach((function(a){r(e,a,c[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(c)):b(Object(c)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(c,a))}))}return e}function d(e,a){if(null==e)return{};var c,n,t=function(e,a){if(null==e)return{};var c,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)c=r[n],a.indexOf(c)>=0||(t[c]=e[c]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)c=r[n],a.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(t[c]=e[c])}return t}var l=t.a.createContext({}),f=function(e){var a=t.a.useContext(l),c=a;return e&&(c="function"==typeof e?e(a):i(i({},a),e)),c},o=function(e){var a=f(e.components);return t.a.createElement(l.Provider,{value:a},e.children)},s={inlineCode:"code",wrapper:function(e){var a=e.children;return t.a.createElement(t.a.Fragment,{},a)}},p=t.a.forwardRef((function(e,a){var c=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),o=f(c),p=n,u=o["".concat(b,".").concat(p)]||o[p]||s[p]||r;return c?t.a.createElement(u,i(i({ref:a},l),{},{components:c})):t.a.createElement(u,i({ref:a},l))}));function u(e,a){var c=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=c.length,b=new Array(r);b[0]=p;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,b[1]=i;for(var l=2;l<r;l++)b[l]=c[l];return t.a.createElement.apply(null,b)}return t.a.createElement.apply(null,c)}p.displayName="MDXCreateElement"}}]);