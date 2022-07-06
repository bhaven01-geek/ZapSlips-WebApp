import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";
import DashboardLayout from './layout/layout1';
export default function PrivateRoute() {
  const { currentUser } = useAuth();

  // If logged in return component else redirect
  return (
    currentUser ? 
    <DashboardLayout /> : 
    <Navigate replace to="/login" />
  );
}
