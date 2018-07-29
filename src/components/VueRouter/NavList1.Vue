<template>
    <div class="nav_box">
        <ul>
            <li>
                <router-link to="/" exact >首页</router-link>
            </li>
            <li>
                <router-link to="/course">课程介绍</router-link>
            </li>
            <li>
                <router-link to="/teacher">授课讲师</router-link>
            </li>
            <li>
                <router-link to="/student">学员故事</router-link>
            </li>
            <li>
                <router-link to="/videos">视频下载</router-link>
            </li>
            <li>
                <router-link to="/employment">招生就业</router-link>
            </li>
            <li>
                <router-link to="/plan">开班计划</router-link>
            </li>
            <li>
                <router-link to="/happynews">就业喜报</router-link>
            </li>
            <li>
                <!--<router-link to="/school">校区汇总</router-link>-->
                <router-link :to="{name : 'School', params:{name: 'HUB'} }">校区汇总</router-link>
            </li>
            <li>
                <router-link to="/elitetalk">精英访谈</router-link>
            </li>
            <li>
                <router-link to="/way">来校线路</router-link>
            </li>
            <li>
                <router-link to="/community">技术社区</router-link>
            </li>
            <li>
                <router-link :to="{name: 'AboutMe', params:{name: obj.name, age: obj.age}}">关于我们</router-link>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'navlist1',
        data(){
            return {
                obj: {
                    age: 20,
                    name: 'Liyuming'
                }
            }
        }
    }
</script>

<style scoped>
    li{
        display: inline-block;
        list-style-type: none;
        margin: 0 auto;
        padding: 10px 0 0 0;
        float: left;
        width: 116px;
        text-align: center;
        font-size: 16px;
        line-height: 28px;
        border-right: #1d67dd solid 1px;
        color: #fff;
    }
    div{
        width: 100%;
        height: 50px;
        background-color: #2577e3;
        line-height: 50px;
    }

    li > a{
        color: #fff;
        cursor: pointer;
        margin: 5px 0;
        text-decoration: none;
    }
    .nav_box {
        background: linear-gradient(#12B6E3, #126ae3, #12B6E3);
        border: 1px solid #1BA9E3;
        border-bottom: none;
        min-width: 800px
    }

    .active{
        color: red;
    }

</style>