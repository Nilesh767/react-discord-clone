import React from "react";
import ServerSidebar from "../../Components/ServerSidebar/ServerSidebar";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__serverSidebar">
        <ServerSidebar />
      </div>
    </div>
  );
};

export default Home;
