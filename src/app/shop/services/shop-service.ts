import endpoint from "shared/endpoint";

/**
 * Get Shops list
 */
export function getShopsList(params: any = {}) {
  return endpoint.get("/shop", {
    params,
  });
}

/**
 * Get shop details
 */
export function getShop(id: string | number) {
  return endpoint.get("/shop/" + id);
}
