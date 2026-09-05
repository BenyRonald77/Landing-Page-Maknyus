/**
 * DESAK MAKNYUS - NEO-BRUTALISM CATERING INTERACTIVE LOGIC
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. SHOWCASE CAROUSEL DATA (5 Catering Specialties matching 5 thumbnails)
  const showcaseItems = [
    {
      id: 0,
      title: "Paket Sultan: Ayam Bakar Betutu & Sambal Matah",
      categoryTags: ["PRASMANAN", "AYAM BETUTU"],
      paxInfo: "50-500 Porsi",
      image: "assets/img/dish_ayam_betutu.jpg",
      statusBadge: "SEDANG PROMO",
      matchBadge: "98% Suka",
      rating: "★ 4.9 / 5.0",
      reviewCount: "2,400+ Porsi Terjual · Halal & Higienis",
      quote: '"Bumbu rempah meresap sampai ke tulang, sambal matah segar harum kecombrang, bikin semua tamu terkesan!"'
    },
    {
      id: 1,
      title: "Tumpeng Mini Kuning: Berkah Selera Nusantara",
      categoryTags: ["TUMPENG", "SYUKURAN"],
      paxInfo: "Min. 20 Pax",
      image: "assets/img/dish_tumpeng.jpg",
      statusBadge: "BEST SELLER",
      matchBadge: "99% Suka",
      rating: "★ 5.0 / 5.0",
      reviewCount: "890+ Acara Sukses · Box Bambu Estetik",
      quote: '"Nasi kuning pulen wangi santan asli, lauk pauk komplit melimpah, kemasan anyaman bambu memukau para tamu."'
    },
    {
      id: 2,
      title: "Bento Eksekutif: Rendang Sapi Empuk & Balado",
      categoryTags: ["BENTO BOX", "RENDANG"],
      paxInfo: "30-1000 Box",
      image: "assets/img/dish_nasi_kotak.jpg",
      statusBadge: "FAVORIT KANTOR",
      matchBadge: "97% Suka",
      rating: "★ 4.9 / 5.0",
      reviewCount: "5,000+ Kotak Terkirim · Eco Packaging",
      quote: '"Daging rendang empuk lumer di lidah, bumbu hitam gurih legit khas Minang dengan kemasan praktis ramah lingkungan."'
    },
    {
      id: 3,
      title: "Grand Buffet Prasmanan: 8 Menu Utama & VIP Service",
      categoryTags: ["PRASMANAN", "WEDDING"],
      paxInfo: "100-2000 Tamu",
      image: "assets/img/dish_prasmanan.jpg",
      statusBadge: "REKOMENDASI VIP",
      matchBadge: "99% Suka",
      rating: "★ 4.9 / 5.0",
      reviewCount: "350+ Resepsi Sukses · Chaffing Dish Mewah",
      quote: '"Pramusaji sigap rapi berseragam, meja dekorasi estetik dengan penghangat tembaga, rasa masakan konsisten prima!"'
    },
    {
      id: 4,
      title: "Snack Box Artisan: 5 Kue Tradisional & Fruit Tart",
      categoryTags: ["SNACK BOX", "COFFEE BREAK"],
      paxInfo: "Min. 25 Box",
      image: "assets/img/dish_snack_box.jpg",
      statusBadge: "READY TODAY",
      matchBadge: "96% Suka",
      rating: "★ 4.8 / 5.0",
      reviewCount: "3,200+ Paket Coffee Break · Fresh Subuh",
      quote: '"Kue pastel renyah garing, risoles mayo creamy padat, serta fruit tartlet segar memanjakan suasana rapat dan arisan."'
    }
  ];

  let currentShowcaseIndex = 0;

  // DOM Elements for Showcase
  const featuredImg = document.getElementById('featuredImg');
  const featuredStatusBadge = document.getElementById('featuredStatusBadge');
  const featuredMatchBadge = document.getElementById('featuredMatchBadge');
  const featuredCategoryTags = document.getElementById('featuredCategoryTags');
  const featuredPaxInfo = document.getElementById('featuredPaxInfo');
  const featuredTitle = document.getElementById('featuredTitle');
  const featuredRating = document.getElementById('featuredRating');
  const featuredReviewCount = document.getElementById('featuredReviewCount');
  const featuredQuote = document.getElementById('featuredQuote');
  const btnPrev = document.getElementById('btnPrevShowcase');
  const btnNext = document.getElementById('btnNextShowcase');
  const thumbnails = document.querySelectorAll('.thumb-item');

  function renderShowcase(index) {
    currentShowcaseIndex = index;
    const item = showcaseItems[index];

    // Smooth transition
    if (featuredImg) {
      featuredImg.style.opacity = '0.4';
      setTimeout(() => {
        featuredImg.src = item.image;
        featuredImg.alt = item.title;
        featuredImg.style.opacity = '1';
      }, 150);
    }

    if (featuredStatusBadge) featuredStatusBadge.textContent = item.statusBadge;
    if (featuredMatchBadge) featuredMatchBadge.textContent = item.matchBadge;
    
    if (featuredCategoryTags) {
      featuredCategoryTags.innerHTML = item.categoryTags
        .map(tag => `<span class="tag-spec">${tag}</span>`)
        .join('');
    }

    if (featuredPaxInfo) featuredPaxInfo.textContent = `· ${item.paxInfo}`;
    if (featuredTitle) featuredTitle.textContent = item.title;
    if (featuredRating) featuredRating.innerHTML = `<span class="star">★</span> ${item.rating.replace('★ ', '')}`;
    if (featuredReviewCount) featuredReviewCount.textContent = `(${item.reviewCount})`;
    if (featuredQuote) featuredQuote.textContent = item.quote;

    // Update active thumbnail
    thumbnails.forEach((thumb, i) => {
      if (i === index) {
        thumb.classList.add('active');
      } else {
        thumb.classList.remove('active');
      }
    });
  }

  // Prev / Next Listeners
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      let prevIndex = currentShowcaseIndex - 1;
      if (prevIndex < 0) prevIndex = showcaseItems.length - 1;
      renderShowcase(prevIndex);
    });
  }

  if (btnNext) {
    btnNext.addEventListener('click', () => {
      let nextIndex = (currentShowcaseIndex + 1) % showcaseItems.length;
      renderShowcase(nextIndex);
    });
  }

  // Thumbnail Click Listeners
  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const idx = parseInt(thumb.getAttribute('data-index'), 10);
      if (!isNaN(idx)) {
        renderShowcase(idx);
      }
    });
  });

  // Initial render for showcase item 0
  renderShowcase(0);

  // 2. MENU CATALOG FILTER
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuCards = document.querySelectorAll('.menu-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      menuCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. INTERACTIVE BUDGET CALCULATOR
  const packageSelect = document.getElementById('calcPackage');
  const paxSlider = document.getElementById('calcPaxSlider');
  const paxBadge = document.getElementById('calcPaxBadge');
  const extraCheckboxes = document.querySelectorAll('.calc-extra-checkbox');
  const summaryPackageName = document.getElementById('summaryPackageName');
  const summaryPaxCount = document.getElementById('summaryPaxCount');
  const summaryPricePerPax = document.getElementById('summaryPricePerPax');
  const summaryDiscount = document.getElementById('summaryDiscount');
  const summaryTotal = document.getElementById('summaryTotal');
  const btnSendCalcWA = document.getElementById('btnSendCalcWA');

  function calculateBudget() {
    if (!packageSelect || !paxSlider) return;

    const selectedOption = packageSelect.options[packageSelect.selectedIndex];
    const basePrice = parseInt(selectedOption.getAttribute('data-price') || '35000', 10);
    const packageName = selectedOption.text;
    const pax = parseInt(paxSlider.value, 10);

    // Update Pax Badge
    if (paxBadge) paxBadge.textContent = `${pax} Pax`;

    // Extra Add-ons
    let extrasTotalPerPax = 0;
    const selectedExtras = [];

    extraCheckboxes.forEach(cb => {
      if (cb.checked) {
        const extraPrice = parseInt(cb.getAttribute('data-price') || '0', 10);
        extrasTotalPerPax += extraPrice;
        selectedExtras.push(cb.getAttribute('data-name'));
      }
    });

    const pricePerPax = basePrice + extrasTotalPerPax;
    let subtotal = pricePerPax * pax;

    // Bulk Discount: 5% for >= 100 pax, 10% for >= 300 pax
    let discountPercent = 0;
    if (pax >= 300) {
      discountPercent = 10;
    } else if (pax >= 100) {
      discountPercent = 5;
    }

    const discountAmount = subtotal * (discountPercent / 100);
    const finalTotal = subtotal - discountAmount;

    // Formatting in IDR
    const formatIDR = (num) => 'Rp ' + num.toLocaleString('id-ID');

    if (summaryPackageName) summaryPackageName.textContent = packageName;
    if (summaryPaxCount) summaryPaxCount.textContent = `${pax} Porsi`;
    if (summaryPricePerPax) summaryPricePerPax.textContent = formatIDR(pricePerPax) + ' / pax';
    if (summaryDiscount) summaryDiscount.textContent = discountPercent > 0 ? `-${discountPercent}% (${formatIDR(discountAmount)})` : 'Rp 0';
    if (summaryTotal) summaryTotal.textContent = formatIDR(finalTotal);

    // Setup WhatsApp Checkout Link
    if (btnSendCalcWA) {
      const waNumber = "6281234567890"; // Mock catering WA hotline
      const extrasText = selectedExtras.length > 0 ? selectedExtras.join(', ') : 'Tidak ada';
      const waMessage = encodeURIComponent(
        `Halo Tim Katering Desak Maknyus! 👋\n\n` +
        `Saya ingin konsultasi pemesanan katering dengan rincian berikut:\n` +
        `🍱 Paket: ${packageName}\n` +
        `👥 Jumlah: ${pax} Porsi\n` +
        `✨ Tambahan: ${extrasText}\n` +
        `💰 Estimasi Biaya: ${formatIDR(finalTotal)}\n\n` +
        `Apakah tanggal acara saya masih tersedia? Mohon info kelanjutannya ya. Terima kasih!`
      );
      btnSendCalcWA.href = `https://wa.me/${waNumber}?text=${waMessage}`;
    }
  }

  if (packageSelect) packageSelect.addEventListener('change', calculateBudget);
  if (paxSlider) paxSlider.addEventListener('input', calculateBudget);
  extraCheckboxes.forEach(cb => cb.addEventListener('change', calculateBudget));

  calculateBudget();

  // 4. FAQ ACCORDION
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 5. QUICK ORDER MODAL
  const modalOverlay = document.getElementById('orderModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const btnOrderShowcase = document.getElementById('btnOrderShowcase');
  const btnHeroBooking = document.getElementById('btnHeroBooking');
  const btnNavCta = document.getElementById('btnNavCta');
  const menuOrderButtons = document.querySelectorAll('.btn-menu-order');
  const orderForm = document.getElementById('quickOrderForm');

  function openOrderModal(menuPrefill = '') {
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      if (menuPrefill) {
        const inputMenu = document.getElementById('orderMenuInput');
        if (inputMenu) inputMenu.value = menuPrefill;
      }
    }
  }

  function closeOrderModal() {
    if (modalOverlay) modalOverlay.classList.remove('active');
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeOrderModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeOrderModal();
    });
  }

  if (btnOrderShowcase) {
    btnOrderShowcase.addEventListener('click', () => {
      const activeItem = showcaseItems[currentShowcaseIndex];
      openOrderModal(activeItem.title);
    });
  }

  if (btnHeroBooking) {
    btnHeroBooking.addEventListener('click', () => openOrderModal('Paket Katering Pilihan'));
  }

  if (btnNavCta) {
    btnNavCta.addEventListener('click', () => openOrderModal('Paket Spesial Desak Maknyus'));
  }

  menuOrderButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const title = btn.getAttribute('data-menu') || 'Paket Menu';
      openOrderModal(title);
    });
  });

  // Handle Form Submit
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('orderNameInput').value;
      const phone = document.getElementById('orderPhoneInput').value;
      const menu = document.getElementById('orderMenuInput').value;
      const pax = document.getElementById('orderPaxInput').value;
      const date = document.getElementById('orderDateInput').value;
      const note = document.getElementById('orderNoteInput').value;

      const waNumber = "6281234567890";
      const message = encodeURIComponent(
        `Halo Desak Maknyus, saya ingin pesan katering:\n\n` +
        `👤 Nama: ${name}\n` +
        `📞 No. WhatsApp: ${phone}\n` +
        `🍱 Pilihan Paket: ${menu}\n` +
        `👥 Jumlah Porsi: ${pax} Porsi\n` +
        `📅 Tanggal Acara: ${date}\n` +
        `📝 Catatan: ${note || '-'}\n\n` +
        `Mohon konfirmasi ketersediaan dan rincian invoice-nya. Terima kasih!`
      );

      window.open(`https://wa.me/${waNumber}?text=${message}`, '_blank');
      closeOrderModal();
    });
  }
});
