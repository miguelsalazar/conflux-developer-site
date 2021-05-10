(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(3),o=n(7),r=(n(0),n(133)),i={id:"internal_contract",title:"Internal Contract",custom_edit_url:"https://github.com/Conflux-Chain/conflux-rust/edit/master/internal_contract/README.md",keywords:["conflux","contract"]},c={unversionedId:"conflux-rust/internal_contract/internal_contract",id:"conflux-rust/internal_contract/internal_contract",isDocsHomePage:!1,title:"Internal Contract",description:"- AdminControl contract",source:"@site/docs/conflux-rust/internal_contract/README.md",sourceDirName:"conflux-rust/internal_contract",slug:"/conflux-rust/internal_contract/internal_contract",permalink:"/conflux-rust/internal_contract/internal_contract",editUrl:"https://github.com/Conflux-Chain/conflux-rust/edit/master/internal_contract/README.md",version:"current",frontMatter:{id:"internal_contract",title:"Internal Contract",custom_edit_url:"https://github.com/Conflux-Chain/conflux-rust/edit/master/internal_contract/README.md",keywords:["conflux","contract"]},sidebar:"docs",previous:{title:"Basics",permalink:"/introduction/en/conflux_basics"},next:{title:"Papers",permalink:"/introduction/en/conflux_papers"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Examples",id:"examples",children:[]},{value:"Overview",id:"overview-1",children:[]},{value:"Sponsorship Replacement",id:"sponsorship-replacement",children:[]},{value:"Add Sponsor Balance",id:"add-sponsor-balance",children:[]},{value:"Whitelist maintenance",id:"whitelist-maintenance",children:[]},{value:"Examples",id:"examples-1",children:[]},{value:"Overview",id:"overview-2",children:[]},{value:"Interest Rate",id:"interest-rate",children:[]},{value:"Locking and Voting Power",id:"locking-and-voting-power",children:[]},{value:"Examples",id:"examples-2",children:[]}],s={toc:l};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#admincontrol-contract"},"AdminControl contract"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#overview"},"Overview")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#examples"},"Examples")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#sponsorwhitelistcontrol-contract"},"SponsorWhitelistControl contract"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#overview-1"},"Overview")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#sponsorship-replacement"},"Sponsorship Replacement")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#add-sponsor-balance"},"Add Sponsor Balance")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#whitelist-maintenance"},"Whitelist maintenance")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#examples-1"},"Examples")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#staking-contract"},"Staking Contract"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#overview-2"},"Overview")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#interest-rate"},"Interest Rate")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#locking-and-voting-power"},"Locking and Voting Power")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#examples-2"},"Examples"))))),Object(r.b)("p",null,"(",Object(r.b)("strong",{parentName:"p"},"IMPORTANT: the interfaces are changed in Tethys mainnet. This document is synced with the newest version."),")"),Object(r.b)("p",null,"Conflux introduces several built-in internal contracts for better system maintenance and on-chain governance. Now Conflux has three internal contracts: ",Object(r.b)("inlineCode",{parentName:"p"},"AdminControl")," contract, ",Object(r.b)("inlineCode",{parentName:"p"},"SponsorWhitelistControl")," contract and ",Object(r.b)("inlineCode",{parentName:"p"},"Staking")," contract. These contracts provide solidity function apis defined ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/tree/master/internal_contract/contracts"},"here"),". These function can only be called via ",Object(r.b)("inlineCode",{parentName:"p"},"CALL")," or ",Object(r.b)("inlineCode",{parentName:"p"},"STATICCALL")," operation. Using operation ",Object(r.b)("inlineCode",{parentName:"p"},"CALLCODE")," or ",Object(r.b)("inlineCode",{parentName:"p"},"DELEGATECALL")," to interact with internal contracts will trigger an error."),Object(r.b)("p",null,"The addresses of these three internal contracts are list as follows:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"AdminControl: ",Object(r.b)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000000")),Object(r.b)("li",{parentName:"ul"},"SponsorWhitelistControl: ",Object(r.b)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000001")),Object(r.b)("li",{parentName:"ul"},"Staking: ",Object(r.b)("inlineCode",{parentName:"li"},"0x0888000000000000000000000000000000000002"))),Object(r.b)("p",null,"All the example code in this document will use ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/js-conflux-sdk"},"js-conflux-sdk"),". The solidity function apis are list ",Object(r.b)("a",{parentName:"p",href:"https://github.com/Conflux-Chain/conflux-rust/tree/master/internal_contract/contracts"},"here"),"."),Object(r.b)("h1",{id:"admincontrol-contract"},"AdminControl contract"),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"AdminControl")," contract is a debug tool for contract development. When a contract is created during a transaction, the sender for the current transaction will become the contract admin automatically."),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"admin")," address can transfer the administrator rights to another ",Object(r.b)("strong",{parentName:"p"},"normal address")," or ",Object(r.b)("strong",{parentName:"p"},"zero address")," by calling interface ",Object(r.b)("inlineCode",{parentName:"p"},"setAdmin(address contractAddr, address newAdmin)"),". A contract can never be an admin. "),Object(r.b)("p",null,"The admin of a contract has several administrator rights. It can call interface ",Object(r.b)("inlineCode",{parentName:"p"},"destroy(address contractAddr)")," to destroy contract, just like a contract calling ",Object(r.b)("inlineCode",{parentName:"p"},"suicide()")," function. The SponsorWhitelist internal contract provides some functions can only be called by admin address. These functions can update the whitelist in sponsor mechanism. They will be introduced later. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Note: For all the interfaces requiring administrator rights, no matter the execution success or not, no error or exception will be triggered during internal contract execution.")," For example, if a non-admin address tries to transfer the admin address to itself, this transaction will success but nothing will be changed. "),Object(r.b)("p",null,"ConfluxScan may mark a contract as debug mode if the contract has non-zero admin address. ",Object(r.b)("strong",{parentName:"p"},"So remember, if you think the contract is ready for production environment, you should set admin address to zero.")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"AdminControl")," contract also provides a query interface ",Object(r.b)("inlineCode",{parentName:"p"},"getAdmin(address contractAddr)")," which can be called by anyone. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Corner cases:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The admin is set at the start of contract creation. So if sender ",Object(r.b)("inlineCode",{parentName:"li"},"A")," creates contract ",Object(r.b)("inlineCode",{parentName:"li"},"B")," and set admin to ",Object(r.b)("inlineCode",{parentName:"li"},"C")," during contract construction, the admin will be ",Object(r.b)("inlineCode",{parentName:"li"},"C")," when the contract is deployed. "),Object(r.b)("li",{parentName:"ol"},"However, if sender ",Object(r.b)("inlineCode",{parentName:"li"},"A")," calls contract ",Object(r.b)("inlineCode",{parentName:"li"},"B"),", then contract ",Object(r.b)("inlineCode",{parentName:"li"},"B")," creates contract ",Object(r.b)("inlineCode",{parentName:"li"},"C")," and then set admin to ",Object(r.b)("inlineCode",{parentName:"li"},"D")," during contract contraction, then the set will fail because the admin of ",Object(r.b)("inlineCode",{parentName:"li"},"C")," is ",Object(r.b)("inlineCode",{parentName:"li"},"A")," and the sender for creating ",Object(r.b)("inlineCode",{parentName:"li"},"C")," is ",Object(r.b)("inlineCode",{parentName:"li"},"B"),". "),Object(r.b)("li",{parentName:"ol"},"But, Conflux introduces a special policy. In case 2, if ",Object(r.b)("inlineCode",{parentName:"li"},"D"),' is zero address, the set admin will success. This means that a contract can declare "I don\'t need admin" during contract creation. ')),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("p",null,"Consider you have deployed a contract whose address is ",Object(r.b)("inlineCode",{parentName:"p"},"contract_addr"),". The administrator can call ",Object(r.b)("inlineCode",{parentName:"p"},"AdminControl.setAdmin(contract_addr, new_admin)")," to change the administrator and call ",Object(r.b)("inlineCode",{parentName:"p"},"AdminControl.destroy(contract_addr)")," to kill the contract. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const PRIVATE_KEY = '0xxxxxxx';\nconst cfx = new Conflux({\n  url: 'https://test.confluxrpc.com',\n  logger: console,\n  networkId: 1,\n});\nconst account = cfx.wallet.addPrivateKey(PRIVATE_KEY); // create account instance\n\nconst admin_contract = cfx.InternalContract('AdminControl')\n// to change administrator\nadmin_contract.setAdmin(contract_addr, new_admin).sendTransaction({\n  from: account,\n}).confirmed();\n\n// to kill the contract\nadmin_contract.destroy(contract_addr).sendTransaction({\n  from: account,\n}).confirmed();\n")),Object(r.b)("h1",{id:"sponsorwhitelistcontrol-contract"},"SponsorWhitelistControl contract"),Object(r.b)("h2",{id:"overview-1"},"Overview"),Object(r.b)("p",null,"Conflux implements a sponsorship mechanism to subsidize the usage of smart contracts. Thus, a new account with zero balance is able to call smart contracts as long as the execution is sponsored (usually by the operator of Dapps). The built-in SponsorControl contract is introduced to record the sponsorship information of smart contracts. "),Object(r.b)("p",null,"When a message call happens, Conflux does not check sponsorship again. For example, if normal address ",Object(r.b)("inlineCode",{parentName:"p"},"A")," calls contract ",Object(r.b)("inlineCode",{parentName:"p"},"B")," and contract ",Object(r.b)("inlineCode",{parentName:"p"},"B")," calls contract ",Object(r.b)("inlineCode",{parentName:"p"},"C"),", Conflux only checks whether address ",Object(r.b)("inlineCode",{parentName:"p"},"A")," is sponsored by contract ",Object(r.b)("inlineCode",{parentName:"p"},"B"),". If ",Object(r.b)("inlineCode",{parentName:"p"},"A")," is sponsored, ",Object(r.b)("inlineCode",{parentName:"p"},"B")," will afford all the gas and/or collateral during the transaction execution, including the message call from ",Object(r.b)("inlineCode",{parentName:"p"},"B")," to ",Object(r.b)("inlineCode",{parentName:"p"},"C"),". In other words, only a transaction sender could be sponsored.  "),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},"SponsorControl")," contract keeps the following information for each user-established contract:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sponsor_for_gas"),": this is the account that provides the subsidy for gas consumption;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sponsor_for_collateral"),": this is the account that provides the subsidy for collateral for storage;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_gas"),": this is the balance of subsidy available for gas consumption;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_collateral"),": this is the balance of subsidy available for collateral for storage;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sponsor_limit_for_gas_fee"),": this is the upper bound for the gas fee subsidy paid for every sponsored transaction;"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"whitelist"),": this is the list of normal accounts that are eligible for the subsidy, where a special all-zero address refers to all normal accounts. Only the contract itself and the admin have the authority to change this list.")),Object(r.b)("p",null,"There are two resources that can be sponsored: gas consumption and storage collateral."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"For gas consumption"),": If a transaction calls a contract with non-empty ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_for_gas")," and the sender is in the ",Object(r.b)("inlineCode",{parentName:"li"},"whitelist")," of the contract and the gas fee specified by the transaction is within the ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_limit_for_gas_fee"),", the gas consumption of the transaction is paid from the ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_gas")," of the contract (if it is sufficient) rather than from the sender\u2019s balance, and the execution of the transaction would fail if the ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_gas")," cannot afford the gas consumption. Otherwise, the sender should pay for the gas consumption."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"For storage collateral"),": If a transaction calls a contract with non-empty ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_collateral")," and the sender is in the ",Object(r.b)("inlineCode",{parentName:"li"},"whitelist")," of the contract,  the collateral for storage incurred in the execution of the transaction is deducted from ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_collateral")," of the contract, and the owner of those modified storage entries is set to the contract address accordingly. Otherwise, the sender should pay for the collateral for storage incurred in the execution.")),Object(r.b)("p",null,"When a contract is created, its ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_gas")," and ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_collateral")," will be initialized by zero address, and the sponsor balance will be initialized by 0. Both sponsorship for gas and for collateral can be updated by calling the SponsorControl contract. The current sponsor can call this contract to transfer funds to increase the sponsor balances directly, and the current sponsor for gas is also allowed to increase the ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_limit_for_gas_fee")," without transferring new funds. Other normal accounts can replace the current sponsor by calling this contract and providing more funds for sponsorship."),Object(r.b)("h2",{id:"sponsorship-replacement"},"Sponsorship Replacement"),Object(r.b)("p",null,"To replace the ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_gas")," of a contract, the new sponsor should call function ",Object(r.b)("inlineCode",{parentName:"p"},"setSponsorForGas(address contractAddr, uint upperBound)")," and transfer to the internal contract a fund. The following conditions are required to replace sponsor for gas:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"The transferred fund should more than the current ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_gas")," of the contract."),Object(r.b)("li",{parentName:"ol"},"The new value for ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_limit_for_gas_fee")," (specified the ",Object(r.b)("inlineCode",{parentName:"li"},"upperBound")," parameter) should be no less than the old sponsor\u2019s limit unless the old ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_balance_for_gas")," cannot afford the old ",Object(r.b)("inlineCode",{parentName:"li"},"sponsor_limit_for_gas_fee"),"."),Object(r.b)("li",{parentName:"ol"},"The transferred fund should be >= 1000 times of the new limit, so that it is sufficient to subsidize at least ",Object(r.b)("inlineCode",{parentName:"li"},"1000")," transactions calling the contract.")),Object(r.b)("p",null,"If the above conditions are satisfied, the remaining ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_balance_for_gas")," will be refunded to the old ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_gas"),", and the fund transferred to the internal contract will be added to the ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_balance_for_gas")," of the contract. Then the ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_gas")," and ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_limit_for_gas_fee")," will be updated according to the new sponsor\u2019s specification. Otherwise, an exception will be triggered. "),Object(r.b)("p",null,"The replacement of ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_collateral")," is similar except that there is no analog of the limit for gas fee. The function is ",Object(r.b)("inlineCode",{parentName:"p"},"setSponsorForCollateral(address contractAddr)"),". The new sponsor should transfer a fund more than the fund provided by the current sponsor for collateral of the contract. Then the current ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_collateral")," will be fully refunded, i.e. the sum of ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_balance_for_collateral")," and the total collateral for storage used by the contract, and both collateral sponsorship fields are changed as the new sponsor\u2019s request accordingly. "),Object(r.b)("p",null,"Conflux also allows a contract account to be a sponsor. "),Object(r.b)("h2",{id:"add-sponsor-balance"},"Add Sponsor Balance"),Object(r.b)("p",null,"The sponsor can provide additional sponsor balance without sponsorship replacement. In this case, the sponsor should also interact with function ",Object(r.b)("inlineCode",{parentName:"p"},"setSponsorForGas(address contractAddr, uint upperBound)")," or ",Object(r.b)("inlineCode",{parentName:"p"},"setSponsorForCollateral(address contractAddr)"),", and meet all the requirements except condition 1. If requirements are satisfied, the transferred fund will be added to sponsor balance and the ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_limit_for_gas_fee")," will be updated accordingly."),Object(r.b)("h2",{id:"whitelist-maintenance"},"Whitelist maintenance"),Object(r.b)("p",null,"Only the contract itself or contract admin can update the contract whitelist. The sponsors have no rights for changing whitelist. "),Object(r.b)("p",null,"A contract can call function ",Object(r.b)("inlineCode",{parentName:"p"},"addPrivilege(address[] memory)")," to any addresses to the whitelist. It means that if the ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_gas")," is set, the contract will pay the gas fee for the accounts in the whitelist, and if the ",Object(r.b)("inlineCode",{parentName:"p"},"sponsor_for_collateral")," is set, the contract will pay the CFS (collateral for storage) for the accounts in the whitelist. The zero address is a special address ",Object(r.b)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000"),". If this address is added to whitelist, all the transactions calling this contract will be sponsored. A contract can call this function ",Object(r.b)("inlineCode",{parentName:"p"},"removePrivilege(address[] memory)")," to remove some normal account address from the whitelist. Remove a non-existent address will not cause an error or exception. "),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Corner cases:")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"A contract address can also be added to the whitelist, but it is meaningless because only the transaction sender could be sponsored. ")),Object(r.b)("p",null,"The admin of a contract can use the interfaces ",Object(r.b)("inlineCode",{parentName:"p"},"addPrivilegeByAdmin(address contractAddr, address[] memory addresses)")," and ",Object(r.b)("inlineCode",{parentName:"p"},"removePrivilegeByAdmin(address contractAddr, address[] memory addresses)")," to maintain the whitelist."),Object(r.b)("h2",{id:"examples-1"},"Examples"),Object(r.b)("p",null,"Suppose you have a simple contract like this."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-solidity"},'pragma solidity >=0.4.15;\n\nimport "https://github.com/Conflux-Chain/conflux-rust/blob/master/internal_contract/contracts/SponsorWhitelistControl.sol";\n\ncontract CommissionPrivilegeTest {\n    mapping(uint => uint) public ss;\n\n    function add(address account) public payable {\n        SponsorWhitelistControl cpc = SponsorWhitelistControl(0x0888000000000000000000000000000000000001);\n        address[] memory a = new address[](1);\n        a[0] = account;\n        cpc.addPrivilege(a);\n    }\n\n    function remove(address account) public payable {\n        SponsorWhitelistControl cpc = SponsorWhitelistControl(0x0888000000000000000000000000000000000001);\n        address[] memory a = new address[](1);\n        a[0] = account;\n        cpc.removePrivilege(a);\n    }\n\n    function foo() public payable {\n    }\n\n    function par_add(uint start, uint end) public payable {\n        for (uint i = start; i < end; i++) {\n            ss[i] = 1;\n        }\n    }\n}\n')),Object(r.b)("p",null,"After deploying the contract and the address is ",Object(r.b)("inlineCode",{parentName:"p"},"contract_addr"),", if someone wants to sponsor the gas consumption, he/she can send a transaction like below:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const PRIVATE_KEY = '0xxxxxxx';\nconst cfx = new Conflux({\n  url: 'https://test.confluxrpc.com',\n  logger: console,\n  networkId: 1,\n});\nconst account = cfx.wallet.addPrivateKey(PRIVATE_KEY); // create account instance\n\nconst sponsor_contract = cfx.InternalContract('SponsorWhitelistControl');\nsponsor_contract.setSponsorForGas(contract_addr, your_upper_bound).sendTransaction({\n  from: account,\n  value: your_sponsor_value\n}).confirmed();\n")),Object(r.b)("p",null,"As for sponsor the storage collateral, you can simply replace the function ",Object(r.b)("inlineCode",{parentName:"p"},"setSponsorForGas(contract_addr, your_upper_bound)")," to ",Object(r.b)("inlineCode",{parentName:"p"},"setSponsorForCollateral(contract_addr)"),"."),Object(r.b)("p",null,"After that you can maintain the ",Object(r.b)("inlineCode",{parentName:"p"},"whitelist")," for your contract using ",Object(r.b)("inlineCode",{parentName:"p"},"addPrivilege")," and ",Object(r.b)("inlineCode",{parentName:"p"},"removePrivilege"),". The special address ",Object(r.b)("inlineCode",{parentName:"p"},"0x0000000000000000000000000000000000000000")," with all zeros means everyone is in the ",Object(r.b)("inlineCode",{parentName:"p"},"whitelist"),". You need to use it carefully."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"you_contract.add(white_list_addr).sendTransaction({\n  from: account,\n})\n\nyou_contract.remove(white_list_addr).sendTransaction({\n  from: account,\n})\n")),Object(r.b)("p",null,"After that the accounts in ",Object(r.b)("inlineCode",{parentName:"p"},"whiltelist")," will pay nothing while calling ",Object(r.b)("inlineCode",{parentName:"p"},"you_contract.foo()")," or ",Object(r.b)("inlineCode",{parentName:"p"},"you_contract.par_add(1, 10)"),"."),Object(r.b)("h1",{id:"staking-contract"},"Staking Contract"),Object(r.b)("h2",{id:"overview-2"},"Overview"),Object(r.b)("p",null,"Conflux introduces the staking mechanism for two reasons: first, staking mechanism provides a better way to charge the occupation of storage space (comparing to \u201cpay once, occupy forever\u201d); and second, this mechanism also helps in defining the voting power in decentralized governance."),Object(r.b)("p",null,"At a high level, Conflux implements a built-in ",Object(r.b)("strong",{parentName:"p"},"Staking")," contract to record the staking information of all accounts, for both normal addresses and smart contracts. By sending a transaction to this contract, users (both external users and smart contracts) can deposit/withdraw funds, which is also called stakes in the contract. The interest of staked funds is issued at withdrawal, and depends on both the amount and staking period of the fund being withdrawn."),Object(r.b)("p",null,"A user (or a contract) can deposit balance for staking by calling ",Object(r.b)("inlineCode",{parentName:"p"},"deposit(uint amount)")," and then ",Object(r.b)("inlineCode",{parentName:"p"},"amount")," Drip will be moved from its ",Object(r.b)("inlineCode",{parentName:"p"},"balance")," to ",Object(r.b)("inlineCode",{parentName:"p"},"stakingBalance"),". Notice that this function is non-payable, the user only needs to specify the amount to be staked without transferring any funds to internal contract."),Object(r.b)("p",null,"The user can also withdraw balance by ",Object(r.b)("inlineCode",{parentName:"p"},"withdraw(uint amount)"),". The caller can call this function to withdraw some tokens from the Conflux Internal Staking Contract. This will also trigger interest settlement. The staking capital and staking interest will be transferred to the user's balance in time. All the withdrawal applications will be processed on a first-come-first-served basis according to the sequence of staking orders."),Object(r.b)("h2",{id:"interest-rate"},"Interest Rate"),Object(r.b)("p",null,"The annualized staking interest rate is currently set to 4.08%. Compound interest is implemented in the granularity of blocks."),Object(r.b)("p",null,"When executing a transaction sent by account ",Object(r.b)("inlineCode",{parentName:"p"},"addr")," at block ",Object(r.b)("inlineCode",{parentName:"p"},"B")," to withdraw a fund of value ",Object(r.b)("inlineCode",{parentName:"p"},"v")," deposited at block ",Object(r.b)("inlineCode",{parentName:"p"},"B'"),", the interest is calculated as follows:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre"},"interest issued = v * (1 + 4% / 63072000)^T - v\n")),Object(r.b)("p",null,"where ",Object(r.b)("inlineCode",{parentName:"p"},"T = BlockNo(B)\u2212BlockNo(B')")," is the staking period measured by the number of blocks, and ",Object(r.b)("inlineCode",{parentName:"p"},"63072000")," is the expected number of blocks generated in ",Object(r.b)("inlineCode",{parentName:"p"},"365")," days with the target block time ",Object(r.b)("inlineCode",{parentName:"p"},"0.5")," seconds."),Object(r.b)("h2",{id:"locking-and-voting-power"},"Locking and Voting Power"),Object(r.b)("p",null,"By locking the staking balance, the user can obtain ",Object(r.b)("em",{parentName:"p"},"vote power")," for further on-chain governance. With function ",Object(r.b)("inlineCode",{parentName:"p"},"voteLock(uint amount, uint unlock_block_number)"),', the account makes a promise that This process resembles making promise that "My ',Object(r.b)("inlineCode",{parentName:"p"},"stakingBalance")," will always have at least ",Object(r.b)("inlineCode",{parentName:"p"},"amount")," Drip before the block with block number ",Object(r.b)("inlineCode",{parentName:"p"},"unlock_block_number"),'". The account can make multiple promises, like "I will always at least 10 CFX in this year, and then always stake at least 5 CFX in the next year."  ',Object(r.b)("strong",{parentName:"p"},"Once the promise has been made, there is no way to cancel it!")," But the account can overwrite old promise by locking more balance. Whenever the account tries to withdraw ",Object(r.b)("inlineCode",{parentName:"p"},"stakingBalance"),", the internal contract will check whether the rest balance matches the locking promise. "),Object(r.b)("p",null,"Here we introduce the detailed logic for locking balance by illustrating several examples. Suppose the current block number is ",Object(r.b)("inlineCode",{parentName:"p"},"base"),", Conflux will generate about ",Object(r.b)("inlineCode",{parentName:"p"},"x")," blocks in the rest of this year and ",Object(r.b)("inlineCode",{parentName:"p"},"y")," blocks in the next year. Since Conflux generates two block per second, ",Object(r.b)("inlineCode",{parentName:"p"},"y")," approximately equals to ",Object(r.b)("inlineCode",{parentName:"p"},"2 * 60 * 60 * 24 * 365"),". And the value of ",Object(r.b)("inlineCode",{parentName:"p"},"x")," depends on when you read this article."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"If an account has 10 CFX in ",Object(r.b)("inlineCode",{parentName:"li"},"stakingBalance"),", and it calls ",Object(r.b)("inlineCode",{parentName:"li"},"voteLock(100 * 10^18, base + x)"),", then the transaction will  fail because this account tries to lock 100 CFX with insufficient ",Object(r.b)("inlineCode",{parentName:"li"},"stakingBalance"),".   "),Object(r.b)("li",{parentName:"ol"},"However, if this account calls ",Object(r.b)("inlineCode",{parentName:"li"},"voteLock(8 * 10^18, base + x)"),", the transaction will success."),Object(r.b)("li",{parentName:"ol"},"After that, if this account calls ",Object(r.b)("inlineCode",{parentName:"li"},"voteLock(6 * 10^18, base + x + y)"),", the transaction will also success. It means that 8 - 6 = 2 CFX will be unlocked until the end of this year, and another 6 CFX will be locked until the end of next year. "),Object(r.b)("li",{parentName:"ol"},"Then, if this account calls ",Object(r.b)("inlineCode",{parentName:"li"},"voteLock(0, base + x)"),", nothing will happen. The transaction will not trigger an error during execution. The internal contract will regard this call as a meaningless promise: the account will stake at least 0 CFX. The old promises made in step 2 and step 3 will still hold."),Object(r.b)("li",{parentName:"ol"},"If this account calls ",Object(r.b)("inlineCode",{parentName:"li"},"voteLock(9 * 10^18, base + x + y)"),', the old two promises will be overwritten because "locking 9 CFX until the end of the next year" is a stronger promise.')),Object(r.b)("p",null,"Locking does not have any influence on the stake interest. When the account withdraw staking balance successfully, the staking interest will be computed as usual. "),Object(r.b)("p",null,"At any time, each locked Drip will be assigned a ",Object(r.b)("em",{parentName:"p"},"vote power")," from 0 to 1 according to its unlock time. The Drips to be unlocked in more than one year will have a full vote power. See section 8.3.2 in the ",Object(r.b)("a",{parentName:"p",href:"https://conflux-protocol.s3-ap-southeast-1.amazonaws.com/tech-specification.pdf"},"Conflux Protocol Specification")," for more details."),Object(r.b)("h2",{id:"examples-2"},"Examples"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-javascript"},"const PRIVATE_KEY = '0xxxxxxx';\nconst cfx = new Conflux({\n  url: 'https://test.confluxrpc.com',\n  logger: console,\n  networkId: 1,\n});\nconst account = cfx.wallet.addPrivateKey(PRIVATE_KEY); // create account instance\n\nconst staking_contract = cfx.InternalContract('Staking');\n// deposit some amount of tokens\nstaking_contract.deposit(your_number_of_tokens).sendTransaction({\n  from: account,\n}).confirmed();\n\n// withdraw some amount of tokens\nstaking_contract.withdraw(your_number_of_tokens).sendTransaction({\n  from: account,\n}).confirmed();\n\n// lock some tokens until some block number\nstaking_contract.voteLock(your_number_of_tokens, your_unlock_block_number).sendTransaction({\n  from: account,\n}).confirmed();\n")))}d.isMDXComponent=!0},133:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(n),u=a,m=b["".concat(i,".").concat(u)]||b[u]||p[u]||r;return n?o.a.createElement(m,c(c({ref:t},s),{},{components:n})):o.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);