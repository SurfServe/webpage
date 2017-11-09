import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header>
      <nav>
        <div className="row">
          <ul className="main-nav">
            <li><a href="#">Mission</a></li>
            <li><a href="#">Partner</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="hero-text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Surf Serve</span>
          <span className="heading-primary-sub">Surfing one life at a time</span>
        </h1>
        <a className="btn btn-full" href="#">Donate</a>
        <a className="btn btn-ghost" href="#">Learn more</a>
      </div>
    </header>
  );
};

export default Header;
