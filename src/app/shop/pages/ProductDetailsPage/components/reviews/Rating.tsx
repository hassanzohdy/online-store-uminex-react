import { trans } from "@mongez/localization";
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

      {[...Array(maxRating - filledStars - (hasHalfStar ? 1 : 0))].map(
        (__, index) => (
          <Star key={index + filledStars} />
        ),
      )}

      {reviews && (
        <span className="text-sm text-gray font-semibold">
          {reviews} {trans("Reviews")}
        </span>
      )}
    </div>
  );
}

type StarProps = {
  filled?: boolean;
};

const Star = ({ filled }: StarProps) => {
  if (filled) {
    return <IoMdStar className="w-5 h-5 text-yellow" />;
  }

  return <IoIosStarOutline className="w-5 h-5 text-yellow" />;
};
