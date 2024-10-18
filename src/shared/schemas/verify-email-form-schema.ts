import { z } from "zod";

export const VerifyEmailFormSchema = z.object({
  code: z.string().min(1),
  email: z.string().email("Invalid email address"),
});
