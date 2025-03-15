import logo from "../../public/images/logo.svg";
import harmburger from "../../public/images/icon-hamburger.svg";
import { useState } from "react";

export default function Navbar() {
  const [smallScreenNav, setSmallScreenNav] = useState(false);

  const handleNavbar = () => {
    setSmallScreenNav(!smallScreenNav);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="md:flex md:justify-between absolute bg-transparent pt-10">
        <div className="container-logo h-full md:w-1/5 flex justify-between">
          {/* Home bar logo */}
          <div className="container-logo md:w-full w-1/2 md:flex float-left md:justify-end h-full pl-10">
            <a href="">
              <img src={logo} alt="" className="logo" />
            </a>
          </div>

          {/* harmbugger for toggling mobile navbar */}
          <div className="container-harmbugger md:hidden w-1/2 h-full pt-3 float-right text-right pr-10">
            <button className="text-white" onClick={handleNavbar}>
              <img
                src={harmburger}
                alt="harmburger"
                style={{ cursor: "pointer" }}
                title="drop-nav"
              />
            </button>
          </div>
        </div>

        {/* navbar page links */}
        <div
          className={`container-ul md:w-200 md:p-3 p-8 md:bg-transparent bg-white w-80 rounded-md md:shadow-none shadow-xl md:mt-0 mt-3 md:justify-normal flex justify-self-center ${
            smallScreenNav ? "active-nav" : ""
          }`}
        >
          <ul className="md:w-full md:flex md:justify-start text-center">
            <li className="md:ml-10 md:text-white text-dark mb-5 text-center">
              <a href="#">Product</a>
            </li>
            <li className="md:ml-10 md:text-white text-dark mb-5 text-center">
              <a href="#">Company</a>
            </li>
            <li className="md:ml-10 md:text-white text-dark text-center">
              <a href="#">Connect</a>
            </li>
          </ul>

          {/* <div className="container-btn w-100% h-max md:hidden block">
            <button className="text-center w-100%">Login</button>
            <button className="btn-signup-link text-white">Sign Up</button>
          </div> */}
        </div>

        <div className="container-btn h-full md:w-80"></div>
      </nav>
    </>
  );
}
