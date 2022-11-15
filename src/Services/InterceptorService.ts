import axios from "axios";

class InterceptorService {
    

    public createInterceptor(): void {
        axios.interceptors.request.use(request => {
            if (request.url.indexOf("products") >= 0) {
                console.log("start request..", request);
            }
            return request;
        });

        axios.interceptors.response.use(response => {
            if (response.config.url.indexOf("products") >= 0) {
                console.log("got response..", response);
            }
            return response;
        });

    }
}

const interceptorService = new InterceptorService();

export default interceptorService;
