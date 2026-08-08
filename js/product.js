/**
 * NOIRÉ - Standalone Product Detail Page Controller
 */

let currentProduct = null;
let selectedColor = '';
let selectedSize = '';
let currentQty = 1;

document.addEventListener('DOMContentLoaded', () => {
  initProductPage();
});

function initProductPage() {
  const container = document.getElementById('product-detail-stage');
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id') || 'prd-01';

  currentProduct = NOIRE_PRODUCTS.find(p => p.id === id) || NOIRE_PRODUCTS[0];
  selectedColor = currentProduct.colors[0] || 'Black';
  selectedSize = currentProduct.sizes[0] || 'One Size';

  addRecentlyViewed(currentProduct.id);
  document.title = `${currentProduct.name} — NOIRÉ`;

  renderProductDetails();
  renderRecentlyViewed();
}

function renderProductDetails() {
  const container = document.getElementById('product-detail-stage');
  if (!container || !currentProduct) return;

  const wishlist = getStoredWishlist();
  const isWishlisted = wishlist.includes(currentProduct.id);

  container.innerHTML = `
    <div class="product-gallery-col">
      <div class="main-gallery-img-box">
        <img id="main-product-img" src="${currentProduct.image}" alt="${currentProduct.name}">
      </div>
      <div class="gallery-thumbs-row">
        ${currentProduct.gallery.map((img, idx) => `
          <img src="${img}" class="thumb-img ${idx === 0 ? 'active' : ''}" onclick="swapGalleryImg('${img}', this)">
        `).join('')}
      </div>
    </div>

    <div class="product-info-col">
      <span class="product-info-cat">${currentProduct.category} • ${currentProduct.collection}</span>
      <h1 class="product-info-title">${currentProduct.name}</h1>
      <div class="product-info-price">${currentProduct.priceFormatted}</div>
      <p class="product-info-desc">${currentProduct.longDescription}</p>

      <!-- Color Selector -->
      <div class="variant-group">
        <label class="variant-label">COLOR: <strong id="selected-color-lbl">${selectedColor}</strong></label>
        <div class="color-options-flex">
          ${currentProduct.colors.map(color => `
            <button class="color-swatch-btn ${color === selectedColor ? 'active' : ''}" onclick="selectColor('${color}', this)">
              ${color}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Size Selector -->
      ${currentProduct.sizes.length > 0 && currentProduct.sizes[0] !== 'One Size' ? `
        <div class="variant-group">
          <label class="variant-label">SIZE: <strong id="selected-size-lbl">${selectedSize}</strong></label>
          <div class="size-options-flex">
            ${currentProduct.sizes.map(size => `
              <button class="size-pill-btn ${size === selectedSize ? 'active' : ''}" onclick="selectSize('${size}', this)">
                ${size}
              </button>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- Quantity & Add to Bag -->
      <div class="add-to-bag-strip">
        <div class="qty-counter-box">
          <button onclick="adjustQty(-1)">−</button>
          <span id="qty-val-num">1</span>
          <button onclick="adjustQty(1)">+</button>
        </div>

        <button class="btn btn-primary btn-lg add-bag-btn" onclick="executeAddToBag()">
          Add to Bag • ${currentProduct.priceFormatted}
        </button>

        <button class="btn btn-outline btn-lg wishlist-icon-btn ${isWishlisted ? 'active' : ''}" id="prd-wishlist-toggle-btn" onclick="executeWishlistToggle()">
          ${isWishlisted ? '♥ Saved' : '♡ Save'}
        </button>
      </div>

      <div class="product-policy-accordion">
        <div class="policy-item">
          <strong>Complimentary Shipping & Returns</strong>
          <p>Free standard delivery on orders over ₹5,000. 14-day hassle-free return window.</p>
        </div>
        <div class="policy-item">
          <strong>Material & Care</strong>
          <p>Crafted using sustainable natural fibers and vegetable-tanned leathers. Clean with damp cloth.</p>
        </div>
      </div>
    </div>
  `;
}

function swapGalleryImg(src, thumbEl) {
  document.getElementById('main-product-img').src = src;
  document.querySelectorAll('.thumb-img').forEach(t => t.classList.remove('active'));
  thumbEl.classList.add('active');
}

function selectColor(color, btn) {
  selectedColor = color;
  document.getElementById('selected-color-lbl').textContent = color;
  document.querySelectorAll('.color-swatch-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function selectSize(size, btn) {
  selectedSize = size;
  document.getElementById('selected-size-lbl').textContent = size;
  document.querySelectorAll('.size-pill-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function adjustQty(delta) {
  currentQty += delta;
  if (currentQty < 1) currentQty = 1;
  document.getElementById('qty-val-num').textContent = currentQty;
}

function executeAddToBag() {
  addToCart(currentProduct.id, selectedColor, selectedSize, currentQty);
  openAddedToBagDrawer(currentProduct, selectedColor, selectedSize, currentQty);
}

function executeWishlistToggle() {
  const added = toggleWishlist(currentProduct.id);
  const btn = document.getElementById('prd-wishlist-toggle-btn');
  if (btn) {
    btn.innerHTML = added ? '♥ Saved' : '♡ Save';
    btn.classList.toggle('active', added);
  }
}

function renderRecentlyViewed() {
  const container = document.getElementById('recently-viewed-grid');
  if (!container) return;

  const recentIds = getRecentlyViewed().filter(id => id !== currentProduct.id).slice(0, 4);
  const recentProducts = NOIRE_PRODUCTS.filter(p => recentIds.includes(p.id));

  if (recentProducts.length === 0) return;

  container.innerHTML = recentProducts.map(p => `
    <div class="product-card">
      <a href="../product/product.html?id=${p.id}">
        <img src="${p.image}" class="primary-img">
        <h4 style="margin-top:8px; font-size:0.9rem;">${p.name}</h4>
        <div style="font-size:0.85rem; font-weight:700;">${p.priceFormatted}</div>
      </a>
    </div>
  `).join('');
}
