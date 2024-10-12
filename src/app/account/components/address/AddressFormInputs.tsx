import { trans } from "@mongez/localization";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "design-system/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "design-system/components/ui/form";
import { Input } from "design-system/components/ui/input";
import { UseFormReturn } from "react-hook-form";

interface AddressFormInputsProps {
  form: UseFormReturn<
    {
      name: string;
      address: string;
      email: string;
      phoneNumber: string;
      default: boolean;
    },
    any,
    undefined
  >;
  isLoading: boolean;
}

export default function AddressFormInputs({
  form,
  isLoading,
}: AddressFormInputsProps) {
  return (
    <>
      <FormField
        name="name"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm text-gray">{trans("name")}</FormLabel>
            <FormControl>
              <Input
                disabled={isLoading}
                {...field}
                className=" w-full h-12 text-base focus:ring-blue bg-[#f6f6f6]
                    focus-visible:ring-blue ring-blue flex rounded-full inset-0"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="email"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm text-gray">
              {trans("email")}
            </FormLabel>
            <FormControl>
              <Input
                disabled={isLoading}
                {...field}
                className=" w-full h-12 text-base focus:ring-blue bg-[#f6f6f6]
                    focus-visible:ring-blue ring-blue flex rounded-full inset-0"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="phoneNumber"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm text-gray">
              {trans("phoneNumber")}
            </FormLabel>
            <FormControl>
              <Input
                disabled={isLoading}
                {...field}
                className=" w-full h-12 text-base focus:ring-blue bg-[#f6f6f6]
                    focus-visible:ring-blue ring-blue flex rounded-full inset-0"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="address"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-sm text-gray">
              {trans("Address")}
            </FormLabel>
            <FormControl>
              <Input
                disabled={isLoading}
                {...field}
                className=" w-full h-12 text-base focus:ring-blue bg-[#f6f6f6]
                    focus-visible:ring-blue ring-blue flex rounded-full inset-0"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        name="default"
        control={form.control}
        render={({ field }) => (
          <FormItem className="flex items-center gap-2">
            <FormControl>
              <Checkbox
                disabled={isLoading}
                checked={field.value as CheckedState}
                onCheckedChange={field.onChange}
                className="w-4 h-4 mt-1"
              />
            </FormControl>
            <FormDescription className="text-sm text-gray">
              {trans("Set as Default Address")}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
