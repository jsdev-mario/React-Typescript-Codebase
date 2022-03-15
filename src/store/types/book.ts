import { Book } from 'utils/types';

export enum BookActionTypes {
    FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST',
    FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
    FETCH_BOOKS_ERROR = 'FETCH_BOOKS_ERROR',
}

export interface BookState {
    pending: boolean;
    books: Book[];
    totalCount: number;
    error: string;
}

export interface FetchBooksSuccessPayload {
    books: Book[];
    totalCount: number;
}
export interface FetchBooksFailurePayload {
    error: string;
}

export interface FetchBooksRequest {
    type: typeof BookActionTypes.FETCH_BOOKS_REQUEST;
    payload: {};
}

export type FetchBooksSuccess = {
    type: typeof BookActionTypes.FETCH_BOOKS_SUCCESS;
    payload: FetchBooksSuccessPayload;
};

export type FetchBooksFailure = {
    type: typeof BookActionTypes.FETCH_BOOKS_ERROR;
    payload: FetchBooksFailurePayload;
};

export type BookActions = FetchBooksRequest | FetchBooksSuccess | FetchBooksFailure;
