import { Icon } from "@iconify/react";
import logo from "../../../assets/logo-main.png.png";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!open);
  };
  const handleClick = (event) => {
    event.preventDefault();
    setOpen(false);
  };
  return (
    <header className="bg-gray z-50 sticky w-full top-0">
      <div className="flex justify-around items-center max-w-screen-2xl mx-auto py-4">
        <div>
          <Link to="/">
            <img src={logo} alt="" className="w-60" />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-2">
            <li className="btn-primary">
              <div>
                <Link to="/">Home</Link>
              </div>
            </li>
            <li className="btn-primary">
              <Link to="/contests">Contests</Link>
            </li>
          </ul>
        </div>
        {/* dropdown */}
        <div>
          <div className="flex items-center relative z-40">
            <Icon icon="bi:person" width="25px" />
            <button
              onClick={toggleOpen}
              className="flex items-center space-x-1"
            >
              <h1>Hello John</h1>
              <Icon
                icon="ep:arrow-down"
                className={`transition-transform duration-300 ${
                  open ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            <ul
              className={`absolute ${
                open ? "block" : "hidden"
              } right-0  bg-white w-full px-4 py-2 space-y-2 rounded animation-open transition-all duration-300`}
            >
              <li
                onClick={handleClick}
                className="hover:translate-x-1 duration-300 hover:text-primary"
              >
                <Link to="/profile">Profile</Link>
              </li>
              <li>LogOut</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
