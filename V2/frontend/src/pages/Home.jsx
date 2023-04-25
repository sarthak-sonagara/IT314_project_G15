import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="container" style={{marginTop: "1rem"}}>

        <div className="p-4 p-md-5 mb-4 rounded text-bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 fst-italic">Organization</h1>
            <p className="lead my-3">Every organization and their conference details.</p>
          </div>
        </div>
    
        <div className="row mb-2">
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Organization</strong>
                <h3 className="mb-0">Organization Name</h3>
                <a href="#" class="stretched-link">See every conference...</a>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Organization</strong>
                <h3 className="mb-2">Organization Name</h3>
                <Link to="/home-conf">
                  <div className="d-grid gap-2">
                    <button className="btn btn-success" type="button">More Conferences...</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Organization</strong>
                <h3 className="mb-0">Organization Name</h3>
                <a href="#" class="stretched-link">See every conference...</a>
              </div>
            </div>
          </div>       
        </div>
      </div>

    </div>
  );
};

export default Home;
