// navbar
let header = document.querySelector('.left')
let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

// container swipper

var swiper = new Swiper(".coming-conatiner", {
    spaceBetween: 70,
    loop: true,
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        568: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    }
})

// adding function
var minus = document.getElementsByClassName("minus")
var btn = document.getElementById("button")
var plus = document.getElementsByClassName("plus")
for (let i = 0; i < plus.length; i++){
    plus[i].addEventListener('click', ()=>{
        var num = document.getElementById("num");
        num.value = parseInt(num.value) + 1
    })

}
for (let i = 0; i < minus.length; i++){
    minus[i].addEventListener('click', ()=>{
        var num = document.getElementById("num");
        num.value = parseInt(num.value) - 1;
        
    })      
}



