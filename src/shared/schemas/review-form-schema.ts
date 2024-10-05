import { z } from "zod";

export const ReviewFormSchema = z.object({
  title: z.string().min(1),
  review: z.string().min(3),
  rating: z.number().min(1).max(5),
});
