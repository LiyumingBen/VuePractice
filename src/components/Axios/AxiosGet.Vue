<template>
    <div>
        <hr>
        <h1>Axios Get</h1>
        <ul>
            <li v-for=" msg in msgs">
                {{msg.title}}-----{{msg.content}}<br>
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
                msgs: []
            }
        },
        created() {
            this.$axios.get('http://www.wwtliu.com/sxtstu/blueberrypai/getIndexChating.php')
                .then(res => {
                    //console.log(res.data.chating);
                    this.msgs = res.data.chating;
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