import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../components/Navbar";
import "../assets/CSS/privacy.css";
const Privacy = () => {
  return (
    <>
      <Navbar />
      <div
        className="container privacy-container shadow"
        style={{
          marginTop: "2em",
          overflow: "auto",
        }}
      >
        <div className="row">
          <div
            className="col-md-8 offset-md-2"
            style={{
              marginTop: "60px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              <h1>Privacy Policy</h1>
              <div
                style={{
                  backgroundColor: "black",
                }}
              >
                <hr />
              </div>
            </div>
            &nbsp;
            <p
              style={{
                textAlign: "justify",
                color: "#707275",
              }}
            >
              Thank you for choosing to use our web portal, the Conference
              Management System. We are committed to protecting your privacy and
              ensuring the security of your personal information. This Privacy
              Policy outlines the ways in which we collect, use, and protect
              your information when you use our platform.
            </p>
            &nbsp;
            <h3>Information We Collect</h3>
            &nbsp;
            <p
              style={{
                textAlign: "justify",
                color: "#707275",
              }}
            >
              When you use our Conference Management System, we may collect
              personal information such as your name, email address, contact
              information, and other information that you voluntarily provide to
              us. We may also collect information about your use of our
              platform, including your IP address, browser type, and device
              information.
            </p>
            &nbsp;
            <h3>How We Use Your Information</h3>
            &nbsp;
            <p
              style={{
                textAlign: "justify",
                color: "#707275",
              }}
            >
              We use your personal information to provide you with the services
              you have requested, such as registering for conferences,
              publishing papers, or managing conferences. We may also use your
              information to improve our services, to communicate with you about
              our platform, and to send you relevant information about upcoming
              conferences and events.
            </p>
            &nbsp;
            <p
              style={{
                textAlign: "justify",
                color: "#707275",
              }}
            >
              We may share your personal information with third-party service
              providers who help us to provide our services, such as email
              service providers. We will only share your information with these
              providers to the extent necessary to provide our services, and we
              will require them to protect your information in accordance with
              this Privacy Policy.
            </p>
            &nbsp;
            <p
              style={{
                textAlign: "justify",
                color: "#707275",
              }}
            >
              We may also disclose your personal information if required by law
              or if we believe that such disclosure is necessary to protect our
              rights or the rights of others, to prevent fraud or other illegal
              activities, or to comply with a court order or other legal
              process.
            </p>
            &nbsp;
            <h3>Your Rights</h3>
            &nbsp;
            <p
              style={{
                textAlign: "justify",
                color: "#707275",
              }}
            >
              You have the right to access, update, or delete your personal
              information at any time by logging into your account and updating
              your profile information. If you have any questions or concerns
              about our use of your personal information, you may contact us at
              [contact email].
            </p>
            &nbsp;
            <h3>Security</h3>
            &nbsp;
            <p
              style={{
                textAlign: "justify",
                color: "#707275",
              }}
            >
              We take the security of your personal information seriously and
              have implemented reasonable measures to protect your information
              from unauthorized access, use, or disclosure. However, no system
              is completely secure, and we cannot guarantee the security of your
              information.
            </p>
            &nbsp;
            <h3>Children’s Privacy</h3>
            &nbsp;
            <p
              style={{
                textAlign: "justify",
                color: "#707275",
              }}
            >
              Our Conference Management System is not intended for use by
              children under the age of 13. We do not knowingly collect personal
              information from children under the age of 13, and if we become
              aware that we have inadvertently collected such information, we
              will delete it as soon as possible.
            </p>
            &nbsp;
            <h3>Changes to this Privacy Policy</h3>
            &nbsp;
            <p
              style={{
                textAlign: "justify",
                color: "#707275",
              }}
            >
              We may update this Privacy Policy from time to time to reflect
              changes in our services or applicable laws. We will notify you of
              any material changes to this Privacy Policy by posting the updated
              policy on our website or by sending you an email notification.
            </p>
            &nbsp;
            <h3>Contact Us</h3>
            &nbsp;
            <p
              style={{
                textAlign: "justify",
                color: "#707275",
              }}
            >
              If you have any questions or concerns about this Privacy Policy,
              please contact us at{" "}
              <font color="black">conference_management@gmail.com</font>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Privacy;
