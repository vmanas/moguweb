<template>
  <div class="home">
    <img src="../assets/img/other/logo.png" alt="logo" class="logo" />
    <a href="javascript:;" class="shop-btn icon icon-shop"></a>
    <menu-bar :currentIndex="currentIndex" @setActive="toSlide"></menu-bar>
    <swiper :options="swiperOption" ref="mySwiper" @slideChange="slideChange">
      <!-- slides -->
      <swiper-slide>
        <mush-room></mush-room>
      </swiper-slide>
      <swiper-slide>
        <mgtkc></mgtkc>
      </swiper-slide>
      <swiper-slide>
        <cdtkc></cdtkc>
      </swiper-slide>
      <swiper-slide>
        <bzpj></bzpj>
      </swiper-slide>
    </swiper>
  </div>
</template>

 <script>
import MushRoom from "./components/rlmg";
import Mgtkc from "./components/mgtkc";
import Cdtkc from "./components/cdtkc";
import Bzpj from "./components/bzpj";
import MenuBar from './components/menu-bar';
import "../common/font/font.css";
export default {
  name: "Home",
  components: { MushRoom, Mgtkc, Cdtkc, Bzpj,MenuBar },
  data() {
    return {
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 1,
        spaceBetween: 0,
        mousewheel: true,
        threshold : 200,
      },
      currentIndex:0,
    };
  },
  methods:{
    slideChange(){
      this.currentIndex = this.$refs.mySwiper.swiperInstance.activeIndex

    },
    toSlide(index){
      this.$refs.mySwiper.swiperInstance.slideTo(index, 1000, false)
    }
  }
};
</script>
<style lang="less">
.logo {
  position: fixed;
  top: 0.177rem;
  left: 0.854rem;
  z-index: 9;
  width: 0.66rem;
  height: 0.36rem;
}
.swiper-container{
  width: 100%;
  height: 100%;
}



.shop-btn {
  position: fixed;
  bottom: 0.67rem;
  right: 0.67rem;
  display: block;
  width: 0.57rem;
  height: 0.57rem;
  border-radius: 0.57rem;
  z-index: 9;
  &:hover {
    background-image: url("../assets/img/icon/icon-add.png");
  }
}
.btn {
  display: block;
  width: 0.57rem;
  height: 0.57rem;
  border-radius: 0.57rem;
  z-index: 9;
}
</style>