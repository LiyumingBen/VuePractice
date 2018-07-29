<template>
    <div>
        <h1>校区汇总</h1>
        <p class="ml-2">
            My School is : <strong>{{$route.params.name}}</strong>
        </p>

        <section class="main">
            <div class="switch demo1">
                <input type="checkbox">
                <label></label>
            </div>

            <div class="switch demo1">
                <input type="checkbox" checked="">
                <label></label>
            </div>

        </section>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'school',
        data(){
            return {

            }
        }
    }
</script>

<style scoped>
    h1 {
        font-size: 2.4em;
        background-color: #292929;
        text-align: center;
        padding: 20px;
        margin: 0;
        color: #fff;
    }
    .switch input {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
        z-index: 100;
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }


    .main {
        width: 90%;
        margin: 0 auto;
        position: relative;
    }

    .switch.demo1 {
        width: 100px;
        height: 100px;
    }

    .switch {
        margin: 50px auto;
        position: relative;
    }

    .switch input {
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
        z-index: 100;
        position: absolute;
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

    input[type="checkbox"], input[type="radio"] {
        box-sizing: border-box;
        padding: 0;
    }

    button, input {
        line-height: normal;
    }
    button, input, select, textarea {
        font-size: 100%;
        margin: 0;
        vertical-align: baseline;
    }
    html, button, input, select, textarea {
        font-family: sans-serif;
    }

    .switch.demo1 label {
        border-radius: 50%;
        background: #eaeaea;
        box-shadow: 0 3px 5px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -5px 5px rgba(100,100,100,0.1), inset 0 5px 5px rgba(255,255,255,0.3);
    }

    .switch label {
        width: 100%;
        height: 100%;
        position: relative;
        display: block;
    }
    .switch.demo1 label:before {
        content: "";
        position: absolute;
        width: 20%;
        height: 20%;
        border-radius: inherit;
        left: 40%;
        top: 40%;
        background: #969696;
        background: radial-gradient(40% 35%, #ccc, #969696 60%);
        box-shadow: inset 0 2px 4px 1px rgba(0,0,0,0.3), 0 1px 0 rgba(255,255,255,1), inset 0 1px 0 white;
    }

    .switch.demo1 input:checked ~ label:before {
        background: #25d025;
        background: radial-gradient(40% 35%, #5aef5a, #25d025 60%);
        box-shadow: inset 0 3px 5px 1px rgba(0,0,0,0.1), 0 1px 0 rgba(255,255,255,0.4), 0 0 10px 2px rgba(0, 210, 0, 0.5);
    }

</style>