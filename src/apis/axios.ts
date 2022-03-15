import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import API_URL from './apiurl';

axios.interceptors.request.use<AxiosRequestConfig>((config: AxiosRequestConfig) => {
    return {
        ...config,
        baseURL: API_URL.BASE_URL,
        timeout: 30000,
    };
});

axios.interceptors.response.use<AxiosResponse>(
    (response: AxiosResponse) => {
        if (response?.data?.code && response?.data?.code !== 200) {
            return Promise.reject({
                response: {
                    status: response?.data?.code,
                    data: {
                        message: response?.data?.message || '',
                    },
                },
            });
        }

        return response;
    },
    (error: AxiosError) => {
        if (!error.response)
            return Promise.reject({
                response: {
                    status: 408,
                    data: {
                        message: 'Request Timeout',
                    },
                },
            });
        return Promise.reject(error);
    }
);

export default axios;
