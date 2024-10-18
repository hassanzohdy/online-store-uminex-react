// append urls here, DO NOT remove this line

const URLS = {
  contactUs: "/contact-us",
  about: "/about",
  wishlist: "/wishlist",
  search: "/search",
  shop: {
    root: "/shop",
    products: "/products",
    search: "/search",
    product: "/products/:id",
    viewSearch: (type: "product" | "blog", query: string) =>
      `/search?type=${type}&${query}`,
    viewProduct: (productId: number) => `/products/${productId}`,
    collections: "/collections",
  },
  cart: "/cart",
  checkout: "/checkout",
  home: "/",
  notFound: "/404",
  blog: {
    root: "/blog",
    viewRoute: "/blog/:id/:slug",
    view: (post: any) => `/blog/${post.id}/${post.slug}`,
  },

  searchRoute: {
    root: "/search",
    search: (type: "product" | "blog", query: string) =>
      `/search?type=${type}&${query}`,
  },
  faq: "/faq",
  auth: {
    root: "/account",
    addressBook: "/account/address-book",
    orders: "/account/orders",
    login: "/account/login",
    forgetPassword: "/account/forget-password",
    resetPassword: "/account/reset-password",
    register: "/account/register",
    verifyEmail: "/account/verify-email",
    verifyForgetPassword: "/account/forget-password/verify",
    logout: "/account/logout",
    addresses: "/account/addresses",
  },
  settings: "/settings",
  pages: {
    aboutUs: "/about",
    termsConditions: "/terms-conditions",
    privacyPolicy: "/privacy-policy",
    faq: "/faq",
    team: "/team",
    viewRoute: "/pages/:slug",
    view: (page: any) => `/pages/${page.id}/${page.slug}`,
  },
};

export default URLS;
