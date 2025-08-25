// Contact form handling
document.addEventListener('DOMContentLoaded', function () {
    // Loading Animation Setup
    const loadingOverlay = document.getElementById('loadingOverlay');

    // Function to show loading animation
    function showLoading() {
        loadingOverlay.classList.add('show');
        document.body.style.overflow = 'hidden'; // Prevent scrolling while loading
    }

    // Function to hide loading animation
    function hideLoading() {
        loadingOverlay.classList.remove('show');
        document.body.style.overflow = ''; // Restore scrolling
    }

    // Add click event listeners to all anchor tags
    const allLinks = document.querySelectorAll('a[href]');
    allLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip if it's a same-page anchor link or external link
            if (href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
                return;
            }

            // Show loading animation
            showLoading();

            // Add a small delay to ensure the loading animation is visible
            setTimeout(() => {
                // Navigate to the new page
                window.location.href = href;
            }, 800); // Show loading for 800ms minimum

            // Prevent default navigation (we'll handle it manually)
            e.preventDefault();
        });
    });

    // Initialize Swiper for Works Gallery
    const worksSwiper = new Swiper('.swiper-container', {
        // Enable smooth sliding with optimized performance
        effect: 'slide',
        speed: 400, // Reduced from 800ms for better responsiveness
        grabCursor: true,

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // Pagination dots
        pagination: false,

        // Auto-play (optional)
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

        // Responsive breakpoints
        breakpoints: {
            320: {
                slidesPerView: 3,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 2, // Changed back to 1 for better performance
                spaceBetween: 30
            },
            1024: {
                slidesPerView: 3, // Changed back to 1 for better performance
                spaceBetween: 40
            }
        },

        // Optimized transitions
        transition: 'transform 0.4s ease-out',

        // Loop the slides
        loop: true,

        // Keyboard navigation
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

        // Disable mousewheel navigation
        mousewheel: false,

        // Touch events - optimized for performance
        touchEventsTarget: 'container',
        touchRatio: 1,
        touchAngle: 45,
        grabCursor: true,

        // Performance optimizations
        preloadImages: false,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 1,
        },

        // Disable unnecessary features that cause lag
        watchSlidesProgress: false,
        watchSlidesVisibility: false,

        // Optimized callbacks - simplified for better performance
        on: {
            init: function () {
                console.log('Swiper initialized');
            },
            slideChange: function () {
                // Simplified transition effect
                const activeSlide = this.slides[this.activeIndex];
                if (activeSlide) {
                    activeSlide.style.transition = 'opacity 0.3s ease-in-out';
                }
            }
        }
    });

    // Add smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-text');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Add a small delay for smooth transition
            setTimeout(() => {
                // The page will navigate naturally
            }, 100);
        });
    });

    // Add hover effects for portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        item.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects for skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach(item => {
        item.addEventListener('click', function () {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
            }, 150);
        });
    });

    // Add smooth hover effects for swiper slides - optimized
    const swiperSlides = document.querySelectorAll('.swiper-slide');
    swiperSlides.forEach(slide => {
        slide.addEventListener('mouseenter', function () {
            this.style.transform = 'scale(1.01)'; // Reduced scale for better performance
            this.style.transition = 'transform 0.2s ease-in-out'; // Faster transition
        });

        slide.addEventListener('mouseleave', function () {
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.2s ease-in-out'; // Faster transition
        });
    });
});

// Add page loading animation
window.addEventListener('load', function () {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease-in';

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll-based animations - optimized
window.addEventListener('scroll', function () {
    const scrolled = window.pageYOffset;

    // Add parallax effect to swiper container - optimized with throttling
    const swiperContainer = document.querySelector('.swiper-container');
    if (swiperContainer) {
        // Use requestAnimationFrame for better performance
        requestAnimationFrame(() => {
            const speed = scrolled * 0.3; // Reduced from 0.5 for smoother effect
            swiperContainer.style.transform = `translateY(${speed}px)`;
        });
    }
});
