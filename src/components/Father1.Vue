<template>
    <div>
        <h2>父组件</h2>
        <Son1 @sendMsg="getMsg" :number="getStringToNumber"/>
        <input type="text" v-model="number" class="form-control">
        <p>子组件传递过来的信息： {{info}}</p>

    </div>
</template>

<script type="text/ecmascript-6">
    import Son1 from './Son1'
    export default {
        name: 'Father1',
        data(){
            return {
                info: "",
                number: 10
            }
        },
        computed:{
          getStringToNumber(){
              console.log(this.number);
              return this.number - 0;
          }
        },
        components: {
            Son1
        },
        methods: {
            getMsg(data){
                this.info = data;
                //console.log(data);
            }
        }
    }
</script>

<style scoped>

</style>