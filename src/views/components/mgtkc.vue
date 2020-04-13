<template>
  <div class="lottie-box" id="mgtkc">
    <div class="left">
      <div class="menu">
        <p>
          <a href="#mushroom">日落蘑菇</a>
        </p>
        <div class="panel-active">
          <p>蘑菇充电宝</p>
          <img src="../../assets/img/other/mgtkc.png" alt="蘑菇太空舱" />
          <p class="panel-active-border">有我，就一定有电</p>
        </div>
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
            <p>无线充电盒</p>
            <p>使用后将蘑菇放回太空舱自动开始充电</p>
          </div>
          <a href="javascript:;" class="btn icon icon-tkc-1"></a>
        </div>
        <div class="nav-btn">
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
<style lang="less" scoped>
#mgtkc {
  background: #ffcc99;
}
.content{
  background-image: url('../../assets/img/other/tkc.png');
  background-size: 4.06rem 3.8rem;
}
.nav-btn {
  &:nth-child(1):hover {
    .text-panel {
      display: block;
    }
    .icon-tkc-1{
      width: 0.98rem;
      height: 0.98rem;
      margin-top: 0;
      top: 0;
      background-image: url("../../assets/img/icon/tkc-nav-1.png");
    }
  }
  &:nth-child(2):hover {
    .text-panel {
      display: block;
    }
    .icon-tkc-2 {
      width: 0.98rem;
      height: 0.98rem;
      margin-top: 0;
      top: 0;
      background-image: url("../../assets/img/icon/tkc-nav-2.png");
    }
  }
}
</style>
