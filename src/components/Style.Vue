<template>
    <div>
        <p :class="{active:isActive}">{{text}}</p>
        <button class="btn btn-info m-1" @click="handChangeClassName">Change Class Name</button>
        <h2 :class="styleObject">methods Style Object</h2>
        <hr>
        <h2 :class="styleObject1">computed Style Object 计算属性</h2>
        <h2>数组添加样式</h2>
        <p :class="[arr1, arr2]">array add style</p>

        <h2>内联样式</h2>
        <div>
            <ul>
                <li v-for="name in names" :style="nStyle">
                    {{name}}
                </li>
            </ul>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'styleClass',
        data(){
            return {
                isActive: true,
                Demo: true,
                text: "Before Style",
                styleObject: {
                    active: true,
                    backgroundColor: true
                },
                arr1: "demo1",
                arr2: "demo2",
                names: ["BenBen", "LiYuMing", "DuJin", "Blake", "SeShu"],
                nStyle: {
                    color: "#df9d7b",
                    fontSize: "30px",
                    backgroundColor: "#3dd",
                    listStyleType: "none"
                }
            }
        },
        methods: {
            handChangeClassName() {
                console.log(this.isActive);
                this.isActive = !this.isActive;
                if(this.text !== undefined && this.isActive){
                    this.text = "After Style"
                }
            }
        },
        computed: {
            styleObject1() {
                return{
                    "active" : this.isActive,
                    "demo" : this.Demo
                }
            }
        }
    }
</script>

<style scoped>
    .active {
        color: #df9d7b;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: x-large;
    }
    .backgroundColor{
        background-color: #29cdfa;
    }

    .demo{
        background-color: #dbdbdb;
    }

    .demo1{
        background-color: #6ef7fa;
    }

    .demo2{
        font-weight: 400;
        font-style: normal;
        font-size: 25px;
    }
</style>
