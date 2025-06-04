
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import LoginIllustration from "../../public/img/login3.png";

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    // Email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Password regex: min 6 chars, one letter and one number
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be at least 6 characters and include a number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Simulate login success
    localStorage.setItem("userRole", "user");
    onLogin();
    navigate("/admin-dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#010101] relative overflow-hidden">
      <div className="absolute w-72 h-72 bg-blue-900 rounded-full opacity-30 -top-16 -left-16 blur-3xl"></div>
      <div className="absolute w-72 h-72 bg-blue-900 rounded-full opacity-30 -bottom-16 -right-16 blur-3xl"></div>

      <div className="relative z-10 w-full max-w-md p-8 bg-white/5 backdrop-blur-md rounded-xl shadow-2xl border border-white/10 text-white">
        <div className="flex justify-center -mt-20 mb-4">
          <img
            src={LoginIllustration}
            alt="Login Illustration"
            className="w-40 drop-shadow-2xl"
          />
        </div>

        <h2 className="text-4xl font-bold text-center mb-6 tracking-wide">LOGIN</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="USERNAME"
              required
              className={`w-full px-4 py-3 bg-white/10 rounded-md focus:outline-none focus:ring-2 ${
                errors.email ? "ring-red-500" : "focus:ring-blue-500"
              } placeholder:text-white text-white`}
            />
            {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="PASSWORD"
              required
              className={`w-full px-4 py-3 bg-white/10 rounded-md focus:outline-none focus:ring-2 ${
                errors.password ? "ring-red-500" : "focus:ring-blue-500"
              } placeholder:text-white text-white`}
            />
            {errors.password && (
              <p className="text-red-400 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-2 bg-blue-700 hover:bg-blue-800 rounded-md font-semibold tracking-wide transition-all duration-300"
          >
            SUBMIT
          </button>
        </form>

        <div className="flex justify-between mt-6 text-sm font-light text-gray-300">
          <Link to="/register" className="hover:text-white hover:underline transition">
            REGISTER
          </Link>
          <Link
            to="/forgot-password"
            className="hover:text-white hover:underline transition"
          >
            FORGOT PASSWORD
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
