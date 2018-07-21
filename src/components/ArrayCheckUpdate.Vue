<template>
    <div class="checkArrayUpdate">
        <h1>数组检测更新</h1>
        <ul>
            <li v-for="(name, index) in names">
                {{index}}.{{name}}---
            </li>
        </ul>
        <button class="btn btn-danger mb-4" @click="handGetItemInfo">
            Add Name
        </button>
        <h1>显示过滤/排序结果</h1>
        <h4 style="color: darkviolet">computed</h4>
        <ul>
            <li v-for="n in evenNumbers">
                {{n}}---
            </li>
        </ul>
        <h4 style="color: darkviolet">methods</h4>
        <ul>
            <li v-for="n in handEven(numbers)">
                {{n}}---
            </li>
        </ul>
        <hr>
        <h1>v-for on a template</h1>
        <ul>
            <template v-for="item in items">
                <li>
                    {{ item.msg }}
                </li>
                <li class="divider" role="presentation"></li>
            </template>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        //data更新会引起视图更新
        name: 'checkArrayUpdate',
        data(){
            return {
                names: ['Liyuming', 'BenBen', 'Dujing', 'LeBron James'],
                numbers: [ 1, 2, 3, 4, 5 ],
                items: [
                    {
                        msg: '我是Ben，我很低调！',
                        age: 18
                    },
                    {
                        msg: '我是King，我很高调！',
                        age: 20
                    }
                ]
            }
        },
        methods: {
            handGetItemInfo(){
                this.names.push('Daxiongmei');
            },
            handEven(){
                return this.numbers.filter(function (number) {
                    return number % 2 === 0
                })
            }
        },
        computed: {
            evenNumbers: function () {
                return this.numbers.filter(function (number) {
                    return number % 2 === 0
                })
            }
        }
    }
</script>

<style scoped>
    li{
        display: inline-block;
        list-style-type: none;
        color: #ffc88c;
    }
</style>

<!--
数组检测更新：
    1. 变异方法： 引起视图更新  filter
    2. 替换数组： 不会引起视图更新 concat
 -->
