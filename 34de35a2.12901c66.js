(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(207)),c={id:"e2e_test_demo",title:"A Demo Dapp We Are Using To Test ConfluxPortal",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Quick_Start/E2E_Tets_Dapp.md"},l={id:"conflux-portal/docs/en/portal/Examples/e2e_test_demo",title:"A Demo Dapp We Are Using To Test ConfluxPortal",description:"Here is a page for testing Conflux",source:"@site/docs/conflux-portal/docs/en/portal/Examples/E2E_Tets_Dapp.md",permalink:"/docs/conflux-portal/docs/en/portal/Examples/e2e_test_demo",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Quick_Start/E2E_Tets_Dapp.md",lastUpdatedAt:1599444650},p=[],i={rightToc:p};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://conflux-portal-docs.conflux-chain.org/e2e_test_demo/"}),"Here")," is a page for testing Conflux\nPortal functions. It contains code examples for testing:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"connect to ConfluxPortal"),Object(a.b)("li",{parentName:"ul"},"deploy contract on Conflux Testnet"),Object(a.b)("li",{parentName:"ul"},"send CFX"),Object(a.b)("li",{parentName:"ul"},"deploy a ERC20 token and send the token"),Object(a.b)("li",{parentName:"ul"},"get user accounts"),Object(a.b)("li",{parentName:"ul"},"use ",Object(a.b)("inlineCode",{parentName:"li"},"personal_sign")," to sign data"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cfx_sign")," (deprecated)")),Object(a.b)("p",null,"You can find the source code on\n",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Conflux-Chain/conflux-portal/blob/develop/test/e2e/contract-test/contract.js"}),"github"),"\nor just download the page and use it at your purpose."))}u.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),u=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=r,b=s["".concat(c,".").concat(d)]||s[d]||f[d]||a;return n?o.a.createElement(b,l(l({ref:t},i),{},{components:n})):o.a.createElement(b,l({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);