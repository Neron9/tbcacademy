const carousele = document.querySelector('.carousele__content');
const carouselePrev = document.querySelector('.carousele__button.prev');
const carouseleNext = document.querySelector('.carousele__button.next');
const carouseleDots = document.querySelectorAll('.carousele__dot');

let carouseleStep = 0;

function changeCarousele(nextStep) {
  carouseleStep = nextStep;

  if (carouseleStep > 2) {
    carouseleStep = 0;
  }

  if (carouseleStep < 0) {
    carouseleStep = 2;
  }

  let sliderContent = '';
  for (let i = 1; i <= 3; i++) {
    const imageCount = i + carouseleStep * 3;
    if (imageCount > 7) break;

    sliderContent += `<div class="carousele__item"><img src="assets/img/carousele/${imageCount}.webp"></div>`;
  }
  carousele.innerHTML = sliderContent;
}

carouselePrev.addEventListener('click', () =>
  changeCarousele(carouseleStep - 1)
);
carouseleNext.addEventListener('click', () =>
  changeCarousele(carouseleStep + 1)
);

carouseleDots.forEach((dot, index) =>
  dot.addEventListener('click', () => changeCarousele(index))
);

changeCarousele(0);
setInterval(() => changeCarousele(carouseleStep + 1), 3000);
