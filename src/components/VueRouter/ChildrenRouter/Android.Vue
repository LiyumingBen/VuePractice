<template>
    <div>
        <h3>Android</h3>
        <p>
            Android中获取到的count为: <strong class="text-danger">{{getCount}}</strong> 进行了减法操作
            <button class="btn btn-primary" @click="subtraction">count--</button>
        </p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'android',
        data(){
            return {}
        },
        computed:{
            getCount(){
                //return this.$store.state.count;
                return this.$store.getters.getState;
            }
        },
        methods:{
            subtraction(){
                //this.$store.commit('subtraction'); //mutations
                this.$store.dispatch('subtraction'); //action
            }
        }
    }
</script>

<style scoped lang="scss">

</style>
