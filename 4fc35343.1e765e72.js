(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{162:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(9),o=(n(0),n(207)),c={id:"injected_namespace",title:"Injected Name Space",custom_edit_url:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Differences_With_MetaMask/Injected_Name_Space.md"},i={id:"conflux-portal/docs/en/portal/Differences_With_MetaMask/injected_namespace",title:"Injected Name Space",description:"MetaMask inject a window.web3 (will be deprecated soon) and a",source:"@site/docs/conflux-portal/docs/en/portal/Differences_With_MetaMask/Injected_Name_Space.md",permalink:"/docs/conflux-portal/docs/en/portal/Differences_With_MetaMask/injected_namespace",editUrl:"https://github.com/Conflux-Chain/conflux-portal-docs/edit/master/docs/en/portal/Differences_With_MetaMask/Injected_Name_Space.md",lastUpdatedAt:1599444650},p=[],l={rightToc:p};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"MetaMask inject a ",Object(o.b)("inlineCode",{parentName:"p"},"window.web3")," (will be deprecated soon) and a\n",Object(o.b)("inlineCode",{parentName:"p"},"window.ethereum")," in user pages. The corresponding conflux global variables are\n",Object(o.b)("inlineCode",{parentName:"p"},"window.confluxJS")," and ",Object(o.b)("inlineCode",{parentName:"p"},"window.conflux"),"  "),Object(o.b)("p",null,"MetaMask has the api ",Object(o.b)("inlineCode",{parentName:"p"},"window.ethereum.isMetaMask")," for developer to check if the\nMetaMask version of provider is available. ConfluxPortal change that to\n",Object(o.b)("inlineCode",{parentName:"p"},"window.conflux.isConfluxPortal"),". "))}u.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=u(n),f=r,b=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return n?a.a.createElement(b,i(i({ref:t},l),{},{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);