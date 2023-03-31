import "./navbar.scss"
import User from "../../assets/user.jpeg";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

const Navbar = () => {

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch("https://shy-puce-armadillo-fez.cyclic.app/users/getFriends", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ "email" : localStorage.getItem('email')}),
              });
            const data = await response.json();
            console.log(data)
            setSearchResults(
              data.filter((result) => 
                result.friendUsername.toLowerCase().includes(searchTerm.toLowerCase())
              ).slice(0, 2)
            );
          } catch (error) {
            console.log(error);
          }
        };
    
        if (searchTerm.length >= 2) {
          fetchData();
        }
      }, [searchTerm]);

      const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
      };

    return (
        <div className="navbar">
            <div className="left">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span>Seneca Connect</span>
                </Link>
                <HomeOutlinedIcon />
                <DarkModeOutlinedIcon />
                <GridViewOutlinedIcon />
                <div className="search">
                    <SearchOutlinedIcon />
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleSearchTermChange}
                    />
                    {searchResults.length > 0 && searchTerm.length >= 2 && (
                        <div className="search-results">
                        {searchResults.map((result) => (
                            <div key={result._id}><Link  to={`/friendProfile/${result.friendUsername}`} style={{textDecoration:"none"}} >{result.friendUsername}</Link></div>
                        ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="right">
                <PersonOutlinedIcon />
                <EmailOutlinedIcon />
                <NotificationsOutlinedIcon />
                <div className="user">
                    <img src={User} alt="" />
                    <span>{localStorage.getItem('user')}</span>
                </div>
            </div>
        </div>
    );
}


export default Navbar;
