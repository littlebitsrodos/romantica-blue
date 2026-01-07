// =====================================================
// ROMANTICA BLUE — Main JavaScript
// Language switcher, calendar, gallery lightbox, forms
// =====================================================

// ----- State Management -----
let currentLang = 'en';
let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let bookedDates = []; // Will be populated from iCal

// ----- Initialize on DOM Load -----
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initNavigation();
    initGallery();
    initCalendar();
    initContactForm();
    initScrollAnimations();

    // Set initial language
    setLanguage('en');
});

// ----- Language Switcher -----
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            setLanguage(lang);

            // Update active state
            langButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
}

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(el => {
        const keys = el.dataset.translate.split('.');
        let value = t;
        for (const key of keys) {
            value = value?.[key];
        }
        if (value) {
            el.textContent = value;
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-translate-placeholder]').forEach(el => {
        const keys = el.dataset.translatePlaceholder.split('.');
        let value = t;
        for (const key of keys) {
            value = value?.[key];
        }
        if (value) {
            el.placeholder = value;
        }
    });

    // Update HTML lang attribute
    document.documentElement.lang = lang === 'el' ? 'el' : lang;

    // Refresh calendar with new language
    renderCalendar();
}

// ----- Navigation -----
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                navLinks?.classList.remove('active');
            }
        });
    });
}

// ----- Gallery Lightbox & Carousel -----
let galleryRotationInterval = null;
let currentGalleryIndex = 0;
let currentLightboxIndex = 0;
let galleryImages = [];
let touchStartX = 0;
let touchEndX = 0;

function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox?.querySelector('img');
    const lightboxClose = lightbox?.querySelector('.lightbox-close');
    const lightboxPrev = lightbox?.querySelector('.lightbox-prev');
    const lightboxNext = lightbox?.querySelector('.lightbox-next');
    const galleryGrid = document.querySelector('.gallery-grid');

    // Collect all gallery images
    galleryImages = Array.from(galleryItems).map(item => ({
        src: item.querySelector('img')?.src,
        alt: item.querySelector('img')?.alt
    }));

    // Initialize mobile carousel
    initMobileCarousel();

    // Start auto-rotation on desktop
    startGalleryRotation();

    // Pause rotation on hover (desktop)
    if (galleryGrid) {
        galleryGrid.addEventListener('mouseenter', () => stopGalleryRotation());
        galleryGrid.addEventListener('mouseleave', () => startGalleryRotation());
    }

    // Desktop grid click handlers
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => openLightbox(index));
    });

    // Lightbox controls
    if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
    if (lightboxPrev) lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
    if (lightboxNext) lightboxNext.addEventListener('click', () => navigateLightbox(1));

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        // Touch gestures for lightbox
        lightbox.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        lightbox.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleLightboxSwipe();
        }, { passive: true });
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        const lightbox = document.querySelector('.lightbox');
        if (!lightbox?.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });

    // Click on lightbox image to navigate (left half = prev, right half = next)
    if (lightboxImg) {
        lightboxImg.style.cursor = 'pointer';
        lightboxImg.addEventListener('click', (e) => {
            const rect = lightboxImg.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const imageWidth = rect.width;

            // Click on left third = previous, right two-thirds = next
            if (clickX < imageWidth / 3) {
                navigateLightbox(-1);
            } else {
                navigateLightbox(1);
            }
        });
    }
}

function initMobileCarousel() {
    const carousel = document.querySelector('.gallery-carousel');
    const track = carousel?.querySelector('.carousel-track');
    const slides = carousel?.querySelectorAll('.carousel-slide');
    const prevBtn = carousel?.querySelector('.carousel-prev');
    const nextBtn = carousel?.querySelector('.carousel-next');
    const dotsContainer = carousel?.querySelector('.carousel-dots');

    if (!carousel || !slides?.length) return;

    let carouselIndex = 0;
    let autoSlideInterval = null;

    // Create dots
    slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer?.appendChild(dot);
    });

    function goToSlide(index) {
        carouselIndex = index;
        if (carouselIndex < 0) carouselIndex = slides.length - 1;
        if (carouselIndex >= slides.length) carouselIndex = 0;

        track.style.transform = `translateX(-${carouselIndex * 100}%)`;

        // Update dots
        dotsContainer?.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === carouselIndex);
        });
    }

    function nextSlide() {
        goToSlide(carouselIndex + 1);
    }

    function prevSlide() {
        goToSlide(carouselIndex - 1);
    }

    // Button handlers
    prevBtn?.addEventListener('click', prevSlide);
    nextBtn?.addEventListener('click', nextSlide);

    // Touch/swipe support
    let carouselTouchStartX = 0;

    track?.addEventListener('touchstart', (e) => {
        carouselTouchStartX = e.changedTouches[0].screenX;
        stopAutoSlide();
    }, { passive: true });

    track?.addEventListener('touchend', (e) => {
        const touchEndX = e.changedTouches[0].screenX;
        const diff = carouselTouchStartX - touchEndX;

        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
        }
        startAutoSlide();
    }, { passive: true });

    // Auto-slide
    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(nextSlide, 4000);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
    }

    // Click to open lightbox from carousel
    slides.forEach((slide, index) => {
        slide.addEventListener('click', () => openLightbox(index));
    });

    startAutoSlide();
}

function openLightbox(index) {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox?.querySelector('img');
    const counterCurrent = lightbox?.querySelector('.lightbox-counter .current');
    const counterTotal = lightbox?.querySelector('.lightbox-counter .total');

    if (!lightbox || !lightboxImg || !galleryImages[index]) return;

    currentLightboxIndex = index;
    lightboxImg.src = galleryImages[index].src;
    lightboxImg.alt = galleryImages[index].alt;

    if (counterCurrent) counterCurrent.textContent = index + 1;
    if (counterTotal) counterTotal.textContent = galleryImages.length;

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
    stopGalleryRotation();
}

function navigateLightbox(direction) {
    currentLightboxIndex += direction;
    if (currentLightboxIndex < 0) currentLightboxIndex = galleryImages.length - 1;
    if (currentLightboxIndex >= galleryImages.length) currentLightboxIndex = 0;

    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox?.querySelector('img');
    const counterCurrent = lightbox?.querySelector('.lightbox-counter .current');

    if (lightboxImg && galleryImages[currentLightboxIndex]) {
        lightboxImg.src = galleryImages[currentLightboxIndex].src;
        lightboxImg.alt = galleryImages[currentLightboxIndex].alt;
    }
    if (counterCurrent) counterCurrent.textContent = currentLightboxIndex + 1;
}

function handleLightboxSwipe() {
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 50) {
        if (diff > 0) navigateLightbox(1);
        else navigateLightbox(-1);
    }
}

function startGalleryRotation() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length === 0) return;

    stopGalleryRotation();

    galleryRotationInterval = setInterval(() => {
        galleryItems.forEach(item => item.classList.remove('gallery-highlight'));
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
        galleryItems[currentGalleryIndex].classList.add('gallery-highlight');
    }, 3000);
}

function stopGalleryRotation() {
    if (galleryRotationInterval) {
        clearInterval(galleryRotationInterval);
        galleryRotationInterval = null;
    }
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.classList.remove('gallery-highlight');
    });
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    if (lightbox) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        startGalleryRotation();
    }
}

// ----- Calendar -----
function initCalendar() {
    // Load booked dates (can be replaced with iCal fetch)
    loadBookedDates();

    // Navigation buttons
    const prevBtn = document.querySelector('.calendar-prev');
    const nextBtn = document.querySelector('.calendar-next');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            currentMonth--;
            if (currentMonth < 0) {
                currentMonth = 11;
                currentYear--;
            }
            renderCalendar();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentMonth++;
            if (currentMonth > 11) {
                currentMonth = 0;
                currentYear++;
            }
            renderCalendar();
        });
    }

    renderCalendar();
}

function loadBookedDates() {
    // Sample booked dates for demo
    // In production, this would fetch from iCal URLs
    const today = new Date();

    // Generate some sample booked dates
    bookedDates = [
        // Sample bookings - next 2 weeks
        formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 3)),
        formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 4)),
        formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 5)),
        formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 6)),
        formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)),
        // Another booking
        formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 15)),
        formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 16)),
        formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 17)),
        formatDate(new Date(today.getFullYear(), today.getMonth(), today.getDate() + 18)),
    ];
}

// Fetch and parse iCal data (for future integration)
async function fetchICalData(url) {
    try {
        // Note: This requires a CORS proxy in production
        const response = await fetch(url);
        const data = await response.text();
        return parseICalData(data);
    } catch (error) {
        console.error('Error fetching iCal data:', error);
        return [];
    }
}

function parseICalData(icalData) {
    const dates = [];
    const lines = icalData.split('\n');
    let inEvent = false;
    let startDate = null;
    let endDate = null;

    for (const line of lines) {
        if (line.startsWith('BEGIN:VEVENT')) {
            inEvent = true;
        } else if (line.startsWith('END:VEVENT')) {
            if (startDate && endDate) {
                // Add all dates between start and end
                let current = new Date(startDate);
                const end = new Date(endDate);
                while (current < end) {
                    dates.push(formatDate(current));
                    current.setDate(current.getDate() + 1);
                }
            }
            inEvent = false;
            startDate = null;
            endDate = null;
        } else if (inEvent) {
            if (line.startsWith('DTSTART')) {
                const match = line.match(/(\d{4})(\d{2})(\d{2})/);
                if (match) {
                    startDate = `${match[1]}-${match[2]}-${match[3]}`;
                }
            } else if (line.startsWith('DTEND')) {
                const match = line.match(/(\d{4})(\d{2})(\d{2})/);
                if (match) {
                    endDate = `${match[1]}-${match[2]}-${match[3]}`;
                }
            }
        }
    }

    return dates;
}

function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function renderCalendar() {
    const calendarEl = document.querySelector('.calendar');
    const monthDisplay = document.querySelector('.calendar-month');

    if (!calendarEl) return;

    const t = translations[currentLang].calendar;

    // Update month display
    if (monthDisplay) {
        monthDisplay.textContent = `${t.months[currentMonth]} ${currentYear}`;
    }

    // Clear existing days
    calendarEl.innerHTML = '';

    // Add day headers
    t.days.forEach(day => {
        const header = document.createElement('div');
        header.className = 'calendar-header';
        header.textContent = day;
        calendarEl.appendChild(header);
    });

    // Get first day of month and total days
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    const today = new Date();

    // Add empty cells for days before first day
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement('div');
        empty.className = 'calendar-day empty';
        calendarEl.appendChild(empty);
    }

    // Add days
    for (let day = 1; day <= daysInMonth; day++) {
        const dateStr = formatDate(new Date(currentYear, currentMonth, day));
        const dayEl = document.createElement('div');
        dayEl.className = 'calendar-day';
        dayEl.textContent = day;

        const dateObj = new Date(currentYear, currentMonth, day);
        const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());

        if (isPast) {
            dayEl.classList.add('booked');
        } else if (bookedDates.includes(dateStr)) {
            dayEl.classList.add('booked');
        } else {
            dayEl.classList.add('available');
        }

        calendarEl.appendChild(dayEl);
    }
}

// ----- Contact Form -----
function initContactForm() {
    const form = document.querySelector('.contact-form form');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // Basic validation
            if (!data.name || !data.email || !data.message) {
                showFormMessage('Please fill in all required fields.', 'error');
                return;
            }

            if (!isValidEmail(data.email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                return;
            }

            // Success (in production, send to server)
            console.log('Form submitted:', data);
            showFormMessage('Thank you! We\'ll get back to you soon.', 'success');
            form.reset();
        });
    }
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showFormMessage(message, type) {
    // Remove existing message
    const existing = document.querySelector('.form-message');
    if (existing) existing.remove();

    // Create message element
    const messageEl = document.createElement('div');
    messageEl.className = `form-message ${type}`;
    messageEl.textContent = message;
    messageEl.style.cssText = `
    padding: 1rem;
    margin-top: 1rem;
    border-radius: 8px;
    text-align: center;
    ${type === 'success'
            ? 'background: #d4edda; color: #155724;'
            : 'background: #f8d7da; color: #721c24;'}
  `;

    const form = document.querySelector('.contact-form form');
    form.appendChild(messageEl);

    // Remove after 5 seconds
    setTimeout(() => {
        messageEl.remove();
    }, 5000);
}

// ----- Scroll Animations -----
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section, .amenity-card, .bedroom-card').forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ----- iCal Integration (placeholder for user's URLs) -----
// To integrate with Airbnb and Booking.com:
// 1. Get your iCal export URLs from each platform
// 2. Use a CORS proxy or backend service to fetch the data
// 3. Call fetchICalData() with each URL
// 4. Merge the results into bookedDates array

/*
Example usage:
async function loadAllBookings() {
  const airbnbUrl = 'YOUR_AIRBNB_ICAL_URL';
  const bookingUrl = 'YOUR_BOOKING_ICAL_URL';
  
  const [airbnbDates, bookingDates] = await Promise.all([
    fetchICalData(airbnbUrl),
    fetchICalData(bookingUrl)
  ]);
  
  bookedDates = [...new Set([...airbnbDates, ...bookingDates])];
  renderCalendar();
}
*/
