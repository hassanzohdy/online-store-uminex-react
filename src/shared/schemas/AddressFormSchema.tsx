import { z } from "zod";

export const AddressFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(11),
  address: z.string().min(1),
  default: z.boolean().default(false),
});
