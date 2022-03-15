import { Book } from 'utils/types';
import RatingStar from './RatingStar';

const BookItem = ({ book }: { book: Book }) => {
    if (book.id === '2L9rY4w2n-AC') console.log(book);
    return (
        <div className="py-6">
            <div className="flex items-center">
                <img
                    src={book.smallThumbnail || 'https://via.placeholder.com/64x84?text=Book'}
                    alt="thmbnail"
                    className="w-16 flex-shrink-0"
                />
                <div className="ml-3">
                    <p className=" capitalize text-base text-gray-700">{(book.authors || []).join(', ')}</p>
                    <p className=" capitalize text-sm text-gray-500">{(book.categories || []).join(', ')}</p>
                </div>
            </div>
            <h3 className="text-3xl text-bold py-4">{book.title}</h3>
            <RatingStar rating={book.averageRating || 0} />
            <p className="text-sm text-gray-500 py-3">
                {book.pageCount && (
                    <>
                        <span>{book.pageCount} pages</span>
                        <span className="px-2">•</span>
                    </>
                )}
                <span>{book.publishedDate}</span>
                {book.publisher && (
                    <>
                        <span className="px-2">•</span>
                        <span>{book.pageCount} publisher</span>
                    </>
                )}
            </p>
            <p className=" line-clamp-5">{book.description}</p>
        </div>
    );
};

export default BookItem;
