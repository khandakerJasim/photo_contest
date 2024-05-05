import Footer from "../Components/Shared/Footer/Footer";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
const Main = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
