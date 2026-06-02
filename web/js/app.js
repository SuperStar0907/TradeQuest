// ============================================
// App Controller — Router, Navigation, Dashboard
// ============================================

const App = (() => {
  let currentSection = 'dashboard';
  let mainChart = null;
  let navId = 0;
  let sidebarCache = { html: '', completedCount: -1 };
  let searchController = null;

  const DAILY_TIPS = [
    { title: 'The Trend is Your Friend', text: 'Don\'t fight the trend. 70% of stocks follow the overall market direction. Before trading individual stocks, check what SPY (S&P 500) is doing.' },
    { title: 'Position Sizing: The 1% Rule', text: 'Never risk more than 1-2% of your total account on a single trade. With $100,000, max loss per trade = $1,000-$2,000.' },
    { title: 'IV Rank vs IV Percentile', text: 'IV Rank = (Current IV - 52w low) / (52w high - 52w low). IV Rank > 50% = sell premium. < 50% = buy options.' },
    { title: 'The 20-Day EMA', text: 'The 20-day EMA is the most watched short-term MA. In uptrends, stocks bounce off the 20 EMA. Great for timing pullback entries.' },
    { title: 'Volume Precedes Price', text: 'Smart money shows up in volume before price moves. If volume surges while price is flat, a big move is coming.' },
    { title: 'Theta Acceleration', text: 'Options lose 1/3 of time value in the first 2/3 of life, and 2/3 in the last 1/3. The last 30 days are critical.' },
    { title: 'Risk/Reward Ratio', text: 'Aim for 2:1 minimum. Risk $1 to make $2. With 2:1 R:R, you only need 34% win rate to be profitable.' },
    { title: 'The Opening 15 Minutes', text: 'First 15 min are most volatile. Institutions fill overnight orders. Many traders wait until 9:45-10:00 AM ET.' },
    { title: 'Fibonacci 61.8%', text: 'The 61.8% retracement is the golden ratio. In strong trends, pullbacks often find support here. Look for confluence.' },
    { title: 'Never Average Down', text: 'Adding to losers turns small losses into account killers. Cut losers quickly, add to winners.' },
    { title: 'Sell the News', text: '"Buy the rumor, sell the news." Stocks run up before catalysts and sell off when news drops — even good news.' },
    { title: 'The VIX Fear Gauge', text: 'VIX > 30 = fear (buy opportunity). VIX < 15 = complacency (be cautious). Extreme spikes mark bottoms.' },
    { title: 'The PDT Rule', text: 'Under $25K in margin account = max 3 day trades per 5 days. Cash accounts have no PDT rule but need settled funds.' },
    { title: 'Support Becomes Resistance', text: 'When a stock breaks below a support level, that level often becomes resistance on the next rally. The reverse is also true.' },
    { title: 'Cut Losses at 7-8%', text: 'Legendary investor William O\'Neil recommends selling any stock that drops 7-8% below your purchase price. Small losses are recoverable; big losses are not.' },
    { title: 'The Power of Compounding', text: 'At 15% annual returns, your money doubles every 5 years. Start early. A 25-year-old investing $500/month beats a 35-year-old investing $1000/month by retirement.' },
  ];

  // ============ Loading Spinner ============
  function showLoadingSpinner() {
    const area = document.getElementById('contentArea');
    let spinner = document.getElementById('sectionSpinner');
    if (!spinner) {
      spinner = document.createElement('div');
      spinner.id = 'sectionSpinner';
      spinner.className = 'section-spinner';
      spinner.innerHTML = '<div class="spinner-ring"></div>';
      area.appendChild(spinner);
    }
    spinner.style.display = 'flex';
  }

  function hideLoadingSpinner() {
    const spinner = document.getElementById('sectionSpinner');
    if (spinner) spinner.style.display = 'none';
  }

  // ============ Init ============
  async function init() {
    await DataModule.init();
    populateSidebar();
    setupThemeToggle();
    setupSidebarToggle();
    setupTickerSearch();
    setupLessonComplete();

    // Hash routing
    window.addEventListener('hashchange', handleRoute);
    handleRoute();

    // Defer non-critical init to idle time
    const ric = window.requestIdleCallback || (cb => setTimeout(cb, 1));
    ric(() => {
      updateStreak();
      DataModule.onLiveDataReady(() => {
        if (currentSection === 'dashboard') renderDashboard();
      });
    });
  }

  // ============ Sidebar Population ============
  function populateSidebar() {
    const nav = document.getElementById('sidebarNav');
    const progress = LessonsModule.getProgress();
    const completed = progress.completedLessons || [];

    // Skip rebuild if completion count hasn't changed
    if (completed.length === sidebarCache.completedCount) {
      return;
    }
    sidebarCache.completedCount = completed.length;

    let html = '';

    // Dashboard
    html += `<a class="nav-item active" data-section="dashboard" href="#dashboard">
      <span>📊</span> <span>Dashboard</span>
    </a>`;

    // Decide data source: use LESSON_INDEX when LESSON_REGISTRY is still empty
    const registryPopulated = typeof LESSON_REGISTRY !== 'undefined' && Object.keys(LESSON_REGISTRY).length > 0;
    const manifest = typeof LESSON_MANIFEST !== 'undefined' ? LESSON_MANIFEST : { tracks: [] };

    if (registryPopulated) {
      // Full data available — use DataModule
      manifest.tracks.forEach(track => {
        const lessons = DataModule.getLessonsByTrack(track.id);
        if (lessons.length === 0) return;

        const trackDone = lessons.filter(l => completed.includes(l.id)).length;

        html += `<div class="nav-group">
          <div class="nav-group-header" data-group="${track.id}">
            <span>${track.icon || '📚'}</span>
            <span>${track.name}</span>
            <span style="font-size:10px;color:var(--text-muted);margin-left:auto;margin-right:4px;">${trackDone}/${lessons.length}</span>
            <svg class="chevron" width="14" height="14" viewBox="0 0 16 16"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
          </div>
          <div class="nav-group-items">`;

        lessons.forEach(lesson => {
          const done = completed.includes(lesson.id);
          const dot = done ? '<span style="color:var(--green);font-size:8px;">●</span>' : '<span style="color:var(--text-muted);font-size:8px;">○</span>';
          html += `<a class="nav-item" data-section="lesson-${lesson.id}" href="#lesson-${lesson.id}">
            ${dot} <span>${lesson.title}</span>
          </a>`;
        });

        html += `</div></div>`;
      });
    } else {
      // LESSON_REGISTRY empty — use LESSON_INDEX for lightweight sidebar
      const index = typeof LESSON_INDEX !== 'undefined' ? LESSON_INDEX : [];
      manifest.tracks.forEach(track => {
        const lessons = index.filter(l => l.track === track.id).sort((a, b) => a.order - b.order);
        if (lessons.length === 0) return;

        const trackDone = lessons.filter(l => completed.includes(l.id)).length;

        html += `<div class="nav-group">
          <div class="nav-group-header" data-group="${track.id}">
            <span>${track.icon || '📚'}</span>
            <span>${track.name}</span>
            <span style="font-size:10px;color:var(--text-muted);margin-left:auto;margin-right:4px;">${trackDone}/${lessons.length}</span>
            <svg class="chevron" width="14" height="14" viewBox="0 0 16 16"><path d="M6 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
          </div>
          <div class="nav-group-items">`;

        lessons.forEach(lesson => {
          const done = completed.includes(lesson.id);
          const dot = done ? '<span style="color:var(--green);font-size:8px;">●</span>' : '<span style="color:var(--text-muted);font-size:8px;">○</span>';
          html += `<a class="nav-item" data-section="lesson-${lesson.id}" href="#lesson-${lesson.id}">
            ${dot} <span>${lesson.title}</span>
          </a>`;
        });

        html += `</div></div>`;
      });
    }

    // Other sections
    html += `<a class="nav-item" data-section="quizzes" href="#quizzes">
      <span>❓</span> <span>Quizzes</span>
    </a>`;
    html += `<a class="nav-item" data-section="charts" href="#charts">
      <span>📈</span> <span>Charts</span>
    </a>`;
    html += `<a class="nav-item" data-section="simulator" href="#simulator">
      <span>🎮</span> <span>Simulator</span>
    </a>`;
    html += `<a class="nav-item" data-section="monitor" href="#monitor">
      <span>🌍</span> <span>Market Monitor</span>
    </a>`;
    html += `<a class="nav-item" data-section="books" href="#books">
      <span>📚</span> <span>Books & Courses</span>
    </a>`;
    html += `<a class="nav-item" data-section="resources" href="#resources">
      <span>📖</span> <span>Reference</span>
    </a>`;

    nav.innerHTML = html;

    // Event delegation — single listener replaces 100+ individual ones
    nav.addEventListener('click', (e) => {
      const header = e.target.closest('.nav-group-header');
      if (header) { header.parentElement.classList.toggle('open'); return; }
      const item = e.target.closest('.nav-item');
      if (item) { e.preventDefault(); window.location.hash = item.dataset.section; }
    });
  }

  // ============ Routing ============
  function handleRoute() {
    const hash = window.location.hash.slice(1) || 'dashboard';
    navigateTo(hash);
  }

  async function navigateTo(section) {
    const thisNavId = ++navId;

    // Close mobile sidebar
    document.getElementById('sidebar').classList.remove('mobile-open');

    // Handle lesson navigation
    if (section.startsWith('lesson-')) {
      const lessonId = section.replace('lesson-', '');
      const deps = SECTION_DEPS['lessons'] || [];

      if (deps.length > 0) {
        showLoadingSpinner();
        try {
          await Promise.all(deps.map(d => Loader.require(d)));
        } catch (e) {
          console.error('Failed to load lesson deps:', e);
        }
        hideLoadingSpinner();
        if (navId !== thisNavId) return;
      }

      // If lesson not in LESSON_REGISTRY, try loading options-content bundle
      if (!LESSON_REGISTRY[lessonId]) {
        showLoadingSpinner();
        try {
          await Loader.require('options-content');
        } catch (e) {
          console.error('Failed to load options-content:', e);
        }
        hideLoadingSpinner();
        if (navId !== thisNavId) return;
      }

      // Refresh manifest now that content files are loaded
      DataModule.buildLessonManifest();

      showSection('lessons');
      LessonsModule.renderLesson(lessonId);
      const allLessons = DataModule.getAllLessons();
      const lesson = allLessons.find(l => l.id === lessonId);
      setTopbarTitle(lesson ? lesson.title : 'Lesson');
      showLessonComplete(lessonId);
      updateActiveNav(section);
      return;
    }

    // Determine deps for the target section
    const deps = SECTION_DEPS[section] || [];

    if (deps.length > 0) {
      showLoadingSpinner();
      try {
        await Promise.all(deps.map(d => Loader.require(d)));
      } catch (e) {
        console.error('Failed to load deps for ' + section + ':', e);
      }
      hideLoadingSpinner();
      if (navId !== thisNavId) return;
    }

    showSection(section);
    setTopbarTitle(getSectionTitle(section));
    updateActiveNav(section);

    switch (section) {
      case 'dashboard':
        renderDashboard();
        break;
      case 'quizzes':
        QuizModule.init();
        break;
      case 'charts':
        initCharts();
        break;
      case 'resources':
        ReferenceModule.init();
        break;
      case 'books':
        if (typeof ResourcesModule !== 'undefined') ResourcesModule.init();
        break;
      case 'simulator':
        if (typeof SimulatorModule !== 'undefined') SimulatorModule.init();
        break;
      case 'monitor':
        if (typeof MonitorModule !== 'undefined') MonitorModule.init();
        break;
    }
  }

  function showSection(section) {
    // Cleanup previous section
    if (currentSection === 'lessons') LessonsModule.cleanup();
    if (currentSection === 'charts' && mainChart) {
      ChartEngine.destroyChart('mainChart');
      mainChart = null;
    }
    if (currentSection === 'simulator' && typeof SimulatorModule !== 'undefined') SimulatorModule.cleanup();
    if (currentSection === 'monitor' && typeof MonitorModule !== 'undefined') MonitorModule.cleanup();

    // Hide lesson complete button when leaving lessons
    const completeBtn = document.getElementById('lessonComplete');
    if (completeBtn) completeBtn.style.display = 'none';

    document.querySelectorAll('.content-section').forEach(s => s.classList.remove('active'));
    const target = document.getElementById('section-' + section);
    if (target) target.classList.add('active');
    currentSection = section;

    // Scroll to top
    const contentArea = document.getElementById('contentArea');
    if (contentArea) contentArea.scrollTop = 0;
  }

  function setTopbarTitle(title) {
    document.getElementById('topbarTitle').textContent = title;
  }

  function updateActiveNav(section) {
    document.querySelectorAll('#sidebarNav .nav-item').forEach(i => i.classList.remove('active'));
    const target = document.querySelector(`[data-section="${section}"]`);
    if (target) target.classList.add('active');
  }

  function getSectionTitle(section) {
    const titles = {
      dashboard: 'Dashboard',
      lessons: 'Lessons',
      quizzes: 'Quizzes',
      charts: 'Interactive Charts',
      resources: 'Reference Library',
      books: 'Books & Courses',
      simulator: 'Paper Trading Simulator',
      monitor: 'Market Monitor',
    };
    return titles[section] || section;
  }

  // ============ Lesson Complete ============
  function setupLessonComplete() {
    document.getElementById('lessonComplete').addEventListener('click', () => {
      const hash = window.location.hash.slice(1);
      if (hash.startsWith('lesson-')) {
        const lessonId = hash.replace('lesson-', '');
        LessonsModule.markLessonComplete(lessonId);
        document.getElementById('lessonComplete').textContent = 'Completed!';
        document.getElementById('lessonComplete').disabled = true;
        updateXPDisplay();
        // Refresh sidebar to update completion dots
        populateSidebar();
        updateActiveNav(hash);
      }
    });
  }

  function showLessonComplete(lessonId) {
    const btn = document.getElementById('lessonComplete');
    const progress = LessonsModule.getProgress();
    const completed = progress.completedLessons || [];
    if (completed.includes(lessonId)) {
      btn.style.display = 'inline-flex';
      btn.textContent = 'Completed!';
      btn.disabled = true;
    } else {
      btn.style.display = 'inline-flex';
      btn.textContent = 'Complete Lesson';
      btn.disabled = false;
    }
  }

  // ============ Dashboard ============
  function renderDashboard() {
    const progress = LessonsModule.getProgress();
    const allLessons = DataModule.getAllLessons();
    const completed = progress.completedLessons || [];
    const xp = progress.xp || 0;
    const streak = progress.streak || 0;

    // Stat cards
    document.getElementById('statLessons').textContent = `${completed.length}/${allLessons.length}`;
    document.getElementById('statXP').textContent = xp.toLocaleString();
    document.getElementById('statStreak').textContent = streak;

    // Quiz average
    const scores = progress.quizScores || {};
    const scoreValues = Object.values(scores);
    const avgScore = scoreValues.length > 0 ? Math.round(scoreValues.reduce((a, b) => a + b, 0) / scoreValues.length) : '--';
    document.getElementById('statQuizAvg').textContent = typeof avgScore === 'number' ? avgScore + '%' : avgScore;

    // Update XP display
    updateXPDisplay();

    // Tracks
    renderDashboardTracks(allLessons, completed);

    // Activity
    renderActivityFeed(progress);

    // Daily tip
    renderDailyTip();
  }

  function renderDashboardTracks(allLessons, completed) {
    const container = document.getElementById('dashboardTracks');
    const manifest = typeof LESSON_MANIFEST !== 'undefined' ? LESSON_MANIFEST : { tracks: [] };

    const fragment = document.createDocumentFragment();
    manifest.tracks.forEach(track => {
      const lessons = DataModule.getLessonsByTrack(track.id);
      if (lessons.length === 0) return;

      const trackDone = lessons.filter(l => completed.includes(l.id)).length;
      const pct = lessons.length > 0 ? (trackDone / lessons.length) * 100 : 0;

      const card = document.createElement('div');
      card.className = 'track-card';

      let cardHtml = `
        <div class="track-card-header">
          <span class="track-card-icon">${track.icon || '📚'}</span>
          <span class="track-card-title">${track.name}</span>
          <span style="margin-left:auto;font-size:12px;color:var(--text-muted);font-family:var(--font-mono);">${trackDone}/${lessons.length}</span>
        </div>
        <div class="track-card-progress"><div class="track-card-progress-fill" style="width:${pct}%"></div></div>
        <ul class="track-lesson-list">`;

      lessons.slice(0, 5).forEach(lesson => {
        const done = completed.includes(lesson.id);
        cardHtml += `<li class="track-lesson-item ${done ? 'completed' : ''}" onclick="location.hash='lesson-${lesson.id}'">
          <span style="font-size:10px;">${done ? '✓' : '○'}</span>
          <span>${lesson.title}</span>
        </li>`;
      });

      if (lessons.length > 5) {
        cardHtml += `<li class="track-lesson-item" style="color:var(--blue);font-size:12px;" onclick="document.querySelector('[data-group=${track.id}]').click();">
          +${lessons.length - 5} more lessons...
        </li>`;
      }

      cardHtml += `</ul>`;
      card.innerHTML = cardHtml;
      fragment.appendChild(card);
    });

    container.innerHTML = '';
    container.appendChild(fragment);
  }

  function renderActivityFeed(progress) {
    const container = document.getElementById('activityFeed');
    const activities = (progress.activities || []).slice(0, 5);

    if (activities.length === 0) {
      container.innerHTML = '<div style="color:var(--text-muted);font-size:12px;padding:8px;">No activity yet. Start a lesson!</div>';
      return;
    }

    container.innerHTML = activities.map(a => {
      const timeAgo = getTimeAgo(a.time);
      const icon = a.text.includes('Completed') ? '✓' : a.text.includes('Scored') ? '📝' : '📖';
      return `<div class="activity-item">
        <div class="activity-icon">${icon}</div>
        <div style="flex:1;">
          <div style="font-size:13px;">${a.text}</div>
          <div style="font-size:11px;color:var(--text-muted);">${timeAgo}</div>
        </div>
      </div>`;
    }).join('');
  }

  function renderDailyTip() {
    const tips = DAILY_TIPS;
    const dayIndex = Math.floor(Date.now() / 86400000) % tips.length;
    const tip = tips[dayIndex];
    const container = document.getElementById('dailyTip');
    container.innerHTML = `
      <div class="tip-title">${tip.title}</div>
      <div class="tip-text">${tip.text}</div>`;
  }

  function updateXPDisplay() {
    const progress = LessonsModule.getProgress();
    const xp = progress.xp || 0;
    document.getElementById('xpDisplay').textContent = xp + ' XP';
  }

  // ============ Charts Section ============
  let chartsInitialized = false;

  function initCharts() {
    populateTickerDropdown();

    const ticker = document.getElementById('chartTicker').value;
    if (ticker) loadMainChart(ticker);

    if (!chartsInitialized) {
      document.getElementById('chartTicker').addEventListener('change', (e) => {
        loadMainChart(e.target.value);
      });

      document.querySelectorAll('#indicatorToggles input').forEach(input => {
        input.addEventListener('change', () => updateIndicators());
      });

      chartsInitialized = true;
    }
  }

  function populateTickerDropdown() {
    const select = document.getElementById('chartTicker');
    const tickers = DataModule.getTickers();

    // Skip rebuild if dropdown already has the right count
    if (select.options.length === tickers.length) return;

    const previousValue = select.value;
    select.innerHTML = '';

    tickers.forEach(ticker => {
      const opt = document.createElement('option');
      opt.value = ticker;
      const info = DataModule.getTickerInfo(ticker);
      opt.textContent = ticker + (info && info.name ? ' — ' + info.name : '');
      select.appendChild(opt);
    });

    // Restore previous selection if it still exists
    if (previousValue && select.querySelector(`option[value="${previousValue}"]`)) {
      select.value = previousValue;
    }
  }

  function loadMainChart(ticker) {
    const data = DataModule.getStockData(ticker);
    if (!data || data.length === 0) {
      // Try fetching from server
      if (window.location.protocol !== 'file:') {
        const container = document.getElementById('mainChart');
        container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);font-size:13px;">Loading ' + ticker + '...</div>';
        DataModule.fetchLiveChart(ticker).then(result => {
          if (result && result.length > 0) {
            DataModule.stockData[ticker] = result;
            renderMainChart(ticker, result);
          } else {
            container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);">No data for ' + ticker + '</div>';
          }
        }).catch(() => {
          container.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:var(--text-muted);">Failed to load ' + ticker + '</div>';
        });
      }
      return;
    }
    renderMainChart(ticker, data);
  }

  function renderMainChart(ticker, data) {
    mainChart = ChartEngine.createCandlestickChart('mainChart', data, { height: 450 });
    updateIndicators();
    setTopbarTitle('Charts — ' + ticker);
  }

  function updateIndicators() {
    if (!mainChart) return;
    const ticker = document.getElementById('chartTicker').value;
    const data = DataModule.getStockData(ticker);
    if (!data || data.length === 0) return;

    // Remove all overlays
    ['sma', 'ema', 'bollinger'].forEach(key => ChartEngine.removeOverlay(mainChart, key));

    document.querySelectorAll('#indicatorToggles input').forEach(t => {
      if (!t.checked) return;
      switch (t.dataset.indicator) {
        case 'sma20': ChartEngine.addSMA(mainChart, data, 20, '#2196f3'); break;
        case 'sma50': ChartEngine.addSMA(mainChart, data, 50, '#ff9800'); break;
        case 'ema12': ChartEngine.addEMA(mainChart, data, 12, '#00bcd4'); break;
        case 'bollinger': ChartEngine.addBollingerBands(mainChart, data); break;
      }
    });

    // RSI
    const rsiToggle = document.querySelector('[data-indicator="rsi"]');
    const rsiContainer = document.getElementById('rsiChart');
    if (rsiToggle && rsiToggle.checked) {
      rsiContainer.classList.remove('hidden');
      ChartEngine.createRSIChart('rsiChart', data);
    } else {
      rsiContainer.classList.add('hidden');
      rsiContainer.innerHTML = '';
    }

    // MACD
    const macdToggle = document.querySelector('[data-indicator="macd"]');
    const macdContainer = document.getElementById('macdChart');
    if (macdToggle && macdToggle.checked) {
      macdContainer.classList.remove('hidden');
      ChartEngine.createMACDChart('macdChart', data);
    } else {
      macdContainer.classList.add('hidden');
      macdContainer.innerHTML = '';
    }
  }

  // ============ Theme Toggle ============
  function setupThemeToggle() {
    const saved = localStorage.getItem('tq_theme');
    if (saved) {
      document.documentElement.dataset.theme = saved;
    }
    const btn = document.getElementById('themeToggle');
    updateThemeIcon(btn);

    btn.addEventListener('click', () => {
      const current = document.documentElement.dataset.theme;
      const next = current === 'light' ? 'dark' : 'light';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('tq_theme', next);
      updateThemeIcon(btn);
    });
  }

  function updateThemeIcon(btn) {
    if (!btn) return;
    btn.textContent = document.documentElement.dataset.theme === 'light' ? '☀️' : '🌙';
  }

  // ============ Sidebar Toggle ============
  function setupSidebarToggle() {
    document.getElementById('sidebarToggle').addEventListener('click', () => {
      const sidebar = document.getElementById('sidebar');
      // On mobile, toggle mobile-open; on desktop, toggle collapsed
      if (window.innerWidth <= 1024) {
        sidebar.classList.toggle('mobile-open');
      } else {
        sidebar.classList.toggle('collapsed');
      }
    });
  }

  // ============ Ticker Search ============
  function setupTickerSearch() {
    const input = document.getElementById('tickerSearch');
    const resultsContainer = document.getElementById('searchResults');
    if (!input || !resultsContainer) return;

    let searchTimeout = null;

    input.addEventListener('input', () => {
      clearTimeout(searchTimeout);
      const query = input.value.trim();
      if (query.length < 1) {
        resultsContainer.classList.remove('visible');
        resultsContainer.innerHTML = '';
        return;
      }

      // Only search if server is available
      if (window.location.protocol === 'file:') return;

      searchTimeout = setTimeout(async () => {
        try {
          if (searchController) searchController.abort();
          searchController = new AbortController();
          const results = await DataModule.searchTicker(query);
          if (!results || results.length === 0) {
            resultsContainer.classList.remove('visible');
            return;
          }
          resultsContainer.innerHTML = results.slice(0, 8).map(r => `
            <div class="search-result-item" data-symbol="${r.symbol}">
              <span style="font-family:var(--font-mono);font-weight:600;">${r.symbol}</span>
              <span style="color:var(--text-secondary);flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${r.name || ''}</span>
            </div>
          `).join('');
          resultsContainer.classList.add('visible');

          resultsContainer.querySelectorAll('.search-result-item').forEach(item => {
            item.addEventListener('click', () => {
              input.value = '';
              resultsContainer.classList.remove('visible');
              window.location.hash = 'charts';
              setTimeout(() => {
                const select = document.getElementById('chartTicker');
                // Add ticker if not in dropdown
                if (!select.querySelector(`option[value="${item.dataset.symbol}"]`)) {
                  const opt = document.createElement('option');
                  opt.value = item.dataset.symbol;
                  opt.textContent = item.dataset.symbol;
                  select.insertBefore(opt, select.firstChild);
                }
                select.value = item.dataset.symbol;
                loadMainChart(item.dataset.symbol);
              }, 50);
            });
          });
        } catch (e) { /* server not available */ }
      }, 300);
    });

    document.addEventListener('click', (e) => {
      if (!e.target.closest('.search-box')) {
        resultsContainer.classList.remove('visible');
      }
    });
  }

  // ============ Streak ============
  function updateStreak() {
    const progress = LessonsModule.getProgress();
    const today = new Date().toISOString().split('T')[0];

    if (!progress.lastVisit) {
      progress.streak = 1;
    } else {
      const lastVisit = new Date(progress.lastVisit);
      const todayDate = new Date(today);
      const diffDays = Math.floor((todayDate - lastVisit) / 86400000);

      if (diffDays === 1) {
        progress.streak = (progress.streak || 0) + 1;
      } else if (diffDays > 1) {
        progress.streak = 1;
      }
    }

    progress.lastVisit = today;
    LessonsModule.saveProgress(progress);
  }

  // ============ Utilities ============
  function getTimeAgo(timestamp) {
    const seconds = Math.floor((Date.now() - timestamp) / 1000);
    if (seconds < 60) return 'just now';
    if (seconds < 3600) return Math.floor(seconds / 60) + 'm ago';
    if (seconds < 86400) return Math.floor(seconds / 3600) + 'h ago';
    return Math.floor(seconds / 86400) + 'd ago';
  }

  // ============ Boot ============
  document.addEventListener('DOMContentLoaded', init);

  return { navigateTo };
})();
