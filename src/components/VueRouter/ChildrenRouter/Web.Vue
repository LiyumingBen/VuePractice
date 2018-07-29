<template>
    <div>
        <h3>Web</h3>
        <p>
            Web中获取到的count为: <strong class="text-danger">{{getCount}}</strong> 进行了加法操作
            <button class="btn btn-primary" @click="add">count++</button>
        </p>
        <img alt="" v-lazy="imgObj">
    </div>
</template>

<script type="text/ecmascript-6">
    import p5 from "../../../assets/05.jpg";
    import error from "../../../assets/ava_error.png";
    import loading from "../../../assets/loading.png";
    export default {
        name: 'web',
        data(){
            return {
                /*引入图片如果在js中， 必须使用require*/
                imgObj: {
                    src: require("../../../assets/05.jpg"),
                    error: require("../../../assets/ava_error.png"),
                    loading: require("../../../assets/loading.png")
                }
            }
        },
        computed:{
            getCount(){
                return this.$store.state.count;
            }
        },
        methods:{
            add(){
                //this.$store.commit('increment'); //mutations
                this.$store.dispatch('increment'); //action
            }
        }
    }
</script>

<style scoped>

</style>
