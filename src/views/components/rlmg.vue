<template>
  <div class="lottie-box" id="mushroom">
    <div class="left">
      <div class="menu">
        <p @mouseover="handleOver('rlmg')" :class="{'hide':hoverIndex === 1 && tagIndex === 1}">
          <a href="#mushroom">日落蘑菇</a>
        </p>
        <div  :class="{'panel animated zoomIn':hoverIndex === 1 && tagIndex !==1,'hide':hoverIndex!==1 || tagIndex ==1}">
           <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇" @click="handleClick('rlmg')" />
        </div>
        <div :class="[{'panel-active animated zoomIn':tagIndex === 1 && hoverIndex === 1},{'hide': tagIndex !==1 || hoverIndex!==1 }]">
          <p>跳蛋玩具</p>
          <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇"/>
          <p class="panel-active-border"></p>
          <p>粉嫩剔透，柔软外表内含充沛能量</p>
        </div>

        <p @mouseover="handleOver('mgtkc')" :class="{'hide':hoverIndex === 2 || tagIndex === 2}">
          <a href="#mgtkc">充电太空舱</a>
        </p>
        <div :class="{'panel animated zoomIn' :hoverIndex === 2 && tagIndex !==2,'hide':hoverIndex!==2 || tagIndex ==2}">
           <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇" @click="handleClick('mgtkc')" />
        </div>
        <div :class="[{'panel-active animated zoomIn':tagIndex === 2 && hoverIndex === 2},{'hide': tagIndex !==2 || hoverIndex!==2 }]">
          <p>跳蛋玩具</p>
          <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇"/>
          <p class="panel-active-border"></p>
          <p>粉嫩剔透，柔软外表内含充沛能量</p>
        </div>

        <p @mouseover="handleOver('cdtkc')" :class="{'hide':hoverIndex === 3 || tagIndex === 3}">
          <a href="#cdtkc">App</a>
        </p>
       <div :class="{'panel animated zoomIn':hoverIndex === 3 && tagIndex !==3,'hide':hoverIndex!==3 || tagIndex ==3}">
           <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇" @click="handleClick('rlmg')" />
        </div>
        <div :class="[{'panel-active animated zoomIn':tagIndex === 3 && hoverIndex === 3},{'hide': tagIndex !==3 || hoverIndex!==3 }]">
          <p>跳蛋玩具</p>
          <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇"/>
          <p class="panel-active-border"></p>
          <p>粉嫩剔透，柔软外表内含充沛能量</p>
        </div>

        <p @mouseover="handleOver('bzpj')" :class="{'hide':hoverIndex === 4 || tagIndex === 4}">
          <a href="#bzpj">包装与配件</a>
        </p>
        <div :class="{'panel animated zoomIn':hoverIndex === 4 && tagIndex !==4,'hide':hoverIndex!==4 || tagIndex ==4}">
           <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇" @click="handleClick('rlmg')" />
        </div>
        <div :class="[{'panel-active animated zoomIn':tagIndex === 4 && hoverIndex === 4},{'hide': tagIndex !==4 || hoverIndex!==4 }]">
          <p>跳蛋玩具</p>
          <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇"/>
          <p class="panel-active-border"></p>
          <p>粉嫩剔透，柔软外表内含充沛能量</p>
        </div>
      </div>
    </div>
    <div class="content"></div>
    <div class="right">
      <div class="nav-bar">
        <div class="nav-btn" :class="{'animated zoomIn':navActive == 1}" @mouseenter="navOver(true,1)" @mouseleave="navOver(false)">
          <div class="text-panel">
            <p>通体透明硅胶包裹表面磨砂触感</p>
            <p>全机身密闭防水，使用后放心冲洗</p>
          </div>
          <a href="javascript:;"  class="btn icon icon-mg-1" ></a>
        </div>
        <div class="nav-btn" :class="{'animated zoomIn':navActive == 2}" @mouseenter="navOver(true,2)" @mouseleave="navOver(false)">
          <div class="text-panel">
            <p>掌心尺寸轻松调节强度</p>
            <p>可连接PinkPunch App邀请密友隔空互动</p>
          </div>
          <a href="javascript:;" class="btn icon icon-mg-2"></a>
        </div>
        <div class="nav-btn" :class="{'animated zoomIn':navActive == 3}" @mouseenter="navOver(true,3)" @mouseleave="navOver(false)">
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
      tagIndex: 1,
      hoverIndex: 1,
      navActive:0
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
    navOver(val,num){
      if(val){
        this.navActive = num;
      }else{
        this.navActive = 0;
      }
      
    },
    handleOver(val) {
      switch (val) {
        case "rlmg":
          this.hoverIndex = 1;
          break;
        case "mgtkc":
          this.hoverIndex = 2;
          break;
        case "cdtkc":
          this.hoverIndex = 3;
          break;
        case "bzpj":
          this.hoverIndex = 4;
          break;
      }
    },
    handleClick(val) {
      switch (val) {
        case "rlmg":
          if (this.hoverIndex === 1) {
            this.tagIndex = 1;
          }

          break;
        case "mgtkc":
          if (this.hoverIndex === 2) {
            this.tagIndex = 2;
          }
          break;
        case "cdtkc":
          if (this.hoverIndex === 2) {
            this.tagIndex = 2;
          }
          break;
        case "bzpj":
          if (this.hoverIndex === 2) {
            this.tagIndex = 2;
          }
          break;
      }
    }
  }
};
</script>
<style lang="less">
#mushroom {
  background: #cc6677;
}
.hide{
  display: none;
}
.left {
  width: 2.39rem;
  height: 100%;
  position: absolute;
  z-index: 3;
  .menu {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    margin-left: 0.46rem;
    height: 2.7rem;
  }
  .panel-active {
    margin-top: 0.13rem;
    display: block;
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
      width: 2.3rem;
      height: 0;
      border-top: 0.01rem solid #fff;
      padding-top: 0.156rem;
    }
    img {
      width: 2.56rem;
      margin-left: -0.13rem;
    }
  }
  .panel{
    display: block;
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
      color: rgba(255, 255, 255, 0.5);
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
  margin-bottom: 0.1rem;
  &:nth-child(1):hover {
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
  &:nth-child(2):hover {
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
  &:nth-child(3):hover {
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
