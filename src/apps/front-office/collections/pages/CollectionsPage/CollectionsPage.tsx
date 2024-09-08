import { ChevronUpIcon } from "@radix-ui/react-icons";
import Breadcrumbs from "design-system/components/Breadcrumbs";
import React from "react";
import { MoonLoader } from "react-spinners";
import CollectionCard from "../../components/CollectionCard";
import Loading from "../../utils/Loading";
import useGetCollections from "../../utils/useGetCollection";

function _CollectionsPage() {
  const { collection, loadMore, loading, scrollToTop } = useGetCollections();
  return (
    <>
      <Breadcrumbs title="Shop" />
      <Loading loading={loading}>
        <main className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 px-4 xl:px-0 mb-3">
          {collection.data.map(item => (
            <CollectionCard
              key={item.id}
              image="https://demo-uminex.myshopify.com/cdn/shop/products/products_34_1_360x.jpg?v=1678075515"
              title={item.title}
            />
          ))}

          {loading == "pending" ? (
            <MoonLoader
              className="col-span-full mx-auto my-4"
              size={25}
              color="blue"
            />
          ) : collection.items != collection.data.length ? (
            <button
              onClick={loadMore}
              className="col-span-full my-3 px-8 py-2 border border-blue mx-auto rounded-md bg-lightGray">
              Load More
            </button>
          ) : (
            <div
              className="col-span-full mx-auto flex flex-col mt-10 cursor-pointer"
              onClick={scrollToTop}>
              <ChevronUpIcon className="size-10 -mb-7 animate-moveAndFade" />
              <ChevronUpIcon className="size-10 animate-moveAndFade delay-150" />
            </div>
          )}
        </main>
      </Loading>
    </>
  );
}

const CollectionsPage = React.memo(_CollectionsPage);
export default CollectionsPage;
