import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./resetPassword.scss";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
    else {
      setEmail(localStorage.getItem("user"));
    }
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (!emailRegex.test(email)) {
      setError("Invalid email address");
      return;
    }

    if (oldPassword.length < 4 || oldPassword.length > 10) {
      setError("Old password must be between 4 and 10 characters");
      return;
    }

    if (newPassword.length < 4 || newPassword.length > 10) {
      setError("New password must be between 4 and 10 characters");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    try {
      const response = await fetch("https://shy-puce-armadillo-fez.cyclic.app/users/resetPassword", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, oldPassword, newPassword }),
      });
      const data = await response.json();

      if (data != "Password updated successfully") {
        setError(data);
      } else {
        console.log("Password reset successful!");
        navigate("/login");
        
      }
    } catch (error) {
      setError("An error occurred, please try again later");
    }
  };

    return (
        <div className="ResetPassword">
        <div className="card">
          <div className="left">
            <h1>Hey There!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero cum,
              alias totam numquam ipsa exercitationem dignissimos, error nam,
              consequatur.
            </p>
          </div>
          <div className="right">
            <h1>Change Password</h1>
            <form onSubmit={handleSubmit}>
            {error && <div style={{ color: "red" }}>{error}</div>}
              {/* <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/> */}
              <input type="password" placeholder="Current Password" value={oldPassword}  onChange={(e) => setOldPassword(e.target.value)} required/>
              <input type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required/>
              <input type="password" placeholder="Confirm New Password" value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)}  required/>
              <button type="submit">Change Password</button>
              <Link to={'/profile'}><button>Back</button></Link>
            </form>
          </div>
        </div>
      </div>
    );
}

export default ResetPassword;
