import { translateText } from "app/products/utils/translate-text";
import { LocalizedText } from "design-system/utils/types";

type HeadingProps = {
  title: LocalizedText[];
};

export default function Heading({ title }: HeadingProps) {
  return (
    <h1 className="font-bold text-sm md:text-md text-primary uppercase">
      {translateText(title)}
    </h1>
  );
}
