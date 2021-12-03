(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{113:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return b})),t.d(n,"metadata",(function(){return l})),t.d(n,"toc",(function(){return r})),t.d(n,"default",(function(){return p}));var a=t(3),i=t(7),c=(t(0),t(157)),b={id:"transaction_explain",title:"Conflux \u4ea4\u6613\u8be6\u89e3",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/zh/sending-tx-ultimate-guide.md",keywords:["transaction"]},l={unversionedId:"sending-tx/zh/transaction_explain",id:"sending-tx/zh/transaction_explain",isDocsHomePage:!1,title:"Conflux \u4ea4\u6613\u8be6\u89e3",description:"\u53d1\u9001\u4ea4\u6613\uff08Transaction\uff09 \u662f\u540c Conflux \u7f51\u7edc\u4ea4\u4e92\u7684\u552f\u4e00\u65b9\u5f0f\uff0c\u4e0d\u7ba1\u662f\u53d1\u9001 CFX \u8fd8\u662f\u540c\u5408\u7ea6\u4ea4\u4e92\uff08\u4fee\u6539\u5408\u7ea6\u94fe\u4e0a\u72b6\u6001\uff09\u90fd\u53ea\u80fd\u901a\u8fc7\u53d1\u9001\u4ea4\u6613\u6765\u5b9e\u73b0\u3002",source:"@site/docs/sending-tx/zh/sending-tx-ultimate-guide.md",sourceDirName:"sending-tx/zh",slug:"/sending-tx/zh/transaction_explain",permalink:"/sending-tx/zh/transaction_explain",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/zh/sending-tx-ultimate-guide.md",version:"current",frontMatter:{id:"transaction_explain",title:"Conflux \u4ea4\u6613\u8be6\u89e3",custom_edit_url:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/sending-tx/zh/sending-tx-ultimate-guide.md",keywords:["transaction"]}},r=[{value:"\u5982\u4f55\u6784\u9020\u4e00\u7b14\u4ea4\u6613",id:"\u5982\u4f55\u6784\u9020\u4e00\u7b14\u4ea4\u6613",children:[{value:"\u57fa\u672c\u5b57\u6bb5",id:"\u57fa\u672c\u5b57\u6bb5",children:[]},{value:"nonce",id:"nonce",children:[]},{value:"\u624b\u7eed\u8d39\u76f8\u5173\u5b57\u6bb5",id:"\u624b\u7eed\u8d39\u76f8\u5173\u5b57\u6bb5",children:[]},{value:"data",id:"data",children:[]},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",children:[]}]},{value:"\u4ea4\u6613\u7f16\u7801\u548c\u7b7e\u540d",id:"\u4ea4\u6613\u7f16\u7801\u548c\u7b7e\u540d",children:[]},{value:"\u5982\u4f55\u67e5\u8be2\u4ea4\u6613\u8be6\u60c5\u548c\u72b6\u6001",id:"\u5982\u4f55\u67e5\u8be2\u4ea4\u6613\u8be6\u60c5\u548c\u72b6\u6001",children:[]},{value:"\u5982\u4f55\u5224\u65ad\u4e00\u7b14\u4ea4\u6613\u88ab\u786e\u8ba4",id:"\u5982\u4f55\u5224\u65ad\u4e00\u7b14\u4ea4\u6613\u88ab\u786e\u8ba4",children:[]},{value:"\u4ea4\u6613\u53d1\u9001\u5931\u8d25\u7684\u539f\u56e0",id:"\u4ea4\u6613\u53d1\u9001\u5931\u8d25\u7684\u539f\u56e0",children:[{value:"Rejected by RPC",id:"rejected-by-rpc",children:[]},{value:"Stucked in transaction pool",id:"stucked-in-transaction-pool",children:[]},{value:"Executed failed",id:"executed-failed",children:[]}]},{value:"\u8ddf\u4ee5\u592a\u574a\u7684\u533a\u522b",id:"\u8ddf\u4ee5\u592a\u574a\u7684\u533a\u522b",children:[]}],o={toc:r};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u53d1\u9001\u4ea4\u6613\uff08Transaction\uff09 \u662f\u540c Conflux \u7f51\u7edc\u4ea4\u4e92\u7684\u552f\u4e00\u65b9\u5f0f\uff0c\u4e0d\u7ba1\u662f\u53d1\u9001 CFX \u8fd8\u662f\u540c\u5408\u7ea6\u4ea4\u4e92\uff08\u4fee\u6539\u5408\u7ea6\u94fe\u4e0a\u72b6\u6001\uff09\u90fd\u53ea\u80fd\u901a\u8fc7\u53d1\u9001\u4ea4\u6613\u6765\u5b9e\u73b0\u3002\n\u53d1\u9001\u4ea4\u6613\u5305\u542b\u4e09\u4e2a\u6b65\u9aa4\uff1a\u4ea4\u6613\u6784\u9020\uff0c\u7b7e\u540d\uff0c\u53d1\u9001\u3002\u901a\u5e38\u5404\u8bed\u8a00 SDK \u4f1a\u63d0\u4f9b\u5c01\u88c5\u597d\u7684\u65b9\u6cd5\uff0c\u76f4\u63a5\u8c03\u7528\u5373\u53ef\u3002\n\u4f46\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5e95\u5c42\u7ec6\u8282\uff0c\u6216\u8005\u53d1\u9001\u4ea4\u6613\u9047\u5230\u4e86\u95ee\u9898\uff0c\u672c\u6587\u53ef\u80fd\u4f1a\u6709\u4e00\u4e9b\u5e2e\u52a9\u3002"),Object(c.b)("h2",{id:"\u5982\u4f55\u6784\u9020\u4e00\u7b14\u4ea4\u6613"},"\u5982\u4f55\u6784\u9020\u4e00\u7b14\u4ea4\u6613"),Object(c.b)("p",null,"\u6784\u9020\u4e00\u7b14\u4ea4\u6613\u9996\u5148\u9700\u8981\u51c6\u5907\u4ea4\u6613\u7684\u5404\u4e2a\u5b57\u6bb5\uff0c\u5305\u62ec\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"from")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"to")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"value")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"nonce")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"data")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"gas")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"gasPrice")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"storageLimit")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"chainId")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"epochHeight"))),Object(c.b)("h3",{id:"\u57fa\u672c\u5b57\u6bb5"},"\u57fa\u672c\u5b57\u6bb5"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"from"),", ",Object(c.b)("inlineCode",{parentName:"p"},"to"),", ",Object(c.b)("inlineCode",{parentName:"p"},"value")," \u662f\u4e00\u7b14\u4ea4\u6613\u7684\u6700\u57fa\u672c\u5b57\u6bb5\uff0c\u5206\u522b\u8868\u793a\u4ea4\u6613\u7684",Object(c.b)("inlineCode",{parentName:"p"},"\u53d1\u8d77\u8d26\u6237"),"\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"\u76ee\u7684\u8d26\u6237"),"\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"\u91d1\u989d"),"\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"from")," \u975e\u5e38\u5bb9\u6613\u786e\u5b9a\uff0c\u76f4\u63a5\u9009\u62e9\u4e00\u4e2a\u6709 CFX \u4f59\u989d\u7684\u5916\u90e8\u8d26\u6237\uff08\u975e\u5408\u7ea6\u8d26\u6237\uff09\u5730\u5740\u5373\u53ef\u3002\u5982\u679c\u4ea4\u6613\u7684\u76ee\u7684\u8d26\u6237\u662f\u4e00\u4e2a\u6709 sponsor \u7684\u5408\u7ea6\uff0c\u53d1\u8d77\u8d26\u6237\u751a\u81f3\u4e0d\u8981\u6c42\u6709 CFX \u4f59\u989d\u3002\u8d26\u6237\u7684\u4f59\u989d\u53ef\u4ee5\u901a\u8fc7 RPC ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_getBalance")," \u65b9\u6cd5\u67e5\u8be2\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"to")," \u662f\u4ea4\u6613\u7684\u76ee\u7684\u8d26\u6237\uff1a\u5982\u679c\u53ea\u662f\u60f3\u53d1\u8d77\u4e00\u7b14 CFX \u8f6c\u8d26\uff0c\u90a3 ",Object(c.b)("inlineCode",{parentName:"p"},"to")," \u76f4\u63a5\u8bbe\u4e3a CFX \u76ee\u7684\u8d26\u6237\u5373\u53ef\uff1b\u5982\u679c\u9700\u8981\u6539\u53d8\u5408\u7ea6\u72b6\u6001\uff0c\u5219 ",Object(c.b)("inlineCode",{parentName:"p"},"to")," \u9700\u8981\u8bbe\u7f6e\u4e3a\u5408\u7ea6\u5730\u5740\uff1b\u5982\u679c\u662f\u521b\u5efa\u5408\u7ea6\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"to")," \u76f4\u63a5\u7559\u7a7a\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"value")," \u8868\u793a\u4e00\u7b14\u4ea4\u6613\u7684 CFX \u8f6c\u8d26\u91d1\u989d\uff0c\u9700\u8bbe\u7f6e\u4e00\u4e2a\u5355\u4f4d\u4e3a Drip \u7684\u6574\u6570\u3002"),Object(c.b)("h3",{id:"nonce"},"nonce"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"nonce")," \u662f\u4e00\u4e2a\u8d26\u6237\u5df2\u7ecf\u53d1\u9001\u4ea4\u6613\u7684\u6570\u91cf\uff0c\u4e5f\u662f\u4e00\u4e2a\u8d26\u6237\u53d1\u9001\u4ea4\u6613\u7684\u6267\u884c\u5e8f\u53f7\uff0c\u53ef\u4ee5\u901a\u8fc7 RPC \u65b9\u6cd5 ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_getNextNonce")," \u67e5\u8be2\uff0c\u6709\u4ee5\u4e0b\u51e0\u4e2a\u7279\u70b9\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u4ea4\u6613\u5728\u533a\u5757\u94fe\u4e0a\u7684\u6267\u884c\u662f\u6309\u7167 nonce \u4ece\u5c0f\u5230\u5927\u7684\u987a\u5e8f\u6267\u884c\u3002"),Object(c.b)("li",{parentName:"ol"},"nonce \u521d\u59cb\u503c\u662f 0\uff0c\u6bcf\u6267\u884c\u4e00\u7b14\u4ea4\u6613 nonce \u52a0\u4e00\u3002"),Object(c.b)("li",{parentName:"ol"},"\u4f7f\u7528\u8fc7\u7684 nonce \u4e0d\u80fd\u518d\u6b21\u4f7f\u7528"),Object(c.b)("li",{parentName:"ol"},"nonce \u4e0d\u80fd\u8df3\u8dc3\u4f7f\u7528\uff1a\u5047\u8bbe\u67d0\u8d26\u6237\u7684\u5f53\u524d nonce \u4e3a n\uff0c\u5982\u679c\u628a\u4ea4\u6613\u7684 nonce \u8bbe\u7f6e\u4e3a >n \u7684\u503c\uff0c\u5219\u4ea4\u6613\u4e0d\u4f1a\u6267\u884c\uff0c\u76f4\u5230 nonce < n \u7684\u6240\u6709\u4ea4\u6613\u6267\u884c\u5b8c\u6210\uff0cnonce \u4e3a n \u7684\u4ea4\u6613\u624d\u4f1a\u88ab\u6267\u884c\u3002"),Object(c.b)("li",{parentName:"ol"},"\u4ea4\u6613\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"li"},"cfx_sendRawTransaction")," \u65b9\u6cd5\u53d1\u9001\u4e4b\u540e\uff0c\u4e0d\u4f1a\u7acb\u523b\u6267\u884c\uff0c\u9700\u8981\u5148\u7b49\u5f85\u77ff\u5de5\u6253\u5305\uff0c\u6253\u5305\u540e\u8fd8\u9700\u8981\u5ef6\u8fdf 5 \u4e2a Epoch \u624d\u4f1a\u6267\u884c\uff0c\u4ea4\u6613\u6267\u884c\u4e4b\u540e\uff0c\u8d26\u6237\u7684 nonce \u624d\u4f1a\u52a0\u4e00\u3002")),Object(c.b)("p",null,"\u6b63\u786e\u8bbe\u7f6e nonce\uff0c\u662f\u4ea4\u6613\u80fd\u987a\u5229\u6267\u884c\u7684\u5173\u952e\uff0c\u8bb8\u591a\u5f00\u53d1\u8005\u4f1a\u9047\u5230\u4ea4\u6613\u53d1\u9001\u6210\u529f\uff0c\u4f46\u4e00\u76f4\u65e0\u6cd5\u67e5\u8be2\u5230\u6267\u884c\u7ed3\u679c\uff08Receipt\uff09\u7684\u60c5\u51b5\uff0c\u5927\u90e8\u5206\u662f\u56e0\u4e3a\u4f7f\u7528\u4e86\u4e00\u4e2a\u8df3\u8dc3\u7684 nonce\uff0c\u800c\u81f4\u4f7f\u4ea4\u6613\u88ab\u5361\u5728\u4ea4\u6613\u6c60\u4e2d\uff0c\u4e00\u76f4\u7b49\u5f85\u5176\u524d\u8fb9\u7684\u4ea4\u6613\u6267\u884c\u3002"),Object(c.b)("p",null,"\u4f7f\u7528 SDK \u6784\u9020\u4ea4\u6613\u65f6\uff0cnonce \u53ef\u4ee5\u4e0d\u7528\u624b\u52a8\u8bbe\u7f6e\uff0cSDK \u4f1a\u81ea\u52a8\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_getNonce")," \u6765\u83b7\u53d6 nonce\u3002\u4f46\u5982\u679c\u4f60\u9700\u8981\u6279\u91cf\u53d1\u9001\u4ea4\u6613\uff0c\u7531\u4e8e\u4ea4\u6613\u4ece\u53d1\u9001\u5230\u6267\u884c\u9700\u8981\u4e00\u6bb5\u65f6\u95f4\uff0c\u4ea4\u6613\u53d1\u9001\u8fc7\u5feb\uff0c\u4f7f\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_getNonce")," \u83b7\u53d6 nonce \u65b9\u5f0f\u4f1a\u5bfc\u81f4 nonce \u91cd\u590d\u4f7f\u7528\u7684\u95ee\u9898\u3002\u8fd9\u79cd\u60c5\u51b5\u9700\u8981\u5f00\u53d1\u8005\u624b\u52a8\u7ba1\u7406 nonce\uff1a\u6bcf\u53d1\u9001\u4e00\u7b14\u4ea4\u6613\u8bb0\u5f55\u4ea4\u6613\u7684 hash\uff0c\u5e76\u81ea\u884c nonce \u52a0\u4e00\uff0c\u5e76\u7528\u5b83\u6765\u6784\u5efa\u4ea4\u6613\u3002"),Object(c.b)("h3",{id:"\u624b\u7eed\u8d39\u76f8\u5173\u5b57\u6bb5"},"\u624b\u7eed\u8d39\u76f8\u5173\u5b57\u6bb5"),Object(c.b)("p",null,"\u4ea4\u6613\u53d1\u9001\u5230\u7f51\u7edc\u4e2d\u540e\uff0c\u662f\u7531\u77ff\u5de5\u8d1f\u8d23\u6253\u5305\u548c\u6267\u884c\u7684\u3002\u77ff\u5de5\u6253\u5305\u4ea4\u6613\u4f1a\u6536\u53d6\u4e00\u5b9a\u7684\u624b\u7eed\u8d39\uff0c\u8be5\u8d39\u7528\u53ef\u4ee5\u6fc0\u52b1\u77ff\u5de5\u53c2\u4e0e\u6316\u77ff\uff0c\u4ece\u800c\u4fdd\u8bc1\u6574\u4e2a\u7f51\u7edc\u7684\u6301\u7eed\u8fd0\u8f6c\u3002\n\u5728 Conflux \u7f51\u7edc\u4e2d\u4ea4\u6613\u8d39\u7528\u4f7f\u7528 CFX \u652f\u4ed8\u3002\u7531\u4ea4\u6613\u53d1\u8d77\u8005\u901a\u8fc7\u4ea4\u6613\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"gas")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"gasPrice")," \u4e24\u4e2a\u5b57\u6bb5\u6307\u5b9a\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"gas")," \u5b57\u6bb5\u7528\u4e8e\u6307\u5b9a\u4e00\u7b14\u4ea4\u6613\u88ab\u6267\u884c\u65f6\u6700\u5927\u80fd\u88ab\u652f\u4ed8\u7684 gas \u6570\u91cf\u4e0a\u9650\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u4ea4\u6613\u6267\u884c\u6240\u80fd\u6d88\u8017 gas \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"limit")," \u5373 ",Object(c.b)("inlineCode",{parentName:"p"},"gas(gasLimit)"),"\u3002\u77ff\u5de5\u6267\u884c\u4ea4\u6613\u65f6\uff0c\u5185\u90e8\u4f1a\u6267\u884c\u8bb8\u591a\u6307\u4ee4\uff0c\u4e0d\u540c\u7684\u6307\u4ee4\u4f1a\u6d88\u8017\u4e0d\u540c\u6570\u91cf\u7684 gas\u3002\u5982\u679c\u4ea4\u6613\u5b9e\u9645\u6267\u884c\u6d88\u8017 gas \u603b\u6570\u8d85\u8fc7\u4ea4\u6613\u6307\u5b9a\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"gas(gasLimit)"),"\uff0c\u4ea4\u6613\u6267\u884c\u5c06\u4f1a\u5931\u8d25\u3002\u666e\u901a\u7684 CFX \u8f6c\u8d26\u4ea4\u6613\u4f1a\u6d88\u8017 ",Object(c.b)("inlineCode",{parentName:"p"},"21000")," gas\u3002\u5982\u679c\u4e0e\u5408\u7ea6\u4ea4\u4e92\uff0c\u5219\u6d88\u8017\u7684 gas \u8ddf\u5408\u7ea6\u5bf9\u5e94\u7684 opcode \u590d\u6742\u7a0b\u5ea6\u76f8\u5173\uff0c\u8fd9\u79cd\u60c5\u51b5\u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," \u65b9\u6cd5\u6765\u9884\u4f30\u3002\u8be5\u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e24\u4e2a gas \u76f8\u5173\u5b57\u6bb5 ",Object(c.b)("inlineCode",{parentName:"p"},"gasUsed"),", ",Object(c.b)("inlineCode",{parentName:"p"},"gasLimit")," \u524d\u8005\u4e3a\u9884\u4f30\u65f6\u4ea4\u6613\u6267\u884c\u5b9e\u9645\u6d88\u8017\u7684 gas \u6570\u91cf\uff0c\u540e\u8005\u4e3a\u53d1\u9001\u4ea4\u6613\u5efa\u8bae\u8bbe\u7f6e\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"gas(gasLimit)")," \u503c\uff0c\u4f1a\u6bd4 ",Object(c.b)("inlineCode",{parentName:"p"},"gasUsed")," \u7565\u5927\uff0c\u4e3b\u8981\u4e3a\u4e86\u907f\u514d\u9884\u4f30\u4e0d\u51c6\u786e\uff08\u504f\u5c0f\uff09\u5bfc\u81f4\u4ea4\u6613\u5931\u8d25\u7684\u60c5\u51b5\u3002\u4ea4\u6613\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"gas(gasLimit)")," \u503c\u6bd4\u5b9e\u9645\u4f7f\u7528\u7684 gas \u591a\u7684\u90e8\u5206\u5c06\u4f1a\u88ab\u9000\u56de\uff0c\u4f46\u6700\u591a\u53ea\u4f1a\u9000\u56de ",Object(c.b)("inlineCode",{parentName:"p"},"gas(gasLimit)")," \u7684\u56db\u5206\u4e4b\u4e00\u3002\u56e0\u6b64\u5408\u7406\u7684\u8bbe\u7f6e\u4ea4\u6613 ",Object(c.b)("inlineCode",{parentName:"p"},"gas(gasLimit)")," \u975e\u5e38\u91cd\u8981\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"gasPrice")," \u662f\u7531\u4ea4\u6613\u53d1\u8d77\u8005\u8bbe\u7f6e\u7684\u613f\u4e3a\u6bcf gas \u652f\u4ed8\u7684 CFX \u6570\u91cf\uff0c\u5355\u4f4d\u4e3a Drip\u3002\u56e0\u6b64\u4ea4\u6613\u6267\u884c\u88ab\u6536\u53d6\u7684 gas \u8d39\u7528\u8ba1\u7b97\u65b9\u6cd5\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"gas(gasLimit)")," * ",Object(c.b)("inlineCode",{parentName:"p"},"gasPrice"),"\u3002"),Object(c.b)("p",null,"\u77ff\u5de5\u6253\u5305\u4ea4\u6613\u65f6\u4f1a\u4f18\u5148\u6253\u5305\u652f\u4ed8\u8d39\u7528\u8f83\u9ad8\u7684\u4ea4\u6613\uff0c\u56e0\u6b64\u5982\u679c\u7f51\u7edc\u6bd4\u8f83\u62e5\u5835\u7684\u65f6\u5019\uff0c\u901a\u8fc7\u63d0\u9ad8 ",Object(c.b)("inlineCode",{parentName:"p"},"gasPrice")," \u503c\u53ef\u4ee5\u52a0\u5feb\u4ea4\u6613\u7684\u6253\u5305\u901f\u5ea6\u3002\u5982\u679c\u4ea4\u6613\u56e0\u4e3a\u67d0\u79cd\u539f\u56e0\u88ab\u5361\u4e3b\uff0c\u6216\u8005\u60f3\u52a0\u5feb\u4ea4\u6613\u7684\u6253\u5305\u901f\u5ea6\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u63d0\u9ad8 ",Object(c.b)("inlineCode",{parentName:"p"},"gasPrice")," \u5e76\u4f7f\u7528\u76f8\u540c\u7684 nonce \u91cd\u53d1\u4e00\u6b21\u3002Fullnode \u63d0\u4f9b\u4e86\u4e00\u4e2a RPC \u65b9\u6cd5 ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_gasPrice")," \u4f1a\u6839\u636e\u5f53\u524d\u7684\u7f51\u7edc\u60c5\u51b5\uff0c\u8fd4\u56de\u4e00\u4e2a\u5408\u7406\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"gasPrice")," \u503c\u3002"),Object(c.b)("p",null,"\u9664\u4e86\u4ea4\u6613\u624b\u7eed\u8d39\uff0c\u5728 Conflux \u7f51\u7edc\u4e2d\uff0c\u5982\u679c\u53d1\u9001\u7684\u4ea4\u6613\u6267\u884c\u540e\u5360\u7528\u4e86\u65b0\u7684\u5b58\u50a8\u7a7a\u95f4\uff0c\u5219\u8fd8\u9700\u4e3a\u8be5\u7a7a\u95f4\u5360\u7528\u62b5\u62bc\u4e00\u4e9b CFX\uff0c\u62b5\u62bc CFX \u4ea7\u751f\u7684\u5e74\u5316 %4 \u5229\u606f\u4f1a\u652f\u4ed8\u7ed9\u77ff\u5de5\u3002\u5982\u679c\u5360\u7528\u7684\u7a7a\u95f4\u88ab\u91ca\u653e\uff0c\u62b5\u62bc\u7684 CFX \u4e5f\u5c06\u4f1a\u88ab\u5f52\u8fd8\u3002\u5177\u4f53\u62b5\u62bc\u89c4\u5219\u4e3a\uff0c\u6bcf\u65b0\u5360\u7528 1KB \u7a7a\u95f4\uff0c\u9700\u8981\u62b5\u62bc 1CFX\u3002",Object(c.b)("inlineCode",{parentName:"p"},"storageLimit")," \u5b57\u6bb5\u7528\u4e8e\u6307\u5b9a\u4e00\u7b14\u4ea4\u6613\u6267\u884c\u6240\u80fd\u5360\u7a7a\u7684\u7a7a\u95f4\u4e0a\u9650\uff0c\u5355\u4f4d\u4e3a byte\u3002",Object(c.b)("inlineCode",{parentName:"p"},"storageLimit")," \u6307\u5b9a\u503c\u6bd4\u5b9e\u9645\u4f7f\u7528\u591a\u7684\u90e8\u5206\u4f1a\u5168\u90e8\u9000\u56de\uff0c\u4e0d\u6536\u53d6\u8d39\u7528\u3002"),Object(c.b)("p",null,"\u56e0\u6b64\u5f53\u53d1\u9001\u4e00\u7b14\u4ea4\u6613\u65f6\uff0c\u9700\u8981\u4fdd\u8bc1\u53d1\u9001\u8d26\u6237\u6709\u8db3\u591f\u7684\u4f59\u989d\u652f\u4ed8\uff1a",Object(c.b)("inlineCode",{parentName:"p"},"value + storageLimit * (10^18/1024) + gas * gasPrice"),"\uff0c\u5982\u679c\u4f59\u989d\u4e0d\u591f\uff0c\u4ea4\u6613\u53ef\u80fd\u4f1a\u88ab\u5361\u5728\u4ea4\u6613\u6c60\u4e2d\u3002\u5982\u679c\u662f\u8ddf\u5408\u7ea6\u4ea4\u4e92\u7684\u4ea4\u6613\uff0c\u5e76\u4e14\u5408\u7ea6\u6709\u8d5e\u52a9\u5546\uff0c\u5219\u53ea\u9700\u4fdd\u8bc1\u4f59\u989d\u591f\u652f\u4ed8 value \u5373\u53ef\u3002"),Object(c.b)("p",null,"\u5f53\u524d\u5404 SDK \u4f1a\u81ea\u52a8\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_estimateGasAndCollateral")," \u65b9\u6cd5\u4e3a\u4ea4\u6613\u8bbe\u7f6e\u5408\u7406\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"gas"),", ",Object(c.b)("inlineCode",{parentName:"p"},"storageLimit")," \u503c\uff0c\u5e76\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_gasPrice")," \u65b9\u6cd5\u8bbe\u7f6e\u5408\u7406\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"gasPrice")," \u503c\uff0c\u5f53\u7136\u4e5f\u652f\u6301\u7528\u6237\u81ea\u884c\u6307\u5b9a\u66f4\u5408\u7406\u7684\u503c\u3002"),Object(c.b)("h3",{id:"data"},"data"),Object(c.b)("p",null,"\u4ea4\u6613\u7684 data \u5b57\u6bb5\uff0c\u53ef\u4ee5\u4e3a\u7a7a\uff0c\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u4e00\u4e2a hex \u7f16\u7801\u7684\u5b57\u8282\u6570\u7ec4\u3002\u5927\u81f4\u5206\u4e3a\u4e09\u79cd\u60c5\u51b5\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u666e\u901a CFX \u8f6c\u8d26\u4ea4\u6613\uff1a",Object(c.b)("inlineCode",{parentName:"li"},"data")," \u5b57\u6bb5\u901a\u5e38\u4e3a\u7a7a\uff0c\u4f46\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a hex \u7f16\u7801\u7684\u6570\u636e\uff0c\u901a\u5e38\u7528\u4e8e\u4f5c\u4e3a\u4ea4\u6613\u5907\u6ce8\u6216\u9644\u8a00\u3002"),Object(c.b)("li",{parentName:"ul"},"\u5408\u7ea6\u90e8\u7f72\u4ea4\u6613\uff1a",Object(c.b)("inlineCode",{parentName:"li"},"data")," \u9700\u8981\u8bbe\u7f6e\u4e3a\u5408\u7ea6\u7684 bytecode\uff0c\u4ee5\u53ca\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\uff08\u5982\u679c\u6709\u7684\u8bdd\uff09"),Object(c.b)("li",{parentName:"ul"},"\u5408\u7ea6\u8c03\u7528\u4ea4\u6613\uff1a",Object(c.b)("inlineCode",{parentName:"li"},"data")," \u5b57\u6bb5\u7528\u4e8e\u5b58\u653e\u5408\u7ea6\u8c03\u7528\u7684\u8f93\u5165\u6570\u636e\uff0c\u901a\u5e38\u662f\u5408\u7ea6\u65b9\u6cd5\u53ca\u53c2\u6570 abi \u7f16\u7801\u540e\u7684\u6570\u636e\uff0c\u5f53\u8c03\u7528\u5408\u7ea6 fallback \u51fd\u6570\u65f6 data \u7559\u7a7a\u5373\u53ef")),Object(c.b)("p",null,"\u667a\u80fd\u5408\u7ea6\u901a\u5e38\u7531\u9ad8\u7ea7\u5408\u7ea6\u5f00\u53d1\u8bed\u8a00\uff08Solidity\uff0c vyper\uff09\u7f16\u5199\uff0c\u7136\u540e\u4f7f\u7528\u7f16\u8bd1\u5668\u8fdb\u884c\u7f16\u8bd1\u5373\u53ef\u5f97\u5230 bytecode \u548c abi\u3002SDK \u4f1a\u63d0\u4f9b abi \u7f16\u7801\u65b9\u6cd5\u7528\u4e8e\u5408\u7ea6\u65b9\u6cd5\u8c03\u7528\u7684\u7f16\u7801\uff08\u5bf9\u65b9\u6cd5\u540d\u548c\u53c2\u6570\u7f16\u7801\uff09\u3002"),Object(c.b)("h3",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"chainId")," \u662f\u7528\u6765\u6807\u8bc6\u4e00\u6761\u94fe\u7684\uff0c\u5f53\u524dConflux \u4e3b\u7f51\u7684 chainId \u4e3a 1029\uff0c\u6d4b\u8bd5\u7f51\u4e3a 1\u3002\u4ea4\u6613\u4e2d\u5305\u542b chainId \u4e3b\u8981\u662f\u4e3a\u4e86\u9632\u6b62\u4ea4\u6613\u91cd\u653e\u653b\u51fb\u3002\u8be5\u5b57\u6bb5\u4e00\u822c\u4e0d\u9700\u8981\u624b\u52a8\u586b\u5199\uff0cSDK \u4f1a\u81ea\u52a8\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_getStatus")," \u65b9\u6cd5\u83b7\u53d6\u5f53\u524d RPC \u7684 chainId\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"epochHeight")," \u662f\u7528\u6765\u6307\u5b9a\u4e00\u7b14\u4ea4\u6613\u7684\u6267\u884c\u76ee\u6807 Epoch \u8303\u56f4\u7684\uff0c\u4ea4\u6613\u53ea\u4f1a\u5728 ","[Te \u2212 100000, Te + 100000]"," \u8303\u56f4\u6267\u884c\uff0c\u5982\u679c\u5f53\u524d\u94fe\u7684 Epoch \u8d85\u8fc7\u8be5\u8303\u56f4\uff0c\u4ea4\u6613\u4f1a\u88ab\u76f4\u63a5\u8df3\u8fc7\u3002SDK \u540c\u6837\u4f1a\u5e2e\u7528\u6237\u81ea\u52a8\u8bbe\u7f6e\u8be5\u5b57\u6bb5\uff0c\u901a\u5e38\u4f1a\u8bbe\u7f6e\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_epochNumber")," \u65b9\u6cd5\u83b7\u53d6\u7684\u5f53\u524d Epoch\u3002"),Object(c.b)("h2",{id:"\u4ea4\u6613\u7f16\u7801\u548c\u7b7e\u540d"},"\u4ea4\u6613\u7f16\u7801\u548c\u7b7e\u540d"),Object(c.b)("p",null,"\u4ea4\u6613\u7684\u5404\u5b57\u6bb5\u786e\u5b9a\u4e4b\u540e\uff0c\u9700\u8981\u6309\u4e00\u5b9a\u683c\u5f0f\u8fdb\u884c rlp \u7f16\u7801\uff0c\u5e76\u4f7f\u7528\u53d1\u9001\u8d26\u6237\u7684\u79c1\u94a5\u5bf9\u7f16\u7801\u7684 keccak256 hash \u8fdb\u884c\u7b7e\u540d\uff0c\u6700\u540e\u5c06\u4e24\u8005\u7ec4\u88c5\u6210 rawTransaction\u3002rawTransaction \u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_sendRawTransaction")," \u65b9\u6cd5\u53d1\u9001\u5230 Conflux \u7f51\u7edc\u4e2d\uff0c\u7b49\u5f85\u88ab\u77ff\u5de5\u6253\u5305\u5e76\u6267\u884c\u3002"),Object(c.b)("p",null,"\u5177\u4f53\u64cd\u4f5c\u6b65\u9aa4\u4e3a\uff08\u4ee5 js-conflux-sdk \u4e3a\u4f8b\uff09\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5c06\u4ea4\u6613\u7684\u5404\u4e2a\u5b57\u6bb5\u89e3\u6790\u4e3a buffer"),Object(c.b)("li",{parentName:"ol"},"\u5c06\u5404\u4e2a\u5b57\u6bb5\u6309\u7167 ",Object(c.b)("inlineCode",{parentName:"li"},"(nonce, gasPrice, gas, to, value, storageLimit, epochHeight, chainId, data)")," \u7684\u987a\u5e8f\u7ec4\u88c5\u4e3a\u4e00\u4e2a\u6570\u7ec4\u6216\u5143\u7ec4\uff0c\u5e76\u8fdb\u884c rlp \u7f16\u7801\u3002"),Object(c.b)("li",{parentName:"ol"},"\u5bf9\u7f16\u7801\u7ed3\u679c\u8fdb\u884c ",Object(c.b)("inlineCode",{parentName:"li"},"keccak256")," \u8fd0\u7b97\u83b7\u53d6 hash"),Object(c.b)("li",{parentName:"ol"},"\u4f7f\u7528\u53d1\u9001\u8d26\u6237\u7684\u79c1\u94a5\u5bf9\u4e0a\u4e00\u6b65\u7684 hash \u8fdb\u884c ecdsaSign \u7b7e\u540d\u8fd0\u7b97\uff0c\u5f97\u5230 r\uff0cs\uff0cv"),Object(c.b)("li",{parentName:"ol"},"\u5c06\u6240\u6709\u4fe1\u606f\u6309\u7167 ",Object(c.b)("inlineCode",{parentName:"li"},"((nonce, gasPrice, gas, to, value, storageLimit, epochHeight, chainId, data), v, r, s)")," \u7ec4\u88c5\u8d77\u6765\uff0c\u5e76\u8fdb\u884c rlp \u7f16\u7801\u3002"),Object(c.b)("li",{parentName:"ol"},"\u6700\u7ec8\u5c06\u4e0a\u6b65\u7f16\u7801\u540e\u7684 buffer \u8f6c\u6362\u4e3a hex \u5b57\u7b26\u4e32\uff0c\u5373\u53ef\u5f97\u5230\u53ef\u76f4\u63a5\u53d1\u9001\u7684 rawTransaction\u3002")),Object(c.b)("h2",{id:"\u5982\u4f55\u67e5\u8be2\u4ea4\u6613\u8be6\u60c5\u548c\u72b6\u6001"},"\u5982\u4f55\u67e5\u8be2\u4ea4\u6613\u8be6\u60c5\u548c\u72b6\u6001"),Object(c.b)("p",null,"\u4ea4\u6613\u6210\u529f\u53d1\u9001\u540e\uff0c\u4f1a\u5148\u88ab\u653e\u5230\u8282\u70b9\u7684\u4ea4\u6613\u6c60\u4e2d\uff0c\u7b49\u6ee1\u8db3\u6253\u5305\u6761\u4ef6\u540e\uff0c\u4f1a\u88ab\u77ff\u5de5\u6253\u5305\u8fdb\u6700\u65b0\u7684\u533a\u5757\u4e2d\u3002\u8fd9\u65f6\u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_getTransactionByHash")," \u67e5\u8be2\u4ea4\u6613\u7684\u4fe1\u606f\u548c\u72b6\u6001\u3002\n\u8fd4\u56de\u7ed3\u679c\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"status")," \u5b57\u6bb5\u8868\u793a\u4ea4\u6613\u7684\u6267\u884c\u72b6\u6001:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"null"),": \u672a\u6267\u884c"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"0x0"),": \u6267\u884c\u6210\u529f"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"0x2"),": \u4ea4\u6613\u88ab\u8df3\u8fc7")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "blockHash": "0x398879d9e7d37e2cc87af268fcd2207a689e2e84986e9251a5343dafca3d93b7",\n        "chainId": "0x405",\n        "contractCreated": null,\n        "data": "0x",\n        "epochHeight": "0xd03609",\n        "from": "CFX:TYPE.USER:AAKETJH9TKJ5G2K4ZX3KFVB9VKKU8NR956N0EN4FHE",\n        "gas": "0x5208",\n        "gasPrice": "0x2540be400",\n        "hash": "0xa76efec071e0779785b6653aebb2382a5e460b60a163a1b166df3c8164cec6d9",\n        "nonce": "0xa08d9",\n        "r": "0x38e661ad41790c069a4795df21eade5ef9605dbcbdfd5dabbb0dc322e833e4c1",\n        "s": "0x66ca875464c554261033f4522281d564bdba4f0189d357579dcbf2b1ed98936b",\n        "status": "0x0",\n        "storageLimit": "0x0",\n        "to": "CFX:TYPE.USER:AATT0JGE4J70V4H0Z43VJ9M29ZJ7ASNS0YA238MGZC",\n        "transactionIndex": "0x1",\n        "v": "0x0",\n        "value": "0xde0b93b7d70bec0"\n    },\n    "id": "15922956697249514502"\n}\n')),Object(c.b)("p",null,"\u4ea4\u6613\u88ab\u6253\u5305\u4e4b\u540e\u4e0d\u4f1a\u7acb\u523b\u6267\u884c\uff0c\u8fd9\u65f6\u4ea4\u6613\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"status")," \u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"null"),"\u3002\u5ef6\u8fdf 4 \u4e2a Epoch \u540e\uff0c\u4ea4\u6613\u7684 status \u5e94\u8be5\u53d8\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"0x0")," \u6216 ",Object(c.b)("inlineCode",{parentName:"p"},"0x1"),", ",Object(c.b)("inlineCode",{parentName:"p"},"0x2"),"\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"0x0")," \u8868\u793a\u6210\u529f\uff0c",Object(c.b)("inlineCode",{parentName:"p"},"0x1")," \u4e3a\u5931\u8d25, ",Object(c.b)("inlineCode",{parentName:"p"},"0x2")," \u8868\u793a\u8df3\u8fc7\u3002"),Object(c.b)("p",null,"\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"cfx_getTransactionReceipt")," \u83b7\u53d6\u4ea4\u6613\u7684\u6267\u884c\u56de\u6267\uff0c\u53ea\u6709\u5f53\u4ea4\u6613\u88ab\u6267\u884c\u4e4b\u540e\u624d\u80fd\u83b7\u53d6\u5230 receipt\uff0c\u5426\u5219\u5c06\u4f1a\u8fd4\u56de ",Object(c.b)("inlineCode",{parentName:"p"},"null"),"\u3002receipt \u5305\u542b\u4e00\u4e2a\u5b57\u6bb5 ",Object(c.b)("inlineCode",{parentName:"p"},"outcomeStatus")," \u4e5f\u53ef\u4ee5\u7528\u4e8e\u5224\u65ad\u4ea4\u6613\u662f\u5426\u6267\u884c\u6210\u529f\uff1a",Object(c.b)("inlineCode",{parentName:"p"},"0x0")," \u8868\u793a\u6210\u529f\uff0c\u5176\u4ed6\u8868\u793a\u5931\u8d25\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {\n        "blockHash": "0x398879d9e7d37e2cc87af268fcd2207a689e2e84986e9251a5343dafca3d93b7",\n        "contractCreated": null,\n        "epochNumber": "0xd0360f",\n        "from": "CFX:TYPE.USER:AAKETJH9TKJ5G2K4ZX3KFVB9VKKU8NR956N0EN4FHE",\n        "gasCoveredBySponsor": false,\n        "gasFee": "0xbefe6f672000",\n        "gasUsed": "0x5208",\n        "index": "0x1",\n        "logs": [],\n        "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",\n        "outcomeStatus": "0x0",\n        "stateRoot": "0x8c05b8eb6b9dc69f2e7bb235621487022e694ce3969202b94e76227673a0b86b",\n        "storageCollateralized": "0x0",\n        "storageCoveredBySponsor": false,\n        "storageReleased": [],\n        "to": "CFX:TYPE.USER:AATT0JGE4J70V4H0Z43VJ9M29ZJ7ASNS0YA238MGZC",\n        "transactionHash": "0xa76efec071e0779785b6653aebb2382a5e460b60a163a1b166df3c8164cec6d9",\n        "txExecErrorMsg": null\n    },\n    "id": "15922956697249514502"\n}\n')),Object(c.b)("h2",{id:"\u5982\u4f55\u5224\u65ad\u4e00\u7b14\u4ea4\u6613\u88ab\u786e\u8ba4"},"\u5982\u4f55\u5224\u65ad\u4e00\u7b14\u4ea4\u6613\u88ab\u786e\u8ba4"),Object(c.b)("p",null,"\u5728\u533a\u5757\u94fe\u4e2d\uff0c\u4e00\u4e2a\u533a\u5757\u6267\u884c\u540e\u4e5f\u6709\u53ef\u80fd\u88ab revert \u6389\uff0c\u5bf9\u5e94\u7684\u4e00\u7b14\u4ea4\u6613\u88ab\u6267\u884c\u540e\u6709\u53ef\u80fd\u4f1a\u88ab\u64a4\u9500\u3002\u53ea\u6709\u5f53\u4e00\u4e2a\u533a\u5757\u88ab\u786e\u8ba4\u4e4b\u540e\uff0c\u5176\u4e2d\u7684\u4ea4\u6613\u72b6\u6001\u624d\u4e0d\u4f1a\u518d\u53d1\u751f\u6539\u53d8\u3002\n\u90a3\u5728 Conflux \u4e2d\u5982\u4f55\u5224\u65ad\u4e00\u7b14\u4ea4\u6613\uff08\u533a\u5757\uff09\u88ab\u786e\u8ba4\u4e86\u5462\u3002\u6709\u4e24\u79cd\u65b9\u6cd5\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5982\u679c\u7f51\u7edc\u7684\u6700\u65b0",Object(c.b)("inlineCode",{parentName:"li"},"\u786e\u8ba4 epochNumber")," \u5927\u4e8e\u4ea4\u6613\u6240\u5728\u7684 epochNumber\uff0c\u5219\u53ef\u4ee5\u8ba4\u4e3a\u4ea4\u6613\u4e5f\u88ab\u786e\u8ba4\u4e86\u3002\u901a\u8fc7\u8c03\u7528 ",Object(c.b)("inlineCode",{parentName:"li"},"cfx_epochNumber")," \u65b9\u6cd5\uff0c\u4f20\u9012 ",Object(c.b)("inlineCode",{parentName:"li"},"latest_confirmed")," \u53c2\u6570\u53ef\u4ee5\u83b7\u53d6\u5f53\u524d\u6700\u65b0\u88ab\u786e\u8ba4\u7684 ",Object(c.b)("inlineCode",{parentName:"li"},"epochNumber"),"\uff0c\u4ea4\u6613\u7684 epochNumber \u5728\u5176 receipt \u4fe1\u606f\u4e2d\u5305\u542b\u3002"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"cfx_getConfirmationRiskByHash")," \u65b9\u6cd5\u53ef\u4ee5\u83b7\u53d6\u4e00\u4e2a block \u7684\u786e\u8ba4\u98ce\u9669\u6570\u503c risk\uff0c\u5982\u679c ",Object(c.b)("inlineCode",{parentName:"li"},"risk/MAX_UINT256 < 1e-8")," \u5219\u8ba4\u4e3a\u8be5 block \u88ab\u786e\u8ba4\uff0c\u4e0d\u4f1a\u518d revert \u4e86\u3002\u4ea4\u6613\u6240\u5728\u7684 block hash \u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"li"},"cfx_getTransactionByHash")," \u83b7\u53d6\u3002")),Object(c.b)("p",null,"\u5728 Conflux \u4e2d\u901a\u5e38\u4e00\u4e2a\u533a\u5757\u8fc7 50 \u4e2a epoch \uff08\u4e00\u5206\u949f\u5185\uff09 \u5373\u53ef\u88ab\u786e\u8ba4\uff0c\u5982\u679c\u4ea4\u6613\u6d89\u53ca\u7684\u91d1\u989d\u8f83\u5927\uff0c\u53ef\u4ee5\u6839\u636e\u60c5\u51b5\u591a\u7b49\u4e00\u4e9b epoch \u786e\u8ba4\u3002"),Object(c.b)("h2",{id:"\u4ea4\u6613\u53d1\u9001\u5931\u8d25\u7684\u539f\u56e0"},"\u4ea4\u6613\u53d1\u9001\u5931\u8d25\u7684\u539f\u56e0"),Object(c.b)("p",null,"\u6839\u636e\u4ea4\u6613\u5931\u8d25\u7684\u9636\u6bb5\u4e0d\u540c\uff0c\u53ef\u4ee5\u5c06\u5931\u8d25\u60c5\u51b5\u5212\u5206\u4e3a\u5982\u4e0b\u4e09\u79cd\uff1a"),Object(c.b)("h3",{id:"rejected-by-rpc"},"Rejected by RPC"),Object(c.b)("p",null,"\u53d1\u9001\u4ea4\u6613\u76f4\u63a5\u88ab RPC \u6240\u62d2\u7edd\uff0c\u62d2\u7edd\u539f\u56e0\u5728 RPC Response \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"message")," \u5b57\u6bb5\u4e2d\u3002"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"Invalid parameters: tx', 'data': '\"Failed imported to deferred pool: Tx with same nonce already inserted. To replace it, you need to specify a gas price > 5")," \u9519\u8bef\u8868\u793a nonce \u4e3a\u67d0\u4e2a\u503c\u7684\u4ea4\u6613\u5df2\u7ecf\u5b58\u5728\u4e8e\u4ea4\u6613\u6c60\u4e2d\uff0c\u4e0d\u80fd\u91cd\u590d\u53d1\u9001\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u63d0\u9ad8 gasPrice \u6765\u66ff\u6362\u6389\u4ea4\u6613\u6c60\u4e2d\u7684\u4ea4\u6613\u3002"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"'Invalid parameters: tx', 'data': '\"Transaction 0x2004b0aea956e8cfad601cd6daad5630c1a95624bad446d1966895973325136c is discarded due to a too stale nonce")," \u8868\u793a\u53d1\u9001\u4ea4\u6613\u7684 nonce \u662f\u4e00\u4e2a\u5386\u53f2\u5df2\u88ab\u7528\u8fc7\u7684 nonce\uff0c\u4e0d\u80fd\u88ab\u518d\u6b21\u4f7f\u7528"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"Sending transactions to invalid address. The first four bits must be 0x0 (built-in/reserved), 0x1 (user-account), or 0x8 (contract).")," \u8868\u793a\u4ea4\u6613\u7684\u63a5\u53d7\u5730\u5740\u662f\u4e00\u4e2a\u9519\u8bef\u5730\u5740"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"Transaction {:?} is discarded due to in too distant future")," \u8868\u793a\u8be5\u4ea4\u6613\u4f7f\u7528\u7684 nonce\uff0c\u6bd4\u8d26\u6237\u5f53\u524d nonce \u5927\u7684\u592a\u591a"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"tx already exist")," \u4ea4\u6613\u5df2\u5b58\u5728")),Object(c.b)("p",null,"\u6709\u65f6 Response \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"data"),"\u4e5f\u4f1a\u5305\u542b\u4e00\u4e9b\u9519\u8bef\u4fe1\u606f\uff0c\u8be5\u5b57\u6bb5\u662f\u4e00\u4e2a hex \u7f16\u7801\u7684\u5b57\u7b26\u4e32\uff0c\u89e3\u6790\u65b9\u6cd5\u5982\u4e0b hex -> buffer -> UTF8 string"),Object(c.b)("h3",{id:"stucked-in-transaction-pool"},"Stucked in transaction pool"),Object(c.b)("p",null,"\u4ea4\u6613\u53d1\u9001\u6210\u529f\uff0c\u4f46\u4e00\u76f4\u4e0d\u88ab\u6253\u5305\uff0c\u6b64\u79cd\u60c5\u51b5\u4e00\u822c\u7531\u4e24\u79cd\u539f\u56e0\u6240\u5bfc\u81f4\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u4f7f\u7528\u4e86\u8df3\u8dc3\u7684 nonce\uff0c\u4e14\u4e4b\u524d nonce \u7684\u4ea4\u6613\u4e00\u76f4\u6ca1\u6709\u4ea7\u751f\u6216\u6267\u884c\u3002"),Object(c.b)("li",{parentName:"ol"},"\u4ea4\u6613\u53d1\u9001\u8d26\u6237\u7684\u4f59\u989d\u4e0d\u591f\u652f\u4ed8\u672c\u7b14\u4ea4\u6613\u3002")),Object(c.b)("h3",{id:"executed-failed"},"Executed failed"),Object(c.b)("p",null,"\u6267\u884c\u5931\u8d25\uff0c\u901a\u5e38\u662f\u56e0\u4e3a\u5408\u7ea6\u6267\u884c\u8fc7\u7a0b\u4e2d\u53d1\u751f\u9519\u8bef\uff0c\u5bfc\u81f4\u4ea4\u6613\u5931\u8d25\u3002\u6b64\u79cd\u9519\u8bef\u5927\u591a\u662f\u56e0\u4e3a\u5408\u7ea6\u6267\u884c\u5931\u8d25\u5bfc\u81f4\uff0c\u4e14\u901a\u8fc7 estimate \u63a5\u53e3\u9884\u4f30 gas \u8d39\u7528\u7684\u65f6\u5019\u4e5f\u4f1a\u8fd4\u56de\u9519\u8bef\u3002\n\u4ea4\u6613\u5931\u8d25\u7684\u5177\u4f53\u539f\u56e0\u53ef\u4ee5\u5728 receipt \u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"txExecErrorMsg")," \u5b57\u6bb5\u67e5\u770b, \u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\uff1a"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"VmError(OutOfGas)")," \u4ea4\u6613\u6307\u5b9a\u7684 gas \u8d39\u7528\u4e0d\u591f"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"VmError(ExceedStorageLimit)")," \u4ea4\u6613\u6307\u5b9a\u7684 storage \u4e0a\u9650\u4e0d\u591f"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"NotEnoughCash")," \u7528\u6237\u4f59\u989d\u4e0d\u591f"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"Vm reverted, Reason provided by the contract: xxxx")," \u5408\u7ea6\u6267\u884c\u5931\u8d25\uff0c\u5e76\u4e14\u5408\u7ea6\u63d0\u4f9b\u4e86\u8be6\u7ec6\u539f\u56e0"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"VmError(BadInstruction")," \u5408\u7ea6\u90e8\u7f72\u5931\u8d25"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("inlineCode",{parentName:"li"},"Vm reverted, ")," \u5408\u7ea6\u6267\u884c\u5931\u8d25\uff0c\u5e76\u4e14\u6ca1\u6709\u8be6\u7ec6\u4fe1\u606f")),Object(c.b)("h2",{id:"\u8ddf\u4ee5\u592a\u574a\u7684\u533a\u522b"},"\u8ddf\u4ee5\u592a\u574a\u7684\u533a\u522b"),Object(c.b)("p",null,"Conflux \u4ea4\u6613\u8ddf\u4ee5\u592a\u574a\u76f8\u6bd4\u591a\u4e86 ",Object(c.b)("inlineCode",{parentName:"p"},"chainId"),", ",Object(c.b)("inlineCode",{parentName:"p"},"storageLimit"),", ",Object(c.b)("inlineCode",{parentName:"p"},"epochNumber")," \u4e09\u4e2a\u5b57\u6bb5\u3002\u5e76\u4e14\u4ea4\u6613\u7684 rlp \u7f16\u7801\u7ec4\u88c5\u65b9\u5f0f\u4e0d\u540c\u3002\u9664\u6b64\u4e4b\u5916 ecdsaSign \u7b7e\u540d\u540e\u7684 v \u503c\u5728 Conflux \u4e0d\u505a\u7279\u6b8a\u4fee\u6539\uff0c\u4ee5\u592a\u574a\u4e2d\u5219\u4f1a\u5bf9 v \u503c\u6709\u4e00\u4e9b\u7279\u6b8a\u5904\u7406\u3002"))}p.isMDXComponent=!0},157:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return O}));var a=t(0),i=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=i.a.createContext({}),p=function(e){var n=i.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(o.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,O=d["".concat(b,".").concat(m)]||d[m]||s[m]||c;return t?i.a.createElement(O,l(l({ref:n},o),{},{components:t})):i.a.createElement(O,l({ref:n},o))}));function O(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,b=new Array(c);b[0]=m;var l={};for(var r in n)hasOwnProperty.call(n,r)&&(l[r]=n[r]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var o=2;o<c;o++)b[o]=t[o];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);