// append urls here, DO NOT remove this line

const URLS = {
  about: "/about",
  wishlist: "/wishlist",
  search: "/search",
  shop: "/shop",
  cart: "/cart",
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
    viewProduct: "/products/:id",
    view: (productId: number) => `/products/${productId}`,
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
    resetPassword: "/account/rest-password",
    register: "/account/register",
    verifyForgetPassword: "/account/forget-password/verify",
    logout: "/account/logout",
    addresses: "/account/addresses",
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
};

export default URLS;
