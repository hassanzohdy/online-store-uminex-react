import { zodResolver } from "@hookform/resolvers/zod";
import { trans } from "@mongez/localization";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { addressesAtom } from "app/account/atoms/address-atom";
import { Button } from "design-system/components/ui/button";
import { Form } from "design-system/components/ui/form";
import { toast } from "design-system/hooks/use-toast";
import { useState } from "react";
import { AddressFormSchema } from "shared/schemas/AddressFormSchema";
import AddressFormInputs from "./AddressFormInputs";

export default function AddAddressForm({
  updateData,
}: {
  updateData: () => void;
}) {
  const addresses = addressesAtom.useValue();
  const [addressesLength, setAddressesLength] = useState(addresses.length);
  const form = useForm<z.infer<typeof AddressFormSchema>>({
    resolver: zodResolver(AddressFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      address: "",
      default: false,
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof AddressFormSchema>) => {
    try {
      const { default: isPrimary, ...addressData } = data;
      const addressId = await addressesAtom.addAddress(addressData);

      if (addressesLength === 0 || isPrimary) {
        await addressesAtom.setPrimaryAddress(addressId);
      }

      setAddressesLength(addresses.length);

      toast({
        variant: "success",
        title: "Address Added",
        description: "The address has been added successfully",
      });
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        content: "An error occurred while adding the address",
      });
    }
    form.reset();
    updateData();
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
