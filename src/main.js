import { createApp } from 'vue'
import App from './App.vue'
createApp(App).mount('#app')

import './assets/style.scss';

import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';

Swiper.use([Navigation]);

const cursedImageSwiper = document.getElementById('cursedImageSwiper');

new Swiper(cursedImageSwiper, {
    loop: true, 
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }  
    }
);