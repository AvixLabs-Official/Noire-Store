/**
 * NOIRÉ - Shopping Bag & Cart Drawer Controller
 */

let activeCouponCode = null;

document.addEventListener('DOMContentLoaded', () => {
  initCartPage();
});

function initCartPage() {
  const container = document.getElementById('cart-page-stage');
  if (!container) return;

  renderCartPage();
}

function getCartCalculations() {
  const cart = getStoredCart();
  let subtotal = 0;

  const items = cart.map(item => {
    const product = NOIRE_PRODUCTS.find(p => p.id === item.id);
    if (!product) return null;

    const lineTotal = product.price * item.quantity;
    subtotal += lineTotal;

    return { ...item, product, lineTotal };
  }).filter(Boolean);

  // Discount
  let discount = 0;
  if (activeCouponCode && NOIRE_COUPONS[activeCouponCode]) {
    const c = NOIRE_COUPONS[activeCouponCode];
    if (c.type === 'percent') {
      discount = Math.round(subtotal * (c.value / 100));
    } else if (c.type === 'flat') {
      discount = c.value;
    }
  }

  // Shipping (Free over ₹5,000)
  const shipping = subtotal >= 5000 || subtotal === 0 ? 0 : 199;
  const total = Math.max(0, subtotal - discount + shipping);

  return { items, subtotal, discount, shipping, total };
}

function renderCartPage() {
  const container = document.getElementById('cart-page-stage');
  if (!container) return;

  const { items, subtotal, discount, shipping, total } = getCartCalculations();

  if (items.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding:80px 20px;">
        <h2 style="font-family:var(--font-heading); font-size:2.4rem; margin-bottom:12px;">YOUR BAG IS EMPTY.</h2>
        <p style="color:var(--color-secondary); margin-bottom:32px;">Explore our considered collection of everyday objects.</p>
        <a href="../shop/shop.html" class="btn btn-primary btn-lg">Explore Collection →</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <div style="display:grid; grid-template-columns:1.2fr 0.8fr; gap:60px; align-items:start;">
      <div>
        <h2 style="font-family:var(--font-heading); font-size:2rem; margin-bottom:24px;">SHOPPING BAG (${items.length})</h2>

        <div class="cart-items-list">
          ${items.map(item => `
            <div class="cart-item-row">
              <img src="${item.product.image}" class="cart-item-img">
              <div class="cart-item-info">
                <h3><a href="../product/product.html?id=${item.product.id}">${item.product.name}</a></h3>
                <div style="font-size:0.85rem; color:var(--color-secondary);">Color: ${item.color} | Size: ${item.size}</div>
                <div style="font-size:0.95rem; font-weight:700; margin-top:4px;">₹${item.product.price.toLocaleString('en-IN')}</div>
              </div>

              <div class="cart-item-qty">
                <button onclick="changeCartQty('${item.id}', '${item.color}', '${item.size}', ${item.quantity - 1})">−</button>
                <span>${item.quantity}</span>
                <button onclick="changeCartQty('${item.id}', '${item.color}', '${item.size}', ${item.quantity + 1})">+</button>
              </div>

              <div class="cart-item-total">
                ₹${item.lineTotal.toLocaleString('en-IN')}
              </div>

              <button class="cart-item-remove-btn" onclick="changeCartQty('${item.id}', '${item.color}', '${item.size}', 0)">✕</button>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="cart-summary-box">
        <h3 style="font-family:var(--font-heading); font-size:1.4rem; margin-bottom:20px;">ORDER SUMMARY</h3>

        <div class="summary-line">
          <span>Subtotal</span>
          <span>₹${subtotal.toLocaleString('en-IN')}</span>
        </div>

        ${discount > 0 ? `
          <div class="summary-line" style="color:var(--color-accent);">
            <span>Coupon Discount</span>
            <span>−₹${discount.toLocaleString('en-IN')}</span>
          </div>
        ` : ''}

        <div class="summary-line">
          <span>Shipping</span>
          <span>${shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
        </div>

        <!-- Coupon Input -->
        <div style="margin:20px 0; display:flex; gap:8px;">
          <input type="text" id="coupon-code-input" placeholder="Promo code (e.g. NOIRE10)" value="${activeCouponCode || ''}" style="flex-grow:1; padding:10px 14px; border:1px solid var(--border-color); background:#FFF; text-transform:uppercase;">
          <button class="btn btn-outline btn-sm" onclick="applyCouponCode()">Apply</button>
        </div>

        <div class="summary-line total-line" style="margin-top:20px; padding-top:20px; border-top:1px solid var(--border-color); font-size:1.2rem; font-weight:800;">
          <span>Estimated Total</span>
          <span>₹${total.toLocaleString('en-IN')}</span>
        </div>

        <a href="../checkout/checkout.html" class="btn btn-primary btn-lg" style="width:100%; margin-top:24px; text-align:center;">Proceed to Checkout →</a>
      </div>
    </div>
  `;
}

function changeCartQty(id, color, size, qty) {
  updateCartQuantity(id, color, size, qty);
  renderCartPage();
}

function applyCouponCode() {
  const input = document.getElementById('coupon-code-input');
  if (!input) return;

  const code = input.value.trim().toUpperCase();
  if (NOIRE_COUPONS[code]) {
    activeCouponCode = code;
    alert(`Coupon ${code} applied successfully!`);
    renderCartPage();
  } else {
    alert("Invalid promo code. Try NOIRE10 or WELCOME15.");
  }
}

function openAddedToBagDrawer(product, color, size, qty) {
  const drawer = document.getElementById('added-to-bag-drawer');
  const body = document.getElementById('added-bag-body');
  if (!drawer || !body) return;

  body.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:20px;">
      <span style="font-size:0.75rem; text-transform:uppercase; color:var(--color-accent); font-weight:700;">Added to your bag</span>
      <button onclick="closeAddedToBagDrawer()" style="cursor:pointer; font-size:1.2rem;">✕</button>
    </div>

    <div style="display:flex; gap:16px; align-items:center; margin-bottom:24px;">
      <img src="${product.image}" style="width:70px; height:70px; object-fit:cover; border-radius:2px;">
      <div>
        <h4 style="font-size:1rem; margin-bottom:2px;">${product.name}</h4>
        <div style="font-size:0.82rem; color:var(--color-secondary);">${color} • ${size} • Qty ${qty}</div>
        <div style="font-size:0.9rem; font-weight:700; margin-top:4px;">${product.priceFormatted}</div>
      </div>
    </div>

    <a href="../cart/cart.html" class="btn btn-primary btn-lg" style="width:100%; text-align:center; margin-bottom:10px;">View Shopping Bag →</a>
    <button class="btn btn-outline" style="width:100%; text-align:center;" onclick="closeAddedToBagDrawer()">Continue Shopping</button>
  `;

  drawer.classList.add('active');
}

function closeAddedToBagDrawer() {
  const drawer = document.getElementById('added-to-bag-drawer');
  if (drawer) drawer.classList.remove('active');
}
