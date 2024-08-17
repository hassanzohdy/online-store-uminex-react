import { trans } from "@mongez/localization";
import { CheckedState } from "@radix-ui/react-checkbox";
import { Checkbox } from "apps/front-office/design-system/components/ui/checkbox";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "apps/front-office/design-system/components/ui/form";
import { Input } from "apps/front-office/design-system/components/ui/input";
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

const AddressFormInputs = ({ form, isLoading }: AddressFormInputsProps) => {
  return (
    <>
      <FormField
        name="name"
        control={form.control}
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-md text-slate-500">
              {trans("name")}
            </FormLabel>
            <FormControl>
              <Input
                disabled={isLoading}
                {...field}
                className=" w-full h-14 text-base focus:ring-blue bg-slate-100
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
            <FormLabel className="text-md text-slate-500">
              {trans("email")}
            </FormLabel>
            <FormControl>
              <Input
                disabled={isLoading}
                {...field}
                className=" w-full h-14 text-base focus:ring-blue bg-slate-100
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
            <FormLabel className="text-md text-slate-500">
              {trans("phoneNumber")}
            </FormLabel>
            <FormControl>
              <Input
                disabled={isLoading}
                {...field}
                className=" w-full h-14 text-base focus:ring-blue bg-slate-100
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
            <FormLabel className="text-md text-slate-500">
              {trans("Address")}
            </FormLabel>
            <FormControl>
              <Input
                disabled={isLoading}
                {...field}
                className=" w-full h-14 text-base focus:ring-blue bg-slate-100
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
              />
            </FormControl>
            <FormDescription className="text-md">
              {trans("Set as Default Address")}
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
};

export default AddressFormInputs;
