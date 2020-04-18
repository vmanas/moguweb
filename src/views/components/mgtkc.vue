<template>
  <div class="lottie-box" id="mgtkc">
    <div class="content"></div>
    <div class="right">
      <div class="nav-bar">
        <div class="nav-btn" @mouseenter="handleEnter(0)" :class="{'zoomIn': activeIndex == 0}">
          <div class="text-panel">
            <p>无线充电盒</p>
            <p>使用后将蘑菇放回太空舱自动开始充电</p>
          </div>
          <a href="javascript:;" class="btn icon icon-tkc-1"></a>
        </div>
        <div class="nav-btn" @mouseenter="handleEnter(1)" :class="{'zoomIn': activeIndex == 1}">
          <div class="text-panel">
            <p>蘑菇充电宝</p>
            <p>外出时太空舱内置电池可为蘑菇补足电量</p>
          </div>
          <a href="javascript:;" class="btn icon icon-tkc-2"></a>
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
      lottie: {},
      activeIndex:-1
    };
  },
  mounted() {
    const width = document.getElementsByTagName("body")[0].clientWidth;
    const height = document.getElementsByTagName("body")[0].clientHeight;
    bgFlash.w = width/window.fontScale;
    bgFlash.h = height/window.fontScale ;
    this.lottie = lottie.loadAnimation({
      container: document.getElementById("mgtkc"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: bgFlash
    });
  },
  methods:{
    handleEnter(val){
      this.activeIndex = -1;
      this.activeIndex = val
    }
  }
};
</script>
<style lang="less" scoped>
#mgtkc {
  background: #ffcc99;
}
.content{
  background-image: url('../../assets/img/other/tkc.png');
  background-size: 4.06rem 3.8rem;
}
.nav-btn {
  &:nth-child(1).zoomIn {
    .text-panel {
      display: block;
    }
    .icon-tkc-1{
      width: 0.98rem;
      height: 0.98rem;
      margin-top: -0.205rem;
      margin-left: -0.205rem;
      background-image: url("../../assets/img/icon/tkc-nav-1.png");
    }
  }
  &:nth-child(2).zoomIn {
    .text-panel {
      display: block;
    }
    .icon-tkc-2 {
      width: 0.98rem;
      height: 0.98rem;
      margin-top: -0.205rem;
      margin-left: -0.205rem;
      background-image: url("../../assets/img/icon/tkc-nav-2.png");
    }
  }
}
</style>
