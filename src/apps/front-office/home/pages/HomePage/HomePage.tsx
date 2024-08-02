import TopSellingCard from "shared/TopSellingCard";
import "./HomePage.css";

export default function HomePage() {
  return (
    <>
      <div className="text-xl m-4 grid grid-cols-3">
        <TopSellingCard />
      </div>
    </>
  );
}
