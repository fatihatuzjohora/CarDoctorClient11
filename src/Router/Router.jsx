import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Nav/Home";
import Login from "../Pages/Nav/Login";
import SignUp from "../Pages/Nav/SignUp";
import Checkout from "../Pages/Nav/Component/Checkout";
import Bookings from "../Pages/Nav/Component/Bookings";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout/:id",
        element: <PrivetRoute><Checkout></Checkout></PrivetRoute>,
        loader:({params})=>fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookings",
        element:<PrivetRoute><Bookings></Bookings></PrivetRoute> ,
        
      },
    ],
  },
]);
export default router;
