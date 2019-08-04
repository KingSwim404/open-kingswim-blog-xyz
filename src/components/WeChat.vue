<template>
    <div id="we-chat">
        <p class="sug-title">推荐的微信公众号</p>
        <ul class="list">
            <li class="item" v-for="(item,index) in weChatList" :key="index">
                <img :src="item.imgSrc"  :alt="item.title" />
                <p class="single-line-omit">{{item.title}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import WeChatData from '../assets/data/wechat/wechatData'
    export default {
        name: "WeChat",
        data: () => ({
            weChatList:[]
        }),
        mounted() {
            this.weChatList = WeChatData.wechat;
        }
    }
</script>

<style scoped>
    #we-chat{
        padding-top: 60px;
    }

    .sug-title {
        text-align: center;
        font-size: 38px;
        font-weight: 500;
        color: var(--main-color);
        padding: 6px;
    }

    .list{
        width:60vw;
        margin:10px auto;
    }
    .item{
        width: 25%;
        float: left;
    }
    .item>img{
        width: 15vw;
        padding: 8px;
        box-sizing: border-box;
    }
    .item>p{
        font-size: 14px;
    }

    /*  单行省略  */
    .single-line-omit {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
</style>