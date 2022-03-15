import { all, fork } from 'redux-saga/effects';
import bookSaga from './book';

export function* rootSaga() {
    yield all([fork(bookSaga)]);
}
