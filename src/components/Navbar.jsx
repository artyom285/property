import React from 'react';
import { useState } from 'react';
import "./Navbar.css";

function Navbar({ side }) {
  const [navbar, setNavbar] = useState(false);

  const navbarActive = () => {
    if(window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", navbarActive);

  return (
    <div className={navbar ? "Navbar active" : "Navbar"}>
        <a href="#" className="logo">Property</a>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#residences">Residences</a></li>
            <li><a href="#values">Values</a></li>
            <li><a href="#contact">Contact Us</a></li>
        </ul>
        <div className="nav-icons">
          <i><box-icon name='user-circle' color="white"></box-icon></i>
          <i><box-icon name='bookmarks' color="white"></box-icon></i>
          <i><box-icon name='compass' color="white"></box-icon></i>
          <i><box-icon type='solid' name='map' color="white"></box-icon></i>
          <i onClick={side}><box-icon name='menu' color="white"></box-icon></i>
        </div>
    </div>
  )
}

export default Navbar