import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import AuthForm from './Pages/authForm';
import { Layout } from 'lucide-react';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.currentUser);
  return user ? children : <Navigate to="/" />;
};
const Routing = () => {

  return (
    <Routes>
      <Route path="/" element={<AuthForm />} />
      <ProtectedRoute>
        <Route path="/home" element={<Layout />} />
      </ProtectedRoute>

    </Routes>
  )
}

export default Routing