import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Pages/homepage";
import Visualiser from "./Pages/visualiser";

function App () {
  return <Router>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/visualiser" element={<Visualiser/>} />
    </Routes>
  </Router>;
}

export default App;