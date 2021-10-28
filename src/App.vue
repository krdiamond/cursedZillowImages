<template>

    <div v-if="ghostIsActive" class="ghost">
      <div class="text">HAPPY HALLOWEEN</div>
      <img src="./assets/ghost.jpeg">
    </div>

    <div v-if="screamIsActive" >
      <audio autoplay><source src="./assets/scream.mp3" type="audio/mp3"></audio>
    </div>

    <!-- <div class="zillow-sticker">
      <span>Cursed Zillow Images</span>
    </div> -->



<table v-bind:class="{ active : zillowModuleAside }" class="table--centered" width="499" height="327" border="0" cellpadding="0" cellspacing="0">
	<tr>
    <td colspan="4"><img src="./assets/zillow-module/zillow-module_01.jpg" width="406" height="55" alt=""></td>
		<td colspan="2"><a href="sms:&body=checkout CursedZillowImages by Kristina Diamond 🎃👻 ~~ Happy Halloween ~~ 👻🎃  https://cursedzillowimages.herokuapp.com/"><img src="./assets/zillow-module/zillow-module_02.jpg" width="93" height="55" alt=""></a></td>
	</tr>
	<tr>
		<td colspan="6"><img src="./assets/zillow-module/zillow-module_03.jpg" width="499" height="211" alt=""></td></tr>
	<tr>
		<td><img src="./assets/zillow-module/zillow-module_04.jpg" width="15" height="40" alt=""></td>
		<td><a href="https://www.instagram.com/krdiamond"><img src="./assets/zillow-module/zillow-module_05.jpg" width="229" height="40" alt=""></a></td>
		<td><img src="./assets/zillow-module/zillow-module_06.jpg" width="9" height="40" alt=""></td>
		<td @click="takeATour()" class="pointer" colspan="2"><img src="./assets/zillow-module/zillow-module_07.jpg" width="230" height="40" alt=""></td>
		<td><img src="./assets/zillow-module/zillow-module_08.jpg" width="16" height="40" alt=""></td>
	</tr>
	<tr><td colspan="6"><img src="./assets/zillow-module/zillow-module_09.jpg" width="499" height="20" alt=""></td></tr>
	<tr>
		<td><img src="./assets/zillow-module/spacer.gif" width="15" height="1" alt=""></td>
		<td><img src="./assets/zillow-module/spacer.gif" width="229" height="1" alt=""></td>
		<td><img src="./assets/zillow-module/spacer.gif" width="9" height="1" alt=""></td>
		<td><img src="./assets/zillow-module/spacer.gif" width="153" height="1" alt=""></td>
		<td><img src="./assets/zillow-module/spacer.gif" width="77" height="1" alt=""></td>
		<td><img src="./assets/zillow-module/spacer.gif" width="16" height="1" alt=""></td>
	</tr>
</table> 
  
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
      zillowModuleAside: false,
    }
  },
  mounted() {
    // setTimeout(this.deployGhost, 25000)
    // setTimeout(this.deployScream, 24500)
  },
  methods: {
    takeATour() {
      const cursedImageSwiper = document.getElementById('cursedImageSwiper').swiper;
      cursedImageSwiper.mousewheel.enable();
      this.zillowModuleAside = true;
    },
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
