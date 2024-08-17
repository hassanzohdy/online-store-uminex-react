import { z } from "zod";

export const AddressFormSchema = z.object({
  name: z.string().nonempty("Name is required"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().nonempty("Phone number is required"),
  address: z.string().nonempty("Address is required"),
  default: z.boolean().default(false),
});
