<template>
    <div id="app">
        <img src="./assets/cat.jpg">
        <HelloWorld/>
        <Users/>
        <VFor/>
        <ListennerEvent/>
        <ArrayCheckUpdate/>
        <Computed/>
        <FormData/>
        <Style/>
        <Father/>
        <Father1/>
        <Parent/>
        <ComKeepAlive/>
        <Animation/>
        <DefineCMD/>
        <FilterDemo/>
        <img src="./assets/cat1.jpg"/>
    </div>
</template>

<script>
    //局部注册组件
    import HelloWorld from './components/HelloWorld';
    import Users from './components/Users';
    import VFor from './components/VFor';
    import ListennerEvent from './components/ListennerEvent';
    import ArrayCheckUpdate from './components/ArrayCheckUpdate';
    import Computed from './components/Computed';
    import FormData from './components/FormData';
    import Style from './components/Style';
    import Father from './components/Father';
    import Father1 from './components/Father1';
    import Parent from './components/Parent';
    import ComKeepAlive from './components/ComKeepAlive';
    import Animation from './components/animation/Animation';
    import DefineCMD from './components/DefineCMD';
    import FilterDemo from './components/FilterDemo';
    export default {
        name: 'App',
        components: {
            HelloWorld,
            Users,
            VFor,
            ListennerEvent,
            ArrayCheckUpdate,
            Computed,
            FormData,
            Style,
            Father,
            Father1,
            Parent,
            ComKeepAlive,
            Animation,
            DefineCMD,
            FilterDemo
        }
    }
</script>

<style scoped>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

</style>
