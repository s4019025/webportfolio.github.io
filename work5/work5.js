// Work5 Gallery Swiper Initialization
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper for Gallery
    const gallerySwiper = new Swiper('.gallery-swiper-container', {
        // Enable slow but continuous banner roll movement
        effect: 'slide',
        speed: 4000, // Very slow speed for continuous banner roll
        grabCursor: false, // Disable grab cursor

        // No pagination dots for cleaner look
        pagination: false,

        // Continuous auto-play for banner roll effect
        autoplay: {
            delay: 0, // No delay - continuous movement
            disableOnInteraction: false, // Continue even when user interacts
            pauseOnMouseEnter: false, // Don't pause on hover for continuous movement
        },

        // Multiple slides view for banner effect
        slidesPerView: 3,
        spaceBetween: 20,

        // Very slow transitions for banner roll
        transition: 'transform 5s linear',

        // Loop the slides continuously
        loop: true,

        // Keyboard navigation
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },

        // Disable mousewheel navigation
        mousewheel: false,

        // Disable touch and drag functionality
        allowTouchMove: false, // Disable touch/drag
        touchEventsTarget: 'none', // Disable touch events
        touchRatio: 0, // Disable touch ratio
        touchAngle: 0, // Disable touch angle
        grabCursor: false, // Disable grab cursor

        // Performance optimizations for continuous movement
        preloadImages: false,
        lazy: {
            loadPrevNext: true,
            loadPrevNextAmount: 2,
        },

        // Disable unnecessary features that cause lag
        watchSlidesProgress: false,
        watchSlidesVisibility: false,

        // Callbacks for continuous banner roll
        on: {
            init: function () {
                console.log('Work5 Gallery Swiper initialized - Continuous Banner Roll Mode (No Drag)');
            },
            slideChange: function () {
                // Continuous transition effect when slides change
                const activeSlide = this.slides[this.activeIndex];
                if (activeSlide) {
                    activeSlide.style.transition = 'opacity 0.5s ease-in-out';
                }
            },
            slideChangeTransitionStart: function () {
                // Continuous start of transition
                this.wrapperEl.style.transition = 'transform 5s linear';
            }
        }
    });

    // Add smooth hover effects for gallery images
    const galleryImages = document.querySelectorAll('.gallery-image');
    galleryImages.forEach(image => {
        image.addEventListener('mouseenter', function () {
            // Set high z-index for the hovered image
            this.style.zIndex = '9999';
            this.style.transform = 'scale(1.3)';
            this.style.transition = 'transform 0.3s ease-in-out, z-index 0s';

            // Also set z-index for the parent slide
            const parentSlide = this.closest('.swiper-slide');
            if (parentSlide) {
                parentSlide.style.zIndex = '9999';
            }

            // Set z-index for the slide content
            const slideContent = this.closest('.slide-content');
            if (slideContent) {
                slideContent.style.zIndex = '9999';
            }
        });

        image.addEventListener('mouseleave', function () {
            // Reset z-index when not hovering
            this.style.zIndex = '1';
            this.style.transform = 'scale(1)';
            this.style.transition = 'transform 0.3s ease-in-out, z-index 0s';

            // Reset z-index for the parent slide
            const parentSlide = this.closest('.swiper-slide');
            if (parentSlide) {
                parentSlide.style.zIndex = '1';
            }

            // Reset z-index for the slide content
            const slideContent = this.closest('.slide-content');
            if (slideContent) {
                slideContent.style.zIndex = '1';
            }
        });
    });

    // Add smooth page loading animation
    window.addEventListener('load', function () {
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.5s ease-in';

        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 100);
    });

    // Add scroll-based animations for decorative elements
    window.addEventListener('scroll', function () {
        const scrolled = window.pageYOffset;

        // Parallax effect for decorative images
        const decorativeImage1 = document.querySelector('.decorative-image-1');
        const decorativeImage2 = document.querySelector('.decorative-image-2');

        if (decorativeImage1) {
            requestAnimationFrame(() => {
                const speed = scrolled * 0.2;
                decorativeImage1.style.transform = `rotate(149deg) translateY(${speed}px)`;
            });
        }

        if (decorativeImage2) {
            requestAnimationFrame(() => {
                const speed = scrolled * 0.15;
                decorativeImage2.style.transform = `translateY(${speed}px)`;
            });
        }
    });
});
