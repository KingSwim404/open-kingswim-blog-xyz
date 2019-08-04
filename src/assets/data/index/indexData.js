
import Constant from '../../constant/constantData'
const user = {
        name: "KingSwim",
        icon: require('../../logo.png'),
        gitHubUrl: "https://github.com/KingSwim404",
        douYuUrl: "https://www.douyu.com/kingswim"
    };

const routes = [
    {
        link: Constant.geekTimePath,
        textKey: "geekTimeLink"
    },
    {
        link: Constant.weChatPath,
        textKey: "weChatLink"
    },
    {
        link: Constant.knowledgePlanetPath,
        textKey: "knowledgePlanetLink"
    },
    {
        link: Constant.learnPath,
        textKey: "learnLink"
    },
    {
        link: Constant.jobPath,
        textKey: "jobsLink"
    },
    {
        link: Constant.otherPath,
        textKey: "otherLink"
    }
];

export default {
    user,
    routes
}