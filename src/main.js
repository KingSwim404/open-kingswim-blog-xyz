import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import Constant from './assets/constant/constantData'
import VueRouter from 'vue-router'
import RoutesConfig from './config/routes'
import LangConfig from './config/lang'
import HttpConfig from './config/http'
import './assets/css/reset.css'
import './assets/css/common.pcss'
import VueLazyLoad from 'vue-lazyload'
import 'lib-flexible/flexible'


Vue.config.productionTip = false

Vue.use(VueI18n);
Vue.use(VueRouter);
Vue.use(VueLazyLoad);

const i18n = new VueI18n(LangConfig);
const router = new VueRouter(RoutesConfig);

new Vue({
    render: h => h(App),
    i18n,
    router,
    data: {
        ConstantVar: Constant,
        httpManger:HttpConfig.httpManger
    }
}).$mount('#app');
