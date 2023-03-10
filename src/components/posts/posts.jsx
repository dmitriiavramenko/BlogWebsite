import "./posts.scss";
import Post from "../post/Post";
import { useEffect, useState } from "react";

const Posts = ({postings, handleDelete, handleUpdate}) => {

    return (
        <div className="posts">
            {postings.map(post=>(
               <Post post={post} onDeletePost={handleDelete} onUpdatePost={handleUpdate} key={post._id}/>
            ))}
        </div>
    );
}

export default Posts;
