import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            Dashboard
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/overview">
                  Overview
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/more"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More..
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/training-plan">
                      Training Plan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/session-tasks">
                      Session Tasks
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/cpd-otj-log">
                      CPD / OTJ Log
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/matrix">
                      Matrix
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/messages">
                      Messages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/apprentice-details">
                      Apprentice Details
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
