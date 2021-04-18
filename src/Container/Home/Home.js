import React from "react";

import { auth } from "../../api/firebase";

import ServerSidebar from "../../Components/ServerSidebar/ServerSidebar";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home__serverSidebar">
        <ServerSidebar />
      </div>
      <ExitToAppIcon onClick={() => auth.signOut()} />
    </div>
  );
};

export default Home;
