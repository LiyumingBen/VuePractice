<template>
    <div>
        <hr>
        <h1>Axios Get</h1>
            <ul>
                <li v-for="listen in listening">
                    <p>{{listen.title}}---{{listen.writer}}</p>
                    <img :src="listen.img" alt="">
                    <p>{{listen.series}}---{{listen.label}}</p>
                    {{listen.head_pic}}
                    <img :src="listen.head_pic" alt="">
                </li>
            </ul>
        <hr>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'Axios',
        data(){
            return {
                listening: [],
                writer: []
            }
        },
        created() {
            this.$axios.get('http://www.wwtliu.com/sxtstu/blueberrypai/getListeningInfo.php')
                .then(res => {
                    console.log(res.data);
                    this.listening = res.data.listening;
                    this.writer = res.data.writer;
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
</script>

<style scoped>
    li{
        display: inline-block;
        list-style-type: none;
    }
</style>