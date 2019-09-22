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
    "revision": "78dbdeceacebae7846e18ebb9b154f03"
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
    "url": "assets/js/app.8af9e4b8.js",
    "revision": "ddc51fa4a4e4c9b941714e334f6a3a02"
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
    "revision": "9ad6a0228d487105bf6a0659a33d899a"
  },
  {
    "url": "logo.png",
    "revision": "53e8d2cd254352df9cf794f29117a81e"
  },
  {
    "url": "note/0914.html",
    "revision": "c3e84bc3a9b3b60c218aaa0d07ac7b38"
  },
  {
    "url": "note/0922.html",
    "revision": "0047500fc2acfe56309c508764019de2"
  },
  {
    "url": "note/index.html",
    "revision": "a6755e147e75a111c2c0112457f2ca28"
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
