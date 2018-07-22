<template>
    <div class="date-time-item">
        <date-picker v-model="date"></date-picker>
    </div>
</template>

<script type="text/ecmascript-6">
    //import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
    export default {
        data(){
            return {
                date: ''
            }
        },
        components: {
            //datePicker: VuePersianDatetimePicker
        }
    }
</script>

<style scoped>

</style>