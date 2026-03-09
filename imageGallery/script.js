let currentIndex = 0;
const images = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

// Open Lightbox
function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightbox.style.display = 'flex';
}

// Close Lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}

// Next/Prev Logic
function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex >= images.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = images.length - 1;
    lightboxImg.src = images[currentIndex].src;
}

// Simple Filter Logic
function filterImages(category) {
    const items = document.querySelectorAll('.gallery-item');
    items.forEach(item => {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Update button active state
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}