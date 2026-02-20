document.addEventListener('DOMContentLoaded', () => {

    const themeBtn = document.getElementById('theme-btn');
    const heroTitle = document.querySelector('h1');
    const logoImg = document.querySelector('.logo img');
    const subscribeForm = document.getElementById('subscribe-form');
    const mainBtn = document.querySelector('.hero .btn-white');
    const navLinks = document.querySelectorAll('nav a, .footer-links a');
    const socialIcons = document.querySelectorAll('.socials a');

    // 1. Изменение темы и textContent
    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('burgundy-mode');
            themeBtn.textContent = document.body.classList.contains('burgundy-mode') ? '🍷' : '🌓';
        });
    }

 

    // 3. Реакция на ввод (событие Keydown/Input)
    window.addEventListener('keydown', () => {
        if (logoImg) {
            logoImg.style.filter = 'invert(18%) sepia(51%) saturate(2334%) hue-rotate(323deg)';
            setTimeout(() => logoImg.style.filter = '', 300);
        }
    });

    // 4. Обработка формы (событие Submit)
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Форма отправлена!');
        });
    }

    // 5. Плавная навигация (ScrollIntoView)
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 6. Эффект наведения (Mouseover/Mouseout)
    if (mainBtn) {
        mainBtn.addEventListener('mouseover', () => {
            mainBtn.style.boxShadow = '0 0 20px rgba(255, 255, 255, 0.6)';
        });
        mainBtn.addEventListener('mouseout', () => {
            mainBtn.style.boxShadow = 'none';
        });
    }

    // 7. Визуальный клик соцсетей (Events)
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            icon.style.opacity = '0.3';
            setTimeout(() => icon.style.opacity = '1', 200);
        });
    });

});