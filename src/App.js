import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import ResetPassword from "./Pages/resetPassword/resetPassword";
import Profile from "./Pages/profile/profile"
import ForgotPassword from "./Pages/ForgotPassword/forgotPassword";
import "./style.scss";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import PageNotFound from "./Pages/pageNotFound/pageNotFound";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/resetPassword" element={<ResetPassword/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/forgotPassword" element={<ForgotPassword/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;



