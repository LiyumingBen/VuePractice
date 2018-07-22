<template>
    <div class="">
        <datepicker :value="state.date"></datepicker>
    </div>
</template>

<script type="text/ecmascript-6">
    import Datepicker from 'vuejs-datepicker';

    export default {
        name: '',
        data(){
            return {
                state: {
                    date: new Date(2016, 9,  16)
                }
            }
        },
        components: {
            datepicker: Datepicker
        }
    }
</script>

<style scoped>

</style>