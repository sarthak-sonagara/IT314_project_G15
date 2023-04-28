import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <footer className="text-center text-lg-start text-black">
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h4 className="text-uppercase mb-4">
                  Conference Management Site
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Corrupti, harum. A illo hic cumque. Animi, exercitationem est.
                  Ipsum, similique officia.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h5 className="text-uppercase mb-4">
                  <b>Sections</b>
                </h5>
                <p>
                  <a className="text-black" href="#">
                    Back To Top
                  </a>
                </p>
                <p>
                  <a className="text-black" href="privacy-policy">
                    Privacy Policy
                  </a>
                </p>
                {/* <p>
                    <a className="text-black" href="#organizations">Organizations</a>
                  </p> */}
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h5 className="text-uppercase mb-4 mx-3">
                  <b>Contact</b>
                </h5>
                <p>
                  <FontAwesomeIcon
                    icon={faHouse}
                    className="mx-3 text-secondary"
                  />
                  Gandhinagar, Gujarat, India
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="mx-3 text-secondary"
                  />{" "}
                  cms_info@gmail.com
                </p>
                <p>
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="mx-3 text-secondary"
                  />{" "}
                  + 279 234 567 88
                </p>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
