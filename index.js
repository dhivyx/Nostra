//Offer Bar
var offer = document.getElementById("offerscreen")
var xmark = document.getElementById("xmark")

xmark.addEventListener("click", function () {
    offer.classList.remove("opacity-100", "translate-y-0")
    offer.classList.add("opacity-0", "-translate-y-10")
    setTimeout(() => {
        offer.classList.add("hidden")
    }, 1000)
})



//Sliding Image
var leftslide = document.getElementById("leftslide")
var rightslide = document.getElementById("rightslide")
var slides = document.getElementById("slides")// Where images is present as children

var totalSlides = slides.children.length;// Instead of using array, we can use this it calculates length of the children

let index = 0//This keeps track of the current slide index (starting from 0).Example: First image = index 0, second = 1, third = 2, etc.
leftslide.addEventListener("click", () => {
    index--; // index gets decremented by 1(moves left)
    if (index < 0) {
        index = totalSlides - 1;//Wrap-around logic: if index becomes negative, it loops back to the last slide.Example: if index = -1 → set index = 2 (if 3 slides).
    }
    slides.style.marginLeft = `-${index * 100}vw`// if index is 3 then (3*100) -300vw, margin left helps to slide image to left side
})

rightslide.addEventListener("click", () => {
    index++;
    if (index >= totalSlides) {
        index = 0
    }
    slides.style.marginLeft = `-${index * 100}vw`
})


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



