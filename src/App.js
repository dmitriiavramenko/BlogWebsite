import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import ResetPassword from "./Pages/resetPassword/resetPassword";
import Profile from "./Pages/profile/profile"
import ForgotPassword from "./Pages/ForgotPassword/forgotPassword";
import "./style.scss";
import { HashRouter, Route, Routes} from 'react-router-dom';
import PageNotFound from "./Pages/pageNotFound/pageNotFound";


function App() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/resetPassword" element={<ResetPassword/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </HashRouter>
    </div>
    
  );
}

export default App;



