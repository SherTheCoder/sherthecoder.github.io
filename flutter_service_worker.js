'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a8e939f3c95058b02fdb09ca7b2d5621",
"version.json": "cc1fa9cce5af273c0909d105387fee89",
"index.html": "fb7bf6eb616edb2695e3be63dbefff35",
"/": "fb7bf6eb616edb2695e3be63dbefff35",
"main.dart.js": "a3a178a95cf47b6d2fa05b7c5f7c6fbb",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"README.md": "579429dc33a11fe6a0f13cbea39fd165",
"favicon.png": "c28692d45435462176f98716cac6e340",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a67989697c366cf4f821bde4733a6ca8",
".git/config": "311e0dd0824f10860b355e713342c386",
".git/objects/0c/9607e18847779b4ed5bffab53602e27d30e2f8": "ddd25de4e46b04103d50294bfe030a07",
".git/objects/0c/f8a8d4498956da4014f5c98cd34bcd42dbead9": "5753026c67ba86957b6f98eb5c771898",
".git/objects/66/dadb1da8021502fe2eb546025a84a76eebb443": "65f84d09f93cfb542936be45019e9860",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/50/708f724a568e5f9f39d29eb1bdd3033ecb9e6c": "707a648a9d83808dfb62ef819f2f3d0f",
".git/objects/68/0b88a7d8170b02f2307b9e9f78fabb818f245f": "9f57ecca2925ed6d357145e204aa6259",
".git/objects/3b/8e34ce1b6b3f7d3baa956bb18f9137295a9337": "e9956cf41d25448e16d4bbc1bd01df43",
".git/objects/03/9d4b25dcf1b82bca742404a0c6a295eae3a404": "8eacf2d24dd001bcd25d2689aea77362",
".git/objects/9b/ffc576fc575e2355fd9a9d1cb071ef7d7050f3": "ce030a15fca28ec3e75f210bd071e4ea",
".git/objects/9e/0527992162e6b69a36a9b6fdcea25dd49f39ad": "ab55952d29744f450bf505500bdfcb61",
".git/objects/04/d86fcb035a896d5daa1d036e7496f26290bcdb": "6e61c6753e6ff1225a5d1724a2cc7bef",
".git/objects/04/6973c9119c9d10832df115a06bb3d19d2366bd": "45db488b116c0ec287fefdb96fc00f4a",
".git/objects/04/9f181a32e940efe9d5600c1b9396e6652804e1": "9bb333ffe95da94068fc859a8995f889",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/51/e532b448dd138667956045bcfef77d88e5b837": "7ccff6020fb48ab76c39017bc781cf5b",
".git/objects/3d/31822017a038df26647304179ae7c2f9ea6a33": "5d6d55a6c27d417dd1b897c0e028703a",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/67/8bcdb3955cc077889448dac58e1a89d38f306e": "e322ac49f54e0e2315edcdd3af4efdfa",
".git/objects/67/1aba3cf681c385d2fbc7d5c013155246f546ee": "e57e675edca84fb0e3d5a55406daf7b8",
".git/objects/94/1546451b7dc905d10353bb9c33d5e74a9638bf": "7ae38a8c4b6a14185d9619ed428e01e2",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5a/6fd3850b2bf5bc9e6de0053cb443a042dd4b4f": "d830607cce4182e0ed7f612caf728c51",
".git/objects/5a/9e3e0b9f3c92750d4a9935bd0167d851fd7524": "93321244f11928ca58a786d3dc566685",
".git/objects/33/fc3fbd56885f4f88d769c863c2b317a24ba9c3": "87ffb4616107b5c2e9a900799a2ee7c0",
".git/objects/9d/39ec1971728cb5dd3d0a2a40586179f86344e7": "0826983c9bb8e07448a28399211acf13",
".git/objects/9d/2a1438a15cf0a88fb6e2db9979efbc56e1ce22": "7094120bd7ed82ee597ee48976124a5f",
".git/objects/9d/23278c219328998ea6a71e96f6033174694950": "cde775d0c5b20685783b4caaccbb0294",
".git/objects/02/fcd3aa665f43af22b750bf6985c9691a2805d4": "00a98463ec8d2654e1c22879262c8df2",
".git/objects/a4/24b0c5eb156422c96dc68b3dd43db20da99042": "769457c3cfd09e892d5c12fcf8e1ed07",
".git/objects/a4/3d4b51895d6b8472af9d0f4e835ff56c8c3148": "ab66e65cc92b65caee1da9b373e21fec",
".git/objects/a4/f0df6e71daaaa055d0f619ff6eb3ed5b3deda8": "43e3127b616cc19619228c981d3537e6",
".git/objects/a3/833d630eb86fa01eac2f0f1f337c5ea21cf003": "e06b6c2bc62a4761d827ea7bd943901b",
".git/objects/b2/2aaf8d18c2f67b1b3854660ce6f6fad7e18240": "8f6d73a789c252fdf59ddf83ffadbe18",
".git/objects/b2/dda923bc0069624056631bc0b2e8fe6be0babe": "2fc0f50b63cfb0491ce16f76776568fe",
".git/objects/d9/e39e9bfa7c8398e1793e130a73ed85377557df": "6c9f042afacbcf0514f9d986fb58ec11",
".git/objects/d9/edd507d175bdc47878a82f721e2c4a754b0d47": "11c62ef4ca3a7a01ab1cffb708776e0e",
".git/objects/bb/934cc3ceef81c708d9be90b825a02414e5c702": "6264fe0193fa68daa3ec3e27be0d4dfe",
".git/objects/bb/752d787a3dddac8dbd3d56fd7b7cfbd98068e6": "02225d31cb12ab95532cd33c547a0f9d",
".git/objects/d0/526a1dba58373bd4d50ca27ac6232539c32493": "4d47dfe6a7ce9d3fa151d0150a7ca677",
".git/objects/d0/cf9de27d5faf03db60af50be20271ce47e2411": "4a942d6cc5b93e0d38475e0b935b82d2",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/da/7c3eb4b0fec4d4d330ade15b0038e617695004": "8dba0861cb7e5a0d87d7ff16ebce9312",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/bd/87dfde956168992509b699f17a2154923819f8": "e200a46878dbd122d9788224aa2767de",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/74c2bf7d6b6f55eb597296ad852976fc978472": "e2101bfdf4b084c768df719375a4e39e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/2f9066959a73b196dd7386cf21b0adb9dac64b": "8e4822c502a7bb325b17ed6ad5cabf2c",
".git/objects/c9/614946a13ab33599d639d5de2869255d876f26": "aaf507731abeee4c7199e3b35bfc8a9d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/fd/d7b99d2c9c3de6e4b3a702caae61e0c78a18dc": "4a319ca84609c23e3a98ec743ed0dc38",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/be55af0a80bc761f1aa8f6e3cc75369b4a439d": "568c25f14055fbf14f789afabadd1517",
".git/objects/ca/01327f294e8c62e9969639f5af861f0bb7a1f3": "931419369753e768402f4e784ab077ff",
".git/objects/ca/3ae67fc5be97062193aacb237abd32d0849c24": "d9904384941c822aa8a3296ed00b6162",
".git/objects/e4/fc6cea61c4bb9c023198d5e82a63cdce7be21f": "ec41310f75c34b1aed9d0c893c871d62",
".git/objects/e4/d8b4560b573cffe04a074cd0a288f1400dff9d": "79c4722f2c9be89329c275a02a3a197a",
".git/objects/e4/8d6d1356a5dc40349735b535969c952e37ce7c": "0db27faa1e87d7b66466287b19c7dafa",
".git/objects/fe/f6692c50e32d24e753c71b6c0b90b1c03b4109": "1167484d3e6cb39476c1cc9633be2e27",
".git/objects/fe/4afd29d28f908b68023185061696b0c51be5ef": "d9d39761113ffd831213ab075c9d13bd",
".git/objects/fe/0f3a0a07b2fe9c05350e1e64ec397cf128ef1b": "00d197373a7fc3bbf50c4001c825a802",
".git/objects/fe/009a16faf03ed1711ce60cc9b93ea20f494e37": "e18c6fa7ddded2ce7718ff00c0e055c6",
".git/objects/c8/88daefbd1d66bace056bc357659aa2682f43bf": "f22f9f1857739b4c916e397aafa12aa8",
".git/objects/fb/1a2fb38490497cb672a18d0b4f6996b84ae9e4": "54cedbbf85582a8ba4064e7d948049f8",
".git/objects/ed/1551c7a9881ecb2c383e4da4636764dddb4d8c": "2bea0b3c50af4acf9d3307ac58fec968",
".git/objects/ed/7fa49de31434d7688452eed362147007983f44": "d674f47342858ac8e3dd770018ad9d8c",
".git/objects/c1/bd14f429f22affee9c353b231af9eed65a0b87": "7f53a4a7c46bde77ef9159b44070ed00",
".git/objects/c1/686e9e374f910f457dc9f5b943879b6fc1999c": "81d5c3f2e5ef1d4b3d3099b795f14099",
".git/objects/c6/6c5d295f8e6802b806290ef52d1499ab6a2f86": "bc3c8b1d7cc9eab0f4618e545ce38846",
".git/objects/c6/e0fd2fbf057ef56224417aa9a11b77b6c8157c": "dbca3bb7a5ad509b1d3ea3c59e26bfd7",
".git/objects/c6/538b85bde9adc6dc8c6f38ef0d63f5d4a8a441": "bc1afaa36f2ecd3def383364f9a9dd7e",
".git/objects/ec/31fa968cb9c8bcce8f6947c8338ef9ab751c6a": "a8c70f79165288d69db269e29853751f",
".git/objects/20/e2cccad50f8d094a39dd4194b7d848f36cf88f": "0b12c614b4bf2495117cb766568b483d",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/cd8793fe1654f37ba6ce85a3a71d3c04330a0a": "afb3d745b61172c524d115ead0aaa1a6",
".git/objects/27/4290da986b18013e37019313806801f9ff1999": "d4b8fac5af7c6f0dbcee98a2112c9195",
".git/objects/27/610481eee0860342ecebe9d505d3c457324ab3": "c44462d14b1b1774f3ec80ffbfa08e21",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/ec60623cec397a504f6dcf2f0e69e7892c0548": "5596e7e5a1374d81f87c6e6c0f861c1b",
".git/objects/7c/61906cccad054de5482e6234c6f8f8f66d1093": "bc462f06cf939f0d84d4c912b82ef68a",
".git/objects/42/2d00490da3ad5fcfa753bf5dc73ea57f9e2573": "977b1f0e84404cd10d4d4b1c026da8fa",
".git/objects/45/72bd2e3ab22421f3774a4665571d0885df7f4f": "bebfd05f1ba1bf7ce5d6e7e69bad3cfb",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/51afa7ae34c585accd28cfe4d14ab84f59078f": "af7ec23b92858a3063794e9a87ae2362",
".git/objects/80/15ae96611373b897feca03332ca33422ca0d0b": "994b183cb725f162d31d761987d226bc",
".git/objects/8f/2de32845ac36fb1f24b54712e17c4c56890aa0": "ca4cb3b988f8a1e101fa779fa21e1d65",
".git/objects/8a/28bff88003c75ba1f9eb4e66a6c958e70ef073": "27ef7ac4e1260c156c5250e03678cc4c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/331a76265dd25846a93a049f26882babfa20ed": "2e22b57f48fb7978b4d7bdbfc9965362",
".git/objects/21/87b16a62d7b6d7e821c62721f67e4a3891c565": "8548f00ae80c1d6f3362c9d06b081081",
".git/objects/72/92ec85fc1598a028975924f507bf8ad9c13bbf": "632d678c8a918d84bffd4489efe6df7c",
".git/objects/44/d66e0fe058e29fe7e61be6524d3a08ff9910aa": "821340f8acf42805fcdfd9f4769b9798",
".git/objects/44/59880050896bc9bd09fc758565e3836d8d7f32": "19aa79ce2810ee15a56367b10905b80a",
".git/objects/88/ac131e78294523910b78812633f74ed71f100f": "0a4b03808d143dc6547299cfa878e4fc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/e8304e1f9032e6652feff4b2492d94ef0dc78b": "c1cd261f4a14e71ebf3eb628ef7bf5ab",
".git/objects/9f/f012f8ac0995f74474e7e36505a5958530ae74": "3bbe368d0df49da8aa78f9c5b197c6da",
".git/objects/9f/8286703ecaaa314bec6781ed7f8428c2da6ba9": "570dcca9becde4381f7bf62c5b4ee4a0",
".git/objects/6b/6601b5c058a1a3d778706456b222dd592daeb8": "3051c5d6bd8e89618ad5159496379493",
".git/objects/38/260aebec66fa9f8012d12565c5c48d1f2194e3": "c64bbec1d62965125fbc2e2c4eb98d18",
".git/objects/00/0262479d25f214a6d63c9df65e07e110acd45f": "23c888306b1d8a801daf74575cbd036f",
".git/objects/9a/45648f4f828b89f738c8a14af7da1474e58335": "f9f17cb69579b5ffe090f17991e46b51",
".git/objects/9a/70bf0212d40a60a06694b647f00b7034d1f0e8": "86aa2c9fc0c83dd40e0b8d963e7dd741",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/21d99f1a3d870063d45abbcc791b049cc9d430": "1025b1ebc5bbd53f58d4dc93dda24798",
".git/objects/5d/d42a861b7956ac0f5bf703d6f68f4a5b828a30": "f8337c0fb004391df7d0add4789a9d81",
".git/objects/91/8c059f0413593fd4665efffc4ecb29e9485491": "fd3d50a7656fa195c07c391a503bbe49",
".git/objects/3a/caada3bb305d11153c27d239541ab646a1f2ea": "a0c552a9e5e678483edc974378c3d779",
".git/objects/54/16329f9cac4f9129628ddc89180c85e91eba5a": "e5f3e21206ea966aee83469fc10dc2a7",
".git/objects/3f/acb2f4a296d3c280663d01a1997b827c50a115": "e1e15205bae1f657a2ff9ef60519befe",
".git/objects/5b/871f1da9f1370e3516a0c4afd9221c2c90a3db": "4452afbc015868b7d7082c4969cb3eeb",
".git/objects/08/9db2cd050d4960550cb6b9c98adda326674d78": "3aeec2b727decfb785e1b7d4885aba85",
".git/objects/08/9a5cbb41f44fc5ef752951514a1dd93374fc9e": "fe66cb21ed8e355485e83ec26bc049f2",
".git/objects/01/ffedc5fffbd0c05e222a446676c0a22f756ec1": "0a947fdb4ec68e5b411a4a5a8464b2af",
".git/objects/52/60d71902c466e7b10a9795acf94f3b9a4b225e": "35d877cf2a24fe08d8de864667b65d40",
".git/objects/55/24adf9d182dda55832b0c922150b4b13eb3c2c": "e88cce0317d6dead7a2f818be39ef5cf",
".git/objects/64/0e6c3ef014ba32e7bd963d96b26beb6bfd0db8": "253510a3793dbf9f24157f1493f2474e",
".git/objects/90/f7ca4e36d8997b15ccef8fc7908ae44284a5a8": "d6b82b1cf9af516329bd7a2e83399a40",
".git/objects/d3/3b7dd04611f298a51a1ddf8e0dddb28a7c0b39": "c673cc3a390a1ed5ba9c7e2513cba5a8",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/f72296d4c9d0fc6dada28f836ceb342fb56293": "1489ec54cde7f7f7538d193a36e411f5",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/dd/957f9f0a90b19ccbbd20bfbef2cbe13a5d452f": "2d3aaf80126dd1f465f93df3ffd0b46f",
".git/objects/b6/d407b45b6cd7c9ea2a1bcd6a9b555ddc8568d7": "280e1af3847c51c7984024e7e8bde2ba",
".git/objects/d5/e4b520635aff7d110e38fa7db6230765fc2f08": "8d417a4eb4bfae7d0b45e2f290c6116b",
".git/objects/d2/7f67ece36c345056bf7ee4adf2d20155da90a6": "bec369a87077c80724515e13dec5cd03",
".git/objects/d2/e414b24e4b7a5f9e46af3b2ba7620e59db925c": "f9f5410115c18ae4a1c3691fcb547801",
".git/objects/af/8e82229d172e2da12812154618ada8d476cd14": "f0e693fc4f5931f290149f71491420d2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/7d51c383d59c49e4955fbada4102be5370ca3c": "15982d42c8a50842500f14771edb13cc",
".git/objects/de/d026a84c75e483dd3145d998bddb0cc53e21eb": "e6525473b76669a516e9ad6c91787c62",
".git/objects/b0/e17592b2b221bd48f1a532e6aa40a2a98367c2": "bb5647d0ccb74daabdde3ff210ac86e9",
".git/objects/a6/d576f6f00bc58d63b8cf7450d4b220faec4c3b": "76f38398cbc680e3bc6756d5db3ba07c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/cd5af6a608e4dd21e9f286a983ea7a0bbbceb4": "c727fd1c8720798b6a5221a82aae6661",
".git/objects/b9/4ba522f0537feacd95b5ec488e5933065f8461": "323f577d90e7aa818f760f8e6f0b78d3",
".git/objects/a1/83b1958c6e0e73426e3c865461d09180eade0d": "c13f34e2daba0a1af0cf517755a12c85",
".git/objects/c4/777765db93c8b3be089b01542c78c1ec3b1fd4": "e8d3fc3e6412bc6abd306ba53698fd47",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/ea/1d3aa5481751a832c90842ed9b0de19dc753a2": "a29f2e863ef097c0c4036bf847b529b7",
".git/objects/e1/4c8a3503870566cf1ec2146c6bec8b3d5d2bef": "bce888b142f2bb0f9ff3871900941b7f",
".git/objects/cd/206757a0ba6b0365aba8afbe6305772f471caa": "7267123152b7acae94860e707ae5e695",
".git/objects/e6/9f905f6dc7bf628979a8eb74c165108dd27095": "627c54b17c49ef7a806df0600ed498f9",
".git/objects/f0/7c89fad78921e5ad5c3a9938d1c7f518fad2ce": "40b980001f69c81ff6723bec232d194c",
".git/objects/f7/972dd9023c1426754043a0923d8d8f5b77bf7f": "1c7c7e91a78fac16948f973aa480f0c3",
".git/objects/fa/c1117ad6f93a486ef7c6bcf67a7ce6fdaa00e8": "9454ce5db9a173650c07c007e3366052",
".git/objects/c2/9275dd81f1be7db91af5e9635abaf12e8c040c": "6747a4344dbc47f09473557cf7a38cd7",
".git/objects/e9/a52b032bdf04ecf33bdeb2d9e3779e87937b97": "58b49ebc40b32cbcac92de42eedf98af",
".git/objects/e7/4ef501be2082346bffc005ba591d256adbfa7d": "f7d582b55bae5ca9bcd755f86b60c16a",
".git/objects/e7/2173cfe172ee95c77725941d9f8feda879692f": "6487b58d599f1c421fe919e8e4042a51",
".git/objects/cb/38de243d426971cafd0a900348f62805c9a614": "c5796c76b55f530509621dd66dcdae9f",
".git/objects/cb/5cbb4ede85e1bfa31862e3c1ecd004e3886d0e": "d5732f1b34681c64cf52302291f9eb51",
".git/objects/f8/7f71c3e211b0f15c84e96e3641000716f7d54e": "d00acbc79ddf5de58bbe68be6b9060d6",
".git/objects/ce/22e9e7ee5f7edfddef699eb3edf2c8c5198c15": "0d969ed1e8be1caf805fd8e6d98fdc6b",
".git/objects/46/643696e620a18e697b5a84d249391b212db246": "32f9595fd6d7528fb66116c1a0ca61b8",
".git/objects/2c/7f5509896ae09e743b2aab3c10b1f90471452a": "40d0bdaf79ddfd22ab604541bb1bcbd9",
".git/objects/2c/ea9d139528b78be9db97e47d09c12e53e6e7d7": "c6a4a42717b2595ce00687b27309e4fb",
".git/objects/1b/3bd3c1eb7e39a806f582e3fae5e4569399ba8e": "532763c7a06af1df7ca44f3bca4b1424",
".git/objects/77/5d7310466e51e201ae8565be6807bd8d934eb9": "ad0fce503028e276ee840222cdfa15ff",
".git/objects/70/d679233725703396b2542c6c76fb4c9036931c": "723746dc79237bc4b3be49b76ade5506",
".git/objects/24/4c0c6292cc59c6c6637337b4f8fe92e25faa65": "4857b673e96cded258e64e3feba93549",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/93904e79e1f184eb44e31cee31090c727b27aa": "9e4a4d4842fc82e411b25e1620683209",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/140a2a8d606b954a5fc5476770928c1a7767fb": "93f70331cf2cd3d650c146e43ce54c6e",
".git/objects/76/bd3b46ddb7a865bd8321d22ce030a05fca9bfa": "c57ac4371ef421db3ba9dd56ad12b3f2",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/d088812d9faf2dd331f520ad1c355eb0add344": "b70324645fda01dacb559d492a6443eb",
".git/objects/2e/138c846288aefe9f2abd459ef5e5d74012b6f0": "99cf2bf9ac009cb960a8360127d871c8",
".git/objects/2b/02ea834e65c6655967282e5e9c4ee6cf066810": "3544b21346e085c3d6bd1862d2270141",
".git/objects/13/e0638e87df5a953ada33500eccc9eea8d530a8": "0b8572c5d100c279a78927b7aa303866",
".git/objects/7f/411f34d4038cd2a4a824f80e665969e2bba009": "7f3b31c7e788fed3febcd33aed246dba",
".git/objects/7a/85140c59344d3760a2bb615529cba8b4c7c0a7": "d8bb28f912bfabed6b1354768cbdb7ad",
".git/objects/14/b6bfec7260a60a33436fc159ad62414d470ecb": "cce7a6cdb2ef5de82ccaae7c23b71174",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/653e7b90bea6db246bad865a43507ff61d2e90": "78b24563b16c5c3923c3ba25fb1c0cd0",
".git/objects/25/370048e320b90b882c9d954520000d1a7acec5": "83c1c2b908c60c779b2b0113ebd0ffd1",
".git/objects/25/bee681c3ef73d4abbfdbcbd1f4f89f88c05d4d": "8ff6eacd6d285fef6e3b75c2ea48d181",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8e39b642318dc0113d31c084826c6a45",
".git/logs/refs/heads/main": "79e7e1a052747acab1e17ab9c73db7b2",
".git/logs/refs/remotes/origin/main": "6b5c1c371d2076fb13634924c6afdf40",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "df0911a0b6917186ffd990af4bd47a15",
".git/refs/remotes/origin/main": "df0911a0b6917186ffd990af4bd47a15",
".git/index": "9647b9feac4b163e0a14455ee785d9ac",
".git/COMMIT_EDITMSG": "0dde1abb03a0b565edac7842cb6e758b",
".git/FETCH_HEAD": "80ba28be9dc82381d770b2258a80933d",
"assets/images/theboy.JPG": "ae14c9f18f84311cf4ddd18f994ac3d5",
"assets/images/background2.png": "4d6d6a98ac606fbc568fe676aad181bd",
"assets/images/InstagramGradientFinal.jpg": "22b0631b19d4d38eec2a8141e4c280ab",
"assets/images/CU.png": "c28692d45435462176f98716cac6e340",
"assets/AssetManifest.json": "3e752b93960ee4bd11c847c7d1cdd859",
"assets/NOTICES": "9d67adf4df639c0d85249f396b3bc4ec",
"assets/FontManifest.json": "d7dc71680751242798e460ee9b115127",
"assets/AssetManifest.bin.json": "aeb8c791b9a06b8f55685e063d0d8b85",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "589c3f40980e539725a4673a3778984d",
"assets/fonts/SnellBT-Bold.otf": "a711da1b23a9ef0b596309281799587a",
"assets/fonts/SnellBT-Regular.otf": "f530bd45bfc8de20e0377d00ddd371ff",
"assets/fonts/Bitter-Italic-VariableFont_wght.ttf": "4fc02ee8034b5148a7f8a66cdef60eaa",
"assets/fonts/Bitter-VariableFont_wght.ttf": "f60afd76f9df931408e65e5f2d9a6931",
"assets/fonts/SnellRoundhand-BoldScript.otf": "3d79e0c10ede2b5d00716d5255830485",
"assets/fonts/SnellRoundhand-BlackScript.otf": "af8b6e8e6d8b8588ad4fe9edd5a67888",
"assets/fonts/MaterialIcons-Regular.otf": "f41fc1925865bdc28521fee5b7343bd7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
