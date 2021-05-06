(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{109:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var l=n(3),o=n(7),r=(n(0),n(131)),a={id:"installation",title:"Compile from Source",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/install.md",keywords:["conflux","install"]},i={unversionedId:"conflux-doc/docs/installation",id:"conflux-doc/docs/installation",isDocsHomePage:!1,title:"Compile from Source",description:"Here is a step by step guide on how to build Conflux from the source code and get a node running.",source:"@site/docs/conflux-doc/docs/install.md",sourceDirName:"conflux-doc/docs",slug:"/conflux-doc/docs/installation",permalink:"/conflux-doc/docs/installation",editUrl:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/install.md",version:"current",frontMatter:{id:"installation",title:"Compile from Source",custom_edit_url:"https://github.com/Conflux-Chain/conflux-doc/edit/master/docs/install.md",keywords:["conflux","install"]},sidebar:"docs",previous:{title:"Papers",permalink:"/introduction/en/conflux_papers"},next:{title:"Run a Node",permalink:"/conflux-doc/docs/get_started"}},c=[{value:"Install Build Dependencies",id:"install-build-dependencies",children:[{value:"Linux",id:"linux",children:[]},{value:"OSX",id:"osx",children:[]},{value:"Windows",id:"windows",children:[]}]},{value:"Build from Source Code",id:"build-from-source-code",children:[]},{value:"Install Test Dependencies",id:"install-test-dependencies",children:[]}],s={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(l.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Here is a step by step guide on how to build Conflux from the source code and get a node running."),Object(r.b)("h2",{id:"install-build-dependencies"},"Install Build Dependencies"),Object(r.b)("p",null,"Conflux requires ",Object(r.b)("strong",{parentName:"p"},"Rust 1.47.0"),", ",Object(r.b)("inlineCode",{parentName:"p"},"clang"),", and ",Object(r.b)("inlineCode",{parentName:"p"},"sqlite")," to build."),Object(r.b)("p",null,"We recommend installing Rust through ",Object(r.b)("a",{parentName:"p",href:"https://www.rustup.rs/"},"rustup"),". If you don't already have ",Object(r.b)("inlineCode",{parentName:"p"},"rustup")," or ",Object(r.b)("inlineCode",{parentName:"p"},"clang"),", you can install them like this:"),Object(r.b)("h3",{id:"linux"},"Linux"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh\n$ rustup install 1.47.0\n")),Object(r.b)("p",null,"Other dependencies including ",Object(r.b)("inlineCode",{parentName:"p"},"clang"),", ",Object(r.b)("inlineCode",{parentName:"p"},"cmake (version >= 3.1)")," and ",Object(r.b)("inlineCode",{parentName:"p"},"sqlite (version >= 3.8.3)")," can be installed with:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ubuntu 18.04:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ sudo apt-get install clang libsqlite3-dev pkg-config libssl-dev cmake\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"CentOS 7 / RHEL:")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ sudo yum install epel-release\n$ sudo yum install clang gcc gcc-c++ openssl-devel cmake3 wget\n\n# This may fail if you have installed cmake with version 2.8.\n# You can choose to uninstall cmake first.\n$ sudo ln -s /usr/bin/cmake3 /usr/bin/cmake\n\n# The official sqlite version on CentOS 7 is 3.7.17, so we need to install the latest version from the source code.\n# The source code have be downloaded from https://www.sqlite.org/download.html\n$ wget https://www.sqlite.org/2020/sqlite-autoconf-3320100.tar.gz\n$ tar xfvz sqlite-autoconf-3320100.tar.gz\n$ cd sqlite-autoconf-3320100\n$ ./configure\n$ make\n$ sudo make install\n")),Object(r.b)("h3",{id:"osx"},"OSX"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ curl https://sh.rustup.rs -sSf | sh\n$ rustup install 1.47.0\n")),Object(r.b)("p",null,"You might need to install ",Object(r.b)("inlineCode",{parentName:"p"},"brew")," if you need to use it to install ",Object(r.b)("inlineCode",{parentName:"p"},"clang"),":"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},'$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"clang")," comes with Xcode command line tools, and can also be installed with homebrew:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ brew install llvm\n")),Object(r.b)("h3",{id:"windows"},"Windows"),Object(r.b)("p",null,"Make sure you have Visual Studio 2015 with C++ support installed. Next, download and run the ",Object(r.b)("inlineCode",{parentName:"p"},"rustup")," installer from ",Object(r.b)("a",{parentName:"p",href:"https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe"},"this link"),", start ",Object(r.b)("inlineCode",{parentName:"p"},"VS2015 x64 Native Tools Command Prompt"),", and use the following command to install and set up the ",Object(r.b)("inlineCode",{parentName:"p"},"msvc")," toolchain:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ rustup default stable-x86_64-pc-windows-msvc\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"clang")," can be installed with LLVM. Pre-built binaries can be downloaded from ",Object(r.b)("a",{parentName:"p",href:"https://releases.llvm.org/download.html#8.0.0"},"Download LLVM"),". Make sure to add LLVM to the system PATH as instructed."),Object(r.b)("p",null,"Make sure that these binaries are in your ",Object(r.b)("inlineCode",{parentName:"p"},"PATH")," (the instruction will be shown after installing ",Object(r.b)("inlineCode",{parentName:"p"},"rustup"),"). After that, you should be able to build Conflux from source."),Object(r.b)("h2",{id:"build-from-source-code"},"Build from Source Code"),Object(r.b)("p",null,"After installing the dependencies mentioned above, now you can clone our repository and start building the executable binary:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"# download Conflux code\n$ git clone https://github.com/Conflux-Chain/conflux-rust\n$ cd conflux-rust\n$ git checkout v1.1.0\n\n\n# build in release mode\n$ cargo build --release\n")),Object(r.b)("p",null,"This produces an executable in the ",Object(r.b)("inlineCode",{parentName:"p"},"./target/release")," subdirectory."),Object(r.b)("p",null,"Note, when compiling a crate and you receive errors, it's in most cases your\noutdated version of Rust, or some of your crates have to be recompiled.\nCleaning the repository will most likely solve the issue if you are on the\nlatest stable version of Rust, try:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ cargo clean && cargo update\n")),Object(r.b)("p",null,"To start running a Conflux full node, you can follow the instructions at ",Object(r.b)("a",{parentName:"p",href:"/conflux-doc/docs/get_started#running-conflux-full-node"},"Running Conflux Full Node"),"."),Object(r.b)("h2",{id:"install-test-dependencies"},"Install Test Dependencies"),Object(r.b)("p",null,"We have a test framework written in Python3 (version>=3.6). Required packages can be installed by running"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-bash"},"$ ./dev-support/dep_pip3.sh\n")),Object(r.b)("p",null,"Solidity compiler ",Object(r.b)("inlineCode",{parentName:"p"},"solc")," is also required, and be installed as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Ubuntu")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ sudo add-apt-repository ppa:ethereum/ethereum\n$ sudo apt-get update\n$ sudo apt-get install solc\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"OSX")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"$ brew update\n$ brew upgrade\n$ brew tap ethereum/ethereum\n$ brew install solidity\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Others")),Object(r.b)("p",null,"You can follow the detailed instructions at ",Object(r.b)("a",{parentName:"p",href:"https://solidity.readthedocs.io/en/v0.5.7/installing-solidity.html#binary-packages"},"Installing the Solidity Compiler"),"."),Object(r.b)("p",null,"Note that latest solidity compiler may be incompatible with Conflux and may cause the integration test to fail. If you encounter such problem, please install solidity compiler version 0.5.2."),Object(r.b)("p",null,"To run tests, you can build the source code first and follow the instructions at ",Object(r.b)("a",{parentName:"p",href:"/conflux-doc/docs/get_started#running-test"},"Running Test"),"."))}u.isMDXComponent=!0},131:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var l=n(0),o=n.n(l);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,l,o=function(e,t){if(null==e)return{};var n,l,o={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),p=l,m=d["".concat(a,".").concat(p)]||d[p]||b[p]||r;return n?o.a.createElement(m,i(i({ref:t},s),{},{components:n})):o.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,a=new Array(r);a[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<r;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);