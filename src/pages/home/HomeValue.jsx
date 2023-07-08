import React, { useState } from 'react';
import "./HomeValue.css";

function HomeValue() {
    const [drop1, setDrop] = useState(false);
    const [drop2, setDrop2] = useState(false);
    const [drop3, setDrop3] = useState(false);
    const [drop4, setDrop4] = useState(false);

    const dropFunc = () => setDrop(!drop1);
    const dropFunc2 = () => setDrop2(!drop2);
    const dropFunc3 = () => setDrop3(!drop3);
    const dropFunc4 = () => setDrop4(!drop4);

  return (
    <div className='HomeValue' id='values'>
        <div className="img-vert" data-aos="fade-right">
            <img src="/home2.jpg" alt="value" />
            <div className="pick-data">
                <p className="pick-title">Gables Luxurios House</p>
                <div className="pick-price">
                    <p className="sale">-10%</p>
                    <p className="old">$35.159</p>
                    <p className="new">$31.643</p>
                </div>
            </div>
        </div>
        <div className="value-text" data-aos="fade-left">
            <p className="v-head">Values We Bring To <br />Our Customers</p>
            <p className="v-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti vel repellendus molestias consequuntur non, autem minima repudiandae ducimus harum iste placeat hic nulla odio excepturi ratione facere beatae libero vero!</p>
            <div className="v-list">
                <div className="value" onClick={dropFunc}>
                    <div className='value1'>
                        <i className='icon-i'><box-icon type='solid' name='trophy' size="26px" color="blue"></box-icon></i>
                        <span>Best interests rate on the market</span>
                        <i className='drop-i'><box-icon type='solid' name='down-arrow-circle' color="blue" size="20px"></box-icon></i>
                    </div>
                    <p className={drop1 ? "drop-text active" : "drop-text"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit pariatur, ducimus veniam rerum magni accusantium possimus illo, quo atque reiciendis nemo.</p>
                </div>
                <div className="value" onClick={dropFunc2}>
                    <div className="value1">
                        <i className='icon-i'><box-icon type='solid' name='x-square' size="26px" color="blue"></box-icon></i>
                        <span>Prevent unstable prices</span>
                        <i className='drop-i'><box-icon type='solid' name='down-arrow-circle' color="blue" size="20px"></box-icon></i>
                    </div>
                    <p className={drop2 ? "drop-text active" : "drop-text"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit pariatur, ducimus veniam rerum magni accusantium possimus illo, quo atque reiciendis nemo.</p>
                </div>
                <div className="value" onClick={dropFunc3}>
                    <div className="value1">
                        <i className='icon-i'><box-icon type='solid' name='bar-chart-square' size="26px" color="blue"></box-icon></i>
                        <span>Best prices on the market</span>
                        <i className='drop-i'><box-icon type='solid' name='down-arrow-circle' color="blue" size="20px"></box-icon></i>
                    </div>
                    <p className={drop3 ? "drop-text active" : "drop-text"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit pariatur, ducimus veniam rerum magni accusantium possimus illo, quo atque reiciendis nemo.</p>
                </div>
                <div className="value" onClick={dropFunc4}>
                    <div className="value1">
                        <i className='icon-i'><box-icon type='solid' name='check-circle' size="26px" color="blue"></box-icon></i>
                        <span>Security of your data</span>
                        <i className='drop-i'><box-icon type='solid' name='down-arrow-circle' color="blue" size="20px"></box-icon></i>
                    </div>
                    <p className={drop4 ? "drop-text active" : "drop-text"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit pariatur, ducimus veniam rerum magni accusantium possimus illo, quo atque reiciendis nemo.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeValue