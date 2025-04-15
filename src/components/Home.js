import React from "react";
import { username, city } from "../data/user"; // Corrected the import path for data

function Home() {
  return (
    <div id="home">
      <h1 style={{ color: "firebrick" }}>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

export default Home;
