const menuBurger = document.querySelector(".menu-burger")
const mobileMenu = document.querySelector("#menu")

menuBurger.addEventListener("click", () => {
    /* Toggle Burger Menu */
    mobileMenu.classList.toggle('active')
    /* Si le menu est fermé */
    if(menuBurger.querySelector('i').classList.contains('fa-bars')) {
        menuBurger.querySelector('i').classList.remove('fa-bars')
        menuBurger.querySelector('i').classList.add('fa-close')
    } else { /* Si le menu est ouvert */
        menuBurger.querySelector('i').classList.add('fa-bars')
        menuBurger.querySelector('i').classList.remove('fa-close')
    }
})