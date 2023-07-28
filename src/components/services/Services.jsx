import React from "react";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">What i offer</span>

      <div className="servies__container container grid">
        <div className="services_content">
          <div>
            <i className="uil uil services__icon"></i>
            <h3 className="services__title"></h3>
          </div>
          <span className="services__button">
            {" "}
            View More{" "}
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div className="services__modal">
            <div className="services__modal-content"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
