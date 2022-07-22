
import React from 'react';
import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";

const NavBar=()=>{
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <div className="navbar-brand"><Link to="/">Sal.TECH</Link></div>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link active" ><Link to="/category/pc">PC</Link></div>
            </li>
            <li className="nav-item">
              <div className="nav-link active" ><Link to="/category/ps4">PLAY STATION</Link></div>
            </li>
            <li className="nav-item">
              <div className="nav-link active" ><Link to="/category/pc">Nosotros</Link></div>
            </li>
            <li className="nav-item ">
            </li>
          </ul>
          <span className="navbar-text">
              <CartWidget></CartWidget>          </span>
        </div>
      </div>
    </nav>
              
          );  }

export default NavBar;