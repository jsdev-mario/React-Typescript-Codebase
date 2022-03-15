import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import createSagaMiddleware from 'redux-saga';
import { booksSaga } from './sagas/book';
import { fetchBooksSuccess } from 'store/actions/book';
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

const mockResponse = {
    books: [
        {
            id: '36tWAAAAcAAJ',
            selfLink: 'https://www.googleapis.com/books/v1/volumes/36tWAAAAcAAJ',
            title: "Glenny's Hand-book to the Flower Garden & Greenhouse, etc",
            authors: ['George GLENNY (the Elder.)'],
            publishedDate: '1855',
            smallThumbnail:
                'http://books.google.com/books/content?id=36tWAAAAcAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        },
    ],
    totalCount: 50,
};

describe('fetchBooks', () => {
    beforeEach(() => {
        jest.setTimeout(3000);
        moxios.install();
    });
    afterEach(() => {
        moxios.uninstall();
    });

    it('creates FETCH_BOOKS_SUCCESS after successfuly fetching books', (done) => {
        const expectedActions = [fetchBooksSuccess(mockResponse)];
        const initialState = {
            book: {
                pending: true,
                books: [],
                totalCount: 0,
            },
        };
        const store = mockStore(initialState);
        sagaMiddleware.run(booksSaga);
        store.subscribe(() => {
            const actions = store.getActions();
            if (actions.length >= expectedActions.length) {
                expect(actions).toEqual(expectedActions);
                done();
            }
        });
        store.dispatch(fetchBooksSuccess(mockResponse));
    });
});
