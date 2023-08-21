import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Login from "./Login";

const AppRouter = () => {
  return (

    <Routes>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/contact" component={Contact} />
      <Route path="/login" component={Login} />
    </Routes>

  );
};

export default AppRouter;
