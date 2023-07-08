import React from 'react';
import "./Footer.css";

function Footer() {
  return (
    <div className='Footer'>
        <footer>
            <div className="footer-top">
                <div>
                    <a href="#" className="footer-logo">Property</a>
                    <p className="footer-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas exercitationem ad nobis dignissimos nisi?</p>
                </div>
                <div className='footer-uls'>
                    <div>
                        <p className="footer-head">About</p>
                        <ul className='footer-links'>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">News & Blog</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="footer-head">Company</p>
                        <ul className='footer-links'>
                            <li><a href="#">How We Work?</a></li>
                            <li><a href="#">Capital</a></li>
                            <li><a href="#">Security</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="footer-head">Support</p>
                        <ul className='footer-links'>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Support Center</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    <div>
                        <p className="footer-head">Follow Us</p>
                        <ul className='footer-sn'>
                            <li><a href="#"><box-icon name='facebook-circle' type='logo' color="grey"></box-icon></a></li>
                            <li><a href="#"><box-icon name='instagram-alt' type='logo' color="grey"></box-icon></a></li>
                            <li><a href="#"><box-icon name='pinterest' type='logo' color="grey"></box-icon></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p className='copyright'>© 2023 Property</p>
                <div>
                    <div className="other">
                        <a href="#">Terms & Agreements</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Cookies Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer