import React from "react";
import {ArrowRight} from "lucide-react";


const Home = () => {
  return (
    <div className="h-screen w-full flex flex-col bg-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between px-6 lg:px-20 py-4 bg-black text-white">
        <div className="flex justify-between gap-3">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjhvyufX7hUqfNn_k2qzg36G1UhH3LkTGusQ&s" alt="logo"  className="w-6 h-6 mt-1"/>
        <a href='/' className="text-2xl font-bold">Uber</a>
        </div>
      

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <a href="#ride" className="hover:text-gray-300">
            Ride
          </a>
          <a href="#drive" className="hover:text-gray-300">
            Drive
          </a>
          <a href="#business" className="hover:text-gray-300">
            Business
          </a>
          <a href="#about" className="hover:text-gray-300">
            About
          </a>
        </div>

 
        {/* Utility Buttons */}
        <div className="flex space-x-5">
          <a href="/help" className="hover:text-gray-300 hidden lg:inline mt-2">
            Help
          </a>
          <a href="/login" className="hidden lg:inline bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">Log in</a>
          <a href="/register" className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200">
            Sign up
          </a>
        </div>
      </nav>

     {/* below the navigation container */}

      <div className="hidden lg:flex space-x-6 justify-end mr-20 mt-5">

          <a href="#ride" className="hover:text-gray-600 flex justify-start">
            request a ride
          </a>
          <a href="#drive" className="hover:text-gray-600">
            see prices
          </a>
          <a href="#business" className="hover:text-gray-600">
            reversed a ride
          </a>
          <a href="#about" className="hover:text-gray-600">
            explore option
          </a>
        </div>
        <hr className="h-1 w-full bg-black mt-5" />

      {/* Main Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between flex-1 px-8 lg:px-20">
     
        {/* Left Section - Content */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-black">
            Request a ride for now or later
          </h1>
          <p className="text-gray-600 text-lg ">
            Add your trip details, hop in, and go.
          </p>

          {/* Input Fields */}
          <div className="space-y-4">
            <div className="flex items-center border border-gray-300 rounded-lg p-3 shadow-sm w-96">
              <span className="text-lg text-gray-500">•</span>
              <input
                type="text"
                placeholder="Enter location"
                className="w-full pl-3 focus:outline-none text-gray-700"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 11l3-3m0 0l3 3m-3-3v12"
                />
              </svg>
            </div>

            <div className="flex items-center border border-gray-300 rounded-lg p-3 shadow-sm w-96">
              <span className="text-lg text-gray-500">■</span>
              <input
                type="text"
                placeholder="Enter destination"
                className="w-full pl-3 focus:outline-none text-gray-700"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="space-x-4 ">
            <a href="/login" className="flex w-96 py-3 justify-center  bg-black text-white rounded-lg text-lg font-medium hover:bg-gray-800">
              Continue with uber <ArrowRight size={30} />
            </a>
           
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 mt-10 lg:mt-0">
          <img
            src="https://dianapps.com/blog/wp-content/uploads/2022/12/1080600.png"
            alt="Illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
