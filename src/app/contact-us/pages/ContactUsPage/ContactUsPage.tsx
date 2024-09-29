import React from "react";

import ContactForm from "app/contact-us/components/ContactForm";
import ContactInfo from "app/contact-us/components/ContactInfo";
import Breadcrumbs from "design-system/components/Breadcrumbs";

function _ContactUsPage() {
  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 py-6 ">
      <Breadcrumbs title="contact us" />
      <div className="flex flex-col gap-14 my-5">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6339.891348922044!2d-122.061275!3d37.391117!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb7227e1ef8ff%3A0x1cbb80d811f16025!2sBeverly%20St%2C%20Mountain%20View%2C%20CA%2094043!5e0!3m2!1sen!2sus!4v1726917714221!5m2!1sen!2sus"
          width="100%"
          height="600"
          style={{ border: "0" }}
          loading="lazy"></iframe>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

const ContactUsPage = React.memo(_ContactUsPage);
export default ContactUsPage;
