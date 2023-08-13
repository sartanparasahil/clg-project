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