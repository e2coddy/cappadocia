
let slideIndex = 1;
let nextBtn = document.querySelector('.next-pic');
let backBtn = document.querySelector('.back-pic');

nextBtn.onclick = function nextSlide() {
    showSlides(slideIndex += 1);
};

backBtn.onclick = function previousSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {

    let slides = document.getElementsByClassName("fairy-tail-pic");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }


    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

showSlides(slideIndex);


let tripSlideIndex = 1;
let tripNextBtn = document.querySelector('.trip-next-pic');
let tripBackBtn = document.querySelector('.trip-back-pic');

tripNextBtn.onclick = function nextSlide() {
    tripShowSlides(tripSlideIndex += 1);
};

tripBackBtn.onclick = function previousSlide() {
    tripShowSlides(tripSlideIndex -= 1);
}

function currentSlide(n) {
    tripShowSlides(tripSlideIndex = n);
}

function tripShowSlides(n) {

    let slides = document.getElementsByClassName("trip-pic");

    if (n > slides.length) {
        tripSlideIndex = 1
    }
    if (n < 1) {
        tripSlideIndex = slides.length
    }


    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[tripSlideIndex - 1].style.display = "block";
}
tripShowSlides(tripSlideIndex);