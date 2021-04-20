import React from "react";
import { Link } from "react-router-dom";
export const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/">
          <a className="navbar-brand" href="#!">
            <img
              src="https://cdn2.iconfinder.com/data/icons/ballicons-2-vol-2/100/guitar-512.png"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="logoBrand"
            />
            <span className="px-3">Musical Hendrix</span>
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/home">
                <a className="nav-link" href="#!">
                  Home <span className="sr-only">(current)</span>
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/where-we-are">
                <a className="nav-link" href="#!">
                  Donde Estamos?
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link" href="#!">
                  Productos
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
