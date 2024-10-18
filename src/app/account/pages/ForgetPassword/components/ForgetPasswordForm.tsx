import { zodResolver } from "@hookform/resolvers/zod";
import { trans } from "@mongez/localization";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { navigateTo } from "@mongez/react-router";
import { forgetPassword } from "app/account/services/auth";
import { Button } from "design-system/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "design-system/components/ui/form";
import { Input } from "design-system/components/ui/input";
import { toast } from "shared/hooks/use-toast";
import { ForgetPasswordFormSchema } from "shared/schemas/forget-password-form-schema";
import URLS from "shared/utils/urls";

export default function ForgetPasswordForm() {
  const form = useForm<z.infer<typeof ForgetPasswordFormSchema>>({
    resolver: zodResolver(ForgetPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof ForgetPasswordFormSchema>) => {
    try {
      await forgetPassword(data);
      toast({
        variant: "success",
        title: trans("forgotPasswordSuccess"),
      });
      form.reset();
      navigateTo(URLS.auth.resetPassword);
    } catch (error: any) {
      console.error(error);
      toast({
        variant: "destructive",
        title: error.response.data.messages[0].error,
      });
    }
  };

  return (
    <Form {...form}>
      <form
        className="space-y-6 w-full max-w-[750px] bg-white rounded-lg p-5 md:p-10"
        onSubmit={form.handleSubmit(onSubmit)}>
        <h1 className="text-primary text-center text-xl md:text-2xl font-semibold">
          {trans("resetPassword")}
        </h1>
        <div className="flex flex-col items-start justify-center space-y-4 w-full">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel className="text-sm text-gray">
                  {trans("email")} <span className="text-red">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    disabled={isLoading}
                    {...field}
                    placeholder={trans("email")}
                    className=" w-full h-12 text-base focus:ring-blue bg-[#f6f6f6]
                    focus-visible:ring-blue ring-blue flex rounded-full inset-0 placeholder:text-sm"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <Button
          variant={"primary"}
          size={"lg"}
          className="w-full rounded-full h-12">
          {trans("resetPassword")}
        </Button>
      </form>
    </Form>
  );
}
