import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            Dashboard
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/overview">
                  Overview
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More..
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Training Plan
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Session Tasks
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-divider"></a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      CPD / OTJ Log
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Matrix
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Messages
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Apprentice Details
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              ></input>
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
