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

<<<<<<< HEAD
      <section 
        style={{ 
          backgroundColor: "#F0F2F5" 
        }}>
        <div className="container py-5">
          <div className="main-timeline-2">
          {upcomingConf.map((conf, index)  => {
            return(
              <TimelineCard conference={conf} index = {index}/>
            )
          })}
          </div>
=======
      <div className="container" style={{marginTop: "70px"}}>
        <div className="timeline">
          {upcomingConf.map((conf, index) => {
            return (
              <TimelineCard conference={conf} index={index} key={conf._id} />
            );
          })}
>>>>>>> 4096fc5f8d875d07c2081b1ed8e8b79f2f8a430f
        </div>
      </section>

      <div className="container" style={{ marginTop: "1rem" }}>
        <div
          className="p-4 p-md-2 mb-4 rounded"
          style={{
            backgroundColor: "#409de9",
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
                    <Link to="/home-conf">
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
<<<<<<< HEAD
=======

        <div className="p-4 p-md-4 mb-4 rounded text-bg-dark">
          <div className="col-md-6 px-0">
            <h2 className="display-4 fst-italic">Upcoming Conference</h2>
          </div>
        </div>
>>>>>>> 4096fc5f8d875d07c2081b1ed8e8b79f2f8a430f
      </div>
    </div>
  );
};

export default Home;
