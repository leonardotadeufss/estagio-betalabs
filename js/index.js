let count = 0
let productCount = 0;
const productjump = 350;
const sliderbtn = document.querySelectorAll(".banner-slider-button")
const items = document.querySelector(".product-items")
var screenSize = screen.width;

sliderbtn[count].classList.add('active')
var slider = setInterval(automaticSlider, 3000)

function currentSlide(slide) {
    screenSize = screen.width
    sliderbtn[count / 1440].classList.remove('active')
    count = slide * 1440;
    sliderbtn[count / 1440].classList.add('active')
    document.querySelector(".banner-items").scrollTo(count, 0);
    clearInterval(slider)
    slider = setInterval(automaticSlider, 3000)

}

function automaticSlider() {

    screenSize = screen.width
    count += screenSize;
    var slide = (count / screenSize)
    console.log(count);

    sliderbtn[slide - 1].classList.remove('active')
    if (slide > 2) {
        count = 0
        sliderbtn[count].classList.add('active')
    } else {
        sliderbtn[slide].classList.add('active')
    }
    document.querySelector(".banner-items").scrollTo(count, 0)
}

function moveProductList(side) {
    productCount += side * productjump
    // -3 se refere ao número de elementos que aparecem na tela inicial
    //Número total de elementos - quantidade que aparece na tela inicial
    var elementsOnScreen
    screenSize > 1300 ? elementsOnScreen = 3 : elementsOnScreen = 1;
    if (productCount === (items.childElementCount - elementsOnScreen) * productjump) {
        productCount = 0
    }
    items.scrollTo(productCount, 0)
}

function showFooterInfo(Event){
    if (screenSize < 1300) {
        Event.target.nextElementSibling.classList.toggle('active')
    }
}

function toggleMenuMobile() {
    document.querySelector('.nav-bar').classList.toggle('active')
    document.querySelector('.mobile-menu').classList.toggle('active')
    document.querySelector('.header .logo').classList.toggle('active')
    document.querySelector('#search').classList.toggle('active')
}