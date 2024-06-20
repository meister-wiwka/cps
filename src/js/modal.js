const modal = document.querySelector('.modal');
const modalForm = modal.querySelectorAll('.form__elem');
let modalTitle = modal.querySelector('.modal__text');

export function switchModal() {
    if (modal.classList.contains('modal--callback')) {
        modalForm.forEach(element => {
            if ((element.tagName === 'INPUT' && (element.getAttribute('type') === 'text' || element.getAttribute('type') === 'email')) || element.tagName === 'TEXTAREA') {
                element.classList.add('form__elem--hidden');
            }
        });
        modalTitle.textContent = 'Заказать звонок';
    } else {
        modalForm.forEach(element => {
            setTimeout(function() {element.classList.remove('form__elem--hidden');}, 100);
        });
        setTimeout(function() {modalTitle.textContent = 'Обратная связь';}, 100);
    }
}
