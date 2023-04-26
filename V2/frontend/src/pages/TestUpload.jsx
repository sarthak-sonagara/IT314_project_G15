import React, { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

const TestUpload = () => {
  const { user } = useAuthContext();
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    fetch(
      "http://localhost:3000/upload?email=" +
        user.user.email +
        "&confid=" +
        "64452811cbf9eb7a940b1439",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  const test = () => {
    fetch("http://localhost:3000/files")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="file" name="file" id="file" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>

      <button onClick={test}>test</button>
    </>
  );
};

export default TestUpload;
