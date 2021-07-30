const items = document.querySelector(".product-items")
var screenSize = screen.width;
const productjump = 350;
let productCount = 0;
let qtdcount = 1;

document.querySelector("#input-quantidade").value = qtdcount;


function changeGalleryImg(smallImage) {
    const fullImage = document.querySelector("#fullImage")
    fullImage.src = smallImage.src;
}

function moveProductList(side) {
    screenSize = screen.width
    productCount += side * productjump
    //Número total de elementos - quantidade que aparece na tela inicial
    var elementsOnScreen
    screenSize > 1300 ? elementsOnScreen = 3 : elementsOnScreen = 1;
    if (productCount === (items.childElementCount - elementsOnScreen) * productjump) {
        productCount = 0
    }
    items.scrollTo(productCount, 0)
}

function changeQuantity(event) {
    event.preventDefault()
    qtdcount += Number(event.target.value);
    document.querySelector("#input-quantidade").value = qtdcount;
}

function toggleMenuMobile() {
    document.querySelector('.nav-bar').classList.toggle('active')
    document.querySelector('.mobile-menu').classList.toggle('active')
    document.querySelector('.header .logo').classList.toggle('active')
    document.querySelector('#search').classList.toggle('active')
}

function showFooterInfo(Event){
    if (screenSize < 1300) {
        Event.target.nextElementSibling.classList.toggle('active')
    }
}