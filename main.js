const menu_icon = document.querySelector(`.fa-bars`);

const menu_card = document.querySelector(`.fa-times`);

const menu = document.querySelector(`.hamburger-menu`);



menu_icon.addEventListener(`click`, function(){
    menu.classList.toggle(`active`);

})

menu_card.addEventListener(`click`, function(){
    menu.classList.toggle(`active`);

})


