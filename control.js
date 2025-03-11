let rangePrice = document.querySelector('input[type="range"].filter-price__slider');
console.log(rangePrice)
rangePrice.style.setProperty('--value', rangePrice.value);
rangePrice.style.setProperty('--min', rangePrice.min == '' ? '0' : rangePrice.min);
rangePrice.style.setProperty('--max', rangePrice.max == '' ? '100' : rangePrice.max);
rangePrice.addEventListener('input',
    () => rangePrice.style.setProperty('--value', rangePrice.value)
);