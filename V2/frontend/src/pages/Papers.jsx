import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";

const Papers = () => {
  const { conference } = useLocation().state;
  const [downloads, setDownloads] = useState([]);
  console.log(conference.papers[0].filename);

  useEffect(() => {
    conference.papers.map((paper) => {
      fetch("http://localhost:3000/files/" + paper.fileUrl)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setDownloads((prev) => [...prev, data.downloadUrl]);
        })
        .catch((err) => console.log(err));
    });

    console.log(downloads);
  }, [conference]);

  return (
    <>
      {!downloads || downloads.length === 0 ? (
        <h1>No papers submitted yet</h1>
      ) : (
        <div className="container">
          <h2 className="text-center text-primary">Papers submitted</h2>

          <table className="table">
            <thead>
              <tr>
                <th scope="col">Paper Name</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {downloads.map((paper, index) => (
                <tr key={paper.fileUrl}>
                  <td>Paper {index}</td>
                  <td>
                    <a href={paper.downloadUrl} target="_blank">
                      <button className="btn btn-primary">Download</button>
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Papers;
