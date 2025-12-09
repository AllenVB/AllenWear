// 🔥 POPÜLER ÜRÜNLER (Çok Satanlar)
const popularProducts = [
    {
        id: 101,
        name: 'ProFit Antibakteriyel Atlet',
        description: '💧 Teri anında buharlaştıran teknoloji! Hijyen garantili, kokuya karşı koruma. UA fiyatının %40 altında!',
        price: 449,
        oldPrice: 749,
        category: 'products',
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Erkek atlet
        badge: 'EN ÇOK SATAN'
    },
    {
        id: 102,
        name: 'Flex Dry-Fit T-Shirt',
        description: '⚡ 3 saniyede kuruma! Spor salonundan sokağa, 24 saat konfor. 4 yönlü stretch kumaş.',
        price: 399,
        oldPrice: 599,
        category: 'products',
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Beyaz T-shirt
        badge: 'HAFTANIN ÜRÜNÜ'
    },
    {
        id: 103,
        name: 'Power Compression Tayt',
        description: '🎯 Squat-Proof garantili! Yüksek bel desteği, şekillendirici etki. Kadınların favorisi!',
        price: 699,
        oldPrice: 999,
        category: 'products',
        image: 'https://images.unsplash.com/photo-1506629905607-0b3b5b1b8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kadın koşu/tayt
        badge: 'YENİ'
    },
    {
        id: 104,
        name: 'Ultra Run Koşu Ayakkabısı',
        description: '👟 Amortisan teknolojisi ile 5K\'dan maratona. UA benzeri model %35 daha uygun!',
        price: 1299,
        oldPrice: 1799,
        category: 'products',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kırmızı spor ayakkabı
    },
    {
        id: 105,
        name: 'Thermo Termal Eşofman',
        description: '🔥 Vücut ısısını %30 artıran özel kumaş. Kış antrenmanları için vazgeçilmez!',
        price: 899,
        oldPrice: 1299,
        category: 'products',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kadın kışlık spor giyim
    },
    {
        id: 106,
        name: 'Smart Fitness Saati',
        description: '❤️ Kalp atışı, GPS, uyku takibi. Akıllı teknoloji, erişilebilir fiyat!',
        price: 1599,
        oldPrice: 2299,
        category: 'products',
        image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Akıllı saat
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
        image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Erkek kolsuz
    },
    {
        id: 202,
        name: 'Pro Training T-Shirt',
        description: '✨ Esneyen kumaşla tam hareket özgürlüğü. CrossFit, fitness, günlük kullanım.',
        price: 549,
        oldPrice: 799,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Beyaz T-shirt
    },
    {
        id: 203,
        name: 'Run Performance Şort',
        description: '🏃‍♂️ İç fileli, teri emen kumaş. Koşuya çık, terleme hissetme!',
        price: 499,
        oldPrice: 749,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1591191564930-90eb1f55b0a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Erkek şort koşu
    },
    {
        id: 204,
        name: 'Elite Compression T-Shirt',
        description: '🔄 Kas destekli kompresyon. Recovery süresini %25 kısaltır!',
        price: 699,
        oldPrice: 999,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Erkek dar t-shirt
    },
    {
        id: 205,
        name: 'Urban Jogger Eşofman',
        description: '🏙️ Gym ve sokak stili bir arada. Modern slim fit kesim.',
        price: 799,
        oldPrice: 1199,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Erkek koşu/jogger
    },
    {
        id: 206,
        name: 'Tactical Cargo Şort',
        description: '👖 Bol cepli, fonksiyonel tasarım. Outdoor ve fitness için ideal.',
        price: 599,
        oldPrice: 849,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Erkek şort
    },
    {
        id: 207,
        name: 'HeatGear Uzun Kollu T-Shirt',
        description: '❄️ Soğuk hissettiren teknoloji. Yaz ayları için serinlik garantisi!',
        price: 499,
        oldPrice: 749,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1527719327859-ac0850141c2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Erkek uzun kollu
    },
    {
        id: 208,
        name: 'Storm Su Geçirmez Ceket',
        description: '🌧️ Yağmur ve rüzgara karşı %100 koruma. Outdoor aktivitelerde güvende hisset!',
        price: 1599,
        oldPrice: 2299,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Yağmurluk
    },
    {
        id: 209,
        name: 'Core Training Pantolon',
        description: '🔥 Elastik bel bandı, esneyen kumaş. Deep squat\'a kadar esner!',
        price: 749,
        oldPrice: 1099,
        category: 'erkek',
        image: 'https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Erkek antrenman
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
        image: 'https://images.unsplash.com/photo-1506629905607-0b3b5b1b8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kadın bacak/tayt
    },
    {
        id: 302,
        name: 'Seamless Sports Bra',
        description: '💖 Dikişsiz konfor, yüksek destek. Koşu, yoga, HIIT için mükemmel!',
        price: 549,
        oldPrice: 799,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kadın spor sütyeni
    },
    {
        id: 303,
        name: 'Flow Yoga T-Shirt',
        description: '🧘‍♀️ Nefes alan, hafif kumaş. Yoga ve pilates seanslarında özgür hisset!',
        price: 449,
        oldPrice: 649,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kadın yoga
    },
    {
        id: 304,
        name: 'Energy Koşu Şortu',
        description: '🏃‍♀️ İç taytıyla birlikte, hafif ve serin. Koşuda rahatlık hissi!',
        price: 599,
        oldPrice: 899,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kadın koşu
    },
    {
        id: 305,
        name: 'Flex Ribbed Crop Top',
        description: '🎀 Ribana yapı, trendy crop model. Gym & street style kombinleri!',
        price: 399,
        oldPrice: 599,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1596356453261-0d265ae2520a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kadın crop top
    },
    {
        id: 306,
        name: 'Shape Cross-Over Tayt',
        description: '💫 Cross-over bel bandı, şekillendirici. Instagram\'da fenomen tayt!',
        price: 899,
        oldPrice: 1299,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kadın spor salonu
    },
    {
        id: 307,
        name: 'Warm Fleece Eşofman',
        description: '🧸 Yumuşak polar iç, soğuk günlerde sıcak tutar. Kışın vazgeçilmezi!',
        price: 999,
        oldPrice: 1399,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kadın kışlık
    },
    {
        id: 308,
        name: 'Support Long Sleeve Top',
        description: '🤗 Uzun kollu, destekli yapı. Kış antrenmanlarında sıcak ve destekli!',
        price: 649,
        oldPrice: 949,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1574680096141-9877b47b4df8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kadın uzun kollu spor
    },
    {
        id: 309,
        name: 'Essential Racerback Atlet',
        description: '✨ Racerback kesim, özgür hareket. Sıcak günlerde serinlik!',
        price: 379,
        oldPrice: 549,
        category: 'kadin',
        image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kadın atlet
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
        image: 'https://images.unsplash.com/photo-1602143407151-11115cd4e69b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Suluk
    },
    {
        id: 402,
        name: 'Pro Gym Çantası',
        description: '🎒 Ayakkabı bölmesi, ıslak kıyafet haznesi. 45L hacim, sırt destekli!',
        price: 699,
        oldPrice: 999,
        category: 'aksesuar',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Çanta
    },
    {
        id: 403,
        name: 'Performance No-Show Çorap',
        description: '🧦 Teri emen, kokuya karşı özel işlem. 3 çift bir arada!',
        price: 149,
        oldPrice: 229,
        category: 'aksesuar',
        image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Çorap
    },
    {
        id: 404,
        name: 'SmartPhone Koşu Kılıfı',
        description: '📱 7" ekrana kadar uyumlu, kol bandı ile telefonu yanında taşı!',
        price: 179,
        oldPrice: 269,
        category: 'aksesuar',
        image: 'https://images.unsplash.com/photo-1526401281623-279a499063b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Telefon/Tech
    },
    {
        id: 405,
        name: 'Adjustable Weightlifting Kemeri',
        description: '💪 6" genişlik, lumbal destek. Powerlifting & CrossFit için zorunlu!',
        price: 549,
        oldPrice: 799,
        category: 'aksesuar',
        image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Ağırlık/Kemer konsept
    },
    {
        id: 406,
        name: 'Breath Cap Koşu Şapkası',
        description: '🧢 Nefes alan file, ayarlanabilir kayış. Güneşe karşı koruma!',
        price: 299,
        oldPrice: 449,
        category: 'aksesuar',
        image: 'https://images.unsplash.com/photo-1588850561049-949092437156?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Şapka
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
        image: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Gece koşusu
    },
    {
        id: 502,
        name: 'Eco-Friendly Tayt',
        description: '🌱 %100 geri dönüştürülmüş malzeme. Sürdürülebilir moda, bilinçli tercih!',
        price: 749,
        oldPrice: 999,
        category: 'yeni',
        image: 'https://images.unsplash.com/photo-1549476464-37392f717541?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Doğa/Yoga
    },
    {
        id: 503,
        name: 'Smart Grip Eldiven',
        description: '🤳 Dokunmatik ekran uyumlu, kaydırmaz avuç içi. Telefon kullanmaya devam!',
        price: 349,
        oldPrice: 499,
        category: 'yeni',
        image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Spor eldiveni/kadın
    },
    {
        id: 504,
        name: 'Ultra Light Koşu Ayakkabısı',
        description: '🪶 Sadece 180gr! Hafiflik ve hız bir arada, PR kırman için!',
        price: 1599,
        oldPrice: 2199,
        category: 'yeni',
        image: 'https://images.unsplash.com/photo-1539185441755-54339c0d23c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Koşu ayakkabısı
    },
    {
        id: 505,
        name: 'Thermal Base Layer Set',
        description: '🔥 Vücut ısısını koruyan alt katman. Kış sporlarında performans artırıcı!',
        price: 999,
        oldPrice: 1399,
        category: 'yeni',
        image: 'https://images.unsplash.com/photo-1486739985386-d4fae04ca6f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Termal/Kış antrenman
    },
    {
        id: 506,
        name: 'Sculpt Tik Tok Tayt',
        description: '📸 V şeklinde bel bandı, Instagram & Tik Tok fenomeni. Viral ol!',
        price: 899,
        oldPrice: 1199,
        category: 'yeni',
        image: 'https://images.unsplash.com/photo-1545912452-8a1591fecc8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Modern tayt
    },
    {
        id: 507,
        name: 'Magnet Door Koşu Bandı',
        description: '🧲 Kir tutmayan, yumuşak dokunuş. 4 yönlü esneklik ile özgürlük!',
        price: 699,
        oldPrice: 999,
        category: 'yeni',
        image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Direnç bandı
    },
    {
        id: 508,
        name: 'Protein Tozu Şişesi',
        description: '🥤 Karıştırıcı top ile içme kolaylığı. BPA-free, 700ml hacim!',
        price: 249,
        oldPrice: 349,
        category: 'yeni',
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Shaker/Şişe
    },
    {
        id: 509,
        name: 'Scent-Free Spor Çantası',
        description: '🌸 Kokuya karşı özel kaplama. Spor sonrası koku sorunu yok!',
        price: 799,
        oldPrice: 1099,
        category: 'yeni',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Çanta
    },
    {
        id: 510,
        name: 'Recovery Foam Roller',
        description: '🦵 Yoğun yoğunluklu masaj silindiri. Recovery süresini %30 azaltır!',
        price: 399,
        oldPrice: 549,
        category: 'yeni',
        image: 'https://images.unsplash.com/photo-1600881333168-2ef49b341f30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Yoga mat/roller
    },
    {
        id: 511,
        name: 'Aqua Sport Kadın Bikini',
        description: '🏊‍♀️ Klor dayanıklı, hızlı kuruma. Yüzme antrenmanları için ideal!',
        price: 599,
        oldPrice: 849,
        category: 'yeni',
        image: 'https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Kadın yüzücü
    },
    {
        id: 512,
        name: 'Pro Boxing Eldiveni',
        description: '🥊 Deri dış, şok emici iç ped. Boks ve MMA için profesyonel kalite!',
        price: 899,
        oldPrice: 1299,
        category: 'yeni',
        image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Eldiven/Boks
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
        image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // T-shirt
    },
    {
        id: 602,
        name: 'Outlet Koşu Şortu',
        description: '🏷️ SEZON SONU! Bedenler: M-L-XL. Stoklar tükenmeden!',
        price: 299,
        oldPrice: 649,
        category: 'indirim',
        image: 'https://images.unsplash.com/photo-1506629905607-0b3b5b1b8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Şort
    },
    {
        id: 603,
        name: 'Last Chance Gym Çantası',
        description: '⚠️ ÜRETİMDEN KALAN SON PARTİ! 40L kapasite. Son şans!',
        price: 399,
        oldPrice: 899,
        category: 'indirim',
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Çanta
    },
    {
        id: 604,
        name: 'Flash Sale Çorap Paketi',
        description: '⚡ BUGÜN SON! 5\'li paket. Antibakteriyel teknoloji!',
        price: 99,
        oldPrice: 229,
        category: 'indirim',
        image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Çorap
    },
    {
        id: 605,
        name: 'B-Stock Koşu Ayakkabısı',
        description: '📦 Kutusu hasarlı, ürün SIFIR! 50% indirim. Kaçırılmaz fırsat!',
        price: 799,
        oldPrice: 1599,
        category: 'indirim',
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Ayakkabı
    },
    {
        id: 606,
        name: 'Final Sale Sweatshirt',
        description: '🎯 İADE YOK! Seri sonu model. En son fiyat düşüşü!',
        price: 349,
        oldPrice: 799,
        category: 'indirim',
        image: 'https://images.unsplash.com/photo-1556906781-9a412961c28c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', // Sweatshirt
    }
];

// TÜM ÜRÜNLERİ BİRLEŞTİR
const allProducts = [...popularProducts, ...erkekProducts, ...kadinProducts, ...aksesuarProducts, ...yeniProducts, ...indirimProducts];