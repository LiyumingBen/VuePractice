<template>
    <div class="child">
        <p>子组件(Son)</p>
        <slot name="header"></slot>
        <hr style=" height:2px;border:none;border-top:2px dotted #185598;">
        <slot name="footer" text="我是子组件数据"></slot>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'Child',
        data(){
            return {

            }
        }
    }
</script>

<style scoped>

</style>