/* 
const menuBurger = document.querySelector(".menu-burger")
const mobileMenu = document.querySelector("#menu")

menuBurger.addEventListener("click", () => {

    mobileMenu.classList.toggle('active')

    if(menuBurger.querySelector('i').classList.contains('fa-bars')) {
        menuBurger.querySelector('i').classList.remove('fa-bars')
        menuBurger.querySelector('i').classList.add('fa-close')
    } else { 
        menuBurger.querySelector('i').classList.add('fa-bars')
        menuBurger.querySelector('i').classList.remove('fa-close')
    }
}) */

const burger = document.querySelector(".menu-burger");
const navLinks = document.querySelector(".navbar-menu");

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
})