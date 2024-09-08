import { trans } from "@mongez/localization";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "apps/front-office/design-system/components/ui/form";
import {
  RadioGroup,
  RadioGroupItem,
} from "apps/front-office/design-system/components/ui/radio-group";
import { formatPrice } from "apps/front-office/design-system/lib/formats";
import { cn } from "apps/front-office/design-system/lib/utils";
import { CheckoutFormType } from "../../utils/types";

interface ShippingMethodProps {
  form: CheckoutFormType;
}

export default function ShippingMethod({ form }: ShippingMethodProps) {
  return (
    <div className="w-full space-y-8">
      <h1 className="text-2xl text-black ">{trans("Shipping Method")}</h1>
      <FormField
        control={form.control}
        name="shippingMethod"
        render={({ field }) => (
          <FormItem className="space-y-3 w-full">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col gap-0 w-full">
                <FormItem
                  className={cn(
                    "flex items-start justify-between w-full space-x-3 space-y-0 border border-slate-300",
                    "p-5 rounded-md rounded-b-none",
                    field.value === "economy"
                      ? "border-lightAqua bg-lightGray"
                      : "border-b-0",
                  )}>
                  <div className="flex items-start space-x-3 space-y-0 w-full">
                    <FormControl>
                      <RadioGroupItem value="economy" />
                    </FormControl>
                    <div className="flex flex-col items-start gap-2 w-full">
                      <FormLabel className="text-black w-full">
                        {trans("Economy")}
                      </FormLabel>
                      <FormLabel className="text-slate-500 font-normal w-full">
                        {trans("5 to 8 Business Days")}
                      </FormLabel>
                    </div>
                    <FormLabel className="text-slate-500 font-normal">
                      {trans("Free")}
                    </FormLabel>
                  </div>
                </FormItem>
                <FormItem
                  className={cn(
                    "flex items-start justify-between w-full space-x-3 space-y-0 border border-slate-300",
                    "p-5 rounded-md rounded-t-none",
                    field.value === "standard"
                      ? "border-lightAqua bg-lightGray"
                      : "border-t-0",
                  )}>
                  <div className="flex items-start space-x-3 space-y-0 w-full">
                    <FormControl>
                      <RadioGroupItem value="standard" />
                    </FormControl>
                    <div className="flex flex-col items-start gap-2 w-full">
                      <FormLabel className="text-black w-full">
                        {trans("Standard")}
                      </FormLabel>
                      <FormLabel className="text-slate-500 font-normal w-full">
                        {trans("3 to 4 Business Days")}
                      </FormLabel>
                    </div>
                    <FormLabel className="text-slate-500 font-normal">
                      {formatPrice(6)}
                    </FormLabel>
                  </div>
                </FormItem>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
