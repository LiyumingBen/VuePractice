<template>
    <div>
        <h1>技术社区</h1>
        <div>
            <div class="toggle">
                <input type="checkbox">
                <span class="button"></span>
                <span class="label">+</span>
            </div>
            <div class="toggle">
                <input type="checkbox" checked>
                <span class="button"></span>
                <span class="label">–</span>
            </div>
        </div>

        <swiper :options="swiperOption">
            <swiper-slide v-for="(banner, index) in banners" :key="index">
                <img :src="banner" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script type="text/ecmascript-6">
    import p1 from "../../assets/01.jpg";
    import p2 from "../../assets/02.jpg";
    import p3 from "../../assets/03.jpg";
    import p4 from "../../assets/04.jpg";
    import p5 from "../../assets/05.jpg";
    import p6 from "../../assets/06.jpg";
    import p7 from "../../assets/07.jpg";
    import p8 from "../../assets/08.jpg";
    import p9 from "../../assets/09.jpg";
    export default {
        name: 'community',
        data(){
            return {
                banners: [ p1, p2, p3, p4, p5, p6, p7, p8, p9],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    // some swiper options...
                }
            }
        }
    }
</script>

<style scoped>
    h1 {
        font-size: 2.4em;
        background-color: #292929;
        text-align: center;
        padding: 20px;
        margin: 0;
        color: #fff;
    }
    .toggle {
        margin: 4px;
        display: inline-block;
    }

    .toggle {
        box-shadow: inset 0 0 35px 5px rgba(0, 0, 0, 0.25), inset 0 2px 1px 1px rgba(255, 255, 255, 0.9), inset 0 -2px 1px 0 rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background: #ccd0d4;
        position: relative;
        height: 140px;
        width: 140px;
    }
    .toggle:before {
        box-shadow: 0 0 17.5px 8.75px white;
        border-radius: 118.3px;
        background: white;
        position: absolute;
        margin-left: -50.4px;
        margin-top: -50.4px;
        opacity: 0.2;
        content: "";
        height: 100.8px;
        width: 100.8px;
        left: 50%;
        top: 50%;
    }
    .toggle .button {
        -webkit-filter: blur(1px);
        -moz-filter: blur(1px);
        filter: blur(1px);
        transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
        box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.5), inset 0 -3px 4px -1px rgba(0, 0, 0, 0.2), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 3px 4px -1px rgba(255, 255, 255, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.8), inset 0 20px 30px 0 rgba(255, 255, 255, 0.2);
        border-radius: 96.32px;
        position: absolute;
        background: #ccd0d4;
        margin-left: -48.16px;
        margin-top: -48.16px;
        display: block;
        height: 96.32px;
        width: 96.32px;
        left: 50%;
        top: 50%;
    }
    .toggle .label {
        transition: color 300ms ease-out;
        text-shadow: 1px 1px 3px #ccd0d4, 0 0 0 rgba(0, 0, 0, 0.8), 1px 1px 4px white;
        line-height: 139px;
        text-align: center;
        position: absolute;
        font-weight: 700;
        font-size: 42px;
        display: block;
        opacity: 0.9;
        height: 100%;
        width: 100%;
        color: rgba(0, 0, 0, 0.4);
    }
    .toggle input {
        opacity: 0;
        position: absolute;
        cursor: pointer;
        z-index: 1;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
    }
    .toggle input:active ~ .button {
        box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.4), inset 0 -8px 30px 1px rgba(255, 255, 255, 0.9), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 8px 25px 0 rgba(0, 0, 0, 0.4), inset 0 0 10px 1px rgba(255, 255, 255, 0.6);
    }
    .toggle input:active ~ .label {
        font-size: 40px;
        color: rgba(0, 0, 0, 0.45);
    }
    .toggle input:checked ~ .button {
        box-shadow: 0 15px 25px -4px rgba(0, 0, 0, 0.4), inset 0 -8px 25px -1px rgba(255, 255, 255, 0.9), 0 -10px 15px -1px rgba(255, 255, 255, 0.6), inset 0 8px 20px 0 rgba(0, 0, 0, 0.2), inset 0 0 5px 1px rgba(255, 255, 255, 0.6);
    }
    .toggle input:checked ~ .label {
        font-size: 40px;
        color: rgba(0, 0, 0, 0.4);
    }


    img {
        margin-left: 620px;
    }
</style>
