// types.ts filetype TCollection = { id: string; image: string; title: string };
export type TCollection = { id: string; image: string; title: string };
export type TResponse = {
  data: TCollection[];
  first: number;
  items: number;
  last: number;
  next: number | null;
  pages: number;
  prev: number | null;
};
export type TLoading = "idle" | "pending" | "failed" | "success";

//cart
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

type Product = {
  id: number;
  brand: Brand;
  category: Category;
  discount: number;
  images: Image[];
  inCart: boolean;
  inCompare: boolean;
  inWishlist: boolean;
  isActive: boolean;
  name: LocalizedText[];
  price: number;
  salePrice: number;
  shortDescription: LocalizedText[];
  slug: string;
  type: string;
};

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
