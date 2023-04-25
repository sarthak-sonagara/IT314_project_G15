import React from "react";
// import "../assets/CSS/TimeLine.css";

const TimeLine = () => {
  return (
    <>
      <div className="row">
        <div
          className="h1 shadow-sm py-2 bg-secondary text-light text-center"
          style={{
            fontFamily:
              '"Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif',
          }}
        >
          Event Timeline
        </div>
      </div>
      <div className="timeline">
        <div className="card-container left">
          <div className="content shadow-lg">
            <h2>2017</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div className="card-container right">
          <div className="content shadow-lg">
            <h2>2016</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div className="card-container left">
          <div className="content shadow-lg">
            <h2>2015</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div className="card-container right">
          <div className="content shadow-lg">
            <h2>2012</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div className="card-container left">
          <div className="content shadow-lg">
            <h2>2011</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div className="card-container right">
          <div className="content shadow-lg">
            <h2>2007</h2>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
      </div>
      <footer className="row px-5 border border-2 shadow py-2">
        <div className="left-footer col-12 col-md-6 d-flex align-items-center">
          <img
            src="./DAIICT.png"
            alt="DAIICT LOGO"
            className="bg-light rounded-circle mx-3"
          />
          <div className="h3 text-capitalize text-light">
            Dhirubhai Ambani Institute of information and Communication
            Technology
          </div>
        </div>
        <div className="right-footer col-12 col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
          <h5
            style={{
              fontSize: "small",
              color: "aliceblue",
              paddingRight: "2%",
            }}
          >
            Follow us on:{" "}
          </h5>
          <div className="socials">
            <a href="#" className="social-link mx-1">
              <i className="fab fa-facebook-f text-light border border-2 shadow-lg py-1 px-2 bg-primary rounded-3" />
            </a>
            <a href="#" className="social-link mx-1">
              <i className="fab fa-twitter text-light border border-2 shadow-lg py-1 px-2 bg-info rounded-3" />
            </a>
            <a href="#" className="social-link mx-1">
              <i className="fab fa-linkedin-in text-light border border-2 shadow-lg py-1 px-2 bg-primary rounded-3" />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default TimeLine;
