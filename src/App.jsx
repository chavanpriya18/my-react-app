// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// // import Login from "./Pages/Login.jsx";
// // import Register from "./Pages/Register.jsx";
// // import AdminDashboard from "./Pages/AdminDashboard.jsx";
// // import UserDashboard from "./Pages/UserDashboard.jsx";
// // import StoreOwnerDashboard from "./Pages/StoreOwnerDashboard.jsx";
// // import ProtectedRoute from "./Component/ProtectedRoute.jsx";

// // const App = () => {
// //   const userRole = localStorage.getItem("role");

// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Navigate to="/login" replace />} />
// //         <Route path="/login" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //         <Route
// //           path="/admin"
// //           element={
// //             <ProtectedRoute allowedRoles={["admin"]} userRole={userRole}>
// //               <AdminDashboard />
// //             </ProtectedRoute>
// //           }
// //         />
// //         <Route
// //           path="/user"
// //           element={
// //             <ProtectedRoute allowedRoles={["user"]} userRole={userRole}>
// //               <UserDashboard />
// //             </ProtectedRoute>
// //           }
// //         />
// //         <Route
// //           path="/store-owner"
// //           element={
// //             <ProtectedRoute allowedRoles={["store-owner"]} userRole={userRole}>
// //               <StoreOwnerDashboard />
// //             </ProtectedRoute>
// //           }
// //         />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;

// // src/App.jsx
// // import React from "react";
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Login from "./Pages/Login.jsx";
// // import Register from "./Pages/Register.jsx";
// // import AdminDashboard from "./Pages/AdminDashboard.jsx";
// // import UserDashboard from "./Pages/UserDashboard.jsx";
// // import StoreOwnerDashboard from "./Pages/StoreOwnerDashboard.jsx";
// // // import ProtectedRoute from "./Component/ProtectedRoute.jsx";
// // const App = () => {
// //   // This is just for example. In real code, determine role from token/localStorage
// //   const userRole = localStorage.getItem("userRole");

// //   return (
// //     <Router>
// //       <Routes>
// //         <Route path="/" element={<Login />} />
// //         <Route path="/register" element={<Register />} />
// //         {/* Route by role */}
// //         <Route path="/dashboard" element={
// //           userRole === "admin" ? <AdminDashboard />
// //           : userRole === "user" ? <UserDashboard />
// //           : userRole === "store_owner" ? <StoreOwnerDashboard />
// //           : <div>Unauthorized</div>
// //         } />
// //       </Routes>
// //     </Router>
// //   );
// // };

// // export default App;
// // src/App.jsx
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Component/Navbar.jsx";
// import Login from "./Pages/Login.jsx";
// import Register from "./Pages/Register.jsx";
// import AdminDashboard from "./Pages/AdminDashboard.jsx";
// import UserDashboard from "./Pages/UserDashboard.jsx";
// import StoreOwnerDashboard from "./Pages/StoreOwnerDashboard.jsx";
// import Dashboard from "./Pages/Dashboard.jsx";
// function App() {
//   return (
//     <Router>
//       <Navbar />  {/* Navbar shown on all pages */}
//       <Routes>
//          <Route path="/" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/user-dashboard" element={<UserDashboard />} />
//         <Route path="/store-owner-dashboard" element={<StoreOwnerDashboard />} />
//         <Route path="/dashboard" element={<Dashboard/>} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;


// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// import Navbar from "./Component/Navbar.jsx";
// import Login from "./Pages/Login.jsx";
// import Register from "./Pages/Register.jsx";
// import AdminDashboard from "./Pages/AdminDashboard.jsx";
// import UserDashboard from "./Pages/UserDashboard.jsx";
// import StoreOwnerDashboard from "./Pages/StoreOwnerDashboard.jsx";
// import Dashboard from "./Pages/Dashboard.jsx";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("userRole"));

//   // Listen for changes in localStorage userRole (login/logout)
//   useEffect(() => {
//     const handleStorageChange = () => {
//       setIsLoggedIn(!!localStorage.getItem("userRole"));
//     };

//     // Optional: listen to storage events (if multiple tabs)
//     window.addEventListener("storage", handleStorageChange);

//     return () => {
//       window.removeEventListener("storage", handleStorageChange);
//     };
//   }, []);

//   const LocationWrapper = () => {
//     const location = useLocation();
//     const noNavbarPaths = ["/", "/login", "/register"];
//     const showNavbar = isLoggedIn && !noNavbarPaths.includes(location.pathname);

//     return (
//       <>
//         {showNavbar && <Navbar />}
//         <Routes>
//           <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
//           <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />

//           {/* <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} /> */}
//           <Route path="/register" element={<Register />} />
//           <Route path="/admin-dashboard" element={<AdminDashboard />} />
//           <Route path="/user-dashboard" element={<UserDashboard />} />
//           <Route path="/store-owner-dashboard" element={<StoreOwnerDashboard />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//         </Routes>
//       </>
//     );
//   };

//   return (
//     <Router>
//       <LocationWrapper />
//     </Router>
//   );
// }

// export default App;

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
