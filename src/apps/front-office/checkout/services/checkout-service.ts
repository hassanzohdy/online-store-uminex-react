import endpoint from "shared/endpoint";

/**
 * Get Checkouts list
 */
export function getCheckoutsList(params: any = {}) {
  return endpoint.get("/checkout", {
    params,
  });
}

/**
 * Get checkout details
 */
export function getCheckout(id: string | number) {
  return endpoint.get("/checkout/" + id);
}


