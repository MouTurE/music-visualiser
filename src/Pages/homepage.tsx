import { useNavigate } from "react-router-dom";
import "../App.css";
import "./homepage.css";

// Components of the page
const AppTitle = () => {
  return <div className="app-title">
    <center>
      <h1>Spotify Music Visualiser</h1>
    </center>
  </div>;
};

const InputText = () => {
  return (
    <div className="input-container">
      <div>
        <p className="input-label">Insert a valid Spotify URL</p>
        <input
          className="spotify-input"
          placeholder="https://open.spotify.com/intl-tr/track/..."
          type="text"
        />
      </div>
    </div>
  );
};

const SubmitButton = () => {
  const navigate = useNavigate();
  return (
    <div className="submit-button">
      <button  onClick={() => navigate("/visualiser")}>
        <p>Submit URL</p>
      </button>
    </div>
  );
};

// Actual page
function Homepage() {
  return (
    <div>
      <AppTitle />
      <InputText />
      <SubmitButton />
    </div>
  );
}

export default Homepage;
