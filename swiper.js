const slider = document.querySelector('.swiper');
const swiperWrapper = document.querySelector('.swiper-wrapper')

let swiper;
function mobileSlider() {
	if (window.innerWidth < 768 && slider.dataset.mobile == 'false') {
    swiper = new Swiper(slider, {
      direction: 'horizontal',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    
      spaceBetween: 16,
      centerSlides: true,
      slidesPerView: 'auto',
      slidesOffsetAfter: 40,
      slidesOffsetBefore: 20
    });
    console.log('mobile')
    slider.dataset.mobile = 'true'
   
  }

if (window.innerWidth >= 768) {

  console.log(window.innerWidth)
  slider.dataset.mobile = 'false'
  if (slider.classList.contains('swiper-container-initialized')) {
    swiper.destroy();
  }
  swiperWrapper.classList.remove('swiper-wrapper')
  swiperWrapper.classList.add('brends-list')
}
}

mobileSlider()


window.addEventListener('resize', function(){

	mobileSlider();

})