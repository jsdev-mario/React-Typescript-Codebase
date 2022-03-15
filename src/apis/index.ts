import axios from './axios';
import API_URL from './apiurl';
import { AxiosResponse } from 'axios';
import { Book } from 'utils/types';

export type ResponseData = string | number | Book | Book[];

export type ApiResponse = {
    data?: ResponseData;
    message?: string;
    totalCount?: number;
};

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
    get: (url: string, params: {}) => axios.get(url, { params }).then(responseBody),
    post: (url: string, body: {}) => axios.post(url, body).then(responseBody),
    patch: (url: string, body: {}) => axios.patch(url, body).then(responseBody),
    delete: (url: string, params: {}) => axios.delete(url, { params }).then(responseBody),
};

export const BookApi = {
    get: (params: {}): Promise<ApiResponse> => requests.get(`${API_URL.BOOKS_URL}`, params),
};
