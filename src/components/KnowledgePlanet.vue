<template>
    <div id="know">
        <p class="sug-title">推荐的知识星球</p>
        <p class="sug-title">倒数三个是本人创建的(还未开始运营)</p>
        <ul class="list">
            <li class="item" v-for="(item,index) in knowledgeList" :key="index">
                <img :src="item.imgSrc">
            </li>
        </ul>
    </div>
</template>

<script>
    import KnowledgeData from '../assets/data/knowledgePlanet/knowledgeData'

    export default {
        name: "KnowledgePlanet",
        data: () => ({
            knowledgeList: []
        }),
        mounted() {
            this.knowledgeList = KnowledgeData.knowledge;
        }
    }
</script>

<style scoped>
    #know {
        padding-top: 60px;
    }

    .sug-title {
        text-align: center;
        font-size: 38px;
        font-weight: 500;
        color: var(--main-color);
        padding: 6px;
    }

    .list {
        width: 60vw;
        margin: 10px auto;
    }

    .item {
        float: left;
    }

    .item > img {
        width: 15vw;
        padding: 8px;
        box-sizing: border-box;
    }

    @media (--mobile-media) {
        .list {
            width: 80vw;
        }
        .item > img {
            width: 40vw;
        }
    }

</style>