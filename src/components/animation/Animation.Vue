<template>
    <div>
        <h1>过度动画</h1>
         <button @click="handShow" class="btn btn-warning mb-2">显示隐藏</button>

        <transition name="fade">
            <p v-show="show" class="text-danger">我是显示内容</p>
        </transition>

        <hr>
        <div id="example-2" style="width: 200px; height: 250px; background-color: #00AA88" >
            <transition name="bounce">
                <p v-if="show1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris facilisis enim libero, at lacinia diam fermentum id. Pellentesque habitant morbi tristique senectus et netus.</p>
            </transition>
        </div>
        <button @click="show1 = !show1" class="btn btn-danger  mb-2">Toggle show</button>

        <hr>
        <h2>自定义过渡类名Animate.css</h2>
        <div id="example-3">
            <button @click="show2 = !show2" class="btn btn-info mb-2">
                Toggle render
            </button>
            <transition
                    name="custom-classes-transition"
                    enter-active-class="animated flip"
                    leave-active-class="animated flip"
            >
                <p v-if="show2">hello, everyone today is my lucky day</p>
            </transition>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'animation',
        data(){
            return {
                show: false,
                show1: true,
                show2: false
            }
        },
        methods: {
            handShow(){
                this.show = !this.show;
            }
        }
    }
</script>

<style scoped>
    /*从没有到有*/
   /* .fade-leave-active, .fade-leave-active {
        transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to{
        opacity: 0;
    }

    .fade-leave-to, .fade-leave{
        opacity: 1;
    }*/
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }


    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
       /* 0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }*/

        0%{
            transform: rotateZ(60deg);
        }
        20%{
            transform: rotateZ(120deg);
        }
        40%{
            transform: rotateZ(180deg);
        }
        60%{
            transform: rotateZ(240deg);
        }
        80%{
            transform: rotateZ(300deg);
        }
        100%{
            transform: rotateZ(360deg);
        }
    }

</style>

<!--

在进入/离开的过渡中，会有 6 个 class 切换。

v-enter：定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。

v-enter-active：定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。

v-enter-to: 2.1.8版及以上 定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter 被移除)，在过渡/动画完成之后移除。

v-leave: 定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。

v-leave-active：定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。

v-leave-to: 2.1.8版及以上 定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave 被删除)，在过渡/动画完成之后移除。

对于这些在过渡中切换的类名来说，如果你使用一个没有名字的 <transition>，则 v- 是这些类名的默认前缀。如果你使用了 <transition name="my-transition">，那么 v-enter 会替换为 my-transition-enter。
-->