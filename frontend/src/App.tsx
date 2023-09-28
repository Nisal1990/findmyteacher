import React from "react";
import "./App.scss";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Authentication from "./authentication/Index";
import Login from "./authentication/Login";
import Resgister from "./authentication/Resgister";

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<Authentication />}>
          <Route path="login" index element={<Login />} />
          <Route path="register" element={<Resgister />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
