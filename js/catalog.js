// Слайдер основного товара
const productSlider = document.querySelector('.product-slider');
let currentSlide = 0;
const slides = productSlider.querySelectorAll('img');
const slideCount = slides.length;

function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.style.display = index === n ? 'block' : 'none';
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slideCount;
  showSlide(currentSlide);
}

setInterval(nextSlide, 5000);
showSlide(currentSlide);

// Слайдер похожих товаров
const similarProductsSlider = document.querySelector('.similar-products-slider');
const similarProductsItems = similarProductsSlider.querySelectorAll('div');
const similarProductsItemWidth = similarProductsItems[0].offsetWidth;
const similarProductsItemMargin = 20;

similarProductsSlider.scrollLeft = 0;

similarProductsItems.forEach((item, index) => {
  item.style.marginRight = `${similarProductsItemMargin}px`;
});

similarProductsSlider.addEventListener('scroll', () => {
  const scrollLeft = similarProductsSlider.scrollLeft;
  const scrollWidth = similarProductsSlider.scrollWidth - similarProductsSlider.clientWidth;
  if (scrollLeft >= scrollWidth - 1) {
    similarProductsSlider.scrollLeft = 0;
  }
});