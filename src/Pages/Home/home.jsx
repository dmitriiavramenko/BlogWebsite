import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./home.scss"

const Home = () => {
    const navigator = useNavigate();
    useEffect(() => {
        navigator('/profile');
    }, [navigator]);
}

export default Home;
