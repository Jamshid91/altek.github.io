let buttons = document.querySelectorAll(".corusel__item button");


let [left, right] = buttons

let reviews = document.querySelectorAll(".corusel__list");
let i = 0;
left.addEventListener("click", moveLeft);
right.addEventListener("click", moveRight);



function moveLeft() {
    if (i == reviews.length - 1) {
        reviews[i].style.display = "none";
        i = 0;
        reviews[i].style.display = "block";
    } else {
        reviews[i].style.display = "none";
        reviews[i + 1].style.display = "block";
        i++
    }
}



function moveRight() {
    if (i == 0) {
        reviews[i].style.display = "none";
        i = reviews.length - 1;
        reviews[reviews.length - 1].style.display = "block";

    } else {
        reviews[i].style.display = "none";
        reviews[i - 1].style.display = "block";
        i--;
    }
}


// setInterval(function () {
//     moveLeft();
// }, 2000)

// ********************************************************************************
// *******************************************************************************



$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    // responsive:{
    //     0:{
    //         items:1
    //     },
    //     600:{
    //         items:3
    //     },
    //     1000:{
    //         items:5
    //     }
    // }
})