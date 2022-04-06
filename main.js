console.log('JS ok');


//Ref
//Mi prendo tutte le a figlie dirette di header-right
const btnMenu = document.querySelector('.header-right > a');
const hamburger = document.querySelector('.hamburger-menu');
const btnClose = document.querySelector('.close');


btnMenu.addEventListener('click', function() {
    hamburger.classList.add('active');
});

btnClose.addEventListener('click', function() {
    hamburger.classList.remove('active');
});



