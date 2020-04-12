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

</style>