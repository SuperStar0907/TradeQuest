// ============================================
// Lessons Module
// ============================================

const LessonsModule = (() => {
  let currentLesson = null;
  let currentSectionIndex = 0;
  let lessonCharts = [];

  function renderLesson(lessonId) {
    const allLessons = DataModule.getAllLessons();
    const lesson = allLessons.find(l => l.id === lessonId);
    if (!lesson) return;

    currentLesson = lesson;
    currentSectionIndex = 0;

    const header = document.getElementById('lessonHeader');
    header.innerHTML = `
      <h2>${lesson.title}</h2>
      <div class="lesson-meta">
        <span>${lesson.difficulty.charAt(0).toUpperCase() + lesson.difficulty.slice(1)}</span>
        <span>${lesson.estimatedMinutes} min</span>
        <span>+${lesson.xpReward} XP</span>
      </div>
    `;

    renderAllSections(lesson);
    updateProgress();
    markLessonStarted(lessonId);
  }

  function renderAllSections(lesson) {
    const body = document.getElementById('lessonBody');
    // Cleanup previous charts
    lessonCharts.forEach(c => { try { c.destroy(); } catch(e) {} });
    lessonCharts = [];

    let html = '';
    lesson.sections.forEach((section, idx) => {
      html += `<div class="lesson-section" data-section-idx="${idx}">`;

      switch (section.type) {
        case 'text':
          html += section.content;
          break;

        case 'interactive-chart':
          html += renderInteractiveChart(section, idx);
          break;

        case 'key-concept':
          html += `<div class="key-concept"><h4>Key Concept: ${section.title}</h4><p>${section.content}</p></div>`;
          break;

        case 'comparison-table':
          html += renderComparisonTable(section);
          break;

        case 'payoff-diagram':
          html += renderPayoffSection(section, idx);
          break;
      }

      html += '</div>';
    });

    body.innerHTML = html;

    // Initialize charts after DOM is ready
    requestAnimationFrame(() => {
      lesson.sections.forEach((section, idx) => {
        if (section.type === 'interactive-chart') {
          initLessonChart(section, idx);
        }
        if (section.type === 'payoff-diagram') {
          initPayoffDiagram(section, idx);
        }
      });
    });
  }

  function renderInteractiveChart(section, idx) {
    const cfg = section.config;
    let controlsHtml = '';

    if (cfg.controls) {
      controlsHtml = '<div class="lesson-controls">';
      cfg.controls.forEach(ctrl => {
        controlsHtml += `
          <div class="lesson-slider">
            <label>${ctrl.label}:</label>
            <input type="range" id="ctrl-${idx}-${ctrl.id}" min="${ctrl.min}" max="${ctrl.max}" value="${ctrl.default}" step="${ctrl.step || 1}">
            <span class="slider-value" id="val-${idx}-${ctrl.id}">${ctrl.default}</span>
          </div>`;
      });
      controlsHtml += '</div>';
    }

    return `
      <div class="lesson-chart-container">
        <h4>${cfg.title}</h4>
        <p style="color: var(--text-secondary); font-size: 13px; margin-bottom: 12px;">${cfg.description}</p>
        <div id="lesson-chart-${idx}" class="lesson-chart"></div>
        ${controlsHtml}
      </div>`;
  }

  function initLessonChart(section, idx) {
    const cfg = section.config;
    const data = DataModule.getStockData(cfg.ticker);
    const chartObj = ChartEngine.createCandlestickChart(`lesson-chart-${idx}`, data, { height: 350 });
    if (!chartObj) return;
    lessonCharts.push(chartObj);

    // Add default indicators
    if (cfg.indicators?.includes('sma')) {
      const defaultPeriod = cfg.controls?.find(c => c.id === 'smaPeriod')?.default || 20;
      ChartEngine.addSMA(chartObj, data, defaultPeriod);
    }

    // Attach slider controls
    if (cfg.controls) {
      cfg.controls.forEach(ctrl => {
        const slider = document.getElementById(`ctrl-${idx}-${ctrl.id}`);
        const valDisplay = document.getElementById(`val-${idx}-${ctrl.id}`);
        if (!slider) return;

        slider.addEventListener('input', () => {
          const val = parseInt(slider.value);
          valDisplay.textContent = val;

          if (ctrl.id === 'smaPeriod') {
            ChartEngine.removeOverlay(chartObj, 'sma');
            ChartEngine.addSMA(chartObj, data, val);
          }
          if (ctrl.id === 'rsiPeriod') {
            // RSI is a sub-chart, re-create it
            const rsiContainer = document.getElementById(`lesson-rsi-${idx}`);
            if (rsiContainer) {
              ChartEngine.createRSIChart(`lesson-rsi-${idx}`, data, val);
            }
          }
        });
      });
    }

    // Create RSI sub-chart if needed
    if (cfg.showRSI) {
      const chartContainer = document.getElementById(`lesson-chart-${idx}`).parentElement;
      const rsiDiv = document.createElement('div');
      rsiDiv.id = `lesson-rsi-${idx}`;
      rsiDiv.style.height = '120px';
      rsiDiv.style.marginTop = '8px';
      chartContainer.appendChild(rsiDiv);
      const rsiChart = ChartEngine.createRSIChart(`lesson-rsi-${idx}`, data, 14);
      if (rsiChart) lessonCharts.push(rsiChart);
    }

    // Create MACD sub-chart if needed
    if (cfg.showMACD) {
      const chartContainer = document.getElementById(`lesson-chart-${idx}`).parentElement;
      const macdDiv = document.createElement('div');
      macdDiv.id = `lesson-macd-${idx}`;
      macdDiv.style.height = '120px';
      macdDiv.style.marginTop = '8px';
      chartContainer.appendChild(macdDiv);
      const macdChart = ChartEngine.createMACDChart(`lesson-macd-${idx}`, data);
      if (macdChart) lessonCharts.push(macdChart);
    }
  }

  function renderPayoffSection(section, idx) {
    const cfg = section.config;
    let controlsHtml = '';
    if (cfg.controls) {
      controlsHtml = '<div class="lesson-controls">';
      cfg.controls.forEach(ctrl => {
        controlsHtml += `
          <div class="lesson-slider">
            <label>${ctrl.label}:</label>
            <input type="range" id="payoff-ctrl-${idx}-${ctrl.id}" min="${ctrl.min}" max="${ctrl.max}" value="${ctrl.default}" step="${ctrl.step || 1}">
            <span class="slider-value" id="payoff-val-${idx}-${ctrl.id}">${ctrl.default}</span>
          </div>`;
      });
      controlsHtml += '</div>';
    }

    return `
      <div class="lesson-chart-container">
        <h4>${cfg.title}</h4>
        <p style="color: var(--text-secondary); font-size: 13px; margin-bottom: 12px;">${cfg.description}</p>
        <div id="payoff-chart-${idx}" style="height: 300px;"></div>
        ${controlsHtml}
      </div>`;
  }

  async function initPayoffDiagram(section, idx) {
    const cfg = section.config;
    await ChartEngine.createPayoffDiagram(`payoff-chart-${idx}`, cfg.strategies, cfg.stockPrice);

    if (cfg.controls) {
      cfg.controls.forEach(ctrl => {
        const slider = document.getElementById(`payoff-ctrl-${idx}-${ctrl.id}`);
        const valDisplay = document.getElementById(`payoff-val-${idx}-${ctrl.id}`);
        if (!slider) return;

        slider.addEventListener('input', () => {
          const val = parseFloat(slider.value);
          valDisplay.textContent = val;

          const updatedStrategies = cfg.strategies.map(s => ({ ...s }));
          if (ctrl.id === 'strikePrice') updatedStrategies[0].strike = val;
          if (ctrl.id === 'premium') updatedStrategies[0].premium = val;

          ChartEngine.createPayoffDiagram(`payoff-chart-${idx}`, updatedStrategies, cfg.stockPrice);
        });
      });
    }
  }

  function renderComparisonTable(section) {
    let html = '<table class="comparison-table"><thead><tr>';
    section.headers.forEach(h => html += `<th>${h}</th>`);
    html += '</tr></thead><tbody>';
    section.rows.forEach(row => {
      html += '<tr>';
      row.forEach(cell => html += `<td>${cell}</td>`);
      html += '</tr>';
    });
    html += '</tbody></table>';
    return html;
  }

  function updateProgress() {
    if (!currentLesson) return;
    const total = currentLesson.sections.length;
    const fill = document.getElementById('lessonProgressFill');
    if (fill) fill.style.width = '100%';
  }

  function markLessonStarted(lessonId) {
    const progress = getProgress();
    if (!progress.startedLessons) progress.startedLessons = [];
    if (!progress.startedLessons.includes(lessonId)) {
      progress.startedLessons.push(lessonId);
    }
    saveProgress(progress);
  }

  function markLessonComplete(lessonId) {
    const progress = getProgress();
    if (!progress.completedLessons) progress.completedLessons = [];
    if (!progress.completedLessons.includes(lessonId)) {
      progress.completedLessons.push(lessonId);
      progress.xp = (progress.xp || 0) + (currentLesson?.xpReward || 50);
      addActivity(`Completed lesson: ${currentLesson?.title || lessonId}`);
    }
    saveProgress(progress);
  }

  function getProgress() {
    try { return JSON.parse(localStorage.getItem('tq_progress') || '{}'); }
    catch { return {}; }
  }

  function saveProgress(progress) {
    localStorage.setItem('tq_progress', JSON.stringify(progress));
  }

  function addActivity(text) {
    const progress = getProgress();
    if (!progress.activities) progress.activities = [];
    progress.activities.unshift({ text, time: Date.now() });
    progress.activities = progress.activities.slice(0, 20);
    saveProgress(progress);
  }

  function cleanup() {
    lessonCharts.forEach(c => { try { c.destroy(); } catch(e) {} });
    lessonCharts = [];
  }

  return { renderLesson, markLessonComplete, getProgress, saveProgress, addActivity, cleanup };
})();
