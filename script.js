let navlinks = document.getElementById("nav-item");
let menubar = document.getElementById("menu-btn");
let cancel = document.getElementById("cancel-btn");

const openmenu = () => {
    navlinks.classList.add("active");

}
const closemenu = () => {
    navlinks.classList.remove("active");

}
menubar.addEventListener("click", openmenu);
cancel.addEventListener("click", closemenu);

//sticky navbar
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
    if (scrollY > 20) {
        nav.style.background = "rgba(0, 0, 0, 0.9)";
        nav.style.boxShadow = " 3px 2px 5px rgb(245, 245, 244, 0.2)";
    }
    else {
        nav.style.background = "none";
        nav.style.boxShadow = "none";
    }
})