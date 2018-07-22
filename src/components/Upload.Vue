<template>
    <div>
        <file-upload
                ref="upload"
                v-model="files"
                post-action="/post.method"
                put-action="/put.method"
                @input-file="inputFile"
                @input-filter="inputFilter"
        >
            上传文件
        </file-upload>
        <button class="btn btn-primary" v-show="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true" type="button">开始上传</button>
        <button class="btn btn-danger" v-show="$refs.upload && $refs.upload.active" @click.prevent="$refs.upload.active = false" type="button">停止上传</button>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        name: '',
        data(){
            return {
                files: []
            }
        },
        methods: {
            /**
             * Has changed
             * @param  Object|undefined   newFile   只读
             * @param  Object|undefined   oldFile   只读
             * @return undefined
             */
            inputFile: function (newFile, oldFile) {
                if (newFile && oldFile && !newFile.active && oldFile.active) {
                    // 获得相应数据
                    console.log('response', newFile.response);
                    if (newFile.xhr) {
                        //  获得响应状态码
                        console.log('status', newFile.xhr.status);
                    }
                }
            },
            /**
             * Pretreatment
             * @param  Object|undefined   newFile   读写
             * @param  Object|undefined   oldFile   只读
             * @param  Function           prevent   阻止回调
             * @return undefined
             */
            inputFilter: function (newFile, oldFile, prevent) {
                if (newFile && !oldFile) {
                    // 过滤不是图片后缀的文件
                    if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
                        return prevent();
                    }
                }

                // 创建 blob 字段 用于图片预览
                newFile.blob = '';
                let URL = window.URL || window.webkitURL;
                if (URL && URL.createObjectURL) {
                    newFile.blob = URL.createObjectURL(newFile.file);
                }
            }
        }
    }
</script>

<style scoped>
    .file-uploads {
        overflow: hidden;
        position: relative;
        text-align: center;
        display: inline-block;
    }
    .file-uploads.file-uploads-html4 input[type="file"] {
        opacity: 0;
        font-size: 20em;
        z-index: 1;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .file-uploads.file-uploads-html5 input[type="file"] {
        overflow: hidden;
        position: fixed;
        width: 1px;
        height: 1px;
        z-index: -1;
        opacity: 0;
    }
</style>