// Intro Animation
document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById('introOverlay');
  const logo = document.getElementById('ektuLogo');
  const welcome = document.getElementById('welcomeText');
  const navbar = document.getElementById('mainNavbar');

  // Анимация появления
  gsap.to(logo, { duration: 1.2, opacity: 1, y: 0, ease: "power3.out" });
  gsap.to(welcome, { duration: 1.2, opacity: 1, delay: 0.5, y: 0, ease: "power3.out" });

  // После небольшой задержки скрываем интро и показываем навбар
  setTimeout(() => {
    overlay.classList.add('hidden');
    navbar.classList.remove('d-none');
  }, 2500);
});

// AOS Initialization
AOS.init({
  duration: window.innerWidth <= 768 ? 800 : 1000,
  once: true,
  easing: 'ease-in-out',
  offset: window.innerWidth <= 768 ? 50 : 120
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Back to Top
const backBtn = document.getElementById('backBtn');
window.addEventListener('scroll', () => {
  backBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
});

backBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Modal data binding
const detailModal = document.getElementById('detailModal');
detailModal.addEventListener('show.bs.modal', event => {
  const btn = event.relatedTarget;
  const modalTitle = detailModal.querySelector('#modalTitle');
  const modalImg = detailModal.querySelector('#modalImg');
  const modalDesc = detailModal.querySelector('#modalDesc');
  modalTitle.textContent = btn.dataset.title;
  modalImg.src = btn.dataset.img;
  modalImg.alt = btn.dataset.title;
  modalDesc.textContent = btn.dataset.desc;
});

// Search filter
document.getElementById('searchExhibits').addEventListener('input', e => {
  const q = e.target.value.toLowerCase();
  document.querySelectorAll('.exhibit-card').forEach(card => {
    const col = card.closest('.col-lg-4');
    const matches = card.dataset.title.toLowerCase().includes(q);
    col.style.display = matches ? '' : 'none';
  });
});

// Dynamic card generation
const exhibitList = document.getElementById('exhibitList');
exhibitList.innerHTML = ''; // Clear existing cards
const exhibits = [
  { title: "Древний горный инструмент", desc: "Инструмент, использовавшийся в горном деле Алтая в древности.", img: "assets/images/Copilot_20250603_204233.jpg" },
  { title: "Геологический образец", desc: "Образец горной породы, демонстрирующий геологическое разнообразие региона.", img: "assets/images/Copilot_20250603_204236.jpg" },
  { title: "Металлургический артефакт", desc: "Артефакт, связанный с историей металлургии Алтая.", img: "assets/images/Copilot_20250603_204244.jpg" }
  // Add more exhibits as needed
];

exhibits.forEach((exhibit, index) => {
  const col = document.createElement('div');
  col.className = 'col-lg-4 col-md-6 col-sm-6 mb-4';
  col.setAttribute('data-aos', 'fade-up');
  col.setAttribute('data-aos-delay', (index % 3) * 100);
  col.innerHTML = `
    <div class="card h-100 exhibit-card" data-title="${exhibit.title}">
      <img src="${exhibit.img}" class="card-img-top d-block mx-auto" alt="${exhibit.title}">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${exhibit.title}</h5>
        <p class="card-text flex-grow-1">${exhibit.desc}</p>
        <button class="btn btn-outline-primary mt-3" data-bs-toggle="modal" data-bs-target="#detailModal" data-title="${exhibit.title}" data-img="${exhibit.img}" data-desc="${exhibit.desc}">Подробнее</button>
      </div>
    </div>
  `;
  exhibitList.appendChild(col);
});

// Particles.js initialization
const particleCount = window.innerWidth <= 768 ? 20 : 50;
particlesJS('particles', {
  particles: {
    number: { value: particleCount, density: { enable: true, value_area: 800 } },
    color: { value: '#00A79D' },
    shape: { type: 'circle' },
    opacity: { value: 0.3, random: true },
    size: { value: 2, random: true },
    line_linked: { enable: false },
    move: { enable: true, speed: 1.5, direction: 'none', random: true }
  },
  interactivity: {
    detect_on: 'canvas',
    events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
    modes: { repulse: { distance: 80, duration: 0.4 } }
  }
});