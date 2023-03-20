export interface IHTTP {
    get(url: string, data?: any): Promise<any>;
    post(url: string, data?: any): Promise<any>;
    delete(url: string, data?: any): Promise<any>;
    put(url: string, data?: any): Promise<any>;
}