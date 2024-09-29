import { zodResolver } from "@hookform/resolvers/zod";
import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useForm } from "react-hook-form";
import z from "zod";

import user from "app/account/user";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "design-system/components/ui/accordion";
import { Button } from "design-system/components/ui/button";
import { Form } from "design-system/components/ui/form";
import { cn } from "shared/lib/utils";
import { checkoutFormSchema } from "shared/schemas/CheckoutFormSchema";
import { isLTR } from "shared/utils/helpers";
import { Address } from "shared/utils/types";
import URLS from "shared/utils/urls";
import CardDetailsInputs from "./CardDetailsInputs";
import DeliveryInputs from "./DeliveryInputs";
import ShippingMethod from "./ShippingMethod";

interface CheckoutFormComponentProps {
  address?: Address;
}

export default function CheckoutFormComponent({
  address,
}: CheckoutFormComponentProps) {
  const form = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      name: user.get("name"),
      email: user.get("email") || "",
      country: "",
      city: "",
      state: "",
      zipCode: "",
      phone: user.get("phoneNumber") || "",
      address: "",
      apartment: "",
      shippingMethod: "economy",
      cardNumber: "",
      expirationDate: new Date(),
      cvv: "",
      cardName: user.name || "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = (values: z.infer<typeof checkoutFormSchema>) => {
    console.log(values);
  };

  const handleUseDefaultAddress = () => {
    if (address) {
      form.setValue("address", address.address);
    }
  };

  return (
    <div
      className={cn(
        "w-full max-w-[720px] px-4 flex flex-col items-end",
        isLTR() ? "md:ml-auto" : "md:mr-auto",
      )}>
      <div className="flex flex-col gap-8 w-full py-5">
        {!user.isGuest() && (
          <div className="flex items-center justify-between w-full">
            <Accordion
              type="single"
              collapsible
              className="w-full h-16 text-base focus:ring-lightAqua
                           focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
              <AccordionItem value="item-1">
                <AccordionTrigger
                  icon={ChevronDownIcon}
                  className="w-full h-16 text-base focus:ring-lightAqua
                           focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
                  <div className="flex items-start flex-col gap-1">
                    <h1 className="text-md text-slate-600 block">
                      {trans("account")}
                    </h1>
                    <h1 className="block">{user.get("email")}</h1>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <Link
                    href={URLS.auth.logout}
                    className="text-sm text-lightAqua underline">
                    {trans("logout")}
                  </Link>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        )}

        <Form {...form}>
          <form
            className="w-full space-y-8 my-5 flex flex-col items-start gap-2"
            onSubmit={form.handleSubmit(onSubmit)}>
            <div className="w-full">
              <DeliveryInputs form={form} />
              {address && (
                <Button
                  type="button"
                  variant={"link"}
                  className="text-lightAqua p-0 text-sm md:text-md mt-3"
                  onClick={handleUseDefaultAddress}
                  size={"sm"}>
                  {trans("use Default Address")}
                </Button>
              )}
            </div>
            <ShippingMethod form={form} />
            <div className="w-full">
              <CardDetailsInputs form={form} />
              <Button
                type="submit"
                disabled={isLoading}
                variant={"primary"}
                className="w-full h-16 text-lg">
                {trans("PayNow")}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
