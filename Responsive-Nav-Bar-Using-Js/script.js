let navLinks = document.getElementById("navLinks");
let menuOpen = document.getElementById("menuOpen");
let menuClosed = document.getElementById("menuClosed");

menuOpen.addEventListener("click", () => {
    navLinks.classList.add("show");
    menuOpen.style.display = "none";
    menuClosed.style.display = "block";
});

menuClosed.addEventListener("click", () => {
    navLinks.classList.remove("show");
    menuOpen.style.display = "block";
    menuClosed.style.display = "none";
});