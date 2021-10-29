<template>

    <table id="ZillowModuleDesktop-max" class="desktop table--centered" width="499" height="327" border="0" cellpadding="0" cellspacing="0">
      <tr @click="toggleZillowModule()">
        <td colspan="4"><img src="./assets/zillow-module/desktop/zillow-module_01.jpg" width="406" height="55" alt=""></td>
        <td colspan="2"><a href="sms:&body=checkout CursedZillowImages by Kristina Diamond 🎃👻 ~~ Happy Halloween ~~ 👻🎃  https://cursedzillowimages.herokuapp.com/"><img src="./assets/zillow-module/desktop/zillow-module_02.jpg" width="93" height="55" alt=""></a></td>
      </tr>
      <tr @click="toggleZillowModule()"><td colspan="6"><img src="./assets/zillow-module/desktop/zillow-module_03.jpg" width="499" height="211" alt=""></td></tr>
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


    <table id="ZillowModuleDesktop-min" class="desktop table--bottom-right hide" width="499" height="119" border="0" cellpadding="0" cellspacing="0">
        <tr @click="toggleZillowModule()">
            <td colspan="4"><img src="./assets/zillow-module/desktop-min/zillow-module-min_01.jpg" width="406" height="55" alt=""></td>
            <td colspan="2"><a href="sms:&body=checkout CursedZillowImages by Kristina Diamond 🎃👻 ~~ Happy Halloween ~~ 👻🎃  https://cursedzillowimages.herokuapp.com/"><img src="./assets/zillow-module/desktop-min/zillow-module-min_02.jpg" width="93" height="55" alt=""></a></td>
        </tr>
        <tr>
            <td><img src="./assets/zillow-module/desktop-min/zillow-module-min_03.jpg" width="16" height="44" alt=""></td>
            <td><a href="https://www.instagram.com/krdiamond"  target="_blank"><img src="./assets/zillow-module/desktop-min/zillow-module-min_04.jpg" width="229" height="44" alt=""></a></td>
            <td><img src="./assets/zillow-module/desktop-min/zillow-module-min_05.jpg" width="8" height="44" alt=""></td>
            <td  @click="takeATour()" class="pointer" colspan="2"><img src="./assets/zillow-module/desktop-min/zillow-module-min_06.jpg" width="230" height="44" alt=""></td>
            <td><img src="./assets/zillow-module/desktop-min/zillow-module-min_07.jpg" width="16" height="44" alt=""></td>
        </tr>
        <tr><td colspan="6"><img src="./assets/zillow-module/desktop-min/zillow-module-min_08.jpg" width="499" height="19" alt=""></td></tr>
        <tr>
            <td><img src="./assets/zillow-module/spacer.gif" width="16" height="1" alt=""></td>
            <td><img src="./assets/zillow-module/spacer.gif" width="229" height="1" alt=""></td>
            <td><img src="./assets/zillow-module/spacer.gif" width="8" height="1" alt=""></td>
            <td><img src="./assets/zillow-module/spacer.gif" width="153" height="1" alt=""></td>
            <td><img src="./assets/zillow-module/spacer.gif" width="77" height="1" alt=""></td>
            <td><img src="./assets/zillow-module/spacer.gif" width="16" height="1" alt=""></td>
        </tr>
        <!-- <tr id="ZillowModuleDesktop-min__dont-worry" class="dont-worry hide"><td colspan="6">🎃 👻 don't worry, no more scaries 👻 🎃</td></tr> -->
    </table>

    <table id="ZillowModuleMobile-max" class="mobile table--centered" width="300" height="197" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td @click="toggleZillowModule()" colspan="4"><img src="./assets/zillow-module/mobile/zillow-module_01.jpg" width="244" height="33" alt=""></td>
        <td colspan="2"><a href="sms:&body=checkout CursedZillowImages by Kristina Diamond 🎃👻 ~~ Happy Halloween ~~ 👻🎃  https://cursedzillowimages.herokuapp.com/"><img src="./assets/zillow-module/mobile/zillow-module_02.jpg" width="56" height="33" alt=""></a></td>
      </tr>
      <tr @click="toggleZillowModule()"><td colspan="6"><img src="./assets/zillow-module/mobile/zillow-module_03.jpg" width="300" height="126" alt=""></td></tr>
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

    <table id="ZillowModuleMobile-min" class="mobile hide"  width="300" height="72" border="0" cellpadding="0" cellspacing="0">
      <tr>
        <td @click="toggleZillowModule()" colspan="4"><img src="./assets/zillow-module/mobile-min/zillow-module-min_01.jpg" width="245" height="33" alt=""></td>
        <td colspan="2"><a href="sms:&body=checkout CursedZillowImages by Kristina Diamond 🎃👻 ~~ Happy Halloween ~~ 👻🎃  https://cursedzillowimages.herokuapp.com/"><img src="./assets/zillow-module/mobile-min/zillow-module-min_02.jpg" width="55" height="33" alt=""></a></td>
      </tr>
      <tr>
        <td><img src="./assets/zillow-module/mobile-min/zillow-module-min_03.jpg" width="10" height="26" alt=""></td>
        <td><a href="https://www.instagram.com/krdiamond"  target="_blank"><img src="./assets/zillow-module/mobile-min/zillow-module-min_04.jpg" width="137" height="26" alt=""></a></td>
        <td><img src="./assets/zillow-module/mobile-min/zillow-module-min_05.jpg" width="6" height="26" alt=""></td>
        <td @click="takeATour()" class="pointer" colspan="2"><img src="./assets/zillow-module/mobile-min/zillow-module-min_06.jpg" width="138" height="26" alt=""></td>
        <td><img src="./assets/zillow-module/mobile-min/zillow-module-min_07.jpg" width="9" height="26" alt=""></td>
      </tr>
      <tr>
        <td colspan="6"><img src="./assets/zillow-module/mobile-min/zillow-module-min_08.jpg" width="300" height="12" alt=""></td>
      </tr>
      <tr>
        <td><img src="/assets/zillow-module/spacer.gif" width="10" height="1" alt=""></td>
        <td><img src="/assets/zillow-module/spacer.gif" width="137" height="1" alt=""></td>
        <td><img src="/assets/zillow-module/spacer.gif" width="6" height="1" alt=""></td>
        <td><img src="/assets/zillow-module/spacer.gif" width="92" height="1" alt=""></td>
        <td><img src="/assets/zillow-module/spacer.gif" width="46" height="1" alt=""></td>
        <td><img src="/assets/zillow-module/spacer.gif" width="9" height="1" alt=""></td>
      </tr>
       <!-- <tr id="ZillowModuleMobile-min__dont-worry" class="dont-worry hide"><td colspan="6">🎃 👻 don't worry, no more scaries 👻 🎃</td></tr> -->
    </table>
  
    <div id="cursedImageSwiper" class="swiper height--100">
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

    <div id="ghost" class="ghost hide">
      <img src="./assets/ghost.jpg" class="desktop">
      <img src="./assets/ghost-mbl.jpg" class="mobile">
    </div>
    
    <audio id="scream"><source src="./assets/scream.mp3" type="audio/mp3"></audio>

    <div class="sound-on">
      <img src="./assets/sound-on.png" >
    
    </div>

</template>


<script>

export default {
  name: 'App',
  components: {},
  data(){
    return {
      zillowModalMinIsActive: false
    }
  },
  mounted() {

  },
  methods: {
    takeATour() {
      if (document.getElementById('ghost').classList.contains("show")){
        document.getElementById('ghost').classList.remove("show");
        document.getElementById('cursedImageSwiper').style.display = "block";
        document.getElementById('ZillowModuleMobile-max').classList.remove("show")
        document.getElementById('ZillowModuleDesktop-max').classList.remove("show")
      }

      //let the user scroll through cursed images
      const cursedImageSwiper = document.getElementById('cursedImageSwiper').swiper;
      cursedImageSwiper.mousewheel.enable();
      cursedImageSwiper.allowTouchMove = true;
      cursedImageSwiper.on('breakpoint', function () {
        cursedImageSwiper.allowTouchMove = true;
      });

      //move all modules to the side so user can see the cursed images
      this.zillowModalMinIsActive = true;
      document.getElementById('ZillowModuleDesktop-max').classList.add("table--bottom-right");
      document.getElementById('ZillowModuleDesktop-max').classList.remove("table--centered");
      document.getElementById('ZillowModuleDesktop-max').classList.add("hide");

      document.getElementById('ZillowModuleDesktop-min').classList.add("show");

      document.getElementById('ZillowModuleMobile-max').classList.add("hide");
      document.getElementById('ZillowModuleMobile-max').classList.remove("table--centered");

      document.getElementById('ZillowModuleMobile-min').classList.add("show");
      document.getElementById('ZillowModuleMobile-min').style.position = "relative";
      
      cursedImageSwiper.once('slideChange', function () { 
          //play scream for jump scare
          document.getElementById('scream').play();
          document.getElementById('scream').pause();
          setTimeout(function() {
            document.getElementById('scream').play();
          }, 21800);

          //show the ghost for the jump scare
          setTimeout(function() {
            document.getElementById('ghost').classList.add("show");
            document.getElementById('cursedImageSwiper').style.display = "none";
          }, 22000);

          //show all modules 3 seconds after ghost
          setTimeout(function() {
            document.getElementById('ZillowModuleDesktop-max').style.zIndex = "4";
            document.getElementById('ZillowModuleDesktop-max').classList.remove("hide")
            document.getElementById('ZillowModuleDesktop-max').classList.add("show")

            document.getElementById('ZillowModuleMobile-max').style.zIndex = "4";
            document.getElementById('ZillowModuleMobile-max').classList.remove("hide")
            document.getElementById('ZillowModuleMobile-max').classList.add("show")
            document.getElementById('ZillowModuleMobile-max').classList.add("table--centered")
            document.getElementById('ZillowModuleMobile-max').style.position = "absolute";

            document.getElementById('ZillowModuleDesktop-min').style.zIndex = "4";
            document.getElementById('ZillowModuleDesktop-min').classList.remove("show")

            document.getElementById('ZillowModuleMobile-min').style.zIndex = "4";
            document.getElementById('ZillowModuleMobile-min').classList.remove("show");
            document.getElementById('ZillowModuleMobile-min').classList.add("table--centered");
            document.getElementById('ZillowModuleMobile-min').style.position = "absolute";
          }, 27000);

      });

      cursedImageSwiper.once('touchStart', function () {
          //play scream for jump scare
          document.getElementById('scream').play();
          document.getElementById('scream').pause();
          setTimeout(function() {
            document.getElementById('scream').play();
          }, 21800);

          //show the ghost for the jump scare
          setTimeout(function() {
            document.getElementById('ghost').classList.add("show");
            document.getElementById('cursedImageSwiper').style.display = "none";
          }, 22000);

          //show all modules 3 seconds after ghost
          setTimeout(function() {
            document.getElementById('ZillowModuleDesktop-max').style.zIndex = "4";
            document.getElementById('ZillowModuleDesktop-max').classList.remove("hide")
            document.getElementById('ZillowModuleDesktop-max').classList.add("show")

            document.getElementById('ZillowModuleMobile-max').style.zIndex = "4";
            document.getElementById('ZillowModuleMobile-max').classList.remove("hide")
            document.getElementById('ZillowModuleMobile-max').classList.add("show")
            document.getElementById('ZillowModuleMobile-max').classList.add("table--centered")
            document.getElementById('ZillowModuleMobile-max').style.position = "absolute";

            document.getElementById('ZillowModuleDesktop-min').style.zIndex = "4";
            document.getElementById('ZillowModuleDesktop-min').classList.remove("show")

            document.getElementById('ZillowModuleMobile-min').style.zIndex = "4";
            document.getElementById('ZillowModuleMobile-min').classList.remove("show");
            document.getElementById('ZillowModuleMobile-min').classList.add("table--centered");
            document.getElementById('ZillowModuleMobile-min').style.position = "absolute";
          }, 27000);

      });
    },
    toggleZillowModule() {
      this.zillowModalMinIsActive = !this.zillowModalMinIsActive;
    },
  }
}
</script>
