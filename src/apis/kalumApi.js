import axios from "axios";

const kalumApi = axios.create({
    baseURL: 'http://localhost:9090/kalum-management/v1'
});

kalumApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'Authorization' : `Bearer ${localStorage.getItem('token')}`
    }
    return config;
});

export default kalumApi;