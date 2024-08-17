type AffiliateStatus = {
  status: string;
};

type TimestampDetails = {
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

//product
type LocalizedText = {
  localeCode: string;
  value: string;
};

type Image = {
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

type Discount = {
  percentage: number;
  amount: number;
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

type Category = {
  id: number;
  isActive: boolean;
  name: LocalizedText[];
  image: Image;
  slug: string;
};

export type Product = {
  id: number;
  brand: Brand;
  category: Category;
  discount: Discount;
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
