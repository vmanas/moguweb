<template>
  <div class="lottie-box" id="cdtkc">
    <div class="left">
      <div class="menu">
        <p>
          <a href="#mushroom">日落蘑菇</a>
        </p>
        <p>
          <a href="#mgtkc">充电太空舱</a>
        </p>
        <div class="panel-active">
          <!-- <p>APP</p> -->
          <img src="../../assets/img/other/app.png" alt="蘑菇太空舱" />
          <p class="panel-active-border">呼叫，连接，闭上眼</p>
        </div>
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
// 充电太空舱 APP
import lottie from "lottie-web";
// eslint-disable-next-line no-unused-vars
import { bgCloud } from "../../../static/lottie.js";
export default {
  name: "cdtkc",
  data() {
    return {
      lottie: {}
    };
  },
  mounted() {
    const width = document.getElementsByTagName('body')[0].clientWidth;
    const height = document.getElementsByTagName('body')[0].clientHeight;
    bgCloud.w = width;
    bgCloud.h = height;
    this.lottie = lottie.loadAnimation({
      container: document.getElementById("cdtkc"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: bgCloud
    });
  }
};
</script>
<style lang="less" scoped>
#cdtkc {
  background: #000000;
}
.content{
  width: 4rem;
  left: 0;
  right: 0;
  margin: 0 auto;
  background: url('../../assets/img/other/cdtkc-1.png') no-repeat center left,
            url('../../assets/img/other/cdtkc-2.png') no-repeat center right;
  background-size: 1.79rem 3.64rem;
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
