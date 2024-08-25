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

// Modo not
const toggleDarkModeButton = document.getElementById('toggle-dark-mode');

// Function to toggle between light and dark mode
function toggleDarkMode() {
  const body = document.body;
  const navbar = document.querySelector('.navbar');
  const buttons = document.querySelectorAll('.btn'); // Select all buttons
  const background = document.querySelectorAll('.body')  
  body.classList.toggle('dark-mode'); // Toggle dark mode class on body
  navbar.classList.toggle('bg-dark'); // Toggle navbar background color
  background.classList.toggle('background-color:red;'); 
  buttons.forEach(button => button.classList.toggle('btn-light')); // Toggle button styles
}

toggleDarkModeButton.addEventListener('click', toggleDarkMode);