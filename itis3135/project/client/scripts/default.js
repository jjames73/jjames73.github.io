document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const imagesPerPage = 6; // Adjust to 6 images per view

    function showSlides(index) {
        const slides = document.querySelectorAll('.gallery img');
        const totalSlides = slides.length;

        if (index >= Math.ceil(totalSlides / imagesPerPage)) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = Math.ceil(totalSlides / imagesPerPage) - 1;
        } else {
            slideIndex = index;
        }

        slides.forEach((slide, i) => {
            slide.style.display = 'none';
            if (i >= slideIndex * imagesPerPage && i < (slideIndex + 1) * imagesPerPage) {
                slide.style.display = 'block';
            }
        });
    }

    function changeSlide(n) {
        showSlides(slideIndex + n);
    }

    // Initialize the slideshow
    showSlides(slideIndex);
    window.changeSlide = changeSlide; 
});

// EVERYTHING ABOVE IS SLIDES

// EVERYTHING BELOW IS THE CAPTIONS

function showCaption(src, text) {
    document.getElementById('caption-image').src = src;
    document.getElementById('caption-text').innerText = text;
    document.getElementById('myCaption').style.display = 'block';
}

function hideCaption() {
    document.getElementById('myCaption').style.display = 'none';
}

// Close the caption when the user clicks anywhere outside of it
window.onclick = function(event) {
    if (event.target == document.getElementById('myCaption')) {
        hideCaption();
    }
};