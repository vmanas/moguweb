<template>
  <div class="home">
      <img src="../assets/logo.png" alt="logo">
      
  </div>
</template>

<script>
import lottie from 'lottie-web';
export default {
  name: 'Home',
    data(){
        return{
            lottie:{},  
        }
    },
    methods:{
        suspendFun:function(){
            this.lottie.pause();
        },
        startFun:function(){
            this.lottie.play()
        }
    },
    mounted(){
        this.lottie = lottie.loadAnimation({
            container: document.getElementById('lottie_box'),
            renderer: 'svg',
            loop: true,
            path: 'https://labs.nearpod.com/bodymovin/demo/markus/halloween/markus.json'
        })
    }
}
</script>
<style lang="less">
.home{
  height: 100%;
  background: #f66;
}
</style>