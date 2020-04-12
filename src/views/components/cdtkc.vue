<template>
    <div class="lottie-box" id="cdtkc">

    </div>
</template>
<script >
// 充电太空舱
import lottie from 'lottie-web';
// eslint-disable-next-line no-unused-vars
import {bgCloud} from '../../../static/lottie.js';
export default {
  name: 'cdtkc',
    data(){
        return{
            lottie:{},
        }
    },
    mounted(){
        this.lottie = lottie.loadAnimation({
            container: document.getElementById('cdtkc'),
            renderer: 'svg',
            loop: true,
            autoplay:true,
            animationData:bgCloud
        });
    }
}
</script>
<style lang="less">
    #cdtkc{
        background: #000000;
    }
</style>
