type AffiliateStatus = {
  status: string;
};

export type TimestampDetails = {
  format: string;
  timestamp: number;
  offset: number;
  humanTime: string;
  text: string;
};

type UserInfo = {
  id: number;
  userType: "user" | "guest" | "admin";
  name: string;
  phoneNumber: string;
  email: string;
  totalWishlist?: number;
  totalCompare?: number;
  isCustomer?: boolean;
};

export type User = {
  accessToken: string;
  affiliate: AffiliateStatus;
  cartProducts: number[];
  compareProducts: number[];
  createdAt: TimestampDetails;
  createdBy: UserInfo;
  email: string;
  firstName: string;
  gender: "male" | "female";
  id: number;
  isActive: boolean;
  isAdmin: boolean;
  isCustomer: boolean;
  lastLogin: TimestampDetails;
  lastName: string;
  name: string;
  phoneNumber: string;
  totalCart: number;
  totalCompare: number;
  totalWishlist: number;
  updatedAt: TimestampDetails;
  updatedBy: UserInfo;
  userType: "user" | "guest" | "admin";
};

export type LocalizedText = {
  localeCode: string;
  value: string;
};

//product
export type Image = {
  name: string;
  hash: string;
  mimeType: string;
  extension: string;
  size: number;
  url: string;
  id: string;
  width: number;
  height: number;
  path: string;
};

type Purchase = {
  minQuantity: number;
};

type Brand = {
  id: number;
  name: LocalizedText[];
  slug: string;
  logo: Image;
};

export type Category = {
  id: number;
  isActive: boolean;
  name: LocalizedText[];
  image: Image;
  slug: string;
  totalProducts?: number;
};

export type Product = {
  id: number;
  brand: Brand;
  category: Category;
  discount: any;
  images: Image[];
  inCart: boolean;
  inCompare: boolean;
  inWishlist: boolean;
  inStock: boolean;
  isActive: boolean;
  name: LocalizedText[];
  price: number;
  salePrice: number;
  shortDescription: LocalizedText[];
  slug: string;
  type: string;
  purchase: Purchase;
  rating?: number;
  reviews?: number;
  description?: LocalizedText[];
  relatedProducts?: Product[];
};

type Breadcrumb = {
  text: string;
  url: string;
};

type Meta = {
  title: string;
  description: string;
  keywords: string;
  image: string;
};

type PaginationInfo = {
  limit: number;
  page: number;
  pages: number;
  result: number;
  total: number;
};

export type ProductsResponse = {
  breadcrumbs: Breadcrumb[];
  c: {
    languages: string[];
  };
  meta: Meta;
  paginationInfo: PaginationInfo;
  products: Product[];
  user: UserInfo;
};

//cart
export type CartItemType = {
  id: number;
  product: Product;
  quantity: number;
  salePrice: number;
  total: {
    discount: number;
    finalPrice: number;
    price: number;
    salePrice: number;
  };
};

export type CartTotals = {
  price: number;
  discount: number;
  salePrice: number;
  subtotal: number;
  tax: number;
  shippingFees?: number;
  [key: string]: number | undefined;
  finalPrice: number;
};

export type TotalsText = {
  type: string;
  mode: string;
  label: string;
  value: number;
  valueText: string;
};

export type CartType = {
  id: number;
  items: CartItemType[];
  taxIncluded: boolean;
  taxRate: number;
  totals: CartTotals;
  totalsText: TotalsText[];
  createdAt: TimestampDetails;
  createdBy: UserInfo;
  updatedAt: TimestampDetails;
  updatedBy: UserInfo;
  user: UserInfo;
};

//compare
export type Compare = {
  products: Product[];
  user: UserInfo;
  languages: string[];
};

//wishlist
export type Wishlist = {
  products: Product[];
  user: UserInfo;
  totalWishlist: number;
  languages: string[];
};

//address
export type Address = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  isPrimary: boolean;
  createdAt: TimestampDetails;
  createdBy: UserInfo;
  updatedAt: TimestampDetails;
  updatedBy: UserInfo;
};

//category

export type CategoriesResponse = {
  languages: string[];
  categories: Category[];
  user: UserInfo;
};

type ColumnImage = {
  localeCode: string;
  value: Image;
};

type Banner = {
  id: number;
  name: string;
  isActive: boolean;
  title: LocalizedText[];
  image: ColumnImage[];
  type: string;
};

type Slider = {
  id: number;
  isActive: boolean;
  name: LocalizedText[];
  banners: Banner[];
};

export type Column = {
  id: number;
  isActive: boolean;
  module: {
    id: number;
    isActive: boolean;
    name: string;
    slider?: Slider;
    banner?: Banner;
    categories?: Category[];
    products?: Product[];
    shortDescription: LocalizedText[];
    type: string;
    title: LocalizedText[];
  };
  name: string;
  style: {
    size: string;
  };
};

export type Row = {
  sortOrder: number;
  columns: Column[];
  style: any;
};

export type Review = {
  id: number;
  rating: number;
  title: string;
  review: string;
  createdAt: TimestampDetails;
  createdBy: User;
  updatedAt: TimestampDetails;
  updatedBy: User;
  productId: number;
};
