<template>
    <div>
        <h1 style="color: #bf49fa">子组件传子组件数据</h1>
        <button type="button" class="btn btn-warning btn-lg" @click="handSendDataToFather">Send Data to Father1 from Son1</button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'Son1',
        data(){
            return {
                msg: "I`m a Son1 Component"
            }
        },
        props: {
          number:{
              type: Number,
              default: 5
          }
        },
        computed: {
            addNumber(){
                return this.number*5;
            }
        },
        methods: {
            handSendDataToFather(event){
                //两个参数  参数1：key  参数2：data
                this.$emit('sendMsg', this.addNumber);
            }
        }
    }
</script>

<style scoped>

</style>