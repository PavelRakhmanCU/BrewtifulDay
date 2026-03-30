const CART_STORAGE_KEY = 'brewtiful-day-cart';

export function loadCartFromStorage() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.map((entries) => new Map(entries));
  } catch {
    return [];
  }
}

export function saveCartToStorage(cartItems) {
  try {
    const serialized = cartItems.map((m) => [...m.entries()]);
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(serialized));
  } catch {
    /* ignore quota / private mode */
  }
}

export function clearCartStorage() {
  try {
    localStorage.removeItem(CART_STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
