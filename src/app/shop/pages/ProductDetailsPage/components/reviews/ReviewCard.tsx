import { FiEdit } from "react-icons/fi";
import { LuTrash2, LuX } from "react-icons/lu";

import { zodResolver } from "@hookform/resolvers/zod";
import { trans } from "@mongez/localization";
import user from "app/account/user";
import { reviewsAtom } from "app/shop/atoms/reviews-atom";
import Rating from "app/shop/pages/ProductDetailsPage/components/reviews/Rating";
import ReviewFormElements from "app/shop/pages/ProductDetailsPage/components/reviews/ReviewFormElements";
import { Button } from "design-system/components/ui/button";
import { Form } from "design-system/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import unknown from "shared/assets/images/unknown.jpg";
import { toast } from "shared/hooks/use-toast";
import { ReviewFormSchema } from "shared/schemas/review-form-schema";
import { Review } from "shared/utils/types";
import { z } from "zod";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const form = useForm<z.infer<typeof ReviewFormSchema>>({
    resolver: zodResolver(ReviewFormSchema),
    defaultValues: {
      title: review.title || "",
      review: review.review || "",
      rating: review.rating || 0,
    },
  });

  const onSubmit = (data: z.infer<typeof ReviewFormSchema>) => {
    reviewsAtom.updateReview({
      reviewId: review.id,
      data,
    });
    form.reset();
    toast({
      variant: "success",
      title: trans("Review Updated"),
    });
    setIsEditing(false);
  };

  const isAuthor = user.id === review.createdBy.id;

  return isEditing ? (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full relative space-y-6">
        <ReviewFormElements form={form} />
        <div className="absolute top-2 right-2">
          <Button
            onClick={() => setIsEditing(false)}
            variant={"outline"}
            size={"sm"}>
            <LuX className="mr-1" />
            {trans("Cancel")}
          </Button>
        </div>
      </form>
    </Form>
  ) : (
    <div className="flex items-start gap-4 relative w-full" key={review.id}>
      <img src={unknown} alt="" className="rounded-full w-10 h-10" />
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2 mb-1">
          <h1 className="font-semibold text-md text-primary">
            {review.createdBy.name}
          </h1>
          <p className="text-sm text-gray">- {review.updatedAt.humanTime}</p>
        </div>
        <Rating rating={review.rating} />
        <h2 className="text-primary text-md font-medium">{review.title}</h2>
        <p className="text-gray text-sm font-medium">{review.review}</p>
      </div>
      {isAuthor && (
        <div className="absolute top-2 right-2 flex items-center gap-1">
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => setIsEditing(true)}>
            <FiEdit className="w-4 h-4 text-primary" />
          </Button>
          <Button
            variant={"outline"}
            size={"icon"}
            onClick={() => reviewsAtom.deleteReview(review.id)}>
            <LuTrash2 className="w-4 h-4 text-red" />
          </Button>
        </div>
      )}
    </div>
  );
}
