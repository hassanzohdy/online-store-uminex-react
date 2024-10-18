import { z } from "zod";

export const ForgetPasswordFormSchema = z.object({
  email: z.string().email("Invalid email address"),
});
