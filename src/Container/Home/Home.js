import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "../../api/firebase";
import { setUser } from "../../features/userSlice";

import ServerSidebar from "../../Components/ServerSidebar/ServerSidebar";

import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);
  useEffect(() => {
    dispatch(
      setUser({
        userId: user?.uid,
        userEmail: user?.email,
      })
    );
  }, [user, dispatch]);
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
