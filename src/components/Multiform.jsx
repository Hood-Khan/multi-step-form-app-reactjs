import React from "react";
import PersonalInfo from "./PersonalInfo";
import Navbar from "./Navbar";
import ContactInfo from "./ContactInfo";

function Multiform() {
  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-blue-200">
        <div className="bg-[#0f264f] p-10 rounded-xl w-4/6 text-white shadow-lg">

          <PersonalInfo />
          {/* <ContactInfo /> */}

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              className="bg-gray-400 hover:bg-gray-500 text-black px-6 py-2 rounded-lg font-medium"
            >
              ← Back
            </button>

            <button
              type="button"
              className="bg-green-400 hover:bg-green-500 text-white px-6 py-2 rounded-lg font-medium"
            >
              Next →
            </button>
          </div>

        </div>
      </div>
    </>
  );
}

export default Multiform;
