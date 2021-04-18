import { useCollection } from "react-firebase-hooks/firestore";

import { db } from "../../api/firebase";

import ServerSidebarOption from "./ServerSidebarOption/ServerSidebarOption";
import HomeServerOption from "./HomeServerOption/HomeServerOption";

import "./ServerSidebar.css";
import { useHistory } from "react-router";

const ServerSidebar = () => {
  const history = useHistory();
  const [server] = useCollection(db.collection("server"));
  return (
    <div className="serverSidebar">
      <div className="homeServer">
        <HomeServerOption onClick={() => history.push("/home")} />
      </div>
      <div className="userServers">
        {server?.docs.map((docs) => (
          <ServerSidebarOption
            key={docs.id}
            id={docs.id}
            title={docs.data().name}
          />
        ))}
        <hr />
        <ServerSidebarOption title="Add Channel" addServerOption />
      </div>
    </div>
  );
};

export default ServerSidebar;
