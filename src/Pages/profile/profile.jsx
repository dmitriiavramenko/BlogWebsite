import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./profile.scss"

const Profile = () => {
    const navigate = useNavigate();
    const handleClick = (e) => {
      localStorage.removeItem('user');
      navigate('/login');
    }
    useEffect(() => {
      if (!localStorage.getItem('user')) {
        navigate('/login');
      }
    }, [navigate]);
    return (
        <div className="Profile">
        <div className="card">
          <div className="left">
            <h1>Profile</h1>
            <u><h2>My Account</h2></u>
            <u><h2>My Friends</h2></u>
            <u><h2>My Stories</h2></u>
            <Link to='/resetPassword'>
            <h2>Change Password</h2>
            </Link>
            <button onClick={handleClick}>Loggout</button>
          </div>
          <div className="right">
            <h1>(Coming Soon!!)</h1>
          </div>
        </div>
      </div>
    );
}

export default Profile;
