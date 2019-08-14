let slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    let dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
let input = document.querySelector(".input");
let button = document.querySelector(".btn");
let modal = document.getElementById("my_modal");
let span = document.getElementsByClassName("close_modal_window")[0];
let inner = document.querySelector(".inner");

button.addEventListener("click", function () {
    if (input.value && !isNaN(input.value)){
        modal.style.display = "block";
        inner.innerText = "Сообщение отправлено";
    } else {
        modal.style.display = "block";
        inner.innerText = "Введите корректные данные";
    }
});

span.addEventListener("click", function () {
    modal.style.display = "none";
});

window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

