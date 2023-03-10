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


const LeftBar = () => {
    return (
        <div className="leftBar">
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img 
                          src={User} alt="" />
                        <span>Sophia Bush</span>
                    </div>
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
                <div className="menu">
                    <span>Your Shortcuts</span>
                    <div className="item">
                        <img src={Events} alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={Gaming} alt="" />
                        <span>Gaming</span>
                    </div>
                    <div className="item">
                        <img src={Gallery} alt="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={Videos} alt="" />
                        <span>Videos</span>
                    </div>
                    <div className="item">
                        <img src={Messages} alt="" />
                        <span>Messages</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    <div className="item">
                        <span>Others</span>
                    </div>
                    <div className="item">
                        <img src={Fund} alt="" />
                        <span>Fundraiser</span>
                    </div>
                    <div className="item">
                        <img src={Tutorials} alt="" />
                        <span>Tutorials</span>
                    </div>
                    <div className="item">
                        <img src={Courses} alt="" />
                        <span>Courses</span>
                    </div>
                </div>
               
            </div>
        </div>
        
    );
}

export default LeftBar;
