<template>
  <div class="home">
      <img src="../assets/img/other/logo.png" alt="logo" class="logo">
      <a href="javascript:;" :class="['shop-btn','icon',{'icon-shop':!active,'icon-add':active}]"></a>
      <mush-room></mush-room>
      <mgtkc></mgtkc>
      <cdtkc></cdtkc>
      <bzpj></bzpj>
  </div>
</template>

<script>
import MushRoom from './components/rlmg';
import Mgtkc from './components/mgtkc';
import Cdtkc from './components/cdtkc';
import Bzpj from './components/bzpj';
import '../common/font/font.css'
export default {
  name: 'Home',
  components:{MushRoom,Mgtkc,Cdtkc,Bzpj},
    data(){
        return{
            active:false  
        }
    },
}
</script>
<style lang="less">
.logo{
    position: fixed;
    top: 34px;
    left: 164px;
}

.home,.lottie-box{
  height: 100%;
}

.shop-btn{
    position: fixed;
    bottom: 130px;
    right: 130px;
    display: block;
    width: 110px;
    height: 110px;
    border-radius:110px;
}
.test1{
    font-size: 24px;
    font-family: FYZYT;
}

</style>