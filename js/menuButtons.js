const menuNav = document.querySelector(".content-nav");
const toggleBtn = document.querySelector(".icon-toggle");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const menuNavLinks = document.querySelectorAll(".content-nav>a")
const cartActiveBtn = document.querySelector(".btn-cart_active");
const closeModalBtn = document.querySelector(".cart-icon-close")
const modalShow = document.querySelector(".modal-card")

// funcionalidad de botones
toggleBtn.addEventListener("click", () =>{
    menuNav.classList.toggle("visibility")
    openBtn.classList.toggle("hidden-btn")
    closeBtn.classList.toggle("display-btn")
})

menuNavLinks.forEach(menuNavLinks =>{
    menuNavLinks.addEventListener("click", () =>{
        menuNav.classList.remove("visibility")
        openBtn.classList.toggle("hidden-btn")
        closeBtn.classList.toggle("display-btn")
    })
})

cartActiveBtn.addEventListener("click", () =>{
    modalShow.classList.toggle("modal-show")
})
closeModalBtn.addEventListener("click", () =>{
    modalShow.classList.toggle("modal-show")
})