import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import Catalog from "./routes/Catalog";
import About from "./routes/About";
import Contact from "./routes/Contact";


function App() {
  return (
   <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
   </div>
  );
}

export default App;
