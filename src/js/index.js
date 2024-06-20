import '../scss/style.scss';
import './buttons';
import './event-handlers';
import './modal';
import {swiperInit, slidesControl} from './swiper-init'
import {linkControl, sideMenu, button, showText, showHideButton, expandButtonListener, checkBurgerExit } from './utils';

swiperInit();
linkControl();
showHideButton();
slidesControl();
expandButtonListener();
checkBurgerExit();

window.addEventListener('resize', function() {
    swiperInit();
    showHideButton(button);
    slidesControl();
    if (window.innerWidth >= 1440 && sideMenu.classList.contains('side-menu--active')) {
        burgerExit.click();
    }
    showText(button[0]);
    linkControl();
    checkBurgerExit();
});