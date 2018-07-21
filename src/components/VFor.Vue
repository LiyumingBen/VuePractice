<template>
    <div>
        <!--v-for遍历数组-->
        <ul>
            <li v-for="person in persons">
                {{person}}
            </li>
        </ul>

        <ol>
            <li v-for="(person, index) in persons" :key="index" style="color: brown">
                {{person}}--{{index}}
            </li>
        </ol>

        <!--
          v-for变量对象,但是不建议使用循环去遍历对象，可以采用读取的方式去读取对象的属性
        -->

        <ul>
            <li v-for="(value, key, index) in object" :key="index">
                {{value}}.{{key}}.{{index}}
            </li>
        </ul>

        <!--复杂的数据结构遍历-->
        <ul>
            <li v-for="user in users" :class="userClass">
                <span>{{user.name}} - </span>
                <span>{{user.age}}</span>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'person',
        data(){
            return {
                persons: ['Liyuming', 'BenBen', 'Dujing', 'Lawen'],
                object: {
                    firstName: 'Ben',
                    secondName: 'Liyuming',
                    age: '20',
                    sex: '男'
                },
                users: [
                    {
                        id: 0,
                        name: 'Liyuming',
                        age: 20
                    },
                    {
                        id: 1,
                        name: 'Dujing',
                        age: 18
                    },
                    {
                        id: 2,
                        name: 'BenBen',
                        age: 21
                    },
                    {
                        id: 3,
                        name: 'Lanpanzi',
                        age: 17
                    },
                    {
                        id: 4,
                        name: 'Duolaaimeng',
                        age: 15
                    }
                ],
                userClass: 'userClass'
            }
        }
    }
</script>

<style scoped>
    li {
        list-style-type: none;
        color: #ffa334;
        display: inline-block;
    }

    .userClass{
        color: aqua;
    }
</style>