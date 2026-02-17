/* =========================
   Image Carousel
   ========================= */

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    if (!carousel) return; // Exit if no carousel on page
    
    const track = carousel.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = carousel.querySelector('.carousel-button-right');
    const prevButton = carousel.querySelector('.carousel-button-left');
    const dotsNav = carousel.querySelector('.carousel-nav');
    const dots = Array.from(dotsNav.children);
    
    let currentIndex = 0;
    let autoplayInterval;
    const autoplayDelay = 5000; // 5 seconds between slides
    
    // Set initial slide width
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    // Arrange slides next to each other
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);
    
    // Move to target slide
    const moveToSlide = (targetIndex) => {
        const targetSlide = slides[targetIndex];
        track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
        currentIndex = targetIndex;
    };
    
    // Update dots
    const updateDots = (targetIndex) => {
        dots.forEach(dot => dot.classList.remove('current-slide'));
        dots[targetIndex].classList.add('current-slide');
    };
    
    // Move to next/previous slide
    const moveSlides = (direction) => {
        let targetIndex;
        
        if (direction === 'next') {
            targetIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
        } else {
            targetIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
        }
        
        moveToSlide(targetIndex);
        updateDots(targetIndex);
    };
    
    // Autoplay function
    const startAutoplay = () => {
        autoplayInterval = setInterval(() => {
            moveSlides('next');
        }, autoplayDelay);
    };
    
    const stopAutoplay = () => {
        clearInterval(autoplayInterval);
    };
    
    // Button click events
    if (nextButton) {
        nextButton.addEventListener('click', () => {
            stopAutoplay();
            moveSlides('next');
            startAutoplay();
        });
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', () => {
            stopAutoplay();
            moveSlides('prev');
            startAutoplay();
        });
    }
    
    // Dot navigation
    dotsNav.addEventListener('click', (e) => {
        const targetDot = e.target.closest('button');
        if (!targetDot) return;
        
        const targetIndex = dots.findIndex(dot => dot === targetDot);
        stopAutoplay();
        moveToSlide(targetIndex);
        updateDots(targetIndex);
        startAutoplay();
    });
    
    // Pause autoplay on hover
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    
    // Start autoplay
    startAutoplay();
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            const newSlideWidth = slides[0].getBoundingClientRect().width;
            slides.forEach(setSlidePosition);
            moveToSlide(currentIndex);
        }, 250);
    });
});
