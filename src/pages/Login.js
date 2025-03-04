import React from 'react';
import Template from '../components/Template';
import loginImg from "../assets/login.png";

const Login = ({ setIsLoggedIn }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-richblack-900">
      <Template
        title="Welcome Back"
        desc1="Call us, and we will be there."
        desc2="High-quality workmanship at great prices."
        image={loginImg}
        formtype="login"
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};

export default Login;
