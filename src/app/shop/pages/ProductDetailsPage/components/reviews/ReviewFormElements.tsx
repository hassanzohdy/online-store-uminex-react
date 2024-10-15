import { trans } from "@mongez/localization";

import StarRating from "app/shop/pages/ProductDetailsPage/components/reviews/StarRating";
import { ReviewFormElementsType } from "app/shop/utils/types";
import { Button } from "design-system/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "design-system/components/ui/form";
import { Input } from "design-system/components/ui/input";
import { Textarea } from "design-system/components/ui/textarea";

interface ReviewFormElementsProps {
  form: ReviewFormElementsType;
}

export default function ReviewFormElements({ form }: ReviewFormElementsProps) {
  return (
    <>
      <div className="w-full space-y-4">
        <FormField
          name="rating"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{trans("Rating")}</FormLabel>
              <FormControl>
                <StarRating value={field.value} onChange={field.onChange} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{trans("Review Title")}</FormLabel>
              <FormControl>
                <Input {...field} placeholder={trans("title")} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="review"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{trans("Review Comment")}</FormLabel>
              <FormControl>
                <Textarea {...field} placeholder={trans("Write your review")} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <Button
        type="submit"
        variant={"primary"}
        size={"lg"}
        className="w-full h-10">
        {trans("Add Review")}
      </Button>
    </>
  );
}
