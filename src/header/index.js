import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <nav className="glass-nav">
          <Link className="navbar-brand glass-brand" to="/">
            {logotext}
          </Link>

          <div className="glass-links">
            <NavLink to="/" end className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active" : undefined}>Portfolio</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : undefined}>About Me</NavLink>
            <NavLink to="/experience" className={({ isActive }) => isActive ? "active" : undefined}>Experience</NavLink>
          </div>

          <div className="glass-right">
            <Link to="/contact" className="glass-cta">Contact</Link>
            <Themetoggle />
            <button className="glass-hamburger" onClick={handleToggle} aria-label="Open menu">
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </nav>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <Link  onClick={handleToggle} to="/" className="my-3">Home</Link>
                  </li>
                  <li className="menu_item">
                    <Link  onClick={handleToggle} to="/portfolio" className="my-3"> Portfolio</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/about" className="my-3">About Me</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/experience" className="my-3">Experience</Link>
                  </li>
                  <li className="menu_item">
                  <Link onClick={handleToggle} to="/contact" className="my-3"> Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
            <a href={socialprofils.linkedin}>LinkedIn</a>
            <a href={socialprofils.github}>Github</a>
            </div>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>

    </>
  );
};

export default Headermain;
