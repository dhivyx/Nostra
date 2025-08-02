//Nav bar slide
var navbar = document.getElementById("navbar")
var xbar = document.getElementById("xbar")
var navbarslide = document.getElementById("navbarslide")


navbar.addEventListener("click", () => {
    navbarslide.style.right = 0;

})

xbar.addEventListener("click", () => {
    navbarslide.style.right = "-40%"
})
