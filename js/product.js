// 🔥 POPÜLER ÜRÜNLER (Çok Satanlar)
const popularProducts = [
    {
        id: 101,
        name: 'ProFit Antibakteriyel Atlet',
        description: '💧 Teri anında buharlaştıran teknoloji! Hijyen garantili, kokuya karşı koruma. UA fiyatının %40 altında!',
        price: 449,
        oldPrice: 749,
        category: 'products',
        image: '🔥 Antibakteriyel Atlet',
        badge: 'EN ÇOK SATAN'
    },
    {
        id: 102,
        name: 'Flex Dry-Fit T-Shirt',
        description: '⚡ 3 saniyede kuruma! Spor salonundan sokağa, 24 saat konfor. 4 yönlü stretch kumaş.',
        price: 399,
        oldPrice: 599,
        category: 'products',
        image: '💨 Dry-Fit T-Shirt',
        badge: 'HAFTANIN ÜRÜNÜ'
    },
    {
        id: 103,
        name: 'Power Compression Tayt',
        description: '🎯 Squat-Proof garantili! Yüksek bel desteği, şekillendirici etki. Kadınların favorisi!',
        price: 699,
        oldPrice: 999,
        category: 'products',
        image: '🌟 Compression Tayt',
        badge: 'YENİ'
    },
    {
        id: 104,
        name: 'Ultra Run Koşu Ayakkabısı',
        description: '👟 Amortisan teknolojisi ile 5K\'dan maratona. UA benzeri model %35 daha uygun!',
        price: 1299,
        oldPrice: 1799,
        category: 'products',
        image: '👟 Koşu Ayakkabısı'
    },
    {
        id: 105,
        name: 'Thermo Termal Eşofman',
        description: '🔥 Vücut ısısını %30 artıran özel kumaş. Kış antrenmanları için vazgeçilmez!',
        price: 899,
        oldPrice: 1299,
        category: 'products',
        image: '❄️ Termal Eşofman'
    },
    {
        id: 106,
        name: 'Smart Fitness Saati',
        description: '❤️ Kalp atışı, GPS, uyku takibi. Akıllı teknoloji, erişilebilir fiyat!',
        price: 1599,
        oldPrice: 2299,
        category: 'products',
        image: '⌚ Fitness Saati'
    }
];

// 👕 ERKEK KATEGORİSİ (9 Ürün)
const erkekProducts = [
    {
        id: 201,
        name: 'Force Dry-Fit Atlet',
        description: '🏋️‍♂️ Ağır antrenmanlara dayanıklı, teri emen özel bileşen. 1000+ kullanıcı onaylı!',
        price: 449,
        oldPrice: 699,
        category: 'erkek',
        image: '💪 Erkek Atlet'
    },
    {
        id: 202,
        name: 'Pro Training T-Shirt',
        description: '✨ Esneyen kumaşla tam hareket özgürlüğü. CrossFit, fitness, günlük kullanım.',
        price: 549,
        oldPrice: 799,
        category: 'erkek',
        image: '🎯 Training T-Shirt'
    },
    {
        id: 203,
        name: 'Run Performance Şort',
        description: '🏃‍♂️ İç fileli, teri emen kumaş. Koşuya çık, terleme hissetme!',
        price: 499,
        oldPrice: 749,
        category: 'erkek',
        image: '🩳 Koşu Şortu'
    },
    {
        id: 204,
        name: 'Elite Compression T-Shirt',
        description: '🔄 Kas destekli kompresyon. Recovery süresini %25 kısaltır!',
        price: 699,
        oldPrice: 999,
        category: 'erkek',
        image: '⚡ Compression T-Shirt'
    },
    {
        id: 205,
        name: 'Urban Jogger Eşofman',
        description: '🏙️ Gym ve sokak stili bir arada. Modern slim fit kesim.',
        price: 799,
        oldPrice: 1199,
        category: 'erkek',
        image: '🌆 Urban Eşofman'
    },
    {
        id: 206,
        name: 'Tactical Cargo Şort',
        description: '👖 Bol cepli, fonksiyonel tasarım. Outdoor ve fitness için ideal.',
        price: 599,
        oldPrice: 849,
        category: 'erkek',
        image: '🔧 Cargo Şort'
    },
    {
        id: 207,
        name: 'HeatGear Uzun Kollu T-Shirt',
        description: '❄️ Soğuk hissettiren teknoloji. Yaz ayları için serinlik garantisi!',
        price: 499,
        oldPrice: 749,
        category: 'erkek',
        image: '❄️ Uzun Kollu'
    },
    {
        id: 208,
        name: 'Storm Su Geçirmez Ceket',
        description: '🌧️ Yağmur ve rüzgara karşı %100 koruma. Outdoor aktivitelerde güvende hisset!',
        price: 1599,
        oldPrice: 2299,
        category: 'erkek',
        image: '🧥 Su Geçirmez Ceket'
    },
    {
        id: 209,
        name: 'Core Training Pantolon',
        description: '🔥 Elastik bel bandı, esneyen kumaş. Deep squat\'a kadar esner!',
        price: 749,
        oldPrice: 1099,
        category: 'erkek',
        image: '🏋️ Training Pantolon'
    }
];

// 💃 KADIN KATEGORİSİ (9 Ürün)
const kadinProducts = [
    {
        id: 301,
        name: 'Sculpt High-Waist Tayt',
        description: '🍑 Squat-Proof, sıkılaştırıcı etki. Yüksek bel, %100 opaklik garantisi!',
        price: 799,
        oldPrice: 1199,
        category: 'kadin',
        image: '✨ Sculpt Tayt'
    },
    {
        id: 302,
        name: 'Seamless Sports Bra',
        description: '💖 Dikişsiz konfor, yüksek destek. Koşu, yoga, HIIT için mükemmel!',
        price: 549,
        oldPrice: 799,
        category: 'kadin',
        image: '🎽 Sports Bra'
    },
    {
        id: 303,
        name: 'Flow Yoga T-Shirt',
        description: '🧘‍♀️ Nefes alan, hafif kumaş. Yoga ve pilates seanslarında özgür hisset!',
        price: 449,
        oldPrice: 649,
        category: 'kadin',
        image: '🌊 Yoga T-Shirt'
    },
    {
        id: 304,
        name: 'Energy Koşu Şortu',
        description: '🏃‍♀️ İç taytıyla birlikte, hafif ve serin. Koşuda rahatlık hissi!',
        price: 599,
        oldPrice: 899,
        category: 'kadin',
        image: '🩱 Koşu Şortu'
    },
    {
        id: 305,
        name: 'Flex Ribbed Crop Top',
        description: '🎀 Ribana yapı, trendy crop model. Gym & street style kombinleri!',
        price: 399,
        oldPrice: 599,
        category: 'kadin',
        image: '🌟 Crop Top'
    },
    {
        id: 306,
        name: 'Shape Cross-Over Tayt',
        description: '💫 Cross-over bel bandı, şekillendirici. Instagram\'da fenomen tayt!',
        price: 899,
        oldPrice: 1299,
        category: 'kadin',
        image: '🔥 Cross-Over Tayt'
    },
    {
        id: 307,
        name: 'Warm Fleece Eşofman',
        description: '🧸 Yumuşak polar iç, soğuk günlerde sıcak tutar. Kışın vazgeçilmezi!',
        price: 999,
        oldPrice: 1399,
        category: 'kadin',
        image: '❄️ Fleece Eşofman'
    },
    {
        id: 308,
        name: 'Support Long Sleeve Top',
        description: '🤗 Uzun kollu, destekli yapı. Kış antrenmanlarında sıcak ve destekli!',
        price: 649,
        oldPrice: 949,
        category: 'kadin',
        image: '🧥 Uzun Kollu Top'
    },
    {
        id: 309,
        name: 'Essential Racerback Atlet',
        description: '✨ Racerback kesim, özgür hareket. Sıcak günlerde serinlik!',
        price: 379,
        oldPrice: 549,
        category: 'kadin',
        image: '🌞 Racerback Atlet'
    }
];

// 🎒 AKSESUAR KATEGORİSİ (6 Ürün)
const aksesuarProducts = [
    {
        id: 401,
        name: 'Hydro Shake 750ml Suluk',
        description: '💧 Antibakteriyel, sızdırmaz kapak. 24 saat soğuk tutma garantisi!',
        price: 199,
        oldPrice: 299,
        category: 'aksesuar',
        image: '🚰 Suluk'
    },
    {
        id: 402,
        name: 'Pro Gym Çantası',
        description: '🎒 Ayakkabı bölmesi, ıslak kıyafet haznesi. 45L hacim, sırt destekli!',
        price: 699,
        oldPrice: 999,
        category: 'aksesuar',
        image: '🎒 Gym Çantası'
    },
    {
        id: 403,
        name: 'Performance No-Show Çorap (3\'lü Paket)',
        description: '🧦 Teri emen, kokuya karşı özel işlem. 3 çift bir arada!',
        price: 149,
        oldPrice: 229,
        category: 'aksesuar',
        image: '🧦 Çorap Paketi'
    },
    {
        id: 404,
        name: 'SmartPhone Koşu Kılıfı',
        description: '📱 7" ekrana kadar uyumlu, kol bandı ile telefonu yanında taşı!',
        price: 179,
        oldPrice: 269,
        category: 'aksesuar',
        image: '📱 Koşu Kılıfı'
    },
    {
        id: 405,
        name: 'Adjustable Weightlifting Kemeri',
        description: '💪 6" genişlik, lumbal destek. Powerlifting & CrossFit için zorunlu!',
        price: 549,
        oldPrice: 799,
        category: 'aksesuar',
        image: '💪 Fitness Kemeri'
    },
    {
        id: 406,
        name: 'Breath Cap Koşu Şapkası',
        description: '🧢 Nefes alan file, ayarlanabilir kayış. Güneşe karşı koruma!',
        price: 299,
        oldPrice: 449,
        category: 'aksesuar',
        image: '🧢 Koşu Şapkası'
    }
];

// 🆕 YENİ GELENLER (12 Ürün)
const yeniProducts = [
    {
        id: 501,
        name: 'Reflective Night Koşu Seti',
        description: '🌙 Yansıtıcı detaylar ile gece koşularında güvenlik. 360° görünürlük!',
        price: 1299,
        oldPrice: 1699,
        category: 'yeni',
        image: '🌟 Night Seti'
    },
    {
        id: 502,
        name: 'Eco-Friendly Tayt',
        description: '🌱 %100 geri dönüştürülmüş malzeme. Sürdürülebilir moda, bilinçli tercih!',
        price: 749,
        oldPrice: 999,
        category: 'yeni',
        image: '🍃 Eco Tayt'
    },
    {
        id: 503,
        name: 'Smart Grip Eldiven',
        description: '🤳 Dokunmatik ekran uyumlu, kaydırmaz avuç içi. Telefon kullanmaya devam!',
        price: 349,
        oldPrice: 499,
        category: 'yeni',
        image: '🧤 Grip Eldiven'
    },
    {
        id: 504,
        name: 'Ultra Light Koşu Ayakkabısı',
        description: '🪶 Sadece 180gr! Hafiflik ve hız bir arada, PR kırman için!',
        price: 1599,
        oldPrice: 2199,
        category: 'yeni',
        image: '⚡ Ultra Light Koşu'
    },
    {
        id: 505,
        name: 'Thermal Base Layer Set',
        description: '🔥 Vücut ısısını koruyan alt katman. Kış sporlarında performans artırıcı!',
        price: 999,
        oldPrice: 1399,
        category: 'yeni',
        image: '❄️ Thermal Set'
    },
    {
        id: 506,
        name: 'Sculpt Tik Tok Tayt',
        description: '📸 V şeklinde bel bandı, Instagram & Tik Tok fenomeni. Viral ol!',
        price: 899,
        oldPrice: 1199,
        category: 'yeni',
        image: '🔥 Tik Tok Tayt'
    },
    {
        id: 507,
        name: 'Magnet Door Koşu Bandı',
        description: '🧲 Kir tutmayan, yumuşak dokunuş. 4 yönlü esneklik ile özgürlük!',
        price: 699,
        oldPrice: 999,
        category: 'yeni',
        image: '🌀 Koşu Bandı'
    },
    {
        id: 508,
        name: 'Protein Tozu Şişesi',
        description: '🥤 Karıştırıcı top ile içme kolaylığı. BPA-free, 700ml hacim!',
        price: 249,
        oldPrice: 349,
        category: 'yeni',
        image: '🥤 Protein Şişesi'
    },
    {
        id: 509,
        name: 'Scent-Free Spor Çantası',
        description: '🌸 Kokuya karşı özel kaplama. Spor sonrası koku sorunu yok!',
        price: 799,
        oldPrice: 1099,
        category: 'yeni',
        image: '🍃 Scent-Free Çanta'
    },
    {
        id: 510,
        name: 'Recovery Foam Roller',
        description: '🦵 Yoğun yoğunluklu masaj silindiri. Recovery süresini %30 azaltır!',
        price: 399,
        oldPrice: 549,
        category: 'yeni',
        image: '💆 Foam Roller'
    },
    {
        id: 511,
        name: 'Aqua Sport Kadın Bikini',
        description: '🏊‍♀️ Klor dayanıklı, hızlı kuruma. Yüzme antrenmanları için ideal!',
        price: 599,
        oldPrice: 849,
        category: 'yeni',
        image: '👙 Aqua Bikini'
    },
    {
        id: 512,
        name: 'Pro Boxing Eldiveni',
        description: '🥊 Deri dış, şok emici iç ped. Boks ve MMA için profesyonel kalite!',
        price: 899,
        oldPrice: 1299,
        category: 'yeni',
        image: '🥊 Boxing Eldiveni'
    }
];

// 💸 İNDİRİM ÜRÜNLERİ (6 Ürün)
const indirimProducts = [
    {
        id: 601,
        name: 'Clearance Basic T-Shirt',
        description: '📦 STOK TEMİZLİĞİ! Son 50 adet. Renk: Siyah/Beyaz. Kaçırma!',
        price: 199,
        oldPrice: 449,
        category: 'indirim',
        image: '💥 Clearance T-Shirt'
    },
    {
        id: 602,
        name: 'Outlet Koşu Şortu',
        description: '🏷️ SEZON SONU! Bedenler: M-L-XL. Stoklar tükenmeden!',
        price: 299,
        oldPrice: 649,
        category: 'indirim',
        image: '🔥 Outlet Şort'
    },
    {
        id: 603,
        name: 'Last Chance Gym Çantası',
        description: '⚠️ ÜRETİMDEN KALAN SON PARTİ! 40L kapasite. Son şans!',
        price: 399,
        oldPrice: 899,
        category: 'indirim',
        image: '❗ Last Chance Çanta'
    },
    {
        id: 604,
        name: 'Flash Sale Çorap Paketi',
        description: '⚡ BUGÜN SON! 5\'li paket. Antibakteriyel teknoloji!',
        price: 99,
        oldPrice: 229,
        category: 'indirim',
        image: '⚡ Flash Sale Çorap'
    },
    {
        id: 605,
        name: 'B-Stock Koşu Ayakkabısı',
        description: '📦 Kutusu hasarlı, ürün SIFIR! 50% indirim. Kaçırılmaz fırsat!',
        price: 799,
        oldPrice: 1599,
        category: 'indirim',
        image: '📦 B-Stock Ayakkabı'
    },
    {
        id: 606,
        name: 'Final Sale Sweatshirt',
        description: '🎯 İADE YOK! Seri sonu model. En son fiyat düşüşü!',
        price: 349,
        oldPrice: 799,
        category: 'indirim',
        image: '🎯 Final Sale Sweatshirt'
    }
];

// TÜM ÜRÜNLERİ BİRLEŞTİR
const allProducts = [...popularProducts, ...erkekProducts, ...kadinProducts, ...aksesuarProducts, ...yeniProducts, ...indirimProducts];