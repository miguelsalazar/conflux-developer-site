(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{216:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(9),o=(n(0),n(225)),i={id:"signing_data_with_portal",title:"Signing Data with ConfluxPortal",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/API_Reference/Signing_Data.md"},c={id:"conflux-portal/docs/en/portal/API_Reference/signing_data_with_portal",title:"Signing Data with ConfluxPortal",description:"History of the signing methods",source:"@site/docs/conflux-portal/docs/en/portal/API_Reference/Signing_Data.md",permalink:"/docs/conflux-portal/docs/en/portal/API_Reference/signing_data_with_portal",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/API_Reference/Signing_Data.md",lastUpdatedAt:1618459200,sidebar:"docs",previous:{title:"Portal Provider API",permalink:"/docs/conflux-portal/docs/en/portal/API_Reference/provider_api"}},l=[{value:"History of the signing methods",id:"history-of-the-signing-methods",children:[]},{value:"What changed in ConfluxPortal",id:"what-changed-in-confluxportal",children:[]},{value:"Demo",id:"demo",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"history-of-the-signing-methods"},"History of the signing methods"),Object(o.b)("p",null,"Portal is forked from MetaMask and there are multiple signing methods in MetaMask. You can read the history of all the signing methods in ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://docs.metamask.io/guide/signing-data.html#a-brief-history"}),"MetaMask documentation"),"."),Object(o.b)("p",null,"We reserved all these methods and made some changes. The usage and intention of all these methods are not changed. We will follow EIP-712 if there's new spec, say v5 of typed sign."),Object(o.b)("h2",{id:"what-changed-in-confluxportal"},"What changed in ConfluxPortal"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"In Ethereum's ecdsa sign method, the ",Object(o.b)("inlineCode",{parentName:"li"},"v")," (in r, s, v) is affected by the ",Object(o.b)("inlineCode",{parentName:"li"},"chainId"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/yqrashawn/confluxjs-util/compare/59e9849ac291c7bb2318f804b8f4b02277bf5bca...master#diff-332ce297a81989a8b375f3bb70deb2ec"}),"we don't count ",Object(o.b)("inlineCode",{parentName:"a"},"chainId")," in this method")," at Conflux. This affects all signing methods including signing the transaction."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/yqrashawn/confluxjs-util/compare/59e9849ac291c7bb2318f804b8f4b02277bf5bca...master#diff-332ce297a81989a8b375f3bb70deb2ecR126"}),"We changed the prefix message")," from ",Object(o.b)("inlineCode",{parentName:"li"},"\\u0019Ethereum Signed Message:\\n")," to ",Object(o.b)("inlineCode",{parentName:"li"},"\\u0019Conflux Signed Message:\\n")," in the ",Object(o.b)("inlineCode",{parentName:"li"},"personal_sign")," method.")),Object(o.b)("h2",{id:"demo"},"Demo"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://conflux-portal-docs.conflux-chain.org/e2e_test_demo/"}),"Here")," is a demo page for testing ConfluxPortal. There's example code of calling ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_signTypedData_v4"),", ",Object(o.b)("inlineCode",{parentName:"p"},"personal_sign")," and ",Object(o.b)("inlineCode",{parentName:"p"},"cfx_sign")," in it."))}d.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,b=p["".concat(i,".").concat(u)]||p[u]||f[u]||o;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);