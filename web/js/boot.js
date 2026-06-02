// ============================================
// Boot — Module Loader, Section Controller, API Cache
// Load this FIRST before any other app scripts.
// ============================================

// ---- Module Loader ----
const Loader = (() => {
  const loaded = new Set();
  const loading = new Map();

  function loadScript(url) {
    if (loaded.has(url)) return Promise.resolve();
    if (loading.has(url)) return loading.get(url);
    const promise = new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = url;
      s.onload = () => { loaded.add(url); loading.delete(url); resolve(); };
      s.onerror = () => { loading.delete(url); reject(new Error('Failed to load: ' + url)); };
      document.head.appendChild(s);
    });
    loading.set(url, promise);
    return promise;
  }

  function loadAll(urls) { return Promise.all(urls.map(loadScript)); }

  async function loadSequence(urls) {
    for (const url of urls) await loadScript(url);
  }

  const BUNDLES = {
    'charts-engine':   () => loadAll(['vendor/lightweight-charts.js', 'js/indicators.js']).then(() => loadScript('js/charts.js')),
    'lessons':         () => loadScript('js/content-stock.js').then(() => loadScript('js/lessons.js')),
    'options-content': () => loadScript('js/content-options.js'),
    'quizzes':         () => loadScript('js/content-quizzes.js').then(() => loadScript('js/quiz.js')),
    'reference':       () => loadScript('js/content-reference.js').then(() => loadScript('js/reference.js')),
    'resources':       () => loadAll(['js/content-resources.js', 'js/mindmap.js']).then(() => loadScript('js/resources.js')),
    'summaries':       () => loadSequence(['js/content-summaries-1.js', 'js/content-summaries-2.js', 'js/content-summaries-3.js', 'js/content-summaries.js']),
    'plotly':          () => loadScript('vendor/plotly-basic.js'),
    'simulator':       () => loadScript('js/simulator.js'),
    'monitor':         () => loadScript('js/monitor.js'),
  };

  const bundleCache = new Map();

  function require(name) {
    if (!bundleCache.has(name)) {
      const fn = BUNDLES[name];
      if (!fn) return Promise.reject(new Error('Unknown bundle: ' + name));
      bundleCache.set(name, fn());
    }
    return bundleCache.get(name);
  }

  return { loadScript, loadAll, loadSequence, require };
})();

// ---- Section-to-Dependencies Map ----
const SECTION_DEPS = {
  dashboard:  [],
  lessons:    ['charts-engine', 'lessons'],
  quizzes:    ['quizzes'],
  charts:     ['charts-engine'],
  resources:  ['reference'],
  books:      ['resources'],
  simulator:  ['charts-engine', 'simulator'],
  monitor:    ['monitor'],
};

// ---- Section Controller (cleanup manager) ----
class SectionController {
  constructor() {
    this._ac = new AbortController();
    this._intervals = [];
    this._observers = [];
  }
  get signal() { return this._ac.signal; }
  on(el, event, handler, opts = {}) {
    if (!el) return;
    opts.signal = this._ac.signal;
    el.addEventListener(event, handler, opts);
  }
  addInterval(id) { this._intervals.push(id); }
  addObserver(obs) { this._observers.push(obs); }
  destroy() {
    this._ac.abort();
    this._intervals.forEach(clearInterval);
    this._observers.forEach(o => { try { o.disconnect(); } catch (e) {} });
    this._intervals = [];
    this._observers = [];
  }
}

// ---- API Cache ----
const ApiCache = (() => {
  const cache = new Map();
  return {
    get(key, ttlMs = 60000) {
      const e = cache.get(key);
      if (!e || Date.now() - e.t > ttlMs) { cache.delete(key); return null; }
      return e.d;
    },
    set(key, data) { cache.set(key, { d: data, t: Date.now() }); },
    clear() { cache.clear(); },
  };
})();
