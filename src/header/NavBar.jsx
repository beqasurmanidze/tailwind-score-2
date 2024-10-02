import React from "react";

const NavBar = () => {
  return (
    <>
      <header className="flex items-center justify-between w-full h-[150px] bg-black px-8">
        {/* Logo */}
        <img src="/streamVibe.svg" alt="StreamVibe Logo" className="h-auto" />

        {/* Navigation Buttons with Shadow Border */}
        <div className="flex space-x-10 border border-gray-700 rounded-lg shadow-lg p-2">
          <button className="w-[98px] h-[55px] hover:bg-gray-900 delay-100 duration-200 text-white">
            Home
          </button>
          <button className="w-[98px] h-[55px] hover:bg-gray-900 delay-100 duration-200 text-white">
            Movies & Shows
          </button>
          <button className="w-[98px] h-[55px] hover:bg-gray-900 delay-100 duration-200 text-white">
            Support
          </button>
          <button className="w-[98px] h-[55px] hover:bg-gray-900 delay-100 duration-200 text-white">
            Subscription
          </button>
        </div>

        {/* Icons Section */}
        <div className="flex space-x-6">
          <img
            className="w-6 h-6"
            src="./searchBar.svg"
            alt="Search Bar Icon"
          />
          <img
            className="w-6 h-6"
            src="./notifications.svg"
            alt="Notifications Icon"
          />
        </div>
      </header>
      <div className="ml-[600px]">
        <img src="Vector (3).png" alt="logo" />
      </div>
    </>
  );
};

export default NavBar;
