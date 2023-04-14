import "./rightBar.scss";

const RightBar = () => {
    return (
        <div className="rightBar">
            <div className="container">
                <div className="item">
                    <span>Suggestions For You</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://wallpaper.dog/large/20526324.jpg" alt="" />
                            <span>David Smith</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ytimg.com/vi/V8boYq0mr-I/maxresdefault.jpg" alt="" />
                            <span>John Smith</span>
                        </div>
                        <div className="buttons">
                            <button>follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>

                <div className="item">
                    <span>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ytimg.com/vi/V8boYq0mr-I/maxresdefault.jpg" alt="" />   
                            <p>
                            <span>Alex Doe</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.pinimg.com/736x/6a/97/50/6a975048e4b0e5a5f9c497af10551c48.jpg" alt="" />   
                            <p>
                            <span>John Smith</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.pinimg.com/236x/7d/0c/84/7d0c845f5176d2a50bcae132a026d08e.jpg" alt="" />   
                            <p>
                            <span>Emma Smith</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.pinimg.com/736x/6a/97/50/6a975048e4b0e5a5f9c497af10551c48.jpg" alt="" />   
                            <p>
                            <span>John Smith</span> changed their cover picture
                            </p>
                        </div>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="item">
                    <span>Online Friends</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.pinimg.com/236x/7d/0c/84/7d0c845f5176d2a50bcae132a026d08e.jpg" alt="" />   
                            <div className="online" />
                            <span>Emma Smith</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.pinimg.com/736x/6a/97/50/6a975048e4b0e5a5f9c497af10551c48.jpg" alt="" />   
                            <div className="online" />
                            <span>John Smith</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.pinimg.com/736x/6a/97/50/6a975048e4b0e5a5f9c497af10551c48.jpg" alt="" />   
                            <div className="online" />
                            <span>John Smith</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://previews.123rf.com/images/chagin/chagin1310/chagin131000093/23220858-young-people-having-fun-dancing-at-party-.jpg" alt="" />   
                            <div className="online" />
                            <span>Ana Armas</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://i.ytimg.com/vi/V8boYq0mr-I/maxresdefault.jpg" alt="" />   
                            <div className="online" />
                            <span>Alex Doe</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://previews.123rf.com/images/chagin/chagin1310/chagin131000093/23220858-young-people-having-fun-dancing-at-party-.jpg" alt="" />   
                            <div className="online" />
                            <span>Ana Armas</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default RightBar;
