import { zodResolver } from "@hookform/resolvers/zod";
import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import { Link } from "@mongez/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "apps/front-office/design-system/components/ui/accordion";
import { Button } from "apps/front-office/design-system/components/ui/button";
import { Form } from "apps/front-office/design-system/components/ui/form";
import { Input } from "apps/front-office/design-system/components/ui/input";
import { cn } from "apps/front-office/design-system/lib/utils";
import URLS from "apps/front-office/utils/urls";
import { ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { checkoutFormSchema } from "shared/schemas/CheckoutFormSchema";
import * as z from "zod";
import CardDetailsInputs from "./CardDetailsInputs";
import CheckoutSummaryDetails from "./CheckoutSummaryDetails";
import DeliveryInputs from "./DeliveryInputs";
import { User } from "apps/front-office/design-system/utils/types";

interface CheckoutFormComponentProps {
  user: User;
}

const CheckoutFormComponent = ({ user }: CheckoutFormComponentProps) => {
  const currentLanguage = current("localeCode");

  const form = useForm<z.infer<typeof checkoutFormSchema>>({
    resolver: zodResolver(checkoutFormSchema),
    defaultValues: {
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      country: "",
      city: "",
      state: "",
      zipCode: "",
      phone: user.phoneNumber || "",
      address: "",
      apartment: "",
      cardNumber: "",
      expirationDate: "",
      cvv: "",
      cardName: user.name || "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\d{10,15}$/;

    if (emailPattern.test(value)) {
      form.setValue("email", value);
      form.setValue("phone", "");
    } else if (phonePattern.test(value)) {
      form.setValue("phone", value);
      form.setValue("email", "");
    } else {
      form.setValue("email", "");
      form.setValue("phone", "");
    }
  };

  const onSubmit = (values: z.infer<typeof checkoutFormSchema>) => {
    console.log(values);
  };
  return (
    <div
      className={cn(
        "w-full max-w-[720px] px-4 flex flex-col items-start",
        currentLanguage === "en" ? "mx-auto md:ml-auto" : "mx-auto md:mr-auto",
      )}>
      <div className="block md:hidden w-full">
        <Accordion
          type="single"
          collapsible
          className="h-full max-h-[400px] overflow-y-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-lightAqua">
              {trans("showOrderSummary")}
            </AccordionTrigger>
            <AccordionContent className="py-4">
              <CheckoutSummaryDetails />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col gap-8 w-full py-5">
        {user.userType === "guest" && (
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center justify-between w-full">
              <p className="text-2xl text-slate-black">{trans("contact")}</p>
              <Link
                href={URLS.auth.login}
                className="text-md text-lightAqua underline">
                {trans("login")}
              </Link>
            </div>
            <Input
              className="w-full h-16 text-base focus:ring-lightAqua
                 focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
              placeholder={trans("emailPlaceHolder")}
              onChange={e => handleInputChange(e)}
            />
          </div>
        )}
        {user.userType === "user" && (
          <div className="flex items-center justify-between w-full">
            <Accordion
              type="single"
              collapsible
              className="w-full h-16 text-base focus:ring-lightAqua
                           focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
              <AccordionItem value="item-1">
                <AccordionTrigger
                  className="w-full h-16 text-base focus:ring-lightAqua
                           focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
                  <div className="flex items-start flex-col gap-1">
                    <h1 className="text-md text-slate-600 block">
                      {trans("account")}
                    </h1>
                    <h1 className="block">{user.email}</h1>
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
            className="w-full space-y-8 my-5"
            onSubmit={form.handleSubmit(onSubmit)}>
            <DeliveryInputs form={form} />
            <CardDetailsInputs form={form} />
            <Button
              type="submit"
              disabled={isLoading}
              variant={"primary"}
              className="w-full h-16 text-lg">
              {trans("PayNow")}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default CheckoutFormComponent;
