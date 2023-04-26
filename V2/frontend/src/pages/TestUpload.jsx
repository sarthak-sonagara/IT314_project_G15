import React, { useState } from "react";

const TestUpload = () => {
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("file", file);
    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="file" name="file" id="file" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default TestUpload;
