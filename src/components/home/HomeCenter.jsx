import React from 'react';
import "./HomeCenter.css";
import "boxicons";

function HomeCenter() {
  return (
    <div className='HomeCenter'>
        <div>
            <p className="heading">Discover <br />Most Suitable <br />Property</p>
            <p className="desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus eius nam, quibusdam nisi dolor at ratione.</p>
            <div className="search">
                <box-icon name='map' type='solid' color='blue' size="27px" ></box-icon>
                <input type="text" placeholder='Search by location...' />
                <button>
                    <box-icon name='compass' color="white"></box-icon>
                    <span>Search</span>
                </button>
            </div>
            <div className="stats">
                <div className="stat">
                    <p>9K <span>+</span></p>
                    <p>Premium <br />products</p>
                </div>
                <div className="stat">
                    <p>2K <span>+</span></p>
                    <p>Happy <br />customers</p>
                </div>
                <div className="stat">
                    <p>28K <span>+</span></p>
                    <p>Awards <br />winning</p>
                </div>
            </div>
        </div>
        <div className="home-img">
            <img src="/home.jpg" alt="home" />
        </div>
    </div>
  )
}

export default HomeCenter