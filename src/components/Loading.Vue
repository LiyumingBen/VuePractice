<template>
    <div>
        <hr>
        <h2>Loading</h2>
        <vue-loading type="bars" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <vue-loading type="balls" color="rgb(90, 185, 92)" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <vue-loading type="beat" color="rgb(90, 193, 221)" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <vue-loading type="bubbles" color="rgb(32, 160, 255)" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <vue-loading type="cylon" color="rgb(69, 126, 134)" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <vue-loading type="spin" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <vue-loading type="spiningDubbles" color="rgb(247, 186, 42)" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <vue-loading type="barsCylon" color="#d9544e" :size="{ width: '50px', height: '50px' }"></vue-loading>
        <hr>
    </div>
</template>

<script type="text/ecmascript-6">
    import { VueLoading } from 'vue-loading-template'
    export default {
        name: 'loading',
        data(){
            return {}
        },
        components: {
            VueLoading
        }
    }
</script>

<style scoped>

</style>