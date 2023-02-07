import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import "./forgotPassword.scss";

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      if (localStorage.getItem('user')) {
        navigate("/profile");
      }
    }, [navigate])

    const handleSubmit = async (event) => {
      event.preventDefault();

      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

      if (!emailRegex.test(email)) {
        setError("Invalid email address");
        return;
      }

      try {
        const response = await fetch("https://shy-puce-armadillo-fez.cyclic.app/users/forgotPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email}),
        });
        const data = await response.json();

        if (data != "Password updated successfully") {
          setError(data);
        } else {
          console.log("Password reset successful!");
          navigate("/login");
        }
      } catch (error) {
        setError("Try again later!")
      }

    }
    return (
        <div className="ForgotPassword">
        <div className="card">
          <div className="left">
            <h1>Hey There!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
              alias totam numquam ipsa exercitationem dignissimos, error nam,
              consequatur.
            </p>
            <span>Don't you have an account?</span>
              <Link to="/register"><button>Register</button></Link>
          </div>
          <div className="right">
            <h1>Password Reset</h1>
            <form onSubmit={handleSubmit}>   
            {error && <div style={{ color: "red" }}>{error}</div>}
            <input type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required/>                 
            <button type="submit">Send Request</button>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ForgotPassword;
