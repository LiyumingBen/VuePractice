<template>
    <div>
        <input type="text" v-focus class="form-control mb-2">
        <p v-addStyle>我是自定义属性</p>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'definedcmd',
        data(){
            return {}
        },
        directives:{
            focus:{
                inserted(el){
                    el.focus();
                }
            },
            addStyle:{
                inserted(el){
                    el.style.color = 'red';
                }
            }
        }
    }
</script>

<style scoped>

</style>