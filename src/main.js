import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')

import './assets/style.scss';

import Swiper, {Mousewheel } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';

Swiper.use([Mousewheel]);

const cursedImageSwiper = document.getElementById('cursedImageSwiper');

new Swiper(cursedImageSwiper, {
    loop: true, 
    slidesPerView: 2,
    direction: 'vertical',
    mousewheel: true,
    breakpoints: {
        900: {
          slidesPerView: 1,
        }
    }
});


