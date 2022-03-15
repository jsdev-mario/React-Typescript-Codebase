import { useEffect, useState } from 'react';
import {
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
} from '@heroicons/react/solid';

type PropsType = {
    totalCount: number;
    page: number;
    countPerPage: number;
    pageRangeDisplayed: number;
    onChange: (page: number) => void;
};

const Pagination = ({ totalCount, page, countPerPage, pageRangeDisplayed, onChange }: PropsType) => {
    console.log(totalCount, page);
    const [totalPage, setTotalPage] = useState(0);
    const [pageLabels, setPageLabels] = useState<number[]>([]);

    useEffect(() => {
        if (totalCount > countPerPage) {
            const totalPage = Math.ceil(totalCount / countPerPage);
            setTotalPage(totalPage);
            if (totalPage > 5) {
                setPageLabels(new Array(pageRangeDisplayed).fill(1).map((_v, index) => index));
            } else {
                const pageLabels = [];
                for (let i = 0; i < totalPage; i++) pageLabels.push(i);
                setPageLabels(pageLabels);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [totalCount]);

    const prev = () => {
        if (page <= 0) return;
        onChange(page - 1);
        if (page === pageLabels[0]) {
            const totalPageArray = new Array(page).fill(1).map((_, index) => index);
            if (totalPageArray.length >= pageRangeDisplayed)
                setPageLabels(totalPageArray.splice(-1 * pageRangeDisplayed));
            else setPageLabels(new Array(pageRangeDisplayed).fill(1).map((_v, index) => index));
        }
    };

    const next = () => {
        if (page >= totalPage - 1) return;
        onChange(page + 1);
        if (page === pageLabels[pageLabels.length - 1]) {
            const totalPageArray = new Array(totalPage).fill(1).map((_, index) => index);
            if (totalPageArray.length > page + 5) setPageLabels(totalPageArray.splice(page + 1, pageRangeDisplayed));
            else setPageLabels(totalPageArray.splice(-1 * pageRangeDisplayed));
        }
    };

    const start = () => {
        const totalPageArray = new Array(totalPage).fill(1).map((_, index) => index);
        onChange(totalPageArray[0]);
        setPageLabels(totalPageArray.splice(0, pageRangeDisplayed));
    };

    const end = () => {
        const totalPageArray = new Array(totalPage).fill(1).map((_, index) => index);
        onChange(totalPageArray[totalPageArray.length - 1]);
        setPageLabels(totalPageArray.splice(-1 * pageRangeDisplayed));
    };

    if (totalPage === 0) return null;

    return (
        <div className="bg-white py-3 flex items-center justify-between">
            <div className="flex-1 flex justify-between sm:hidden">
                <button
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    onClick={() => {
                        if (page > 1) onChange(page - 1);
                    }}
                >
                    Previous
                </button>
                <div>
                    <p className="text-xs text-gray-700 text-center">
                        Showing <span className="font-medium">{countPerPage * page + 1}</span> to{' '}
                        <span className="font-medium">
                            {countPerPage * (page + 1) > totalCount ? totalCount : countPerPage * (page + 1)}
                        </span>{' '}
                        of <span className="font-medium">{totalCount}</span> results
                    </p>
                </div>
                <button
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                    onClick={() => {
                        if (page < totalPage - 1) onChange(page + 1);
                    }}
                >
                    Next
                </button>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700">
                        Showing <span className="font-medium">{countPerPage * page + 1}</span> to{' '}
                        <span className="font-medium">
                            {countPerPage * (page + 1) > totalCount ? totalCount : countPerPage * (page + 1)}
                        </span>{' '}
                        of <span className="font-medium">{totalCount}</span> results
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <button
                            className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            onClick={start}
                        >
                            <ChevronDoubleLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-2 py-2 border text-sm font-medium"
                            onClick={prev}
                        >
                            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        {pageLabels.map((label, index) => {
                            return (
                                <button
                                    key={index}
                                    className={`${
                                        label === page
                                            ? 'z-10 border border-purple-600'
                                            : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                                    } relative inline-flex items-center px-4 py-2 border text-sm font-medium`}
                                    onClick={() => {
                                        onChange(label);
                                    }}
                                >
                                    {label + 1}
                                </button>
                            );
                        })}
                        <button
                            className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-2 py-2 border text-sm font-medium"
                            onClick={next}
                        >
                            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                            className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                            onClick={end}
                        >
                            <ChevronDoubleRightIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Pagination;
