import Navbar from "./Components/Header/Navbar/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Service from "./Components/Services";
import Contact from "./Components/Contact";
import Blogs from "./Components/Blogs";
import SingleBlog from "./Components/Blogs/SingleBlog";
import Footer from "./Components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:blogtTitle/:id" element={<SingleBlog />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
