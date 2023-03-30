import { useEffect } from "react";
import { useState } from "react";
import "./home.scss"
import Stories from "../../components/stories/stories";
import Posts from "../../components/posts/posts";
import Share from "../../components/share/share";
import { useNavigate } from "react-router";

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
      if (!localStorage.getItem('user')) {
        navigate('/login');  
      }
    }, []);


    const [posts, setPosts] = useState([]);
    useEffect(() => {
      fetch("https://shy-puce-armadillo-fez.cyclic.app/posts/").then(response => response.json())
      .then(data => setPosts(data.reverse()));
    }, []);



    const handleAddPost = (newPost) => {
        setPosts([newPost, ...posts]);
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
            <Share onAddPost={handleAddPost}/>
            <Posts postings={posts} handleUpdate={handleUpdate} handleDelete={handleDelete}/>
        </div>
    );
}

export default Home;
