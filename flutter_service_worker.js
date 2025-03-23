'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "94bb0cd04d814b41204f877b58cc3301",
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
"flutter_bootstrap.js": "71a21c0ebc6bdcfc436d4e390cd704f7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bc678a5a6bffe82d8f3b1611f331fa35",
"/": "bc678a5a6bffe82d8f3b1611f331fa35",
"main.dart.js": "94b3c698a5a5a7ea9d4e850815ea5942",
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
