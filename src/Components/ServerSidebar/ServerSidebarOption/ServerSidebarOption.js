import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { db } from "../../../api/firebase";
import { enterServer } from "../../../features/appSlice";

import discordSpinner from "../../../Assets/discordSpinner.gif";

import AddIcon from "@material-ui/icons/Add";
import "./ServerSidebarOption.css";
import { selectUser } from "../../../features/userSlice";

const ServerSidebarOption = ({ title, addServerOption, id }) => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const addServer = () => {
    const serverName = prompt("Please enter the server name");
    if (serverName) {
      db.collection("user").doc(user?.uid).collection("server").add({
        name: serverName,
      });
    }
  };

  const selectServer = () => {
    if (id) {
      dispatch(
        enterServer({
          serverId: id,
        })
      );
    }
  };

  return (
    <div onClick={addServerOption ? addServer : selectServer}>
      {!addServerOption ? (
        <div className="serverName">
          <img
            src={
              `https://ui-avatars.com/api/?name=${title}&size=50&font-size=0.5&rounded=true&background=2c2f33&color=fff&format=svg` ||
              discordSpinner
            }
            alt="UwU"
          />
        </div>
      ) : (
        <div className="addServer">
          <AddIcon />
        </div>
      )}
    </div>
  );
};

export default ServerSidebarOption;
