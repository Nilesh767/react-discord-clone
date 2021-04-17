import "./Loading.css";
import discordSpinner from "../../Assets/discordSpinner.gif";

const Loading = () => {
  return (
    <div className="loading">
      <img src={discordSpinner} alt="Discord Spinner" />
      <i>UwU Loading ...</i>
    </div>
  );
};

export default Loading;
