import React from "react";
import "./App.css";
import Navbar from "./Components/HeadersFooters/Header/Navbar/Navbar";
import Footer from "./Components/HeadersFooters/Footer";
import Home from "./Components/Pages/Home/Index";
import About from "./Components/Pages/About/Index";
import Traning from "./Components/Pages/Traning/Index";
import Healing from "./Components/Pages/Healing/Index";
import Gallery from "./Components/Pages/Media/Gallery/Index";
import Projects from "./Components/Pages/Projects/Index";
import Contact from "./Components/Pages/Contact/Index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ScrollToTop from "./Components/Assets/ScrollToTop";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/training" element={<Traning />} />
          <Route path="/healing" element={<Healing />} />
          <Route path="/media/gallery" element={<Gallery />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </BrowserRouter>
    </>
  );
}

export default App;
