// src/Routing.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import Dashboard from "./Pages/Dashboard";
import Products from "./Pages/Products";
import AuthForm from "./Pages/AuthForm";
import Expenses from "./Pages/Expenses";
import Account from "./Pages/Account";
import Billing from "./Pages/Billing";
import Reports from "./Pages/Reports";
import Transaction from "./Pages/Transaction";


const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/home" element={<Layout />}>
           <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="expenses" element={<Expenses />} />
          <Route path="account" element={<Account />} />
          <Route path="billing" element={<Billing />} />
          <Route path="reports" element={<Reports />} />
          <Route path="transactions" element={<Transaction />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
