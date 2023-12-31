import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">6 Months</span>
      </div>
      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">20+ Projects</span>
      </div>
      <div className="about__box">
        <i className="bx bx-desktop about__icon"></i>
        <h3 className="about__title">Employement Status</h3>
        <span className="about__subtitle">Seeking</span>
      </div>
    </div>
  );
};

export default Info;
