import endpoint from "shared/endpoint";

/**
 * Get Searches list
 */
export function getSearchesList(params: any = {}) {
  return endpoint.get("/search", {
    params,
  });
}

/**
 * Get search details
 */
export function getSearch(id: string | number) {
  return endpoint.get("/search/" + id);
}
