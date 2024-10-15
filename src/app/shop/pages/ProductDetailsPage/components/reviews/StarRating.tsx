import { useEffect, useState } from "react";
import { IoIosStarOutline, IoMdStar } from "react-icons/io";

interface StarRatingProps {
  value: number;
  onChange: (rating: number) => void;
}

export default function StarRating({ value, onChange }: StarRatingProps) {
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const stars = 5;

  useEffect(() => {
    const handleOnKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        onChange(value + 1);
      } else if (e.key === "ArrowLeft") {
        onChange(value - 1);
      }
    };

    window.addEventListener("keydown", handleOnKeyDown);
    return () => {
      window.removeEventListener("keydown", handleOnKeyDown);
    };
  }, [value, onChange]);

  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: stars }).map((_, index) => (
        <span
          key={index}
          onMouseOver={() => setHoveredValue(index + 1)}
          onMouseLeave={() => setHoveredValue(null)}
          onClick={() => onChange(index + 1)}>
          {index < (hoveredValue || value) ? (
            <IoMdStar className="w-4 h-4 text-yellow" />
          ) : (
            <IoIosStarOutline className="w-4 h-4" />
          )}
        </span>
      ))}
    </div>
  );
}
