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
    top: 0.177rem;
    left: 0.854rem;
    z-index:9;
}

.home,.lottie-box{
  height: 100%;
}

.shop-btn{
    position: fixed;
    bottom: 0.67rem;
    right: 0.67rem;
    display: block;
    width: 0.57rem;
    height: 0.57rem;
    border-radius:0.57rem;
    z-index: 9;
}
.btn{
    display: block;
    width: 0.57rem;
    height: 0.57rem;
    border-radius:0.57rem;
    z-index: 9;
}
.test1{
    font-size: 0.06rem;
    font-family: FYZYT;
}


</style>