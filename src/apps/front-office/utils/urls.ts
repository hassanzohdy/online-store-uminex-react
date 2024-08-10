// append urls here, DO NOT remove this line

const URLS = {
  checkout: "/checkout",
  collections: "/collections",
  home: "/",
  notFound: "/404",
  blog: {
    root: "/blog",
    viewRoute: "/blog/:id/:slug",
    view: (post: any) => `/blog/${post.id}/${post.slug}`,
  },
  products: {
    root: "/products",
    viewRoute: "/products/:id",
    view: (productId: number) => `/products/${productId}`,
  },
  search: {
    root: "/search",
    search: (type: "product" | "blog", query: string) =>
      `/search?type=${type}&${query}`,
  },
  auth: {
    root: "/account",
    addressBook: "/account/address-book",
    orders: "/account/orders",
    login: "/account/login",
    forgetPassword: "/account/forget-password",
    resetPassword: "/account/rest-password",
    register: "/account/register",
    verifyForgetPassword: "/account/forget-password/verify",
    logout: "/account/logout",
  },
  settings: "/settings",
  contactUs: "/contact",
  pages: {
    aboutUs: "/about",
    termsConditions: "/terms-conditions",
    privacyPolicy: "/privacy-policy",
    faq: "/faq",
    team: "/team",
    viewRoute: "/pages/:slug",
    view: (page: any) => `/pages/${page.id}/${page.slug}`,
  },
  wishlist: "/wishlist",
  cart: "/cart",
};

export default URLS;
