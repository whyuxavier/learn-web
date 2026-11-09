/* Веб-програмування — Service Worker: повна робота курсу без інтернету.
   Сторінка курсу: спершу мережа (щоб після оновлення на GitHub учні одразу
   отримали нову версію), без мережі або якщо мережа мовчить довше 4 с — збережена копія.
   Шрифт Fixel: кешується вже під час встановлення (з першого відвідування)
   і далі віддається з кешу. */
const VERSION = '2026-11-09';
const SHELL = 'lw-shell-' + VERSION;   // сторінка, маніфест, іконки
const ASSETS = 'lw-assets';            // шрифти (переживають оновлення SW)
const SHELL_FILES = [
  './',
  'manifest.json',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/icon-maskable-512.png',
  'icons/apple-touch-icon.png'
];
/* Зовнішні ресурси курсу: CSS шрифту (з нього беруться адреси файлів шрифту).
   Якщо підключиш ще якийсь CDN — допиши сюди й у CACHE_FIRST_HOSTS. */
const FONT_CSS = ['https://fonts.cdnfonts.com/css/fixel-display'];
const CACHE_FIRST_HOSTS = /(^|\.)cdnfonts\.com$/;
const PAGE = new URL('./', self.registration.scope).href;
const NET_TIMEOUT = 4000;

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(SHELL);
    await Promise.all(SHELL_FILES.map(async f => {
      const r = await fetch(new Request(f, { cache: 'reload' }));
      if (r.ok) await c.put(new URL(f, self.registration.scope).href, r);
    }));
    await warm().catch(() => {});   // без інтернету до CDN встановлення все одно завершиться
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys())
      if (k.startsWith('lw-shell-') && k !== SHELL) await caches.delete(k);
    await self.clients.claim();
  })());
});

/* Сторінка просить докачати те, чого бракує (наприклад, перше встановлення було без доступу до CDN). */
self.addEventListener('message', e => {
  if ((e.data || {}).type !== 'warm') return;
  e.waitUntil(warm().then(
    n => e.source && e.source.postMessage({ type: 'warmed', missing: n }),
    () => {}
  ));
});

async function put(c, url) {
  if (await c.match(url)) return true;
  let r = await fetch(url, { mode: 'cors' }).catch(() => null);
  if (!r || !r.ok) r = await fetch(url, { mode: 'no-cors' }).catch(() => null);
  if (r && (r.ok || r.type === 'opaque')) { await c.put(url, r); return true; }
  return false;
}

async function warm() {
  const c = await caches.open(ASSETS);
  const want = new Set();
  for (const css of FONT_CSS) {
    want.add(css);
    try {
      if (!await put(c, css)) continue;
      const r = await c.match(css);
      if (r.type === 'opaque') continue;
      const txt = await r.text();
      for (const m of txt.matchAll(/url\(\s*['"]?([^'")]+)['"]?\s*\)/g))
        if (!m[1].startsWith('data:')) want.add(new URL(m[1], css).href);
    } catch (err) {}
  }
  let missing = 0;
  await Promise.all([...want].map(async u => { if (!await put(c, u)) missing++; }));
  return missing;
}

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.protocol !== 'https:' && url.protocol !== 'http:') return;
  const scopePath = new URL(self.registration.scope).pathname;
  if (url.origin === location.origin) {
    if (!url.href.startsWith(self.registration.scope)) return;   // інші сайти на whyuxavier.github.io не чіпаємо
    if (req.mode === 'navigate' &&
        (url.pathname === scopePath || url.pathname === scopePath + 'index.html')) {
      e.respondWith(page(e));
      return;
    }
    if (url.pathname.endsWith('/sw.js')) return;
    e.respondWith(staleWhileRevalidate(req, e));
    return;
  }
  if (CACHE_FIRST_HOSTS.test(url.hostname)) {
    e.respondWith(cacheFirst(req));
  }
});

async function page(e) {
  const c = await caches.open(SHELL);
  const net = fetch(PAGE, { cache: 'no-cache' }).then(async r => {
    if (r.ok && r.type === 'basic') await c.put(PAGE, r.clone());
    return r;
  });
  e.waitUntil(net.catch(() => {}));
  const timeout = new Promise(res => setTimeout(res, NET_TIMEOUT));
  try {
    const r = await Promise.race([net, timeout.then(() => null)]);
    if (r && r.ok) return r;
  } catch (err) {}
  const cached = await c.match(PAGE) || await caches.match(PAGE);
  if (cached) return cached;
  return net;   // ще немає копії — чекаємо мережу, як звичайний сайт
}

async function cacheFirst(req) {
  const c = await caches.open(ASSETS);
  const hit = await c.match(req.url);
  if (hit) return hit;
  let r = await fetch(req.url, { mode: 'cors' }).catch(() => null);
  if (!r || !r.ok) r = await fetch(req);
  if (r && (r.ok || r.type === 'opaque')) await c.put(req.url, r.clone());
  return r;
}

async function staleWhileRevalidate(req, e) {
  const c = await caches.open(SHELL);
  const hit = await c.match(req, { ignoreSearch: true });
  const net = fetch(req).then(async r => {
    if (r.ok) await c.put(req, r.clone());
    return r;
  });
  if (hit) { e.waitUntil(net.catch(() => {})); return hit; }
  return net;
}
