import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/1200x/67/65/4e/67654e36b98c49da27328f0971979e88.jpg')",
      }}
    >
      {/* 🔸 NAVBAR */}
      <nav className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-black/50">
        <h2 className="text-white text-2xl font-bold">My Website</h2>
        <div className="flex gap-6">
          <Link to="/" className="text-white hover:text-blue-400">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-blue-400">
            About
          </Link>
          <Link to="/contact" className="text-white hover:text-blue-400">
            Contact
          </Link>
        </div>
      </nav>

      {/* 🔸 MAIN CONTENT */}
      <div className="flex justify-center items-center h-full">
        <h1 className="text-4xl text-white font-bold">Welcome</h1>
      </div>
    </div>
  );
};

export default LandingPage;
