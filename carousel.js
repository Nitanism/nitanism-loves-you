document.addEventListener("DOMContentLoaded", function() {
    const galleryFrame = document.querySelector(".gallery-frame");
    const prevButton = document.querySelector(".prev-button");
    const nextButton = document.querySelector(".next-button");

    let currentIndex = 0;

    function showImage(index) {
        const images = galleryFrame.querySelectorAll("img");
        images.forEach((img, idx) => {
            img.style.display = idx === index ? "block" : "none";
        });
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + galleryFrame.children.length) % galleryFrame.children.length;
        showImage(currentIndex);
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % galleryFrame.children.length;
        showImage(currentIndex);
    }

    prevButton.addEventListener("click", prevImage);
    nextButton.addEventListener("click", nextImage);

    // Show the first image initially
    showImage(currentIndex);
});
