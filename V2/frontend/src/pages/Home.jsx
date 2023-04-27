import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import TimelineCard from "../components/TimelineCard";
import img from "../../public/images/conference_background_2.jpg";

const Home = () => {
  const [orgs, setOrgs] = useState([]);
  const [upcomingConf, setUpcomingConf] = useState([]);

  useEffect(() => {
    document.title = "Home";
    // get details of all organizations
    fetch("http://localhost:3000/auth/org/")
      .then((res) => res.json())
      .then((data) => {
        setOrgs(data.orgs);
      });

    // get details of all top 5 upcoming conferences
    fetch("http://localhost:3000/org/all")
      .then((res) => res.json())
      .then((data) => {
        const temp = data.conferences
          .filter((conference) => new Date(conference.startDate) >= new Date())
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
          .slice(0, 5);
        setUpcomingConf(temp);
      });
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#c4ccff",
      }}
    >
      <Navbar />

      <div
        class="carousel-inner shadow-lg"
        style={{
          height: "100vh",
        }}
      >
        <div class="carousel-item active h-100">
          <img src={img} class="d-block w-100 h-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h2>First slide label</h2>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
      </div>

      <section
        style={{
          backgroundColor: "#F0F2F5;",
        }}
      >
        <div className="container py-5">
          <div className="main-timeline-2">
            {upcomingConf.map((conf, index) => {
              return (
                <TimelineCard conference={conf} index={index} key={conf._id} />
              );
            })}
          </div>
        </div>
      </section>

      <div className="my-5">
        <div className="position-relative p-5 text-center text-muted bg-body border border-dashed ">
          <h4>Section</h4>
          <hr />
          <h1 className="text-body-emphasis">Organizations</h1>
        </div>
      </div>

      <div className="container" style={{ marginTop: "1rem" }}>
        <div className="row mb-2">
          {orgs.map((org) => {
            return (
              <div className="col-md-6 col-lg-4 col-sm-12" key={org._id}>
                <div
                  className="row g-0 border rounded-4 overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                  style={{
                    backgroundColor: "#ffffff",
                  }}
                >
                  <div className="col p-4 d-flex flex-column position-static ">
                    <strong className="d-inline-block mb-2 text-success">
                      Organization
                    </strong>
                    <h3 className="mb-2">{org.orgname}</h3>
                    <Link
                      to={{
                        pathname: "/home-conf",
                        state: org,
                      }}
                    >
                      <div className="d-grid gap-2">
                        <button className="btn btn-success" type="button">
                          More Conferences...
                        </button>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
