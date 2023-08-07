let navlinks = document.getElementById("nav-item");
let menubar = document.getElementById("menu-btn");
let cancel = document.getElementById("cancel-btn");
let navlogo = document.getElementById("nav-link-logo");

const openmenu = () => {
    navlinks.classList.add("active");
    navlogo.classList.add("active");
}
const closemenu = () => {
    navlinks.classList.remove("active");
    navlogo.classList.add("active");
}

menubar.addEventListener("click", openmenu);
cancel.addEventListener("click", closemenu);