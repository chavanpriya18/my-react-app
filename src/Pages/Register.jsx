
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import astronautImg from "../../public/img/reg2.avif"; // Place your illustration in /assets

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const navigate = useNavigate();
  const handleSubmit = (e) => {
  e.preventDefault();

  // You can place your form validation and registration logic here

  alert("Registered successfully!");

  // Redirect to login after success
  navigate("/login");
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="flex w-full max-w-6xl bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
        
        {/* Left Side Image */}
        <div className="hidden md:flex w-1/2 items-center justify-center bg-black p-10">
          <img src={astronautImg} alt="illustration" className="w-full max-h-[800px] object-contain" />
        </div>

        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-4xl font-bold text-center text-white mb-6">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-100">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={form.name}
                onChange={handleChange}
                minLength={20}
                maxLength={60}
                required
                className="w-full px-4 py-2 border border-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <small className="text-gray-400 text-xs">Min 20 and Max 60 characters</small>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-100">Email</label>
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-100">Address</label>
              <textarea
                name="address"
                placeholder="Your address"
                value={form.address}
                onChange={handleChange}
                maxLength={400}
                required
                className="w-full px-4 py-2 border border-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 resize-none"
              />
              <small className="text-gray-400 text-xs">Max 400 characters</small>
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-100">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                minLength={8}
                maxLength={16}
                required
                className="w-full px-4 py-2 border border-gray-500 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <small className="text-gray-400 text-xs">
                8-16 characters, include uppercase & special char
              </small>
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Register
            </button>
          </form>
          <p className="text-center text-gray-300 mt-4">
            Already have an account?{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
