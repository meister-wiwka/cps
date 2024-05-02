// Выбираем элементы DOM
const swiper = document.querySelector('.swiper[data-num="0"]'); // Выбираем свайпер
const swiperWrapper = document.querySelector('.swiper-wrapper[data-list="2"]'); // Выбираем обёртку для слайдов
const button = document.querySelector('.expand-button[data-num="2"]'); // Выбираем кнопку "Показать все"

// Функция для контроля высоты обёртки слайдера
function heightControl(swiperWrapper, btn) {
    if (btn.classList.contains('expand-button--open')) {
        swiperWrapper.style.maxHeight = swiperWrapper.scrollHeight + 'px'; // Раскрываем обёртку слайдера
    } else {
        swiperWrapper.style.maxHeight = '164px'; // Сворачиваем обёртку слайдера
    }
}

// Обработчик события для кнопки "Показать все"
function expandButtonListener() {
    button.addEventListener('click', function () {
        if (!button.classList.contains('expand-button--open')) {
            button.classList.add('expand-button--open'); // Добавляем класс "expand-button--open"
            heightControl(swiperWrapper, button); // Вызываем функцию для контроля высоты
            button.textContent = 'Скрыть'; // Меняем текст кнопки на "Скрыть"
        } else {
            button.classList.remove('expand-button--open'); // Удаляем класс "expand-button--open"
            heightControl(swiperWrapper, button); // Вызываем функцию для контроля высоты
            button.textContent = 'Показать все'; // Меняем текст кнопки на "Показать все"
        }
    });
}

// Инициализация свайпера
function swiperInit() {
    mobileSwiper(swiper, button, swiperWrapper); // Запускаем функцию для адаптации свайпера
}

// Функция для адаптации свайпера
function mobileSwiper(swiper, btn, swiperWrapper) {
    if (window.innerWidth < 768 && swiper.dataset.mobile == 'false') {
        // Инициализируем новый свайпер для мобильного разрешения
        const mySwiper = new Swiper(swiper, {
            width: 260, // Устанавливаем ширину слайда
            spaceBetween: 16, // Устанавливаем расстояние между слайдами
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
        swiper.dataset.mobile = 'true';
    } else {
        swiper.dataset.mobile = 'false';
    }
}

// Функция для контроля высоты слайдера при загрузке страницы
function slidesControl() {
    heightControl(swiperWrapper, button);
}

// Функция для показа/скрытия кнопки "Показать все" в зависимости от ширины экрана
function showHideButton(btn) {
    btn.classList.toggle('expand-button--disabled', window.innerWidth < 768);
}

// Инициализация свайпера и кнопки "Показать все"
swiperInit();
showHideButton(button);
slidesControl();
expandButtonListener();

// Обработчик события изменения размеров окна
window.addEventListener('resize', function () {
    swiperInit();
    showHideButton(button);
    slidesControl();
});
