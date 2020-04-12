<template>
    <div class="lottie-box" id="mgtkc">

    </div>
</template>
<script >
// 蘑菇太空舱
import lottie from 'lottie-web';
// eslint-disable-next-line no-unused-vars
import {bgFlash} from '../../../static/lottie.js';
export default {
  name: 'mgtkc',
    data(){
        return{
            lottie:{},
        }
    },
    mounted(){
        this.lottie = lottie.loadAnimation({
            container: document.getElementById('mgtkc'),
            renderer: 'svg',
            loop: true,
            autoplay:true,
            animationData:bgFlash
        });
    }
}
</script>
<style lang="less">
    #mgtkc{
        background: #ffcc99;
    }
</style>
