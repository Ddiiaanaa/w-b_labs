let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
const totalSlides = slides.length;
let slideInterval;

// Перемикання меню
function toggleMenu() {
    const menu = document.querySelector('.menu-items');
    menu.classList.toggle('active');
}

// Карусель
function moveSlide(direction) {
    // Зупиняємо автопрокрутку
    clearInterval(slideInterval);

    // Оновлюємо індекс слайду
    currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
    updateCarousel();

    // Поновлюємо автопрокрутку
    startSlideInterval();
}

function goToSlide(index) {
    clearInterval(slideInterval);
    currentSlide = index;
    updateCarousel();
    startSlideInterval();
}

function updateCarousel() {
    // Оновлюємо позицію слайдів
    const offset = -currentSlide * 100;
    document.querySelector('.carousel-slides').style.transform = `translateX(${offset}%)`;

    // Оновлюємо активний слайд та індикатор
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });
    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentSlide);
    });
}

function startSlideInterval() {
    slideInterval = setInterval(() => {
        moveSlide(1);
    }, 3000); // Зміна слайду кожні 3 секунди
}

// Початковий запуск каруселі
updateCarousel();
startSlideInterval();