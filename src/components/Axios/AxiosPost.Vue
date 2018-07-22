<template>
    <div>
        <h1>Axios Post</h1>
    </div>
</template>

<script type="text/ecmascript-6">
    //import qs from 'qs';
    export default {
        name: 'axios',
        data(){
            return {}
        },
        created(){
            this.$axios.post('http://www.wwtliu.com/sxtstu/blueberrypai/login.php',{
                user_id: "iwen@qq.com",
                password: "iwen123",
                verification_code: "crfvw"
            })
            .then(res =>{
                console.log(res.data.success + '代表请求成功');
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
</script>

<style scoped>

</style>

<!--
  注意： Axios接受的post请求参数的格式是form-data格式
-->