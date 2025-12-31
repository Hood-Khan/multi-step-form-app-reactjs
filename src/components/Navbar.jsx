import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#0f264f] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Left Side */}
        <h1 className="text-xl font-bold tracking-wide">
          MULTI <span className="text-green-400">FORM</span>
        </h1>

        {/* Right Side (Just for looks) */}
        <div className="flex items-center gap-6 text-sm text-gray-300">
          <span className="hover:text-white cursor-pointer">Home</span>
          <span className="hover:text-white cursor-pointer">About</span>
          <span className="hover:text-white cursor-pointer">Contact</span>

          {/* Fake Avatar */}
          <div className="w-9 h-9 rounded-full bg-green-400 flex items-center justify-center text-black font-semibold">
            U
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
