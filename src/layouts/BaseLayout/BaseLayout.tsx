import { PropsWithChildren } from "react";
import { Separator } from "../../design-system/components/ui/separator";
import { Toaster } from "../../design-system/components/ui/toaster";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LanguageCurrencyConverterHeader from "./components/Header/LanguageCurrencyConverterHeader";
import Navbar from "./components/Header/Navbar";
import ResponsiveNavbar from "./components/Header/ResponsiveNavbar";
import TopBanner from "./components/Header/TopBanner";

export default function BaseLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full scrollbar-hide relative">
      <div className="bg-white">
        <TopBanner />
        <div className="w-full max-w-[1480px] mx-auto px-4 hidden lg:block">
          <LanguageCurrencyConverterHeader />
        </div>
        <Separator />
        <div className="w-full max-w-[1420px] mx-auto px-4">
          <Header />
        </div>
        <Separator />
        <div className="w-full max-w-[1440px] mx-auto px-4">
          <Navbar />
        </div>
        <Separator />
        <ResponsiveNavbar />
      </div>
      <main className="w-full mx-auto">{children}</main>
      <Footer />
      <Toaster />
    </div>
  );
}
