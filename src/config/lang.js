import zh from "../assets/lang/zh-CN";
import en from "../assets/lang/en";


export default {
    locale: 'zh_CN',    // 语言标识
    //this.$i18n.locale // 通过切换locale的值来实现语言切换
    messages: {
        'zh_CN': zh,   // 中文语言包
        'en': en    // 英文语言包
    }
}