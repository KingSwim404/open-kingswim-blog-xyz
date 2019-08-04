<template>
    <div id="other">
        <p class="title">广告位招租,500一个月~~~~</p>
        <div class="content">
            <div class="item">
                <p>E-mail : </p>
                <a href="mailto:kingswim404@gmail.com">kingswim404@gmail.com</a>
            </div>
            <div class="item">
                <p>gitHub : </p>
                <a href="https://github.com/KingSwim404">https://github.com/KingSwim404</a>
            </div>

            <div class="item">
                <p>编程入门 : </p>
                <a href="https://github.com/KingSwim404/How-to-learn-programming">https://github.com/KingSwim404/How-to-learn-programming</a>
            </div>

            <div class="item">
                <p>公众号二维码 : </p>
                <img src="../assets/img/wechat/KingSwim404.png" alt="公众号二维码"/>
            </div>

            <div class="item">
                <p>专栏推荐小程序 : </p>
                <img src="https://www.kingswim.xyz/xyz/img/ks-xcx.jpg" alt="专栏小程序"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Other",
        data: () => ({}),
        mounted() {
        }
    }
</script>

<style scoped>
    #other {
        padding-top: 60px;
    }

    .title {
        text-align: center;
        font-size: 38px;
        font-weight: 500;
        color: var(--main-color);
        padding: 18px;
    }

    .content {
        width: 40%;
        border: 7px solid var(--main-color);
        border-radius: 10px;
        padding: 30px;
        box-sizing: border-box;
        margin: 30px auto;
        text-align: left;
        font-size: 18px;
    }

    .content > .item {
        padding: 6px;
        margin: 6px;
        font-weight: 500;
    }

    .content p{
        margin-bottom: 4px;
    }
    .content a{
        word-break: break-all;
        text-decoration: underline;
    }
    .content img {
        width: 120px;
    }


    @media (--mobile-media) {

        .content{
            width: 70vw;
        }

    }

</style>