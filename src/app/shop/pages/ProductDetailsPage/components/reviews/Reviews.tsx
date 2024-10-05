import AddRating from "app/shop/pages/ProductDetailsPage/components/reviews/AddRating";
import RatingStatistics from "app/shop/pages/ProductDetailsPage/components/reviews/RatingStatistics";
import UsersReviews from "app/shop/pages/ProductDetailsPage/components/reviews/UsersReviews";
import { Separator } from "design-system/components/ui/separator";

interface ReviewsProps {
  productId: number;
}

export default function Reviews({ productId }: ReviewsProps) {
  return (
    <div className="flex flex-col items-start justify-start gap-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full">
        <RatingStatistics productId={productId} />
        <AddRating productId={productId} />
      </div>
      <Separator />
      <UsersReviews productId={productId} />
    </div>
  );
}
