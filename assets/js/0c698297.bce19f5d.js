(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,h=d["".concat(i,".").concat(f)]||d[f]||p[f]||r;return n?a.a.createElement(h,l(l({ref:t},u),{},{components:n})):a.a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(3),a=n(7),r=(n(0),n(142)),i={id:"how_to_get",title:"Get Conflux Client",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/run-a-node/en/how-to-get.md",keywords:["node"]},l={unversionedId:"run-a-node/en/how_to_get",id:"run-a-node/en/how_to_get",isDocsHomePage:!1,title:"Get Conflux Client",description:"Conflux-rust is a high-performance implementation of the Conflux protocol developed by the foundation with the Rust language. Conflux-rust is a Conflux node that connects to other nodes on the Conflux network and provides an RPC interface that you can use to query and interact with the blockchain. It is also a command-line tool that manages local accounts and conducts PRC interaction with nodes. You can download the released package through any of the ways listed:",source:"@site/docs/run-a-node/en/how-to-get.md",sourceDirName:"run-a-node/en",slug:"/run-a-node/en/how_to_get",permalink:"/run-a-node/en/how_to_get",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/run-a-node/en/how-to-get.md",version:"current",frontMatter:{id:"how_to_get",title:"Get Conflux Client",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/run-a-node/en/how-to-get.md",keywords:["node"]},sidebar:"docs",previous:{title:"Papers",permalink:"/introduction/en/conflux_papers"},next:{title:"Compile from Source",permalink:"/conflux-doc/docs/installation"}},c=[{value:"Download pre-built binaries",id:"download-pre-built-binaries",children:[]},{value:"Docker",id:"docker",children:[]}],u={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/conflux-chain/conflux-rust"},"Conflux-rust")," is a high-performance implementation of the Conflux protocol developed by the foundation with the Rust language. Conflux-rust is a Conflux node that connects to other nodes on the Conflux network and provides an RPC interface that you can use to query and interact with the blockchain. It is also a command-line tool that manages local accounts and conducts PRC interaction with nodes. You can download the released package through any of the ways listed: "),Object(r.b)("h2",{id:"download-pre-built-binaries"},"Download pre-built binaries"),Object(r.b)("p",null,"The ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/releases"},"release")," page on the conflux-rust GitHub repository providers pre-built binaries that you can download and run directly. There are two versions for the mainnet and the testnet: the mainnet version is Conflux ",Object(r.b)("inlineCode",{parentName:"p"},"vx.x.x"),", while the version for testnet is ",Object(r.b)("inlineCode",{parentName:"p"},"Conflux vx.x.x-testnet")," (which has a suffix of ",Object(r.b)("inlineCode",{parentName:"p"},"testnet"),"). Each program will be provided for Linux, Windows10, and macOS."),Object(r.b)("p",null,"On the Release page, each version will have a version update description and ",Object(r.b)("inlineCode",{parentName:"p"},"Assets")," that you can download. After selecting the corresponding platform, you can click the link to download the zip package. For example, when unzipping the ",Object(r.b)("inlineCode",{parentName:"p"},"conflux_linux_v1.1.2.zip")," file, a ",Object(r.b)("inlineCode",{parentName:"p"},"run")," folder that contains node programs, configuration files, and startup scripts will appear. The specific documents include:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"\u279c  run tree\n.\n\u251c\u2500\u2500 conflux\n\u251c\u2500\u2500 log.yaml\n\u251c\u2500\u2500 start.bat\n\u251c\u2500\u2500 start.sh\n\u251c\u2500\u2500 tethys.toml\n\u2514\u2500\u2500 throttling.toml\n\n0 directories, 6 files\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"conflux")," Node program"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tethys.toml")," Mainnet configuration file (If you download the testnet program, the configuration file is testnet.toml)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"log.yaml")," Log configuration file"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"throttling.toml")," Internet speed flow limit configuration file (used for development and testing) "),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"start.sh")," Linux system startup script"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"start.bat")," Windows system startup script")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Make sure you only run binaries downloaded from the official Conflux-Chain/conflux-rust GitHub repository.")),Object(r.b)("h2",{id:"docker"},"Docker"),Object(r.b)("p",null,"Conflux provides an official ",Object(r.b)("a",{parentName:"p",href:"https://hub.docker.com/r/confluxchain/conflux-rust"},"Docker image of conflux-rust"),". You can use it to quickly start a node. You can start a node within two steps:  Download image and  Run container."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ docker pull confluxchain/conflux-rust\n$ docker run -p 12537:12537 --name cfx-node confluxchain/conflux-rust\n")),Object(r.b)("p",null,"So far, there are three tag lines in the officially released image:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"x.x.x"),Object(r.b)("li",{parentName:"ol"},"x.x.x-mainnet"),Object(r.b)("li",{parentName:"ol"},"x.x.x-testnet")),Object(r.b)("p",null,"The first type of image will run a private chain node in dev mode by default. The chainId and miner account will be randomly generated. At the same time, 10 genesis accounts will be created (the defult password is ",Object(r.b)("inlineCode",{parentName:"p"},"123456"),"), and 1000 CFX will be distributed to each account for developing and testing."),Object(r.b)("p",null,"The image with mainnet/testnet suffix tag will activate the nodes of the main network/test network by default. The nodes will start to synchronize data from Epoch 0 through the network. (The process of sychronizing might take a long time, and the transaction sending request won't be processed.)"),Object(r.b)("p",null,"They all support the use of custom configuration files and data directories through mounting directories. You can check the tutorial at:\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/conflux-chain/conflux-docker"},"Conflux-rust docker file on Github")))}s.isMDXComponent=!0}}]);