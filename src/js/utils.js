import { swiperWrapper } from "./swiper-init";

export const button = document.querySelectorAll('.expand-button');
export const burger = document.querySelectorAll('.menu__link--burger');
export const sideMenu = document.querySelector('.side-menu');
export const sideMenuContainer = sideMenu.querySelector('.side-menu__container');
export const burgerExit = sideMenu.querySelector('.menu__item');
export const menuDisabled = document.querySelectorAll('.menu__item--disabled');
export const telButtons = document.querySelectorAll('.menu__link--call');
export const modal = document.querySelector('.modal');
export const modalContainer = document.querySelector('.modal__container');
export const modalExit = modal.querySelector('.menu__link');
export const chatButtons = document.querySelectorAll('.menu__link--chat');
export const text = document.querySelector('.about-company__text');

export function showHideButton() {
    button.forEach((btn, i) => {
        if (i > 0) {
            btn.classList.toggle('expand-button--disabled', window.innerWidth < 768);
        }
    });
}

export function heightControl(swiperWrapper, btn) {
    if (btn.classList.contains('expand-button--open')) {
        swiperWrapper.style.maxHeight = swiperWrapper.scrollHeight + 'px';
    } else {
        swiperWrapper.style.maxHeight = 164 + 'px';
    }
}

export function showText(btn) {
    if (btn.classList.contains('expand-button--open')) {
        text.style.maxHeight = text.scrollHeight + 'px';
    } else {
        if (window.innerWidth < 768) {
            text.style.maxHeight = 90 + 'px';
        }
        if (window.innerWidth >= 768 && window.innerWidth < 1440) {
            text.style.maxHeight = 160 + 'px';
        }
        if (window.innerWidth >= 1440) {
            text.style.maxHeight = 237 + 'px';
        }
    }
}

export function linkControl() {
    if (window.innerWidth >= 768 && window.innerWidth < 1440) {
        menuDisabled.forEach(element => {
            if (element.classList.contains('menu__item--disabled')) {
                element.classList.toggle('menu__item--disabled');
            }
        });
    } else {
        menuDisabled.forEach(element => {
            if (!element.classList.contains('menu__item--disabled')) {
                element.classList.toggle('menu__item--disabled');
            }
        });
    }
}

export function expandButtonListener() {
    for (let i = 0; i < 3; i++) {
        button[i].addEventListener('click', function () {
            let j;
            if (button[i].dataset.num == 2) {
                j = 0;
            } else {
                j = 1;
            }
            if (!button[i].classList.contains('expand-button--open')) {
                button[i].classList.toggle('expand-button--open');
                if (i != 0) {
                    heightControl(swiperWrapper[j], button[i]);
                } else {
                    showText(button[i]);
                }
                button[i].textContent = 'Скрыть';
            } else {
                button[i].classList.toggle('expand-button--open');
                if (i != 0) {
                    heightControl(swiperWrapper[j], button[i]);
                    button[i].textContent = 'Показать все';
                } else {
                    showText(button[i]);
                    button[i].textContent = 'Читать далее';
                }
            }
        });
    }
}

export function checkBurgerExit() {
    if (window.innerWidth >= 1440) {
        burgerExit.classList.add('menu__item--disabled');
    } else {
        burgerExit.classList.remove('menu__item--disabled');
    }
}
