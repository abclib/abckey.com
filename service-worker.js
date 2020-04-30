/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3933df65c7d739c2e7b3aaf5d7f8ffd5"
  },
  {
    "url": "assets/css/0.styles.06b9cf60.css",
    "revision": "7f0f096360a5eaeee6a2f438a896b07f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.08ca637f.js",
    "revision": "b81c36ee0b4839fef3ac839d7c66b2ce"
  },
  {
    "url": "assets/js/11.0e21d9ef.js",
    "revision": "213b43b40985740c168d6e23cc9c2d60"
  },
  {
    "url": "assets/js/12.6a44f7d0.js",
    "revision": "15995bc9257e7fdd6060a60a8aa8c7eb"
  },
  {
    "url": "assets/js/3.4dbd1607.js",
    "revision": "35fad66afa693f7e58f4c7e2e59daff8"
  },
  {
    "url": "assets/js/4.c0e4b637.js",
    "revision": "7e6a8dd0a122aedc714d6a9dad505605"
  },
  {
    "url": "assets/js/5.5f8ee486.js",
    "revision": "e1b90ff33e9b918135cb7d85efc0eaf6"
  },
  {
    "url": "assets/js/6.32538732.js",
    "revision": "da91f5f5b9f694bc72553d47880e12fc"
  },
  {
    "url": "assets/js/7.63b0056b.js",
    "revision": "65159fe9bd02252e77457cf85b2eb9d7"
  },
  {
    "url": "assets/js/8.0787d52e.js",
    "revision": "3dea743dec4e11430403dcf594643df7"
  },
  {
    "url": "assets/js/9.f25c8c49.js",
    "revision": "f6069c2b0e48dd88159ff10111a33a76"
  },
  {
    "url": "assets/js/app.fbeb23ba.js",
    "revision": "630c356f9e19e95db1b5b20e45a3a242"
  },
  {
    "url": "assets/js/vendors~docsearch.9a0535ca.js",
    "revision": "f38971610f4d886590d5029dc5125e82"
  },
  {
    "url": "guide/index.html",
    "revision": "10eedade1a63fccf27c57f886dc9ada1"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "17932e25eb92f77ba01d197272d43afa"
  },
  {
    "url": "logo.png",
    "revision": "0e0e1b11ee5c9b107e93a0853d97f19e"
  },
  {
    "url": "nav-logo.png",
    "revision": "7c4e6242451bdb3938ffc0360085f793"
  },
  {
    "url": "zh/guide/index.html",
    "revision": "e9a01bc96cf77045f1a1cd33816dc2cc"
  },
  {
    "url": "zh/index.html",
    "revision": "cf5cece1b87dd0fd2bee81b08725c310"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
