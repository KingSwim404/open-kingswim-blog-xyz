<template>
    <div id="base">
        <div class="content">
            <p class="sug-title">{{pageData.title}}</p>
            <div class="links">
                <a target="_blank" class="link" v-for="(item,index) in pageData.links" :key="index" :href="item.link">{{$t(item.title)}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Link",
        props: ['pageData']
    }
</script>

<style scoped>
    #base {
        padding-top: 60px;
    }

    .sug-title {
        text-align: center;
        font-size: 38px;
        font-weight: 500;
        color: var(--main-color);
        padding: 18px;
    }

    .content {
        width: 40%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    /*=====链接部分*/
    .links {
        width: 100%;
        border: 7px solid var(--main-color);
        border-radius: 10px;
        padding: 26px;
        box-sizing: border-box;
    }

    .link {
        display: block;
        font-size: 22px;
        font-weight: 700;
        padding: 10px;
        margin-bottom: 10px;
        text-decoration: underline;
        text-align: left;
        color: white;
    }

    .link:nth-child(2n) {
        background: deepskyblue;
    }

    .link:nth-child(2n+1) {
        background: darkcyan;
    }

    .link:hover {
        box-shadow: 4px 4px 4px black;
    }



    @media (--mobile-media) {

        .content{
            width: 70vw;
        }
    }


</style>