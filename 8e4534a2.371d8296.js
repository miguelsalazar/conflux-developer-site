(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"default",(function(){return s}));var a=n(1),r=n(9),l=(n(0),n(203)),o={id:"installation",title:"Installation",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/install.md",keywords:["conflux","install"]},i={id:"conflux-doc/docs/installation",title:"Installation",description:"# Installation",source:"@site/docs/conflux-doc/docs/install.md",permalink:"/docs/conflux-doc/docs/installation",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/install.md",lastUpdatedBy:"ConfluxBot",lastUpdatedAt:1587270637,sidebar:"docs",previous:{title:"Conflux Overview",permalink:"/docs/introduction/en/conflux_overview"},next:{title:"Getting Started",permalink:"/docs/conflux-doc/docs/get_started"}},c={};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h1",{id:"user-content-installation"},"Installation"),Object(l.b)("p",null,"Here is a step by step guide on how to build Conflux from the source code and get a node running."),Object(l.b)("h2",{id:"user-content-install-build-dependencies"},"Install Build Dependencies"),Object(l.b)("p",null,"Conflux requires ",Object(l.b)("strong",{parentName:"p"},"Rust 1.42.0")," to build,  ","clang",", and ","sqlite"," to build."),Object(l.b)("p",null,"We recommend installing Rust through ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.rustup.rs/"}),"rustup"),". If you don't already have ","rustup"," or ","clang",", you can install them like this:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Linux:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"  $ curl https://sh.rustup.rs -sSf | sh\n  $ rustup install 1.42.0\n")),Object(l.b)("p",{parentName:"li"},"  ","clang"," and ","sqlite"," can be installed with:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Ubuntu:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"  $ sudo apt-get install clang libsqlite3-dev\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"CentOS / RHEL: "),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"  $ sudo yum install clang sqlite-devel\n"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"OSX:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"  $ curl https://sh.rustup.rs -sSf | sh\n  $ rustup install 1.42.0\n")),Object(l.b)("p",{parentName:"li"},"  You might need to install ","brew"," if you need to use it to install ","clang",":"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},'  $ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),Object(l.b)("p",{parentName:"li"},"  ","clang"," comes with Xcode command line tools, and can also be installed with homebrew:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"  $ brew install llvm    \n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Windows:"),Object(l.b)("p",{parentName:"li"},"  Make sure you have Visual Studio 2015 with C++ support installed. Next, download and run the ","rustup"," installer from ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe"}),"https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe"),', start "VS2015 x64 Native Tools Command Prompt", and use the following command to install and set up the ',"msvc"," toolchain:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"  $ rustup default stable-x86_64-pc-windows-msvc\n")),Object(l.b)("p",{parentName:"li"},"  ","clang"," can be installed with LLVM. Pre-built binaries can be downloaded from ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://releases.llvm.org/download.html#8.0.0"}),"Download LLVM"),". Make sure to add LLVM to the system PATH as instructed."))),Object(l.b)("p",null,"Make sure that these binaries are in your ","PATH"," (the instruction will be shown after installing ","rustup","). After that, you should be able to build Conflux from source."),Object(l.b)("h2",{id:"user-content-build-from-source-code"},"Build from Source Code"),Object(l.b)("p",null,"After installing the dependencies mentioned above, now you can clone our repository and start building the executable binary:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"# download Conflux code\n$ git clone https://github.com/Conflux-Chain/conflux-rust\n$ cd conflux-rust\n$ git checkout v0.1.7\n\n\n# build in release mode\n$ cargo build --release\n")),Object(l.b)("p",null,"This produces an executable in the ","./target/release"," subdirectory."),Object(l.b)("p",null,"You may encounter dependency issues in Ubuntu. If so, you will want to install\nlibssl-dev and cmake pacakges with the following command:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"|   $ sudo apt-get install pkg-config libssl-dev cmake\n")),Object(l.b)("p",null,"Note, when compiling a crate and you receive errors, it's in most cases your\noutdated version of Rust, or some of your crates have to be recompiled.\nCleaning the repository will most likely solve the issue if you are on the\nlatest stable version of Rust, try:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"$ cargo clean && cargo update\n")),Object(l.b)("p",null,"To start running a Conflux full node, you can follow the instructions at ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/conflux-doc/docs/get_started#running-conflux-full-node"}),"Running Conflux Full Node"),"."),Object(l.b)("h2",{id:"user-content-install-test-dependencies"},"Install Test Dependencies"),Object(l.b)("p",null,"We have a test framework written in Python3 (version>=3.6). Required packages can be installed by running"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"$ ./dev-support/dep_pip3.sh\n")),Object(l.b)("p",null,"Solidity compiler ","solc"," is also required, and be installed as follows:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Ubuntu"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"  sudo add-apt-repository ppa:ethereum/ethereum\n  sudo apt-get update\n  sudo apt-get install solc\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"OSX"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",{parentName:"pre"},"  brew update\n  brew upgrade\n  brew tap ethereum/ethereum\n  brew install solidity\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"Others"),Object(l.b)("p",{parentName:"li"},"  You can follow the detailed instructions at ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://solidity.readthedocs.io/en/v0.5.7/installing-solidity.html#binary-packages"}),"Installing the Solidity Compiler"),"."),Object(l.b)("p",{parentName:"li"},"  Note that latest solidity compiler may be incompatible with Conflux and may cause the integration test to fail. If you encounter such problem, please install solidity compiler version 0.5.2."))),Object(l.b)("p",null,"To run tests, you can build the source code first and follow the instructions at ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/conflux-doc/docs/get_started#running-test"}),"Running Test"),"."))}s.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),u=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||l;return n?r.a.createElement(m,i({ref:t},s,{components:n})):r.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);