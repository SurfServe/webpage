import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="row">
          <ul className="main-nav">
            <li><a href="#">Surf Camp</a></li>
            <li><a href="#">How it works</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="hero-text-box">
        <h1>Looking to hang ten? <br/> Look no more!</h1>
        <a className="btn btn-full" href="#">Donate</a>
        <a className="btn btn-ghost" href="#">Learn more</a>
      </div>
    </header>
  );
};

export default Header;
