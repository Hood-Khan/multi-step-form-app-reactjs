import React from "react";

const ContactInfo = () => {
  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
      <p className="text-gray-300 mb-6">
        Enter your Contact Information to stay connected
      </p>

      <form className="space-y-4">
        {/* Phone & Email */}
        <div className="flex gap-4">
          <input
            type="tel"
            placeholder="Enter Your Mobile Number"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Enter Your E-mail Address"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Alternate Contact */}
        <div className="flex gap-4">
          <input
            type="tel"
            placeholder="Enter Your Alternate Phone"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            placeholder="Confirm Your E-mail Address"
            className="flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </form>
    </>
  );
};

export default ContactInfo;
