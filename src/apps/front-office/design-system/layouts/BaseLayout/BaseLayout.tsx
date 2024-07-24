import { Separator } from "../../components/ui/separator";
import Footer from "../Footer";
import Header from "../Header";
import Navbar from "../Header/Navbar";
import TopBanner from "../Header/TopBanner";

export type BaseLayoutProps = {
  children: React.ReactNode;
};

/**
 * Base layout can be used to wrap all pages
 */
export default function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <div className="w-full">
      <div className="bg-slate-50/90">
        <TopBanner />
        <div className="w-full max-w-[1450px] mx-auto px-4">
          <Header />
        </div>
        <Separator />
        <div className="w-full max-w-[1450px] mx-auto px-4">
          <Navbar />
        </div>
        <Separator />
      </div>
      <main className="container">{children}</main>
      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
