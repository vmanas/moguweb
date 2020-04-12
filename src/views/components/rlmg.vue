<template>
  <div class="lottie-box" id="mushroom">
    <div class="left">
      <div class="menu">
        <div class="panel-active">
          <p>跳蛋玩具</p>
          <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇" />
          <p>粉嫩剔透，柔软外表内含充沛能量</p>
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
      <div class="nav-btn">
        <div class="text-panel">
          <span>通体透明硅胶包裹表面磨砂触感</span>
          <span>全机身密闭防水，使用后放心冲洗</span>
        </div>
        <a href="javascript:;" class="icon-mg-1"></a>
      </div>
      <div class="nav-btn">
        <a href="javascript:;" class="icon-mg-2"></a>
      </div>
      <div class="nav-btn">
        <a href="javascript:;" class="icon-mg-3"></a>
      </div>
    </div>
  </div>
</template>
<script >
// 日落蘑菇
import lottie from "lottie-web";
// eslint-disable-next-line no-unused-vars
import { bgMush } from "../../../static/lottie.js";
export default {
  name: "MushRoom",
  data() {
    return {
      lottie: {}
    };
  },
  mounted() {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    bgMush.w = width;
    bgMush.h = height;
    this.lottie = lottie.loadAnimation({
      container: document.getElementById("mushroom"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: bgMush
    });
  }
};
</script>
<style lang="less">
#mushroom {
  background: #cc6666;
}
.left {
  width: 33.33%;
  height: 100%;
  position: absolute;
  z-index: 2;
  .menu {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 400px;
  }
  .panel-active p {
    font-size: 24px;
    color: #fff;
  }
  p {
    text-align: left;
    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.75);
      font-size: 28px;
    }
  }
}
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("../../assets/img/other/mg.png");
  background-repeat: no-repeat;
  background-position: center center;
}
.right {
  width: 33.33%;
  position: absolute;
  border: 1px solid #fff;
}
.nav-btn {
  a {
    width: 40px;
    height: 40px;
  }
}
.img-text {
  background-image: url("../../assets/img/other/rlmg.png");
  background-repeat: no-repeat;
}
</style>
