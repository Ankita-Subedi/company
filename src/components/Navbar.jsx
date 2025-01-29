import { useState } from "react";
import logo from "../assets/sca_logo.png";
import Hamburger from "./Hamburger";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        {/* for small screen  */}
        <div className="sm:hidden text-center text-white bg-blue-950">
          <div className="py-1">
            Phone: <a href="tel:+977-9812345678">+977-9812345678</a>
          </div>
          <div>
            <ul className="flex justify-center py-1">
              <li className="px-1">
                <a href="https://facebook.com" target="_blank">
                  <i className="fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="px-1">
                <a href="https://linkedin.com" target="_blank">
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </li>
              <li className="px-1">
                <a href="https://instagram.com" target="_blank">
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
        {/* for large screen  */}
        <div className="shadow sticky z-50 top-0 bg-blue-950">
          <div className="hidden sm:flex justify-between container text-white">
            <div className="py-3">
            Phone: <a href="tel:+977-9812345678">+977-9812345678</a>
            </div>
            <div>
              <ul className="flex py-3">
                <li className="px-2">
                  <a href="https://facebook.com" target="_blank">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href="https://linkedin.com" target="_blank">
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href="https://instagram.com" target="_blank">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </li>
                <li className="px-2">
                  <a href="https://x.com" target="_blank">
                    <i className="fa-brands fa-twitter"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* samll second nav  */}
      <div className="sm:hidden flex items-center justify-between p-0.5">
        <div>
          {!isOpen && (
            <Link to="/">
              <p className="text-3xl text-green-600">LOGO</p>
            </Link>
          )}
        </div>
        <div
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? <i className="fa-solid fa-xmark h-20"></i> : <Hamburger />}
        </div>
        {isOpen && (
          <div className="absolute top-24 text-center w-full">
            <ul className="flex flex-col items-center justify-center">
              <li className="border-t border-b border-blue-400 p-2 w-full">
                <Link to="/">Home</Link>
              </li>
              <li className="border-t border-b border-blue-400 p-2 w-full">
                <Link to="/about">About Us</Link>
              </li>
              <li className="border-t border-b border-blue-400 p-2 w-full">
                <Link to="/service">Our Services</Link>
              </li>
              <li className="border-t border-b border-blue-400 p-2 w-full">
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* large second  nav*/}
      <div className="hidden sm:flex justify-between container items-center font-medium">
        <div className="my-3">
          <Link to="/">
          <p className="text-3xl text-green-600">LOGO</p>
          </Link>
        </div>
        <div>
          <ul className="flex gap-4 text-lg">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/service">Our Services</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
