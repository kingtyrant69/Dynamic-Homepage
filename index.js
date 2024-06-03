function openForm() {
    document.getElementById("contactFormPopup").style.display = "block";
}
function closeForm() {
    document.getElementById("contactFormPopup").style.display = "none";
}

document.addEventListener('DOMContentLoaded', function() {
const divs = document.querySelectorAll('.highlightable');
const imageDisplay = document.getElementById('squareImage');
let previousDiv = null;

divs.forEach(div => {
div.addEventListener('click', function() {  
    if (previousDiv) {
        previousDiv.style.backgroundColor="#FAFAFA";
        previousDiv.style.color="black";
    }
    div.style.backgroundColor="#FF3147";
    div.style.color="white";
    const imageSrc = div.getAttribute('data-image');
    imageDisplay.src = imageSrc;
    previousDiv = div;
});
});
});

let currentIndex = 0;

const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const totalSlides = Math.ceil(slide.length / 4); // Calculate total chunks of 4 images
const dots = document.querySelectorAll('.dot');

const activeDotImage = './images/pointer.png';
const inactiveDotImage = './images/dot.png';

document.querySelector('.next').addEventListener('click', () => {
moveToNextSlide();
});

document.querySelector('.prev').addEventListener('click', () => {
moveToPrevSlide();
});

dots.forEach(dot => {
dot.addEventListener('click', (event) => {
currentIndex = parseInt(event.target.getAttribute('data-index'));
updateSlidePosition();
updateDots();
});
});


function updateSlidePosition() {
slides.style.transform = `translateX(${-currentIndex * 100}%)`;
updateDots();   
}

function moveToNextSlide() {
if (currentIndex === totalSlides - 1) {
currentIndex = 0;
} else {
currentIndex++;
}
updateSlidePosition();
}

function moveToPrevSlide() {
if (currentIndex === 0) {
currentIndex = totalSlides - 1;
} else {
currentIndex--;
}
updateSlidePosition();
}
function updateDots() {
dots.forEach(dot => {
dot.src = inactiveDotImage;
});
dots[currentIndex].src = activeDotImage;
}
updateDots();
