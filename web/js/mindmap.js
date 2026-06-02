// ============================================
// Mind Map Engine — Interactive expandable mind maps
// ============================================

const MindMapEngine = (() => {

  function render(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="mindmap">
        <div class="mm-center">
          <div class="mm-node mm-root">${data.title}</div>
        </div>
        <div class="mm-branches">
          ${data.branches.map((branch, bi) => renderBranch(branch, bi)).join('')}
        </div>
      </div>`;

    // Attach toggle handlers
    container.querySelectorAll('.mm-branch-header').forEach(header => {
      header.addEventListener('click', () => {
        header.parentElement.classList.toggle('mm-open');
      });
    });

    container.querySelectorAll('.mm-leaf-header').forEach(header => {
      header.addEventListener('click', () => {
        header.parentElement.classList.toggle('mm-leaf-open');
      });
    });

    // Open first branch by default
    const firstBranch = container.querySelector('.mm-branch');
    if (firstBranch) firstBranch.classList.add('mm-open');
  }

  function renderBranch(branch, index) {
    const colors = ['#2196f3', '#00e676', '#ff9800', '#ab47bc', '#00bcd4', '#ff5722', '#8bc34a', '#e91e63'];
    const color = colors[index % colors.length];

    return `
      <div class="mm-branch" style="--branch-color: ${color};">
        <div class="mm-branch-header">
          <div class="mm-branch-dot" style="background: ${color};"></div>
          <div class="mm-branch-title">${branch.name}</div>
          <svg class="mm-chevron" width="14" height="14" viewBox="0 0 14 14"><path d="M5 3l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>
        </div>
        <div class="mm-branch-content">
          ${(branch.leaves || []).map(leaf => renderLeaf(leaf, color)).join('')}
          ${branch.summary ? `<div class="mm-branch-summary">${branch.summary}</div>` : ''}
        </div>
      </div>`;
  }

  function renderLeaf(leaf, color) {
    if (typeof leaf === 'string') {
      return `<div class="mm-leaf-simple"><span class="mm-leaf-bullet" style="background: ${color};"></span>${leaf}</div>`;
    }

    return `
      <div class="mm-leaf">
        <div class="mm-leaf-header">
          <span class="mm-leaf-bullet" style="background: ${color};"></span>
          <span class="mm-leaf-title">${leaf.name}</span>
          ${leaf.detail ? '<svg class="mm-chevron-sm" width="12" height="12" viewBox="0 0 12 12"><path d="M4 3l3 3-3 3" stroke="currentColor" stroke-width="1.5" fill="none"/></svg>' : ''}
        </div>
        ${leaf.detail ? `<div class="mm-leaf-detail">${leaf.detail}</div>` : ''}
      </div>`;
  }

  // Render a full book/course detail view with summary + mind map
  function renderDetail(containerId, item) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const diffColor = item.difficulty === 'beginner' ? '#00e676' : item.difficulty === 'intermediate' ? '#ff9800' : '#ff1744';

    container.innerHTML = `
      <div class="detail-view">
        <div class="detail-header">
          <button class="btn btn-secondary detail-back" id="detailBack">Back</button>
          <div class="detail-meta">
            <span class="resource-difficulty" style="color:${diffColor};">${item.difficulty}</span>
            <span class="resource-category">${item.category}</span>
            ${item.price ? `<span style="color:var(--cyan);font-weight:600;">${item.price}</span>` : ''}
          </div>
        </div>
        <h2 class="detail-title">${item.title || item.name}</h2>
        <div class="detail-author">${item.author ? 'by ' + item.author : item.provider || ''}</div>

        <div class="detail-summary-section">
          <h3>Summary</h3>
          <div class="detail-summary-text">${item.summary || item.description}</div>
        </div>

        ${item.keyTakeaways ? `
        <div class="detail-takeaways">
          <h3>Key Takeaways</h3>
          <div class="takeaways-grid">
            ${item.keyTakeaways.map((t, i) => `
              <div class="takeaway-card">
                <span class="takeaway-num">${i + 1}</span>
                <span class="takeaway-text">${t}</span>
              </div>
            `).join('')}
          </div>
        </div>` : ''}

        <div class="detail-mindmap-section">
          <h3>Mind Map</h3>
          <div id="detailMindMap" class="detail-mindmap"></div>
        </div>

        ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top:16px;">Visit Course &rarr;</a>` : ''}
      </div>`;

    // Render mind map
    if (item.mindmap) {
      render('detailMindMap', item.mindmap);
    }

    // Back button
    document.getElementById('detailBack').addEventListener('click', () => {
      container.innerHTML = '';
      container.classList.add('hidden');
      document.getElementById('resourcesGrid').classList.remove('hidden');
      document.querySelector('.resources-tabs').classList.remove('hidden');
      document.querySelector('.resources-filters').classList.remove('hidden');
      document.querySelector('.resources-search').classList.remove('hidden');
    });
  }

  return { render, renderDetail };
})();
