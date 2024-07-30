import endpoint from "shared/endpoint";

/**
 * Get Blogs list
 */
export function getBlogsList(params: any = {}) {
  return endpoint.get("/blogs", {
    params,
  });
}

/**
 * Get blogs details
 */
export function getBlog(id: string | number) {
  return endpoint.get("/blogs/" + id);
}
