import { trans } from "@mongez/localization";
import { reviewsAtom } from "app/shop/atoms/reviews-atom";
import ReviewCard from "app/shop/pages/ProductDetailsPage/components/reviews/ReviewCard";

interface UsersReviewsProps {
  productId: number;
}

export default function UsersReviews({ productId }: UsersReviewsProps) {
  const productReviews = reviewsAtom
    .useValue()
    .filter(review => review.productId === productId);
  return (
    <div className="flex flex-col items-start justify-start gap-5 w-full">
      <h1 className="text-2xl text-primary font-semibold">
        {trans("Customers Reviews")}
      </h1>
      <div className="flex flex-col items-start gap-3 w-full">
        {productReviews.length > 0 ? (
          productReviews.map(review => (
            <ReviewCard review={review} key={review.id} />
          ))
        ) : (
          <p className="text-center text-md italic text-gray">
            {trans("No reviews found")}!
          </p>
        )}
      </div>
    </div>
  );
}
