<template>
    <div>
        <h1>视频下载</h1>
        <div class="toggle">
            <input type="checkbox"/>
            <label></label>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'videos',
        data(){
            return {}
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
    *, *:after, *:before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        font-family: serif;
    }

    .toggle {
        position: fixed;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
    }
    .toggle:after, .toggle:before {
        content: ':';
        font-size: 20vw;
        position: absolute;
        left: 5vw;
        top: -7vw;
        z-index: 2;
        color: #3CB300;
    }
    .toggle:before {
        left: auto;
        right: 5vw;
        color: #B7B7B7;
    }
    .toggle label {
        height: 20vw;
        width: 50vw;
        background: #f5f2f0;
        border-radius: 50vw;
        position: relative;
        display: inline-block;
        content: ':';
    }
    .toggle label:before {
        content: ')';
        color: #3CB300;
        font-size: 10vw;
        position: absolute;
        left: 14vw;
        top: 3vw;
        -webkit-transition: 0.3s ease-in;
        transition: 0.3s ease-in;
        z-index: 2;
    }
    .toggle label:after {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        height: 20vw;
        width: 50vw;
        border-radius: 50vw;
        -webkit-box-shadow: 33px 18px 26px -13px rgba(0, 0, 0, 0.17);
        box-shadow: 33px 18px 26px -13px rgba(0, 0, 0, 0.17);
        -webkit-transition: -webkit-transform .3s ease-in;
        transition: -webkit-transform .3s ease-in;
        transition: transform .3s ease-in;
        transition: transform .3s ease-in, -webkit-transform .3s ease-in;
    }
    .toggle input {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 5;
        opacity: 0;
        cursor: pointer;
    }
    .toggle input:checked + label:before {
        -webkit-transform: translateX(19vw);
        transform: translateX(19vw);
        color: #B7B7B7;
    }
    .toggle input:checked + label:after {
        -webkit-box-shadow: -33px 18px 26px -13px rgba(0, 0, 0, 0.17);
        box-shadow: -33px 18px 26px -13px rgba(0, 0, 0, 0.17);
    }

</style>