import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/React-Router-Dom/Home";
import About from "./components/React-Router-Dom/About";
import Services from "./components/React-Router-Dom/Services";
import Contact from "./components/React-Router-Dom/Contact";
import Navbar from "./components/React-Router-Dom/Navbar";
const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
