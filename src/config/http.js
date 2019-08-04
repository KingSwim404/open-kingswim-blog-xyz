import axios from 'axios'

const httpManger ={
    get:function (url,callBack) {
        axios.get(url).then(function (response) {
            callBack(response.data);
        });
    }
};

export default {
    httpManger
}