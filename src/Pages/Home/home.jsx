import { useEffect } from "react";
import { useState } from "react";
import "./home.scss"
import Stories from "../../components/stories/stories";
import Posts from "../../components/posts/posts";
import Share from "../../components/share/share";
import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
      if (!localStorage.getItem('user')) {
        navigate('/login');  
      }
      else {
        Promise.all([
          fetch("https://shy-puce-armadillo-fez.cyclic.app/posts/").then(response => response.json()),
          fetch("https://shy-puce-armadillo-fez.cyclic.app/users/").then(response => response.json()),
        ])
        .then(([postsData, usersData]) => {
          setPosts(postsData.reverse());
          setUsers(usersData);
          for (let i = 0; i < usersData.length; i++) {
            if (usersData[i].username === localStorage.getItem('user')) {
                setUser(usersData[i]);
            }
        }
        })
      }
    }, []);


    const handleAddPost = (newPost) => {
        setPosts([newPost, ...posts]);
        handleUpdate();
      };
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

    const handleUpdate = () => {
      fetch("https://shy-puce-armadillo-fez.cyclic.app/posts/").then(response => response.json())
      .then(data => setPosts(data.reverse()));
    };

    return (
        <div className="home">
            <Share onAddPost={handleAddPost} user={user}/>
            <Posts postings={posts} handleUpdate={handleUpdate} handleDelete={handleDelete} users={users}/>
        </div>
    );
}

export default Home;
