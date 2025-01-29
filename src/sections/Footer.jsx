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
              SCA Techno Consult
            </p>
            <Link to="/">
              <img src={logo} alt="logo" />
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
                <Link to="team">Our Team</Link>
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
              <a href="mailto:contact@scatechno.com.np">
                contact@scatechno.com.np
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:marketing@scatechno.com.np">
                marketing@scatechno.com.np
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-envelope"></i>
              <a href="mailto:vacancy@scatechno.com.np">
                vacancy@scatechno.com.np
              </a>
            </div>
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:015922949">01-5922949</a>
            </div>
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-phone"></i>
              <a href="tel:+9779863760364">+977-9863760364</a>
            </div>
            <div className="flex gap-2 items-center">
              <i className="fa-solid fa-location-dot"></i>
              <p>Kharibot, New Baneshwor, Kathmandu</p>
            </div>
          </div>

          <div>
            <p className="text-lg font-bold md:text-xl mb-2">Follow Us</p>
            <ul className="flex">
              <li className="px-1">
                <a
                  href="https://facebook.com/scatechno.consult"
                  target="_blank"
                >
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="px-1">
                <a
                  href="https://linkedin.com/company/sca-techno-consult"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="px-1">
                <a
                  href="https://instagram.com/scatechno.consult"
                  target="_blank"
                >
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="px-1">
                <a href="https://x.com/SCATechConsult" target="_blank">
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
