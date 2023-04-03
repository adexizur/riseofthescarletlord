const carouselInner = document.querySelector('.carousel-inner');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-control.prev');
const nextButton = document.querySelector('.carousel-control.next');

let currentIndex = 0;

prevButton.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  carouselInner.style.transform = `translateX(-${currentIndex * carouselItems[0].clientWidth}px)`;
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  carouselInner.style.transform = `translateX(-${currentIndex * carouselItems[0].clientWidth}px)`;
});
