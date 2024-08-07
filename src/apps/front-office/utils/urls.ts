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
    root: "/collection",
  },
  faq: "/faq",
  auth: {
    login: "/account/login",
    forgetPassword: "/account/forget-password",
    resetPassword: "/account/rest-password",
    register: "/account/register",
    verifyForgetPassword: "/account/forget-password/verify",
    logout: "/account/logout",
  },
  settings: "/settings",
  contactUs: "/contact-us",
  pages: {
    aboutUs: "/about-us",
    termsConditions: "/terms-conditions",
    privacyPolicy: "/privacy-policy",
    viewRoute: "/pages/:slug",
    view: (page: any) => `/pages/${page.id}/${page.slug}`,
  },
  wishlist: "/wishlist",
  cart: "/cart",
};

export default URLS;
