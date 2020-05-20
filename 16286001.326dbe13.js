(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{138:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var r=a(1),n=a(9),l=(a(0),a(217)),b={},i={id:"conflux-rust/accounts/cfxstore/README",title:"README",description:"## cfxstore-cli",source:"@site/docs/conflux-rust/accounts/cfxstore/README.md",permalink:"/docs/conflux-rust/accounts/cfxstore/README",editUrl:"https://github.com/Conflux-Chain/conflux-developer-site/edit/master/docs/conflux-rust/accounts/cfxstore/README.md",lastUpdatedBy:"ConfluxBot",lastUpdatedAt:1589954421},c=[{value:"cfxstore-cli",id:"cfxstore-cli",children:[{value:"Usage",id:"usage",children:[]},{value:"Examples",id:"examples",children:[]}]}],p={rightToc:c};function o(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(r.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"cfxstore-cli"},"cfxstore-cli"),Object(l.b)("p",null,"Conflux key management. It is built on top of the Parity Ethereum counterpart."),Object(l.b)("h3",{id:"usage"},"Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"Conflux key management tool.\n  Copyright 2020 Conflux Foundation\n\nUsage:\n    cfxstore insert <secret> <password> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]\n    cfxstore change-pwd <address> <old-pwd> <new-pwd> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]\n    cfxstore list [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]\n    cfxstore import [--src DIR] [--dir DIR]\n    cfxstore import-wallet <path> <password> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]\n    cfxstore find-wallet-pass <path> <password>\n    cfxstore remove <address> <password> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]\n    cfxstore sign <address> <password> <message> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]\n    cfxstore public <address> <password> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]\n    cfxstore list-vaults [--dir DIR]\n    cfxstore create-vault <vault> <password> [--dir DIR]\n    cfxstore change-vault-pwd <vault> <old-pwd> <new-pwd> [--dir DIR]\n    cfxstore move-to-vault <address> <vault> <password> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]\n    cfxstore move-from-vault <address> <vault> <password> [--dir DIR]\n    cfxstore [-h | --help]\n\nOptions:\n    -h, --help               Display this message and exit.\n    --dir DIR                Specify the secret store directory. It may be either\n                             parity, parity-(chain), geth, geth-test\n                             or a path [default: parity].\n    --vault VAULT            Specify vault to use in this operation.\n    --vault-pwd VAULTPWD     Specify vault password to use in this operation. Please note\n                             that this option is required when vault option is set.\n                             Otherwise it is ignored.\n    --src DIR                Specify import source. It may be either\n                             parity, parity-(chain), geth, geth-test\n                             or a path [default: geth].\n\nCommands:\n    insert             Save account with password.\n    change-pwd         Change password.\n    list               List accounts.\n    import             Import accounts from src.\n    import-wallet      Import presale wallet.\n    find-wallet-pass   Tries to open a wallet with list of passwords given.\n    remove             Remove account.\n    sign               Sign message.\n    public             Displays public key for an address.\n    list-vaults        List vaults.\n    create-vault       Create new vault.\n    change-vault-pwd   Change vault password.\n    move-to-vault      Move account to vault from another vault/root directory.\n    move-from-vault    Move account to root directory from given vault.\n")),Object(l.b)("h3",{id:"examples"},"Examples"),Object(l.b)("h4",{id:"insert-secret-password---dir-dir---vault-vault---vault-pwd-vaultpwd"},Object(l.b)("inlineCode",{parentName:"h4"},"insert <secret> <password> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Encrypt secret with a password and save it in secret store.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<secret>")," - conflux secret, 32 bytes long"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<password>")," - account password, file path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--dir DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: parity"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault VAULT]")," - vault to use in this operation"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault-pwd VAULTPWD]")," - vault password to use in this operation, file path")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore insert 7d29fab185a33e2cd955812397354c472d2b84615b645aa135ff539f6b0d70d5 password.txt\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"a8fa5dd30a87bb9e3288d604eb74949c515ab66e\n")),Object(l.b)("p",null,"--"),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),'cfxstore insert `cfxkey generate random -s` "this is sparta"\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"24edfff680d536a5f6fe862d36df6f8f6f40f115\n")),Object(l.b)("p",null,"--"),Object(l.b)("h4",{id:"change-pwd-address-old-pwd-new-pwd---dir-dir---vault-vault---vault-pwd-vaultpwd"},Object(l.b)("inlineCode",{parentName:"h4"},"change-pwd <address> <old-pwd> <new-pwd> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Change account password.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<address>")," - conflux address, 20 bytes long"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<old-pwd>")," - old account password, file path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<new-pwd>")," - new account password, file path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--dir DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: parity"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault VAULT]")," - vault to use in this operation"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault-pwd VAULTPWD]")," - vault password to use in this operation, file path")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore change-pwd a8fa5dd30a87bb9e3288d604eb74949c515ab66e old_pwd.txt new_pwd.txt\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"true\n")),Object(l.b)("p",null,"--"),Object(l.b)("h4",{id:"list---dir-dir---vault-vault---vault-pwd-vaultpwd"},Object(l.b)("inlineCode",{parentName:"h4"},"list [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"List secret store accounts.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--dir DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: parity"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault VAULT]")," - vault to use in this operation"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault-pwd VAULTPWD]")," - vault password to use in this operation, file path")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore list\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{})," 0: 24edfff680d536a5f6fe862d36df6f8f6f40f115\n 1: 6edddfc6349aff20bc6467ccf276c5b52487f7a8\n 2: e6a3d25a7cb7cd21cb720df5b5e8afd154af1bbb\n")),Object(l.b)("p",null,"--"),Object(l.b)("h4",{id:"import---src-dir---dir-dir"},Object(l.b)("inlineCode",{parentName:"h4"},"import [--src DIR] [--dir DIR]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Import accounts from src.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--src DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: geth"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--dir DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: parity")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore import\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{})," 0: e6a3d25a7cb7cd21cb720df5b5e8afd154af1bbb\n 1: 6edddfc6349aff20bc6467ccf276c5b52487f7a8\n")),Object(l.b)("p",null,"--"),Object(l.b)("h4",{id:"import-wallet-path-password---dir-dir---vault-vault---vault-pwd-vaultpwd"},Object(l.b)("inlineCode",{parentName:"h4"},"import-wallet <path> <password> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Import account from presale wallet.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<path>")," - presale wallet path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<password>")," - account password, file path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--dir DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: parity"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault VAULT]")," - vault to use in this operation"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault-pwd VAULTPWD]")," - vault password to use in this operation, file path")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore import-wallet ethwallet.json password.txt\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"e6a3d25a7cb7cd21cb720df5b5e8afd154af1bbb\n")),Object(l.b)("p",null,"--"),Object(l.b)("h4",{id:"find-wallet-pass-path-password"},Object(l.b)("inlineCode",{parentName:"h4"},"find-wallet-pass <path> <password>")),Object(l.b)("p",null,"Try to open presale wallet given a list of passwords from a file.\nThe list of passwords can be generated using e.g. ",Object(l.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/Phildo/brutedist"}),"Phildo/brutedist"),"."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<path>")," - presale wallet path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<password>")," - possible passwords, file path")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore find-wallet-pass ethwallet.json passwords.txt\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"Found password: test\n")),Object(l.b)("p",null,"--"),Object(l.b)("h4",{id:"remove-address-password---dir-dir---vault-vault---vault-pwd-vaultpwd"},Object(l.b)("inlineCode",{parentName:"h4"},"remove <address> <password> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Remove account from secret store.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<address>")," - conflux address, 20 bytes long"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<password>")," - account password, file path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--dir DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: parity"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault VAULT]")," - vault to use in this operation"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault-pwd VAULTPWD]")," - vault password to use in this operation, file path")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore remove a8fa5dd30a87bb9e3288d604eb74949c515ab66e password.txt\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"true\n")),Object(l.b)("p",null,"--"),Object(l.b)("h4",{id:"sign-address-password-message---dir-dir---vault-vault---vault-pwd-vaultpwd"},Object(l.b)("inlineCode",{parentName:"h4"},"sign <address> <password> <message> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Sign message with account's secret.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<address>")," - conflux address, 20 bytes long"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<password>")," - account password, file path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<message>")," - message to sign, 32 bytes long"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--dir DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: parity"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault VAULT]")," - vault to use in this operation"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault-pwd VAULTPWD]")," - vault password to use in this operation, file path")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore sign 24edfff680d536a5f6fe862d36df6f8f6f40f115 password.txt 7d29fab185a33e2cd955812397354c472d2b84615b645aa135ff539f6b0d70d5\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"c6649f9555232d90ff716d7e552a744c5af771574425a74860e12f763479eb1b708c1f3a7dc0a0a7f7a81e0a0ca88c6deacf469222bb3d9c5bf0847f98bae54901\n")),Object(l.b)("p",null,"--"),Object(l.b)("h4",{id:"public-address-password---dir-dir---vault-vault---vault-pwd-vaultpwd"},Object(l.b)("inlineCode",{parentName:"h4"},"public <address> <password> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Displays public key for an address.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<address>")," - conflux address, 20 bytes long"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<password>")," - account password, file path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--dir DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: parity"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault VAULT]")," - vault to use in this operation"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault-pwd VAULTPWD]")," - vault password to use in this operation, file path")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore public 00e63fdb87ceb815ec96ae185b8f7381a0b4a5ea account_password.txt --vault vault_name --vault-pwd vault_password.txt\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"0x84161d8c05a996a534efbec50f24485cfcc07458efaef749a1b22156d7836c903eeb39bf2df74676e702eacc4cfdde069e5fd86692b5ef6ef81ba906e9e77d82\n")),Object(l.b)("p",null,"--"),Object(l.b)("h4",{id:"list-vaults---dir-dir"},Object(l.b)("inlineCode",{parentName:"h4"},"list-vaults [--dir DIR]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"List vaults.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--dir DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: parity")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore list-vaults\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"vault1\nvault2\nvault3\n")),Object(l.b)("p",null,"--"),Object(l.b)("h4",{id:"create-vault-vault-password---dir-dir"},Object(l.b)("inlineCode",{parentName:"h4"},"create-vault <vault> <password> [--dir DIR]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Create new vault.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<vault>")," - name of new vault. This can only contain letters, digits, whitespaces, dashes and underscores"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<password>")," - vault password, file path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--dir DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: parity")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore create-vault vault3 vault3_password.txt\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"OK\n")),Object(l.b)("p",null,"--"),Object(l.b)("h4",{id:"change-vault-pwd-vault-old-pwd-new-pwd---dir-dir"},Object(l.b)("inlineCode",{parentName:"h4"},"change-vault-pwd <vault> <old-pwd> <new-pwd> [--dir DIR]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Change vault password.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<vault>")," - name of existing vault"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<old-pwd>")," - old vault password, file path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<new-pwd>")," - new vault password, file path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--dir DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: parity")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore change-vault-pwd vault3 vault3_password.txt new_vault3_password.txt\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"OK\n")),Object(l.b)("p",null,"--"),Object(l.b)("h4",{id:"move-to-vault-address-vault-password---dir-dir---vault-vault---vault-pwd-vaultpwd"},Object(l.b)("inlineCode",{parentName:"h4"},"move-to-vault <address> <vault> <password> [--dir DIR] [--vault VAULT] [--vault-pwd VAULTPWD]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Move account to vault from another vault/root directory.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<address>")," - conflux address, 20 bytes long"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<vault>")," - name of existing vault to move account to"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<password>")," - password of existing ",Object(l.b)("inlineCode",{parentName:"li"},"<vault>")," to move account to, file path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--dir DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: parity"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault VAULT]")," - current vault of the ",Object(l.b)("inlineCode",{parentName:"li"},"<address>")," argument, if set"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--vault-pwd VAULTPWD]")," - password for the current vault of the ",Object(l.b)("inlineCode",{parentName:"li"},"<address>")," argument, if any. file path")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore move-to-vault 00e63fdb87ceb815ec96ae185b8f7381a0b4a5ea vault3 vault3_password.txt\ncfxstore move-to-vault 00e63fdb87ceb815ec96ae185b8f7381a0b4a5ea vault1 vault1_password.txt --vault vault3 --vault-pwd vault3_password.txt\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"OK\nOK\n")),Object(l.b)("p",null,"--"),Object(l.b)("h4",{id:"move-from-vault-address-vault-password---dir-dir"},Object(l.b)("inlineCode",{parentName:"h4"},"move-from-vault <address> <vault> <password> [--dir DIR]")),Object(l.b)("p",null,Object(l.b)("em",{parentName:"p"},"Move account to root directory from given vault.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<address>")," - conflux address, 20 bytes long"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<vault>")," - name of existing vault to move account to"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"<password>")," - password of existing ",Object(l.b)("inlineCode",{parentName:"li"},"<vault>")," to move account to, file path"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"[--dir DIR]")," - secret store directory, It may be either parity, parity-test, geth, geth-test or a path. default: parity")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"cfxstore move-from-vault 00e63fdb87ceb815ec96ae185b8f7381a0b4a5ea vault1 vault1_password.txt\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(r.a)({parentName:"pre"},{}),"OK\n")))}o.isMDXComponent=!0},217:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=n.a.createContext({}),o=function(e){var t=n.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},d=function(e){var t=o(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,b=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=o(a),u=r,O=d["".concat(b,".").concat(u)]||d[u]||s[u]||l;return a?n.a.createElement(O,i({ref:t},p,{components:a})):n.a.createElement(O,i({ref:t},p))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,b=new Array(l);b[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,b[1]=i;for(var p=2;p<l;p++)b[p]=a[p];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);