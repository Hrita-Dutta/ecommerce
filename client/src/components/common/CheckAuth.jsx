import React from "react";
import { Navigate, useLocation } from "react-router";

// check authentication and authorization
const CheckAuth = ({ isAuthenticated, user, children }) => {
  
  const location = useLocation();

  const isAuthPage =
    location.pathname.includes("/login") ||
    location.pathname.includes("/register");

  // not authenticated user
  if (!isAuthenticated && !isAuthPage) {
    return <Navigate to="/auth/login" />;
  }

  // authenticated user
  if (isAuthenticated && isAuthPage) {
    // navigate according to user role
    if (user?.role === "admin") {
      return <Navigate to="/admin/dashboard" />;
    } else {
      return <Navigate to="/shop" />;
    }
  }

  // Navigate to unauth page
  if (
    isAuthenticated &&
    user?.role !== "admin" &&
    location.pathname.startsWith("/admin")
  ) {
    return <Navigate to="/unauth-page" />;
  }

  if (
    isAuthenticated &&
    user?.role === "admin" &&
    location.pathname.startsWith("/shop")
  ) {
    return <Navigate to="/admin/dashboard" />;
  }

  return <>{children}</>;
};

export default CheckAuth;
