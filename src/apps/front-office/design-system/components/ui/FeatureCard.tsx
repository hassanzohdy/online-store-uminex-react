import discountSvg from "../../../../../shared/assets/images/discount-outline.svg";
import itemsSvg from "../../../../../shared/assets/images/items.svg";
import paymentSvg from "../../../../../shared/assets/images/payment.svg";
import shippingSvg from "../../../../../shared/assets/images/shipping.svg";
import supportSvg from "../../../../../shared/assets/images/support.svg";
type featuresDataProps = {
  icon: string;
  title: string;
  description: string;
};
const featuresData: featuresDataProps[] = [
  {
    icon: shippingSvg,
    title: "Fast Delivery",
    description: "Across West & East India",
  },
  {
    icon: paymentSvg,
    title: "Safe payment",
    description: "100% Secure Payment",
  },
  {
    icon: discountSvg,
    title: "Online Discount",
    description: "Add Multi-buy Discount",
  },
  {
    icon: supportSvg,
    title: "Help center",
    description: "Dedicated 24/7 Support",
  },
  {
    icon: itemsSvg,
    title: "Curated items",
    description: "From Handpicked Sellers",
  },
];
const FeatureCard = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10 py-10">
      {featuresData &&
        featuresData.map((feature, index) => (
          <div className="text-center" key={index}>
            <img
              src={feature.icon}
              className="mx-auto cursor-pointer transition-transform duration-500 ease-in-out hover:animate-bounce"
              alt={feature.title}
            />
            <div className="mt-5">
              <h3 className="text-primary mb-2 font-bold uppercase">
                {feature.title}
              </h3>
              <p className="text-gray text-sm font-medium">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default FeatureCard;
