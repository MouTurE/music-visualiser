import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Homepage from "./Pages/homepage";
import Visualiser from "./Pages/visualiser";
import AnimatedRoutes from "./Pages/Components/AnimatedRoutes";

function App () {

  

  return <Router>
   <AnimatedRoutes/>
  </Router>;
}

export default App;