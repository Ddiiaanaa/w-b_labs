let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;
let slideInterval;

function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.classList.toggle('active');
}

function moveSlide(direction) {
    clearInterval(slideInterval);
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();
    startSlideInterval();
}

function goToSlide(index) {
    clearInterval(slideInterval);
    currentSlide = index;
    updateCarousel();
    startSlideInterval();
}

function updateCarousel() {
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function startSlideInterval() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 3000);
}
updateCarousel();
startSlideInterval();
