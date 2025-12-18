import { Navigate } from "react-router-dom";
import React from "react";

interface Props {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: Props) => {
  const token = localStorage.getItem("accessToken");
  const refreshToken =localStorage.getItem("refreshToken");
  return token && refreshToken ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;