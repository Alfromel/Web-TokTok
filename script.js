document.addEventListener('DOMContentLoaded', function() {
  // Inicialización del carrusel de Bootstrap (opcional, ya se activa con data attributes)
  let heroCarousel = document.querySelector('#template-mo-zay-hero-carousel');
  if (heroCarousel) {
    let carousel = new bootstrap.Carousel(heroCarousel, {
      interval: 5000,
      pause: 'hover'
    });
  }

  // Modal de búsqueda
  let searchModal = document.getElementById('templatemo_search');
  let searchToggle = document.querySelector('.nav-icon[data-bs-toggle="modal"]');
  if (searchToggle && searchModal) {
    searchToggle.addEventListener('click', () => {
      let input = searchModal.querySelector('#inputModalSearch');
      setTimeout(() => input.focus(), 200);
    });
  }

  // Validación simple al enviar búsqueda
  let searchForm = document.querySelector('#templatemo_search form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      let query = this.q.value.trim();
      if (!query) {
        e.preventDefault();
        alert('Por favor, ingresa términos para buscar.');
      }
    });
  }

});

