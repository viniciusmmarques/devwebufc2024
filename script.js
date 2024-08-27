const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let slideIndex = 0;

function showSlide(n) {
  slides[slideIndex].classList.remove('active');
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
}

// Função para autoplay
function autoplay() {
  showSlide(slideIndex + 1);
}

// Chama a função autoplay a cada 2 segundos
setInterval(autoplay, 4000);

prevButton.addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(slideIndex + 1);
});


