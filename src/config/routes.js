import basePagesData from '../assets/data/base/basePagesData'
import Constant from '../assets/constant/constantData'

const links = basePagesData.links;

//懒加载
let Index = () => import(/* webpackChunkName: "group-index" */ "./../components/Index.vue");
let GeekTime = () => import(/* webpackChunkName: "group-geekTime" */ "./../components/GeekTime.vue");
let KnowledgePlanet = () => import(/* webpackChunkName: "group-index" */ "./../components/KnowledgePlanet.vue");
let WeChat = () => import(/* webpackChunkName: "group-index" */ "./../components/WeChat.vue");
let Other = () => import(/* webpackChunkName: "group-index" */ "./../components/Other.vue");
let Link = () => import(/* webpackChunkName: "group-index" */ "./../components/base/Link.vue");


const routes = [
    {path: '/', component: Index},
    // {path: '/', redirect: "/index"},
    // {path: '/index', component: Index},
    {path: Constant.geekTimePath, component: GeekTime},
    {path: Constant.weChatPath, component: WeChat},
    {path: Constant.knowledgePlanetPath, component: KnowledgePlanet}
];

//只有链接的数据页面
links.forEach(function (item) {
    let page = {path: '', component: Link, props: {pageData: {}}};
    page.path = item.path;
    page.props.pageData = item.pageData;
    routes.push(page);
});

routes.push({path: Constant.otherPath, component: Other});
//匹配不到去首页
routes.push({path: '*', component: Index});


export default {
    // mode: "history", //刷新 404 ，需要服务器配合
    routes: routes
}