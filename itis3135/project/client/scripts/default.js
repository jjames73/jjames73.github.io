document.addEventListener('DOMContentLoaded', function() {
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

    //tag pictures with clickable image to give them a caption
    const images = document.querySelectorAll('.clickable-image');
    images.forEach(function(img) {
        img.addEventListener('click', function() {
            const captionText = this.getAttribute('data-caption');
            showCaption(this.src, captionText);
        });
    });

    //The ability for x to close/hide caption
    document.querySelector('.close').addEventListener('click', hideCaption);
});
