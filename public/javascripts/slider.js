// JavaScript for Image Slider
document.addEventListener('DOMContentLoaded', function () {
    const sliders = document.querySelectorAll('.project-slider');

    sliders.forEach((slider) => {
        const images = slider.querySelectorAll('img');
        let currentIndex = 0;

        function showImage(index) {
            images.forEach((img, i) => {
                if (i === index) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        }

        showImage(currentIndex);

        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }, 7000); // Change image every 3 seconds

        
    });
});
