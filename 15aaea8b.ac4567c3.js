(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var o=n(2),a=n(9),i=(n(0),n(225)),r={},s={id:"conflux-doc/docs/test_framework",title:"test_framework",description:"Test Framework",source:"@site/docs/conflux-doc/docs/test_framework.md",permalink:"/docs/conflux-doc/docs/test_framework",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-doc/docs/test_framework.md",lastUpdatedAt:1619685098},l=[{value:"An Example Test",id:"an-example-test",children:[]},{value:"Sending P2P Messages",id:"sending-p2p-messages",children:[]},{value:"Configurations",id:"configurations",children:[]},{value:"Utility Function List",id:"utility-function-list",children:[]},{value:"Introduction to Existing Python Tests",id:"introduction-to-existing-python-tests",children:[]}],c={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"test-framework"},"Test Framework"),Object(i.b)("p",null,"The framework is written in ",Object(i.b)("inlineCode",{parentName:"p"},"python3"),". It can setup multiple Conflux nodes and test the distributed system behavior locally. It controls the nodes behavior by setting the node configurations, calling their RPCs, or sending them P2P messages directly."),Object(i.b)("p",null,"All related files are included in the directory  ",Object(i.b)("inlineCode",{parentName:"p"},"tests"),". "),Object(i.b)("p",null,"After compiling the source code with ",Object(i.b)("inlineCode",{parentName:"p"},"cargo build --release")," under the project directory, you can run ",Object(i.b)("inlineCode",{parentName:"p"},"tests/test_all.py")," to run all included python tests."),Object(i.b)("h2",{id:"an-example-test"},"An Example Test"),Object(i.b)("p",null,"Here is an example test. It setups 2 nodes, makes each node generate some blocks separately, and finally connects them to check if they can receive the blocks generated by the other."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"from test_framework.test_framework import ConfluxTestFramework\nfrom test_framework.util import *\n\nclass ExampleTest(ConfluxTestFramework):\n    def set_test_params(self):\n        self.setup_clean_chain = True\n        self.num_nodes = 2\n\n    def setup_network(self):\n        self.setup_nodes()\n        # connect_sample_nodes(self.nodes, self.log)\n\n    def run_test(self):\n        self.nodes[0].generate(1, 0)\n        assert (self.nodes[0].getblockcount() == 2)\n\n        self.nodes[1].generate(2, 0)\n        assert (self.nodes[1].getblockcount() == 3)\n\n        connect_nodes(self.nodes, 0, 1)\n        sync_blocks(self.nodes)\n        assert (self.nodes[0].getblockcount() == 4)\n        self.log.info(\"PASS\")\n\nif __name__ == '__main__':\n    ExampleTest().main()\n")),Object(i.b)("p",null,"The framework will"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Call ",Object(i.b)("inlineCode",{parentName:"li"},"set_test_params")," to set basic test initialization parameters."),Object(i.b)("li",{parentName:"ol"},"Setup the test directories and node configurations according to the parameters set in ",Object(i.b)("inlineCode",{parentName:"li"},"set_test_params"),". By default, a temp directory will be created and all files will be kept within it. For example, setting ",Object(i.b)("inlineCode",{parentName:"li"},"self.num_nodes = 2")," will initialize directories for two nodes."),Object(i.b)("li",{parentName:"ol"},"Call ",Object(i.b)("inlineCode",{parentName:"li"},"setup_network")," to add nodes and connect them. Here ",Object(i.b)("inlineCode",{parentName:"li"},"self.setup_nodes()")," will add 2 Conflux nodes by running pre-compiled Conflux executable binary within the directory setupped in step 2. We do not connect them here because we want nodes seperated at the beginning."),Object(i.b)("li",{parentName:"ol"},"Call ",Object(i.b)("inlineCode",{parentName:"li"},"run_test")," to run the actual test codes.")),Object(i.b)("p",null,"After running ",Object(i.b)("inlineCode",{parentName:"p"},"self.setup_nodes()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"self.nodes")," is a list of ",Object(i.b)("inlineCode",{parentName:"p"},"TestNode"),", and each can be used to interact with the corresponding Conflux node. For example, to get the number of blocks in node 0 by calling the RPC named ",Object(i.b)("inlineCode",{parentName:"p"},"getblockcount"),", you simply call ",Object(i.b)("inlineCode",{parentName:"p"},"self.nodes[0].getblockcount")," and an integer will be returned."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"connect_nodes(self.nodes, 0, 1)")," connects nodes 0 and 1. ",Object(i.b)("inlineCode",{parentName:"p"},"sync_blocks(self.nodes)")," waits until all nodes have the same pivot chain tip. Them are both implemented by calling RPCs, and more useful functions will be introduced in ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"#utility-function-list"}),"Utility Function List"),"."),Object(i.b)("h2",{id:"sending-p2p-messages"},"Sending P2P Messages"),Object(i.b)("p",null,"After calling ",Object(i.b)("inlineCode",{parentName:"p"},"start_p2p_connection(self.nodes)"),", the field ",Object(i.b)("inlineCode",{parentName:"p"},"p2p")," of each ",Object(i.b)("inlineCode",{parentName:"p"},"TestNode")," will be initialized with a simulated Conflux node written in Python, and this simulated node will be connected to the Conflux process controled by the corresponding ",Object(i.b)("inlineCode",{parentName:"p"},"TestNode"),". After that, you can send and receive P2P messages within python code. Here is an example about how to use ",Object(i.b)("inlineCode",{parentName:"p"},"p2p")," to interact with the Conflux node."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-python"}),"    def run_test(self):\n        def assert_length(_node, msg):\n            assert_equal(len(msg.headers), 1)\n        h = WaitHandler(self.nodes[0].p2p, GET_BLOCK_HEADERS_RESPONSE, assert_length)\n        self.nodes[0].p2p.send_protocol_msg(GetBlockHeaders(hashes=[self.nodes[0].p2p.genesis.hash]))\n        h.wait()\n")),Object(i.b)("p",null,"This example tries to get the genesis block header from node 0 with P2P requests (instead of using RPC), and asserts that only one header is returned."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"WaitHandler")," will wait for the first message of the designated message type and run a function on this received message. ",Object(i.b)("inlineCode",{parentName:"p"},"p2p.send_protocol_msg")," is used to send a rlp-encodable message. ",Object(i.b)("inlineCode",{parentName:"p"},"h.wait()")," waits and handles the first received ",Object(i.b)("inlineCode",{parentName:"p"},"GET_BLOCK_HEADERS_RESPONSE")," message. Note that ",Object(i.b)("inlineCode",{parentName:"p"},"WaitHandler")," starts listening right after it's initialized."),Object(i.b)("h2",{id:"configurations"},"Configurations"),Object(i.b)("p",null,"By default, tests will use the release version executable binary built by ",Object(i.b)("inlineCode",{parentName:"p"},"cargo"),". If you want to use a file at another path (e.g., a debug version binary), you can set the environment variable ",Object(i.b)("inlineCode",{parentName:"p"},"CONFLUX")," to the full path of the used binary file before running the tests."),Object(i.b)("p",null,"TODO"),Object(i.b)("h2",{id:"utility-function-list"},"Utility Function List"),Object(i.b)("p",null,"TODO"),Object(i.b)("h2",{id:"introduction-to-existing-python-tests"},"Introduction to Existing Python Tests"),Object(i.b)("p",null,"TODO"))}d.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),d=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=o,f=p["".concat(r,".").concat(u)]||p[u]||b[u]||i;return n?a.a.createElement(f,s(s({ref:t},c),{},{components:n})):a.a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);