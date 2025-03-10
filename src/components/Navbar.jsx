import logo from "../../public/images/logo.svg";
import harmburger from "../../public/images/icon-hamburger.svg";

export default function Navbar() {
  return (
    <>
      <nav className="md:flex md:justify-between absolute bg-transparent">
        <div className="container-logo h-full md:w-1/5 flex justify-between">
          <div className="container-logo md:w-full w-1/2 pt-5 md:flex md:justify-end h-full pl-10">
            <a href="">
              <img src={logo} alt="" className="logo" />
            </a>
          </div>
          <div className="container-harmbugger md:hidden float-left w-1/2 h-full flex justify-end text-right pr-10">
            <button className="text-white">
              <img
                src={harmburger}
                alt="harmburger"
                style={{ cursor: "pointer" }}
                title="drop-nav"
              />
            </button>
          </div>
        </div>

        <div className="container-ul h-full md:w-200 p-8">
          <ul className="md:w-full md:flex md:justify-start text-center">
            <li className="ml-10 text-white mb-5">
              <a href="#">Product</a>
            </li>
            <li className="ml-10 text-white mb-5">
              <a href="#">Company</a>
            </li>
            <li className="ml-10 text-white mb-5">
              <a href="#">Connect</a>
            </li>
          </ul>
        </div>
        <div className="container-btn h-full md:w-80"></div>
      </nav>
    </>
  );
}
