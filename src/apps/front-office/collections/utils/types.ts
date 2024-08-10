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

