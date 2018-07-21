<template>
    <div>
        <hr>
        <h1>子组件和父组件之间通信</h1>
        <strong>prop向下传递， 事件向上传递</strong>
        <p>父组件</p>
        <button class="btn btn-success mb-1" @click="handChangeData">change data</button>
        <input type="text" class="form-control" v-model="lifemsg"/>
            <Son :data="msg" :lifemsg="lifemsg" :number="number" :objdata="objdata"/>
    </div>
</template>

<script type="text/ecmascript-6">
    import Son from "./Son";
    export default {
        name: 'Father',
        data(){
            return {
                msg: "this is father data",
                lifemsg: "life",
                number: 10,
                objdata: {
                    name: "Liyuming",
                    age: 22
                }
            }
        },
        methods: {
            handChangeData(){
                this.msg = "this data has be changed"
            }
        },
        components: {
            Son
        }
    }
</script>

<style scoped>

</style>