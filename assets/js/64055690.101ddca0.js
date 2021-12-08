(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(164)),i={},c={unversionedId:"conflux-rust/README",id:"conflux-rust/README",isDocsHomePage:!1,title:"Conflux-Rust",description:"Conflux-rust is a Rust-based implementation of the Conflux protocol. It is fast and",source:"@site/docs/conflux-rust/README.md",sourceDirName:"conflux-rust",slug:"/conflux-rust/README",permalink:"/conflux-rust/README",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/conflux-rust/README.md",version:"current",frontMatter:{}},s=[{value:"Contribution",id:"contribution",children:[]},{value:"Unit Tests and Integration Tests",id:"unit-tests-and-integration-tests",children:[]},{value:"Resources",id:"resources",children:[]},{value:"License",id:"license",children:[]}],u={toc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Conflux-rust is a Rust-based implementation of the Conflux protocol. It is fast and\nreliable. Please follow the ",Object(a.b)("a",{parentName:"p",href:"https://developer.conflux-chain.org/"},"Conflux\nDocumentation")," to\n",Object(a.b)("a",{parentName:"p",href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/installation"},"build"),"\nand\n",Object(a.b)("a",{parentName:"p",href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/get_started"},"run"),"\nConflux."),Object(a.b)("h2",{id:"contribution"},"Contribution"),Object(a.b)("p",null,"Thank you for considering helping out with our source code. We appreciate any\ncontributions, even the smallest fixes. Please read the\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/blob/master/CONTRIBUTING.md"},"guidelines"),"\non how to submit issues and pull requests. Note that if you want to propose\nsignificant changes to the Conflux protocol, please submit a\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/CIPs"},"CIP"),"."),Object(a.b)("h2",{id:"unit-tests-and-integration-tests"},"Unit Tests and Integration Tests"),Object(a.b)("p",null,"Unit tests come together with the Rust code. They can be invoked via ",Object(a.b)("inlineCode",{parentName:"p"},"cargo test\n--release --all"),". See the\n",Object(a.b)("a",{parentName:"p",href:"https://developer.conflux-chain.org/docs/conflux-doc/docs/get_started"},"Getting Started"),"\npage for more information. Integration tests are Python test scripts with the\n",Object(a.b)("inlineCode",{parentName:"p"},"_test.py")," suffix in the ",Object(a.b)("inlineCode",{parentName:"p"},"tests")," directory. To run these tests, first compile Conflux\nin ",Object(a.b)("em",{parentName:"p"},"release")," mode using ",Object(a.b)("inlineCode",{parentName:"p"},"cargo build --release"),". Then, you can run all\nintegration tests using the script ",Object(a.b)("inlineCode",{parentName:"p"},"tests/test_all.py"),"."),Object(a.b)("h2",{id:"resources"},"Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.conflux-chain.org/"},"Conflux Website")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://www.confluxscan.io/"},"Conflux Scan")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://arxiv.org/abs/1805.03870"},"Conflux Paper")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://medium.com/@ConfluxNetwork"},"Medium"))),Object(a.b)("h2",{id:"license"},"License"),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/blob/master/LICENSE"},"GNU General Public License v3.0")))}l.isMDXComponent=!0},164:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=r,d=p["".concat(i,".").concat(f)]||p[f]||b[f]||a;return n?o.a.createElement(d,c(c({ref:t},u),{},{components:n})):o.a.createElement(d,c({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=n[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);