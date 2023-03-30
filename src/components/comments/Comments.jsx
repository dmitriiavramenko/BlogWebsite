import "./comments.scss";
import User from "../../assets/user.jpeg";
import { useState } from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

const Comments = ({post, onUpdatePost}) => {
    const [text, setText] = useState("");
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editedCommentText, setEditedCommentText] = useState('');

    const [menuOpen, setMenuOpen] = useState(false);
    const [menuCommentId, setMenuCommentId] = useState(null);

    const currentUser = localStorage.getItem('user');


    const updatePost = (postId, comments) => {
      fetch(`https://shy-puce-armadillo-fez.cyclic.app/posts/update/${postId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "title":post.title, "username" : post.username, "img" : post.img, "text": post.text, "comments" : comments, "data": post.data })
      })
        .then(() => {
          onUpdatePost();
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const handleAddComment = () => {
        const maxId = post.comments.reduce((max, comment) => Math.max(max, comment.id), 0);
        const newComment = { id: maxId + 1, username: localStorage.getItem('user'), text, date: new Date() };
        const updatedComments = [...post.comments, newComment];
        updatePost(post._id, updatedComments);
    }


    const handleEdit = (commentId, commentText) => {
      setEditingCommentId(commentId);
      setEditedCommentText(commentText);
  };

  const handleSave = (comment) => {
      comment.text = editedCommentText;
      updatePost(post._id, post.comments);
      setEditingCommentId(null);
      setMenuOpen(false);
  };


  const handleDeleteClick = () => {
      const updatedComments = post.comments.filter(comment => comment.id !== menuCommentId);
      updatePost(post._id, updatedComments);
      setMenuOpen(false);
      setMenuCommentId(null);
    };

    return (
        <div className="comments">
            <div className="write">
            <img src={User} alt="" />
            <input type="text" placeholder="write a comment..." value={text}  onChange={(e) => setText(e.target.value)}/>
            <button onClick={handleAddComment}>Send</button>
            </div>
            {
            post.comments.map(comment=>(
                <div key={comment.id} className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.username}</span>
                        {editingCommentId === comment.id ? (
                        <div>
                            <input type="text" value={editedCommentText} onChange={(e) => setEditedCommentText(e.target.value)} />
                            <button onClick={() => handleSave(comment)}>Save</button>
                        </div>
                    ) : (
                      <p>{comment.text}</p>
                    )}
                    </div>
                    {post.username === currentUser && currentUser === comment.username && (
                    <MoreHorizIcon onClick={() => {setMenuOpen(!menuOpen); setMenuCommentId(comment.id)}} />)}
                    {menuOpen && post.username === currentUser  && comment.id === menuCommentId && (
                        <button onClick={handleDeleteClick}>Delete</button>
                    )}
                    {menuOpen && post.username === currentUser && comment.id === menuCommentId && (
                        <button onClick={() => handleEdit(comment.id, comment.text)}>Edit</button>
                    )}
                    <span className="date">1 hour ago</span>
                </div>
            ))

        }</div>
    );
}

export default Comments;
