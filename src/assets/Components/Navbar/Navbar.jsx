import React, { useEffect, useState } from "react";
import { Link ,NavLink } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg primary-bg fixed-top ${
        scrolled ? "py-2 scrolled-navbar" : "py-4"}`} >
      <div className="container">
        <Link className="navbar-brand text-uppercase text-white fw-700 fs-32 line-h-48"to="/startFramework" > start frameWork
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase text-white fs-16 fw-700 px-3"
                to="about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase text-white fs-16 fw-700 px-3"
                to="portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link text-uppercase text-white fs-16 fw-700 px-3"
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
