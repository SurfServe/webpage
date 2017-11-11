import React from 'react';
import '../styles/Projects.css';

const Projects = () => {
    return (
        <section className="projects-section">
            <div className="row">
                <h2>Projects</h2>
                <p className="long-copy">Check out our most recent projects</p>
            </div>
            <div className="row">
                <div className="col span-1-of-2 box">
                    <h3>Ninos De La Promesa</h3>
                    <p>Ninos de la Promesa rescues children from physical, mental, and sexual abuse in the homes and streets of Tijuana. They serve particularly children found in the red light district of downtown Tijuana. They have have a loving and warm home for 50 children who receive all they need to live and go to school all the way through university. They also help them to help others.</p>
                </div>
                <div className="col span-1-of-2 box">
                    <h3>Addaptive Surf Camp</h3>
                </div>
            </div>
        </section>
    );
}

export default Projects;