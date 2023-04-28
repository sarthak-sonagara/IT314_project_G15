import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Papers = () => {
  const { conference } = useLocation().state;
  console.log(conference);

  return <div>Papers</div>;
};

export default Papers;
