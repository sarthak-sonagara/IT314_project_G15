import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import TimelineCard from "../components/TimelineCard";

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
    <div>
      <Navbar />

      <div id="carouselExampleCaptions" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="http://www.gettyimages.com/detail/1166085754" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      <section 
        style={{ 
          backgroundColor: "#F0F2F5;"
        }}>
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

      <div className="container" style={{ marginTop: "1rem" }}>
        <div
          className="p-4 p-md-2 mb-4 rounded"
          style={{
            backgroundColor: "#0078cc",
          }}
        >
          <div className="col-md-6 px-0">
            <h3 className="display-4 fst-italic">Organization</h3>
            <p className="lead my-3">
              Every organization and their conference details.
            </p>
          </div>
        </div>

        <div className="row mb-2">
          {orgs.map((org) => {
            return (
              <div className="col-md-4" key={org._id}>
                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                  <div className="col p-4 d-flex flex-column position-static">
                    <strong className="d-inline-block mb-2 text-success">
                      Organization
                    </strong>
                    <h3 className="mb-2">{org.orgname}</h3>
                    <Link 
                      to={{
                        pathname: "/home-conf",
                        state: org
                      }}>
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
