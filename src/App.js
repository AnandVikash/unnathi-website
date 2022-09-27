import Navbar from "./Components/HeadersFooters/Header/Navbar/Navbar";
import Footer from "./Components/HeadersFooters/Footer";
import Home from "./Components/Pages/Home/Index";
import About from "./Components/Pages/About/Index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./animation.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
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
