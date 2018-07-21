<template>
    <div class="users">
        <ul>
            <li v-for="user in users">
                {{user}}
            </li>
        </ul>
        <p v-html="msg"></p>
        <p v-text="msg1"></p>
        <p v-html="msg1" :class="fontColor"></p>
    </div>
</template>

<script type="text/ecmascript-6">
    /*
     * v-html和v-text区别 渲染文本
     * v-html可以渲染html 标签，v-text不可以
     * v-bind 绑定属性或者事件
     *
     * v-if和v-show的区别：
     * v-if是真正的渲染，相当于删除和添加dom 只有当条件问真的时候才会渲染而v-show不管怎么样先渲染出来，再通过css去控制显示和隐藏
     * 如果频繁的切换则使用v-show 如果运行中条件很少改变，则使用v-if比较好
     *
     *
     * */
    export default {
        name: 'users',
        data(){
            return {
                users: ['Ben', 'Liyuming', 'dujing', 'guanxiaotong', 'xudongdong', 'zhaoliying'],
                msg: 'Liyuming',
                msg1: '<strong>BenBen</strong>',
                fontColor: 'fontColor'
            }
        }
    }
</script>

<style scoped>
    li {
        list-style-type: none;
        color: #47caff;
        display: inline-block;
    }

    .fontColor {
        color: darkorange;
    }
</style>

<!--
每个列表必须加key 要不会报警告


-->