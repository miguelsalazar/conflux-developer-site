(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{163:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(2),r=n(9),c=(n(0),n(225)),o={},i={id:"conflux-doc/docs/trace_introduction",title:"trace_introduction",description:"Introduction to Transaction Traces",source:"@site/docs/conflux-doc/docs/trace_introduction.md",permalink:"/docs/conflux-doc/docs/trace_introduction",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-doc/docs/trace_introduction.md",lastUpdatedAt:1619685098},l=[{value:"Trace Types",id:"trace-types",children:[{value:"Call",id:"call",children:[]},{value:"CallResult",id:"callresult",children:[]},{value:"Create",id:"create",children:[]},{value:"CreateResult",id:"createresult",children:[]},{value:"InternalTransferAction",id:"internaltransferaction",children:[]}]},{value:"Discussion of Failure",id:"discussion-of-failure",children:[]}],s={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"introduction-to-transaction-traces"},"Introduction to Transaction Traces"),Object(c.b)("p",null,"Traces are used to record the transaction execution details. It can be used to debug or retrieve more information (like getting contract addresses created within transaction execution)."),Object(c.b)("h2",{id:"trace-types"},"Trace Types"),Object(c.b)("h3",{id:"call"},"Call"),Object(c.b)("p",null,"The trace is recorded for all ",Object(c.b)("inlineCode",{parentName:"p"},"Call")," operations, including balance transferring or contract calling, executed either by the transaction itself or inside a contract."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"pub struct Call {\n    /// The sending account.\n    pub from: Address,\n    /// The destination account.\n    pub to: Address,\n    /// The value transferred to the destination account.\n    pub value: U256,\n    /// The gas available for executing the call.\n    pub gas: U256,\n    /// The input data provided to the call.\n    pub input: Bytes,\n    /// The type of the call.\n    pub call_type: CallType,\n}\n\npub enum CallType {\n    /// Not a CALL.\n    None,\n    /// CALL.\n    Call,\n    /// CALLCODE.\n    CallCode,\n    /// DELEGATECALL.\n    DelegateCall,\n    /// STATICCALL\n    StaticCall,\n}\n")),Object(c.b)("p",null,"If a transaction itself is calling a contract (",Object(c.b)("inlineCode",{parentName:"p"},"to")," is a contract address), this trace will always be the first one in the trace list of this transaction."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"call_type")," can never be ",Object(c.b)("inlineCode",{parentName:"p"},"None")," for ",Object(c.b)("inlineCode",{parentName:"p"},"Call")," traces."),Object(c.b)("p",null,"Note that ",Object(c.b)("inlineCode",{parentName:"p"},"gas"),' is the "provided" gas for the execution of the callee, so the gas overhead has been deducted. For example, it is ',Object(c.b)("inlineCode",{parentName:"p"},"0")," for a simple balance transferring transaction of ",Object(c.b)("inlineCode",{parentName:"p"},"21000")," gas, because the base gas cost (",Object(c.b)("inlineCode",{parentName:"p"},"21000"),") has been deducted in advance. The gas cost for call-related opcodes (",Object(c.b)("inlineCode",{parentName:"p"},"CALL"),", ",Object(c.b)("inlineCode",{parentName:"p"},"DELEGATECALL"),", e.t.c.) or the 1/64 gas reserve for calling are also deducted in advance during contract execution."),Object(c.b)("h3",{id:"callresult"},"CallResult"),Object(c.b)("p",null,"The trace is recorded after a ",Object(c.b)("inlineCode",{parentName:"p"},"Call")," operation finishes."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"pub struct CallResult {\n    /// The outcome of the result\n    pub outcome: Outcome,\n    /// The amount of gas left\n    pub gas_left: U256,\n    /// Output data\n    pub return_data: Bytes,\n}\n")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"pub enum Outcome {\n    Success,\n    Reverted,\n    Fail,\n}\n")),Object(c.b)("p",null,"Note that there is no ",Object(c.b)("inlineCode",{parentName:"p"},"CallResult")," for simple transfer transactions, and the information is accesible in the transaction receipts in this case."),Object(c.b)("h3",{id:"create"},"Create"),Object(c.b)("p",null,"The trace is recorded for all operations that create contracts, including executing contract creation transactions or successfully executing the ",Object(c.b)("inlineCode",{parentName:"p"},"CREATE"),"/",Object(c.b)("inlineCode",{parentName:"p"},"CREATE2")," opcode."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"pub struct Create {\n    /// The address of the creator.\n    pub from: Address,\n    /// The value with which the new account is endowed.\n    pub value: U256,\n    /// The gas available for the creation init code.\n    pub gas: U256,\n    /// The init code.\n    pub init: Bytes,\n}\n")),Object(c.b)("p",null,"Similar to ",Object(c.b)("inlineCode",{parentName:"p"},"Call"),", the ",Object(c.b)("inlineCode",{parentName:"p"},"gas"),' is the "provided" gas for the ',Object(c.b)("inlineCode",{parentName:"p"},"Create")," operation."),Object(c.b)("h3",{id:"createresult"},"CreateResult"),Object(c.b)("p",null,"The trace is recorded after a ",Object(c.b)("inlineCode",{parentName:"p"},"Create")," operation finishes."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"pub struct CreateResult {\n    /// The outcome of the create\n    pub outcome: Outcome,\n    /// The created contract address\n    pub addr: Address,\n    /// The amount of gas left\n    pub gas_left: U256,\n    /// Output data\n    pub return_data: Bytes,\n")),Object(c.b)("p",null,"Similar to ",Object(c.b)("inlineCode",{parentName:"p"},"CallResult"),", no ",Object(c.b)("inlineCode",{parentName:"p"},"CreateResult")," trace is recorded for the one triggered by the original contract creation transactions. Note that other contracts created during the creation of the original contract still have traces.  "),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"addr")," can only be used if ",Object(c.b)("inlineCode",{parentName:"p"},"outcome")," is ",Object(c.b)("inlineCode",{parentName:"p"},"Success"),"."),Object(c.b)("h3",{id:"internaltransferaction"},"InternalTransferAction"),Object(c.b)("p",null,"The trace is recorded for the balance transfer triggered by internal contracts. It includes contract suicide, sponsor replacement (including storage collateral sponsor and gas sponsor) , and staking."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-rust"}),"pub struct InternalTransferAction {\n    /// The source address. If it is zero, then it is an interest mint action.\n    pub from: Address,\n    /// The destination address. If it is zero, then it is a burnt action.\n    pub to: Address,\n    /// The amount of CFX\n    pub value: U256,\n}\n")),Object(c.b)("p",null,"For contract suicide, if the refund address is the to-be-destroyed contract , the refund balance will be burnt, so ",Object(c.b)("inlineCode",{parentName:"p"},"to")," will be the null address instead of the refund address."),Object(c.b)("p",null,"For sponsor replacement, ",Object(c.b)("inlineCode",{parentName:"p"},"from")," is set to the sponsor whitelist contract address (",Object(c.b)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000001"),", i.e., ",Object(c.b)("inlineCode",{parentName:"p"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaaegg2r16ar"),")."),Object(c.b)("p",null,"For staking deposit, ",Object(c.b)("inlineCode",{parentName:"p"},"to")," is set to the staking interest contract address (",Object(c.b)("inlineCode",{parentName:"p"},"0x0888000000000000000000000000000000000002"),", i.e., ",Object(c.b)("inlineCode",{parentName:"p"},"cfx:aaejuaaaaaaaaaaaaaaaaaaaaaaaaaaaajrwuc9jnb"),")."),Object(c.b)("p",null,"For staking withdraw, two ",Object(c.b)("inlineCode",{parentName:"p"},"InternalTransferAction")," traces will be recorded. The first is for withdrawing the original staked balance (",Object(c.b)("inlineCode",{parentName:"p"},"from")," is set to the staking interest contract address), and the second is for withdrawing the staking interest (",Object(c.b)("inlineCode",{parentName:"p"},"from")," is set to the null address)."),Object(c.b)("h2",{id:"discussion-of-failure"},"Discussion of Failure"),Object(c.b)("p",null,"For ",Object(c.b)("inlineCode",{parentName:"p"},"Call")," or ",Object(c.b)("inlineCode",{parentName:"p"},"Create")," executed within contract execution, it is only recorded after the actual trap is triggered during execution, and the result is recorded after the trap is processed. If the transaction/instruction fails without triggering the trap (for example, the sender does not have enough balance, reentrancy is detected, or the stack has reached the max depth), no trace will be recorded."),Object(c.b)("p",null,"For ",Object(c.b)("inlineCode",{parentName:"p"},"Call")," or ",Object(c.b)("inlineCode",{parentName:"p"},"Create"),' triggered by the original transaction, the trace is only recorded after passing the preliminary checks. First, traces will only be recorded for "executed" transactions, so if the nonce does not match, this transaction will not be executed and there will be no trace. If the transaction is executed (the nonce of the sender increases), but the sender does not have enough balance to execute the transactions, there are also no traces. For ',Object(c.b)("inlineCode",{parentName:"p"},"Create"),", if the to-be-created contract address was created before and has code, we will also return directly without recording traces. "))}d.isMDXComponent=!0},225:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),d=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),p=a,h=u["".concat(o,".").concat(p)]||u[p]||b[p]||c;return n?r.a.createElement(h,i(i({ref:t},s),{},{components:n})):r.a.createElement(h,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);