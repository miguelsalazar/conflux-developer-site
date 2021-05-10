(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{125:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return u}));var o=t(3),r=t(7),a=(t(0),t(133)),c={id:"conflux_sdks",title:"SDKs",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/sdks.md",keywords:["SDK"]},s={unversionedId:"sdks-and-tools/en/conflux_sdks",id:"sdks-and-tools/en/conflux_sdks",isDocsHomePage:!1,title:"SDKs",description:"Conflux has SDKs for mainstream programming languages, including JavaScript, Golang, Java and Python. This is just a short introduction to the SDKs, for detailed usage info, check their respective documentation.",source:"@site/docs/sdks-and-tools/en/sdks.md",sourceDirName:"sdks-and-tools/en",slug:"/sdks-and-tools/en/conflux_sdks",permalink:"/sdks-and-tools/en/conflux_sdks",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/sdks.md",version:"current",frontMatter:{id:"conflux_sdks",title:"SDKs",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sdks-and-tools/en/sdks.md",keywords:["SDK"]},sidebar:"docs",previous:{title:"Public RPCs",permalink:"/sdks-and-tools/en/conflux_rpcs"},next:{title:"Tools",permalink:"/sdks-and-tools/en/conflux_tools"}},l=[{value:"js-conflux-sdk",id:"js-conflux-sdk",children:[]},{value:"go-conflux-sdk",id:"go-conflux-sdk",children:[]},{value:"java-conflux-sdk",id:"java-conflux-sdk",children:[]},{value:"python-conflux-sdk",id:"python-conflux-sdk",children:[]}],i={toc:l};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},i,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Conflux has SDKs for mainstream programming languages, including ",Object(a.b)("inlineCode",{parentName:"p"},"JavaScript"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Golang"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Java")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Python"),". This is just a short introduction to the SDKs, for detailed usage info, check their respective documentation."),Object(a.b)("h2",{id:"js-conflux-sdk"},Object(a.b)("a",{parentName:"h2",href:"https://github.com/conflux-chain/js-conflux-sdk"},"js-conflux-sdk")),Object(a.b)("p",null,"If you are familiar with JavaScript or Node.js, or if you want to build a web site to interact with your contract, ",Object(a.b)("inlineCode",{parentName:"p"},"js-conflux-sdk")," is right for you. It has a lot of useful features."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-js"},'const {Conflux} = require(\'js-conflux-sdk\');\n\nasync function main() {\n  let cfx = new Conflux({\n    url: "https://test.confluxrpc.com",\n    networkId: 1,\n  });\n\n  let balance = await cfx.getBalance("cfxtest:aakkfzezns4h8ymx1cgmcnd4x3aev6e2he38nnu8sv");\n  console.log("balance: ", balance);\n}\n\nmain().catch(console.log);\n')),Object(a.b)("h2",{id:"go-conflux-sdk"},Object(a.b)("a",{parentName:"h2",href:"https://github.com/conflux-chain/go-conflux-sdk"},"go-conflux-sdk")),Object(a.b)("p",null,"Golang is a great language: fast, easy to use, and stable. In blockchain world a lot projects are developing with Go. If you want to develop a backend service which needs to communicate with Conflux network, ",Object(a.b)("inlineCode",{parentName:"p"},"go-conflux-sdk")," suits for you."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-go"},'package main\n\nimport (\n    "fmt"\n\n    conflux "github.com/Conflux-Chain/go-conflux-sdk"\n)\n\nfunc main() {\n    client, err := conflux.NewClient("https://test.confluxrpc.com")\n    if err != nil {\n        fmt.Println("failed to create client:", err)\n        return\n    }\n    defer client.Close()\n\n    epoch, err := client.GetEpochNumber()\n    if err != nil {\n        fmt.Println("failed to get epoch number:", err)\n        return\n    }\n\n    fmt.Println("Current epoch number:", epoch)\n}\n\n')),Object(a.b)("h2",{id:"java-conflux-sdk"},Object(a.b)("a",{parentName:"h2",href:"https://github.com/conflux-chain/java-conflux-sdk"},"java-conflux-sdk")),Object(a.b)("p",null,"Java is really a long live programming language. ",Object(a.b)("inlineCode",{parentName:"p"},"java-conflux-sdk")," can be used to talk to a Conflux node. It is evolved from the ",Object(a.b)("a",{parentName:"p",href:"https://docs.web3j.io/"},"web3j")," library. Some of web3j's utility functions also work on the Conflux network."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-java"},'package conflux.sdk.examples;\nimport java.math.BigInteger;\nimport conflux.web3j.Cfx;\n\npublic class App {\n  public static void main(String[] args) throws Exception {\n    int retry = 3;\n    int intervalMills = 1000;  // interval(milliseconds) between retry\n    Cfx cfx = Cfx.create("https://test.confluxrpc.com", retry, intervalMills);\n    BigInteger epoch = cfx.getEpochNumber().sendAndGet();\n    System.out.println("Current epoch: " + epoch);\n  }\n}\n')),Object(a.b)("h2",{id:"python-conflux-sdk"},Object(a.b)("a",{parentName:"h2",href:"https://github.com/conflux-chain/python-conflux-sdk"},"python-conflux-sdk")),Object(a.b)("p",null,"Python is the first choice for a lot of developers, we also have ",Object(a.b)("inlineCode",{parentName:"p"},"python-conflux-sdk")," for you."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-python"},"from conflux import (\n    Conflux,\n    HTTPProvider,\n)\nprovider = HTTPProvider('https://test.confluxrpc.com')\nc = Conflux(provider)\n\n# get RPC's clientVersion\nprint(c.clientVersion)\n\ntest_address = 'cfxtest:aak7fsws4u4yf38fk870218p1h3gxut3ku00u1k1da'\nbalance = c.cfx.getBalance(test_address)\nprint(balance)\n")))}u.isMDXComponent=!0},133:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return b}));var o=t(0),r=t.n(o);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),u=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=u(e.components);return r.a.createElement(i.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},p=r.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(t),p=o,b=d["".concat(c,".").concat(p)]||d[p]||f[p]||a;return t?r.a.createElement(b,s(s({ref:n},i),{},{components:t})):r.a.createElement(b,s({ref:n},i))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=p;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);