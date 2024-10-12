import {
  FormControlProps,
  requiredRule,
  useFormControl,
} from "@mongez/react-form";

export type CheckboxInputProps = FormControlProps;

export default function CheckboxInput({ label, ...props }: CheckboxInputProps) {
  const { checked, setChecked, id, error } = useFormControl({
    rules: [requiredRule],
    ...props,
    type: "checkbox",
  });

  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={e => setChecked(e.target.checked)}
      />
      {error && <div>{error}</div>}
    </>
  );
}
