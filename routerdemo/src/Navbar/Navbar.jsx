import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
export const Navbar = () => {
  return (
    <div>
      <div className="navconatiner">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand" to="/">
            Navbar
          </span>
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
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" >
              <li class="nav-item">
                <NavLink className="nav-link" to="/home">
                  Home
                </NavLink>
              </li>
              
              <li class="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Conatct
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/gallery">
                  Gallery
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link" to="/studentdata">
                  Student
                </NavLink>
              </li>
            </ul>
            <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
          </div>
        </div>
      </nav>
      </div>
    </div>
  );
};
