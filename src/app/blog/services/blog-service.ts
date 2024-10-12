import endpoint from "shared/endpoint";

/**
 * Get Blogs list
 */
export function getBlogsList() {
  return endpoint.get("/blog", {});
}

/**
 * Get blog details
 */
export function getBlog(id: string | number) {
  return endpoint.get("/blog/" + id);
}
