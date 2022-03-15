import { DebounceInput } from 'react-debounce-input';
import BookItem from 'components/BookItem';
import Pagination from 'components/Pagination';
import Select from 'components/Select';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooks } from 'store/actions/book';
import { RootState } from 'store/reducers';

const filterOptions = [
    {
        value: 'all',
        label: 'All Books',
    },
    {
        value: 'partial',
        label: 'Partial',
    },
    {
        value: 'full',
        label: 'Full',
    },
    {
        value: 'free-ebooks',
        label: 'Free eBooks',
    },
    {
        value: 'paid-ebooks',
        label: 'Paid eBooks',
    },
];

const Books = () => {
    const dispatch = useDispatch();
    const { books, totalCount } = useSelector((state: RootState) => state.book);
    const [filter, setFitler] = useState('all');
    const [keyword, setKeyword] = useState('');
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const params = {
            keyword,
            filter: filter !== 'all' ? filter : undefined,
            skip: currentPage,
            limit: 10,
        };
        dispatch(fetchBooks(params));
    }, [keyword, filter, currentPage, dispatch]);

    const pageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-full p-4 md:p-10">
            <h1 className="text-3xl text-gray-700 text-center py-6">Books</h1>
            <div className=" max-w-7xl mx-auto grid grid-cols-3 gap-6 md:gap-10">
                <div className="col-span-3 md:col-span-1">
                    <label className="text-sm text-gray-800 font-medium mb-3 block">Filter your results</label>
                    <Select value={filter} options={filterOptions} onChange={setFitler} />
                </div>
                <div className="col-span-3 md:col-span-2 bg-white rounded-md border shadow-sm min-h-[50rem] pb-6">
                    <div className="py-4 px-6 border-b-2">
                        <DebounceInput
                            minLength={2}
                            debounceTimeout={500}
                            value={keyword}
                            onChange={(event) => {
                                setKeyword(event.target.value);
                            }}
                            className="w-full border-0 focus:border-0 focus:ring-0 focus:outline-none text-sm text-gray-600"
                            placeholder="Start searching..."
                        />
                    </div>
                    <div className=" divide-y mx-6 mb-5">
                        {books.map((book, index) => (
                            <BookItem key={index} book={book} />
                        ))}
                    </div>
                    <div className="px-6">
                        <Pagination
                            totalCount={totalCount}
                            page={currentPage}
                            pageRangeDisplayed={5}
                            countPerPage={10}
                            onChange={pageChange}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;
