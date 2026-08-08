/**
 * NOIRÉ - LocalStorage State Manager (Cart, Wishlist, Orders, Recently Viewed)
 */

const STORAGE_KEYS = {
  CART: 'noire_cart_v1',
  WISHLIST: 'noire_wishlist_v1',
  RECENTLY_VIEWED: 'noire_recent_v1',
  COUPON: 'noire_coupon_v1',
  ORDERS: 'noire_orders_v1'
};

// CART
function getStoredCart() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.CART)) || [];
  } catch (e) {
    return [];
  }
}

function setStoredCart(cart) {
  localStorage.setItem(STORAGE_KEYS.CART, JSON.stringify(cart));
  updateNavBadgeCounts();
}

function addToCart(productId, selectedColor, selectedSize, qty = 1) {
  const cart = getStoredCart();
  const existingIdx = cart.findIndex(item => item.id === productId && item.color === selectedColor && item.size === selectedSize);

  if (existingIdx > -1) {
    cart[existingIdx].quantity += qty;
  } else {
    cart.push({ id: productId, color: selectedColor, size: selectedSize, quantity: qty });
  }

  setStoredCart(cart);
}

function updateCartQuantity(productId, color, size, newQty) {
  let cart = getStoredCart();
  if (newQty <= 0) {
    cart = cart.filter(item => !(item.id === productId && item.color === color && item.size === size));
  } else {
    const target = cart.find(item => item.id === productId && item.color === color && item.size === size);
    if (target) target.quantity = newQty;
  }
  setStoredCart(cart);
}

function clearCart() {
  localStorage.removeItem(STORAGE_KEYS.CART);
  localStorage.removeItem(STORAGE_KEYS.COUPON);
  updateNavBadgeCounts();
}

// WISHLIST
function getStoredWishlist() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.WISHLIST)) || [];
  } catch (e) {
    return [];
  }
}

function toggleWishlist(productId) {
  let wishlist = getStoredWishlist();
  const exists = wishlist.includes(productId);

  if (exists) {
    wishlist = wishlist.filter(id => id !== productId);
  } else {
    wishlist.push(productId);
  }

  localStorage.setItem(STORAGE_KEYS.WISHLIST, JSON.stringify(wishlist));
  updateNavBadgeCounts();
  return !exists;
}

// RECENTLY VIEWED
function addRecentlyViewed(productId) {
  let recent = JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED)) || [];
  recent = recent.filter(id => id !== productId);
  recent.unshift(productId);
  if (recent.length > 6) recent = recent.slice(0, 6);
  localStorage.setItem(STORAGE_KEYS.RECENTLY_VIEWED, JSON.stringify(recent));
}

function getRecentlyViewed() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.RECENTLY_VIEWED)) || [];
}

// ORDERS
function getStoredOrders() {
  return JSON.parse(localStorage.getItem(STORAGE_KEYS.ORDERS)) || [];
}

function saveOrder(order) {
  const orders = getStoredOrders();
  orders.unshift(order);
  localStorage.setItem(STORAGE_KEYS.ORDERS, JSON.stringify(orders));
}

// BADGE COUNTS
function updateNavBadgeCounts() {
  const cart = getStoredCart();
  const wishlist = getStoredWishlist();

  const totalCartQty = cart.reduce((sum, item) => sum + item.quantity, 0);

  document.querySelectorAll('.bag-count-badge').forEach(el => {
    el.textContent = totalCartQty;
  });

  document.querySelectorAll('.wishlist-count-badge').forEach(el => {
    el.textContent = wishlist.length;
  });
}
