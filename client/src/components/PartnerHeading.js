import React from "react";
import "../styles/PartnerHeading.css";
import MissionData from "../data/mission";

const PartnerHeading = () => {
  const missionStatements = MissionData.map(statement => {
    return (
      <div key={statement.header} className="col span-1-of-3 box">
        <i className={statement.icon} />
        <h3>{statement.header}</h3>
        <p>{statement.paragraph}</p>
      </div>
    );
  });
  return (
    <section className="partner-heading-section">
      <div className="row">
        <h2>Partner</h2>
        <p className="long-copy">
          Lorem ipsum dolor sit amet, vivamus imperdiet eu, duis lobortis.
        </p>
        <div className="row">{missionStatements}</div>
        <div className="dontate-contact-box" >
          <a className="btn btn-full" href="#">Donate</a>
          <a className="btn btn-ghost" href="#">Contact</a>
        </div>
      </div>
    </section>
  );
};

export default PartnerHeading;
