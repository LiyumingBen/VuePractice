<template>
    <div>
        <hr>
        <h1>过滤器 v2.1.0+</h1>
        <input type="text" class="form-control w-50" v-model="price"/>
        <p>
            {{price | changeMoney}}
        </p>
        <p>
            {{edit | editTime}}
        </p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'filterDemo',
        data(){
            return {
                price: 2000000000000000,
                edit: "无需在乎他人看法，做好自己。谁都不欠谁的。"
            }
        },
        filters: {
            changeMoney(value){
                if(typeof value === "number"){
                    return "￥" + value;
                }else {
                    return "$" + value;
                }
            },
            editTime(value){
                return value + new Date()  + "---By Liyuming";
            }
        },
        methods: {
            handleChangeMoney(){

            }
        }
    }
</script>

<style scoped>

</style>