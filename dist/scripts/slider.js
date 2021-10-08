// const sliderImages = [
//     "https://wowslider.com/sliders/demo-93/data1/images/landscape.jpg",
//     "https://wowslider.com/sliders/demo-93/data1/images/sunset.jpg",
//     "https://wowslider.com/sliders/demo-93/data1/images/lake.jpg"
// ];

// fillSliderImagesAndDots(sliderImages)
let slideIndex = 1;

const fillSliderImagesAndDots = (data) => {
    const slider = document.querySelector(".slideshow-container");
    const dotList = document.querySelector(".dots");
    const leftRightButtons = slider.innerHTML;
    let elements = "";
    let dots = "";
    data.forEach((item, index) => {
        elements += `   <div class="mySlides fadein">
                            <img src=${item}>
                            <div class="text">#${item.split(/__|\./gm)[1]}</div>
                        </div>`
        dots += `<span class="dot" onclick="currentSlide(${index})"></span>`
    })
    slider.innerHTML = elements + leftRightButtons;
    dotList.innerHTML = dots;

    showSlides(slideIndex);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
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