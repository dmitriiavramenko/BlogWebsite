import "./leftBar.scss"
import User from "../../assets/user.jpeg";
import Friends from "../../assets/friends.png";
import Groups from "../../assets/groups.png";
import Market from "../../assets/market.png";
import Memory from "../../assets/memories.png";
import Watch from "../../assets/watch.png";
import Events from "../../assets/events.png";
import Gaming from "../../assets/gaming.png";
import Gallery from "../../assets/gallery.png";
import Videos from "../../assets/videos.png";
import Messages from "../../assets/messages.png";
import Fund from "../../assets/fund.png";
import Tutorials from "../../assets/tutorials.png";
import Courses from "../../assets/courses.png";
import { Link } from "react-router-dom";
import { useState, useEffect} from "react";

const LeftBar = () => {
    const [user, setUser] = useState("");

    useEffect(() => {
        fetch("https://shy-puce-armadillo-fez.cyclic.app/users/getUserById", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ "username":localStorage.getItem('user') }),
        }).then(response => response.json())
        .then(data => setUser(data))
    }, [])

    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <Link to={`/profile/${localStorage.getItem('user')}`} style={{textDecoration:"none", color: "inherit"}}>          
                        <div className="user">
                            <img 
                            src={user.img} alt="" />
                            <span>{localStorage.getItem('user')}</span>
                        </div>
                    </Link>
                    <div className="item">
                        <img src={Friends} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={Groups} alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={Market} alt="" />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={Watch} alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={Memory} alt="" />
                        <span>Memories</span>
                    </div>
                </div>
                <hr />             
            </div>
        </div>
        
    );
}

export default LeftBar;
