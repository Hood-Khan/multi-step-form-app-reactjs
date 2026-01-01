import React from "react";

const ContactInfo = ({ signupForm, handleChange }) => {
  const { phoneNo, email, confirmEmail } = signupForm;

  const emailMismatch = confirmEmail && email && email !== confirmEmail;

  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
      <p className="text-gray-300 mb-6">
        Enter your Contact Information to stay connected
      </p>

      <form className="space-y-4">
        {/* Phone & Email */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="tel"
            name="phoneNo"
            value={phoneNo}
            onChange={handleChange}
            placeholder="Enter Your Mobile Number"
            className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter Your E-mail Address"
            className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Alternate Phone & Confirm Email */}
        <div className="flex flex-col md:flex-row gap-4">
          {/* Alternate Phone */}
          <div className="w-full md:flex-1">
            <input
              type="tel"
              placeholder="Enter Your Alternate Phone"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>

          {/* Confirm Email */}
          <div className="w-full md:flex-1">
            <input
              type="email"
              name="confirmEmail"
              value={confirmEmail}
              onChange={handleChange}
              placeholder="Confirm Your E-mail Address"
              className={`w-full px-4 py-2 rounded-lg border ${
                emailMismatch ? "border-red-500" : "border-gray-300"
              } bg-white text-black focus:outline-none focus:ring-2 ${
                emailMismatch ? "focus:ring-red-400" : "focus:ring-green-400"
              }`}
            />

            {/* Fixed space for error message */}
            <p className="text-red-400 text-sm mt-1 min-h-[1.25rem]">
              {emailMismatch ? "Email does not match" : ""}
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactInfo;
