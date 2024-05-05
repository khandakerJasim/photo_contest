import { createBrowserRouter } from "react-router-dom";
import Home from "./../Pages/Home/Home";
import Main from "./../Layout/Main";
import Profile from "../Pages/Profile/Profile";
import Contests from "../Pages/Contests/Contests";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import ContestDetails from "../Components/ContestDetails/ContestDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/contests",
        element: <Contests />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reg",
        element: <Registration />,
      },
      {
        path: "/contests/details",
        element: <ContestDetails />,
      },
    ],
  },
]);

export default router;
