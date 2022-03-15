import { Book } from 'utils/types';

export enum BookActionTypes {
    FETCH_BOOKS_REQUEST = 'FETCH_BOOKS_REQUEST',
    FETCH_BOOKS_SUCCESS = 'FETCH_BOOKS_SUCCESS',
}

export interface BookState {
    pending: boolean;
    books: Book[];
    totalCount: number;
}

export interface FetchBooksSuccessPayload {
    books: Book[];
    totalCount: number;
}

export interface FetchBooksRequest {
    type: typeof BookActionTypes.FETCH_BOOKS_REQUEST;
    payload: {};
}

export type FetchBooksSuccess = {
    type: typeof BookActionTypes.FETCH_BOOKS_SUCCESS;
    payload: FetchBooksSuccessPayload;
};

export type BookActions = FetchBooksRequest | FetchBooksSuccess;
