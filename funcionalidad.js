document.addEventListener('DOMContentLoaded', () => {
  // ----------------------------
  // Menú hamburguesa responsive
  // ----------------------------
  const menuToggle = document.getElementById('menuToggle');
  const navList = document.getElementById('navList');

  menuToggle?.addEventListener('click', () => {
    navList.classList.toggle('active');
  });

  navList?.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navList.classList.remove('active');
    });
  });

  // ----------------------------
  // Toggle descripción servicios
  // ----------------------------
  const servicios = document.querySelectorAll('.servicio-card');
  servicios.forEach(servicio => {
    servicio.addEventListener('click', () => {
      servicio.classList.toggle('activo');
    });
  });

  // ----------------------------
  // Carrusel Hero (slides)
  // ----------------------------
  const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.carousel-prev');
  const nextBtn = document.querySelector('.carousel-next');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  });

  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 5000);

  showSlide(currentIndex);

  // ----------------------------
  // Cambio de estilo en header sticky
  // ----------------------------
  const header = document.querySelector('.main-header');

  function checkScroll() {
    if (window.scrollY > 0) {
      header.classList.add('sticky-rounded');
    } else {
      header.classList.remove('sticky-rounded');
    }
  }

  window.addEventListener('scroll', checkScroll);

  // ----------------------------
  // Carrusel de Servicios (scroll infinito + pausa en hover)
  // ----------------------------
  const carousel = document.getElementById('carouselServicios');
  const wrapper = document.getElementById('serviciosWrapper');

  // Duplicar contenido para efecto de scroll infinito (solo una vez)
  if (wrapper && wrapper.children.length > 0) {
    wrapper.innerHTML += wrapper.innerHTML;
  }

  let scrollSpeed = 2;
  let scrollInterval;

  function startAutoScroll() {
    scrollInterval = setInterval(() => {
      if (carousel.scrollLeft >= wrapper.scrollWidth / 2) {
        carousel.scrollLeft = 0;
      } else {
        carousel.scrollLeft += scrollSpeed;
      }
    }, 16); // ~60 FPS
  }

  function stopAutoScroll() {
    clearInterval(scrollInterval);
  }

  // Iniciar scroll automático
  startAutoScroll();

  // Pausar scroll al hacer hover en cualquier tarjeta
  const servicioCards = document.querySelectorAll('.servicio-card');
  servicioCards.forEach(card => {
    card.addEventListener('mouseenter', stopAutoScroll);
    card.addEventListener('mouseleave', startAutoScroll);
  });
});
