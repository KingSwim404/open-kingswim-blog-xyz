<template>
    <div id="geek-time">
        <p class="sug-title">极客时间专栏</p>
        <a class="new-person" href="https://time.geekbang.org/activity/getinvite?gk_ucode=84DE14B7EB2580">新人领券处</a>
        <p id="search">搜索：<input v-model="inputValue" type="text" placeholder="请输入课程名"/></p>
        <ul>
            <li v-for="(item,index) in gkList" :key="index">
                <a :href="item.toUrl">
                    <img v-lazy="item.imgSrc" :alt="item.title"/>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

    import Pinyin from 'tiny-pinyin';
    import gkData from '../assets/data/geekTime/gkData'

    export default {
        name: "GeekTime",
        data: () => ({
            gkList: [],
            inputValue: "",
            storeList: []
        }),
        mounted() {

            this.gkList = gkData.data.list.sort(this.sortByOrder);
            this.storeList = this.gkList;

        },
        methods: {
            searching: function () {
                this.gkList = this.storeList.filter((item) => {
                    return this.convertToPinyin(item.title).indexOf(this.convertToPinyin(this.inputValue.trim())) >= 0;
                });
            },
            convertToPinyin: function (str) {
                return Pinyin.convertToPinyin(str).toLowerCase();
            },
            sortByOrder: function (x, y) {
                if (x.order < y.order) {
                    return -1;
                } else if (x.order > y.order) {
                    return 1;
                }
                return 0;
            }
        },
        watch: {
            inputValue() {
                if (this.inputValue.length) {
                    this.searching();
                } else {
                    this.gkList = this.storeList;
                }
            }
        }
    }
</script>

<style scoped>

    .sug-title {
        text-align: center;
        font-size: 26px;
        font-weight: 500;
        color: var(--main-color);
        padding: 6px;
    }

    #geek-time {
        padding-top: 60px;
        background-color: gray;
    }


    .new-person {
        text-align: center;
        font-size: 4vw;
        font-weight: 700;
        padding: 10px;
        display: block;
        text-decoration: underline;
        font-style: italic;

    }

    ul {
        width: 98vw;
        margin: 0 auto;
        text-align: center;
        padding: 0;
    }

    ul li {
        width: 20vw;
        margin: 1vw;
        display: inline-block;
        box-sizing: border-box;

    }

    ul li img {
        width: 20vw;
        margin: auto auto;
        box-sizing: border-box;
        border: 10px white solid;
    }

    
    @media (--mobile-media){

        ul li {

            width: 40vw;
        }

        ul li img {
            width: 40vw;
        }

    }

    #search {
        font-size: 16px;
        text-align: center;
        line-height: 28px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 20px auto;
    }

    #search input {
        width: 250px;
        height: 34px;
        border-radius: 10px;
        outline: none;
        border: 4px var(--main-color) solid;
        caret-color: var(--main-color);
        padding-left: 6px;
        font-size: 16px;
    }


</style>