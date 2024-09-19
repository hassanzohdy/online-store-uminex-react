import ReactHtmlParser from "react-html-parser";
import "react-quill/dist/quill.bubble.css";

interface PreviewProps {
  value: string;
}

export const Preview = ({ value }: PreviewProps) => {
  const cleanHtml = DOMPurify.sanitize(value);
  return (
    <div>
      {ReactHtmlParser(cleanHtml)}
      {/* <ReactQuill theme="bubble" value={value} readOnly /> */}
    </div>
  );
};
