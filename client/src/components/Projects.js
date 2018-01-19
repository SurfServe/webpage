import React from "react";
import "../styles/Projects.css";

// IMAGES
import NINOS_DE_LA_PROMES from '../assets/img/ninos-de-la-promesa.jpg';
import ADDPTIVE_SURF from '../assets/img/addaptive-surf.jpg'

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="row">
        <h2>Making a Difference</h2>
        <p className="long-copy">
          Check out our most recent locations we've been lucky to serve.
        </p>
      </div>
      <div className="row">
        <div className="col span-1-of-2 project-box">
          <h3>Ninos De La Promesa</h3>
          <div className="location-photo">
            <img src={NINOS_DE_LA_PROMES} alt="Ninos de la Promesa" />
          </div>
          {/* <p>
            Ninos de la Promesa rescues children from physical, mental, and
            sexual abuse in the homes and streets of Tijuana. They serve
            particularly children found in the red light district of downtown
            Tijuana. They have have a loving and warm home for 50 children who
            receive all they need to live and go to school all the way through
            university. They also help them to help others.
          </p> */}
          <div className="gallery-btn">View Gallery</div>
        </div>
        <div className="col span-1-of-2 project-box">
          <h3>Addaptive Surf Camp</h3>
          <div className="location-photo">
            <img src={ADDPTIVE_SURF} alt="Addaptive surf" />
          </div>
          {/* <p>
            Ninos de la Promesa rescues children from physical, mental, and
            sexual abuse in the homes and streets of Tijuana. They serve
            particularly children found in the red light district of downtown
            Tijuana. They have have a loving and warm home for 50 children who
            receive all they need to live and go to school all the way through
            university. They also help them to help others.
          </p> */}
          <div className="gallery-btn">View Gallery</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
