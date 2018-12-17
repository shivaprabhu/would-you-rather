import React from "react";
import { Link } from "react-router-dom";
function PageNotFound(props) {
  return (
    <div style={{ textAlign: "center",marginTop:"15vh" }}>
      <h2>Oops! The page you're looking for doesn't exist</h2>
      <Link to="/home">Take me home!</Link>
    </div>
  );
}

export default PageNotFound;
