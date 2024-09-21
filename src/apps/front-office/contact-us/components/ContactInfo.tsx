import { trans } from "@mongez/localization";

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-start gap-5">
      <div>
        <h1 className="text-2xl font-semibold text-primary">
          {trans("Contact Information")}
        </h1>
        <p className="text-gray text-sm">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra per
          inceptos pretium.
        </p>
      </div>
      <div className="flex flex-col items-start gap-2">
        <h3 className="font-semibold text-gray text-sm uppercase">
          {trans("Location store")}:
        </h3>
        <p className="text-gray text-sm">
          268 St, South New York/NY 98944, United States.
        </p>
      </div>
      <div className="flex flex-col items-start gap-2">
        <h3 className="font-semibold text-gray text-sm uppercase">
          {trans("Work time")}:
        </h3>
        <div>
          <p className="text-gray text-sm">Monday – Friday: 9:00-20:00</p>
          <p className="text-gray text-sm">Saturady: 11:00 – 15:00</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <h3 className="font-semibold text-gray text-sm uppercase">
          {trans("Phone Number")}:
        </h3>
        <div>
          <p className="text-gray text-sm">+222-1800-262</p>
          <p className="text-gray text-sm">(+100) 666-456-7890</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2">
        <h3 className="font-semibold text-gray text-sm uppercase">
          {trans("Email Address")}:
        </h3>
        <div>
          <p className="text-gray text-sm">Aloshopify@alothemes.com</p>
          <p className="text-gray text-sm">aloshopify@alothemes.com</p>
        </div>
      </div>
    </div>
  );
}
