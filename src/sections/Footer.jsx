import { Link } from "react-router-dom";
import logo from "../assets/sca_logo.png";
import Copyright from "../components/Copyright";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-950 text-white border-b border-blue-400">
        <div className="mx-auto p-6 grid grid-cols-1 gap-4 md:grid-cols-2 md:text-lg md:p-12 lg:grid-cols-4 lg:container">
          <div>
            <p className="text-lg font-bold md:text-xl mb-2">
              Company
            </p>
            <Link to="/">
              <p className="text-3xl text-green-600">LOGO</p>
            </Link>
            <p>
              Empowering businesses with innovative technology for a secure and
              efficient future.
            </p>
          </div>

          <div>
            <p className="text-lg font-bold md:text-xl mb-2">Our Company</p>
            <ul>
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="about">About Us</Link>
              </li>
              <li>
                <Link to="service">Our Services</Link>
              </li>
              <li>
                <Link to="contact">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex gap-2 items-center ">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:contact@company.com.np">
                contact@company.com.np
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:marketing@company.com.np">
                marketing@company.com.np
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:vacancy@company.com.np">
                vacancy@company.com.np
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+9779812345678">+977-9812345678</a>
            </div>
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-location-dot"></i>
              <p>New Baneshwor, Kathmandu</p>
            </div>
          </div>

          <div>
            <p className="text-lg font-bold md:text-xl mb-2">Follow Us</p>
            <ul className="flex">
              <li className="px-1">
                <a
                  href="https://facebook.com"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="px-1">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="px-1">
                <a
                  href="https://instagram.com"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="px-1">
                <a href="https://x.com" target="_blank">
                  <i className="fa-brands fa-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Copyright />
    </>
  );
};

export default Footer;
