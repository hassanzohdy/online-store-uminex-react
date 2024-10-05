import cache from "@mongez/cache";
import { atom } from "@mongez/react-atom";
import user from "app/account/user";
import { toast } from "shared/hooks/use-toast";
import { Review, TimestampDetails } from "shared/utils/types";

const getCurrentTimestampDetails = (): TimestampDetails => {
  const now = new Date();
  const timestamp = now.getTime();
  const offset = now.getTimezoneOffset();

  return {
    format: now.toISOString(),
    timestamp,
    offset,

    humanTime: now.toLocaleString(),
    text: now.toDateString(),
  };
};

export const reviewsAtom = atom<Review[]>({
  key: "reviews",
  default: cache.get("reviews") || [],
  actions: {
    async createReview({
      rating,
      title,
      review,
      productId,
    }: Pick<Review, "rating" | "title" | "review" | "productId">) {
      const currentReviews = reviewsAtom.value;

      if (user.isGuest()) {
        toast({
          variant: "destructive",
          title: "Login First!!",
          content: "You need to be logged in to create a review.",
        });
        return;
      }

      const newReview: Review = {
        id: currentReviews.length + 1,
        rating,
        title,
        review,
        productId,
        createdAt: getCurrentTimestampDetails(),
        createdBy: user.all() as any,
        updatedAt: getCurrentTimestampDetails(),
        updatedBy: user.all() as any,
      };

      const updatedReviews = [...currentReviews, newReview];
      reviewsAtom.update(updatedReviews);

      cache.set("reviews", updatedReviews);

      toast({
        variant: "success",
        title: "Review Created",
        content: "Your review has been successfully created.",
      });
    },

    async deleteReview(reviewId: number) {
      const currentReviews = reviewsAtom.value;
      const updatedReviews = currentReviews.filter(
        review => review.id !== reviewId,
      );
      cache.set("reviews", updatedReviews);
      toast({
        variant: "success",
        title: "Review deleted successfully",
        content: "Your review has been deleted.",
      });
      return reviewsAtom.update(updatedReviews);
    },

    async updateReview({
      reviewId,
      data,
    }: {
      reviewId: number;
      data: Pick<Review, "rating" | "title" | "review">;
    }) {
      const currentReviews = reviewsAtom.value;
      const index = currentReviews.findIndex(review => review.id === reviewId);
      if (index > -1) {
        const updatedReview = { ...currentReviews[index], ...data };
        const updatedReviews = [...currentReviews];
        updatedReviews[index] = updatedReview;

        cache.set("reviews", updatedReviews);
        toast({
          variant: "success",
          title: "Review updated successfully",
          content: "Your review has been updated.",
        });
        return reviewsAtom.update(updatedReviews);
      }
      return;
    },
  },
});
