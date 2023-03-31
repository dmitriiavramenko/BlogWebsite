import "./friendProfile.scss";
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
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const FriendProfile = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [isFriend, setIsFriend] = useState(null);
  const email = localStorage.getItem('email');

  function isIdInData(id, data) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].friendUsername === id) {
        return true;
      }
    }
    return false;
  }

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');  
    } else {
      const checkFriendship = async () => {
        const response = await fetch("https://shy-puce-armadillo-fez.cyclic.app/users/getFriends", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({ "email" : localStorage.getItem('email')}),
                });
        const data = await response.json();
        setIsFriend(isIdInData(id, data));
      };
      checkFriendship();
    }
  }, []);

const handleAddFollow = async () => {
    const response = await fetch("https://shy-puce-armadillo-fez.cyclic.app/users/addFriend", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ "username" : localStorage.getItem('user'), "friendUsername" : id}),
    });
  const data = await response.json();
  setIsFriend(true);
  console.log(data, id)
}


const handleDeleteFollow = async () => {
    const response = await fetch("https://shy-puce-armadillo-fez.cyclic.app/users/removeFriend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "username" : localStorage.getItem('user'), "friendUsername" : id}),
      });
    const data = await response.json();
    setIsFriend(false);
};

  return (
    <div className="profile">
      <div className="images">
        <img src="https://img.freepik.com/free-photo/black-concrete-textured-background_53876-63609.jpg" alt="" className="cover" />
        <img src="https://i.pinimg.com/originals/5c/13/2d/5c132dfa587429da4608f665d1cb3384.jpg" alt="" className="profilePic" />
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
                {isFriend && (
                  <button onClick={handleDeleteFollow}>Unfollow</button>
                )}
                {!isFriend && (
                  <button onClick={handleAddFollow}>Follow</button>
                )}
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

export default FriendProfile;
