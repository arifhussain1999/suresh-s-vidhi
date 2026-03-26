
const portfolioItems = [
  { id: 1, category: 'luxury', title: 'Sea View Penthouse', location: 'Mumbai', image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', year: '2022', area: '3200 sq ft' },

  { id: 2, category: 'modern', title: 'Contemporary Glass Villa', location: 'Bangalore', image: 'images/portfolio/villa.avif', year: '2024', area: '4100 sq ft' },

  { id: 3, category: 'minimal', title: 'Compact Minimal Apartment', location: 'Delhi', image: 'images/portfolio/apartment.jpg', year: '2023', area: '1200 sq ft' },

  { id: 4, category: 'luxury', title: 'Corporate Office Interior', location: 'Kolkata', image: 'images/portfolio/office.jpg', year: '2021', area: '4800 sq ft' },

  { id: 5, category: 'modern', title: 'Modular Smart Kitchen', location: 'Pune', image: 'images/portfolio/kitchen.jpg', year: '2023', area: '180 sq ft' },

  { id: 6, category: 'minimal', title: 'Scandinavian Living Room', location: 'Chennai', image: 'images/portfolio/livingroom.jpg', year: '2022', area: '550 sq ft' },

  { id: 7, category: 'luxury', title: 'Royal Master Bedroom', location: 'Hyderabad', image: 'images/portfolio/royalbedroom.jpg', year: '2024', area: '400 sq ft' },

  {
    id: 8,
    category: 'modern',
    title: 'Elegant Marble Bathroom',
    location: 'Goa',
    image: 'images/portfolio/bathroom.jpg',
    year: '2023',
    area: '120 sq ft'
  },

  {
    id: 9,
    category: 'luxury',
    title: 'Grand Entrance Hall',
    location: 'Jaipur',
    image: 'images/portfolio/hall.jpg',
    year: '2022',
    area: '800 sq ft'
  }
];
    function renderPortfolio(filter = 'all') {
        const grid = document.getElementById('portfolioGrid');
        if (!grid) return;
        const filtered = filter === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === filter);
        if (filtered.length === 0) { grid.innerHTML = '<div style="text-align: center; padding: 60px;">No projects found</div>'; return; }
        grid.innerHTML = filtered.map(item => `<div class="portfolio-item reveal" data-category="${item.category}"><img src="${item.image}" alt="${item.title}" loading="lazy"><div class="portfolio-overlay"><h3 style="font-size: 28px; margin-bottom: 10px;">${item.title}</h3><p style="margin-bottom: 8px;"><i class="fas fa-map-marker-alt"></i> ${item.location}</p><p style="margin-bottom: 8px;"><i class="fas fa-ruler-combined"></i> ${item.area}</p><p style="margin-bottom: 20px;"><i class="fas fa-calendar"></i> ${item.year}</p><button class="btn btn-gold" style="padding: 10px 24px; font-size: 14px;" onclick="openConsultation()">Inquire Now</button></div></div>`).join('');
        const newReveals = document.querySelectorAll('.portfolio-item.reveal');
        const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); }); }, { threshold: 0.1 });
        newReveals.forEach(reveal => observer.observe(reveal));
    }
    document.addEventListener('DOMContentLoaded', function() {
        setTimeout(() => { const loader = document.getElementById('loader'); if (loader) loader.classList.add('hide'); }, 1200);
        renderPortfolio();
        if (typeof Swiper !== 'undefined') { new Swiper('#testimonialsSlider', { loop: true, autoplay: { delay: 5000, disableOnInteraction: false }, pagination: { el: '.swiper-pagination', clickable: true }, slidesPerView: 1, breakpoints: { 768: { slidesPerView: 2, spaceBetween: 30 }, 1024: { slidesPerView: 2, spaceBetween: 40 } } }); }
        if (typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true, offset: 100 });
        const reveals = document.querySelectorAll('.reveal');
        const observer = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); }); }, { threshold: 0.1 });
        reveals.forEach(reveal => observer.observe(reveal));
        window.addEventListener('scroll', () => { const navbar = document.getElementById('navbar'); if (navbar) { if (window.scrollY > 50) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled'); } const winScroll = document.body.scrollTop || document.documentElement.scrollTop; const height = document.documentElement.scrollHeight - document.documentElement.clientHeight; const scrolled = (winScroll / height) * 100; const progressBar = document.getElementById('progressBar'); if (progressBar) progressBar.style.width = scrolled + '%'; });
        const counters = document.querySelectorAll('.trust-number');
        const counterObserver = new IntersectionObserver((entries) => { entries.forEach(entry => { if (entry.isIntersecting) { const counter = entry.target; const target = parseInt(counter.getAttribute('data-count')); let current = 0; const increment = target / 60; const updateCounter = () => { if (current < target) { current += increment; counter.textContent = Math.floor(current) + '+'; setTimeout(updateCounter, 20); } else { counter.textContent = target + '+'; } }; updateCounter(); counterObserver.unobserve(counter); } }); }, { threshold: 0.5 });
        counters.forEach(counter => counterObserver.observe(counter));
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => { btn.addEventListener('click', () => { filterBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); const filter = btn.getAttribute('data-filter'); renderPortfolio(filter); const portfolioSection = document.getElementById('portfolio'); if (portfolioSection) portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' }); }); });
        const cards = document.querySelectorAll('.service-card, .feature-card, .material-item');
        cards.forEach(card => { card.addEventListener('mousemove', (e) => { const rect = card.getBoundingClientRect(); const x = e.clientX - rect.left; const y = e.clientY - rect.top; const centerX = rect.width / 2; const centerY = rect.height / 2; const rotateX = (y - centerY) / 20; const rotateY = (centerX - x) / 20; card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`; }); card.addEventListener('mouseleave', () => { card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)'; }); });
    });
    function openMobileMenu() { const mobileMenu = document.getElementById('mobileMenu'); const menuOverlay = document.getElementById('menuOverlay'); if (mobileMenu) mobileMenu.classList.add('active'); if (menuOverlay) menuOverlay.classList.add('active'); document.body.style.overflow = 'hidden'; }
    function closeMobileMenu() { const mobileMenu = document.getElementById('mobileMenu'); const menuOverlay = document.getElementById('menuOverlay'); if (mobileMenu) mobileMenu.classList.remove('active'); if (menuOverlay) menuOverlay.classList.remove('active'); document.body.style.overflow = ''; }
    const mobileBtn = document.getElementById('mobileMenuBtn'); const closeBtn = document.getElementById('closeMenuBtn'); const overlay = document.getElementById('menuOverlay');
    if (mobileBtn) mobileBtn.addEventListener('click', openMobileMenu); if (closeBtn) closeBtn.addEventListener('click', closeMobileMenu); if (overlay) overlay.addEventListener('click', closeMobileMenu);
    function scrollToSection(sectionId) { const section = document.getElementById(sectionId); if (section) { section.scrollIntoView({ behavior: 'smooth', block: 'start' }); closeMobileMenu(); } }
    function openConsultation() { const modal = document.getElementById('consultationModal'); if (modal) { modal.style.display = 'flex'; document.body.style.overflow = 'hidden'; } }
    function closeConsultation() { const modal = document.getElementById('consultationModal'); if (modal) { modal.style.display = 'none'; document.body.style.overflow = ''; } }
    function handleSubmit(event) { event.preventDefault(); alert('Thank you for reaching out! We will contact you within 24 hours.'); event.target.reset(); }
    function submitConsultation(event) { event.preventDefault(); alert('Consultation scheduled! Our team will call you shortly to confirm.'); closeConsultation(); event.target.reset(); }
    document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(anchor => { anchor.addEventListener('click', function(e) { const href = this.getAttribute('href'); if (href && href.startsWith('#')) { e.preventDefault(); const targetId = href.substring(1); const targetElement = document.getElementById(targetId); if (targetElement) { targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' }); closeMobileMenu(); } } }); });
    window.addEventListener('load', () => { const reveals = document.querySelectorAll('.reveal'); reveals.forEach(reveal => { const rect = reveal.getBoundingClientRect(); if (rect.top < window.innerHeight - 100) reveal.classList.add('active'); }); });
    window.addEventListener('scroll', () => { const heroBg = document.querySelector('.hero-bg'); if (heroBg) { const scrolled = window.pageYOffset; heroBg.style.transform = `translateY(${scrolled * 0.5}px)`; } });
    const allButtons = document.querySelectorAll('.btn'); allButtons.forEach(btn => { btn.addEventListener('click', function(e) { this.style.transform = 'scale(0.98)'; setTimeout(() => { this.style.transform = ''; }, 200); }); });
    console.log('Vidhi Interiors Website Loaded Successfully | WhatsApp button added bottom left with animation');
