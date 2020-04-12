<template>
    <div class="lottie-box" id="mushroom">

    </div>
</template>
<script >
// 日落蘑菇
import lottie from 'lottie-web';
// eslint-disable-next-line no-unused-vars
import {bgMush} from '../../../static/lottie.js';
export default {
  name: 'MushRoom',
    data(){
        return{
            lottie:{},
        }
    },
    mounted(){
        this.lottie = lottie.loadAnimation({
            container: document.getElementById('mushroom'),
            renderer: 'svg',
            loop: true,
            autoplay:true,
            animationData:bgMush
        });
    }
}
</script>
<style lang="less">
    #mushroom{
        background: #cc6699;
    }
</style>
