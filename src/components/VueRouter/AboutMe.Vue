<template>
    <div>
        <h1>关于我们</h1>
        <p class="ml-2">
            My Name is : <strong>{{$route.params.name}}</strong>
        </p>
        <p class="ml-2">
            My age is : <strong>{{$route.params.age}}</strong>
        </p>

        <swiper :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
            <!-- slides -->
            <swiper-slide>
                <img src="../../assets/01.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/02.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/03.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/04.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/05.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/06.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/07.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/08.jpg" alt="">
            </swiper-slide>
            <swiper-slide>
                <img src="../../assets/09.jpg" alt="">
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
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
        name: 'about',
        data(){
            return {
                swiperOption: {
                    autoplay:true,
                    pagination: {
                        el: '.swiper-pagination',
                    }
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

    img {
        margin-left: 650px;
    }
</style>