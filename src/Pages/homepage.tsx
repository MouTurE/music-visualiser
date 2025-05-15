import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion";
import "../App.css";
import "./homepage.css";

// Components of the page
const AppTitle = () => {
     return <h1>Spotify Music Visualiser</h1>;
}

const InputText = () => {
    return <div>
            <p>Insert a valid Spotify URL</p>
            <input placeholder="https://open.spotify.com/intl-tr/track/..." type="text" />
        </div>;
}

const SubmitButton = () => {
    const navigate = useNavigate();
    return <button onClick={() => {navigate("/visualiser")}}>Submit URL</button>;
}


// Actual page
function homepage () {
    return <div>

        <AppTitle/>
        <InputText/>  
        <br/>
        <SubmitButton/>  <br />
        
    </div>

}

export default homepage;