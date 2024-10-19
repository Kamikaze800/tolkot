// Получаем элементы слайдера
let slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
let slides = Array.from(slider.querySelectorAll('.slider__item'));
const slideCount = slides.length;
let slideIndex = 0;


// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  
  

  updateSlider();
  
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}

// Функция для обновления отображения слайдера
function updateSlider() {
  slides.forEach((slide, index) => {
    let sliderContainer__index = document.querySelector(`.slider-container__index:nth-child(${index+1})`);
    if (index === slideIndex) {
      
      sliderContainer__index.classList.add('slider-container__index_active')
      slide.style.display = 'block';

    } else {
      sliderContainer__index.classList.remove('slider-container__index_active')
      slide.style.display = 'none';
    }
  });
}

// Инициализация слайдера
updateSlider();


// catalog
let products__clues__item = document.querySelector("products__clues__item");
products__clues__item.addEventListener('click', products__clues__item_func);
function products__clues__item_func() {
  products__clues__item.classList.toggle()  
}


// БУУУУУУУУУРГЕЕЕЕЕЕЕЕЕЕЕЕЕЕЕР
function burgerMenu(selector) {
  let menu = document.querySelector(selector);
  let button = menu.querySelector('.burger-menu_button, .burger-menu_lines');
  let links = menu.querySelectorAll('.burger-menu_link');
  let overlay = menu.querySelector('.burger-menu_overlay');

  
button.addEventListener('click', (e) => {
  e.preventDefault();
  toggleMenu();
});
  
links.forEach(link => {
  link.addEventListener('click', () => toggleMenu());
});
  overlay.addEventListener('click', () => toggleMenu());
  
  function toggleMenu(){
    menu.classList.toggle('burger-menu_active');
    
    if (menu.classList.contains('burger-menu_active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }
}

burgerMenu('.burger-menu');

// новый тач слайдер
// let slider = document.querySelector('.slider'),
//   sliderList = slider.querySelector('.slider-list'),
//   sliderTrack = slider.querySelector('.slider-track'),
//   slides = slider.querySelectorAll('.slide'),
//   arrows = slider.querySelector('.slider-arrows'),
//   prev = arrows.children[0],
//   next = arrows.children[1],
//   slideWidth = slides[0].offsetWidth,
//   slideIndex = 0,
//   posInit = 0,
//   posX1 = 0,
//   posX2 = 0,
//   posY1 = 0,
//   posY2 = 0,
//   posFinal = 0,
//   isSwipe = false,
//   isScroll = false,
//   allowSwipe = true,
//   transition = true,
//   nextTrf = 0,
//   prevTrf = 0,
//   lastTrf = --slides.length * slideWidth,
//   posThreshold = slides[0].offsetWidth * 0.35,
//   trfRegExp = /([-0-9.]+(?=px))/,
//   swipeStartTime,
//   swipeEndTime,
//   getEvent = function() {
//     return (event.type.search('touch') !== -1) ? event.touches[0] : event;
//   },
//   slide = function() {
//     if (transition) {
//       sliderTrack.style.transition = 'transform .5s';
//     }
//     sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;

//     prev.classList.toggle('disabled', slideIndex === 0);
//     next.classList.toggle('disabled', slideIndex === --slides.length);
//   },
//   swipeStart = function() {
//     let evt = getEvent();

//     if (allowSwipe) {

//       swipeStartTime = Date.now();
      
//       transition = true;

//       nextTrf = (slideIndex + 1) * -slideWidth;
//       prevTrf = (slideIndex - 1) * -slideWidth;

//       posInit = posX1 = evt.clientX;
//       posY1 = evt.clientY;

//       sliderTrack.style.transition = '';

//       document.addEventListener('touchmove', swipeAction);
//       document.addEventListener('mousemove', swipeAction);
//       document.addEventListener('touchend', swipeEnd);
//       document.addEventListener('mouseup', swipeEnd);

//       sliderList.classList.remove('grab');
//       sliderList.classList.add('grabbing');
//     }
//   },
//   swipeAction = function() {

//     let evt = getEvent(),
//       style = sliderTrack.style.transform,
//       transform = +style.match(trfRegExp)[0];

//     posX2 = posX1 - evt.clientX;
//     posX1 = evt.clientX;

//     posY2 = posY1 - evt.clientY;
//     posY1 = evt.clientY;

//     if (!isSwipe && !isScroll) {
//       let posY = Math.abs(posY2);
//       if (posY > 7 || posX2 === 0) {
//         isScroll = true;
//         allowSwipe = false;
//       } else if (posY < 7) {
//         isSwipe = true;
//       }
//     }

//     if (isSwipe) {
//       if (slideIndex === 0) {
//         if (posInit < posX1) {
//           setTransform(transform, 0);
//           return;
//         } else {
//           allowSwipe = true;
//         }
//       }

//       // запрет ухода вправо на последнем слайде
//       if (slideIndex === --slides.length) {
//         if (posInit > posX1) {
//           setTransform(transform, lastTrf);
//           return;
//         } else {
//           allowSwipe = true;
//         }
//       }

//       if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
//         reachEdge();
//         return;
//       }

//       sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`;
//     }

//   },
//   swipeEnd = function() {
//     posFinal = posInit - posX1;

//     isScroll = false;
//     isSwipe = false;

//     document.removeEventListener('touchmove', swipeAction);
//     document.removeEventListener('mousemove', swipeAction);
//     document.removeEventListener('touchend', swipeEnd);
//     document.removeEventListener('mouseup', swipeEnd);

//     sliderList.classList.add('grab');
//     sliderList.classList.remove('grabbing');

//     if (allowSwipe) {
//       swipeEndTime = Date.now();
//       if (Math.abs(posFinal) > posThreshold || swipeEndTime - swipeStartTime < 300) {
//         if (posInit < posX1) {
//           slideIndex--;
//         } else if (posInit > posX1) {
//           slideIndex++;
//         }
//       }

//       if (posInit !== posX1) {
//         allowSwipe = false;
//         slide();
//       } else {
//         allowSwipe = true;
//       }

//     } else {
//       allowSwipe = true;
//     }

//   },
//   setTransform = function(transform, comapreTransform) {
//     if (transform >= comapreTransform) {
//       if (transform > comapreTransform) {
//         sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`;
//       }
//     }
//     allowSwipe = false;
//   },
//   reachEdge = function() {
//     transition = false;
//     swipeEnd();
//     allowSwipe = true;
//   };

// sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)';
// sliderList.classList.add('grab');

// sliderTrack.addEventListener('transitionend', () => allowSwipe = true);
// slider.addEventListener('touchstart', swipeStart);
// slider.addEventListener('mousedown', swipeStart);

// arrows.addEventListener('click', function() {
//   let target = event.target;

//   if (target.classList.contains('next')) {
//     slideIndex++;
//   } else if (target.classList.contains('prev')) {
//     slideIndex--;
//   } else {
//     return;
//   }

//   slide();
// });