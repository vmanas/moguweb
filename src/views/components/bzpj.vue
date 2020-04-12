<template>
  <div class="lottie-box" id="bzpj"></div>
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
