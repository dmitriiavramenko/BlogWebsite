import "./posts.scss";
import Post from "../post/Post";
import { useEffect, useState } from "react";

const Posts = ({postings, handleDelete, handleUpdate, users}) => {
  
    return (
        <div className="posts">
            {postings.map(post=>(
               <Post post={post} onDeletePost={handleDelete} onUpdatePost={handleUpdate} key={post._id} users={users}/>
            ))}
        </div>
    );
}

export default Posts;
