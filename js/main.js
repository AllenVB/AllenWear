// ========== SAYFA YÜKLENDİĞİNDE ÇALIŞACAK FONKSİYONLAR ==========
document.addEventListener('DOMContentLoaded', function () {
    // Tüm kategorileri yükle
    loadAllCategories();

    // Sepet arayüzünü güncelle (sayfa yenilendiğinde)
    updateCartUI();

    // URL hash kontrolü (sayfaya direkt linkle gelme)
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        scrollToSection(hash);
    }
});

// ========== YUMUŞAK KAYDIRMA ==========
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ========== MOBİL MENÜ TOGGLE ==========
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// ========== SCROLL İLE HERO PARALLAX ==========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ========== TÜM KATEGORİLERİ YÜKLEYİCİ (ANA SAYFA) ==========
function loadAllCategories() {
    // Ana sayfa popüler ürünlerini yükle
    const popularGrid = document.getElementById('popularGrid');
    if (popularGrid) {
        loadProductsByCategory(popularProducts, 'popularGrid');
    }
}

// ========== KATEGOR'İYE GÖRE ÜRÜN YÜKLEYİCİ ==========
function loadProductsByCategory(products, gridElementId) {
    const gridElement = document.getElementById(gridElementId);
    if (!gridElement) {
        console.warn(`⚠️ Grid elementi bulunamadı: ${gridElementId}`);
        return;
    }

    gridElement.innerHTML = '';

    products.forEach(product => {
        const card = createProductCard(product);
        gridElement.appendChild(card);
    });

    console.log(`✅ ${products.length} ürün yüklendi: ${gridElementId}`);
}

// ========== ÜRÜN KARTI OLUŞTURUCU ==========
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <div class="product-image">
            <span class="product-image-emoji">${product.image}</span>
            ${product.badge ? `<span class="badge">${product.badge}</span>` : ''}
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-price">
                <span class="current-price">${product.price} TL</span>
                ${product.oldPrice ? `<span class="old-price">${product.oldPrice} TL</span>` : ''}
            </div>
            <div class="product-actions">
                <button class="add-to-cart-btn" id="btn-${product.id}" onclick="addToCart(${product.id})">SEPETE EKLE</button>
                <div class="quantity-controls" id="qty-${product.id}">
                    <button class="qty-btn" onclick="updateQuantity(${product.id}, -1)">−</button>
                    <span class="qty-display" id="qty-display-${product.id}">1</span>
                    <button class="qty-btn" onclick="updateQuantity(${product.id}, 1)">+</button>
                </div>
            </div>
        </div>
    `;
    return card;
}

// ========== ÜRÜN ARAMA (SEARCH) ==========
function searchProducts(event) {
    if (event.key !== 'Enter') return;

    const searchBox = document.getElementById('searchBox');
    const query = searchBox.value.toLowerCase().trim();

    if (!query) {
        alert('Lütfen bir ürün adı girin');
        return;
    }

    // Aranan ürünleri bul
    const results = allProducts.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
    );

    if (results.length === 0) {
        alert(`"${query}" araması için sonuç bulunamadı`);
        return;
    }

    // Arama sonuçlarını modal olarak göster
    showSearchResults(results);
}

// ========== ARAMA SONUÇLARINI MODAL'DA GÖSTER ==========
function showSearchResults(products) {
    const modal = document.createElement('div');
    modal.className = 'search-modal';
    modal.innerHTML = `
        <div class="search-modal-content">
            <button class="close-modal" onclick="this.parentElement.parentElement.remove()">✕</button>
            <h2>Arama Sonuçları (${products.length} ürün)</h2>
            <div class="search-results-grid" id="searchResultsGrid"></div>
        </div>
    `;
    document.body.appendChild(modal);

    // Sonuçları grid'e ekle
    const grid = modal.querySelector('#searchResultsGrid');
    products.forEach(product => {
        grid.appendChild(createProductCard(product));
    });

    // Modal animasyonu
    setTimeout(() => modal.classList.add('active'), 10);
}

// ========== BİLDİRİM GÖSTER ==========
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 10);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}