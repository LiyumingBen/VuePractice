<template>
    <div>
        <hr>
        <h1>路由跳转</h1>
        <ul>
            <li>
                <router-link to="/login">Login</router-link>
            </li>
            <li>
                <router-link to="/logout">Logout</router-link>
            </li>
            <br>
            <h4>动态管理url</h4>
            <li>
                <router-link :to="urlData.login">LoginD</router-link>
            </li>
            <li>
                <router-link :to="urlData.logout">LogoutD</router-link>
            </li>
            <br>
            <h4>path写法</h4>
            <li>
                <router-link :to="{ path: '/login' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ path: '/logout' }">Home</router-link>
            </li>
            <br>
            <h4>对象形式</h4>
            <li>
                <router-link :to="{ path: urlData.login }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ path: urlData.logout }">Home</router-link>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'navlist',
        data(){
            return {
                urlData:{
                    login: "/login",
                    logout: "./logout"
                }
            }
        }
    }
</script>

<style scoped>
    li{
        display: inline-block;
        list-style-type: none;
        color: #ffc88c;
        margin: 5px;
    }
</style>