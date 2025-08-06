// Espera a que todo el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {

  // --- Menú hamburguesa y toggle de navegación ---
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');

  menuToggle.addEventListener('click', () => {
    navList.classList.toggle('active'); // Mostrar u ocultar menú en móvil
  });

  // Cerrar menú al hacer clic en un enlace
  navList.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
    });
  });

  // --- Toggle descripción servicios ---
  const servicios = document.querySelectorAll('.servicio-card');

  servicios.forEach(servicio => {
    servicio.addEventListener('click', () => {
      servicio.classList.toggle('activo');
    });
  });

  // --- Carrusel Hero ---
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  // Botones manuales
  nextBtn.addEventListener('click', () => {
    nextSlide();
    resetInterval();
  });

  prevBtn.addEventListener('click', () => {
    prevSlide();
    resetInterval();
  });

  // Autoplay
  function startInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function resetInterval() {
    clearInterval(slideInterval);
    startInterval();
  }

  // Inicializa carrusel
  showSlide(currentIndex);
  startInterval();

  // --- Cambio de estilo header al hacer scroll ---
  const header = document.querySelector('.main-header');

  function checkScroll() {
    if (window.scrollY > 0) {
      header.classList.add('sticky-rounded');
    } else {
      header.classList.remove('sticky-rounded');
    }
  }

  window.addEventListener('scroll', checkScroll);
  checkScroll();

});
