import React, { Component } from "react";
import "../styles/Partner.css";
import Slider from "react-slick";
import PatagoniaLogo from "../assets/img/patagonia.png";
import StanceLogo from "../assets/img/stance.png";
import DoyleLogo from "../assets/img/doyle.png";

class Partner extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      cssEase: "linear",
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: false
    };
    return (
      <section className="partner-section">
        <div className="row">
          <h2>Thank You</h2>
          <p className="long-copy">
            We are lucky to work with the following partners!
          </p>
        </div>
        <div className="row">
          <Slider {...settings}>
            <div>
              <img src={PatagoniaLogo} alt="Patagonia logo" />
            </div>
            <div>
              <img src={DoyleLogo} alt="Doyle logo" />
            </div>
            <div>
              <img src={StanceLogo} alt="Stance logo" />
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}

export default Partner;
