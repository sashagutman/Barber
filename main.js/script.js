const menuBurger = document.querySelector('.menu__burger');
const menuItem = document.querySelector('.header__menu');
const menuClose = document.querySelector('.menu__close');
const bgFilter = document.querySelector('.bg-filter')

menuBurger.addEventListener('click', ()=>{
       menuItem.classList.toggle('menu__item-open');
       menuBurger.classList.toggle('active');
       bgFilter.classList.toggle('bg-filter-close')
    });

menuClose.addEventListener('click', ()=>{
   menuItem.classList.remove('menu__item-open');
   bgFilter.classList.toggle('bg-filter-close')

})
