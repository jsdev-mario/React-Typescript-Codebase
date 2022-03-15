import { StarIcon } from '@heroicons/react/solid';

const RatingStar = ({ rating }: { rating: number }) => {
    return (
        <div className="flex">
            {new Array(Math.round(rating)).fill(0).map((_, index) => (
                <StarIcon className="w-5 h-5 text-red-700" key={`unlike${index}`} />
            ))}
            {new Array(5 - Math.round(rating)).fill(0).map((_, index) => (
                <StarIcon className="w-5 h-5 text-gray-400" key={`unlike$${index}`} />
            ))}
        </div>
    );
};

export default RatingStar;
