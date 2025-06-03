// src/components/Navbar.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <nav className="bg-gradient-to-r from-black via-gray-800 to-gray-900 bg-opacity-80 backdrop-blur-md text-white px-8 py-4 flex justify-between items-center shadow-lg">
      {/* <div
        className="text-3xl font-extrabold tracking-wide cursor-pointer hover:scale-105 transition-transform duration-200"
        onClick={() => navigate("/")}
      >
        Store Ratings
      </div> */}
      <div
  className="flex items-center space-x-3 text-3xl font-extrabold tracking-wide cursor-pointer hover:scale-105 transition-transform duration-200"
  onClick={() => navigate("/")}
>
  <img src="../../public/img/five-stars-rating-five-stars-rating_564974-1910.jpg" alt="Logo" className="w-50 h-10  object-cover" />
  {/* <span>Store Ratings</span> */}
</div>


      <ul className="flex space-x-6 items-center text-lg font-medium">
        <li>
          <Link
            to="/admin-dashboard"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Admin
          </Link>
        </li>
        <li>
          <Link
            to="/user-dashboard"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            User
          </Link>
        </li>
        <li>
          <Link
            to="/store-owner-dashboard"
            className="hover:text-gray-200 transition-colors duration-200"
          >
            Store Owner
          </Link>
        </li>
        <li>
          <button
            onClick={handleLogout}
            className="bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:from-red-600 hover:via-red-700 hover:to-red-800 text-white px-4 py-1 rounded-full font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
