import { useNavigate } from "react-router-dom";
import "../App.css";
import "./homepage.css";

// Components of the page
const AppTitle = () => {
  return <div className="app-title">
    <center>
      <h1>Music Visualiser</h1>
    </center>
  </div>;
};
   

const SubmitButton = () => {
  const navigate = useNavigate();
  return (
    <div className="submit-button">
      <button  onClick={() => navigate("/visualiser")}>
        <p>Go to the Editor</p>
      </button>
    </div>
  );
};

// Actual page
function Homepage() {
  return (
    <div>
      <AppTitle />
      <center>
        <p>Welcome! This a virtual environment where you can customise and link with music. Enjoy! </p>
      </center>
      <SubmitButton />
    </div>
  );
}

export default Homepage;
