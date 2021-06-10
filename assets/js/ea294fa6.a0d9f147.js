(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{135:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(3),a=n(7),r=(n(0),n(141)),l={},o={unversionedId:"conflux-rust/changelogs/CHANGELOG-1.1.x",id:"conflux-rust/changelogs/CHANGELOG-1.1.x",isDocsHomePage:!1,title:"1.1.4",description:"Improvements",source:"@site/docs/conflux-rust/changelogs/CHANGELOG-1.1.x.md",sourceDirName:"conflux-rust/changelogs",slug:"/conflux-rust/changelogs/CHANGELOG-1.1.x",permalink:"/conflux-rust/changelogs/CHANGELOG-1.1.x",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-rust/changelogs/CHANGELOG-1.1.x.md",version:"current",frontMatter:{}},c=[{value:"RPC Improvements",id:"rpc-improvements",children:[]},{value:"Configuration Improvements",id:"configuration-improvements",children:[]},{value:"Bug fixes",id:"bug-fixes",children:[]},{value:"Improvements",id:"improvements",children:[{value:"RPC Improvements",id:"rpc-improvements-1",children:[]},{value:"Configuration Improvements",id:"configuration-improvements-1",children:[]},{value:"Performance Improvements",id:"performance-improvements",children:[]},{value:"Bug fix",id:"bug-fix",children:[]}]},{value:"Improvements",id:"improvements-1",children:[{value:"Configuration Improvements",id:"configuration-improvements-2",children:[]},{value:"RPC Improvements",id:"rpc-improvements-2",children:[]},{value:"Performance Optimization",id:"performance-optimization",children:[]}]},{value:"Bug Fixes",id:"bug-fixes-1",children:[]},{value:"Incompatible Changes",id:"incompatible-changes",children:[]},{value:"Improvements",id:"improvements-2",children:[]},{value:"Incompatible changes",id:"incompatible-changes-1",children:[]},{value:"Improvements",id:"improvements-3",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Improvements"),Object(r.b)("h3",{id:"rpc-improvements"},"RPC Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add a new RPC ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getAccountPendingTransactions")," to get pending transactions of a given account."),Object(r.b)("li",{parentName:"ul"},"Make VM tracer records reasons for a fail execution. "),Object(r.b)("li",{parentName:"ul"},"Make ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_estimateGasAndCollateral")," return an error stack in case an error happens in sub-call."),Object(r.b)("li",{parentName:"ul"},"Use random miner address in virtual calls (",Object(r.b)("inlineCode",{parentName:"li"},"cfx_call")," and ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_estimateGasAndCollateral"),")\ninstead of a special null address.")),Object(r.b)("h3",{id:"configuration-improvements"},"Configuration Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Allow setting maximum WebSocket response payload size using ",Object(r.b)("inlineCode",{parentName:"li"},"jsonrpc_ws_max_payload_bytes"),". The default is 30MB.")),Object(r.b)("h2",{id:"bug-fixes"},"Bug fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fix a bug that causes repacking useless transactions."),Object(r.b)("li",{parentName:"ul"},"Fix a bug that causes the configuration ",Object(r.b)("inlineCode",{parentName:"li"},"sync_state_starting_epoch")," not effective on archive nodes."),Object(r.b)("li",{parentName:"ul"},"Fix a bug that may make ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getStatus")," return unexpected error.")),Object(r.b)("h1",{id:"113"},"1.1.3"),Object(r.b)("h2",{id:"improvements"},"Improvements"),Object(r.b)("h3",{id:"rpc-improvements-1"},"RPC Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Include ",Object(r.b)("inlineCode",{parentName:"li"},"blockHash"),", ",Object(r.b)("inlineCode",{parentName:"li"},"epochHash"),", ",Object(r.b)("inlineCode",{parentName:"li"},"epochNumber"),", ",Object(r.b)("inlineCode",{parentName:"li"},"transactionHash"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"transactionPosition")," for trace RPCs.\nNote that the data format returned by ",Object(r.b)("inlineCode",{parentName:"li"},"trace_block")," is incompatible with old versions."),Object(r.b)("li",{parentName:"ul"},"Add new field ",Object(r.b)("inlineCode",{parentName:"li"},"offset")," in log filters used in ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getLogs"),".\nIf specified, the response will skip the ",Object(r.b)("strong",{parentName:"li"},"last")," ",Object(r.b)("inlineCode",{parentName:"li"},"offset")," logs.\nFor instance, with 10 matching logs (",Object(r.b)("inlineCode",{parentName:"li"},"0..9"),") and ",Object(r.b)("inlineCode",{parentName:"li"},"offset=0x1, limit=0x5"),", the response will contain logs ",Object(r.b)("inlineCode",{parentName:"li"},"4..8"),".\nNote: Even if you specify ",Object(r.b)("inlineCode",{parentName:"li"},"offset"),", the corresponding logs still need to be processed by the node,\nso a filter with ",Object(r.b)("inlineCode",{parentName:"li"},"offset=10000, limit=10")," has about the same performance as a filter with ",Object(r.b)("inlineCode",{parentName:"li"},"offset=0, limit=100010"),"."),Object(r.b)("li",{parentName:"ul"},"Add a new parameter ",Object(r.b)("inlineCode",{parentName:"li"},"subscription_epoch")," to the ",Object(r.b)("inlineCode",{parentName:"li"},"epochs")," pubsub.\nThe supported values are ",Object(r.b)("inlineCode",{parentName:"li"},'"latest_mined"')," (default) and ",Object(r.b)("inlineCode",{parentName:"li"},'"latest_state"'),"."),Object(r.b)("li",{parentName:"ul"},"Add ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getAccountPendingInfo")," to get pending transaction info for some account for better investigating pending tx problems.")),Object(r.b)("h3",{id:"configuration-improvements-1"},"Configuration Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Allow immediately packing sent transactions in ",Object(r.b)("inlineCode",{parentName:"li"},"dev")," mode by keeping ",Object(r.b)("inlineCode",{parentName:"li"},"dev_block_interval_ms")," unset.\nNote that setting ",Object(r.b)("inlineCode",{parentName:"li"},"dev_block_interval_ms")," will disable this immediate packing and generate blocks only periodically.")),Object(r.b)("h3",{id:"performance-improvements"},"Performance Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Optimize the state implementation for better cache performance.")),Object(r.b)("h3",{id:"bug-fix"},"Bug fix"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fix a bug that makes running nodes in ",Object(r.b)("inlineCode",{parentName:"li"},"dev")," mode not generate blocks automatically.")),Object(r.b)("h1",{id:"112"},"1.1.2"),Object(r.b)("h2",{id:"improvements-1"},"Improvements"),Object(r.b)("h3",{id:"configuration-improvements-2"},"Configuration Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Change the default node type to ",Object(r.b)("inlineCode",{parentName:"li"},"full")," node instead of ",Object(r.b)("inlineCode",{parentName:"li"},"archive")," node. And allow setting the node type in the\nconfiguration file with the entry ",Object(r.b)("inlineCode",{parentName:"li"},"node_type"),"."),Object(r.b)("li",{parentName:"ul"},"Add parameters to independently configure the garbage collection time of different kinds of data (like receipts,\ntransactions, block traces, state, e.t.c.). Check the ",Object(r.b)("inlineCode",{parentName:"li"},"additional_maintained_*")," entries in ",Object(r.b)("inlineCode",{parentName:"li"},"run/tethys.toml"),"."),Object(r.b)("li",{parentName:"ul"},"If ",Object(r.b)("inlineCode",{parentName:"li"},"block_db_dir")," or ",Object(r.b)("inlineCode",{parentName:"li"},"netconf_dir")," is not set, put the default directory in the one configured with ",Object(r.b)("inlineCode",{parentName:"li"},"conflux_data_dir"),".\nThe old behavior is to be put in the hard-coded ",Object(r.b)("inlineCode",{parentName:"li"},"./blockchain_data"),"."),Object(r.b)("li",{parentName:"ul"},"Add a parameter ",Object(r.b)("inlineCode",{parentName:"li"},"public_rpc_apis")," to control the publicly available RPC interface sets.\nThe access to ",Object(r.b)("inlineCode",{parentName:"li"},"test")," and ",Object(r.b)("inlineCode",{parentName:"li"},"debug")," RPCs is no longer related to ",Object(r.b)("inlineCode",{parentName:"li"},"mode"),"."),Object(r.b)("li",{parentName:"ul"},"Remove the parameter ",Object(r.b)("inlineCode",{parentName:"li"},"enable_tracing")," because it has been included in the new ",Object(r.b)("inlineCode",{parentName:"li"},"public_rpc_apis"),".")),Object(r.b)("h3",{id:"rpc-improvements-2"},"RPC Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add new local RPC ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getEpochReceipts")," to allow querying receipts based on an epoch number."),Object(r.b)("li",{parentName:"ul"},"Add new trace RPC ",Object(r.b)("inlineCode",{parentName:"li"},"trace_filter")," to allow querying traces based on epochs/types/offset."),Object(r.b)("li",{parentName:"ul"},"Add new trace RPC ",Object(r.b)("inlineCode",{parentName:"li"},"trace_transaction"),"."),Object(r.b)("li",{parentName:"ul"},"Use hex encoding for the returned bytes in trace-related RPCs."),Object(r.b)("li",{parentName:"ul"},"Add new fields ",Object(r.b)("inlineCode",{parentName:"li"},"latestCheckpoint"),", ",Object(r.b)("inlineCode",{parentName:"li"},"latestConfirmed"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"latestState")," in ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getStatus"),"."),Object(r.b)("li",{parentName:"ul"},"Improve some RPC error reporting.")),Object(r.b)("h3",{id:"performance-optimization"},"Performance Optimization"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Reduce the memory usage for maintaining more snapshots with the configuration ",Object(r.b)("inlineCode",{parentName:"li"},"additional_maintained_snapshot_count"),".")),Object(r.b)("h2",{id:"bug-fixes-1"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fix a possible OOM error when a full node is catching up."),Object(r.b)("li",{parentName:"ul"},"Fix a possible OOM error in transaction pool when an archive node is catching up."),Object(r.b)("li",{parentName:"ul"},"Return correct ",Object(r.b)("inlineCode",{parentName:"li"},"block_number")," in ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getStatus"),"."),Object(r.b)("li",{parentName:"ul"},"Fix a bug that makes the configuration ",Object(r.b)("inlineCode",{parentName:"li"},"mining_author")," require extra quotes to use a CIP-37 base32 address."),Object(r.b)("li",{parentName:"ul"},"Fix a bug that the block traces may be incorrect if the pivot chain switches frequently.")),Object(r.b)("h1",{id:"111"},"1.1.1"),Object(r.b)("h2",{id:"incompatible-changes"},"Incompatible Changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CIP-37: Conflux to shift to base32 address format. The hex address format similar to Ethereum is deprecated in rpc interactions to full node.")),Object(r.b)("h2",{id:"improvements-2"},"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Reduce delay in logs pub-sub; now we send logs immediately after they become available."),Object(r.b)("li",{parentName:"ul"},"Implement Execution Trace functionality. It includes detailed call/create/return/internal_transfer events being triggered by a transfer. Inspecting the trace information will enable the applications like conflux-scan to be able to track all transfers of CFX accurately. "),Object(r.b)("li",{parentName:"ul"},"Support CIP-37 address format in ",Object(r.b)("inlineCode",{parentName:"li"},"mining_author")," configuration."),Object(r.b)("li",{parentName:"ul"},"Include ",Object(r.b)("inlineCode",{parentName:"li"},"networkId")," in ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getStatus")," response."),Object(r.b)("li",{parentName:"ul"},"Include ",Object(r.b)("inlineCode",{parentName:"li"},"address")," in ",Object(r.b)("inlineCode",{parentName:"li"},"RpcAccount"),"."),Object(r.b)("li",{parentName:"ul"},"New RPC ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getSupplyinfo")," to get the total CFX supply and the circulating CFX supply.")),Object(r.b)("h1",{id:"110"},"1.1.0"),Object(r.b)("h2",{id:"incompatible-changes-1"},"Incompatible changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CIP-38: Reduce the block base reward to 2 CFX from the epoch number 3,615,000."),Object(r.b)("li",{parentName:"ul"},"CIP-39: Blocks from the height 3,615,000 (included) are required to set the first element of their ",Object(r.b)("inlineCode",{parentName:"li"},"custom")," field in the header to ",Object(r.b)("inlineCode",{parentName:"li"},"[1]"),".")),Object(r.b)("h2",{id:"improvements-3"},"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Return the ",Object(r.b)("inlineCode",{parentName:"li"},"custom")," field in the block header for related RPCs (",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHash"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHashWithPivotAssumption"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getBlockByEpochNumber"),").")))}s.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),m=s(n),d=i,u=m["".concat(l,".").concat(d)]||m[d]||p[d]||r;return n?a.a.createElement(u,o(o({ref:t},b),{},{components:n})):a.a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var b=2;b<r;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);