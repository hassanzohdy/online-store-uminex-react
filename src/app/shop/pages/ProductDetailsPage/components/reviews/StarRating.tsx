import { useState } from "react";
import { IoIosStarOutline, IoMdStar } from "react-icons/io";

function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (rating: number) => void;
}) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const stars = Array(5).fill(0);

  const handleClick = (index: number) => {
    onChange(index + 1);
  };

  const handleMouseOver = (index: number) => {
    setHoverValue(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  return (
    <div className="flex items-center space-x-2">
      {stars.map((_, index) => (
        <span
          key={index}
          className="cursor-pointer"
          onClick={() => handleClick(index)}
          onMouseOver={() => handleMouseOver(index)}
          onMouseLeave={handleMouseLeave}>
          {(hoverValue || value) > index ? (
            <IoMdStar className="text-yellow" size={20} />
          ) : (
            <IoIosStarOutline className="text-gray" size={20} />
          )}
        </span>
      ))}
    </div>
  );
}

export default StarRating;
