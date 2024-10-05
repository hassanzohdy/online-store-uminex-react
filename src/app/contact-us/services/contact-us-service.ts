import endpoint from "shared/endpoint";
import { ContactFormSchema } from "shared/schemas/contact-form-schema";
import { z } from "zod";

/**
 * Get ContactUses list
 */
export function getContactUsesList(params: any = {}) {
  return endpoint.get("/contact-us", {
    params,
  });
}

/**
 * Get contact-us details
 */
export function getContactUs(id: string | number) {
  return endpoint.get("/contact-us/" + id);
}

export function createContact(data: z.infer<typeof ContactFormSchema>) {
  return endpoint.post("/contact-us", { ...data });
}
