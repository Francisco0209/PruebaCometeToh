//MAPA INTERACTIVO

const coordenadas = [-33.439231, -70.671293];


    const mapa = L.map('Map').setView(coordenadas, 15);


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(mapa);


    L.marker(coordenadas).addTo(mapa)
      .bindPopup('Estamos aquí 📍')
      .openPopup();



//MENU HAMBURGUESA

const menuToggle = document.getElementById('menu-toggle');
  const navbarMenu = document.getElementById('navbar-menu');

  menuToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });