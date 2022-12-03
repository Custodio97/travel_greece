const $toggle = document.querySelector(".toggle")
const $navbar = document.querySelector("nav ul")

$toggle.addEventListener("click", () => {
    $navbar.classList.toggle("active")
})