import { Link } from "@mongez/react-router";

const Logo = () => {
  return (
    <div className="max-w-[145px] w-auto h-auto relative">
      <Link href="/">
        <img
          src="//demo-uminex.myshopify.com/cdn/shop/files/Logo_fb7c7c58-1b8f-455e-8b97-56d607743b37_145x@2x.png?v=1679893103"
          alt="logo"
          className="w-full h-full"
          loading="lazy"
        />
      </Link>
    </div>
  );
};

export default Logo;
