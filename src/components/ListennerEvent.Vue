<template>
    <!--在template只能存在一个根组件-->
    <div>
        <button @click.once="handAddNumber" class="btn btn-success btn-lg"  id="tips2" type="button">按钮</button>
        <hr/>
        <button class="btn btn-danger btn-sm">button</button>

        <ul>
            <li @click.stop="handGetItemInfo(index, $event)" v-for="(name, index) in names">
                {{index}}.{{name}}-----
            </li>
        </ul>

        <input type="text" @keyup.enter="handChange($event)" class="w-50 mb-3 border border-info form-control">

        <input v-model="message" placeholder="edit me" class="w-50 mb-3 border border-danger form-control">
        <p>Message is: {{ message }}</p>

        <input type="text" @keyup.13="handChange($event)" class="w-50 mb-3 border border-info form-control">

        <div class="alert alert-danger" role="alert">
            This is a danger alert—check it out!
        </div>

        <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>

        <hr>
        <form class="form-inline mb-3">
            <div class="form-group">
                <label for="exampleInputEmail2">Email: </label>
                <input type="email" id="exampleInputEmail2" @keyup="getKeyInfo" class="form-control ml-3" placeholder="jane.doe@example.com">
            </div>
            <div class="form-group">
                <label for="password">密码：</label>
                <input type="password" class="form-control ml-3" placeholder="******" id="password"/>
            </div>
        </form>
    </div>
</template>

<script type="text/ecmascript-6">
    /*导出被外部所能访问的组件*/
    export default {
        name: '',
        data(){
            return {
                names: ['Liyuming', 'BenBen', 'Dujing'],
                message: ''
            }
        },
        methods: {
            handAddNumber(){
                console.log(this); //this指向当前组件
                alert("我是click事件");
                this.$layer.alert("在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，在很久很久以前，", '#tips2', {
                    icon: 2
                });
            },
            handGetItemInfo(data, event){
                console.log(this.names[data]);
                console.log(data); //data为索引
                console.log(event.clientX);
                console.log(event.target)
            },
            handChange(event){
                console.log(event);
                alert("这是keyup事件");
            },
            getKeyInfo(event){
                console.log(event.key);
                console.log(event);
            }
        }
    }
</script>

<style scoped>
    li{
        display: inline-block;
        list-style-type: none;
        color: #9aa8ff;
    }
</style>

<!--
事件修饰符： 修饰符可以串联
 1. stop 阻止事件冒泡
 2. prevent 阻止默认事件
 3. once 只触发一次
 4. self 只当在 event.target 是当前元素自身时触发处理函数 即事件不是从内部元素触发的
 5. capture 添加事件监听器时使用事件捕获模式 即元素自身触发的事件先在此处处理，然后才交由内部元素进行处理

 使用修饰符时，顺序很重要；相应的代码会以同样的顺序产生。因此，用 v-on:click.prevent.self
 会阻止所有的点击，而 v-on:click.self.prevent 只会阻止对元素自身的点击。
-->


