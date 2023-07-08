import React from 'react';
import "./Sidebar.css";
import "../queries.css";

function Sidebar({ effect, side }) {
  return (
    <div className='Sidebar'>
      <div className={effect ? "menu active" : "menu"}>
        <ul>
          <li className='close'>
            <i onClick={side}><box-icon name='x-circle' color="white"></box-icon></i>
          </li>
          <li>
            <a href="#" onClick={side}>
              <box-icon name='grid-alt' color="white"></box-icon>
              <span>Home</span>
            </a>
            <a href="#residences" onClick={side}>
              <box-icon name='building-house' color="white"></box-icon>
              <span>Residences</span>
            </a>
            <a href="#values" onClick={side}>
              <box-icon name='bolt-circle' color="white"></box-icon>
              <span>Values</span>
            </a>
            <a href="#contact" onClick={side}>
              <box-icon name='phone' color="white"></box-icon>
              <span>Contact Us</span>
            </a>
            <a href="#" onClick={side}>
              <box-icon name='user-circle' color="white"></box-icon>
              <span>Account</span>
            </a>
            <a href="#residences" onClick={side}>
              <box-icon name='bookmarks' color="white"></box-icon>
              <span>Bookmarks</span>
            </a>
            <a href="#value" onClick={side}>
              <box-icon name='compass' color="white"></box-icon>
              <span>Search</span>
            </a>
            <a href="#contact" onClick={side}>
              <box-icon name='map' type="solid" color="white"></box-icon>
              <span>Locations</span>
            </a>
          </li>
        </ul>
      </div>
        <div className={effect ? "before active" : "before"} onClick={side}></div>
    </div>
  )
}

export default Sidebar