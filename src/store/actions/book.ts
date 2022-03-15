import { BookActionTypes, FetchBooksSuccess, FetchBooksSuccessPayload } from 'store/types/book';

export const fetchBooks = (params: {}) => ({
    type: BookActionTypes.FETCH_BOOKS_REQUEST,
    payload: params,
});

export const fetchBooksSuccess = (payload: FetchBooksSuccessPayload): FetchBooksSuccess => ({
    type: BookActionTypes.FETCH_BOOKS_SUCCESS,
    payload,
});
