import DOMPurify from "dompurify";
import ReactHtmlParser from "react-html-parser";

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  const cleanHtml = DOMPurify.sanitize(value);
  return <div>{ReactHtmlParser(cleanHtml)}</div>;
};
