// Инициализация AOS для анимаций
AOS.init({
    duration: 1000,
    once: true, // Анимации проигрываются только один раз
});

// Плавная прокрутка для ссылок в навигации
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Кнопка "Наверх" (опционально)
const backToTop = document.createElement('button');
backToTop.textContent = '↑';
backToTop.className = 'btn btn-primary back-to-top';
document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Стили для кнопки "Наверх" добавлены в style.css