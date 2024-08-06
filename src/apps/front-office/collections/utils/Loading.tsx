import { ReactNode } from "react";
import { FaBug } from "react-icons/fa";
import { TLoading } from "./types";

export type LoadingProps = {
  // props go here
  loading: TLoading;
  children: ReactNode;
};
export default function Loading({ loading, children }: LoadingProps) {
  if (loading == "failed") {
    return (
      <div className="flex flex-col items-center my-6 gap-3">
        <FaBug className="size-10 text-red" />
        <p className="font-semibold text-red">Error while fetching data</p>
      </div>
    );
  }
  return <>{children}</>;
}
