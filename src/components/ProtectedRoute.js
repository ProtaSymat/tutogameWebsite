// ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const isAuthenticated = localStorage.getItem('token'); // Remplacez 'userToken' par la clé que vous avez utilisée

  return isAuthenticated ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;