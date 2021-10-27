import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')

import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';

Swiper.use([Navigation, Pagination]);

const testSwiper = document.getElementById('testSwiper');

new Swiper(testSwiper, {
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }  
    }
);