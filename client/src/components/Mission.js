import React from "react";
import MissionData from "../data/mission";

const Mission = () => {
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
    <section className="mission-section">
      <div className="row">
        <h2>HOW IT WORKS</h2>
        <p className="long-copy">
          Lorem ipsum dolor sit amet, vivamus imperdiet eu, duis lobortis. Ut
          suspendisse nec in sit aliquam. Urna a lorem sit libero venenatis. Sed
          sit felis nascetur morbi pretium amet.
        </p>
      </div>
      <div className="row">{missionStatements}</div>
    </section>
  );
};

export default Mission;
