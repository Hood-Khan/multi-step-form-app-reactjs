import React, { useState } from "react";
import PersonalInfo from "./PersonalInfo";
import Navbar from "./Navbar";
import ContactInfo from "./ContactInfo";
import LocationInfo from "./LocationInfo";

function Multiform() {
  const [signupForm, setSignupForm] = useState({
    firstName: "",
    lastName: "",
    date: "",
    month: "",
    year: "",
    gender: "",
    email:"",
    confirmEmail:"",
    phoneNo:"",
    streetAddress:"",
    city:"", 
    state:"", 
    postalCode:"", 
    country:""
  });

  const [step, setStep] = useState(1);

  const handleChange = (e) => {
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setSignupForm({
      ...signupForm,
      [name]: value,
    });
  };

  const nextStep = () => {
    if (step === 3) {
      // submit data to backend
      return;
    } else {
      setStep((prev) => {
        return prev + 1;
      });
    }
  };

  const backStep = () => {
    setStep((prev) => {
      return prev - 1;
    });
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] bg-blue-200">
        <div className="bg-[#0f264f] p-10 rounded-xl w-4/6 text-white shadow-lg">
          {
            {
              1: (
                <PersonalInfo
                  signupForm={signupForm}
                  handleChange={handleChange}
                />
              ),
              2: (
                <ContactInfo
                  signupForm={signupForm}
                  handleChange={handleChange}
                />
              ),
              3: (
                <LocationInfo
                  signupForm={signupForm}
                  handleChange={handleChange}
                />
              ),
            }[step]
          }

          {/* Navigation Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            {step > 1 && (
              <button
                type="button"
                onClick={backStep}
                className="bg-gray-400 hover:bg-gray-500 text-black px-6 py-2 rounded-lg font-medium"
              >
                ← Back
              </button>
            )}

            <button
              type="button"
              onClick={nextStep}
              className="bg-green-400 hover:bg-green-500 text-black px-6 py-2 rounded-lg font-medium"
            >
              {step === 3 ? "Submit" : "Next →"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Multiform;
