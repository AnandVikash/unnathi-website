import React from "react";
import "./App.css";
import Navbar from "./Components/HeadersFooters/Header/Navbar/Navbar";
import Footer from "./Components/HeadersFooters/Footer";
import Home from "./Components/Pages/Home/Index";
import About from "./Components/Pages/About/Index";
import Traning from "./Components/Pages/Traning/Index";
import Healing from "./Components/Pages/Healing/Index";
import Media from "./Components/Pages/Media/Index";
import Affirmations from "./Components/Pages/Media/Affirmations/Index";
import Gallery from "./Components/Pages/Media/Gallery/Index";
import News from "./Components/Pages/Media/News/Index";
import Blogs from "./Components/Pages/Blogs";
import SingleBlogs from "./Components/Pages/Blogs/SingleBlog/Index";
import Events from "./Components/Pages/Media/Events/Index";
import Youtube from "./Components/Pages/Media/youtubeLinks/Index";
import Projects from "./Components/Pages/Projects/Index";
import ProjectsSingle from "./Components/Pages/Projects/SingleProject/Index";
import Research from "./Components/Pages/Research/Index";
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
          <Route path="/media" element={<Media />} />
          <Route path="/media/gallery" element={<Gallery />} />
          <Route path="/media/blogs" element={<Blogs />} />
          <Route
            path="/media/blogs/:blogname/:blogid"
            element={<SingleBlogs />}
          />
          {/* SingleBlogs */}
          <Route path="/media/events" element={<Events />} />
          <Route path="/media/youtube-links" element={<Youtube />} />
          <Route path="/media/news" element={<News />} />
          <Route
            path="/media/positive-affirmations"
            element={<Affirmations />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects-single" element={<ProjectsSingle />} />
          <Route path="/research" element={<Research />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
