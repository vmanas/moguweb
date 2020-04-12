<template>
  <div class="lottie-box" id="mushroom">
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
    const width = document.getElementsByTagName("body")[0].clientWidth;
    const height = document.getElementsByTagName("body")[0].clientHeight;
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
  background: #cc6677;
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
    margin-left: 0.46rem;
    height: 400px;
  }
  .panel-active {
    p {
        font-size: 0.156rem;
        color: #fff;
        &:nth-child(1){
            font-size: 0.125rem;
            letter-spacing: 0.146rem;
        }
    }
    .panel-active-border{
        border-top: 2px solid #fff;
    }
    img {
      width: 2.56rem;
      margin-left: -0.13rem;
    }
  }
  p {
    text-align: left;
    font-family: 'FYZYT';
    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.75);
      font-size: 0.145rem;
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
  background-size: 2.76rem 4.45rem;
}
.right {
  width: 33.33%;
  position: absolute;
  border: 1px solid #fff;
  right: 0.67rem;
}
.nav-btn {
  a {
    width: 40px;
    height: 40px;
  }
  .text-panel{
      p{
          color: #fff;
      }
  }
}
.img-text {
  background-image: url("../../assets/img/other/rlmg.png");
  background-repeat: no-repeat;
}
</style>
