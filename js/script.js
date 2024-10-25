/* Selection of the burger menu */
const burger = document.querySelector(".menu-burger");
const navMenuMobile = document.querySelector(".navbar-menu-mobile");

/* AddEventListener on click to toggle the display of the links inside the menu */
burger.addEventListener('click', () => {
    navMenuMobile.classList.toggle('active');  
    burger.classList.toggle('open');
})