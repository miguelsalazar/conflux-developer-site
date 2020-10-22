(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{180:function(f,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return o})),t.d(e,"metadata",(function(){return r})),t.d(e,"rightToc",(function(){return s})),t.d(e,"default",(function(){return b}));var a=t(2),n=t(9),c=(t(0),t(202)),o={},r={id:"conflux-doc/docs/javascript-example",title:"javascript-example",description:"Smart Contracts on Conflux Chain",source:"@site/docs/conflux-doc/docs/javascript-example.md",permalink:"/docs/conflux-doc/docs/javascript-example",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-doc/docs/javascript-example.md",lastUpdatedAt:1603360555},s=[{value:"Preparation",id:"preparation",children:[]},{value:"Deploy",id:"deploy",children:[]},{value:"Call method",id:"call-method",children:[]},{value:"Summary",id:"summary",children:[]}],l={rightToc:s};function b(f){var e=f.components,t=Object(n.a)(f,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"smart-contracts-on-conflux-chain"},"Smart Contracts on Conflux Chain"),Object(c.b)("p",null,"This document will show you the way to deploy a smart contract on conflux chain and interact with it."),Object(c.b)("h2",{id:"preparation"},"Preparation"),Object(c.b)("p",null,"At the beginning, we should get the bytecode and ABI of the smart contract we want to deploy, check\n",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://solidity.readthedocs.io/en/latest/installing-solidity.html"}),"here")," for more details. Here we use Hash Time Locked Contract(HTLC):"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const data = \'0x608060405234801561001057600080fd5b5060103373ffffffffffffffffffffffffffffffffffffffff167f7067f915d1c61a35abf2d3154544a7d09111584b648bdef0826a3f4f9a19f11a60405160405180910390a3611355806100656000396000f3fe608060405260043610610078576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168063335ef5bd1461007d57806363615149146100e957806368ec2294146101465780637249fbb614610195578063bbe4fd50146101e8578063e16c7d9814610213575b600080fd5b6100d36004803603606081101561009357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190803590602001909291905050506102f3565b6040518082815260200191505060405180910390f35b3480156100f557600080fd5b5061012c6004803603604081101561010c57600080fd5b8101908080359060200190929190803590602001909291905050506107d7565b604051808215151515815260200191505060405180910390f35b34801561015257600080fd5b5061017f6004803603602081101561016957600080fd5b8101908080359060200190929190505050610cb3565b6040518082815260200191505060405180910390f35b3480156101a157600080fd5b506101ce600480360360208110156101b857600080fd5b8101908080359060200190929190505050610d7b565b604051808215151515815260200191505060405180910390f35b3480156101f457600080fd5b506101fd61119e565b6040518082815260200191505060405180910390f35b34801561021f57600080fd5b5061024c6004803603602081101561023657600080fd5b81019080803590602001909291905050506111a6565b604051808973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020018873ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200187815260200186815260200185815260200184151515158152602001831515151581526020018281526020019850505050505050505060405180910390f35b6000803411151561036c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260158152602001807f6d73672e76616c7565206d757374206265203e2030000000000000000000000081525060200191505060405180910390fd5b81428111151561040a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001807f74696d656c6f636b2074696d65206d75737420626520696e207468652066757481526020017f757265000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b60023386348787604051602001808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c010000000000000000000000000281526014018573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166c01000000000000000000000000028152601401848152602001838152602001828152602001955050505050506040516020818303038152906040526040518082805190602001908083835b6020831015156104f757805182526020820191506020810190506020830392506104d2565b6001836020036101000a038019825116818451168082178552505050505050905001915050602060405180830381855afa158015610539573d6000803e3d6000fd5b5050506040513d602081101561054e57600080fd5b8101908080519060200190929190505050915061056a826112bb565b156105dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260138152602001807f4475706c696361746520636f6e7472616374210000000000000000000000000081525060200191505060405180910390fd5b610100604051908101604052803373ffffffffffffffffffffffffffffffffffffffff1681526020018673ffffffffffffffffffffffffffffffffffffffff168152602001348152602001858152602001848152602001600015158152602001600015158152602001600060010281525060008084815260200190815260200160002060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548160ff02191690831515021790555060c08201518160050160016101000a81548160ff02191690831515021790555060e082015181600601559050508473ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16837f329a8316ed9c3b2299597538371c2944c5026574e803b1ec31d6113e1cd67bde34888860405180848152602001838152602001828152602001935050505060405180910390a4509392505050565b6000826107e3816112bb565b1515610857576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f636f6e7472616374496420646f6573206e6f742065786973740000000000000081525060200191505060405180910390fd5b8383600281604051602001808281526020019150506040516020818303038152906040526040518082805190602001908083835b6020831015156108b0578051825260208201915060208101905060208303925061088b565b6001836020036101000a038019825116818451168082178552505050505050905001915050602060405180830381855afa1580156108f2573d6000803e3d6000fd5b5050506040513d602081101561090757600080fd5b8101908080519060200190929190505050600080848152602001908152602001600020600301541415156109a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f686173686c6f636b206861736820646f6573206e6f74206d617463680000000081525060200191505060405180910390fd5b853373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610a7c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601a8152602001807f776974686472617761626c653a206e6f7420726563656976657200000000000081525060200191505060405180910390fd5b6000151560008083815260200190815260200160002060050160009054906101000a900460ff161515141515610b1a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f776974686472617761626c653a20616c72656164792077697468647261776e0081525060200191505060405180910390fd5b4260008083815260200190815260200160002060040154111515610bcc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260318152602001807f776974686472617761626c653a2074696d656c6f636b2074696d65206d75737481526020017f20626520696e207468652066757475726500000000000000000000000000000081525060400191505060405180910390fd5b6000806000898152602001908152602001600020905086816006018190555060018160050160006101000a81548160ff0219169083151502179055508060010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600201549081150290604051600060405180830381858888f19350505050158015610c76573d6000803e3d6000fd5b50877fd6fd4c8e45bf0c70693141c7ce46451b6a6a28ac8386fca2ba914044e0e2391660405160405180910390a260019550505050505092915050565b6000600282604051602001808281526020019150506040516020818303038152906040526040518082805190602001908083835b602083101515610d0c5780518252602082019150602081019050602083039250610ce7565b6001836020036101000a038019825116818451168082178552505050505050905001915050602060405180830381855afa158015610d4e573d6000803e3d6000fd5b5050506040513d6020811015610d6357600080fd5b81019080805190602001909291905050509050919050565b600081610d87816112bb565b1515610dfb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f636f6e7472616374496420646f6573206e6f742065786973740000000000000081525060200191505060405180910390fd5b823373ffffffffffffffffffffffffffffffffffffffff1660008083815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141515610ed4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f726566756e6461626c653a206e6f742073656e6465720000000000000000000081525060200191505060405180910390fd5b6000151560008083815260200190815260200160002060050160019054906101000a900460ff161515141515610f72576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601c8152602001807f726566756e6461626c653a20616c726561647920726566756e6465640000000081525060200191505060405180910390fd5b6000151560008083815260200190815260200160002060050160009054906101000a900460ff161515141515611010576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601d8152602001807f726566756e6461626c653a20616c72656164792077697468647261776e00000081525060200191505060405180910390fd5b4260008083815260200190815260200160002060040154111515156110c3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001807f726566756e6461626c653a2074696d656c6f636b206e6f74207965742070617381526020017f736564000000000000000000000000000000000000000000000000000000000081525060400191505060405180910390fd5b6000806000868152602001908152602001600020905060018160050160016101000a81548160ff0219169083151502179055508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc82600201549081150290604051600060405180830381858888f19350505050158015611164573d6000803e3d6000fd5b50847f989b3a845197c9aec15f8982bbb30b5da714050e662a7a287bb1a94c81e2e70e60405160405180910390a260019350505050919050565b600042905090565b600080600080600080600080600015156111bf8a6112bb565b1515141561120057600080600080600080600080879750869650859550846001029450839350806001029050975097509750975097509750975097506112b0565b60008060008b815260200190815260200160002090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168160010160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff168260020154836003015484600401548560050160009054906101000a900460ff168660050160019054906101000a900460ff16876006015487975086965098509850985098509850985098509850505b919395975091939597565b60008073ffffffffffffffffffffffffffffffffffffffff1660008084815260200190815260200160002060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415905091905056fea165627a7a72305820933970f75b5a7e373d3dcd9b9b46074042159b21a16d450c072e94ab9230d2ec0029\';\nconst abi = [{"constant":false,"inputs":[{"name":"_receiver","type":"address"},{"name":"_hashlock","type":"bytes32"},{"name":"_timelock","type":"uint256"}],"name":"newContract","outputs":[{"name":"contractId","type":"bytes32"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"_contractId","type":"bytes32"},{"name":"_preimage","type":"bytes32"}],"name":"withdraw","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_x","type":"bytes32"}],"name":"getSha256","outputs":[{"name":"hashvalue","type":"bytes32"}],"payable":false,"stateMutability":"pure","type":"function"},{"constant":false,"inputs":[{"name":"_contractId","type":"bytes32"}],"name":"refund","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getNow","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_contractId","type":"bytes32"}],"name":"getContract","outputs":[{"name":"sender","type":"address"},{"name":"receiver","type":"address"},{"name":"amount","type":"uint256"},{"name":"hashlock","type":"bytes32"},{"name":"timelock","type":"uint256"},{"name":"withdrawn","type":"bool"},{"name":"refunded","type":"bool"},{"name":"preimage","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"contractId","type":"bytes32"},{"indexed":true,"name":"sender","type":"address"},{"indexed":true,"name":"receiver","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"hashlock","type":"bytes32"},{"indexed":false,"name":"timelock","type":"uint256"}],"name":"LogHTLCNew","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"contractId","type":"bytes32"}],"name":"LogHTLCWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"contractId","type":"bytes32"}],"name":"LogHTLCRefund","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"by","type":"address"},{"indexed":true,"name":"flag","type":"uint256"}],"name":"Constructed","type":"event"}];\n')),Object(c.b)("p",null,"The source code of corresponding Solidity code can be found here: "),Object(c.b)("p",null,Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/posaggen/confluxWeb-HTLC-Example/blob/master/HashedTimelock.sol"}),"https://github.com/posaggen/confluxWeb-HTLC-Example/blob/master/HashedTimelock.sol")),Object(c.b)("p",null,"We will use this smart contract as example in the rest of this document."),Object(c.b)("h2",{id:"deploy"},"Deploy"),Object(c.b)("p",null,"Create a confluxWeb instance and set a proper provider:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const ConfluxWeb = require('conflux-web');\nconst confluxWeb = new ConfluxWeb('http://testnet-jsonrpc.conflux-chain.org:12537');\n")),Object(c.b)("p",null,"Add a wallet account using your private key. For new Conflux user, new accounts can be created from official website: ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://wallet.confluxscan.io/login"}),"https://wallet.confluxscan.io/login")),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const priv_key = '0xdd84f341fb45c764a094d35bf484367b8d2797a997142f9c5cd4d488556f0db7';\nconst pub_key = '0x81f3521d71990945b99e1c592750d7157f2b544f';\nconfluxWeb.cfx.accounts.wallet.add(priv_key);\n")),Object(c.b)("p",null,"Check your balance. For new Conflux users, they can claim some conflux test token at the mainpage of web wallet."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"ConfluxWeb.cfx.getBalance(pub_key).then(console.log);\n")),Object(c.b)("p",null,"Construct a contract instance with ABI:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const cfx_htlc = new confluxWeb.cfx.Contract(abi);\n")),Object(c.b)("p",null,"call deploy() method and send the transaction to create contract, get the transaction hash:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const tx_hash = await cfx_htlc.deploy({\n  data: data,\n}).send({\n  from: pub_key,\n  gas: 10000000,\n  gasPrice: 100,\n});\n")),Object(c.b)("p",null,"Here, our contract creation transaction has been sent and we should wait for its receipt to make sure the transaction has been\nconfirmed and executed. Following function periodically requests transaction receipt from Conflux chain until it got the receipt\nwhose state root is not empty, which means the transaction has been executed successfully and the state tree has been computed."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const sleep = (ms) => {\n  return new Promise(resolve => setTimeout(resolve, ms));\n};\n\nasync function waitForReceipt(hash) {\n  while (true) {\n    // get receipt\n    let res = await confluxWeb.cfx.getTransactionReceipt(hash);\n    if (res != null) {\n      // make sure state root is already calculated\n      if (res.stateRoot != '0x0000000000000000000000000000000000000000000000000000000000000000') {\n        return res;\n      }  \n    }\n    await sleep(10000);\n  }\n}\n")),Object(c.b)("p",null,"Retrieve transaction receipt and get the address of the smart contract created in this transaction:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const receipt = await waitForReceipt(tx_hash);\nlet cfx_htlc_addr = receipt.contractCreated;\n")),Object(c.b)("p",null,"Now we have deployed the HTLC successfully. Here is a summary of the code about deploy:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"async function deployHTLC() {\n  // get contract instance from abi\n  const cfx_htlc = new confluxWeb.cfx.Contract(abi);\n  // deploy contract and send transaction\n  const tx_hash = await cfx_htlc.deploy({\n    data: data,\n  }).send({\n    from: pub_key,\n    gas: 10000000,\n    gasPrice: 100,\n  });\n  // wait for receipt\n  const receipt = await waitForReceipt(tx_hash);\n  return receipt.contractCreated;\n}\n")),Object(c.b)("h2",{id:"call-method"},"Call method"),Object(c.b)("p",null,"In this session, we will fund some money to the HTLC and build a hash timed lock."),Object(c.b)("p",null,"Firstly, we need to set the hash secret, timelock and amount of conflux:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'const secret = "0xc4d2751c52311d0d7efe44e5c4195e058ad5ef4bb89b3e1761b24dc277b132c2";\nconst secret_hash = "0x2bc79b7514884ab00da924607d71542cc4fed3beb8518e747726ae30ab6c7944";\nconst timelock = confluxWeb.utils.toHex(BigNumber((new Date()).getTime() + 3600 * 72));\nconst amount = confluxWeb.utils.toHex(BigNumber(10000000000000000)); // 1e16 = 0.01 cfx(eth) \n')),Object(c.b)("p",null,"Then we try to interact with the HTLC we deployed just now. To do this, we need to construct a contract instance from\nthe contract address and ABI:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const cfx_htlc = new confluxWeb.cfx.Contract(abi, cfx_htlc_addr);\n")),Object(c.b)("p",null,"Same as above, we call the newContract method and send a transaction, then wait for its receipt."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const tx_hash = await cfx_htlc.methods.newContract(pub_key, secret_hash, timelock).send({\n  from: pub_key,\n  gas: 10000000,\n  gasPrice: 100,\n  value: amount,\n});\nconst receipt = await waitForReceipt(tx_hash);\n")),Object(c.b)("p",null,"After that, we successfully created a new hash timed lock and we can check its id from the events emitted during the execution\nof the smart contract method:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let logs = await confluxWeb.cfx.getPastLogs({\n  fromEpoch: 'earliest',\n  toEpoch: 'latest_mined',\n  address : cfx_htlc_addr,\n  topics: [confluxWeb.utils.soliditySha3(\"LogHTLCNew(bytes32,address,address,uint256,bytes32,uint256)\")],\n});\nlet htlc_id = null;\nfor (let i = 0; i < logs.length; ++i)\n  if (logs[i].transactionHash === tx_hash)\n    htlc_id = logs[i].topics[1];\n")),Object(c.b)("p",null,"Summary of the code of this session:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"async function fund(cfx_htlc_addr) {\n  // get contract instance from address and abi\n  const cfx_htlc = new confluxWeb.cfx.Contract(abi, cfx_htlc_addr);\n  // call methods newContract() to build a new htlc to pub_key itself\n  const tx_hash = await cfx_htlc.methods.newContract(pub_key, secret_hash, timelock).send({\n    from: pub_key,\n    gas: 10000000,\n    gasPrice: 100,\n    value: amount,\n  });\n  const receipt = await waitForReceipt(tx_hash);\n  // get the created hash time lock id from event logs\n  let logs = await confluxWeb.cfx.getPastLogs({\n    fromEpoch: 'earliest',\n    toEpoch: 'latest_mined',\n    address : cfx_htlc_addr,\n    topics: [confluxWeb.utils.soliditySha3(\"LogHTLCNew(bytes32,address,address,uint256,bytes32,uint256)\")],\n  });\n  for (let i = 0; i < logs.length; ++i)\n    if (logs[i].transactionHash === tx_hash)\n      return logs[i].topics[1];\n}\n")),Object(c.b)("p",null,"##Check\nWe can will use a 'constant' call to getContract method to check the hash timed lock we created, make sure its parameters is correct:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'// check if created HTLC is valid using a "constant" call\nasync function checkHTLC(cfx_htlc_addr, htlc_id) {\n  // get contract instance from address and abi\n  const cfx_htlc = new confluxWeb.cfx.Contract(abi, cfx_htlc_addr);\n  // make a call to get information of HTLC with htlc_id\n  let c = await cfx_htlc.methods.getContract(htlc_id).call(); \n  // check information\n  if (pub_key !== c[0].toLowerCase() ||\n      pub_key !== c[1].toLowerCase() ||\n      amount !== confluxWeb.utils.toHex(c[2]) ||\n      secret_hash !== c[3] ||\n      timelock !== confluxWeb.utils.toHex(c[4]) ||\n      c[5] ||\n      c[6]) {\n    return false;\n  }\n  return true;\n}\n')),Object(c.b)("p",null,"##Withdraw\nNow we want to withdraw the money. Similar to fund, we call withdraw method to do this:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"async function withdraw(cfx_htlc_addr, htlc_id) {\n  // get contract instance from address and abi\n  const cfx_htlc = new confluxWeb.cfx.Contract(abi, cfx_htlc_addr);\n  // call methods newContract() to build a new htlc to pub_key itself\n  const tx_hash = await cfx_htlc.methods.withdraw(htlc_id, secret).send({\n    from: pub_key,\n    gas: 10000000,\n    gasPrice: 100,\n  });\n  const receipt = await waitForReceipt(tx_hash);\n  return receipt.outcomeStatus;\n}\n")),Object(c.b)("h2",{id:"summary"},"Summary"),Object(c.b)("p",null,"In this document, we showed the basic ways to use ConfluxWeb library to develop smart contract on Conflux chain, including\ndeployment, interaction, monitoring the events. The summary of the HTLC demo can be found ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/posaggen/confluxWeb-HTLC-Example"}),"here"),"."))}b.isMDXComponent=!0},202:function(f,e,t){"use strict";t.d(e,"a",(function(){return i})),t.d(e,"b",(function(){return p}));var a=t(0),n=t.n(a);function c(f,e,t){return e in f?Object.defineProperty(f,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):f[e]=t,f}function o(f,e){var t=Object.keys(f);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(f);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(f,e).enumerable}))),t.push.apply(t,a)}return t}function r(f){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){c(f,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(f,e,Object.getOwnPropertyDescriptor(t,e))}))}return f}function s(f,e){if(null==f)return{};var t,a,n=function(f,e){if(null==f)return{};var t,a,n={},c=Object.keys(f);for(a=0;a<c.length;a++)t=c[a],e.indexOf(t)>=0||(n[t]=f[t]);return n}(f,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(f);for(a=0;a<c.length;a++)t=c[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(f,t)&&(n[t]=f[t])}return n}var l=n.a.createContext({}),b=function(f){var e=n.a.useContext(l),t=e;return f&&(t="function"==typeof f?f(e):r(r({},e),f)),t},i=function(f){var e=b(f.components);return n.a.createElement(l.Provider,{value:e},f.children)},d={inlineCode:"code",wrapper:function(f){var e=f.children;return n.a.createElement(n.a.Fragment,{},e)}},u=n.a.forwardRef((function(f,e){var t=f.components,a=f.mdxType,c=f.originalType,o=f.parentName,l=s(f,["components","mdxType","originalType","parentName"]),i=b(t),u=a,p=i["".concat(o,".").concat(u)]||i[u]||d[u]||c;return t?n.a.createElement(p,r(r({ref:e},l),{},{components:t})):n.a.createElement(p,r({ref:e},l))}));function p(f,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof f||a){var c=t.length,o=new Array(c);o[0]=u;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=f,r.mdxType="string"==typeof f?f:a,o[1]=r;for(var l=2;l<c;l++)o[l]=t[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);