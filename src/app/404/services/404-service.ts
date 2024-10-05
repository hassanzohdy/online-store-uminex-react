import endpoint from "shared/endpoint";

/**
 * Get 404s list
 */
export function get404sList(params: any = {}) {
  return endpoint.get("/404", {
    params,
  });
}

/**
 * Get 404 details
 */
export function get404(id: string | number) {
  return endpoint.get("/404/" + id);
}
