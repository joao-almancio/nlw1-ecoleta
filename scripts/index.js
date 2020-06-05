const searchColetaButton = document.querySelector('#page-home main a');
const closeModalButton = document.querySelector('#modal .header a');

const modal = document.querySelector("#modal");


searchColetaButton.addEventListener('click', () => {
    modal.classList.remove('hide');
});

closeModalButton.addEventListener('click', () => {
    modal.classList.add('hide');
});