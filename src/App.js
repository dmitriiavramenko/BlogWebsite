import Home from "./Pages/Home/home";
import Navbar from "./components/navbar/navbar";
import LeftBar from "./components/leftBar/leftBar";
import RightBar from "./components/rightBar/rightBar";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import ResetPassword from "./Pages/resetPassword/resetPassword";
import Profile from "./Pages/profile/profile";
import ForgotPassword from "./Pages/ForgotPassword/forgotPassword";
import Posts from "./components/posts/posts";
import "./style.scss";
import { createHashRouter, RouterProvider, Outlet, Route, Navigate} from 'react-router-dom';
import PageNotFound from "./Pages/pageNotFound/pageNotFound";

function App() {

  const Layout = ()=>{
    return(
      <div>
        <Navbar />
        <div style={{display: "flex"}}>
          <LeftBar />
          <div style={{flex: 6}}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };



const router = createHashRouter([
  {
    path: "/",
    element: (
      <Layout />
    ),
    children:[
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/profile/:id",
        element: <Profile />
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/resetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "*",
    element: <PageNotFound />
  },
  {
    path: "/posts",
    element: <Posts />,
  },
]);  

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;



