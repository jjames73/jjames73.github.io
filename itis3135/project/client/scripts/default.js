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

    // Form submission handling
    document.getElementById('commissionform').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone-number').value;
        const email = document.getElementById('email').value;
        const commissionType = document.querySelector('input[name="commission-type"]:checked').nextSibling.textContent;
        const color = document.querySelector('input[name="color"]:checked').nextSibling.textContent;
        const bodyPart = document.querySelector('input[name="body-part"]:checked').nextSibling.textContent;
        const characters = document.getElementById('characters').value;
        const contactMethod = document.getElementById('contact-method').value;
        const details = document.getElementById('details').value;

        let output = `<h3>Commission Details</h3>`;
        output += `<p><strong>Name:</strong> ${name}</p>`;
        output += `<p><strong>Phone Number:</strong> ${phone}</p>`;
        output += `<p><strong>Email:</strong> ${email}</p>`;
        output += `<p><strong>Commission Type:</strong> ${commissionType}</p>`;
        output += `<p><strong>Color:</strong> ${color}</p>`;
        output += `<p><strong>Body Part:</strong> ${bodyPart}</p>`;
        output += `<p><strong>Number of Characters:</strong> ${characters}</p>`;
        output += `<p><strong>Contact Method:</strong> ${contactMethod}</p>`;
        output += `<p><strong>Details:</strong> ${details}</p>`;
        output += `<p><em>Your request is being reviewed. Please wait 2-3 business days for us to contact you about your inquiry.</em></p>`;

        document.getElementById('formoutput').innerHTML = output;
    });
});
