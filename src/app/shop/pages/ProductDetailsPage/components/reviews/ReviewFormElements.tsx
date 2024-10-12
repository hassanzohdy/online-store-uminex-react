import { trans } from "@mongez/localization";
import StarRating from "app/shop/pages/ProductDetailsPage/components/reviews/StarRating";
import { Button } from "design-system/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "design-system/components/ui/form";
import { Input } from "design-system/components/ui/input";
import { Textarea } from "design-system/components/ui/textarea";

interface ReviewFormElementsProps {
  form: any;
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
                <Input {...field} placeholder="Title" />
              </FormControl>
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
                <Textarea {...field} placeholder="Write your review" />
              </FormControl>
            </FormItem>
          )}
        />
      </div>

      <Button
        type="submit"
        variant={"primary"}
        size={"lg"}
        className="w-full h-10">
        {trans("Submit")}
      </Button>
    </>
  );
}
