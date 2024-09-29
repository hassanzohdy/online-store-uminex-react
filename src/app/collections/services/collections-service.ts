import endpoint from "shared/endpoint";

/**
 * Get Collections list
 */
export function getCollectionsList(params: any = {}) {
  return endpoint.get("/collections", {
    params,
  });
}

/**
 * Get collections details
 */
export function getCollection(id: string | number) {
  return endpoint.get("/collections/" + id);
}
