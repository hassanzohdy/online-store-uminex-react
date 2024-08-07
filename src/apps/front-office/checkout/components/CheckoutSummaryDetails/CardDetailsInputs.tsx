import { trans } from "@mongez/localization";
import { current } from "@mongez/react";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "apps/front-office/design-system/components/ui/form";
import { Input } from "apps/front-office/design-system/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "apps/front-office/design-system/components/ui/tooltip";
import { cn } from "apps/front-office/design-system/lib/utils";
import { BsQuestionCircle } from "react-icons/bs";
import { CiLock } from "react-icons/ci";
import InputMask from "react-input-mask";
import MaskedInput from "react-text-mask";

const CardDetailsInputs = ({ form }: any) => {
  const currentLanguage = current("localeCode");
  return (
    <div className="w-full space-y-8 my-8">
      <div>
        <h1 className="text-2xl text-black mb-2">{trans("payment")}</h1>
        <p className="text-base text-slate-500">
          {trans("transactionsEncrypted")}
        </p>
      </div>

      <FormField
        control={form.control}
        name="cardNumber"
        render={({ field }) => (
          <FormItem
            className="w-full h-16 text-base focus:ring-lightAqua
            focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
            <FormControl>
              <div className="w-full relative">
                <InputMask
                  mask="9999 9999 9999 9999"
                  maskChar=" "
                  placeholder="Card Number"
                  className="CheckoutFormInput"
                  {...field}>
                  {inputProps => <Input {...inputProps} />}
                </InputMask>
                <CiLock
                  className={cn(
                    "w-6 h-6 text-slate-600 absolute top-5",
                    currentLanguage === "en" && "right-5",
                    currentLanguage === "ar" && "left-5",
                  )}
                />
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex items-center gap-3 w-full flex-wrap lg:flex-nowrap">
        <FormField
          control={form.control}
          name="expirationDate"
          render={({ field }) => (
            <FormItem
              className="w-full h-16 text-base focus:ring-lightAqua
                 focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
              <FormControl>
                <MaskedInput
                  mask={[/\d/, /\d/, "/", /\d/, /\d/]}
                  className="CheckoutFormInput"
                  placeholder={trans("expirationDate")}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cvv"
          render={({ field }) => (
            <FormItem
              className="w-full h-16 text-base focus:ring-lightAqua
                 focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
              <FormControl>
                <div className="w-full relative">
                  <Input
                    className="w-full h-16 text-base focus:ring-lightAqua
                focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
                    placeholder={trans("SecurityCode")}
                    {...field}
                  />
                  <div
                    className={cn(
                      "text-slate-600 absolute top-5",
                      currentLanguage === "en" && "right-5",
                      currentLanguage === "ar" && "left-5",
                    )}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <BsQuestionCircle className={cn("w-5 h-5")} />
                        </TooltipTrigger>
                        <TooltipContent
                          side="top"
                          className="bg-black w-[200px]">
                          <p className="text-white text-sm">
                            {trans("SecurityCodeHover")}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <FormField
        control={form.control}
        name="cardName"
        render={({ field }) => (
          <FormItem
            className="w-full h-16 text-base focus:ring-lightAqua
                 focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0">
            <FormControl>
              <Input
                className="w-full h-16 text-base focus:ring-lightAqua
                 focus-visible:ring-lightAqua ring-lightAqua ring-offset-0 inset-0"
                placeholder={trans("cardName")}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default CardDetailsInputs;
