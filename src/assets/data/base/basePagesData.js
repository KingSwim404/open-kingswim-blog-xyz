import JobsData from '../jobs/jobsData'
import LearnData from '../learn/learnData'
import Constant from '../../constant/constantData'

const job = {
    path: Constant.jobPath,
    pageData: {
        title: "各种招聘网站",
        links: JobsData.jobs
    }

};

const learn = {
    path: Constant.learnPath,
    pageData: {
        title: "推荐的学习网站",
        links: LearnData.learn
    }
};

const links = [job, learn];

export default {
    links
}