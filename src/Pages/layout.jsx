import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Component/Navbar.jsx";

const Layout = ({ isLoggedIn, children }) => {
  const location = useLocation();

  // Paths where Navbar should NOT show
  const noNavbarPaths = ["/", "/login", "/register"];

  const showNavbar = isLoggedIn && !noNavbarPaths.includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}
      <main>{children}</main>
    </>
  );
};

export default Layout;
