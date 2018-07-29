<template>
    <div>
        <el-carousel :interval="4000" type="card" height="469px">
            <el-carousel-item v-for="(image,index) in images" :key="index">
                <img :src="image" alt="">
            </el-carousel-item>
        </el-carousel>
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
        name: 'index',
        data(){
            return {
                images: [p1, p2, p3, p4, p5, p6, p7, p8, p9]
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

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }

    img {
        width: 100%;
    }
</style>