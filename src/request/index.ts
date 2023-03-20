import { IHTTP } from './type';
class Request implements IHTTP {
    static http = {} as IHTTP;
    get(url: string, data?: any) {
        return Request.http.get(url, data);
    }
    post(url: string, data?: any) {
        return Request.http.post(url, data);
    }
    delete(url: string, data?: any) {
        return Request.http.delete(url, data);
    }
    put(url: string, data?: any) {
        return Request.http.put(url, data);
    }
    static init(http: IHTTP) {
        Request.http = http;
    }
}
export default Request;