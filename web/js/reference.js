// ============================================
// Reference Module
// ============================================

const ReferenceModule = (() => {
  let currentTab = 'glossary';
  let initialized = false;
  let controller = null;

  function init() {
    if (!initialized) {
      controller = new SectionController();

      // Event delegation for tabs
      const tabContainer = document.querySelector('.ref-tabs');
      if (tabContainer) {
        controller.on(tabContainer, 'click', (e) => {
          const tab = e.target.closest('.tab');
          if (!tab) return;
          tabContainer.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          currentTab = tab.dataset.ref;
          render();
        });
      }

      // Search with debounce
      let searchTimer = null;
      controller.on(document.getElementById('refSearch'), 'input', (e) => {
        clearTimeout(searchTimer);
        searchTimer = setTimeout(() => render(e.target.value.toLowerCase()), 150);
      });

      initialized = true;
    }

    render();
  }

  function render(filter = '') {
    const content = document.getElementById('refContent');

    switch (currentTab) {
      case 'glossary':
        renderGlossary(content, filter);
        break;
      case 'formulas':
        renderFormulas(content, filter);
        break;
      case 'patterns':
        renderPatterns(content, filter);
        break;
      case 'strategies':
        renderStrategies(content, filter);
        break;
    }
  }

  function renderGlossary(container, filter) {
    const items = DataModule.glossary.filter(g =>
      !filter || g.term.toLowerCase().includes(filter) || g.definition.toLowerCase().includes(filter)
    );

    container.innerHTML = items.map(g => `
      <div class="ref-item">
        <div class="ref-item-title">${g.term}</div>
        <div class="ref-item-body">${g.definition}</div>
      </div>
    `).join('');
  }

  function renderFormulas(container, filter) {
    const items = DataModule.formulas.filter(f =>
      !filter || f.name.toLowerCase().includes(filter) || f.description.toLowerCase().includes(filter)
    );

    container.innerHTML = items.map(f => `
      <div class="ref-item">
        <div class="ref-item-title">${f.name}</div>
        <div class="ref-item-body">${f.description}</div>
        <div class="ref-item-formula">${f.formula}</div>
      </div>
    `).join('');
  }

  function renderPatterns(container, filter) {
    const items = (DataModule.patterns || []).filter(p =>
      !filter || p.name.toLowerCase().includes(filter) || (p.type || '').toLowerCase().includes(filter)
    );

    container.innerHTML = items.map(p => `
      <div class="ref-item">
        <div class="ref-item-title">${p.name} <span style="color: var(--text-muted); font-weight: 400; font-size: 12px;">${p.type}</span></div>
        <div class="ref-item-body">${p.description}</div>
      </div>
    `).join('');
  }

  function renderStrategies(container, filter) {
    const items = (DataModule.strategies || []).filter(s =>
      !filter || s.name.toLowerCase().includes(filter) || (s.outlook || '').toLowerCase().includes(filter)
    );

    container.innerHTML = items.map(s => `
      <div class="ref-item">
        <div class="ref-item-title">${s.name} <span style="color: var(--text-muted); font-weight: 400; font-size: 12px;">${s.outlook}</span></div>
        <div class="ref-item-body">${s.description}</div>
        <div style="display: flex; gap: 24px; margin-top: 8px; font-size: 12px;">
          <span style="color: var(--red);">Max Risk: ${s.risk}</span>
          <span style="color: var(--green);">Max Reward: ${s.reward}</span>
        </div>
      </div>
    `).join('');
  }

  function cleanup() {
    if (controller) { controller.destroy(); controller = null; initialized = false; }
  }

  return { init, cleanup };
})();
