import { trans } from "@mongez/localization";
import { reviewsAtom } from "app/shop/atoms/reviews-atom";
import Rating from "app/shop/pages/ProductDetailsPage/components/reviews/Rating";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "design-system/components/ui/accordion";
import { Progress } from "design-system/components/ui/progress";
import { Review } from "shared/utils/types";

interface RatingStatisticsProps {
  productId: number;
}

const RatingStatistics = ({ productId }: RatingStatisticsProps) => {
  const reviews = reviewsAtom
    .useValue()
    .filter(review => review.productId === productId);

  const ratingCounts: { [key: number]: number } = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
  };

  reviews.forEach((review: Review) => {
    ratingCounts[review.rating]++;
  });

  const totalReviews: number = reviews.length;
  const ratingPercentages: { [key: number]: string } = {};

  for (let rating = 1; rating <= 5; rating++) {
    const percentage: number =
      totalReviews === 0 ? 0 : (ratingCounts[rating] / totalReviews) * 100;
    ratingPercentages[rating] = percentage.toFixed(2);
  }

  const productRating = reviews.length
    ? reviews.reduce((acc: any, item: any) => acc + item.rating, 0) /
      reviews.length
    : 0;

  return (
    <div className="flex flex-col items-start gap-3 w-full">
      <h1 className="text-primary text-xl font-medium">
        {trans("Customers Reviews")}
      </h1>
      <div className="flex items-center justify-start gap-2">
        <Rating rating={productRating} />
        <h1 className="text-primary font-medium text-lg">
          {productRating} {trans("Out of 5")}
        </h1>
      </div>
      <span className="text-gray text-sm">
        {reviews.length} {trans("Rating")}
      </span>
      <div className="flex items-start gap-3 w-full my-2">
        <span className="text-cyan-600 text-sm">5 {trans("Stars")}</span>
        <div className="flex items-center gap-1 w-full max-w-[300px]">
          <Progress value={parseFloat(ratingPercentages[5])} />
          <span className="text-cyan-600 text-sm">
            {parseFloat(ratingPercentages[5])}%
          </span>
        </div>
      </div>
      <div className="flex items-start gap-3 w-full my-2">
        <span className="text-cyan-600 text-sm">4 {trans("Stars")}</span>
        <div className="flex items-center gap-1 w-full max-w-[300px]">
          <Progress value={parseFloat(ratingPercentages[4])} />
          <span className="text-cyan-600 text-sm">
            {parseFloat(ratingPercentages[4])}%
          </span>
        </div>
      </div>
      <div className="flex items-start gap-3 w-full my-2">
        <span className="text-cyan-600 text-sm">3 {trans("Stars")}</span>
        <div className="flex items-center gap-1 w-full max-w-[300px]">
          <Progress value={parseFloat(ratingPercentages[3])} />
          <span className="text-cyan-600 text-sm">
            {parseFloat(ratingPercentages[3])}%
          </span>
        </div>
      </div>
      <div className="flex items-start gap-3 w-full my-2">
        <span className="text-cyan-600 text-sm">2 {trans("Stars")}</span>
        <div className="flex items-center gap-1 w-full max-w-[300px]">
          <Progress value={parseFloat(ratingPercentages[2])} />
          <span className="text-cyan-600 text-sm">
            {parseFloat(ratingPercentages[2])}%
          </span>
        </div>
      </div>
      <div className="flex items-start gap-3 w-full my-2">
        <span className="text-cyan-600 text-sm">1 {trans("Stars")}</span>
        <div className="flex items-center gap-1 w-full max-w-[300px]">
          <Progress value={parseFloat(ratingPercentages[1])} />
          <span className="text-cyan-600 text-sm">
            {parseFloat(ratingPercentages[1])}%
          </span>
        </div>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-cyan-600 text-sm">
            {trans("How customer reviews and ratings work")}
          </AccordionTrigger>
          <AccordionContent className="text-sm text-gray">
            {trans("reviewMechanism")}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default RatingStatistics;
