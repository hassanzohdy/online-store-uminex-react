import { zodResolver } from "@hookform/resolvers/zod";
import { trans } from "@mongez/localization";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { Form } from "apps/front-office/design-system/components/ui/form";
import { useAddresses } from "apps/front-office/design-system/hooks/useAddress";
import {
  addAddress,
  setPrimaryAddress,
} from "apps/front-office/design-system/services/address.services";
import { useForm } from "react-hook-form";
import { AddressFormSchema } from "shared/schemas/AddressFormSchema";
import { z } from "zod";
import AddressFormInputs from "./AddressFormInputs";

const AddAddressForm = () => {
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
      if ((addresses && addresses.addresses.length >= 1) || isPrimary) {
        setPrimaryAddress(addressId);
      }
    } catch (error) {
      console.error(error);
    }
    form.reset();
  };

  return (
    <div className="flex items-center justify-center flex-col gap-5 p-5 bg-white rounded-lg max-h-[700px]">
      <h1 className="text-center text-3xl font-medium">
        {trans("Add a New Address")}
      </h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full">
          <AddressFormInputs form={form} isLoading={isLoading} />
          <Button
            disabled={isLoading}
            className="w-full h-14 rounded-full text-md"
            variant={"primary"}>
            {trans("Add Address")}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default AddAddressForm;
