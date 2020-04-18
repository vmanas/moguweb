<template>
  <div class="left">
    <div class="menu">
      <div class="menu-item" @mouseenter="handleMouse(0)">
        <p
          :class="['title-hide',{'title':activeIndex!=0 || hoverIndex !=0 || (activeIndex == 0 && hoverIndex!=0)}]"
        >日落蘑菇</p>
        <div
          :class="['panel',{'panel-active':activeIndex == 0 && hoverIndex == 0,'panel-hover':hoverIndex == 0 && activeIndex !=0}]"
        >
          <p class="text-space">跳蛋玩具</p>
          <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇" @click="handleClick(0)" />
          <p class="panel-active-border"></p>
          <p>粉嫩剔透，柔软外表内含充沛能量</p>
        </div>
      </div>

      <div class="menu-item" @mouseenter="handleMouse(1)">
        <p
          :class="['title-hide',{'title':activeIndex!=1 || hoverIndex !=1 || (activeIndex == 1 && hoverIndex!=1)}]"
        >日落蘑菇</p>
        <div
          :class="['panel',{'panel-active':activeIndex == 1 && hoverIndex == 1,'panel-hover':hoverIndex == 1 && activeIndex !=1}]"
        >
          <p class="text-space">跳蛋玩具</p>
          <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇" @click="handleClick(1)" />
          <p class="panel-active-border"></p>
          <p>粉嫩剔透，柔软外表内含充沛能量</p>
        </div>
      </div>

      <div class="menu-item" @mouseenter="handleMouse(2)">
        <p
          :class="['title-hide',{'title':activeIndex!=2 || hoverIndex !=2 || (activeIndex == 2 && hoverIndex!=2)}]"
        >日落蘑菇</p>
        <div
          :class="['panel',{'panel-active':activeIndex == 2 && hoverIndex == 2,'panel-hover':hoverIndex == 2 && activeIndex !=2}]"
        >
          <p class="text-space">跳蛋玩具</p>
          <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇" @click="handleClick(2)" />
          <p class="panel-active-border"></p>
          <p>粉嫩剔透，柔软外表内含充沛能量</p>
        </div>
      </div>

      <div class="menu-item" @mouseenter="handleMouse(3)">
        <p
          :class="['title-hide',{'title':activeIndex!=3 || hoverIndex !=3 || (activeIndex == 3 && hoverIndex!=3)}]"
        >日落蘑菇</p>
        <div
          :class="['panel',{'panel-active':activeIndex == 3 && hoverIndex == 3,'panel-hover':hoverIndex == 3 && activeIndex !=3}]"
        >
          <p class="text-space">跳蛋玩具</p>
          <img src="../../assets/img/other/rlmg.png" alt="日落蘑菇" @click="handleClick(3)" />
          <p class="panel-active-border"></p>
          <p>粉嫩剔透，柔软外表内含充沛能量</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-prop-type-constructor
    currentIndex: 0
  },
  data() {
    return {
      activeIndex: 0,
      hoverIndex: 0
    };
  },
  watch: {
    currentIndex(val) {
      this.activeIndex = val;
      console.log(this.activeIndex);
    }
  },
  methods: {
    handleMouse(val) {
      this.hoverIndex = val;
    },
    handleClick(val) {
      this.hover = false;
      this.activeIndex = val;
      this.$emit("setActive", val);
    }
  }
};
</script>
<style lang="less">
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
    p {
      text-align: left;
      font-family: "FYZYT";
      font-size: 0.156rem;
      color: #fff;
      cursor: default;
    }
  }

  .panel {
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    display: none;
    img {
      width: 2.56rem;
      margin-left: -0.13rem;
    }
    &.panel-active {
      display: block;
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;

      margin-top: 0.13rem;
      p.text-space {
        font-size: 0.125rem;
        letter-spacing: 0.146rem;
      }
      .panel-active-border {
        width: 2.3rem;
        height: 0;
        border-top: 0.01rem solid #fff;
        padding-top: 0.156rem;
      }
    }
    &.panel-hover {
      display: block;
      -webkit-animation-name: fadeIn;
      animation-name: fadeIn;
      p {
        display: none;
      }
    }
  }

  .title-hide {
    display: none;
    &.title {
      display: block;
    }
  }
  .menu-item {
  }
}
</style>