document.addEventListener('DOMContentLoaded', function() {
    // Function to show caption with image and text
    function showCaption(src, text) {
        document.getElementById('caption-image').src = src;
        document.getElementById('caption-text').innerText = text;
        document.getElementById('myCaption').style.display = 'block';
    }

    // Function to hide caption
    function hideCaption() {
        document.getElementById('myCaption').style.display = 'none';
    }

    // Close caption when user clicks outside of it
    window.onclick = function(event) {
        if (event.target === document.getElementById('myCaption')) {
            hideCaption();
        }
    };

    // Add event listeners to images with class "clickable-image"
    const images = document.querySelectorAll('.clickable-image');
    images.forEach(img => {
        img.addEventListener('click', function() {
            const captionText = this.getAttribute('data-caption');
            showCaption(this.src, captionText);
        });
    });

    // Add event listener to close button
    document.querySelector('.close').addEventListener('click', hideCaption);
});

