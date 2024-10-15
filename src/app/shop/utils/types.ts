import { UseFormReturn } from "react-hook-form";

// types.ts file
export type ReviewFormElementsType = UseFormReturn<{
  rating: number;
  title: string;
  review: string;
}>;
