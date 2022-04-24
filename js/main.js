const menuNav = document.querySelector(".content-nav");
const toggleBtn = document.querySelector(".icon-toggle");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const  menuNavLinks = document.querySelectorAll(".content-nav>a")


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