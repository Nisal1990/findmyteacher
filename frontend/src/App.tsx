import React from "react";
import "./App.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Navigate, Route, Router, Routes } from "react-router-dom";
import Authentication from "./authentication/Index";
import Login from "./authentication/Login";
import Resgister from "./authentication/Resgister";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DashboardLayout from "./dashboard/Index";
import DashboardHome from "./dashboard/DashboardHome";
import DashboardProfile from "./dashboard/DashboardProfile";
import PageLayout from "./pages/PageLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>

      {/* Authentication Routes  */}
      <Route path="auth/*" element={<Authentication />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Resgister />} />
      </Route>

      {/* Dashboard routes  */}
      <Route path="dashboard/*" element={<DashboardLayout />}>
        <Route path="home" element={<DashboardHome />} />
        <Route path="profile" element={<DashboardProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
