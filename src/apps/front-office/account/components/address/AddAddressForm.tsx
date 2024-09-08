import { zodResolver } from "@hookform/resolvers/zod";
import { trans } from "@mongez/localization";
import { Button } from "design-system/components/ui/button";
import { Form } from "design-system/components/ui/form";
import { toast } from "design-system/hooks/use-toast";
import { useAddresses } from "design-system/hooks/useAddress";
import {
  addAddress,
  setPrimaryAddress,
} from "design-system/services/address.services";
import { useForm } from "react-hook-form";
import { AddressFormSchema } from "shared/schemas/AddressFormSchema";
import { z } from "zod";
import AddressFormInputs from "./AddressFormInputs";

export default function AddAddressForm() {
  const { data: addresses } = useAddresses();
  const form = useForm<z.infer<typeof AddressFormSchema>>({
    resolver: zodResolver(AddressFormSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phoneNumber: "",
      default: false,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof AddressFormSchema>) => {
    try {
      const { default: isPrimary, ...addressData } = data;
      const response = await addAddress(addressData);
      const addressId = response.data.address.id;
      if ((addresses && addresses.length >= 1) || isPrimary) {
        setPrimaryAddress(addressId);
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        content: "An error occurred while adding the address",
      });
    }
    form.reset();
  };

  return (
    <div
      className="flex items-center justify-center flex-col gap-5 p-5
     bg-white rounded-lg max-h-[700px]">
      <h1 className="text-center text-2xl font-semibold text-primary">
        {trans("Add a New Address")}
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full">
          <AddressFormInputs form={form} isLoading={isLoading} />
          <Button
            disabled={isLoading}
            className="w-full h-12 rounded-full text-xs font-bold"
            variant={"primary"}>
            {trans("Add Address").toUpperCase()}
          </Button>
        </form>
      </Form>
    </div>
  );
}
