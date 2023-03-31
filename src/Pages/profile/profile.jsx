import "./profile.scss" 
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/posts";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import { useParams } from "react-router";

const Profile = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    navigate('/login')
  };
  

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');  
    }
  }, []);

  
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80" alt="" className="cover" />
        <img src="https://rare-gallery.com/uploads/posts/868947-Painting-Art-Face-Glasses-Blonde-girl-Hairstyle.jpg" alt="" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
          <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <PinterestIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <br></br>
            <br></br>
            <span>{id}</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>Seneca Connect</span>
              </div>
            </div>
              <button>Update Profile</button>
              <button onClick={handleLogOut}>Loggout</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
