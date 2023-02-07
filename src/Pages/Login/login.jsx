import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.scss";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/profile');
    }
  }, [navigate]);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    if (password.length < 4 || password.length > 10) {
      setError("Password must be between 4 and 10 characters");
      return;
    }

    try {
      const response = await fetch("https://shy-puce-armadillo-fez.cyclic.app/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "email" : email, "password" : password }),
      });
      const data = await response.json();

      if (data !== "Account found!") {
        setError(data);
      } else {
        localStorage.setItem('user', email);
        navigate("/profile");
        console.log("Login successful!");
        console.log(localStorage.getItem('user'));
        
      }
    } catch (error) {
      setError("An error occurred, please try again later");
    }
    console.log(`Email: ${email} Password: ${password}`);
  };

  return (  
      <div className="login">
    <div className="card">
      <div className="left">
        <h1>Hey There...</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
          alias totam numquam ipsa exercitationem dignissimos, error nam,
          consequatur.
        </p>
        <span>Don't you have an account?</span>
          <Link to="/register"><button>Register</button></Link>
      </div>
      <div className="right">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          <button type="submit">Login</button>
          <Link to="/ForgotPassword">Forgot Password?</Link>
        </form>
      </div>
    </div>
  </div>
  );
}

export default Login;

