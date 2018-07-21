<template>
    <div>
        <div id="example">
            <!--记住这里函数名不要加括号-->
            <p>Original message: "{{ message }}"</p>
            <p>Computed reversed message: "{{ reversedMessage }}"</p>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: '',
        data(){
            return {
                message: 'Hello'
            }
        },
        computed: {
            // 计算属性的 getter
            reversedMessage: function () {
                // `this` 指向 vm 实例
                return this.message.split('').reverse().join('')
            }
        }
    }
</script>

<style scoped>
    #example{
        color: #b97e32;
    }
</style>
