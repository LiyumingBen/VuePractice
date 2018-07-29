<template>
    <div>
        <div class="left">
            <ul>
                <li>
                    <router-link to="/course/java">Java</router-link>
                </li>
                <li>
                    <router-link to="/course/web">Web</router-link>
                </li>
                <li>
                    <router-link to="/course/android">Android</router-link>
                </li>
            </ul>
        </div>
        <div class="right">
            <router-view></router-view>
            <div class="css3btn">
                <a href="http://wpa.qq.com/msgrd?V=1&amp;Uin=1046408090&amp;Menu=no" target="_blank">
                    <img :src="chartImage" alt="">
                    <p class="bubble">
                        有位老师想和您聊一聊
                    </p>
                </a>
            </div>
        </div>
        <div class="w">
            <img src="../../assets/hot.png" alt="" @click="handChangeHide" v-show="isShow">
        </div>
        <div id="floatPanel">
            <div class="controlPanel" style="right:20px;">
                <a class="arrow" href="#">
                    <img title="点击回到顶部" :src="topBack" @mouseover="mouseOver" @mouseout="mouseOut"/>
                </a>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import chartImage from '../../assets/t1.png';
    import topBack from '../../assets/02.png';
    import topBackHover from '../../assets/02_hover.png';
    export default {
        name: 'course',
        data(){
            return {
                chartImage: chartImage,
                isShow: true,
                topBack: topBack,
                topBackHover: topBackHover
            }
        },
        methods: {
            handChangeChart(){

            },
            handChangeHide(){
                this.isShow = !this.isShow;
            },
            mouseOut(){
                this.topBack = topBack;
            },
            mouseOver(){
                this.topBack = topBackHover;
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
    li {
        list-style-type: none;
        padding: 10px 0 0 0;
        width: 116px;
        font-size: 16px;
        line-height: 28px;
        color: #fff;
    }

    .left {
        background: linear-gradient(#82BEE3, #126ae3, #82BEE3);
        height: 1120px;
        width: 150px;
        border: 1px solid #1BA9E3;
        border-bottom: none;
        float: left;
    }

    li > a {
        color: #fff;
        cursor: pointer;
        margin: 5px 0;
        text-decoration: none;
    }

    .right {
        float: left;
    }

    .css3btn {
        top: 235px;
        right: 30px;
        z-index: 9999;
        position: fixed;
        cursor: pointer;
    }

    .css3btn img {
        left: -10px;
        top: 50%;
        margin-top: -35px;
        position: absolute;
        z-index: 9999;
        border: 0;
    }

    .css3btn p {
        font-size: 15px;
        width: 230px;
        height: 45px;
        line-height: 45px;
        text-indent: 55px;
        text-align: center;
        color: #fff;
        display: block;
        overflow: hidden;
        position: relative;
        background: #ff5400;
        background: linear-gradient(#0088ff, rgba(35, 133, 255, 0.8));
        text-transform: uppercase;
        border-radius: 20px;
        margin-top: 16px;
    }

    .css3btn p.bubble:after {
        content: "";
        background: #fff;
        position: absolute;
        width: 200px;
        height: 200px;
        left: 35px;
        right: 0;
        top: 0;
        bottom: 0;
        opacity: 0;
        margin: auto;
        border-radius: 50%;
        -webkit-transform: scale(1);
        transform: scale(1);
        -webkit-animation: 1s btn ease-in-out infinite;
        animation: 1s btn ease-in-out infinite;
    }

    @keyframes btn {
        from {
            width: 0;
            height: 0;
            opacity: 1;
        }
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }

    @-webkit-keyframes btn {
        from {
            width: 0;
            height: 0;
            opacity: 1;
        }
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }

    .w{
        text-align: center;
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 999999;
        height: 50px;
    }

    a{
        text-decoration: none;
    }


    #floatPanel .controlPanel{
        width:60px;
        height:60px;
        position:fixed;
        right:25px;
        top:50%;
        overflow:hidden;
        z-index:10000;
    }

    .active{
        color: red;
    }
</style>