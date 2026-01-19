import React from "react";

const ContactBanner = () => {
  return (
    <div className="px-6 py-10 text-center text-white bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500">
      <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
      <p className="mb-6 text-lg">
        Have any questions or need support? We'd love to hear from you!
      </p>
      <button className="px-6 py-2 font-semibold text-purple-600 bg-white rounded-full hover:bg-gray-100">
        Get in Touch
      </button>
    </div>
  );
};

export default ContactBanner;
