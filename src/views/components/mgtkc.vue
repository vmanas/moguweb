<template>
  <div class="lottie-box" id="mgtkc">
     <div class="left">
      <div class="menu">
        <div class="panel-active">
          <p>跳蛋玩具</p>
          <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇" />
          <p class="panel-active-border">粉嫩剔透，柔软外表内含充沛能量</p>
        </div>
        <p>
          <a href="#mgtkc">充电太空舱</a>
        </p>
        <p>
          <a href="#cdtkc">App</a>
        </p>
        <p>
          <a href="#bzpj">包装与配件</a>
        </p>
      </div>
    </div>
    <div class="content"></div>
    <div class="right">
      <div class="nav-bar">
        <div class="nav-btn">
          <div class="text-panel">
            <p>通体透明硅胶包裹表面磨砂触感</p>
            <p>全机身密闭防水，使用后放心冲洗</p>
          </div>
          <a href="javascript:;" class="btn icon icon-mg-1"></a>
        </div>
        <div class="nav-btn">
          <div class="text-panel">
            <p>掌心尺寸轻松调节强度</p>
            <p>可连接PinkPunch App邀请密友隔空互动</p>
          </div>
          <a href="javascript:;" class="btn icon icon-mg-2"></a>
        </div>
        <div class="nav-btn">
          <div class="text-panel">
            <p>电量可以支撑使用1小时</p>
            <p>放回随身配备的太空舱随时随地补充电量</p>
          </div>
          <a href="javascript:;" class="btn icon icon-mg-3"></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script >
// 蘑菇太空舱
import lottie from "lottie-web";
// eslint-disable-next-line no-unused-vars
import { bgFlash } from "../../../static/lottie.js";
export default {
  name: "mgtkc",
  data() {
    return {
      lottie: {}
    };
  },
  mounted() {
    const width = document.getElementsByTagName("body")[0].clientWidth;
    const height = document.getElementsByTagName("body")[0].clientHeight;
    bgFlash.w = width;
    bgFlash.h = height;
    this.lottie = lottie.loadAnimation({
      container: document.getElementById("mgtkc"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: bgFlash
    });
  }
};
</script>
<style lang="less">
#mgtkc {
  background: #ffcc99;
}
</style>
