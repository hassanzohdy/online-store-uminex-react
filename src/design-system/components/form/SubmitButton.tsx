import { useSubmitButton } from "@mongez/react-form";
import { Button, ButtonProps } from "design-system/components/ui/button";

export type SubmitButtonProps = ButtonProps;

export default function SubmitButton({
  children,
  ...props
}: SubmitButtonProps) {
  const { disabled, isSubmitting } = useSubmitButton();

  return (
    <Button {...props} disabled={disabled || isSubmitting}>
      {isSubmitting ? "Loading..." : children}
    </Button>
  );
}
