import { all, call, put, takeLatest } from 'redux-saga/effects';
import { Book } from 'utils/types';
import { fetchBooksFailure, fetchBooksSuccess } from 'store/actions/book';
import { BookActionTypes, FetchBooksRequest } from 'store/types/book';
import { ApiResponse, BookApi } from 'apis';

const getBooks = async (params: {}) => await BookApi.get(params);

function* fetchBooksSaga(action: FetchBooksRequest) {
    try {
        const response: ApiResponse = yield call(getBooks, action.payload);
        yield put(
            fetchBooksSuccess({
                books: response.data as Book[],
                totalCount: response.totalCount || 0,
            })
        );
    } catch (e: any) {
        yield put(
            fetchBooksFailure({
                error: e.message,
            })
        );
    }
}

export function* booksSaga() {
    yield all([takeLatest(BookActionTypes.FETCH_BOOKS_REQUEST, fetchBooksSaga)]);
}

export default booksSaga;
