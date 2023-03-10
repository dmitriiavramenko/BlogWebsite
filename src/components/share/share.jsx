import "./share.scss";
import User from "../../assets/user.jpeg";
import Place from "../../assets/place.png";
import Image from "../../assets/image.png";
import Friend from "../../assets/friends.png";
import { useState } from "react";


const Share = ({onAddPost}) => {
    const [data, setData] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      let tmp = localStorage.getItem("user");
      var body = {"title": "Default", "username":tmp, "data": data, "img" : [], "text" : "Default", "comments": []};
      fetch('https://shy-puce-armadillo-fez.cyclic.app/posts/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then(response => {
          if (response.ok) {
            onAddPost(body);
            setData("");
            console.log(response);
          } else {
            throw new Error('Error creating post');
          }
        })
        .catch(error => console.error(error));
    };
    return (
        <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={User} alt="" />
            <input
              type="text"
              placeholder="What is on your mind?"
              id="data"
              value={data}
              onChange={(event) => setData(event.target.value)}
            />
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Place} alt="" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleSubmit}>Share</button>
          </div>
        </div>
      </div>
    </div>
    );
}

export default Share;
