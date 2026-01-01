import React from "react";

const LocationInfo = ({ signupForm, handleChange }) => {

  console.log(signupForm)
  const { streetAddress, city, state, postalCode, country } = signupForm;

  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">Location Information</h2>
      <p className="text-gray-300 mb-6">
        Enter your Location Information to help us locate you
      </p>

      <form className="space-y-4">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="streetAddress"
            value={streetAddress}
            onChange={handleChange}
            placeholder="Street Address"
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="city"
            value={city}
            onChange={handleChange}
            placeholder="City"
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="state"
            value={state}
            onChange={handleChange}
            placeholder="State / Province"
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="postalCode"
            value={postalCode}
            onChange={handleChange}
            placeholder="Postal Code"
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="country"
            value={country}
            onChange={handleChange}
            placeholder="Country"
            className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </form>
    </>
  );
};

export default LocationInfo;
