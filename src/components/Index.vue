<template>
    <div id="index">

        <header>
            <a :href="user.douYuUrl" target="_blank">
                <h1 class="title">KingSwim'Blog</h1>
            </a>
        </header>

        <div class="introduce">
            <a :href="user.gitHubUrl" target="_blank">
                <img class="h-icon" :src="user.icon" alt="KingSwim头像"/>
            </a>
        </div>

        <div class="content">
            <router-link class="link"  v-for="(item,index) in routes" :key="index" :to="item.link" >{{$t(item.textKey)}}</router-link>
        </div>

        <footer>
            <div class="bottom-ba">
                <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=42018502000654"
                   style="display:inline-block;text-decoration:none;height:20px;line-height:20px;">
                    <img style="float: left;" src="../assets/img/p.png"/>
                    <p style="float: left;">鄂公网安备 42018502000654号</p>
                </a>
                <a href="http://www.miitbeian.gov.cn/">
                    <p>鄂ICP备17020630号</p>
                </a>
            </div>
        </footer>
    </div>
</template>

<script>
    import IndexData from '../assets/data/index/indexData'

    export default {
        name: 'Index',
        data: () => ({
            user: {},
            routes: []
        }),
        mounted() {
            this.user = IndexData.user;
            this.routes = IndexData.routes;
        }
    }
</script>
<style scoped>

    #index{
        padding-top: 50px;
    }

    /*=====标题部分*/
    .title{
        color: white;
        font-size: 30px;
        padding: 2%;
        width: 50%;
        text-align: center;
        margin: 1% auto;
        background-color: deepskyblue;
        border-radius: 20px;
        text-decoration: underline;
    }
    /*=====个人部分*/
    .introduce{
        padding: 10px;
        position: absolute;
        border: 7px solid var(--main-color);
        text-align: center;
        top:1%;
        right: 1%;
    }

    .introduce .h-icon{
        width: 120px;
    }

    /*=====路由部分*/
    .content{
        width: 40%;
        border: 7px solid var(--main-color);
        border-radius: 10px;
        padding: 26px;
        box-sizing: border-box;
        margin: 40px auto;
    }

    .link{
        display: block;
        font-size: 22px;
        font-weight: 700;
        padding: 10px;
        margin-bottom: 10px;
        text-decoration: underline;
        text-align: left;
        color: white;
    }

    .link:nth-child(2n){
        background: deepskyblue;
    }

    .link:nth-child(2n+1){
        background: darkcyan;
    }

    .link:first-child{
       color: rebeccapurple;
    }

    .link:hover{
        box-shadow: 4px 4px 4px black;
    }

    /*底部备案*/
    .bottom-ba {
        width: 100%;
        padding-top: 20px;
        font-size: 16px;
        border-top: 1px solid #CCC;
        position: absolute;
        bottom: 0;
        text-align: center;
    }

    .bottom-ba a{
        text-decoration: none;
        margin-right:20px;
        color:#939393;
    }


    @media (--mobile-media){

        .introduce .h-icon{
            width: 60px;
        }

        .content{
            width: 70vw;
        }

        footer{
            display: none;
        }
    }

</style>
