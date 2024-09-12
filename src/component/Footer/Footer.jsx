import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fb from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import google from "../../assets/icons/google.svg";
import instagram from "../../assets/icons/instagram.svg";
import lnkedin from "../../assets/icons/lnkedin.svg";
import rss from "../../assets/icons/rss.svg";

import "./Footer.css";

function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // Adjust the threshold as needed
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Contact Us</h3>
                {/* <hr style={{ backgroundColor: 'white' ,height:'3px'}}></hr> */}
                <p>Plot No 55, Loha Mandi, BSR Industrial Roa, Ghaziabad UP 201001</p>
                <p>Telephone: +91 99715 62000, +91 98189 27444</p>
                <p>E-mail: info.shreemsteelco@gmail.com</p>
       
            </div>

            {isVisible && (
                <span className="scroll-to-top" onClick={scrollToTop}>
                    <i className="arrow-up"></i>
                </span>
            )}

            <div className="footer-section">
                <h3>Quick Links</h3>
                <ul>
                    {/* Updated Links with specific routes */}
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About us</Link>
                    </li>
                    <li>
                        <Link to="/categoris">Products</Link>
                    </li>
                    <li>
                        <Link to="/contactus">Contact us</Link>
                    </li>
                </ul>
            </div>

            {/* <div className="footer-section">
                <h3>Information</h3>
                <ul>
                    <li>
                        <Link to="/clients">Clients</Link>
                    </li>
                    <li>
                        <Link to="/partners">Partners</Link>
                    </li>
                    <li>
                        <Link to="/reseller">Reseller</Link>
                    </li>
                    <li>
                        <Link to="/support">Support</Link>
                    </li>
                </ul>
            </div> */}

            <div className="footer-section">
                <h3>Follow Us</h3>
                <ul className="social-links">
                    <li><Link to="#"><img src={fb} alt="Facebook" /> Facebook</Link></li>
                    {/* <li><Link to="#"><img src={twitter} alt="Twitter" /> Twitter</Link></li> */}
                     <li><Link to="#"><img src={lnkedin} alt="LinkedIn" /> LinkedIn</Link></li>
                    {/* <li><Link to="#"><img src={google} alt="Google+" /> Google+</Link></li> */} 
                    <li><Link to="#"><img src={instagram} alt="Instagram" /> Instagram</Link></li>
                    {/* <li><Link to="#"><img src={rss} alt="RSS" /> Rss</Link></li> */}
                </ul>
            </div>

            {/* Optional Instagram section */}
            {/* <div className="footer-section">
                <h3>Instagram</h3>
                <div className="instagram-grid">
                    {[1, 2, 3, 4, 5, 6].map((_, index) => (
                        <img key={index} src="asset/food-table.jpg" alt="Instagram photo" />
                    ))}
                </div>
            </div> */}

            {/* Optional copyright section */}
            {/* <div className="copyright-bar">
                Copyright © 2020. All Rights Reserved by Coders Gyan
            </div> */}
        </footer>
    );
}

export default Footer;
