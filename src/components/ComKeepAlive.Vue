<template>
    <div>
        <h1>动态组件</h1>
        <!--{{currentView}}-->

        <keep-alive> <!--这里起到缓存效果， 就是数据没有改变不去渲染页面-->
            <componet :is="currentView"></componet>
        </keep-alive>
        <button class="btn btn-info" @click="handChangeView">切换组件</button>
    </div>
</template>

<script type="text/ecmascript-6">
    import Small1 from './Small1';
    import Small2 from './Small2';
    export default {
        name: 'comkeepalive',
        data(){
            return {
                currentView: 'Small1',
                flag: true
            }
        },
        components:{
            Small1,
            Small2
        },
        methods:{
            handChangeView(){
                if(this.flag){
                    this.currentView = 'Small2';
                }else {
                    this.currentView = 'Small1';
                }
                this.flag = !this.flag;
            }
        }
    }
</script>

<style scoped>

</style>