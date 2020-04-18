<template>
  <div class="lottie-box" id="mushroom">
    <div class="content"></div>
    <div class="right">
      <div class="nav-bar">
        <div class="nav-btn" @mouseenter="handleEnter(0)" :class="{'zoomIn': activeIndex == 0}">
          <div class="text-panel">
            <p>通体透明硅胶包裹表面磨砂触感</p>
            <p>全机身密闭防水，使用后放心冲洗</p>
          </div>
          <a href="javascript:;" class="btn icon icon-mg-1"></a>
        </div>
        <div class="nav-btn" @mouseenter="handleEnter(1)" :class="{'zoomIn': activeIndex == 1}">
          <div class="text-panel">
            <p>掌心尺寸轻松调节强度</p>
            <p>可连接PinkPunch App邀请密友隔空互动</p>
          </div>
          <a href="javascript:;" class="btn icon icon-mg-2"></a>
        </div>
        <div class="nav-btn" @mouseenter="handleEnter(2)" :class="{'zoomIn': activeIndex == 2}">
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
// 日落蘑菇
import lottie from "lottie-web";
// eslint-disable-next-line no-unused-vars
import { bgMush } from "../../../static/lottie.js";
export default {
  name: "MushRoom",
  data() {
    return {
      lottie: {},
      activeIndex:-1
    };
  },
  mounted() {
    const width = document.getElementsByTagName("body")[0].clientWidth;
    const height = document.getElementsByTagName("body")[0].clientHeight;
    bgMush.w = width / window.fontScale;
    bgMush.h = height / window.fontScale;
    this.lottie = lottie.loadAnimation({
      container: document.getElementById("mushroom"),
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: bgMush
    });
    let list = document.querySelectorAll(".text-panel p");
    let len = list.length;
    for (let i = 0; i < len; i++) {
      list[i].style.transform = `scale(${window.fontScale})`;
    }
  },
  methods: {
    handleEnter(val){
      this.activeIndex = -1;
      this.activeIndex = val;
    }
  }
};
</script>
<style lang="less">
.lottie-box {
  height: 100%;
}
#mushroom {
  background: #cc6677;
}
.content {
  width: 100%;
  height: 100%;
  position: absolute;
  background-image: url("../../assets/img/other/mg.png");
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 3.2rem 4.45rem;
  z-index: 2;
}
.right {
  width: 0.57rem;
  height: 100%;
  position: absolute;
  right: 0.67rem;
  display: table;
  z-index: 8;
  .nav-bar {
    display: table-cell;
    vertical-align: middle;
  }
}

.nav-btn {
  position: relative;
  cursor: pointer;
  width: 0.57rem;
  height: 0.57rem;
  &:before {
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
  }
  a {
    width: 0.57rem;
    height: 0.57rem;
    margin: 0 auto;
  }

  .text-panel {
    position: absolute;
    right: 0.8rem;
    top: 0.2rem;
    display: none;
    p {
      color: #fff;
      text-align: right;
      font-family: "FYZYT";
      white-space: nowrap;
      font-size: 16px;
      transform-origin: right top;
      &:nth-child(1) {
        font-weight: 600;
        font-size: 18px;
      }
    }
  }
}
.nav-btn {
  margin-bottom: 0.05rem;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  &:nth-child(1).zoomIn {
    .text-panel {
      display: block;
    }
    .icon-mg-1 {
      width: 0.98rem;
      height: 0.98rem;
      margin-top: -0.205rem;
      margin-left: -0.205rem;
      background-image: url("../../assets/img/icon/mg-nav-1.png");
      background-size: 0.98rem 0.98rem;
    }
  }
  &:nth-child(2).zoomIn {
    .text-panel {
      display: block;
    }
    .icon-mg-2 {
      width: 0.98rem;
      height: 0.98rem;
      margin-top: -0.205rem;
      margin-left: -0.205rem;
      background-image: url("../../assets/img/icon/mg-nav-2.png");
      background-size: 0.98rem 0.98rem;
    }
  }
  &:nth-child(3).zoomIn {
    .text-panel {
      display: block;
    }
    .icon-mg-3 {
      width: 0.98rem;
      height: 0.98rem;
      margin-top: -0.205rem;
      margin-left: -0.205rem;
      background-image: url("../../assets/img/icon/mg-nav-3.png");
      background-size: 0.98rem 0.98rem;
    }
  }
}

.img-text {
  background-image: url("../../assets/img/other/rlmg.png");
  background-repeat: no-repeat;
}
</style>
