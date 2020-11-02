(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{182:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),o=(n(0),n(203)),i={},s={id:"conflux-doc/docs/rigorous-testing",title:"rigorous-testing",description:"Rigorous Testing Tools for Conflux",source:"@site/docs/conflux-doc/docs/rigorous-testing.md",permalink:"/docs/conflux-doc/docs/rigorous-testing",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-doc/docs/rigorous-testing.md",lastUpdatedAt:1604298877},c=[{value:"Unit Tests and Integration Tests",id:"unit-tests-and-integration-tests",children:[]},{value:"Consensus Fuzzing Tool",id:"consensus-fuzzing-tool",children:[]},{value:"Random Tracing Test",id:"random-tracing-test",children:[]},{value:"Transaction Propagation and Performance Test",id:"transaction-propagation-and-performance-test",children:[]},{value:"Storage Benchmark Test",id:"storage-benchmark-test",children:[]},{value:"Consensus Performance Benchmark Tool",id:"consensus-performance-benchmark-tool",children:[]}],l={rightToc:c};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"rigorous-testing-tools-for-conflux"},"Rigorous Testing Tools for Conflux"),Object(o.b)("p",null,"Ensuring the correctness of a blockchain system like Conflux is a challenging\ntask. The Conflux Rust implementation repository comes with several rigorous\ntesting tools and scripts."),Object(o.b)("p",null,"Note that in some terminals, the default maximum number of open file\ndescriptors may not be enough. This is especially true if you are using Mac\nwith its default zsh terminal. You will need to change the limit to a larger\nnumber as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ ulimit -n 22288\n")),Object(o.b)("h2",{id:"unit-tests-and-integration-tests"},"Unit Tests and Integration Tests"),Object(o.b)("p",null,"Unit tests come together with the rust code. It can be invoked via ",Object(o.b)("inlineCode",{parentName:"p"},"cargo test\n--release --all")," after Conflux being complied from the source code. See the\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://conflux-chain.github.io/conflux-doc/get_started/"}),"Getting Started"),"\npage for more information. Integration tests are python test scripts ended with\n",Object(o.b)("inlineCode",{parentName:"p"},"_test.py")," in the ",Object(o.b)("inlineCode",{parentName:"p"},"tests/scripts")," directory. After compiled the ",Object(o.b)("em",{parentName:"p"},"release"),"\nversion of the Conflux from code. One can run ",Object(o.b)("inlineCode",{parentName:"p"},"tests/test_all.py")," to run all\nintegration tests together. These tests are executed routinely for every commit\nto the Conflux Rust implementation. "),Object(o.b)("h2",{id:"consensus-fuzzing-tool"},"Consensus Fuzzing Tool"),Object(o.b)("p",null,"Inside the directory ",Object(o.b)("inlineCode",{parentName:"p"},"core/benchmark/consensus/test"),", there is a random fuzzing\ntool for the consensus component. It works as follows.\n",Object(o.b)("inlineCode",{parentName:"p"},"core/benchmark/consensus/test/gen-random-graph.cpp")," is a slow C++\nimplementation of the Conflux TreeGraph consensus algorithm together with a\nrandom graph generator that generates random TreeGraph blocks in a special\nformat. ",Object(o.b)("inlineCode",{parentName:"p"},"consensus_bench")," is capable of processing this input format, run the\nConflux consensus, and compare the results with the slow C++ implementation.\n",Object(o.b)("inlineCode",{parentName:"p"},"iter-gen-random.py")," is a python script that iteratively invoke the\ngeneration-processing-comparing process. To run this fuzzing tool:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd core/benchmark/consensus/test\n$ g++ -O2 -o gen-random-graph gen-random-graph.cpp\n$ ./iter-gen-random.py 10000 3 30 10 10 100\n")),Object(o.b)("p",null,"The python script will not stop until it finds an error or you manually\nterminate it. If the python script finds an error, the ",Object(o.b)("inlineCode",{parentName:"p"},"rand.in")," file will\ncorrespond to the bug triggering input for the ",Object(o.b)("inlineCode",{parentName:"p"},"consensus_bench")," program. The\nsix parameters passed to the python scripts corresponds to the number of\nrandomly generated block per test case, the\n",Object(o.b)("inlineCode",{parentName:"p"},"TIMER_CHAIN_BLOCK_DIFFICULTY_RATIO")," parameter, the ",Object(o.b)("inlineCode",{parentName:"p"},"TIMER_CHAIN_BETA"),"\nparameter, the ",Object(o.b)("inlineCode",{parentName:"p"},"ADAPTIVE_WEIGHT_BETA")," parameter, the\n",Object(o.b)("inlineCode",{parentName:"p"},"HEAVY_BLOCK_DIFFICULTY_RATIO")," parameter, the ",Object(o.b)("inlineCode",{parentName:"p"},"ERA_EPOCH_COUNT")," parameter,\nrespectively. You can pass any legitimate consensus parameter to the python\nscript. These numbers are default that we empirically find them useful for\ndetecting bugs."),Object(o.b)("p",null,"The python script will also print out the processing speed of the consensus\ngraph in the test. The expected speed is ~1000 blocks per second (on a Mac Book\nPro 2019 laptop) and ~350 blocks per second on m5a.xlarge. If the reported\nspeed is significantly lower than expected, it typically means a potential\nperformance issue. For every release, we execute this fuzzing for at least one\nhour using the default parameters."),Object(o.b)("p",null,"Note that if you terminate this script brutally (which you will like do). It\nleaves two to three temporary directories with the ",Object(o.b)("inlineCode",{parentName:"p"},"__")," prefix and ",Object(o.b)("inlineCode",{parentName:"p"},"sqlite_db"),".\nYou should remove these directories manually."),Object(o.b)("h2",{id:"random-tracing-test"},"Random Tracing Test"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tests/conflux_tracing.py")," is a random testing script with the failure\ninjection capability. It will start a Conflux network with a fixed number of\nnodes and inject node crashes, db crashes, and node restarts during. During the\nrunning, it keep fetches states from different node and verify that these nodes\nhave the consensus for the TreeGraph and block state. To run Conflux tracing,\nyou need to first compile the release version of the Conflux Rust implementation\nfrom the source code. Then you can invoke the script as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ tests/conflux_tracing.py run\n")),Object(o.b)("p",null,"The python script will then start 10 different instances together with a mock\ninstance. It will run non-stop until it finds an error (inconsistent state or\nunexpected crash). For every release, we execute this tracing script for at\nleast one hour. "),Object(o.b)("p",null,"In case of errors, it will generate trace files ",Object(o.b)("inlineCode",{parentName:"p"},"snapshot*.json")," and\n",Object(o.b)("inlineCode",{parentName:"p"},"txs*.json")," to help diagnose the issue. Note that if you terminate this script\nbrutally (which you will likely do). It also generates these files so you may\nwant to clean them manually."),Object(o.b)("h2",{id:"transaction-propagation-and-performance-test"},"Transaction Propagation and Performance Test"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"tests/scripts/one_click.sh")," together with the remaining bash scripts in the\nsame directory provide an automatic deployment of Conflux network on AWS for\ntesting the simple payment TPS and transaction pool performance. You can run\nthis test as follows:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"First you need to download and install AWS CLI tools. Properly configure the\nAWS credential for the CLI tool.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Make your default public key registered as a named key pair in ",Object(o.b)("em",{parentName:"p"},"the us-west-2 region"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Decide the branch of the Conflux repo you want to test. Note that this\nscript pulls the source code from a GitHub repo that contains the Conflux rust\nimplementation and compile them on the fly. You cannot run your local Conflux\ncopy with this script. If you do not specify the repo/branch name, it will pull\nfrom the official Conflux-rust repo from the GitHub.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Run the following command:"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd tests/scripts\n$ ./one_click.sh key-pair-name 20 branch-name [repo-name]\n")),Object(o.b)("p",null,"This will start 20 instances at the us-west-2 region together with a random\ntransaction generator. It will take roughly 15 minutes to setup the experiments\nand then 20 minutes to finish the run. In the end, it will report the TPS\nperformance. The expected good TPS number is ~4000TPS. If you get a TPS number\nmuch lower than the expectation, there is a performance regression at the\ntransaction pool or at the storage layer. For every release, we run this script\nto test its performance."),Object(o.b)("h2",{id:"storage-benchmark-test"},"Storage Benchmark Test"),Object(o.b)("p",null,"The storage layer in Conflux is often the performance bottleneck.\n",Object(o.b)("inlineCode",{parentName:"p"},"core/benchmark/storage")," therefore contains a benchmark tool to measure the\nperformance of the storage layer, eliminating other layer from the execution.\nWe also converted Ethereum network history payment transactions (first ~4m\nblocks) as the benchmark traces. Here are steps to run the storage benchmark\ntest:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"From the AWS S3 ",Object(o.b)("inlineCode",{parentName:"p"},"conflux-storage-bench")," bucket, download ",Object(o.b)("inlineCode",{parentName:"p"},"foundation.json"),"\nand ",Object(o.b)("inlineCode",{parentName:"p"},"eth_from_0_to_4141811_txs.rlp.tar.gz"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Untar the rlp history file to obtain ",Object(o.b)("inlineCode",{parentName:"p"},"eth_from_0_to_4141811_txs.rlp"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Go to ",Object(o.b)("inlineCode",{parentName:"p"},"core/benchmark/storage")," and run ",Object(o.b)("inlineCode",{parentName:"p"},"cargo build --release")," to compile\nthe binary ",Object(o.b)("inlineCode",{parentName:"p"},"storage_bench"),".")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create a temporary directory ",Object(o.b)("inlineCode",{parentName:"p"},"tmp_storage_db")," for holding the blockchain\ndatabase generated in the experiment.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Invoke the following command:"))),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ cd core/benchmark/storage\n$ RUST_BACKTRACE=full target/release/storage_bench run -g /path/to/foundation.json -t /path/to/eth_from_0_to_4141811_txs.rlp -d /path/to/tmp_storage_db --txs_to_process 30000000 --skip 1156773812\n")),Object(o.b)("p",null,"This command will process the first 30 million transactiosn from the parsed\nhistory file and then quit. It is a good idea to time the running time of this\ncommand for computing the achieved processing throughput of the storage layer.\nThe performance will largely depend on the quality of the underlying disk I/O.\nIn MacBook Pro 2019, the throughput is 25000-30000 TPS. In m5a.xlarge, the\nthroughput is 15000-20000 TPS. If the performance is lower than the\nexpectation, it indicates a potential regression at the storage layer. For\nevery relealse, we will run this test to check the storage layer performance."),Object(o.b)("h2",{id:"consensus-performance-benchmark-tool"},"Consensus Performance Benchmark Tool"),Object(o.b)("p",null,"The consensus implementation is typically fast and can process close to one\nthousand blocks per second in the normal scenarios. However, if the TreeGraph\nis unstable and it contains a lot of forks, the consensus component may fail\nback to slow routines. Its performance under such unstable scenarios is\ncritical because it corresponds to the catch-up speed during DoS attacks.\n",Object(o.b)("inlineCode",{parentName:"p"},"tests/attack_bench")," contains a list of python scripts to benchmark the\nconsensus performance under attack scenarios:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"fork_same_height_merge.py")," creates a unstable TreeGraph with roughly 95000\nblocks. In the TreeGraph, it has three branches and in each branch there are\nstar shape forks attached at a fixed height. It corresponds to one worst case\nscenario for the consensus procesing engine. The expected speed is ~70 blocks/s\non MacBook Pro 2019 and ~45 blocks/s on m5a.xlarge.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"fork_same_height_hiding.py")," tests the scenario where an attacker tries to\nactively mine at a fixed height, hides the mined blocks, and release them\ntogether. It measures the block generation capaiblity of the victim at this\nscenario. The expected generation speed is always faster than 1000 blocks in\nless than 1 minutes. ")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"fork_same_height_attack.py")," tests a similar attack as 2 but the attacker\ndoes not hide the blocks. The expected generation speed is always faster than\n100 blocks in less than 10 seconds.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"fork_chain_hiding.py")," tests the scenario where an attacker tries to\nactively mine a separate chain, hides the mined blocks, and release them\ntogether. The expected generation speed of the victim is always faster than 100\nblocks in less than 10 seconds.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("inlineCode",{parentName:"p"},"fork_chain_attack.py")," tests a similar attack as 4 but the attacker does not\nhide the blocks. The expected generation speed of the victim is always faster\nthan 100 blocks in less than 10 seconds."))),Object(o.b)("p",null,"Note that 2, 3, and 5 are long running test scripts and you can terminate the\nexecution after the speed stablizes. For every release, we run these scripts to\nmake sure that there is no performance regression."))}p.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,m=h["".concat(i,".").concat(u)]||h[u]||b[u]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);