(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"default",(function(){return c}));var o=n(1),r=n(9),a=(n(0),n(203)),i={},s={id:"conflux-doc/docs/sync",title:"sync",description:"#Block Synchronization Process",source:"@site/docs/conflux-doc/docs/sync.md",permalink:"/docs/conflux-doc/docs/sync",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-doc/docs/sync.md",lastUpdatedBy:"ConfluxBot",lastUpdatedAt:1587270637},h={};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"#Block Synchronization Process"),Object(a.b)("p",null,"##Synchronization Graph\nSynchronization graph is designed to organize newly arrived blocks (received from the peers, loaded from local storage, or self-mined) even when their past blocks haven\u2019t been completely collected. Once all the past blocks of a block have been collected in synchronization graph, it will be dispatched to consensus graph for further processing."),Object(a.b)("p",null,"The block header and block body enter the synchronization graph in separate processes, because, typically, the block header and body are transferred separately in peer-to-peer layer. The graph structure in the synchronization graph is constructed by block header arrival. Each block is represented as a node in the graph structure, and the nodes are linked through the parent/child and referrer/referee relations between blocks. "),Object(a.b)("p",null,"Synchronization graph checks the validity of arriving blocks. The blocks that do not pass the validity checks are invalid and will not be dispatched to consensus graph further. The following validity checks are conducted:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Check whether the parent or referees of a block are invalid. If one of them is invalid, the block is invalid too. "),Object(a.b)("li",{parentName:"ol"},"Check whether the nonce in the block header is correctly set based on the difficulty in the block header, i.e., the miner of the block correctly solved the POW puzzle."),Object(a.b)("li",{parentName:"ol"},"Check whether the number of referees in the block header is larger than a threshold (200). If so, the block is invalid."),Object(a.b)("li",{parentName:"ol"},"Check whether there are duplicated hashes in the parent and referees of a block. If so, the block is invalid."),Object(a.b)("li",{parentName:"ol"},"Check whether the length (in byte) of the custom field in the block header is beyond a threshold (64). If so, the block is invalid."),Object(a.b)("li",{parentName:"ol"},"Check whether the height of a block is larger than the height of its parent block by 1. If NOT, the block is invalid."),Object(a.b)("li",{parentName:"ol"},"Check whether the timestamp of a block is larger than or equal to the timestamp of its parent block. If NOT, the block is invalid."),Object(a.b)("li",{parentName:"ol"},"Check the block gas limit is correctly set. "),Object(a.b)("li",{parentName:"ol"},"Check the block difficulty is correctly set."),Object(a.b)("li",{parentName:"ol"},"Check whether the block header contains the correct transaction root according to the transactions in the block body."),Object(a.b)("li",{parentName:"ol"},"Check whether every transaction in the block body has valid signature structure."),Object(a.b)("li",{parentName:"ol"},"Check whether the total size of the transactions in the block body is larger than the block size limit (800KB). If so, the block is invalid."),Object(a.b)("li",{parentName:"ol"},"Check whether the total gas limit of transactions in the block body is larger than the block gas limit. If so, the block is invalid.")),Object(a.b)("p",null,"The validity checks 1~9 only use information in block header. The validity checks 10~13 use the information in block body. The checks 6~9 require graph structure information like parent information and are conducted on a block when the headers of all its past blocks have entered the synchronization graph. To speed up the block relay process, when both the header and body of a block have entered the synchronization graph and the headers of all its past blocks have also entered, the block can be relayed to the peers. It is not needed to wait for the bodies of all the past blocks of a block to be received in order to relay the block. This may lead to relaying invalid blocks, but since all the relayed blocks already have valid difficulty and POW settings, the attackers who make this case also pay the corresponding cost of computation power. "),Object(a.b)("p",null,"###Graph Structure Maintenance\nThe node structure of synchronization graph is defined as follows:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"pub struct SynchronizationGraphNode {\n    pub block_header: Arc<BlockHeader>,\n    // The status of graph connectivity in the current block view.\n    pub graph_status: u8,\n    // Whether the block body is ready.\n    pub block_ready: bool,\n    // Whether parent is in old era and already reclaimed\n    pub parent_reclaimed: bool,\n    // The index of the parent of the block.\n    pub parent: usize,\n    // The indices of the children of the block.\n    pub children: Vec<usize>,\n    // The indices of the blocks referenced by the block.\n    pub referees: Vec<usize>,\n    // The number of blocks referenced by the block but\n    // haven't been inserted in synchronization graph.\n    pub pending_referee_count: usize,\n    // The indices of the blocks referencing the block.\n    pub referrers: Vec<usize>,\n    // the timestamp in seconds when graph_status updated\n    pub last_update_timestamp: u64,\n}\n\n")),Object(a.b)("p",null,"The graph structure is maintained by the fields ","parent",", ","children",", ","referees",", and ","referrers",". Each node has a ","graph_status"," field representing its status changing during the period from the time when the header arrives to the time when the block is ready to be dispatched to consensus graph. "),Object(a.b)("p",null,"When a block header enters synchronization graph, it is first checked whether this block is already processed by synchronization graph.\nIf not, it will be added into the graph and the graph structure will be updated accordingly.\nFirst, the ",Object(a.b)("em",{parentName:"p"},"parent/children")," edge will be established.\nIf the parent of this newly arrived block hasn\u2019t come into synchronization graph, the graph uses a collection ","children_by_hash"," to handle this.\nThis is a map from block hash to a set of graph nodes.\nIn this case, the graph node representing this newly arrived block header will be added into the graph node set mapped from the parent block hash of this block.\nThis functions as a bookkeeping to remember the relation between the parent block hash and this newly arrived block.\nOnce this parent block comes into the synchronization graph in the future, the corresponding edge between the parent and child nodes can be established and the hash of the parent block will be removed from the ","children_by_hash"," map.\nSecondly, the ",Object(a.b)("em",{parentName:"p"},"referees/referrers")," edges will also be established.\nSimilarly, the synchronization graph uses a map ","referrers_by_hash"," to remember the relation between the unarrived referee block and the newly arrived referrer block.\nThe graph node also maintains a ","pending_referee_count"," field to remember how many referees of the block haven\u2019t come into the synchronization graph."),Object(a.b)("p",null,"A graph node may be in the following 5 status:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"// This block is an invalid block.\nconst BLOCK_INVALID: u8 = 0;\n// Just get the header of the block.\nconst BLOCK_HEADER_ONLY: u8 = 1;\n// The headers of all the blocks on the path from genesis to this block have\n// already entered synchronization graph. \nconst BLOCK_HEADER_PARENTAL_TREE_READY: u8 = 2;\n// The headers of all the blocks in the past set of this block have already entered\n// synchronization graph. \nconst BLOCK_HEADER_GRAPH_READY: u8 = 3;\n// Both the headers and bodies of all the blocks in the past set of this block have\n// entered synchronization graph.\nconst BLOCK_GRAPH_READY: u8 = 4;\n")),Object(a.b)("p",null,"When a block header just enters the synchronization graph and triggers a new graph node being created and added in the graph, the initial status of the node is ","BLOCK_HEADER_ONLY",".\nAnd according to this graph structure update, the status of other nodes in the graph may also change.\nThe effects of these changes are fulfilled by conducting a BFS traversal from the node to all its descendants.\nDuring this traversal process, for each node,\n1) if it is invalid, all its descendants are invalid;\n2) if it is new to be ","BLOCK_HEADER_GRAPH_READY",", some graph-related validity checks (6~9) are applied on it.\nIf it passes these checks, it is then checked whether its block body has already entered synchronization graph (by checking the ","block_ready"," field of the graph node).\nIf so, this block is ready to be relayed. And this block may make some of its descendants become ","BLOCK_HEADER_PARENTAL_TREE_READY"," or ","BLOCK_HEADER_GRAPH_READY",".\nNote that this cannot make its descendants become ","BLOCK_GRAPH_READY"," since the original node (at the starting point of the BFS process) for the newly arrived block header can only be ","BLOCK_HEADER_GRAPH_READY",";\n3) if it is new to be ","BLOCK_HEADER_PARENTAL_TREE_READY",", it may make some of its descendants (following the child edge) become ","BLOCK_HEADER_PARENTAL_TREE_READY","."),Object(a.b)("p",null,"When a block body just enters the synchronization graph, the corresponding graph node should already exist in synchronization graph, otherwise, the block will be ignored (this may happen if it is garbage collected).\nThe ","block_ready"," field of this node will be set as true now.\nThe block then goes through the corresponding validity checks (10~13).\nAnd similarly, this newly arrived block body will change the status of some of its descendants.\nThis is also done by conducting a BFS traversal from this node.\nDuring this traversal process, for each node,\n1) if it is invalid, all its descendants are invalid;\n2) if it is new to be ","BLOCK_GRAPH_READY",", it is dispatched to consensus graph.\nIt may make some of its descendants become ","BLOCK_GRAPH_READY",".\nIf the block with the newly arrived body is at least ","BLOCK_HEADER_GRAPH_READY",", it becomes ready to be relayed."),Object(a.b)("p",null,"###Garbage Collect Dangling Blocks\nSome (adversarial) nodes may send to a full node some blocks that cannot be in status of ","BLOCK_GRAPH_READY"," forever, e.g., to conduct DDOS attack or to be in the case of serious message delay so that the block does not belong to the current checkpoint era anymore.\nThese blocks will be held in synchronization graph but should be garbage-collected eventually to avoid wasting memory resources.\nIn order to do this, the synchronization graph maintains a set of blocks representing the frontier of these graph-unready blocks.\nA block should be a frontier block if\n1) the block is not in status of ","BLOCK_GRAPH_READY"," but its parent block is; or\n2) its parent block has not come into the synchronization graph. "),Object(a.b)("p",null,"To garbage collect these graph-unready blocks, it starts from the frontier of these blocks, and removes them and all their descendants that can be reached through BFS traversal by following children and referrers edges.\nThe reason that we must remove all the descendants of the frontier blocks from the synchronization graph is related to the design of block synchronization process.\nDuring the block synchronization, it follows the parent and referees edges of a newly arrived block and tries to fetch the missing ancestors.\nWhen it encounters such an ancestor block that already exists in synchronization graph, the process stops following its parent and referees edges further.\nTherefore, if the ancestor block is the descendant block of some frontier graph-unready block that has already been garbage collected, this removed unready block will never get chance to be fetched from peer again.\nHowever, this removed frontier block may be graph-unready merely because a temporary bad network situation which may recover later."),Object(a.b)("p",null,"This garbage collection process is triggered periodically, and in each of this process, it only tries to remove frontier blocks and their descendants which have already been in unready status for a long time.\nIn order to get the timing information, each graph node has a field ","last_update_timestamp"," to remember the timestamp of the last update of the node status."),Object(a.b)("p",null,"One optimization in the synchronization process is that it does not always fetch from peers the parent and referees of newly arrived block that are missing in memory.\nIt checks whether the height of the block is far less than the height of the local best epoch block.\nIf so, it is highly probable that the ancestors of this block exist in local database, so it deserves the effort of trying to get these blocks from local database first.\nIt is also an effective way to avoid unnecessary backward tree-graph traversing merely according to the peer information, which we also cover a bit more detail in ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/conflux-doc/docs/recovery"}),"Recovery Process")," section. "))}c.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return f}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function h(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),l=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=l(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(o.forwardRef)((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=h(e,["components","mdxType","originalType","parentName"]),d=l(n),p=o,f=d["".concat(i,".").concat(p)]||d[p]||b[p]||a;return n?r.a.createElement(f,s({ref:t},c,{components:n})):r.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var h in t)hasOwnProperty.call(t,h)&&(s[h]=t[h]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);