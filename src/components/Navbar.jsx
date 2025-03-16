import logo from "../../public/images/logo.svg";
import harmburger from "../../public/images/icon-hamburger.svg";
import close from "../../public/images/icon-close.svg";
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
          <div className="container-logo md:w-full bg-transparent w-1/2 md:flex float-left md:justify-end h-full pl-10">
            <a href="#">
              <img src={logo} alt="" className="logo" />
            </a>
          </div>

          {/* harmbugger for toggling mobile navbar */}
          <div className="container-harmbugger md:hidden w-1/2 h-full pt-3 float-right text-right pr-10">
            <button className="text-white" onClick={handleNavbar}>
              {smallScreenNav ? (
                <img
                  src={close}
                  alt="close"
                  style={{ cursor: "pointer" }}
                  title="close-nav"
                />
              ) : (
                <img
                  src={harmburger}
                  alt="harmburger"
                  style={{ cursor: "pointer" }}
                  title="drop-nav"
                />
              )}
            </button>
          </div>
        </div>

        {/* navbar page links */}
        <div
          className={`container-ul md:w-200 md:p-3 p-8 md:bg-transparent bg-white w-80 rounded-xl md:mt-0 mt-3 md:justify-normal flex justify-self-center ${
            smallScreenNav ? "active-nav" : ""
          }`}
        >
          <div className="container-items w-full">
            <ul className="md:w-full mb-6 md:flex md:justify-start block text-center">
              <li className="md:ml-10 text-dark mb-5 text-center">
                <a href="#">Product</a>
              </li>

              <li className="md:ml-10 text-dark mb-5 text-center">
                <a href="#">Company</a>
              </li>

              <li className="md:ml-10 text-dark text-center">
                <a href="#">Connect</a>
              </li>
            </ul>

            {/* mobile button */}
            <div className="container-btn-mobile h-max md:hidden block pt-4 bottom-0">
              <center>
                <div className="containr-btn w-full mb-5">
                  <button className="login-link-btn text-center w-100%">
                    Login
                  </button>
                </div>

                <div className="containr-btn w-full">
                  <button className="btn-signup-link text-white">
                    Sign Up
                  </button>
                </div>
              </center>
            </div>
          </div>
        </div>

        {/* desktop button */}
        <div className="container-btn h-full md:w-80 md:block hidden">
          <div className="container-padder flex justify-items-start">
            <div className="containr-btn mb-5 pt-2">
              <button className="login-link-btn-desktop text-center w-100% text-white">
                Login
              </button>
            </div>

            <div className="containr-btn ml-4">
              <button className="btn-signup-link-desktop bg-white">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
