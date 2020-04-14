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
          <img src="../../assets/img/other/app.png" alt="蘑菇太空舱" />
          <p class="panel-active-border"></p>
          <p>呼叫，连接，闭上眼</p>
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
            <p>5档波形切换得心应手</p>
            <p>一键连接蓝牙，单手调节得心应手</p>
          </div>
          <a href="javascript:;" class="btn icon icon-cdtkc-1"></a>
        </div>
        <div class="nav-btn">
          <div class="text-panel">
            <p>邀请伙伴远程互动</p>
            <p>与伙伴一起探索远程游戏体验互动乐趣</p>
          </div>
          <a href="javascript:;" class="btn icon icon-cdtkc-2"></a>
        </div>
         <div class="nav-btn">
          <div class="text-panel">
            <p>邀听见对方声音</p>
            <p>远程互动中可进行语音和文字聊天</p>
          </div>
          <a href="javascript:;" class="btn icon icon-cdtkc-3"></a>
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
    .icon-cdtkc-1{
      width: 0.98rem;
      height: 0.98rem;
      margin-top: -0.205rem;
      margin-left: -0.205rem;
      background-image: url("../../assets/img/icon/cdtkc-nav-1.png");
    }
  }
  &:nth-child(2):hover {
    .text-panel {
      display: block;
    }
    .icon-cdtkc-2 {
      width: 0.98rem;
      height: 0.98rem;
       margin-top: -0.205rem;
      margin-left: -0.205rem;
      background-image: url("../../assets/img/icon/cdtkc-nav-2.png");
    }
  }
  &:nth-child(3):hover {
    .text-panel {
      display: block;
    }
    .icon-cdtkc-3 {
      width: 0.98rem;
      height: 0.98rem;
       margin-top: -0.205rem;
      margin-left: -0.205rem;
      background-image: url("../../assets/img/icon/cdtkc-nav-3.png");
    }
  }
}
</style>
