import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

Swiper.use([Navigation, Autoplay]);

class InitSliders {
  constructor() {
    this.reviewsSliderInstance = null;
    this.reviewsModalSliderInstances = [];

    this.initializeSliders();
  }

  createSwiperInstance(sliderElement, params) {
    return new Swiper(sliderElement, {
      slidesPerView: params.slidesPerView || 1,
      slidesPerGroup: params.slidesPerGroup || 1,
      spaceBetween: params.spaceBetween || 0,
      loop: params.loop || false,
      autoHeight: true,
      autoWidth: params.autoWidth || false,
      navigation: params.navigation || false,
      autoplay: params.autoplay || false,
      centeredSlides: params.centeredSlides || false,
      allowTouchMove: params.allowTouchMove || true,
      speed: params.speed || 300,
      ...params.settings,
    });
  }

  initializeSliders() {
    this.initReviewsSlider();
    this.initModalSliders();
  }

  initReviewsSlider() {
    if (!this.reviewsSliderInstance) {
      this.reviewsSliderInstance = this.createSwiperInstance('.js-reviews-slider-init', {
        loop: true,
        navigation: {
          nextEl: '.js-swiper-button-next-1',
          prevEl: '.js-swiper-button-prev-1',
        },
        settings: {
          slidesPerView: 3,
          spaceBetween: 24,
        },
      });
    }
  }

  initModalSliders() {
    const modalSliders = document.querySelectorAll('.js-reviews-modal-slider-init');

    modalSliders.forEach((sliderElement) => {
      const sliderInstance = this.createSwiperInstance(sliderElement, {
        loop: true,
        centeredSlides: true,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        spaceBetween: 12,
        slidesPerView: 1.64,
        allowTouchMove: false,
        settings: {
          speed: 2000,
        },
      });

      this.reviewsModalSliderInstances.push(sliderInstance);
    });
  }
}

export default InitSliders;