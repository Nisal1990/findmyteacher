import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h1>Login Page</h1>
      <Link to="/auth/register">Signup</Link>
    </>
  );
};

export default Login;
