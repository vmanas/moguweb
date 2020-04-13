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
    height: 2.08rem;
  }
  .panel-active {
    p {
      font-size: 0.156rem;
      color: #fff;
      cursor: default;
      &:nth-child(1) {
        font-size: 0.125rem;
        letter-spacing: 0.146rem;
      }
    }
    .panel-active-border {
      border-top: 0.01rem solid #fff;
      padding-top: 0.156rem;
    }
    img {
      width: 2.56rem;
      margin-left: -0.13rem;
    }
  }
  p {
    text-align: left;
    font-family: "FYZYT";

    a {
      text-decoration: none;
      color: rgba(255, 255, 255, 0.75);
      font-size: 0.145rem;
      margin-top: 0.13rem;
      display: inline-block;
      font-weight: 600;
      &:hover {
        color: #fff;
      }
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
  z-index: 2;
}
.right {
  width: 0.78rem;
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
  width: 0.98rem;
  height: 0.98rem;
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
    position: relative;
    top: 50%;
    margin-top: -0.265rem;
  }

  .text-panel {
    position: absolute;
    right: 1.11rem;
    top: 0.3rem;
    display: none;
    p {
      color: #fff;
      text-align: right;
      font-family: "FYZYT";
      white-space: nowrap;
      font-size: 0.083rem;
      &:nth-child(1) {
        font-weight: 600;
        font-size: 0.093rem;
        margin-bottom: 0.04rem;
      }
    }
  }
}
.nav-btn {
  &:nth-child(1):hover {
    .text-panel {
      display: block;
    }
    .icon-mg-1 {
      width: 0.98rem;
      height: 0.98rem;
      margin-top: 0;
      top: 0;
      background-image: url("../../assets/img/icon/mg-nav-1.png");
    }
  }
  &:nth-child(2):hover {
    .text-panel {
      display: block;
    }
    .icon-mg-2 {
      width: 0.98rem;
      height: 0.98rem;
      margin-top: 0;
      top: 0;
      background-image: url("../../assets/img/icon/mg-nav-2.png");
    }
  }
  &:nth-child(3):hover {
    .text-panel {
      display: block;
    }
    .icon-mg-3 {
      width: 0.98rem;
      height: 0.98rem;
      margin-top: 0;
      top: 0;
      background-image: url("../../assets/img/icon/mg-nav-3.png");
    }
  }
}

.img-text {
  background-image: url("../../assets/img/other/rlmg.png");
  background-repeat: no-repeat;
}
</style>
