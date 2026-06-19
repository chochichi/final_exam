// SoleVibe Shoe Mall - Shared Frontend Logic

let cart = [];

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadCart();
  setupNavActive();
  setupCartDrawer();
  setupMobileMenu();
  setupThemeToggle();
  setupGlobalCartEvents();
});

// --- THEME MANAGEMENT ---
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcons(savedTheme);
}

function setupThemeToggle() {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;
  toggleBtn.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcons(newTheme);
  });
}

function updateThemeIcons(theme) {
  const toggleBtn = document.getElementById("theme-toggle-btn");
  if (!toggleBtn) return;
  if (theme === "light") {
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
      </svg>`; // Moon icon
  } else {
    toggleBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="4"></circle>
        <path d="M12 2v2"></path>
        <path d="M12 20v2"></path>
        <path d="m4.93 4.93 1.41 1.41"></path>
        <path d="m17.66 17.66 1.41 1.41"></path>
        <path d="M2 12h2"></path>
        <path d="M20 12h2"></path>
        <path d="m6.34 17.66-1.41 1.41"></path>
        <path d="m19.07 4.93-1.41 1.41"></path>
      </svg>`; // Sun icon
  }
}

// --- NAV NAVIGATION ---
function setupNavActive() {
  const currentPath = window.location.pathname;
  const page = currentPath.substring(currentPath.lastIndexOf("/") + 1) || "index.html";
  const navLinks = document.querySelectorAll(".nav-links a");
  
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === page || (page === "index.html" && href === "./") || (page === "" && href === "./")) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// --- MOBILE MENU ---
function setupMobileMenu() {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (!menuToggle || !navLinks) return;

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove("open");
    }
  });
}

// --- CART LOGIC ---
function loadCart() {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    try {
      cart = JSON.parse(savedCart);
    } catch (e) {
      cart = [];
    }
  }
  updateCartUI();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartUI();
}

function updateCartUI() {
  const countBadge = document.querySelector(".cart-count");
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceEl = document.getElementById("cart-total-price");
  
  // Update badge count
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (countBadge) {
    if (totalCount > 0) {
      countBadge.textContent = totalCount;
      countBadge.style.display = "flex";
    } else {
      countBadge.style.display = "none";
    }
  }

  // Update Cart Drawer Items List
  if (!cartItemsContainer) return;
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="empty-cart-message">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--text-muted); margin-bottom: 1rem;">
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>
        <p>您的購物袋是空的</p>
        <a href="casual.html" class="btn btn-secondary" style="margin-top: 1rem; font-size: 0.875rem;">去逛逛商品</a>
      </div>`;
    if (totalPriceEl) totalPriceEl.textContent = "NT$ 0";
    return;
  }

  let cartHTML = "";
  let subtotal = 0;

  cart.forEach((item, index) => {
    subtotal += item.price * item.quantity;
    cartHTML += `
      <div class="cart-item">
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-title-row">
            <h4 class="cart-item-title">${item.zhName}</h4>
            <button class="cart-item-remove" onclick="removeCartItem(${index})">✕</button>
          </div>
          <p class="cart-item-variant">規格: ${item.color} / ${item.size}</p>
          <div class="cart-item-price-row">
            <span class="cart-item-price">NT$ ${item.price.toLocaleString()}</span>
            <div class="quantity-controller">
              <button onclick="changeCartItemQty(${index}, -1)">-</button>
              <span>${item.quantity}</span>
              <button onclick="changeCartItemQty(${index}, 1)">+</button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  cartItemsContainer.innerHTML = cartHTML;
  if (totalPriceEl) totalPriceEl.textContent = `NT$ ${subtotal.toLocaleString()}`;
}

window.changeCartItemQty = function(index, delta) {
  if (index < 0 || index >= cart.length) return;
  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
};

window.removeCartItem = function(index) {
  if (index < 0 || index >= cart.length) return;
  cart.splice(index, 1);
  saveCart();
};

function setupCartDrawer() {
  const cartBtn = document.getElementById("cart-btn");
  const cartCloseBtn = document.getElementById("cart-close-btn");
  const overlay = document.getElementById("cart-drawer-overlay");
  
  if (!cartBtn || !overlay) return;

  cartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.classList.add("active");
  });

  if (cartCloseBtn) {
    cartCloseBtn.addEventListener("click", () => {
      overlay.classList.remove("active");
    });
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      overlay.classList.remove("active");
    }
  });
}

function openCartDrawer() {
  const overlay = document.getElementById("cart-drawer-overlay");
  if (overlay) {
    overlay.classList.add("active");
  }
}

// Add item to cart globally
window.addToCart = function(productId, size, color) {
  if (typeof shoeProducts === "undefined") return;
  const product = shoeProducts.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => 
    item.id === productId && item.size === size && item.color === color
  );

  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      zhName: product.zhName,
      price: product.price,
      image: product.image,
      size: size,
      color: color,
      quantity: 1
    });
  }

  saveCart();
  showGlobalNotification("商品已成功加入購物車！");
  openCartDrawer();
};

// --- GLOBAL NOTIFICATION ---
function showGlobalNotification(text) {
  const modal = document.getElementById("global-modal-overlay");
  const textEl = document.getElementById("modal-text");
  if (!modal) return;
  if (textEl) textEl.textContent = text;
  modal.classList.add("active");
}

window.closeGlobalModal = function() {
  const modal = document.getElementById("global-modal-overlay");
  if (modal) {
    modal.classList.remove("active");
  }
};

// Listen for "add to cart" clicks on quick-shop elements
function setupGlobalCartEvents() {
  document.addEventListener("click", (e) => {
    const target = e.target.closest(".quick-add-cart-btn");
    if (target) {
      const id = target.getAttribute("data-id");
      // Choose default sizes/colors from data
      if (typeof shoeProducts !== "undefined") {
        const prod = shoeProducts.find(p => p.id === id);
        if (prod) {
          const defaultSize = prod.sizes[0];
          const defaultColor = prod.colors[0].name;
          window.addToCart(id, defaultSize, defaultColor);
        }
      }
    }
  });
}
