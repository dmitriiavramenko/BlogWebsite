import Home from "./Pages/Home/home";
import Login from "./Pages/Login/login";
import Register from "./Pages/Register/register";
import ResetPassword from "./Pages/resetPassword/resetPassword";
import Profile from "./Pages/profile/profile"
import ForgotPassword from "./Pages/ForgotPassword/forgotPassword";
import "./style.scss";
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import PageNotFound from "./Pages/pageNotFound/pageNotFound";


const router=createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "*",
    element: <PageNotFound />
  }
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;



