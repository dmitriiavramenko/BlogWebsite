import "./post.scss";
import Comments from "../comments/Comments";
import { Link } from "react-router-dom";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState, useEffect } from "react";

const Post = ({ post, onDeletePost, onUpdatePost, users}) => {
    const [editingPostId, setEditingPostId] = useState(null);
    const [editedPostText, setEditedPostText] = useState('');

    const [commentOpen, setCommentOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [data, setData] = useState("");
    const liked = false;
    const currentUser = localStorage.getItem('user');

    useEffect(() => {
         for (let i = 0; i < users.length; i++) {
           if (users[i].username === post.username) {
             setData(users[i]);
           }
         }
         
    }, []);

    const updatePost = (postId, newText) => {
        fetch(`https://shy-puce-armadillo-fez.cyclic.app/posts/update/${postId}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ "title":post.title, "username" : post.username, "img" : post.img, "text": post.text, "comments" : post.comments, "data": newText })
        })
          .then(() => {
            onUpdatePost();
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    const handleEdit = (postId, postText) => {
        setEditingPostId(postId);
        setEditedPostText(postText);
    };

    const handleSave = (postId) => {
        updatePost(postId, editedPostText);
        setEditingPostId(null);
        setMenuOpen(false);
    };


    const handleDeleteClick = () => {
        setMenuOpen(false);
        onDeletePost(post._id);
      };

    return (
        <div className="post">
            <div className="container">
                <div className="user">
                <div className="userInfo">
                    <img src={data.img} alt="" />
                    <div className="details">
                        {localStorage.getItem('user') === post.username ? (
                            <Link to={`/profile/${post.username}`} style={{textDecoration:"none", color: "inherit"}}>
                                <span className="name">{post.username}</span>
                            </Link>
                        ) : (
                            <Link to={`/friendProfile/${post.username}`} style={{textDecoration:"none", color: "inherit"}}>
                                <span className="name">{post.username}</span>
                            </Link>
                        )}
                        <span className="date">{}</span>
                    </div>
                </div>
                {menuOpen && post.username === currentUser && (
                    <button onClick={handleDeleteClick}>Delete</button>
                )}
                {menuOpen && post.username === currentUser && (
                    <button onClick={() => handleEdit(post._id, post.data)}>Edit</button>
                )}
                {post.username === currentUser && (
                <MoreHorizIcon onClick={() => setMenuOpen(!menuOpen)} />)}
                </div>
                <div className="content">
                    {editingPostId === post._id ? (
                        <div>
                            <input type="text" value={editedPostText} onChange={(e) => setEditedPostText(e.target.value)} />
                            <button onClick={() => handleSave(post._id)}>Save</button>
                        </div>
                    ) : (
                        <p>{post.data}</p>
                    )}
                    
                    <img src={post.img} alt="" />
                </div>
                <div className="info">
                    <div className="item" onClick={()=>setCommentOpen(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        {post.comments.length}
                    </div>
                </div>
                {commentOpen && <Comments post={post} onUpdatePost={onUpdatePost} users={users} key={post._id}/>}
            </div>
        </div>
    );
}


export default Post;
