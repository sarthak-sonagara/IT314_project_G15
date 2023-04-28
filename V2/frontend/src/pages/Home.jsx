import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import TimelineCard from "../components/TimelineCard";
import img from "../../public/images/conference_background_2.jpg";
import Footer from "../components/Footer";

const Home = () => {
  const [orgs, setOrgs] = useState([]);
  const [upcomingConf, setUpcomingConf] = useState([]);
  console.log(import.meta.env.MODE);
  useEffect(() => {
    document.title = "Home";
    // get details of all organizations

    let url = import.meta.env.DEV
      ? "http://localhost:3000/auth/org/"
      : "https://conf-backend.onrender.com/auth/org/";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setOrgs(data.orgs);
      });

    // get details of all top 5 upcoming conferences
    url = import.meta.env.DEV
      ? "http://localhost:3000/org/all"
      : "https://conf-backend.onrender.com/org/all";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const temp = data.conferences
          .filter((conference) => new Date(conference.startDate) >= new Date())
          .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
          .slice(0, 5);
        setUpcomingConf(temp);
      });

    console.log(upcomingConf);
  }, []);

  return (
    <div>
      <Navbar />

      <div
        className="main"
        style={{
          backgroundColor: "#caecff",
        }}
      >
        <div
          class="carousel-inner shadow-lg"
          style={{
            height: "70vh",
          }}
        >
          <div class="carousel-item active h-100">
            <img src={img} class="d-block w-100 h-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h2>Conference Management Website</h2>
              {/* <p>Welcome to </p> */}
            </div>
          </div>
        </div>

        <div className="my-5 mt-0" id="upcoming_conference">
          <div className="position-relative p-5 text-center text-muted bg-body border border-dashed ">
            <h1 className="text-body-emphasis">Upcoming Conferences</h1>
          </div>
        </div>

        <section>
          <div className="container py-5">
            <div className="main-timeline-2">
              {upcomingConf.map((conf, index) => {
                return (
                  <TimelineCard
                    conference={conf}
                    index={index}
                    key={conf._id}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <div className="my-5" id="organizations">
          <div className="position-relative p-5 text-center text-muted bg-body border border-dashed ">
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
        <Footer/>
    </div>
  );
};

export default Home;
