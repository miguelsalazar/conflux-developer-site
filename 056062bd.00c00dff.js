(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var o=n(2),a=n(9),r=(n(0),n(219)),i={id:"get_started",title:"Run a Node",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/get_started.md",keywords:["conflux","started","running","full node"]},l={id:"conflux-doc/docs/get_started",title:"Run a Node",description:"Here we walk through how to quickly setup conflux full node to join the conflux network and how to use Conflux wallet to manage your account, transfer Conflux token, and deploy smart contract.",source:"@site/docs/conflux-doc/docs/get_started.md",permalink:"/docs/conflux-doc/docs/get_started",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/get_started.md",lastUpdatedAt:1619073732,sidebar:"docs",previous:{title:"Compile from source code",permalink:"/docs/conflux-doc/docs/installation"},next:{title:"My First Transaction",permalink:"/docs/conflux-doc/docs/send_transaction"}},c=[{value:"Running a Conflux Node",id:"running-a-conflux-node",children:[]},{value:"Configuring Conflux Full Node",id:"configuring-conflux-full-node",children:[]},{value:"Running Test",id:"running-test",children:[]},{value:"Creating a wallet",id:"creating-a-wallet",children:[]}],u={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Here we walk through how to quickly setup conflux full node to join the conflux network and how to use Conflux wallet to manage your account, transfer Conflux token, and deploy smart contract."),Object(r.b)("h2",{id:"running-a-conflux-node"},"Running a Conflux Node"),Object(r.b)("p",null,"First, please build the binary as instructed in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/conflux-doc/docs/installation#Install"}),"Installation"),"."),Object(r.b)("p",null,"To start Conflux manually, you need to edit the default configuration file ",Object(r.b)("inlineCode",{parentName:"p"},"run/tethys.toml"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Set ",Object(r.b)("inlineCode",{parentName:"li"},"public_address")," according to your public IP. The port should be 32323 by default."),Object(r.b)("li",{parentName:"ul"},"Set ",Object(r.b)("inlineCode",{parentName:"li"},"mining_author")," to the account address to receive mining reward."),Object(r.b)("li",{parentName:"ul"},"Conflux team has maintained some full nodes for the test net, and they have been provided as ",Object(r.b)("inlineCode",{parentName:"li"},"bootnodes"),". If you want to use other nodes to bootstrap your new node, you should edit this entry.")),Object(r.b)("p",null,"Then you can run the following commands:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"$ cd run\n$ ../target/release/conflux --config tethys.toml\n")),Object(r.b)("p",null,"It will start an archive node and begin syncing the Conflux mainnet blockchain. "),Object(r.b)("p",null,"Note that two new directories (",Object(r.b)("inlineCode",{parentName:"p"},"blockchain_db")," and ",Object(r.b)("inlineCode",{parentName:"p"},"net_config"),") will be created in the current working directory ( ",Object(r.b)("inlineCode",{parentName:"p"},"run")," ) to keep the persistent data. Please do not remove them unless data are corrupt or you want to start a fresh new node."),Object(r.b)("p",null,"To restart a node, just run the same command line in the same directory."),Object(r.b)("h2",{id:"configuring-conflux-full-node"},"Configuring Conflux Full Node"),Object(r.b)("p",null,"Conflux can be configured using either the CLI options or a config file. Should the CLI flags and the config file disagree about a setting, the CLI takes precedence.  "),Object(r.b)("p",null,"The config file follows the format of ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/toml-lang/toml"}),"TOML"),". The path of the configuration file can be set with the CLI option ",Object(r.b)("inlineCode",{parentName:"p"},"--config path/to/conflux.toml"),". A default configuration file ",Object(r.b)("inlineCode",{parentName:"p"},"tethys.toml")," with every configuration explained has been provided in the directory ",Object(r.b)("inlineCode",{parentName:"p"},"run"),", and you can start customizing your configuration from there."),Object(r.b)("p",null,"You can list all CLI options by running  ",Object(r.b)("inlineCode",{parentName:"p"},"$ ./conflux --help"),". The vast majority of CLI options map to a setting in the TOML file, for example ",Object(r.b)("inlineCode",{parentName:"p"},"--public-address 127.0.0.1:32323")," can be set by creating a config file:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-toml"}),'public_address="127.0.0.1:32323"\n')),Object(r.b)("p",null,"If you are going to set up a node and let it join the Conflux mainnet(testnet), you need to set the ",Object(r.b)("inlineCode",{parentName:"p"},"public_address"),' appropriately. It should be set as the IP address of your node which can be accessed publicly from Internet. If your node is covered under a public gateway, you can get its public address by searching "ip" in ',Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.baidu.com"}),"Baidu"),"."),Object(r.b)("p",null,"If you want to let your node participate the mining process, you need to enable it by setting ",Object(r.b)("inlineCode",{parentName:"p"},"start_mining"),' as "true" and ',Object(r.b)("inlineCode",{parentName:"p"},"mining_author")," as the account address that receives the mining reward. "),Object(r.b)("p",null,"If you want to open the http or websocket RPC, you need to enable it by setting ",Object(r.b)("inlineCode",{parentName:"p"},"jsonrpc_http_port")," or ",Object(r.b)("inlineCode",{parentName:"p"},"jsonrpc_ws_port"),".\n",Object(r.b)("strong",{parentName:"p"},"Note that to serve transaction-related RPCs, ",Object(r.b)("inlineCode",{parentName:"strong"},"persist_tx_index")," should also be set to ",Object(r.b)("inlineCode",{parentName:"strong"},"true")," or the node will only be able to handle very recent transactions.")),Object(r.b)("h2",{id:"running-test"},"Running Test"),Object(r.b)("p",null,"We have both unit tests written in Rust and integration tests written in python. After you make some modifications to the code, you can run these tests to see if the system still runs correctly."),Object(r.b)("p",null,"First, you need to install the dependencies as instructed in ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/conflux-doc/docs/installation#install-test-dependencies"}),"Install Test Dependencies"),"."),Object(r.b)("p",null,"Then you can run the tests as follows"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Linux:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"  $ ./dev-support/test.sh\n")),Object(r.b)("p",{parentName:"li"},"  This will automatically run the unit tests in our Rust code and the python tests.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Others:"),Object(r.b)("p",{parentName:"li"},"  To run unit tests in Rust:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"  $ cargo test --release --all\n")),Object(r.b)("p",{parentName:"li"},"  To run python integration tests:"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",Object(o.a)({parentName:"pre"},{}),"  $ ./tests/test_all.py\n")))),Object(r.b)("h2",{id:"creating-a-wallet"},"Creating a wallet"),Object(r.b)("p",null,"You can use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://portal.conflux-chain.org"}),"Conflux Portal")," to create a wallet.\nIt will provide you a seed phrase\n(used to restore your wallet if you close it) and a password (used to unlock your wallet if you lock it\nwhen you leave your computer). Once a wallet is created, you can then manage your account addresses,\nsend transactions, and deploy smart contract."),Object(r.b)("p",null,'In order to issue on-chain operations, you will need Conflux tokens.\nOn the testnet, you can periodically (100 CFX token per hour) get CFX tokens from a faucet account.\nYou can use the faucet through Conflux Portal by clicking on "Deposit".'),Object(r.b)("p",null,"For developing smart contracts, you can use ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/ObsidianLabs/ConfluxStudio"}),"Conflux Studio")," to write, compile, and deploy your contract."))}s.isMDXComponent=!0},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),b=o,f=d["".concat(i,".").concat(b)]||d[b]||p[b]||r;return n?a.a.createElement(f,l(l({ref:t},u),{},{components:n})):a.a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);