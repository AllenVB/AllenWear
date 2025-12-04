// ========== SEPET SİSTEMİ - GLOBAL DEĞİŞKENLER ==========
let cart = JSON.parse(localStorage.getItem('allenwear_cart')) || [];

// ========== SEPETİ KAYDET (LocalStorage) ==========
function saveCart() {
    localStorage.setItem('allenwear_cart', JSON.stringify(cart));
    // Konsola kaydetme logu
    console.log('✅ Sepet LocalStorage\'a kaydedildi:', cart);
}

// ========== SEPETE ÜRÜN EKLE ==========
function addToCart(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) {
        console.error('❌ Ürün bulunamadı:', productId);
        return;
    }
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
        console.log('➕ Ürün adeti arttırıldı:', product.name);
    } else {
        cart.push({ ...product, quantity: 1 });
        console.log('🛒 Yeni ürün sepete eklendi:', product.name);
    }
    
    updateCartUI();
    saveCart();
    
    // Butonları değiştir
    const addBtn = document.getElementById(`btn-${productId}`);
    const qtyControls = document.getElementById(`qty-${productId}`);
    const qtyDisplay = document.getElementById(`qty-display-${productId}`);
    
    if (addBtn) addBtn.style.display = 'none';
    if (qtyControls) qtyControls.classList.add('active');
    if (qtyDisplay) {
        qtyDisplay.textContent = existingItem ? existingItem.quantity : 1;
    }
    
    // Başarılı ekleme bildirimi
    showNotification(`✅ ${product.name} sepete eklendi!`, 'success');
    // Sepet modalını aç
    toggleCart();
}

// ========== ÜRÜN ADEDİNİ GÜNCELLE ==========
function updateQuantity(productId, change) {
    const item = cart.find(p => p.id === productId);
    if (!item) {
        console.error('❌ Sepette ürün bulunamadı:', productId);
        return;
    }
    
    item.quantity += change;
    console.log(`🔄 ${item.name} adeti: ${item.quantity}`);
    
    if (item.quantity <= 0) {
        cart = cart.filter(p => p.id !== productId);
        console.log('❌ Ürün sepetten çıkarıldı:', item.name);
        
        // Butonları geri getir
        const addBtn = document.getElementById(`btn-${productId}`);
        const qtyControls = document.getElementById(`qty-${productId}`);
        if (addBtn) addBtn.style.display = 'block';
        if (qtyControls) qtyControls.classList.remove('active');
    } else {
        const qtyDisplay = document.getElementById(`qty-display-${productId}`);
        if (qtyDisplay) qtyDisplay.textContent = item.quantity;
    }
    
    updateCartUI();
    saveCart();
}

// ========== SEPET ARAYÜZÜNÜ GÜNCELLE ==========
function updateCartUI() {
    const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Sepet sayacını güncelle
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) {
        cartCountEl.textContent = cartCount;
        // Animasyon
        cartCountEl.style.transform = 'scale(1.3)';
        setTimeout(() => cartCountEl.style.transform = 'scale(1)', 200);
    }
    
    // Toplam fiyatı güncelle
    const cartTotalEl = document.getElementById('cartTotal');
    if (cartTotalEl) cartTotalEl.textContent = cartTotal.toLocaleString() + ' TL';
    
    // Sepet içeriğini güncelle
    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return;
    
    cartItemsContainer.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--gray);">
                <p style="font-size: 1.5rem; margin-bottom: 1rem;">🛒 Sepetiniz boş</p>
                <p>Alışverişe devam etmek için <a href="index.html" style="color: var(--blue);">tıklayın</a></p>
            </div>
        `;
        return;
    }
    
    cart.forEach(item => {
        cartItemsContainer.innerHTML += `
            <div class="cart-item" style="border: 1px solid rgba(255,255,255,0.1); border-radius: 10px; padding: 1rem; margin-bottom: 1rem;">
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div style="background: var(--navy); width: 50px; height: 50px; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 1.5rem;">
                        ${item.image.split(' ')[0]}
                    </div>
                    <div style="flex: 1;">
                        <strong style="font-size: 0.9rem;">${item.name}</strong>
                        <p style="color: var(--gray); margin: 0;">${item.price} TL x ${item.quantity} = ${(item.price * item.quantity).toLocaleString()} TL</p>
                    </div>
                </div>
                <div style="display: flex; gap: 0.5rem; margin-top: 0.5rem;">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                    <button class="qty-btn" onclick="removeFromCart(${item.id})" style="background: var(--red);">🗑️</button>
                </div>
            </div>
        `;
    });
    
    // Sepet boşalt butonu
    cartItemsContainer.innerHTML += `
        <button onclick="clearCart()" style="width: 100%; padding: 0.8rem; background: var(--red); border: none; border-radius: 8px; color: white; font-weight: bold; cursor: pointer; margin-top: 1rem;">
            🗑️ SEPETİ BOŞALT
        </button>
    `;
}

// ========== SEPETTEN ÜRÜN ÇIKAR ==========
function removeFromCart(productId) {
    const item = cart.find(p => p.id === productId);
    if (!item) return;
    
    cart = cart.filter(p => p.id !== productId);
    console.log('❌ Ürün tamamen sepetten çıkarıldı:', item.name);
    
    // Butonları sıfırla
    const addBtn = document.getElementById(`btn-${productId}`);
    const qtyControls = document.getElementById(`qty-${productId}`);
    if (addBtn) addBtn.style.display = 'block';
    if (qtyControls) qtyControls.classList.remove('active');
    
    updateCartUI();
    saveCart();
}

// ========== SEPETİ TEMİZLE ==========
function clearCart() {
    if (confirm('Sepetinizi tamamen boşaltmak istiyor musunuz?')) {
        cart = [];
        console.log('🗑️ Sepet tamamen boşaltıldı');
        
        // Tüm butonları sıfırla
        document.querySelectorAll('.quantity-controls').forEach(el => el.classList.remove('active'));
        document.querySelectorAll('.add-to-cart-btn').forEach(el => el.style.display = 'block');
        
        updateCartUI();
        saveCart();
    }
}

// ========== SEPET MODALINI AÇ/KAPAT ==========
function toggleCart() {
    const modal = document.getElementById('cartModal');
    if (!modal) return;
    
    modal.classList.toggle('active');
    console.log('🛍️ Sepet modal durumu değişti');
}

// ========== ÖDEME SAYFASINA YÖNLENDİR ==========
function goToCheckout() {
    if (cart.length === 0) {
        showNotification('Sepetiniz boş!', 'error');
        return;
    }
    
    showNotification('Ödeme sayfasına yönlendiriliyor...', 'success');
    setTimeout(() => {
        alert('Demo: Ödeme sistemi backend gerektirir!');
    }, 1000);
}

// ========== ARAMA FONKSİYONU (Tüm Sayfalar) ==========
function searchProducts(event) {
    if (event.key !== 'Enter') return;
    
    const searchTerm = event.target.value.toLowerCase().trim();
    if (!searchTerm) return;
    
    const allSearchProducts = [...popularProducts, ...erkekProducts, ...kadinProducts, ...aksesuarProducts, ...yeniProducts, ...indirimProducts];
    
    const foundProduct = allSearchProducts.find(p => p.name.toLowerCase().includes(searchTerm));
    
    if (foundProduct) {
        const categoryToFile = {
            'products': 'index.html',
            'erkek': 'erkek.html',
            'kadin': 'kadin.html',
            'aksesuar': 'aksesuar.html',
            'yeni': 'yeni.html',
            'indirim': 'indirim.html'
        };
        
        const targetFile = categoryToFile[foundProduct.category] || 'index.html';
        const targetSection = foundProduct.category === 'products' ? '#products' : `#${foundProduct.category}`;
        
        window.location.href = targetFile + targetSection;
    } else {
        showNotification('Ürün bulunamadı! Başka bir kelime deneyin.', 'error');
    }
    
    event.target.value = '';
}

// ========== BİLDİRİM SİSTEMİ (Başarılı/Hata) ==========
function showNotification(message, type = 'info') {
    // Eğer aynı bildirim zor varsa, önceki sil
    const existingNotif = document.querySelector('.notification');
    if (existingNotif) existingNotif.remove();
    
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? 'var(--green)' : type === 'error' ? 'var(--red)' : 'var(--blue)'};
        color: white;
        border-radius: 10px;
        z-index: 2000;
        font-weight: bold;
        transform: translateX(400px);
        transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        box-shadow: var(--shadow);
        max-width: 300px;
        text-align: center;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 4000);
    
    console.log(`📢 Bildirim: ${message} (${type})`);
}