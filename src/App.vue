<template>





    <table id="ZillowModuleDesktop" v-if="!zillowModalMinIsActive" v-bind:class="{ bottom : zillowModalIsBottomRight }" class="desktop table--centered" width="499" height="327" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td colspan="4"><img src="./assets/zillow-module/desktop/zillow-module_01.jpg" width="406" height="55" alt=""></td>
        <td colspan="2"><a href="sms:&body=checkout CursedZillowImages by Kristina Diamond 🎃👻 ~~ Happy Halloween ~~ 👻🎃  https://cursedzillowimages.herokuapp.com/"><img src="./assets/zillow-module/desktop/zillow-module_02.jpg" width="93" height="55" alt=""></a></td>
      </tr>
      <tr @click="minimizeZillowModule()"><td colspan="6"><img src="./assets/zillow-module/desktop/zillow-module_03.jpg" width="499" height="211" alt=""></td></tr>
      <tr>
        <td><img src="./assets/zillow-module/desktop/zillow-module_04.jpg" width="15" height="40" alt=""></td>
        <td><a href="https://www.instagram.com/krdiamond"  target="_blank"><img src="./assets/zillow-module/desktop/zillow-module_05.jpg" width="229" height="40" alt=""></a></td>
        <td><img src="./assets/zillow-module/desktop/zillow-module_06.jpg" width="9" height="40" alt=""></td>
        <td @click="takeATour()" class="pointer" colspan="2"><img src="./assets/zillow-module/desktop/zillow-module_07.jpg" width="230" height="40" alt=""></td>
        <td><img src="./assets/zillow-module/desktop/zillow-module_08.jpg" width="16" height="40" alt=""></td>
      </tr>
      <tr><td colspan="6"><img src="./assets/zillow-module/desktop/zillow-module_09.jpg" width="499" height="20" alt=""></td></tr>
      <tr>
        <td><img src="./assets/zillow-module/spacer.gif" width="15" height="1" alt=""></td>
        <td><img src="./assets/zillow-module/spacer.gif" width="229" height="1" alt=""></td>
        <td><img src="./assets/zillow-module/spacer.gif" width="9" height="1" alt=""></td>
        <td><img src="./assets/zillow-module/spacer.gif" width="153" height="1" alt=""></td>
        <td><img src="./assets/zillow-module/spacer.gif" width="77" height="1" alt=""></td>
        <td><img src="./assets/zillow-module/spacer.gif" width="16" height="1" alt=""></td>
      </tr>
    </table> 

    <table id="ZillowModuleDesktop-min" v-if="zillowModalMinIsActive" @click="showLargeZillowModal()" class="desktop table--bottom-right" width="499" height="118" border="0" cellpadding="0" cellspacing="0">
        <tr>
          <td><img src="./assets/zillow-module/desktop-min/zillow-module-min_01.jpg" width="406" height="55" alt=""></td>
          <td><img src="./assets/zillow-module/desktop-min/zillow-module-min_02.jpg" width="93" height="55" alt=""></td>
        </tr>
        <tr><td colspan="2"><img src="./assets/zillow-module/desktop-min/zillow-module-min_03.jpg" width="499" height="63" alt=""></td></tr>
    </table>


    <table id="ZillowModuleMobile" v-if="!zillowModalMinIsActive" v-bind:class="{ top : zillowModalIsBottomRight }"  class="mobile table--centered" width="300" height="197" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td colspan="4"><img src="./assets/zillow-module/mobile/zillow-module_01.jpg" width="244" height="33" alt=""></td>
        <td colspan="2"><a href="sms:&body=checkout CursedZillowImages by Kristina Diamond 🎃👻 ~~ Happy Halloween ~~ 👻🎃  https://cursedzillowimages.herokuapp.com/"><img src="./assets/zillow-module/mobile/zillow-module_02.jpg" width="56" height="33" alt=""></a></td>
      </tr>
      <tr @click="minimizeZillowModule()"><td colspan="6"><img src="./assets/zillow-module/mobile/zillow-module_03.jpg" width="300" height="126" alt=""></td></tr>
      <tr>
        <td><img src="./assets/zillow-module/mobile/zillow-module_04.jpg" width="10" height="25" alt=""></td>
        <td><a href="https://www.instagram.com/krdiamond"  target="_blank"><img src="./assets/zillow-module/mobile/zillow-module_05.jpg" width="136" height="25" alt=""></a></td>
        <td><img src="./assets/zillow-module/mobile/zillow-module_06.jpg" width="7" height="25" alt=""></td>
        <td @click="takeATour()" class="pointer" colspan="2"><img src="./assets/zillow-module/mobile/zillow-module_07.jpg" width="137" height="25" alt=""></td>
        <td><img src="./assets/zillow-module/mobile/zillow-module_08.jpg" width="10" height="25" alt=""></td>
      </tr>
      <tr><td colspan="6"><img src="./assets/zillow-module/mobile/zillow-module_09.jpg" width="300" height="12" alt=""></td></tr>
      <tr>
        <td><img src="./assets/zillow-module/spacer.gif" width="10" height="1" alt=""></td>
        <td><img src="./assets/zillow-module/spacer.gif" width="136" height="1" alt=""></td>
        <td><img src="./assets/zillow-module/spacer.gif" width="7" height="1" alt=""></td>
        <td><img src="./assets/zillow-module/spacer.gif" width="91" height="1" alt=""></td>
        <td><img src="./assets/zillow-module/spacer.gif" width="46" height="1" alt=""></td>
        <td><img src="./assets/zillow-module/spacer.gif" width="10" height="1" alt=""></td>
      </tr>
    </table>

    <table id="ZillowModuleMobile-min" v-if="zillowModalMinIsActive" @click="showLargeZillowModal()" class="mobile top" width="300" height="71" border="0" cellpadding="0" cellspacing="0">
        <tr>
            <td><img src="./assets/zillow-module/mobile-min/zillow-module-min_01.jpg" width="244" height="33" alt=""></td>
            <td><img src="./assets/zillow-module/mobile-min/zillow-module-min_02.jpg" width="56" height="33" alt=""></td>
        </tr>
        <tr><td colspan="2"><img src="./assets/zillow-module/mobile-min/zillow-module-min_03.jpg" width="300" height="38" alt=""></td></tr>
    </table>
  
    <div id="cursedImageSwiper" v-bind:class="{ none : ghostIsActive}" class="swiper height--100">
        <div id="cursedImageSwiper_Wrapper" class="swiper-wrapper">
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

    <div id="ghost" v-if="ghostIsActive" class="ghost">
      <img src="./assets/ghost.jpg" class="desktop">
      <img src="./assets/ghost-mbl.jpg" class="mobile">
    </div>
    
    <div v-if="screamIsActive" >
      <audio id="audio" controls><source src="./assets/scream.mp3" type="audio/mp3"></audio>
    </div>

</template>


<script>

export default {
  name: 'App',
  components: {},
  data(){
    return {
      ghostIsActive: false,
      screamIsActive: true,
      zillowModalMinIsActive: false,
      zillowModalIsBottomRight: false,
      ghostIsRelative: false
    }
  },
  mounted() {



  },
  methods: {
    takeATour() {
      const cursedImageSwiper = document.getElementById('cursedImageSwiper').swiper;
      cursedImageSwiper.mousewheel.enable();

      cursedImageSwiper.on('slideChange', function () {
        const scream = document.getElementById('audio');
        scream.play()
      });

      this.zillowModalMinIsActive = true;
      this.zillowModalIsActive = false;
      // setTimeout(this.deployGhost, 15000)
      // setTimeout(this.deployScream, 14800)
      setTimeout(this.deployGhost, 5000)
      setTimeout(this.deployScream, 4800)

    },
    deployGhost(){
      this.ghostIsActive = true;
      console.log('BOO!')
    },
    deployScream(){
      this.screamIsActive = true;
    },
    deployFinalModal(){
      this.ghostIsRelative = true
    },
    showLargeZillowModal() {
      this.zillowModalMinIsActive = false;
      this.zillowModalIsBottomRight = true;
    },
    minimizeZillowModule() {
      this.zillowModalMinIsActive = true;
      this.zillowModalIsBottomRight = false;
    },
  }
}
</script>
