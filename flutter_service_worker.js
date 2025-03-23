'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a3e5b97ee2b0d6a2b73a4c92e303af83",
".git/config": "d1c8255972ced9badd3f091d092f8fe4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f7e7d3a3d65db588787db5e1885a47c1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a92d0a828c5a96e93fa4e242c89d159d",
".git/logs/refs/heads/master": "a92d0a828c5a96e93fa4e242c89d159d",
".git/logs/refs/remotes/origin/master": "8e5f7ad33d5666576e333b0ed591acde",
".git/objects/00/91142300ae4661541c63d93cc4cc4d8ba1ce42": "bb1c2ad4854e9b0de6d24827cc72fc1e",
".git/objects/02/bc07ea088e3cbf370cb21e884319f74a62b0ba": "5b382454c401a5d25fa424851c06fdb0",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/06/9f107f60d9a5173a81d9e79ece3e23b84585ee": "742d6b1099d896f694f35778f56e8aff",
".git/objects/10/c045bd80706683bf44aa4f46e889ff64c60204": "dd091fba4aa6e116574edc2dbdf443bd",
".git/objects/18/359887a74ccb90e8d4d7e97ed8a45c52f9c961": "dec44eb3880bb3d712e370ff45f64d6a",
".git/objects/1f/737144314873748cf27d47699460888215a50d": "ae1ad1a1535c1b94aaec3a98e20a95b3",
".git/objects/23/258d5b636993540aa9ee50d6f9d2abb0e0b1e9": "b4776f55bf82a2a07f8843aa1307260a",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/29/6186f1db3d9d076134e5ee5e50e3aa4058e4b5": "57012197bdf1977b1a01b9ae627a217e",
".git/objects/2b/1b82e1b2a10dc1001b87beeb0db83ad586077d": "dcaa872c8fbef2180ee3fc3330c431c3",
".git/objects/32/a0ef92533c05fa3d1235fb8242d5182fea9bb8": "426c23c786760a25e7f97087d644523c",
".git/objects/33/a23d7ca8434efd94dac65e24d339cdd44faae8": "a99cbc213d91a9710a5a4832a3719155",
".git/objects/39/9ede744022d8b0a2f2b6d1794fb007b90276e5": "86dac3fd1c619ff7556467c5af9127ae",
".git/objects/39/c15455f8f0a9d73814507efffdcb3ff1ed1cee": "77298e0433f703b727fd5b8bad51afef",
".git/objects/3a/5435884430d9d9bd968cad90b5423a41a14d43": "32bf1c61957456252248b1256b17c88e",
".git/objects/3f/5e4b631c84c714c4682b07ca709733ad2e9c00": "3c9f5a55cdee1a9dab65f00df9277253",
".git/objects/4c/c33feb2f64fc5faa8e742873d77d44f8a7bcf2": "561c9b3c9a5a3ae6227b99e58163e49b",
".git/objects/4f/499f281db443a2a61610f06b862e9d2023e8b4": "adfc608d74b4cdcd97e57564793adda8",
".git/objects/54/665f1eddcf17d3caca1bf82db719307658259e": "04219a01763745ecf839156f221ba968",
".git/objects/54/ddad7288d3528b8119353428a9b3190ca18dc5": "63731e0cf5f460ca22abf0cdc72d1667",
".git/objects/5a/15c2f2976b3ed34f3ba9931883f09527b42e43": "d40c1d41256c523327295e927346de68",
".git/objects/5b/484dd61071dab3f81bd9648c4cc8effe9ea90d": "4989fe9824e3afa5b0c850416ef84d3b",
".git/objects/5f/e24dd610bfb2c2c111796317761a79884c0d64": "e1a344c48d6559cf811ee52b65c45a95",
".git/objects/60/0e8a75179953364edf3289f603713f2d5d1519": "7b5f4f3b6ea5233a5de0509081352255",
".git/objects/62/d58add4754ddbabd81ba5936c97595259845f0": "4b39e51ad0a9b4d42d9d00115add632b",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/66/751e6d14b60a49243752c19be4f1959605c235": "b5ae2282c93b7dfec58d8a694d3f91d7",
".git/objects/6a/6a556f10c77c7b2651a802a97d3153d641d19d": "b2cff40c9eaa78345ebf0cc7f86c2757",
".git/objects/6a/b7e1a4c6d878ffb9f74b69e34fdec119759c80": "ffa9e050a955ab26a8d5ef7a174d89da",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/70/6526a97cb032af29c43237c9d2a6b554edb2da": "6563e3a35e91ed300a926c4c99d3397c",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/5b58eeaaf00b327eed345f96080bf42b84cbb0": "cc4710290705f51997cc8971ad135b62",
".git/objects/7e/f7f5a4d94ef747afe151be350783ee9fc87951": "de2e30ad08078cc80f4b6536b26422d6",
".git/objects/7f/8e461a5d39e216e8fdd26425a357644c605866": "60ecd6118861f31bfc276f196ebfdfa5",
".git/objects/82/e85921072a19ea0dcc8c0110eb1b6ea77e69be": "29990ed2f044ad1d14836ddbbe85d03f",
".git/objects/85/e67db4032df81bbb1152b578ad189a0be88142": "52db51dbe5b936a904126e08ec532535",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/eab2f7baf23fc7112c693636588cdcccc28729": "393638d103d524cebcd5464989e9c92a",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/90/673b487661d48490b9f235105fb49fedece650": "effce89278db15c85be3d03a8045e7c9",
".git/objects/95/0247c0294910a8d7623bdddcddffd48e257e2f": "c49c81ef3f34475451e08453d75a9eaa",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/a0/e36f9dabf6649ca42f69fd832a1347d2168e8b": "154a00191df159cb260e341d60933a58",
".git/objects/a6/d0e10247858c69fb119d7131da9519a2021f72": "ad04e4dda0b44e59e828705798b05d01",
".git/objects/aa/da2af7009c9d92118b6d4879f30bb625b686cd": "ae8e48c35ad4d646f1e087ef706ad01f",
".git/objects/ad/31fbd7f064cabb5dc7330d59abfe66a0dce39e": "175ae078d200487e4fc1ab0e005435d0",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b1/ee0e2f8463f30afd287c17e6e660e494d05c77": "832c1293bd1a2158b454797188a2e80c",
".git/objects/b4/2f909384aef1692f4128f16a7b7be35de6d0db": "bc4519567a9c70141016381d23b590ea",
".git/objects/b7/484374e77f6f89862a234bd2b4b81177f1162e": "293bd1d1980ae6adcb619a697ef2b67e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/190219c6a507b6aa93400610c9c7fdde2315b9": "f24059090900b305cf15a47af6651ef5",
".git/objects/c2/466cbcaa465abff77bbfee52f0d6da5379f34e": "e6cd9049a2d6b71facbddc901421fdea",
".git/objects/c3/adfd3151f691df37cfbda3bdfda5b37b1c78f0": "afe494b25234e4cc3d4853bb0b9efa52",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c9/357c0a827143bd7a34cbac14e53e616abb345e": "e80d5cb16459f12552eab62d3154cd7e",
".git/objects/d1/7be969a5a55412a179f504d554db19b7a09bb4": "d6bd1433c68d68bca4d291e48cef9b04",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e8/7e6a42ddbfd5389b9460164c767f5062523759": "04906597a388879d584f6798e39d0658",
".git/objects/ea/abcc8b1e8c37f2f16c887df6a108fc99cf9896": "6a557419027d39142fc5d5f09f5374b9",
".git/objects/ea/b698bf76dfc531c611d7557de0f6bf170e7952": "7b92b008a276430c818f7ec642766509",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/c226c96c90d4c1033aa4eeb71e6b411ee17c24": "a7710effbfe6a6fcaa906f13c6a34a73",
".git/objects/f8/015b1de75687e27d2372add5cdcae99cf2a9cd": "6d8b787490a1eaac61037d91e9cc1550",
".git/objects/f8/1baea57161af0d27bbf2e428323772bb1a1639": "8f69665ad538273bc831cc97e11c802e",
".git/objects/fd/e808c39bc4c12f3ba64a2e0ded10c32154db8a": "c54cd12bfa417d1a94b57eb55dc51991",
".git/refs/heads/master": "23129667e1074164bb513ade89c013c3",
".git/refs/remotes/origin/master": "23129667e1074164bb513ade89c013c3",
"assets/AssetManifest.bin": "94bb0cd04d814b41204f877b58cc3301",
"assets/AssetManifest.bin.json": "752c471629fed0ddf48dd3d6e1735b42",
"assets/AssetManifest.json": "9d995b28e7ed816d1ada14cf5681065a",
"assets/assets/fonts/JetBrainsMono-Bold.ttf": "f855a5300fbbb56439586d4ca8a131b2",
"assets/assets/fonts/JetBrainsMono-BoldItalic.ttf": "bde766f1c0fdeff8d89d0462f0cac32f",
"assets/assets/fonts/JetBrainsMono-ExtraBold.ttf": "7d461a374a2529d6b6d696214b4e5607",
"assets/assets/fonts/JetBrainsMono-ExtraBoldItalic.ttf": "7d5a0a08aa542039ab614ae471625f6e",
"assets/assets/fonts/JetBrainsMono-ExtraLight.ttf": "e4a6d800b578ff24a63c391abecbb078",
"assets/assets/fonts/JetBrainsMono-ExtraLightItalic.ttf": "77b602c00f87ff0d475d4d2e6a795fa4",
"assets/assets/fonts/JetBrainsMono-italic.ttf": "36bd1aff2f1b3231b440c2d0b2715a8e",
"assets/assets/fonts/JetBrainsMono-Light.ttf": "dd433c75c0c012b40aa4a517e621d63e",
"assets/assets/fonts/JetBrainsMono-LightItalic.ttf": "9299ad2df6b84a53004314e0dc831868",
"assets/assets/fonts/JetBrainsMono-Medium.ttf": "c2ef1b022d1fa4f1a625b56782523619",
"assets/assets/fonts/JetBrainsMono-MediumItalic.ttf": "1aa60a4574d6711013436292fad06874",
"assets/assets/fonts/JetBrainsMono-Regular.ttf": "b678c7a6800a9d944ae8342905c07cb7",
"assets/assets/fonts/JetBrainsMono-SemiBold.ttf": "283be0f33ad34e3efbd05459edb72e59",
"assets/assets/fonts/JetBrainsMono-SemiBoldItalic.ttf": "ef4b1c2f9d94f6c3ae8c68e99f450328",
"assets/assets/fonts/JetBrainsMono-Thin.ttf": "f9b91646c25b9b6a5306703bf9c613df",
"assets/assets/fonts/JetBrainsMono-ThinItalic.ttf": "210141d4283f601942d559a9f99a1355",
"assets/assets/fonts/Tajawal-Bold.ttf": "76f83be859d749342ba420e1bb010d6a",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/img/available_bag.png": "9eda2817a302df5715f99af9c4e37d5b",
"assets/assets/img/bags.png": "0086ae0e5137022e2f95e151f8b79da9",
"assets/assets/img/Be%2520Healthy.pdf": "f50394fa909600fab6374acb028fa155",
"assets/assets/img/customer.png": "13fa7c5eecd7c68dd21e7e622a98cf49",
"assets/assets/img/customer_emp.png": "74b796d552da5386bb4e31b06876b7e4",
"assets/assets/img/driver.png": "8e8ff004b2e715eed3997c1db78ea9de",
"assets/assets/img/icon.png": "fecbe939162f852c9ebd9585c974eb2a",
"assets/assets/img/login_pic.png": "52967fa9075b5c3f4982a67432fd4e5c",
"assets/assets/img/login_pic_shadow.png": "e5befdb81312ef0ed5243b8969d6976d",
"assets/assets/img/logo.png": "46f2dd75ee41a029725923c9d05cf9be",
"assets/assets/img/person.png": "1bf076c0de112be1f0290dae49a3a2ba",
"assets/assets/img/UAE.jpg": "62ec0f00b526c7fcdcc81764495e6f91",
"assets/assets/img/unavailable_bag.png": "0549f2a9d75ff79f2435972b7b32f10e",
"assets/assets/img/user_pic.png": "3a9d7be805d3c75c3fe20d274bf1a734",
"assets/FontManifest.json": "ff415a8fe671af8403682759b7c4f1d7",
"assets/fonts/MaterialIcons-Regular.otf": "90e3450e132ed8939286e65b3aaef792",
"assets/NOTICES": "dba02e9486d2216ab79c2c85add84b92",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f63a40964643cad3a38f29be6e287643",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "fecbe939162f852c9ebd9585c974eb2a",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "1be6b30f08ccd440e3bb65ff69718568",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2510f8702db35ee30306f7a2f56a6b49",
"/": "2510f8702db35ee30306f7a2f56a6b49",
"main.dart.js": "1bcea928b2422a57da18f8fa4318d04a",
"manifest.json": "8058f67c8e5d53967b211613de0e08c2",
"version.json": "c96bc673c57130d6603d51a2d4e75963"};
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
