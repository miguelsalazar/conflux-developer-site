(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(2),a=n(9),r=(n(0),n(214)),l={},o={id:"conflux-rust/changelogs/CHANGELOG-1.0.x",title:"CHANGELOG-1.0.x",description:"1.0.4",source:"@site/docs/conflux-rust/changelogs/CHANGELOG-1.0.x.md",permalink:"/docs/conflux-rust/changelogs/CHANGELOG-1.0.x",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/changelogs/CHANGELOG-1.0.x.md",lastUpdatedAt:1614599431},c=[{value:"Improvements",id:"improvements",children:[]},{value:"Bug Fixes",id:"bug-fixes",children:[]},{value:"Improvements",id:"improvements-1",children:[]},{value:"Bug Fixes",id:"bug-fixes-1",children:[]},{value:"Light nodes",id:"light-nodes",children:[]},{value:"Improvement",id:"improvement",children:[]},{value:"Bug Fixes",id:"bug-fixes-2",children:[]},{value:"Incompatible changes",id:"incompatible-changes",children:[]}],b={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"104"},"1.0.4"),Object(r.b)("h2",{id:"improvements"},"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Add config parameter ",Object(r.b)("inlineCode",{parentName:"li"},"executive_trace")," to allow storing block execution traces. (default is ",Object(r.b)("inlineCode",{parentName:"li"},"false"),")"),Object(r.b)("li",{parentName:"ul"},"Add config parameter ",Object(r.b)("inlineCode",{parentName:"li"},"enable_tracing")," to allow public access to ",Object(r.b)("inlineCode",{parentName:"li"},"trace_*")," RPC APIs. (default is ",Object(r.b)("inlineCode",{parentName:"li"},"false"),")"),Object(r.b)("li",{parentName:"ul"},"Add new rpc ",Object(r.b)("inlineCode",{parentName:"li"},"trace_block")," for archive/full nodes. (only works for blocks processed after setting ",Object(r.b)("inlineCode",{parentName:"li"},"executive_trace"),")"),Object(r.b)("li",{parentName:"ul"},"Use 0 as default for storage limit in ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_sendTransaction")," and ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_signTransaction"),".")),Object(r.b)("h2",{id:"bug-fixes"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Change the ",Object(r.b)("inlineCode",{parentName:"li"},"blame")," field returned from the ",Object(r.b)("inlineCode",{parentName:"li"},"newHeads")," pub-sub to hex."),Object(r.b)("li",{parentName:"ul"},"Fix an issue where the ",Object(r.b)("inlineCode",{parentName:"li"},"logs")," pub-sub API would skip logs."),Object(r.b)("li",{parentName:"ul"},"Fix an issue where if miners submit the nonce solution to multiple nodes, some of these nodes may stop mining (Issue #1985).")),Object(r.b)("h1",{id:"103"},"1.0.3"),Object(r.b)("h2",{id:"improvements-1"},"Improvements"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Support ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_gasPrice"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getAccumulateInterestRate"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getInterestRate"),", and ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_checkBalanceAgainstTransaction")," on light nodes."),Object(r.b)("li",{parentName:"ul"},"Add the following new fields in the return value of ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getTransactionReceipt"),": ",Object(r.b)("inlineCode",{parentName:"li"},"gasCoveredBySponsor"),", ",Object(r.b)("inlineCode",{parentName:"li"},"storageCollateralized"),", ",Object(r.b)("inlineCode",{parentName:"li"},"storageCoveredBySponsor"),", ",Object(r.b)("inlineCode",{parentName:"li"},"storageReleased"),"."),Object(r.b)("li",{parentName:"ul"},"Add new rpc ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getDepositList")," and ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getVoteList")," in archive/full/light nodes.")),Object(r.b)("h1",{id:"102"},"1.0.2"),Object(r.b)("h2",{id:"bug-fixes-1"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fix bugs in whitelist removal at contract removal.")),Object(r.b)("h1",{id:"101"},"1.0.1"),Object(r.b)("h2",{id:"light-nodes"},"Light nodes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fix the following RPCs on light nodes: ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_epochNumber"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getNextNonce"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_GetBlockByHash"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getBlockByEpochNumber"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHashWithPivotAssumption"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getBlocksByEpoch"),"."),Object(r.b)("li",{parentName:"ul"},"Make ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getTransactionReceipt")," return null instead of timeout on light nodes to increase compatibility with js-conflux-sdk."),Object(r.b)("li",{parentName:"ul"},"Fix bug where light nodes disconnect peers if the user queries the genesis block."),Object(r.b)("li",{parentName:"ul"},"Add periodic heartbeat messages to the light protocol.")),Object(r.b)("h1",{id:"100"},"1.0.0"),Object(r.b)("h2",{id:"improvement"},"Improvement"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Start stratum services automatically if ",Object(r.b)("inlineCode",{parentName:"li"},"mining_author")," is set.\nUse ",Object(r.b)("inlineCode",{parentName:"li"},"mining_type")," to allow start CPU mining or disable mining manually."),Object(r.b)("li",{parentName:"ul"},"block info returned by rpc methods ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getBlockByEpochNumber"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHash"),", ",Object(r.b)("inlineCode",{parentName:"li"},"cfx_getBlockByHashWithPivotAssumption")," add one new field ",Object(r.b)("inlineCode",{parentName:"li"},"gasUsed")," (backward compatible)")),Object(r.b)("h2",{id:"bug-fixes-2"},"Bug Fixes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Fix bug where users need to restart node before they can use a newly created account to send transactions."),Object(r.b)("li",{parentName:"ul"},"Fix code() return value for uninitialized contract."),Object(r.b)("li",{parentName:"ul"},"Fix bug in kill_account after which the contract account is revived by simple transaction."),Object(r.b)("li",{parentName:"ul"},"Fix missing StorageKey conversion from bytes of DepositList and VoteList.")),Object(r.b)("h2",{id:"incompatible-changes"},"Incompatible changes"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CIP-5 Fix corner case in MPT key encoding."),Object(r.b)("li",{parentName:"ul"},"CIP-8 Move all the collateral settlement to the end of execution."),Object(r.b)("li",{parentName:"ul"},"CIP-10 Base mining reward finalization."),Object(r.b)("li",{parentName:"ul"},"CIP-12 Allow non-zero collateral contract to be killed."),Object(r.b)("li",{parentName:"ul"},"CIP-13 Use Big-Endian MPT Keys."),Object(r.b)("li",{parentName:"ul"},"CIP-16 Collect suicide logic at the end of transaction processing."),Object(r.b)("li",{parentName:"ul"},"CIP-26 Use timestamp from pivot block as TIMESTAMP (opcode 42)."),Object(r.b)("li",{parentName:"ul"},"CIP-27 Remove sponsor whitelist keys at contract deletion."),Object(r.b)("li",{parentName:"ul"},"Set snapshot epoch count to 2000."),Object(r.b)("li",{parentName:"ul"},"Update code collateral calculation to a more reasonable method.")))}s.isMDXComponent=!0},214:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),s=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=i,m=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var b=2;b<r;b++)l[b]=n[b];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);