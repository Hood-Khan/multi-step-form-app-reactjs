import React from "react";

const PersonalInfo = ({ signupForm, handleChange }) => {
  const currentYear = new Date().getFullYear();

  const { firstName, lastName, date, month, year, gender } = signupForm;

  return (
    <>
      <h2 className="text-2xl font-semibold mb-2">Personal Information</h2>
      <p className="text-gray-300 mb-6">
        Enter your Personal Information to get closer to Contractors
      </p>

      <form className="space-y-4">
        {/* Name Fields */}
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={handleChange}
            placeholder="Enter Your First Name"
            className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={handleChange}
            placeholder="Enter Your Last Name"
            className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col md:flex-row gap-4">
          <select
            name="date"
            value={date}
            onChange={handleChange}
            className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Date</option>
            {Array.from({ length: 31 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <select
            name="month"
            value={month}
            onChange={handleChange}
            className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Month</option>
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((m, i) => (
              <option key={i} value={i}>
                {m}
              </option>
            ))}
          </select>

          <select
            name="year"
            value={year}
            onChange={handleChange}
            className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Year</option>
            {Array.from({ length: 100 }, (_, i) => {
              const year = currentYear - i;
              return (
                <option key={year} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </div>

        {/* Gender */}
        <div className="flex flex-col md:flex-row gap-4">
          <select
            name="gender"
            value={gender}
            onChange={handleChange}
            className="w-full md:flex-1 px-4 py-2 rounded-lg border border-gray-300 bg-white text-black focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
