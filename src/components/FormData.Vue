<template>
    <div>
        <h1 class="box text-primary">Form Data</h1>
        <div class="alert alert-danger" role="alert">
            <i class="fa fa-eye " aria-hidden="true"></i>
            <i class="fa fa-bluetooth"></i>
            <i class="fa fa-twitter-square"></i>
            <span class="sr-only">Error:</span>
            Enter a valid email address
        </div>
        <input type="password" class="form-control w-50 d-inline"/>
        <i class="fa fa-eye " aria-hidden="true">
        </i>
        <div class="alert alert-danger" role="alert">
            <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
            <span class="sr-only">Error:</span>
            Enter a valid email address
        </div>

        <hr>
        <h1>Watch 双向数据绑定</h1>
        <input type="text" class="form-control w-80" v-model="msg"/>
        <p class="lead bg-info" style="height: 30px; margin: 15px 150px">{{msg}}</p>
        <h1 class="text-primary">修饰符</h1>
        <h2>Lazy</h2>
        <input type="text" class="form-control w-80" v-model.lazy="msg1"/>
        <p class="lead bg-info" style="height: 30px; margin: 15px 150px">{{msg1}}</p>
        <h2>Number</h2>
        <input type="text" class="form-control w-80" v-model.number="msg2"/>
        <p class="lead bg-info" style="height: 30px; margin: 15px 150px">{{msg2}}</p>
    </div>
</template>

<script type="text/ecmascript-6">
    $(function () {
        console.log("测试jQuery是否引入");
    });
    export default {
        name: '',
        data(){
            return {
                msg: "Ben",
                msg1: "Lazy",
                msg2: "Number",
                msg3: ""
            }
        },
        watch: {
           msg: function (data) {
               console.log(data);
           }
        }
    }
</script>

<style lang="scss" scoped type="text/css">
   /* $color: #597DFF;
    .box {
        color: $color;
    }*/
</style>

<!--
    修饰符：
       lazy： 失去焦点
       number: 转换为Number类型
       trim： 如果要自动过滤用户输入的首尾空白字符

-->
