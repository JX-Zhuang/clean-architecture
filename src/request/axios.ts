import axios from 'axios';
import { IHTTP } from './type';
class Axios implements IHTTP {
    get(url: string, data?: any) {
        return axios.get(url, { params: data }).catch(e=>{});
    }
    post(url: string, data?: any) {
        return axios.post(url, data).catch(e=>{});
    }
    delete(url: string, data?: any) {
        return axios.delete(url, { data });
    }
    put(url: string, data?: any) {
        return axios.put(url, data);
    }
}
export default new Axios();