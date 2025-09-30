import React from "react";
import ContactForm from "../components/contact/ContactForm";

const page = () => {
  return (
    <>
      <ContactForm />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4459.173150928085!2d54.72295498657084!3d24.72815249386902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5effd1737a9a77%3A0x4bdf4e512ac74a2a!2sSafe%20Care%20Medical%20Industry!5e1!3m2!1sen!2s!4v1759235688907!5m2!1sen!2s"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        className="grayscale hover:grayscale-0 transition-all duration-500"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default page;
