import endpoint from "shared/endpoint";

/**
 * Get Blog list
 */
export function getBlogList(params: any = {}) {
  return endpoint.get("/blog", {
    params,
  });
}

/**
 * Get blog details
 */
export function getBlog(id: string | number) {
  return endpoint.get("/blog/" + id);
}
