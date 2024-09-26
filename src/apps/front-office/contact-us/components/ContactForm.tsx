import { zodResolver } from "@hookform/resolvers/zod";
import { trans } from "@mongez/localization";
import { navigateTo } from "@mongez/react-router";
import { useForm } from "react-hook-form";
import { z } from "zod";

import URLS from "app/utils/urls";
import { Button } from "design-system/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "design-system/components/ui/form";
import { Input } from "design-system/components/ui/input";
import { Textarea } from "design-system/components/ui/textarea";
import { toast } from "design-system/hooks/use-toast";
import { ContactFormSchema } from "shared/schemas/ContactFormSchema";
import { createContact } from "../services/contact-us-service";

export default function ContactForm() {
  const form = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (data: z.infer<typeof ContactFormSchema>) => {
    try {
      await createContact(data);
      toast({
        variant: "success",
        title: trans("Thank you for your message"),
      });
      return navigateTo(URLS.home);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: trans("Something went wrong"),
        content: trans("An error occurred while sending your message"),
      });
    }
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="font-semibold text-2xl text-center w-full">
        {trans("Get in Touch")}
      </h1>
      <p className="text-sm text-gray">
        {trans(
          "Your email address will not be published. Required fields are marked *",
        )}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 w-full flex flex-col items-center justify-center">
          <div className="space-y-4 w-full">
            <div className="flex items-center w-full gap-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={trans("name *")}
                        className="w-full rounded-xl bg-lightGray placeholder:text-primary font-medium h-10"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormControl>
                      <Input
                        {...field}
                        placeholder={trans("email *")}
                        className="w-full rounded-xl bg-lightGray placeholder:text-primary font-medium h-10"
                        type="email"
                        disabled={isSubmitting}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={trans("Phone Number *")}
                      className="w-full rounded-xl bg-lightGray placeholder:text-primary font-medium h-10"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={trans("Subject *")}
                      className="w-full rounded-xl bg-lightGray placeholder:text-primary font-medium h-10"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder={trans("message *")}
                      className="w-full h-[150px] rounded-xl bg-lightGray placeholder:text-primary font-medium"
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button
            variant={"primary"}
            className="rounded-full flex items-center justify-center"
            disabled={isSubmitting}
            size={"lg"}>
            {trans("Send Message")}
          </Button>
        </form>
      </Form>
    </div>
  );
}
