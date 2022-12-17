import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination])


let sliders ;
const swiperContainer = document.querySelector(".swiper");
function createSlider() {
  if (window.innerWidth < 768) {
    if (!swiperContainer.classList.contains("swiper-initialized")) {
      sliders = new Swiper(".swiper", {
        spaceBetween: 16,
              centerSlides: true,
              slidesPerView: 'auto',
              slidesOffsetAfter: 40,
              slidesOffsetBefore: 20,

        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true,
          dynamicMainBullets: 12,
          clickable: true,
        },
      
      }) ;
    }
  } else {
    if (swiperContainer.classList.contains("swiper-initialized") && !sliders[0].destroyed) {
      for (let slider of sliders) {
        slider.destroy();
      }
    }
  }
}
createSlider();

window.addEventListener("resize", () => {
  createSlider();
});













// const sliders = document.querySelectorAll('.swiper');
// const swiperWrappers = document.querySelectorAll('.swiper-wrapper')

// let swiper;
// function mobileSlider(slider) {
    
// 	if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
//     for (let swiperWrapper of swiperWrappers) {
//     swiperWrapper.classList.add('swiper-wrapper')
//     if (swiperWrapper.classList.contains("swiperOne")){
//       swiperWrapper.classList.remove('brends-list')
//     } else if(swiperWrapper.classList.contains("swiperTwo")) {
//       swiperWrapper.classList.remove('section-repair__list')
//     }
//     swiper = new Swiper(slider, {
//       direction: 'horizontal',
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true,
//       },
    
//       spaceBetween: 16,
//       centerSlides: true,
//       slidesPerView: 'auto',
//       slidesOffsetAfter: 40,
//       slidesOffsetBefore: 20,

//     //   breakpoints: {
//     //   768: {
//     //     slidesOffsetAfter: 0
//     //   }
//     // }
//     });
//     slider.dataset.mobile = 'true'
//   }
  
//   }

// if (window.innerWidth >= 768 ) {
//   slider.dataset.mobile = 'false'


//     if (slider.classList.contains('swiper-initialized')) {
//       slider.classList.remove('swiper-initialized')
//       swiper.destroy();
 
//     }
  
//   for (let swiperWrapper of swiperWrappers){
//     swiperWrapper.classList.remove('swiper-wrapper')

//   if (swiperWrapper.classList.contains("swiperOne")){
//     swiperWrapper.classList.add('brends-list')
//   } else if(swiperWrapper.classList.contains("swiperTwo")) {
//     swiperWrapper.classList.add('section-repair__list')
//   }
// }

// }

// }

// for (let elem of sliders){
//   mobileSlider(elem)
// }

// window.addEventListener('resize', function(){
//   for (let elem of sliders){
 
//     mobileSlider(elem)
//   }
// })