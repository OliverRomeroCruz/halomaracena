/* ========================================================
   HALO MARACENA - JAVASCRIPT BRUTALISTA LAM
   Take Away & Smash Burgers - Solo llamadas o en local
   ======================================================== */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Inicializar iconos Lucide
    if (window.lucide) {
        lucide.createIcons();
    }

    // 2. Control de Navbar al hacer scroll
    const navbar = document.getElementById("lamNavbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // 3. Indicador de estado abierto/cerrado
    checkOpenStatus();
    setInterval(checkOpenStatus, 60000);

    function checkOpenStatus() {
        const now = new Date();
        const day = now.getDay();
        const hours = now.getHours();
        const minutes = now.getMinutes();
        const timeVal = hours + minutes / 60;

        let isOpen = false;
        // Lunes a Jueves: 20:00 a 00:00
        if (day >= 1 && day <= 4) {
            if (timeVal >= 20 && timeVal < 24) isOpen = true;
        } else {
            // Viernes a Domingo: 13:30 - 16:30 y 20:00 - 00:30
            if (timeVal >= 13.5 && timeVal < 16.5) isOpen = true;
            if (timeVal >= 20 || timeVal < 0.5) isOpen = true;
        }

        const dot = document.getElementById("statusDot");
        const text = document.getElementById("statusText");

        if (dot && text) {
            if (isOpen) {
                dot.style.background = "#16a34a";
                text.textContent = "ABIERTO AHORA";
            } else {
                dot.style.background = "#dc2626";
                text.textContent = "ABRE A LAS 20:00";
            }
        }
    }

    // 4. RENDERIZAR LOS 3 VÍDEOS EN BUCLE (SIN FLECHAS, SIN PUNTOS, SOLO LLAMAR)
    const carouselTrack = document.getElementById("carouselTrack");
    if (carouselTrack && HALO_DATA.carouselBurgers) {
        carouselTrack.innerHTML = HALO_DATA.carouselBurgers.map((item, idx) => `
            <article class="lam-card" data-index="${idx}" data-id="${item.id}">
                <div class="lam-card-media">
                    <video 
                        class="card-loop-vid" 
                        autoplay 
                        loop 
                        muted 
                        playsinline 
                        poster="${item.poster || ''}">
                        <source src="${item.video}" type="video/mp4">
                    </video>
                </div>
                <div class="lam-card-body">
                    <div class="lam-card-header">
                        <h3 class="lam-card-title">${item.title}</h3>
                        <span class="lam-card-price">${item.price}</span>
                    </div>
                    <p class="lam-card-desc">${item.desc}</p>
                    <div class="lam-card-footer">
                        <span class="lam-tag">${item.tag}</span>
                        <a href="tel:858831438" class="lam-card-call-btn">
                            <i data-lucide="phone"></i>
                            <span>LLAMAR</span>
                        </a>
                    </div>
                </div>
            </article>
        `).join("");
    }

    // 5. RENDERIZAR SECCIONES POR FOTOS NOMBRADAS
    // Sección Carnes Maduradas
    const carnesContainer = document.getElementById("carnesTriptych");
    const carnesSection = HALO_DATA.sections.find(s => s.id === "carnes");
    if (carnesContainer && carnesSection) {
        carnesContainer.innerHTML = carnesSection.gallery.map(p => `
            <div class="lam-photo-card">
                <img src="${p.src}" alt="${p.title}" loading="lazy">
                <div class="lam-photo-info">
                    <h4 class="lam-photo-title">${p.title}</h4>
                    <p class="lam-photo-desc">${p.desc}</p>
                </div>
            </div>
        `).join("");
    }

    // Sección Alitas
    const alitasContainer = document.getElementById("alitasGrid");
    const alitasSection = HALO_DATA.sections.find(s => s.id === "alitas-section");
    if (alitasContainer && alitasSection) {
        alitasContainer.innerHTML = alitasSection.items.map(item => `
            <article class="lam-card">
                <div class="lam-card-media">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <span class="lam-card-badge">${item.tag}</span>
                </div>
                <div class="lam-card-body">
                    <div class="lam-card-header">
                        <h3 class="lam-card-title">${item.name}</h3>
                        <span class="lam-card-price">${item.price}</span>
                    </div>
                    <p class="lam-card-desc">${item.desc}</p>
                    <div class="lam-card-footer">
                        <span class="lam-tag">RECETA HALO</span>
                        <a href="tel:858831438" class="lam-card-call-btn">
                            <i data-lucide="phone"></i>
                            <span>LLAMAR</span>
                        </a>
                    </div>
                </div>
            </article>
        `).join("");
    }

    // Sección Plancha y Cocineros
    const planchaContainer = document.getElementById("planchaTriptych");
    const planchaSection = HALO_DATA.sections.find(s => s.id === "plancha");
    if (planchaContainer && planchaSection) {
        planchaContainer.innerHTML = planchaSection.gallery.map(p => `
            <div class="lam-photo-card">
                <img src="${p.src}" alt="${p.title}" loading="lazy">
                <div class="lam-photo-info">
                    <h4 class="lam-photo-title">${p.title}</h4>
                    <p class="lam-photo-desc">${p.desc}</p>
                </div>
            </div>
        `).join("");
    }

    // Sección Take Away & Recogida
    const deliveryContainer = document.getElementById("deliveryGrid");
    const deliverySection = HALO_DATA.sections.find(s => s.id === "delivery");
    if (deliveryContainer && deliverySection) {
        deliveryContainer.innerHTML = deliverySection.items.map(item => `
            <article class="lam-card">
                <div class="lam-card-media">
                    <img src="${item.image}" alt="${item.name}" loading="lazy">
                    <span class="lam-card-badge">${item.tag}</span>
                </div>
                <div class="lam-card-body">
                    <h3 class="lam-card-title" style="margin-bottom: 0.5rem;">${item.name}</h3>
                    <p class="lam-card-desc">${item.desc}</p>
                    <div class="lam-card-footer" style="margin-top: 1rem;">
                        <a href="tel:858831438" class="lam-btn" style="width: 100%; padding: 0.75rem;">
                            <i data-lucide="phone"></i>
                            <span>LLAMAR: 858 83 14 38</span>
                        </a>
                    </div>
                </div>
            </article>
        `).join("");
    }

    // Sección Local Maracena
    const localContainer = document.getElementById("localTriptych");
    const localSection = HALO_DATA.sections.find(s => s.id === "local");
    if (localContainer && localSection) {
        localContainer.innerHTML = localSection.gallery.map(p => `
            <div class="lam-photo-card">
                <img src="${p.src}" alt="${p.title}" loading="lazy">
                <div class="lam-photo-info">
                    <h4 class="lam-photo-title">${p.title}</h4>
                    <p class="lam-photo-desc">${p.desc}</p>
                </div>
            </div>
        `).join("");
    }

    // Sección Comunidad & Clientes
    const comunidadContainer = document.getElementById("comunidadGrid");
    const comunidadSection = HALO_DATA.sections.find(s => s.id === "comunidad");
    if (comunidadContainer && comunidadSection) {
        comunidadContainer.innerHTML = comunidadSection.gallery.map(p => `
            <div class="lam-photo-card">
                <img src="${p.src}" alt="${p.title}" loading="lazy">
                <div class="lam-photo-info">
                    <h4 class="lam-photo-title">${p.title}</h4>
                    <p class="lam-photo-desc">${p.desc}</p>
                </div>
            </div>
        `).join("");
    }

    // 6. Control de Menú Móvil
    const menuToggle = document.getElementById("lamMenuToggle");
    const mobileNav = document.getElementById("lamMobileNav");
    const mobileNavOverlay = document.getElementById("lamMobileNavOverlay");
    const mobileNavClose = document.getElementById("lamMobileNavClose");
    const mobileLinks = document.querySelectorAll(".lam-mobile-nav-link");

    function openMobileMenu() {
        if (mobileNav && mobileNavOverlay) {
            mobileNav.classList.add("open");
            mobileNavOverlay.classList.add("open");
            document.body.style.overflow = "hidden";
        }
    }

    function closeMobileMenu() {
        if (mobileNav && mobileNavOverlay) {
            mobileNav.classList.remove("open");
            mobileNavOverlay.classList.remove("open");
            document.body.style.overflow = "";
        }
    }

    if (menuToggle) menuToggle.addEventListener("click", openMobileMenu);
    if (mobileNavClose) mobileNavClose.addEventListener("click", closeMobileMenu);
    if (mobileNavOverlay) mobileNavOverlay.addEventListener("click", closeMobileMenu);

    mobileLinks.forEach(link => {
        link.addEventListener("click", closeMobileMenu);
    });

    // 7. Refrescar iconos Lucide
    if (window.lucide) {
        lucide.createIcons();
    }
});
