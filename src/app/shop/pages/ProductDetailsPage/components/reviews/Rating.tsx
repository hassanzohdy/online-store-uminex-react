import { IoIosStarOutline, IoMdStar } from "react-icons/io";

export type RatingProps = {
  rating: number;
  reviews?: number;
};

export default function Rating({ rating, reviews }: RatingProps) {
  const maxRating = 5;
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(filledStars)].map((_, index) => (
        <Star key={index} filled />
      ))}

      {hasHalfStar && <Star half />}

      {[...Array(maxRating - filledStars - (hasHalfStar ? 1 : 0))].map(
        (__, index) => (
          <Star key={index + filledStars} />
        ),
      )}

      {reviews && (
        <span className="text-sm text-gray font-semibold">
          {reviews} reviews
        </span>
      )}
    </div>
  );
}

type StarProps = {
  filled?: boolean;
  half?: boolean;
};

const Star = ({ filled, half }: StarProps) => {
  if (filled) {
    return <IoMdStar className="w-5 h-5 text-yellow" />;
  }

  if (half) {
    return <IoMdStar className="w-5 h-5 text-yellow" />;
  }

  return <IoIosStarOutline className="w-5 h-5 text-yellow" />;
};
