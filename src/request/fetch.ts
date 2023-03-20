import { IHTTP } from "./type";
const fetch = window.fetch;
const request = (input: RequestInfo, init?: RequestInit) => {
    return new Promise(resolve => {
        fetch(input, init).then(response => resolve(response.json()));
    });
}
class Fetch implements IHTTP {
    get(url: string, data?: any) {
        return fetch(url, {
            method: 'GET',
            body: data
        })
    }
    post(url: string, data?: any) {
        return fetch(url, {
            method: 'POST',
            body: data
        })
    }
    delete(url: string, data?: any) {
        return fetch(url, {
            method: 'DELETE',
            body: data
        })
    }
    put(url: string, data?: any) {
        return fetch(url, {
            method: 'PUT',
            body: data
        })
    }
}
export default new Fetch();