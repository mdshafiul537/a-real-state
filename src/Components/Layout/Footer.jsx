import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer text-base-content p-10 bg-gradient-to-tl from-slate-100 to-cyan-100">
      <aside>
        <span className="text-2xl">
          <i className="fa-brands fa-uikit"></i>
        </span>
        <p>
          U-Estate Group Ltd.
          <br />
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Menu</h6>
        <NavLink to={"/"} className="link link-hover">
          Home
        </NavLink>
        <NavLink to={"/properties"} className="link link-hover">
          Properties
        </NavLink>
        <NavLink to={"/contact"} className="link link-hover">
          Contact
        </NavLink>
        <NavLink to="/register" className="link link-hover">
          Register
        </NavLink>
        <NavLink to="/login" className="link link-hover">
          Login
        </NavLink>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <NavLink className="link link-hover">Terms of use</NavLink>
        <NavLink className="link link-hover">Privacy policy</NavLink>
        <NavLink className="link link-hover">Cookie policy</NavLink>
      </nav>
    </footer>
  );
};

export default Footer;
