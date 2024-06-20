import { switchModal } from './modal';
import { initClickOutsideModal, initClickOutsideMenu, clickOutsideMenu, clickOutsideModal } from './event-handlers';
import { sideMenu, modal, modalExit, burger, chatButtons, telButtons } from './utils';

function buttonsControl(btn) {
    return function (e) {
        e.preventDefault();
        if (btn.classList.contains('menu__link--burger')) {
            sideMenu.classList.toggle('side-menu--active');
        }
        if (btn.classList.contains('menu__link--call')) {
            if (!modal.classList.contains('modal--active')) {
                modal.classList.toggle('modal--active');
            }
            modal.classList.toggle('modal--callback');
            switchModal();
        }
        if (btn.classList.contains('menu__link--chat')) {
            if (modal.classList.contains('modal--active')) {
                modal.classList.toggle('modal--callback');
                switchModal();
            } else {
                modal.classList.toggle('modal--active');
            }
        }
        if (btn === modalExit) {
            if (modal.classList.contains('modal--callback')) {
                modal.classList.toggle('modal--callback');
                switchModal();
            }
            modal.classList.toggle('modal--active');
        }
        if (sideMenu.classList.contains('side-menu--active')) {
            setTimeout(initClickOutsideMenu, 500);
        } 
        if (!sideMenu.classList.contains('side-menu--active')) {
            document.removeEventListener('click', clickOutsideMenu);
        }
        if (modal.classList.contains('modal--active')) {
            setTimeout(initClickOutsideModal, 500);
        }
        if (!modal.classList.contains('modal--active')) {
            document.removeEventListener('click', clickOutsideModal);
        }
    }
}

burger.forEach(element => {
    element.addEventListener('click', buttonsControl(element));
});

chatButtons.forEach(element => {
    element.addEventListener('click', buttonsControl(element));
});

telButtons.forEach(element => {
    element.addEventListener('click', buttonsControl(element));
});

modalExit.addEventListener('click', buttonsControl(modalExit));
