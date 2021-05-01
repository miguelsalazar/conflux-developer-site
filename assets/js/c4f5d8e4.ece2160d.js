(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{131:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return E}));var a=r(0),n=r.n(a),l=r(135),i=r(141),o=r(138),c=r(16),s=r(120),u=r.n(s),d=r(3),f=r(121),m=r.n(f),p=r(215),h=r.n(p),y=[{title:h.a.en.LearnAboutConflux,Svg:r(216).default,description:n.a.createElement(n.a.Fragment,null,h.a.en["homepage/LearnDescription"]),link:"/docs/introduction/en/conflux_overview",buttonText:"Learn"},{title:h.a.en.RunANode,Svg:r(217).default,description:n.a.createElement(n.a.Fragment,null,h.a.en["homepage/RunDescription"]),link:"/docs/conflux-doc/docs/get_started",buttonText:"Run"},{title:h.a.en.StartBuild,Svg:r(218).default,description:n.a.createElement(n.a.Fragment,null,h.a.en["homepage/BuildDescription"]),link:"/docs/conflux-doc/docs/send_transaction",buttonText:"Build"}];function g(e){var t=e.Svg,r=e.title,a=e.description,i=e.buttonText,o=e.link;return n.a.createElement("div",{className:Object(l.a)("col col--4")},n.a.createElement("div",{className:"text--center"},n.a.createElement(t,{className:m.a.featureSvg,alt:r})),n.a.createElement("div",{className:"text--center padding-horiz--md"},n.a.createElement("h3",null,r),n.a.createElement("p",null,a),n.a.createElement("p",null,n.a.createElement("a",{className:Object(l.a)("button button--secondary"),href:o},i))))}function x(){return n.a.createElement("section",{className:m.a.features},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},y.map((function(e,t){return n.a.createElement(g,Object(d.a)({key:t},e))})))))}function v(){var e=Object(c.default)().siteConfig;return n.a.createElement("header",{className:Object(l.a)("hero hero--primary",u.a.heroBanner)},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"hero__title"},e.title),n.a.createElement("p",{className:"hero__subtitle"},e.tagline),n.a.createElement("div",{className:u.a.buttons},n.a.createElement(o.a,{className:"button button--secondary button--lg",to:"/docs/introduction/en/conflux_overview"},"Get Started"))))}function E(){var e=Object(c.default)().siteConfig;return n.a.createElement(i.a,{title:"Hello from "+e.title,description:"Description will go into a meta tag in <head />"},n.a.createElement(v,null),n.a.createElement("main",null,n.a.createElement(x,null)))}},215:function(e,t){e.exports={en:{Docs:"Docs",Community:"Community",Social:"Social",getStarted:"Get Started",Overview:"Overview",Scalability:"Scalability",Extensibility:"Extensibility",Security:"Security","homepage/generalDescription":"Where Valuable Bits are Exchanged and Validated","homepage/scalabilityDescription":"By adopting an scalability consensus mechanism and safely retaining fork blocks, Conflux realized a high throughput rate of 3000-6000 TPS in our real-network testing.","homepage/extensibilityDescription":"Blockchain oracle combined with cryptographic tools to realize powerful features such as external data feeding, confidential data control, and beyond.","homepage/securityDescription":"Ensured by 2 Dimensional protection - Anti double-spend attack protection (consensus-level) and contract code proofreading (application-level).",LearnAboutConflux:"Learn about Conflux",RunANode:"Run a Node",StartBuild:"Start Build","homepage/LearnDescription":"Learn about the technical details of the Conflux protocol: ledger structure, consensus, internal contracts, incentive mechanisms and etc","homepage/RunDescription":"Learn how to get a Conflux client, run a mainnet or testnet node, run an independent chain, run a light client","homepage/BuildDescription":"Conflux provides SDKs(JavaScript, Go, Java, Python), tools and services to help developers build Dapps on the Conflux chain"},"zh-hans":{Docs:"\u6587\u6863",Community:"\u793e\u533a",Social:"\u5a92\u4f53",getStarted:"\u5f00\u59cb\u4f53\u9a8c",Scalability:"\u6269\u5bb9\u6027",Extensibility:"\u5ef6\u5c55\u6027",Security:"\u5b89\u5168\u6027",Overview:"\u6982\u89c8","homepage/generalDescription":"\u4ef7\u503c\u6bd4\u7279 \u4e92\u4fe1\u4e92\u4eab","homepage/scalabilityDescription":"Conflux \u91c7\u7528\u72ec\u6709\u7684\u53ef\u6269\u5bb9\u5171\u8bc6\u7b97\u6cd5\uff0c\u901a\u8fc7\u5b89\u5168\u5730\u4fdd\u7559\u5206\u53c9\u533a\u5757\uff0c\u5728 20000 \u4e2a\u8282\u70b9\u7684\u771f\u5b9e\u7f51\u7edc\u6d4b\u8bd5\u73af\u5883\u4e2d TPS \u8fbe\u5230 3000\uff5e6000\uff0c\u9886\u5148\u884c\u4e1a\u3002","homepage/extensibilityDescription":"Conflux \u4f7f\u7528\u533a\u5757\u9884\u8a00\u673a\u5e76\u914d\u5408\u5bc6\u7801\u5b66\u5de5\u5177\uff0c\u5b9e\u73b0\u6570\u636e\u4e0a\u94fe\u4e0e\u9690\u79c1\u6570\u636e\u63a7\u5236\u7b49\u529f\u80fd\uff0c\u4ee5\u6269\u5c55\u4f7f\u7528\u573a\u666f\u3002","homepage/securityDescription":"\u4ece\u5171\u8bc6\u5c42\u7684\u53cd\u53cc\u82b1\u653b\u51fb\uff0c\u5230\u5e94\u7528\u5c42\u7684\u5408\u7ea6\u4ee3\u7801\u68c0\u67e5\uff0cConflux \u4ece\u59cb\u81f3\u7ec8\u4e3a\u5b89\u5168\u4fdd\u9a7e\u62a4\u822a\u3002",LearnAboutConflux:"Learn about Conflux",RunANode:"Run a Node",StartBuild:"Start Build","homepage/LearnDescription":"Learn about the technical details of the Conflux protocol: ledger structure, consensus, internal contracts, incentive mechanisms and etc","homepage/RunDescription":"Learn how to get a Conflux client, run a mainnet or testnet node, run an independent chain, run a light client","homepage/BuildDescription":"Conflux provides SDKs(JavaScript, Go, Java, Python), tools and services to help developers build Dapps on the Conflux chain"}}},216:function(e,t,r){"use strict";r.r(t);var a,n,l=r(0);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}t.default=function(e){var t=e.title,r=e.titleId,c=o(e,["title","titleId"]);return l.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:320,height:140,viewBox:"0 0 320 140","aria-labelledby":r},c),t?l.createElement("title",{id:r},t):null,a||(a=l.createElement("defs",null,l.createElement("radialGradient",{id:"security-dark_svg__c",cx:"50%",cy:"0%",r:"100%",fx:"50%",fy:"0%"},l.createElement("stop",{offset:"0%",stopColor:"#266865"}),l.createElement("stop",{offset:"100%",stopColor:"#1A2A5B"})),l.createElement("filter",{id:"security-dark_svg__a",width:"134%",height:"134%",x:"-17%",y:"-16%",filterUnits:"objectBoundingBox"},l.createElement("feMorphology",{in:"SourceAlpha",operator:"dilate",radius:.5,result:"shadowSpreadOuter1"}),l.createElement("feOffset",{dy:1,in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}),l.createElement("feGaussianBlur",{in:"shadowOffsetOuter1",result:"shadowBlurOuter1",stdDeviation:5}),l.createElement("feColorMatrix",{in:"shadowBlurOuter1",values:"0 0 0 0 0.109803922 0 0 0 0 0.149019608 0 0 0 0 0.262745098 0 0 0 1 0"})),l.createElement("circle",{id:"security-dark_svg__b",cx:50,cy:50,r:50}))),n||(n=l.createElement("g",{transform:"translate(108 24)",fill:"none",fillRule:"evenodd"},l.createElement("circle",{cx:80.5,cy:57.5,r:39.5,stroke:"#FFF",opacity:.5}),l.createElement("circle",{cx:113.5,cy:79.5,r:6.5,fill:"#FFF",stroke:"#FFF",strokeWidth:.3,opacity:.8}),l.createElement("use",{fill:"#000",filter:"url(#security-dark_svg__a)",xlinkHref:"#security-dark_svg__b"}),l.createElement("use",{fill:"url(#security-dark_svg__c)",xlinkHref:"#security-dark_svg__b"}),l.createElement("ellipse",{cx:49.265,cy:52.092,fill:"#FFF",opacity:.3,rx:1.765,ry:1.792}),l.createElement("path",{stroke:"#FFF",d:"M49.434 26l22.433 38H27z"}),l.createElement("ellipse",{cx:2.227,cy:2.262,rx:2.227,ry:2.262,fill:"#FFF",transform:"rotate(30 -18.669 102.002)"}),l.createElement("path",{stroke:"#FFF",strokeLinecap:"square",strokeWidth:.64,opacity:.3,d:"M49.25 25v38.619M60.5 46.5l-33 17M71.5 63.619L38.5 46.5"}),l.createElement("ellipse",{cx:2.227,cy:2.262,rx:2.227,ry:2.262,fill:"#FFF",transform:"rotate(30 -98.712 79.45)"}),l.createElement("g",{fill:"#FFF",transform:"rotate(30 -76.712 161.555)"},l.createElement("ellipse",{cx:2.227,cy:2.262,rx:2.227,ry:2.262})))))}},217:function(e,t,r){"use strict";r.r(t);var a,n,l=r(0);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}t.default=function(e){var t=e.title,r=e.titleId,c=o(e,["title","titleId"]);return l.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:320,height:140,viewBox:"0 0 320 140","aria-labelledby":r},c),t?l.createElement("title",{id:r},t):null,a||(a=l.createElement("defs",null,l.createElement("radialGradient",{id:"extensive-dark_svg__c",cx:"50%",cy:"0%",r:"100%",fx:"50%",fy:"0%"},l.createElement("stop",{offset:"0%",stopColor:"#266765"}),l.createElement("stop",{offset:"100%",stopColor:"#1A285C"})),l.createElement("filter",{id:"extensive-dark_svg__a",width:"134%",height:"134%",x:"-17%",y:"-16%",filterUnits:"objectBoundingBox"},l.createElement("feMorphology",{in:"SourceAlpha",operator:"dilate",radius:.5,result:"shadowSpreadOuter1"}),l.createElement("feOffset",{dy:1,in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}),l.createElement("feGaussianBlur",{in:"shadowOffsetOuter1",result:"shadowBlurOuter1",stdDeviation:5}),l.createElement("feColorMatrix",{in:"shadowBlurOuter1",values:"0 0 0 0 0.109803922 0 0 0 0 0.121568627 0 0 0 0 0.254901961 0 0 0 1 0"})),l.createElement("circle",{id:"extensive-dark_svg__b",cx:50,cy:72,r:50}))),n||(n=l.createElement("g",{transform:"translate(110 2)",fill:"none",fillRule:"evenodd"},l.createElement("circle",{cx:83.5,cy:39.5,r:39.5,stroke:"#FFF",opacity:.5}),l.createElement("use",{fill:"#000",filter:"url(#extensive-dark_svg__a)",xlinkHref:"#extensive-dark_svg__b"}),l.createElement("use",{fill:"url(#extensive-dark_svg__c)",xlinkHref:"#extensive-dark_svg__b"}),l.createElement("ellipse",{cx:2.227,cy:2.262,rx:2.227,ry:2.262,fill:"#FFF",transform:"rotate(30 -64.551 132.296)"}),l.createElement("circle",{cx:50.5,cy:70.5,r:28.5,stroke:"#FFF"}),l.createElement("ellipse",{cx:2.227,cy:2.262,rx:2.227,ry:2.262,fill:"#FFF",opacity:.3,transform:"rotate(30 -142.228 111.11)"}),l.createElement("circle",{cx:47.5,cy:73.5,r:23.5,stroke:"#FFF",opacity:.3}))))}},218:function(e,t,r){"use strict";r.r(t);var a,n,l=r(0);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}t.default=function(e){var t=e.title,r=e.titleId,c=o(e,["title","titleId"]);return l.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:320,height:140,viewBox:"0 0 320 140","aria-labelledby":r},c),t?l.createElement("title",{id:r},t):null,a||(a=l.createElement("defs",null,l.createElement("radialGradient",{id:"scalability-dark_svg__c",cx:"50%",cy:"0%",r:"100%",fx:"50%",fy:"0%"},l.createElement("stop",{offset:"0%",stopColor:"#266A65"}),l.createElement("stop",{offset:"100%",stopColor:"#19255C"})),l.createElement("filter",{id:"scalability-dark_svg__a",width:"134%",height:"134%",x:"-17%",y:"-16%",filterUnits:"objectBoundingBox"},l.createElement("feMorphology",{in:"SourceAlpha",operator:"dilate",radius:.5,result:"shadowSpreadOuter1"}),l.createElement("feOffset",{dy:1,in:"shadowSpreadOuter1",result:"shadowOffsetOuter1"}),l.createElement("feGaussianBlur",{in:"shadowOffsetOuter1",result:"shadowBlurOuter1",stdDeviation:5}),l.createElement("feColorMatrix",{in:"shadowBlurOuter1",values:"0 0 0 0 0.105882353 0 0 0 0 0.105882353 0 0 0 0 0.250980392 0 0 0 1 0"})),l.createElement("circle",{id:"scalability-dark_svg__b",cx:90,cy:52,r:50}))),n||(n=l.createElement("g",{transform:"translate(66 22)",fill:"none",fillRule:"evenodd"},l.createElement("circle",{cx:44.5,cy:39.5,r:39.5,stroke:"#F4F4F4",opacity:.5}),l.createElement("circle",{cx:6.5,cy:28.5,r:6.5,fill:"#FFF",stroke:"#FFF",strokeWidth:.3,opacity:.8}),l.createElement("use",{fill:"#000",filter:"url(#scalability-dark_svg__a)",xlinkHref:"#scalability-dark_svg__b"}),l.createElement("use",{fill:"url(#scalability-dark_svg__c)",xlinkHref:"#scalability-dark_svg__b"}),l.createElement("g",{transform:"rotate(30 -15.367 180.084)"},l.createElement("path",{stroke:"#FFF",strokeLinecap:"square",strokeWidth:.64,d:"M2.227 2.424v38.619"}),l.createElement("ellipse",{cx:2.227,cy:2.262,fill:"#FFF",rx:2.227,ry:2.262}),l.createElement("ellipse",{cx:2.227,cy:39.75,fill:"#FFF",rx:2.227,ry:2.262})),l.createElement("g",{opacity:.3},l.createElement("g",{transform:"rotate(30 -30.24 217.638)"},l.createElement("path",{stroke:"#FFF",strokeLinecap:"square",strokeWidth:.64,d:"M1.765 1.92v30.6"}),l.createElement("ellipse",{cx:1.765,cy:1.792,fill:"#FFF",rx:1.765,ry:1.792}),l.createElement("ellipse",{cx:1.765,cy:31.496,fill:"#FFF",rx:1.765,ry:1.792})),l.createElement("g",{transform:"rotate(30 7.947 206.04)"},l.createElement("path",{stroke:"#FFF",strokeLinecap:"square",strokeWidth:.64,d:"M2.227 2.424v38.619"}),l.createElement("ellipse",{cx:2.227,cy:2.262,fill:"#FFF",rx:2.227,ry:2.262}),l.createElement("ellipse",{cx:2.227,cy:39.75,fill:"#FFF",rx:2.227,ry:2.262}))))))}}}]);