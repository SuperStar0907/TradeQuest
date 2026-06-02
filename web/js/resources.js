// ============================================
// Resources Module — Books & Courses with Mind Maps
// ============================================

const ResourcesModule = (() => {
  let currentTab = 'books';
  let currentCategory = 'all';
  let initialized = false;
  let controller = null;

  function init() {
    if (!initialized) {
      controller = new SectionController();

      document.querySelectorAll('.resources-tabs .tab').forEach(tab => {
        controller.on(tab, 'click', () => {
          document.querySelectorAll('.resources-tabs .tab').forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          currentTab = tab.dataset.restab;
          currentCategory = 'all';
          renderFilters();
          render();
        });
      });

      controller.on(document.getElementById('resourcesSearch'), 'input', (e) => {
        render(e.target.value.toLowerCase());
      });

      // Event delegation for resource card clicks
      controller.on(document.getElementById('resourcesGrid'), 'click', (e) => {
        const card = e.target.closest('.resource-card');
        if (!card || e.target.tagName === 'A') return;
        const type = card.dataset.type;
        const index = parseInt(card.dataset.index);
        const source = type === 'book' ? BOOKS_DATA : COURSES_DATA;
        const item = source[index];
        if (!item) return;
        showDetail(item);
      });

      initialized = true;
    }
    // Reset to grid view
    document.getElementById('resourcesGrid').classList.remove('hidden');
    document.getElementById('resourceDetail').classList.add('hidden');
    document.querySelector('.resources-tabs').classList.remove('hidden');
    document.getElementById('resourcesFilters').classList.remove('hidden');
    document.querySelector('.resources-search').classList.remove('hidden');
    renderFilters();
    render();
  }

  function renderFilters() {
    const container = document.getElementById('resourcesFilters');
    const items = currentTab === 'books' ? BOOKS_DATA : COURSES_DATA;
    const categories = ['all', ...new Set(items.map(i => i.category))];

    container.innerHTML = categories.map(c => {
      const label = c === 'all' ? 'All' : c;
      const count = c === 'all' ? items.length : items.filter(i => i.category === c).length;
      return `<button class="monitor-filter ${c === currentCategory ? 'active' : ''}" data-cat="${c}">${label} (${count})</button>`;
    }).join('');

    container.querySelectorAll('.monitor-filter').forEach(btn => {
      btn.addEventListener('click', () => {
        currentCategory = btn.dataset.cat;
        container.querySelectorAll('.monitor-filter').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render();
      });
    });
  }

  function render(filter = '') {
    const container = document.getElementById('resourcesGrid');
    if (currentTab === 'books') renderBooks(container, filter);
    else renderCourses(container, filter);
  }

  function renderBooks(container, filter) {
    let items = [...BOOKS_DATA];
    if (currentCategory !== 'all') items = items.filter(b => b.category === currentCategory);
    if (filter) {
      items = items.filter(b =>
        b.title.toLowerCase().includes(filter) || b.author.toLowerCase().includes(filter) ||
        b.category.toLowerCase().includes(filter) || b.description.toLowerCase().includes(filter)
      );
    }
    // Sort by rank (importance)
    items.sort((a, b) => (a.rank || 99) - (b.rank || 99));
    if (items.length === 0) { container.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text-muted);">No books found.</div>'; return; }

    container.innerHTML = items.map(b => {
      const diffColor = b.difficulty === 'beginner' ? 'var(--green)' : b.difficulty === 'intermediate' ? 'var(--orange)' : 'var(--red)';
      const idx = BOOKS_DATA.indexOf(b);
      const featuredBadge = b.featured ? '<span style="background:linear-gradient(135deg,var(--blue),var(--purple));color:white;font-size:9px;font-weight:700;padding:2px 8px;border-radius:10px;letter-spacing:0.5px;">TOP ' + b.rank + '</span>' : '';
      const featuredBorder = b.featured ? 'border-color:var(--blue);' : '';
      return `
        <div class="resource-card" data-type="book" data-index="${idx}" style="cursor:pointer;${featuredBorder}">
          <div class="resource-card-top">
            <div style="display:flex;gap:6px;align-items:center;">
              <div class="resource-category">${b.category}</div>
              ${featuredBadge}
            </div>
            <span class="resource-difficulty" style="color:${diffColor};">${b.difficulty}</span>
          </div>
          <div class="resource-title">${b.title}</div>
          <div class="resource-author">by ${b.author}</div>
          <div class="resource-desc">${b.description}</div>
          <div class="resource-why"><strong>Why read it:</strong> ${b.why}</div>
          <div style="margin-top:8px;font-size:11px;color:var(--text-accent);">Click for summary & mind map &rarr;</div>
        </div>`;
    }).join('');
  }

  function renderCourses(container, filter) {
    let items = [...COURSES_DATA];
    if (currentCategory !== 'all') items = items.filter(c => c.category === currentCategory);
    if (filter) {
      items = items.filter(c =>
        c.name.toLowerCase().includes(filter) || c.provider.toLowerCase().includes(filter) ||
        c.category.toLowerCase().includes(filter) || c.description.toLowerCase().includes(filter)
      );
    }
    // Sort by rank (importance)
    items.sort((a, b) => (a.rank || 99) - (b.rank || 99));
    if (items.length === 0) { container.innerHTML = '<div style="padding:40px;text-align:center;color:var(--text-muted);">No courses found.</div>'; return; }

    container.innerHTML = items.map(c => {
      const diffColor = c.difficulty === 'beginner' ? 'var(--green)' : c.difficulty === 'intermediate' ? 'var(--orange)' : 'var(--red)';
      const priceColor = c.price === 'Free' ? 'var(--green)' : c.price.includes('15,000') ? 'var(--red)' : 'var(--cyan)';
      const idx = COURSES_DATA.indexOf(c);
      const featuredBadge = c.featured ? '<span style="background:linear-gradient(135deg,var(--blue),var(--purple));color:white;font-size:9px;font-weight:700;padding:2px 8px;border-radius:10px;letter-spacing:0.5px;">TOP ' + c.rank + '</span>' : '';
      const featuredBorder = c.featured ? 'border-color:var(--blue);' : '';
      return `
        <div class="resource-card" data-type="course" data-index="${idx}" style="cursor:pointer;${featuredBorder}">
          <div class="resource-card-top">
            <div style="display:flex;gap:6px;align-items:center;">
              <div class="resource-category">${c.category}</div>
              ${featuredBadge}
            </div>
            <span class="resource-difficulty" style="color:${diffColor};">${c.difficulty}</span>
          </div>
          <div class="resource-title">${c.name}</div>
          <div class="resource-author">${c.provider} <span style="color:${priceColor};font-weight:600;margin-left:8px;">${c.price}</span></div>
          <div class="resource-desc">${c.description}</div>
          <div style="margin-top:8px;font-size:11px;color:var(--text-accent);">Click for summary & mind map &rarr;</div>
        </div>`;
    }).join('');
  }

  async function showDetail(item) {
    if (typeof SUMMARIES_DATA === 'undefined') {
      await Loader.require('summaries');
    }
    const key = makeKey(item.title || item.name);
    const summaryData = (typeof SUMMARIES_DATA !== 'undefined' && SUMMARIES_DATA[key]) || null;
    const enriched = summaryData ? { ...item, ...summaryData } : autoEnrich(item);

    document.getElementById('resourcesGrid').classList.add('hidden');
    document.querySelector('.resources-tabs').classList.add('hidden');
    document.getElementById('resourcesFilters').classList.add('hidden');
    document.querySelector('.resources-search').classList.add('hidden');
    const detail = document.getElementById('resourceDetail');
    detail.classList.remove('hidden');
    MindMapEngine.renderDetail('resourceDetail', enriched);
  }

  function makeKey(str) {
    return (str || '').replace(/[^a-zA-Z0-9]/g, '_').toLowerCase();
  }

  function autoEnrich(item) {
    return {
      ...item,
      summary: item.description + (item.why ? ' ' + item.why : ''),
      keyTakeaways: [item.description, item.why || item.description],
      mindmap: {
        title: item.title || item.name,
        branches: [
          { name: 'Overview', leaves: [item.description] },
          { name: 'Category: ' + item.category, leaves: ['Difficulty: ' + item.difficulty] },
          { name: 'Why', leaves: [item.why || item.description] },
        ]
      }
    };
  }

  function cleanup() {
    if (controller) { controller.destroy(); controller = null; }
    initialized = false;
  }

  return { init, cleanup };
})();
