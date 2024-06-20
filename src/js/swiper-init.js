import Swiper, { Navigation, Pagination } from '../../node_modules/swiper';
import { button, heightControl } from './utils';

export const swiper = document.querySelectorAll('.swiper');
export const swiperWrapper = document.querySelectorAll('.swiper-wrapper');

let mySwiper = [];

function mobileSwiper(swiper, btn, swiperWrapper) {
    if (window.innerWidth < 768 && swiper.dataset.mobile == 'false') {
        if (swiper.dataset.num == 2) {
            mySwiper[swiper.dataset.num] = new Swiper(swiper, {
                modules: [Navigation, Pagination],
                width: 260,
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        } else {
            mySwiper[swiper.dataset.num] = new Swiper(swiper, {
                modules: [Navigation, Pagination],
                width: 240,
                spaceBetween: 16,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        }
        swiper.dataset.mobile = 'true';
    } else {
        swiper.dataset.mobile = 'false';
        if (swiper.classList.contains('swiper-initialized')) {
            mySwiper[swiper.dataset.num].destroy();
            let i = 0;
            let j = 1;
            while (i < 2 && j < 3) {
                if (btn[j++].classList.contains('expand-button--open')) {
                    swiperWrapper[i++].style.transition = "none";
                }
            }
        }
    }
}

export function slidesControl() {
    let i = 0;
    let j = 1;
    while (i < 2) {
        heightControl(swiperWrapper[i++], button[j++]);
    }
}

export function swiperInit() {
    for (let i = 0; i < 3; i++) {
        mobileSwiper(swiper[i], button, swiperWrapper);
    }
}
