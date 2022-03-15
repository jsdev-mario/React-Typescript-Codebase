import { BookState, BookActions, BookActionTypes } from 'store/types/book';

const initialState: BookState = {
    pending: true,
    books: [],
    totalCount: 0,
};

const reducer = (state = initialState, action: BookActions) => {
    switch (action.type) {
        case BookActionTypes.FETCH_BOOKS_REQUEST:
            return {
                ...state,
                pending: true,
            };
        case BookActionTypes.FETCH_BOOKS_SUCCESS:
            return {
                ...state,
                pending: false,
                books: action.payload.books,
                totalCount: action.payload.totalCount,
            };
        default:
            return state;
    }
};

export default reducer;
