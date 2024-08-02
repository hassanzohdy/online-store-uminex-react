import CategoryCard from "./CategoryCard";

export default function CategoryList() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4 my-8">
      {[...new Array(8)].map((_, indx) => {
        return <CategoryCard key={indx} />;
      })}
    </div>
  );
}
