<template>
    <div class="parent">
        <hr style=" height:2px;border:none;border-top:2px dotted #185598;">
        <p>父组件(Father)</p>
            <Child>
                <div slot="header">
                    <p>我是插槽header</p>
                    <button class="btn btn-default">我是插槽header里面button</button>
                </div>
                <p slot="footer" slot-scope="props">
                    我是插槽footer <br>
                    儿子传过来的数据：
                   <strong> {{props.text}}</strong>
                </p>
            </Child>
    </div>
</template>

<script type="text/ecmascript-6">
    import Child from './Child';
    export default {
        name: 'Parent',
        data(){
            return {

            }
        },
        components:{
            Child
        }
    }
</script>

<style scoped>

</style>


<!--
    特别注意：
         插槽没有scoped作用域之分，所以在定义样式的时候需要注意类的命名
-->