/**
 * NOIRÉ - Multi-Step Checkout & Payment Controller
 */

let selectedShippingMethod = 'standard';
let selectedPaymentMethod = 'card';

document.addEventListener('DOMContentLoaded', () => {
  initCheckoutPage();
});

function initCheckoutPage() {
  const summaryBox = document.getElementById('checkout-order-summary-box');
  if (!summaryBox) return;

  const { items, subtotal, discount, shipping, total } = getCartCalculations();

  if (items.length === 0) {
    window.location.href = '../cart/cart.html';
    return;
  }

  renderCheckoutSummary();
  initPaymentOptionToggles();
}

function renderCheckoutSummary() {
  const summaryBox = document.getElementById('checkout-order-summary-box');
  if (!summaryBox) return;

  const { items, subtotal, discount, total } = getCartCalculations();
  const shippingCost = selectedShippingMethod === 'express' ? 399 : (subtotal >= 5000 ? 0 : 199);
  const finalTotal = Math.max(0, subtotal - discount + shippingCost);

  summaryBox.innerHTML = `
    <h3 style="font-family:var(--font-heading); font-size:1.4rem; margin-bottom:20px;">IN YOUR BAG (${items.length})</h3>

    <div class="checkout-items-list" style="margin-bottom:24px; display:flex; flex-direction:column; gap:16px;">
      ${items.map(item => `
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div style="display:flex; gap:12px; align-items:center;">
            <img src="${item.product.image}" style="width:48px; height:48px; object-fit:cover; border-radius:2px;">
            <div>
              <strong style="font-size:0.88rem; display:block;">${item.product.name}</strong>
              <span style="font-size:0.75rem; color:var(--color-secondary);">${item.color} • ${item.size} • Qty ${item.quantity}</span>
            </div>
          </div>
          <strong style="font-size:0.9rem;">₹${item.lineTotal.toLocaleString('en-IN')}</strong>
        </div>
      `).join('')}
    </div>

    <div style="border-top:1px solid var(--border-color); padding-top:16px; display:flex; flex-direction:column; gap:8px; font-size:0.9rem;">
      <div style="display:flex; justify-content:space-between;">
        <span>Subtotal</span>
        <span>₹${subtotal.toLocaleString('en-IN')}</span>
      </div>

      ${discount > 0 ? `
        <div style="display:flex; justify-content:space-between; color:var(--color-accent);">
          <span>Discount</span>
          <span>−₹${discount.toLocaleString('en-IN')}</span>
        </div>
      ` : ''}

      <div style="display:flex; justify-content:space-between;">
        <span>Shipping</span>
        <span>${shippingCost === 0 ? 'FREE' : `₹${shippingCost}`}</span>
      </div>

      <div style="display:flex; justify-content:space-between; margin-top:12px; padding-top:12px; border-top:1px solid var(--border-color); font-size:1.2rem; font-weight:800;">
        <span>Total</span>
        <span>₹${finalTotal.toLocaleString('en-IN')}</span>
      </div>
    </div>
  `;
}

function initPaymentOptionToggles() {
  document.querySelectorAll('input[name="payment_method"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      selectedPaymentMethod = e.target.value;
      document.querySelectorAll('.payment-fields-box').forEach(box => box.style.display = 'none');
      const targetBox = document.getElementById(`pay-box-${selectedPaymentMethod}`);
      if (targetBox) targetBox.style.display = 'block';
    });
  });

  document.querySelectorAll('input[name="shipping_method"]').forEach(radio => {
    radio.addEventListener('change', (e) => {
      selectedShippingMethod = e.target.value;
      renderCheckoutSummary();
    });
  });
}

function processCheckoutSubmission(e) {
  e.preventDefault();

  const name = document.getElementById('chk-name').value.trim();
  const email = document.getElementById('chk-email').value.trim();
  const phone = document.getElementById('chk-phone').value.trim();
  const address = document.getElementById('chk-address').value.trim();
  const city = document.getElementById('chk-city').value.trim();
  const pincode = document.getElementById('chk-pincode').value.trim();

  if (!name || !email || !address || !pincode) {
    alert("Please fill in all required shipping address fields.");
    return;
  }

  const { items, subtotal, discount, total } = getCartCalculations();
  const shippingCost = selectedShippingMethod === 'express' ? 399 : (subtotal >= 5000 ? 0 : 199);
  const finalTotal = Math.max(0, subtotal - discount + shippingCost);

  const orderId = `NR-2026-${Math.floor(10000 + Math.random() * 90000)}`;

  const order = {
    id: orderId,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    customerName: name,
    email: email,
    shippingAddress: `${address}, ${city} - ${pincode}`,
    items: items,
    subtotal: subtotal,
    shippingCost: shippingCost,
    discount: discount,
    total: finalTotal,
    paymentMethod: selectedPaymentMethod.toUpperCase(),
    status: "Processing",
    estimatedDelivery: "August 14–17, 2026"
  };

  saveOrder(order);
  clearCart();

  window.location.href = `confirmation.html?id=${orderId}`;
}
