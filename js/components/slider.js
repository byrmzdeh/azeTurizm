
var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 6,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});



// slider
let intervalNum = 3000;
let sliderCount = 1;
let myInterval = setInterval(slideChange, intervalNum);
document.getElementById("MainSliderProgress").classList.remove('active');
setTimeout(() => {
  document.getElementById("MainSliderProgress").classList.add('active');
}, 1);

function slideChange() {
  let lists = document.querySelectorAll('.itemmy');
  document.getElementById('slide').appendChild(lists[0]);
  for (let i = 0; i < lists.length; i++) {
    lists[i].classList.remove('active');
  }
  lists[1].classList.add('active');
  if (sliderCount < lists.length - 2) {
    sliderCount += 1;
  } else {
    sliderCount = 1;
  }
  document.getElementById("activeSlideNumber").innerHTML = sliderCount;
  document.getElementById("MainSliderProgress").classList.remove('active');
  setTimeout(() => {
    document.getElementById("MainSliderProgress").classList.add('active');
  }, 1);
}

document.getElementById('next').onclick = function () {
  clearInterval(myInterval);
  slideChange();
  // document.getElementById("MainSliderProgress").classList.remove('active');
  myInterval = setInterval(slideChange, intervalNum);
}

document.getElementById('prev').onclick = function () {
  clearInterval(myInterval);
  let lists = document.querySelectorAll('.itemmy');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
  for (let i = 0; i < lists.length; i++) {
    lists[i].classList.remove('active');
  }
  lists[lists.length - 1].classList.add('active');
  if (sliderCount > 1) {
    sliderCount -= 1;
  } else {
    sliderCount = 6;
  }
  document.getElementById("MainSliderProgress").classList.remove('active');
  setTimeout(() => {
    document.getElementById("MainSliderProgress").classList.add('active');
  }, 1);
  document.getElementById("activeSlideNumber").innerHTML = sliderCount;
  myInterval = setInterval(slideChange, intervalNum);
}

var swiper = new Swiper(".homeSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1400,
    disableOnInteraction: false,
  },
});


var swiper = new Swiper(".homeSliderInternal", {
  slidesPerView: 4,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-nextN",
    prevEl: ".swiper-button-prevN",
  },
  loop: true,
  breakpoints: {

    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    676: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  }
});



var swiper = new Swiper(".internalSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});










var swiper = new Swiper(".autoSwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {

    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    676: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
});





AOS.init({
  duration: 1000,
  once: true
});
