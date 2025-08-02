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


// Search Box
var container = document.getElementById("container")
var search = document.getElementById("search")
var searchicon = document.getElementById("searchicon")
var productlist = container.querySelectorAll("div")


searchicon.addEventListener("click", () => {

    var enteredvalue = search.value.toUpperCase()


    for (let count = 0; count < productlist.length; count = count + 1) {

        var productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }

    }
})


//Checked List

var occasion = document.getElementById("occasion")
var checkboxes = occasion.querySelectorAll("input[type='checkbox']")
var container = document.getElementById("container")
var productlist = container.querySelectorAll("div")



checkboxes.forEach((checkbox) => {// looping for each checkbox
    checkbox.addEventListener("change", function () {//change- triggers any action i.e [check/uncheck]
        let selectedvalues = [] //let the array be empty

        checkboxes.forEach((cb) => { //loops again to check which ones are selected
            if (cb.checked) { //if cb is checked
                selectedvalues.push(cb.value) // pushes values(Given in checkbox as value ) to the array
            }
        })
        console.log(selectedvalues) //debugging purpose
        productlist.forEach((product) => { //productlist has div, now selecting each of the div
            var products = product.querySelector("h1").textContent.trim();//in each div selecting the h1 that contains the keyword & trim - removes whitespace


            if (selectedvalues.length === 0 || products.includes(selectedvalues)) { // The selected values===0 because , it checks whether the checkbox is unchecked i.e selectedvalues store zero length & Products such as "Floral summer shirt, Summer Denim" includes selectedvalues like"Summer, Party"
                product.style.display = "block"
            }
            else {
                product.style.display = "none"
            }
        })


    })
})







