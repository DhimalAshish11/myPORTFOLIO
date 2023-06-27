import React from "react";
import "./index.css";

import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Project from "./routes/Project";
import Skills from "./routes/Skills";
import Contact from "./routes/Contact";
import About from "./routes/About";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
