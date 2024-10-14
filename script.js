let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    // Sposta lo slider orizzontalmente per mostrare la slide corrente
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Cambia automaticamente ogni 5 secondi
setInterval(() => {
    showSlide(currentSlide + 1);
}, 5000);
