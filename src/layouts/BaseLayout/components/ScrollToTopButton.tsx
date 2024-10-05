import { useEffect, useState } from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

import { Button } from "design-system/components/ui/button";
import { cn } from "shared/lib/utils";
import scrollTop from "shared/utils/scroll";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Button
      variant={"primary"}
      size={"icon"}
      className={cn(
        "rounded-full fixed bottom-24 right-8 flex items-center justify-center h-12 w-12 p-0",
        isVisible ? "block" : "hidden",
      )}
      onClick={scrollTop}>
      <MdKeyboardDoubleArrowUp className="w-5 h-5 text-center mx-auto" />
    </Button>
  );
}
