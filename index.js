
/*for modal function*/
var modal = document.getElementById("myModal");

var img = document.getElementById("myImg");
img.onclick = function () {
    modal.style.display = "block";

}


var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}



/* For carousel funciton */
const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector('[data-slides]')

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0


        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })

})

/* add cart to modal */
var addItemId = 0;
function addToCart(item) {
    addItemId += 1;
    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');
    selectedItem.setAttribute('id', addItemId);
    var img = document.createElement('img');
    img.setAttribute('src', item.children[0].currentSrc);
    var cartItems = document.getElementsById('title');
    selectedItem.append();
    cartItems.append(selectedItem);



}
