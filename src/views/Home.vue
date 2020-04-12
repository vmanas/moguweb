<template>
  <div class="home">
      <img src="../assets/img/other/logo.png" alt="logo" class="logo">
      <a href="javascript:;" :class="['shop-btn',{'icon-shop':!active,'icon-add':active}]"></a>
        <mush-room></mush-room>
      <div class="test1">蘑菇街</div>
  </div>
</template>

<script>
import MushRoom from './components/rlmg'
import '../common/font/font.css'
export default {
  name: 'Home',
  components:{MushRoom},
    data(){
        return{
            active:false  
        }
    },
}
</script>
<style lang="less">
.logo{
    position: absolute;
    top: 20px;
    left: 100px;
}
.home,.lottie-box{
  height: 100%;
}

.shop-btn{
    position: absolute;
    bottom: 20px;
    right: 20px;
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 20px;
}
.test1{
    font-size: 24px;
    font-family: FYZYT;
}

</style>