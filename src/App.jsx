
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./Pages/layout.jsx"; // import your Layout wrapper
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import AdminDashboard from "./Pages/AdminDashboard.jsx";
import UserDashboard from "./Pages/UserDashboard.jsx";
import StoreOwnerDashboard from "./Pages/StoreOwnerDashboard.jsx";
// import Dashboard from "./Pages/Dashboard.jsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("userRole"));

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("userRole"));
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  return (
    <Router>
      <Layout isLoggedIn={isLoggedIn}>
        <Routes>
          <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/store-owner-dashboard" element={<StoreOwnerDashboard />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
