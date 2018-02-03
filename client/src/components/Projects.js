import React, { Component } from "react";
import Lightbox from 'react-image-lightbox';
import { Paper } from 'react-md/lib';

// STYLING
import "../styles/Projects.css";

// IMAGES
import NINOS_DE_LA_PROMES from '../assets/img/ninos-de-la-promesa.jpg';
import ADDPTIVE_SURF from '../assets/img/addaptive-surf.jpg'

// SURFSERVE IMAGES ARRAY
import { SURFSERVE_IMGAGES } from '../assets/surfserve';

// ADAPTIVE SURF IMAGES ARRAY
import { ADAPTIVE_SURF_IMAGES } from '../assets/adaptive';

class Projects extends Component {
  state = {
    photoIndex: 0,
    isOpen: false,
    images: [],
  }
  render() {
    const { photoIndex, isOpen, images } = this.state;

    const toggleOpen = (images) => {
      this.setState({ isOpen: true, images });
    }

    if (this.state.isOpen) {
      return (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => this.setState({ isOpen: false })}
          onMovePrevRequest={() =>
            this.setState({
              photoIndex: (photoIndex + images.length - 1) % images.length,
            })
          }
          onMoveNextRequest={() =>
            this.setState({
              photoIndex: (photoIndex + 1) % images.length,
            })
          }
        />
      );
    }

    return (
      <section className="projects-section">
        <div className="row">
          <h2>Making a Difference</h2>
          <p className="long-copy">
            Check out our most recent locations we've been lucky to serve.
          </p>
        </div>
        <div className="row">
          <div className="col span-1-of-2 project-box" onClick={() => toggleOpen(SURFSERVE_IMGAGES)}>
            <h3>Ninos De La Promesa</h3>
            <div className="location-photo">
              <img src={NINOS_DE_LA_PROMES} alt="Ninos de la Promesa" />
            </div>
            <p>
              Ninos de la Promesa rescues children from physical, mental, and
              sexual abuse in the homes and streets of Tijuana.
            </p>
          </div>
          <div className="col span-1-of-2 project-box" onClick={() => toggleOpen(ADAPTIVE_SURF_IMAGES)}>
            <h3>Addaptive Surf Camp</h3>
            <div className="location-photo">
              <img src={ADDPTIVE_SURF} alt="Addaptive surf" />
            </div>
            <p>
              Ninos de la Promesa rescues children from physical, mental, and
              sexual abuse in the homes and streets of Tijuana.
            </p>
          </div>
        </div>
      </section>
    );
  }
};

export default Projects;
