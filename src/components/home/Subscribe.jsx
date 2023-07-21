import React from 'react';
import "./Subscribe.css";

function Subscribe() {
  return (
    <div className='Subscribe' data-aos="fade-down">
        <center><p className="subsc-head">Get Started With Property</p></center>
        <center><p className="subsc-desc">Subscribe and find super attractive price quotes <br />from us. Find your property soon.</p></center>
        <center>
            <a href="#" className="subsc-link">
                <box-icon name='news' color="white"></box-icon>   
                <span>Get Started</span>
            </a>
        </center>
    </div>
  )
}

export default Subscribe