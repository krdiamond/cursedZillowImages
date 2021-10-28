<template>

    <div v-if="ghostIsActive" class="ghost">
      <div class="text">HAPPY HALLOWEEN</div>
      <img src="./assets/ghost.jpeg">
    </div>

    <div v-if="screamIsActive" >
      <audio autoplay><source src="./assets/scream.mp3" type="audio/mp3"></audio>
    </div>
  
    <div id="cursedImageSwiper" class="swiper height--100">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img class="swiper-image" src="./assets/cursed-images/cursedImage02.jpeg"></div>
            <div class="swiper-slide"><img class="swiper-image" src="./assets/cursed-images/cursedImage03.jpeg"></div>
            <div class="swiper-slide"><img class="swiper-image" src="./assets/cursed-images/cursedImage04.jpeg"></div>
            <div class="swiper-slide"><img class="swiper-image" src="./assets/cursed-images/cursedImage05.jpeg"></div>
            <div class="swiper-slide"><img class="swiper-image" src="./assets/cursed-images/cursedImage06.jpeg"></div>
            <div class="swiper-slide"><img class="swiper-image" src="./assets/cursed-images/cursedImage07.jpeg"></div>
            <div class="swiper-slide"><img class="swiper-image" src="./assets/cursed-images/cursedImage08.jpeg"></div>
            <div class="swiper-slide"><img class="swiper-image" src="./assets/cursed-images/cursedImage09.jpeg"></div>
            <div class="swiper-slide"><img class="swiper-image" src="./assets/cursed-images/cursedImage10.jpeg"></div>
            <div class="swiper-slide"><img class="swiper-image" src="./assets/cursed-images/cursedImage11.jpeg"></div>
            <div class="swiper-slide"><img class="swiper-image" src="./assets/cursed-images/cursedImage12.jpeg"></div>
        </div>

        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

    </div>

</template>


<script>

export default {
  name: 'App',
  components: {},
  data(){
    return {
      ghostIsActive: false,
      screamIsActive: false,
    }
  },
  mounted() {
    setTimeout(this.deployGhost, 25000)
    setTimeout(this.deployScream, 24500)
  },
  methods: {
    deployGhost(){
      this.ghostIsActive = true;
      console.log('BOO!')
    },
    deployScream(){
      this.screamIsActive = true;
      console.log('screaming!')
    },
  }
}
</script>
