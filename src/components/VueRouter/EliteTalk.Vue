<template>
    <div>
        <h1>精英访谈</h1>
        <el-alert
                class="el-icon-success"
                title="成功提示的文案"
                type="success">
        </el-alert>
        <el-alert
                class="el-icon-info"
                title="消息提示的文案"
                type="info">
        </el-alert>
        <el-alert
                class="el-icon-warning"
                title="警告提示的文案"
                type="warning">
        </el-alert>
        <el-alert
                class="el-icon-error"
                title="错误提示的文案"
                type="error">
        </el-alert>

        <el-button :plain="true" @click="open5">消息</el-button>
        <el-button :plain="true" @click="open6">成功</el-button>
        <el-button :plain="true" @click="open7">警告</el-button>
        <el-button :plain="true" @click="open8">错误</el-button>

        <div class="ml-4">
            <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Status" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                </el-collapse-item>
                <el-collapse-item title="System" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                </el-collapse-item>
                <el-collapse-item title="Upload" name="3">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                </el-collapse-item>
                <el-collapse-item title="License" name="4">
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                </el-collapse-item>
            </el-collapse>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'elitetalk',
        data(){
            return {}
        },
        methods: {
            open5() {
                this.$message({
                    showClose: true,
                    message: '这是一条消息提示'
                });
            },

            open6() {
                this.$message({
                    showClose: true,
                    message: '恭喜你，这是一条成功消息',
                    type: 'success'
                });
            },

            open7() {
                this.$message({
                    showClose: true,
                    message: '警告哦，这是一条警告消息',
                    type: 'warning'
                });
            },

            open8() {
                this.$message({
                    showClose: true,
                    message: '错了哦，这是一条错误消息',
                    type: 'error'
                });
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

</style>