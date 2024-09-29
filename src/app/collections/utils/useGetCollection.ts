import { useEffect, useState } from "react";
import { TLoading, TResponse } from "./types";

const useGetCollections = () => {
  const [loading, setLoading] = useState<TLoading>("idle");
  const [page, setPage] = useState(1);
  const [collection, setCollection] = useState<TResponse>({
    data: [],
    first: 1,
    items: 1,
    last: 0,
    next: 0,
    pages: 0,
    prev: 0,
  });

  useEffect(() => {
    async function fetchCollections() {
      try {
        setLoading("pending");
        const response = await fetch(
          `http://localhost:3000/collections?_page=${page}&_per_page=25`,
        );
        setLoading("success");
        const resData: TResponse = await response.json();

        setCollection(prevState => {
          return {
            ...resData,
            data: [...prevState.data, ...resData.data],
          };
        });
      } catch (error) {
        console.log(error);
        setLoading("failed");
      }
    }

    if (collection.items !== collection.data.length) {
      fetchCollections();
    }

    return () => setLoading("idle");
  }, [page, collection.items, collection.data.length]);

  function loadMore() {
    setPage(prevState => prevState + 1);
  }
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return {
    collection,
    loading,
    loadMore,
    scrollToTop,
  };
};

export default useGetCollections;
