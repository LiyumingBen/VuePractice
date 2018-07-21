<template>
    <div>
        <p>
            {{msg}}
        </p>
        <button class="btn btn-primary mb-2" @click="handChangeInfo">changeInfo</button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'small1',
        data(){
            return {
                msg: "Samll1"
            }
        },
        methods: {
            handChangeInfo(){
                this.msg = "Change Info Small1";
            }
        }
    }
</script>

<style scoped>

</style>