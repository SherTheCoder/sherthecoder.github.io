'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "27ca413db0c8ed774c538d42d8df9824",
"version.json": "cc1fa9cce5af273c0909d105387fee89",
"index.html": "43992b43b33bf753e2982e20f4d4a932",
"/": "43992b43b33bf753e2982e20f4d4a932",
"main.dart.js": "554fe3e793f818476675537454c2b6aa",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"README.md": "579429dc33a11fe6a0f13cbea39fd165",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a67989697c366cf4f821bde4733a6ca8",
".git/config": "311e0dd0824f10860b355e713342c386",
".git/objects/3e/5b460291b1425d006479822973d304d532989d": "1d777b70de5f560a184bc6dc4385e26a",
".git/objects/50/708f724a568e5f9f39d29eb1bdd3033ecb9e6c": "707a648a9d83808dfb62ef819f2f3d0f",
".git/objects/03/9d4b25dcf1b82bca742404a0c6a295eae3a404": "8eacf2d24dd001bcd25d2689aea77362",
".git/objects/9b/ffc576fc575e2355fd9a9d1cb071ef7d7050f3": "ce030a15fca28ec3e75f210bd071e4ea",
".git/objects/04/6973c9119c9d10832df115a06bb3d19d2366bd": "45db488b116c0ec287fefdb96fc00f4a",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/1546451b7dc905d10353bb9c33d5e74a9638bf": "7ae38a8c4b6a14185d9619ed428e01e2",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/5a/6fd3850b2bf5bc9e6de0053cb443a042dd4b4f": "d830607cce4182e0ed7f612caf728c51",
".git/objects/9d/39ec1971728cb5dd3d0a2a40586179f86344e7": "0826983c9bb8e07448a28399211acf13",
".git/objects/d9/e39e9bfa7c8398e1793e130a73ed85377557df": "6c9f042afacbcf0514f9d986fb58ec11",
".git/objects/d9/edd507d175bdc47878a82f721e2c4a754b0d47": "11c62ef4ca3a7a01ab1cffb708776e0e",
".git/objects/bb/752d787a3dddac8dbd3d56fd7b7cfbd98068e6": "02225d31cb12ab95532cd33c547a0f9d",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/74c2bf7d6b6f55eb597296ad852976fc978472": "e2101bfdf4b084c768df719375a4e39e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/be55af0a80bc761f1aa8f6e3cc75369b4a439d": "568c25f14055fbf14f789afabadd1517",
".git/objects/ca/01327f294e8c62e9969639f5af861f0bb7a1f3": "931419369753e768402f4e784ab077ff",
".git/objects/e4/fc6cea61c4bb9c023198d5e82a63cdce7be21f": "ec41310f75c34b1aed9d0c893c871d62",
".git/objects/c6/e0fd2fbf057ef56224417aa9a11b77b6c8157c": "dbca3bb7a5ad509b1d3ea3c59e26bfd7",
".git/objects/ec/31fa968cb9c8bcce8f6947c8338ef9ab751c6a": "a8c70f79165288d69db269e29853751f",
".git/objects/20/e2cccad50f8d094a39dd4194b7d848f36cf88f": "0b12c614b4bf2495117cb766568b483d",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/4290da986b18013e37019313806801f9ff1999": "d4b8fac5af7c6f0dbcee98a2112c9195",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/ec60623cec397a504f6dcf2f0e69e7892c0548": "5596e7e5a1374d81f87c6e6c0f861c1b",
".git/objects/45/72bd2e3ab22421f3774a4665571d0885df7f4f": "bebfd05f1ba1bf7ce5d6e7e69bad3cfb",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/80/15ae96611373b897feca03332ca33422ca0d0b": "994b183cb725f162d31d761987d226bc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/d66e0fe058e29fe7e61be6524d3a08ff9910aa": "821340f8acf42805fcdfd9f4769b9798",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/0262479d25f214a6d63c9df65e07e110acd45f": "23c888306b1d8a801daf74575cbd036f",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/21d99f1a3d870063d45abbcc791b049cc9d430": "1025b1ebc5bbd53f58d4dc93dda24798",
".git/objects/91/8c059f0413593fd4665efffc4ecb29e9485491": "fd3d50a7656fa195c07c391a503bbe49",
".git/objects/5b/871f1da9f1370e3516a0c4afd9221c2c90a3db": "4452afbc015868b7d7082c4969cb3eeb",
".git/objects/52/60d71902c466e7b10a9795acf94f3b9a4b225e": "35d877cf2a24fe08d8de864667b65d40",
".git/objects/90/f7ca4e36d8997b15ccef8fc7908ae44284a5a8": "d6b82b1cf9af516329bd7a2e83399a40",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/e17592b2b221bd48f1a532e6aa40a2a98367c2": "bb5647d0ccb74daabdde3ff210ac86e9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/cd5af6a608e4dd21e9f286a983ea7a0bbbceb4": "c727fd1c8720798b6a5221a82aae6661",
".git/objects/b9/4ba522f0537feacd95b5ec488e5933065f8461": "323f577d90e7aa818f760f8e6f0b78d3",
".git/objects/a1/83b1958c6e0e73426e3c865461d09180eade0d": "c13f34e2daba0a1af0cf517755a12c85",
".git/objects/c4/777765db93c8b3be089b01542c78c1ec3b1fd4": "e8d3fc3e6412bc6abd306ba53698fd47",
".git/objects/ea/2a8e8879c5a64bdb9130655ad580b067ff39ce": "c34c2e9736ec5658db9bcd090c03a155",
".git/objects/e1/4c8a3503870566cf1ec2146c6bec8b3d5d2bef": "bce888b142f2bb0f9ff3871900941b7f",
".git/objects/f0/7c89fad78921e5ad5c3a9938d1c7f518fad2ce": "40b980001f69c81ff6723bec232d194c",
".git/objects/fa/c1117ad6f93a486ef7c6bcf67a7ce6fdaa00e8": "9454ce5db9a173650c07c007e3366052",
".git/objects/e7/2173cfe172ee95c77725941d9f8feda879692f": "6487b58d599f1c421fe919e8e4042a51",
".git/objects/f8/7f71c3e211b0f15c84e96e3641000716f7d54e": "d00acbc79ddf5de58bbe68be6b9060d6",
".git/objects/ce/22e9e7ee5f7edfddef699eb3edf2c8c5198c15": "0d969ed1e8be1caf805fd8e6d98fdc6b",
".git/objects/77/5d7310466e51e201ae8565be6807bd8d934eb9": "ad0fce503028e276ee840222cdfa15ff",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1d/93904e79e1f184eb44e31cee31090c727b27aa": "9e4a4d4842fc82e411b25e1620683209",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/140a2a8d606b954a5fc5476770928c1a7767fb": "93f70331cf2cd3d650c146e43ce54c6e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/2e/138c846288aefe9f2abd459ef5e5d74012b6f0": "99cf2bf9ac009cb960a8360127d871c8",
".git/objects/14/b6bfec7260a60a33436fc159ad62414d470ecb": "cce7a6cdb2ef5de82ccaae7c23b71174",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/25/370048e320b90b882c9d954520000d1a7acec5": "83c1c2b908c60c779b2b0113ebd0ffd1",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3433952da55b1c7053764ef4e853dded",
".git/logs/refs/heads/main": "e7ed862b32b805dcb096b68639226f21",
".git/logs/refs/remotes/origin/main": "ef20a994f7b2d94a7adfbe7d3fb078da",
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
".git/refs/heads/main": "5c2e1c656537058e40b5bdc45a01fcdd",
".git/refs/remotes/origin/main": "5c2e1c656537058e40b5bdc45a01fcdd",
".git/index": "33f20731b29eb214443078bcc8fcae30",
".git/COMMIT_EDITMSG": "497231724140e3c4ccbc8f98dcc2eec1",
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
"assets/fonts/MaterialIcons-Regular.otf": "b41f2bbf000b47e80a1b0e6df79e4f79",
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
