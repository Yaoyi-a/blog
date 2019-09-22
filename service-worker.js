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
    "revision": "c782cd23a59864d4d57ebd82fd68d9fb"
  },
  {
    "url": "assets/css/0.styles.6ca0062c.css",
    "revision": "be7c02093818752611889e7d32e1f9f3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.afe6a73b.js",
    "revision": "027ee2c08b4f517e8809745f032eac53"
  },
  {
    "url": "assets/js/11.3021fe0b.js",
    "revision": "e69c84e64b3910f9d706ebf3111a7070"
  },
  {
    "url": "assets/js/6.dbbe819d.js",
    "revision": "663021bf43fd31215dc77c05d36e34cb"
  },
  {
    "url": "assets/js/7.cc26e5cd.js",
    "revision": "30271e3f6cc38e26775c1573049ad350"
  },
  {
    "url": "assets/js/8.40fc1591.js",
    "revision": "52fc120116c290822bfcc0e8f62b528c"
  },
  {
    "url": "assets/js/9.9c0fd966.js",
    "revision": "9005c977605271daced9060daa9477f7"
  },
  {
    "url": "assets/js/app.43787d60.js",
    "revision": "975170f67db379ac228fef1158449be0"
  },
  {
    "url": "assets/js/page-247ff4aa.270453b4.js",
    "revision": "3949ce7960c8890d87bdb6ed9bc9722d"
  },
  {
    "url": "assets/js/page-3dfb2eb0.64607434.js",
    "revision": "c6552ff3d94c4281c073fa3a02cec9ea"
  },
  {
    "url": "assets/js/page-6ff668cb.248bb0fd.js",
    "revision": "cfa0b42d56e84b35af5ab128d5bf853a"
  },
  {
    "url": "assets/js/page-c318e0c0.f7e6363f.js",
    "revision": "ed3d8492df5075db0fba9fbcb697d386"
  },
  {
    "url": "img/icon/appleIcon152.png",
    "revision": "4d9721d920015e20743ec22307c16e47"
  },
  {
    "url": "img/icon/chrome192.png",
    "revision": "01ba289c0aba25759a09a940fe2da581"
  },
  {
    "url": "img/icon/chrome512.png",
    "revision": "90a6bae2b1e41aef38ab9eafe04dbcad"
  },
  {
    "url": "img/icon/msIcon144.png",
    "revision": "0d8e5f0ab26210a3e9db2630b52bd4fb"
  },
  {
    "url": "index.html",
    "revision": "035c7be53413deb1c7816a08a25e2ac4"
  },
  {
    "url": "logo.png",
    "revision": "53e8d2cd254352df9cf794f29117a81e"
  },
  {
    "url": "note/0914.html",
    "revision": "91fe39e3681e4079d56f0cb146de3d2e"
  },
  {
    "url": "note/0922.html",
    "revision": "dec52ad73843221a08f9fc3eb2fbb53d"
  },
  {
    "url": "note/index.html",
    "revision": "bbee025c43390afecb0c68d3cdae047c"
  },
  {
    "url": "图片20190922095531.jpg",
    "revision": "8f55c1a5865a7b1a58a6356597964083"
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
