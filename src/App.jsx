import { useState } from "react";

import Navbar from "./components/common/Navbar.jsx";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router';
import UserLayout from "./layouts/UserLayout.jsx";
import Home from "./pages/user/Home.jsx";
import Market from "./pages/user/Market.jsx";
import Account from "./pages/user/Account.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout/>}>

          <Route 
          path="/"
          element={<Home />}
          />

          <Route 
          path="market"
          element={<Market />}
          />

          <Route 
          path="account"
          element={<Account />}
          />

          </Route>
      </Routes>
    </BrowserRouter>
  );
}
