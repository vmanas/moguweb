<template>
  <div class="lottie-box" id="bzpj">
    <div class="left">
      <div class="menu">
        <p>
          <a href="#mushroom">日落蘑菇</a>
        </p>
        <p>
          <a href="#mgtkc">充电太空舱</a>
        </p>
        <p>
          <a href="#cdtkc">App</a>
        </p>
        <div class="panel-active">
          
          <img src="../../assets/img/other/bzypj.png" alt="包装配件" />
          <p class="panel-active-border">太空舱&nbsp;充电线</p>
          <p >PinkPunch&nbsp;纪念徽章</p>
        </div>
       
      </div>
    </div>
  </div>
</template>
<script >
// 包装配件
import lottie from "lottie-web";
// eslint-disable-next-line no-unused-vars
import { bgHeart } from "../../../static/lottie.js";
export default {
  name: "MushRoom",
  data() {
    return {
      lottie: {}
    };
  },
  mounted() {
    const width = document.getElementsByTagName("body")[0].clientWidth;
    const height = document.getElementsByTagName("body")[0].clientHeight;
    bgHeart.w = width;
    bgHeart.h = height;
    this.lottie = lottie.loadAnimation({
      container: document.getElementById("bzpj"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: bgHeart
    });
  }
};
</script>
<style lang="less">
#bzpj {
  background: #f99;
}
</style>
