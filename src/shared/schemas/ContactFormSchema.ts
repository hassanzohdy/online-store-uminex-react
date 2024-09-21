import { z } from "zod";

export const ContactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(11),
  subject: z.string().min(1),
  message: z.string().min(2),
});
