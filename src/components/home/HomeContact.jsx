import React from 'react';
import "./HomeContact.css";

function HomeContact() {
  return (
    <div className='HomeContact' id='contact'>
        <div className="contact-text" data-aos="fade-right">
            <p className="v-head">Just Contact Us For <br />Any Matters</p>
            <p className="v-desc">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem architecto minima suscipit laborum et quaerat beatae quo, nesciunt quibusdam, harum ducimus, vel porro laboriosam odio fugit. In quis corrupti eum?</p>
            <div className="contact">
                <div className="c-block">
                    <div className="c-block-flex">
                        <i><box-icon type='solid' name='phone-call' size="26px" color="blue"></box-icon></i>
                        <div>
                            <p>Call</p>
                            <p>0147149247</p>
                        </div>
                    </div>
                    <a href="#">Call now</a>
                </div>
                <div className="c-block">
                    <div className="c-block-flex">
                        <i><box-icon type='solid' name='comment-detail' size="26px" color="blue"></box-icon></i>
                        <div>
                            <p>Chat</p>
                            <p>0147149247</p>
                        </div>
                    </div>
                    <a href="#">Chat now</a>
                </div>
                <div className="c-block">
                    <div className="c-block-flex">
                        <i><box-icon type='solid' name='video' size="26px" color="blue"></box-icon></i>
                        <div>
                            <p>Video Call</p>
                            <p>0147149247</p>
                        </div>
                    </div>
                    <a href="#">Video call now</a>
                </div>
                <div className="c-block">
                    <div className="c-block-flex">
                        <i><box-icon type='solid' name='envelope' size="26px" color="blue"></box-icon></i>
                        <div>
                            <p>Message</p>
                            <p>0147149247</p>
                        </div>
                    </div>
                    <a href="#">Message now</a>
                </div>
            </div>
        </div>
        <div className="img-vert" data-aos="fade-left">
            <img src="https://images.unsplash.com/photo-1579980194762-5b92570f60cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt="value" />
            <div className="pick-data">
                <p className="pick-title">Gables Luxurios House</p>
                <div className="pick-price">
                    <p className="sale">-10%</p>
                    <p className="old">$35.159</p>
                    <p className="new">$31.643</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeContact