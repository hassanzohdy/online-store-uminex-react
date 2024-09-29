// import placeholder from "assets/images/placeholder.jpg";
// import placeholderDark from "assets/images/placeholder-dark.png";

import { trans } from "@mongez/localization";

export const defaultAvatar = () => "https://via.placeholder.com/150";
export const SORT_OPTIONS = [
  { name: trans("Relevance"), value: "none" },
  { name: trans("Price Low to High"), value: "price_asc" },
  { name: trans("Price High to Low"), value: "price_dsc" },
];
