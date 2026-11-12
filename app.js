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
                    <span class="lam-card-badge">${item.tag}</span>
                    <video 
                        class="card-loop-vid" 
                        src="${item.video}"
                        autoplay 
                        loop 
                        muted 
                        playsinline 
                        webkit-playsinline
                        preload="auto">
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
                        <div class="lam-card-btns">
                            <a href="https://wa.me/34603727008?text=Hola%20HALO!%20Quiero%20pedir%20la%20burger%20${encodeURIComponent(item.title)}" target="_blank" rel="noopener" class="lam-card-wa-btn" aria-label="Pedir ${item.title} por WhatsApp">
                                <svg class="lam-wa-icon" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                                </svg>
                                <span>PEDIR POR WHATSAPP</span>
                            </a>
                            <a href="tel:858831438" class="lam-card-call-btn" aria-label="Llamar para pedir ${item.title}">
                                <i data-lucide="phone"></i>
                                <span class="lam-call-btn-desktop">LLAMAR</span>
                                <span class="lam-call-btn-mobile">LLAMAR AL LOCAL</span>
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        `).join("");

        // Sincronización de selector táctil en móvil
        const mobileNavPills = document.querySelectorAll(".lam-carousel-pill");
        if (mobileNavPills.length > 0) {
            mobileNavPills.forEach((pill) => {
                pill.addEventListener("click", () => {
                    const targetIdx = parseInt(pill.dataset.index, 10);
                    const targetCard = carouselTrack.children[targetIdx];
                    if (targetCard) {
                        targetCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                    }
                    mobileNavPills.forEach((p, i) => {
                        p.classList.toggle("active", i === targetIdx);
                    });
                });
            });

            // Resaltar píldora activa con el desplazamiento táctil
            let scrollTimer;
            carouselTrack.addEventListener("scroll", () => {
                clearTimeout(scrollTimer);
                scrollTimer = setTimeout(() => {
                    const trackCenter = carouselTrack.scrollLeft + carouselTrack.clientWidth / 2;
                    let closestIdx = 0;
                    let closestDist = Infinity;
                    Array.from(carouselTrack.children).forEach((card, idx) => {
                        const cardCenter = card.offsetLeft + card.clientWidth / 2;
                        const dist = Math.abs(trackCenter - cardCenter);
                        if (dist < closestDist) {
                            closestDist = dist;
                            closestIdx = idx;
                        }
                    });
                    mobileNavPills.forEach((p, i) => {
                        p.classList.toggle("active", i === closestIdx);
                    });
                }, 50);
            }, { passive: true });
        }

        // Garantizar reproducción inmediata y continua de los vídeos en dispositivos móviles
        const loopVideos = carouselTrack.querySelectorAll(".card-loop-vid");
        loopVideos.forEach(vid => {
            vid.muted = true;
            vid.defaultMuted = true;
            vid.playsInline = true;
            vid.setAttribute("muted", "");
            vid.setAttribute("playsinline", "");
            vid.setAttribute("webkit-playsinline", "");

            const playVid = () => {
                const p = vid.play();
                if (p !== undefined) {
                    p.catch(() => {});
                }
            };

            playVid();
            vid.addEventListener("loadedmetadata", playVid, { once: true });
            vid.addEventListener("loadeddata", playVid, { once: true });
            vid.addEventListener("canplay", playVid, { once: true });

            // Si el navegador móvil bloquea autoplay antes de interacción, arrancar con el menor toque/scroll
            ["touchstart", "touchend", "scroll", "pointerdown", "click"].forEach(evt => {
                window.addEventListener(evt, playVid, { once: true, passive: true });
            });
        });
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
