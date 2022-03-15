import { combineReducers } from 'redux';
import bookReducer from './book';

const rootReducer = combineReducers({
    book: bookReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
