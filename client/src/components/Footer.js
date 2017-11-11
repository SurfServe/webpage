import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col span-1-of-2">
                    <ul className="footer-nav">
                    <li><a href="#">Misson</a></li>
                    <li><a href="#">Partner</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Donate</a></li>
                    </ul>
                </div>
                <div className="col span-1-of-2">
                    <ul className="social-links">
                    <li><a href="#"><i className="ion-social-facebook"></i></a></li>
                    <li><a href="#"><i className="ion-social-twitter"></i></a></li>
                    <li><a href="#"><i className="ion-social-googleplus"></i></a></li>
                    <li><a href="#"><i className="ion-social-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <p>Copyright &copy; 2017 by Surf Serve. All rights reserved </p>
            </div>
      </footer>
    );
}

export default Footer;