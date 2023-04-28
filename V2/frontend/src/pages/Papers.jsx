import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Papers = () => {
  const { conference } = useLocation().state;
  const [downloads, setDownloads] = useState([]);
  let url = "";

  const handleDownload = (event, url) => {
    event.preventDefault();
    window.open(url, "_blank");
  };

  useEffect(() => {
    conference.papers.map((paper) => {
      url = import.meta.env.DEV
        ? "http://localhost:3000/files/" + paper.fileUrl
        : "https://conf-backend.onrender.com/files/" + paper.fileUrl;
        
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          setDownloads((prev) => [...prev, data.downloadUrl]);
        })
        .catch((err) => console.log(err));
    });
    console.log(conference.papers);
    console.log(downloads);
  }, [conference]);

  return (
    <>
      <Navbar />
      {conference && conference.papers.length ? (
        <div className="container" style={{ minHeight: "60vh" }}>
          <h2
            className="text-center text-primary "
            style={{ marginTop: "3em" }}
          >
            Papers submitted
          </h2>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Paper Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {conference.papers.map((paper, index) => (
                <tr key={paper.fileUrl}>
                  <td>{paper.filename}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={(e) => handleDownload(e, downloads[index])}
                    >
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1
          className="text-center text-danger"
          style={{ marginTop: "3em", minHeight: "70vh" }}
        >
          No papers submitted yet
        </h1>
      )}
      <Footer />
    </>
  );
};

export default Papers;
