import ReactHtmlParser from "react-html-parser";
import DOMPurify from 'dompurify';

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  const cleanHtml = DOMPurify.sanitize(value);
  return (
    <div>
      {ReactHtmlParser(cleanHtml)}
    </div>
  );
};
