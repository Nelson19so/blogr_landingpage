import logo from "../../public/images/logo.svg";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="container-footer w-full">
          <div className="container-padder w-full md:flex md:justify-evenly md:p-20 p-10 ">
            <div className="container-items-footer md:text-left text-center md:block flex justify-center">
              <div className="container-logo">
                <img src={logo} alt="blogr-logo" />
              </div>
            </div>

            <div className="container-items-footer md:text-left text-center mt-8 md:mt-0">
              <p className="text-white font-bold">Product</p>
              <ul>
                <li className="mt-4 mb-4">
                  <a href="#">Overview</a>
                </li>
                <li className="mb-4">
                  <a href="#">Pricing</a>
                </li>
                <li className="mb-4">
                  <a href="#">Marketplace</a>
                </li>
                <li className="mb-4">
                  <a href="#">Features</a>
                </li>
                <li className="mb-4">
                  <a href="#">Integrations</a>
                </li>
              </ul>
            </div>

            <div className="container-items-footer md:text-left text-center md:mt-0 mt-7">
              <p className="text-white font-bold">Company</p>
              <ul>
                <li className="mt-4 mb-4">
                  <a href="#">About</a>
                </li>
                <li className="mb-4">
                  <a href="#">Team</a>
                </li>
                <li className="mb-4">
                  <a href="#">Blog</a>
                </li>
                <li className="mb-4">
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>

            <div className="container-items-footer md:text-left text-center md:mt-0 mt-7">
              <p className="text-white font-bold">Company</p>
              <ul>
                <li className="mt-4 mb-4">
                  <a href="#">Contact</a>
                </li>
                <li className="mb-4">
                  <a href="#">Newsletter</a>
                </li>
                <li className="mb-4">
                  <a href="#">LinkedIn</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
