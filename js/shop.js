/**
 * NOIRÉ - Catalog Filter, Sort, & Product Cards Engine
 */

let activeCategory = 'All';
let activeCollection = 'All';
let activePriceRange = 'All';
let activeSort = 'featured';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  initShopPage();
});

function initShopPage() {
  const container = document.getElementById('shop-products-grid');
  if (!container) return;

  // Read URL params
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('category')) activeCategory = urlParams.get('category');
  if (urlParams.get('collection')) activeCollection = urlParams.get('collection');
  if (urlParams.get('search')) searchQuery = urlParams.get('search');

  // Category Pills
  const catPills = document.querySelectorAll('.shop-cat-pill');
  catPills.forEach(pill => {
    if (pill.getAttribute('data-category') === activeCategory) {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
    }
    pill.addEventListener('click', () => {
      catPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      activeCategory = pill.getAttribute('data-category');
      renderCatalogGrid();
    });
  });

  // Sort Select
  const sortSelect = document.getElementById('shop-sort-select');
  if (sortSelect) {
    sortSelect.value = activeSort;
    sortSelect.addEventListener('change', (e) => {
      activeSort = e.target.value;
      renderCatalogGrid();
    });
  }

  // Price Filter Select
  const priceSelect = document.getElementById('shop-price-select');
  if (priceSelect) {
    priceSelect.addEventListener('change', (e) => {
      activePriceRange = e.target.value;
      renderCatalogGrid();
    });
  }

  renderCatalogGrid();
}

function getFilteredProducts() {
  let list = [...NOIRE_PRODUCTS];

  // Category
  if (activeCategory !== 'All') {
    list = list.filter(p => p.category.toLowerCase() === activeCategory.toLowerCase());
  }

  // Collection
  if (activeCollection !== 'All') {
    list = list.filter(p => p.collection.toLowerCase() === activeCollection.toLowerCase());
  }

  // Search
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    list = list.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }

  // Price Range
  if (activePriceRange === 'under3000') list = list.filter(p => p.price < 3000);
  if (activePriceRange === '3000to6000') list = list.filter(p => p.price >= 3000 && p.price <= 6000);
  if (activePriceRange === '6000to10000') list = list.filter(p => p.price > 6000 && p.price <= 10000);
  if (activePriceRange === 'over10000') list = list.filter(p => p.price > 10000);

  // Sorting
  if (activeSort === 'price-low') list.sort((a, b) => a.price - b.price);
  if (activeSort === 'price-high') list.sort((a, b) => b.price - a.price);
  if (activeSort === 'rating') list.sort((a, b) => b.rating - a.rating);
  if (activeSort === 'newest') list.reverse();

  return list;
}

function renderCatalogGrid() {
  const container = document.getElementById('shop-products-grid');
  const countEl = document.getElementById('catalog-count-lbl');

  if (!container) return;

  const products = getFilteredProducts();
  if (countEl) countEl.textContent = `${products.length} pieces`;

  if (products.length === 0) {
    container.innerHTML = `
      <div style="grid-column:1/-1; text-align:center; padding:80px 20px;">
        <h3>No pieces match your selected filters.</h3>
        <p style="color:var(--color-secondary); margin-top:8px;">Try clearing search keywords or choosing a different category.</p>
        <button class="btn btn-outline" style="margin-top:20px;" onclick="resetCatalogFilters()">Clear All Filters</button>
      </div>
    `;
    return;
  }

  const wishlist = getStoredWishlist();

  container.innerHTML = products.map(p => {
    const isWishlisted = wishlist.includes(p.id);
    return `
      <div class="product-card">
        <div class="product-card-thumb">
          ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
          <button class="card-wishlist-btn ${isWishlisted ? 'active' : ''}" data-id="${p.id}" onclick="handleWishlistClick(event, '${p.id}')">
            ${isWishlisted ? '♥' : '♡'}
          </button>

          <a href="../product/product.html?id=${p.id}" class="card-img-link">
            <img src="${p.image}" class="primary-img" alt="${p.name}">
            <img src="${p.imageSecondary || p.image}" class="secondary-img" alt="${p.name}">
          </a>

          <button class="quick-add-btn" onclick="openQuickAddModal('${p.id}')">+ Quick Add</button>
        </div>

        <div class="product-card-body">
          <span class="card-cat">${p.category}</span>
          <h3 class="card-title"><a href="../product/product.html?id=${p.id}">${p.name}</a></h3>
          <div class="card-price">${p.priceFormatted}</div>
        </div>
      </div>
    `;
  }).join('');
}

function handleWishlistClick(e, productId) {
  e.preventDefault();
  e.stopPropagation();
  const added = toggleWishlist(productId);
  const btn = e.target.closest('.card-wishlist-btn');
  if (btn) {
    btn.innerHTML = added ? '♥' : '♡';
    btn.classList.toggle('active', added);
  }
}

function resetCatalogFilters() {
  activeCategory = 'All';
  activeCollection = 'All';
  activePriceRange = 'All';
  searchQuery = '';
  renderCatalogGrid();
}
