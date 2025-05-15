import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import Homepage from "../homepage";
import Visualiser from "../visualiser";

function AnimatedRoutes () {
  const location = useLocation();
    return  (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage/>} />
        <Route path="/visualiser" element={<Visualiser/>} />
      </Routes>
    </AnimatePresence>
    );
}

export default AnimatedRoutes;