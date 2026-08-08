/**
 * NOIRÉ - Main Application Orchestrator & Header Popovers
 */

document.addEventListener('DOMContentLoaded', () => {
  updateNavBadgeCounts();
  initGlobalSearchOverlay();
  initMobileNavDrawer();
});

function initGlobalSearchOverlay() {
  const trigger = document.getElementById('nav-search-trigger');
  const overlay = document.getElementById('search-overlay-drawer');
  const closeBtn = document.getElementById('search-close-btn');
  const searchInput = document.getElementById('overlay-search-input');
  const resultsContainer = document.getElementById('overlay-search-results');

  if (trigger && overlay) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      overlay.classList.add('active');
      if (searchInput) searchInput.focus();
    });
  }

  if (closeBtn && overlay) {
    closeBtn.addEventListener('click', () => {
      overlay.classList.remove('active');
    });
  }

  if (searchInput && resultsContainer) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      if (!q) {
        resultsContainer.innerHTML = `<p style="color:var(--color-secondary); padding:20px 0;">Start typing to search products, bags, watches, accessories...</p>`;
        return;
      }

      const matches = NOIRE_PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));

      if (matches.length === 0) {
        resultsContainer.innerHTML = `<p style="color:var(--color-secondary); padding:20px 0;">No pieces found matching "${q}".</p>`;
      } else {
        resultsContainer.innerHTML = matches.map(p => `
          <a href="../product/product.html?id=${p.id}" class="search-result-item">
            <img src="${p.image}" class="search-item-img">
            <div>
              <strong style="font-size:0.95rem; display:block;">${p.name}</strong>
              <span style="font-size:0.8rem; color:var(--color-secondary);">${p.category} • ${p.priceFormatted}</span>
            </div>
          </a>
        `).join('');
      }
    });
  }
}

function initMobileNavDrawer() {
  const trigger = document.getElementById('mobile-menu-trigger');
  const drawer = document.getElementById('mobile-nav-drawer');

  if (trigger && drawer) {
    trigger.addEventListener('click', () => {
      drawer.classList.toggle('active');
    });
  }
}

function openQuickAddModal(productId) {
  const p = NOIRE_PRODUCTS.find(item => item.id === productId);
  if (!p) return;

  addToCart(p.id, p.colors[0] || 'Black', p.sizes[0] || 'One Size', 1);
  openAddedToBagDrawer(p, p.colors[0] || 'Black', p.sizes[0] || 'One Size', 1);
}
