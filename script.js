let currentIndex = 0 ;
const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

function changeImage(direction) {
    if (direction === 'next') {
        currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    }
    document.getElementById('AdelleImage').src = images[currentIndex];
}