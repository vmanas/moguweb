<template>
  <div class="home">
      <img src="../assets/img/other/logo.png" alt="logo" class="logo">
      <a href="javascript:;" :class="['shop-btn',{'icon-shop':!active,'icon-add':active}]"></a>
        <mush-room></mush-room>
  </div>
</template>

<script>
import MushRoom from './components/rlmg'
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

</style>