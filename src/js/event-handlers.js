import { sideMenu, modalContainer, sideMenuContainer, modal, modalExit, burger } from './utils';

export function clickOutsideMenu(e) {
    if (sideMenu.classList.contains('side-menu--active') && e.clientX > getComputedStyle(sideMenuContainer).width.substring(0, getComputedStyle(sideMenuContainer).width.indexOf('px')) && !modal.classList.contains('modal--active')) {
        burger[1].click();
    }
}

export function clickOutsideModal(e) {
    if (modal.classList.contains('modal--active') && e.clientX < window.innerWidth - getComputedStyle(modalContainer).width.substring(0, getComputedStyle(modalContainer).width.indexOf('px'))) {
        modalExit.click();
    }
}

export function keydownControl(e) {
    if (e.code == 'Escape') {
        if (modal.classList.contains('modal--active')) {
            modalExit.click();
        } else if (sideMenu.classList.contains('side-menu--active')) {
            burger[1].click();
        }
    }
}

export function initClickOutsideModal() {
    document.addEventListener('click', clickOutsideModal);
}

export function initClickOutsideMenu() {
    document.addEventListener('click', clickOutsideMenu);
}

document.addEventListener('keydown', keydownControl);
