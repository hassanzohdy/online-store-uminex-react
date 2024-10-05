import { zodResolver } from "@hookform/resolvers/zod";
import { trans } from "@mongez/localization";
import { useForm } from "react-hook-form";
import { z } from "zod";

import user from "app/account/user";
import { reviewsAtom } from "app/shop/atoms/reviews-atom";
import ReviewFormElements from "app/shop/pages/ProductDetailsPage/components/reviews/ReviewFormElements";
import { Form } from "design-system/components/ui/form";
import { toast } from "shared/hooks/use-toast";
import { ReviewFormSchema } from "shared/schemas/review-form-schema";

interface AddRatingProps {
  productId: number;
}

export default function AddRating({ productId }: AddRatingProps) {
  const form = useForm<z.infer<typeof ReviewFormSchema>>({
    resolver: zodResolver(ReviewFormSchema),
    defaultValues: {
      title: "",
      review: "",
      rating: 0,
    },
  });

  const onSubmit = (data: z.infer<typeof ReviewFormSchema>) => {
    if (user.isGuest()) {
      toast({
        variant: "destructive",
        title: "Login First!!",
        description: "You need to be logged in to create a review.",
      });
      return;
    }
    reviewsAtom.createReview({ ...data, productId });
    form.reset();
  };

  return (
    <div className="w-full flex flex-col items-start gap-5">
      <h1 className="text-primary text-xl font-medium">
        {trans("Add Review")}
      </h1>
      <Form {...form}>
        <form
          className="space-y-6 w-full"
          onSubmit={form.handleSubmit(onSubmit)}>
          <ReviewFormElements form={form} />
        </form>
      </Form>
    </div>
  );
}
