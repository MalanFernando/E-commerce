const menuNav = document.querySelector(".content-nav");
const toggleBtn = document.querySelector(".icon-toggle");

toggleBtn.addEventListener("click", () =>{
    menuNav.classList.toggle("visibility")
})