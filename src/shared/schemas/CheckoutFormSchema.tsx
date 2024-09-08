import * as z from "zod";

export const checkoutFormSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email().min(1),
  phone: z.string().min(1),
  country: z.string().min(1),
  state: z.string().min(1),
  city: z.string().min(1),
  apartment: z.string().optional(),
  zipCode: z.string().min(1),
  address: z.string().min(1),
  shippingMethod: z.enum(["economy", "standard"], {
    required_error: "You need to select a Shipping Method.",
  }),
  cardNumber: z
    .string()
    .min(1)
    .regex(/^\d{16}$/, "Card number must be 16 digits"),
  expirationDate: z.date(),
  cvv: z
    .string()
    .min(1)
    .regex(/^\d{3,4}$/, "Security code must be 3 or 4 digits"),
  cardName: z.string().min(1),
});
