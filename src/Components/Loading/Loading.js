import "./Loading.css";
import discordSpinner from "../../Assets/discordSpinner.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img src={discordSpinner} alt="Discord Spinner" />
      UwU Loading ...
    </div>
  );
};

export default Loading;
