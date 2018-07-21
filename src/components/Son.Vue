<template>
    <div>
        <p class="d-inline">子组件</p>
        {{data}}--{{lifemsg}}@@@{{number*5}}
        <input type="text" readonly class="form-control" style="opacity: 0.7" v-model="number"/>
        {{objdata.name}}----{{objdata.age}}
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'Son',
        data(){
            return {}
        },
        props: {
            data: {
                type: [String, Number],
                require: true
            },
            lifemsg: {
                type: [String, Number],
                require: true
            },
            number: {
                type: [Number],
                require: true,
                default: 5
            },
            objdata: {
                type: Object,
                default: function () { //如果是对象或者是数组要使用函数return  方式去写
                    return {
                        name: "Ben",
                        age: 100
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>