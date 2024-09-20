import endpoint from "shared/endpoint";

/**
 * Get Abouts list
 */
export function getAboutsList(params: any = {}) {
  return endpoint.get("/about", {
    params,
  });
}

/**
 * Get about details
 */
export function getAbout(id: string | number) {
  return endpoint.get("/about/" + id);
}
