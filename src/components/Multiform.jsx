import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Navbar from "./Navbar";
import ContactInfo from "./ContactInfo";

function Multiform() {
    const [signupForm,setSignupForm]=useState({
    firstName:"",
    lastName:"",
    gender:""
  })

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setSignupForm({
      ...signupForm,
      [name]:value
    })

  }

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-blue-200">
        <div className="bg-[#0f264f] p-10 rounded-xl w-4/6 text-white shadow-lg">

          <PersonalInfo signupForm={signupForm} handleChange={handleChange} />
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
