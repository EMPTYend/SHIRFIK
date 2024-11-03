document.querySelectorAll('.slider').forEach((n, i) => {
    window[`slider${i + 1}`] = new Swiper(n, {
        freeMode: true,
        centeredSlides: true,
        direction: 'vertical',
        mousewheel: true,
        slidesPerView: 1.75, // Установите количество слайдов, которое вы хотите видеть
        slidesOffsetBefore: -125,
        // Добавьте параметры для адаптивности
        breakpoints: {
            // Если ширина экрана меньше 760px
            760: {
                slidesPerView: 1, // Показываем только один слайд
                slidesOffsetBefore: 0 // Убираем смещение
            }
        }
    });
});
bindSwipers(slider1, slider2, slider3, slider4)

document.querySelectorAll('.has-submenu').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем переход по ссылке
        const submenu = this.nextElementSibling; // Получаем подменю

        // Скрываем все открытые подменю
        document.querySelectorAll('.sub-menu').forEach(sub => {
            if (sub !== submenu) {
                sub.style.display = 'none';
            }
        });

        // Переключаем видимость текущего подменю
        submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
    });
});

const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('nav');

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('active'); // Переключаем класс для навигации
});