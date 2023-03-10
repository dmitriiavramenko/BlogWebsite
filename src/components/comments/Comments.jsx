import "./comments.scss";
import User from "../../assets/user.jpeg";

const Comments = () => {

    //Temporary data
  const comments = [
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "John Doe",
      userId: 1,
      profilePicture:
        "https://i.ytimg.com/vi/RWE-Aqo12ZI/maxresdefault.jpg",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nequeaspernatur ullam aperiam",
      name: "Jane Doe",
      userId: 2,
      profilePicture:
        "https://preview.redd.it/f4jzwlrk8he31.jpg?auto=webp&s=50005a1aab73b0ed0813ffa7787a792b7e252de0",
    },
  ];

    return (
        <div className="comments">
            <div className="write">
            <img src={User} alt="" />
            <input type="text" placeholder="write a comment..."/>
            <button>Send</button>
            </div>
            {
            comments.map(comment=>(
                <div className="comment">
                    <img src={comment.profilePicture} alt="" />
                    <div className="info">
                        <span>{comment.name}</span>
                        <p>{comment.desc}</p>
                    </div>
                    <span className="date">1 hour ago</span>
                </div>
            ))

        }</div>
    );
}

export default Comments;
