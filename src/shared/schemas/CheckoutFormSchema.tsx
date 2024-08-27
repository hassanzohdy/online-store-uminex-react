import * as z from "zod";
export const checkoutFormSchema = z.object({
  firstName: z.string().nonempty("First name is required"),
  lastName: z.string().nonempty("Last name is required"),
  email: z.string().email().nonempty("Email address is required"),
  phone: z.string().nonempty("Phone number is required"),
  country: z.string().nonempty("Country is required"),
  state: z.string().nonempty("State is required"),
  city: z.string().nonempty("City is required"),
  apartment: z.string().optional(),
  zipCode: z.string().nonempty("ZIP code is required"),
  address: z.string().nonempty("Address is Required"),
  shippingMethod: z.enum(["economy", "standard"], {
    required_error: "You need to select a Shipping Method.",
  }),
  cardNumber: z
    .string()
    .nonempty("Card number is required")
    .regex(/^\d{16}$/, "Card number must be 16 digits"),
  expirationDate: z.date(),
  cvv: z
    .string()
    .nonempty("Security code is required")
    .regex(/^\d{3,4}$/, "Security code must be 3 or 4 digits"),
  cardName: z.string().nonempty("Card name is required"),
});
