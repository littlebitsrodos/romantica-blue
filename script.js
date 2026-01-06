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

function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox?.querySelector('img');
    const lightboxClose = lightbox?.querySelector('.lightbox-close');
    const galleryGrid = document.querySelector('.gallery-grid');

    // Start auto-rotation
    startGalleryRotation();

    // Pause rotation on hover
    if (galleryGrid) {
        galleryGrid.addEventListener('mouseenter', () => {
            stopGalleryRotation();
        });
        galleryGrid.addEventListener('mouseleave', () => {
            startGalleryRotation();
        });
    }

    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (lightboxImg && img) {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
                stopGalleryRotation();
            }
        });
    });

    // Close lightbox
    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}

function startGalleryRotation() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryItems.length === 0) return;

    // Clear existing interval
    stopGalleryRotation();

    // Rotate every 3 seconds
    galleryRotationInterval = setInterval(() => {
        // Remove highlight from current item
        galleryItems.forEach(item => item.classList.remove('gallery-highlight'));

        // Move to next item
        currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;

        // Add highlight to new current item
        galleryItems[currentGalleryIndex].classList.add('gallery-highlight');
    }, 3000);
}

function stopGalleryRotation() {
    if (galleryRotationInterval) {
        clearInterval(galleryRotationInterval);
        galleryRotationInterval = null;
    }
    // Remove all highlights when stopped
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
