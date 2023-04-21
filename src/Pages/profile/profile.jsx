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
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import axios from 'axios';

const Profile = () => {
  const {id} = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState("");
  const [edit, setEdit] = useState(null);
  const [newImage, setNewImage] = useState("");
  const [users, setUsers] = useState("");
  const [posts, setPosts] = useState([]);
 

  const handleDelete = (id) => {
  fetch(`https://shy-puce-armadillo-fez.cyclic.app/posts/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      setPosts((prevPosts) => prevPosts.filter((post) => post._id !== id));
      return response.json();
    })
    .catch((error) => {
      console.error("Error deleting post:", error);
    });
  };

  const handlePostsUpdate = () => {
    fetch("https://shy-puce-armadillo-fez.cyclic.app/posts/byUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ "username":id }),
      }).then(response => response.json())
      .then(data => setPosts(data.reverse()));
  };


  const handleLogOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('email');
    navigate('/login')
  };
  
  const handleUpdate = () => {
    setEdit(false);
    fetch(`https://shy-puce-armadillo-fez.cyclic.app/users/updateUser/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 'Name': data.fName, 'lName': data.lName, 'email': data.email, 'img': newImage}),
      });
  }

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');  
    }
    else if (id != localStorage.getItem('user')) {
      navigate('/');
    }
    else {
      Promise.all([
        fetch("https://shy-puce-armadillo-fez.cyclic.app/users/").then(response => response.json()),
        fetch("https://shy-puce-armadillo-fez.cyclic.app/posts/byUser", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ "username":id }),
        }).then(response => response.json())
      ]).then(([users, posts]) => {
        const userData = users.find(user => user.username === id);
        setData(userData);
        setPosts(posts.reverse());
        setUsers(users);
      });
    }
  }, []);

  
  return (
    <div className="profile">
      <div className="images">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwYmVhY2h8ZW58MHx8MHx8&w=1000&q=80" alt="" className="cover" />
        
        {/* put your code here */}
        {/* This is the profile image to be changed */}
        <img src={data.img} alt="" className="profilePic" />
      {/* put your code here */}
      
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
         
          </div>
          <div className="center">
            <br></br>
            <br></br>
            <span>{data.username}</span>
            <div className="info">
             
            </div>
            {/* This is where code should be */}  
              {edit ? (
                        <div>
                            <input type="text" value={newImage} onChange={(e) => setNewImage(e.target.value)} />
                            <button onClick={() => handleUpdate()}>Save</button>
                        </div>
                    ) : (
                        <button onClick={() => setEdit(true)}>Update Profile Picture</button>
                    )}
            {/* Or here */}
              <Link to='/resetPassword'>
              <button>Change Password</button>
              </Link>
          </div>
          <div className="right">
            
            <button onClick={handleLogOut}>Loggout</button>
          </div>
        </div>
        <Posts postings={posts} handleUpdate={handlePostsUpdate} handleDelete={handleDelete} users={users}/>
      </div>
    </div>
  );
}


export default Profile;
