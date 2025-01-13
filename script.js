
let slideIndex = 1;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.mySlides');
    let dots = document.querySelectorAll('.dot');

    slides.forEach(slide => {
        slide.style.display = 'none';
    });

    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });

 
    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');

    setTimeout(showSlides, 5000);
}

function plusSlides(n) {
    slideIndex += n;
    showSlides();
}

function currentSlide(n) {
    slideIndex = n;
    showSlides();
}
