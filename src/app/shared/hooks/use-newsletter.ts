import { type FormSubmitOptions } from "@mongez/react-form";

export function useNewsletter() {
  const submit = ({ values, form }: FormSubmitOptions) => {
    console.log(values);

    setTimeout(() => {
      form.submitting(false);
    }, 2000);
  };

  return { submit };
}
