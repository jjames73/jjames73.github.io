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
    window.changeSlide = changeSlide; // Make changeSlide accessible in the global scope

    // Function to show caption with image and text
    function showCaption(src, text) {
        document.getElementById('caption-image').src = src;
        document.getElementById('caption-text').innerText = text;
        document.getElementById('my-caption').style.display = 'block';
    }

    // Function to hide caption
    function hideCaption() {
        document.getElementById('my-caption').style.display = 'none';
    }

    // Close caption when user clicks outside of it
    window.onclick = function(event) {
        if (event.target === document.getElementById('my-caption')) {
            hideCaption();
        }
    };

    // Tag pictures with clickable image to give them a caption
    const images = document.querySelectorAll('.clickable-image');
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            const captionText = this.getAttribute('data-caption');
            showCaption(this.src, captionText);
        });
    });

    // The ability for x to close/hide caption
    document.querySelector('.close').addEventListener('click', hideCaption);

    // Event listeners for slide buttons
    document.querySelector('.prev').addEventListener('click', function() {
        changeSlide(-1);
    });
    document.querySelector('.next').addEventListener('click', function() {
        changeSlide(1);
    });
});
