import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/HeadersFooters/Header/Navbar/Navbar";
import Footer from "./Components/HeadersFooters/Footer";
import Home from "./Components/Pages/Home/Index";
import About from "./Components/Pages/About/Index";
import OurTeam from "./Components/Pages/OurTeam/SingleTeamPage/Index";
import Traning from "./Components/Pages/Traning/Index";
import Healing from "./Components/Pages/Healing/Index";
import Media from "./Components/Pages/Media/Index";
import Affirmations from "./Components/Pages/Media/Affirmations/Index";
import Gallery from "./Components/Pages/Media/Gallery/Index";
import News from "./Components/Pages/Media/News/Index";
import Blogs from "./Components/Pages/Blogs";
import SingleBlogs from "./Components/Pages/Blogs/SingleBlog/Index";
import Events from "./Components/Pages/Media/Events/Index";
import ActionSpeakes from "./Components/Pages/Media/ActionSpeakes/Index";
import ActionSpeakesSingle from "./Components/Pages/Media/ActionSpeakes/SingleAction/Index";
import Youtube from "./Components/Pages/Media/youtubeLinks/Index";
import Projects from "./Components/Pages/Projects/Index";
import ProjectsSingle from "./Components/Pages/Projects/SingleProject/Index";
import Contact from "./Components/Pages/Contact/Index";
import Donate from "./Components/Pages/DonateUs/Index";
import Register from "./Components/Pages/Register/Index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ScrollToTop from "./Components/Assets/ScrollToTop";
import Sidenavwidget from "./Components/Assets/ElementsUi/SidenavWidget/Index";
import Checker from "./Components/Pages/Checker";

// Research
import Research from "./Components/Pages/Research/Index";
import ResearchAtUnnathi from "./Components/Pages/Research/ResearchPages/ResearchAtUnnathi/Index";
import OurResearchTeam from "./Components/Pages/Research/ResearchPages/OurResearchTeam/Index";
import Publications from "./Components/Pages/Research/ResearchPages/Publications/Index";
import Collaborate from "./Components/Pages/Research/ResearchPages/RegisterToCollaborate/Index";
import OngoingProjects from "./Components/Pages/Research/ResearchPages/OngoingResearchprojects/Index";
import Completedrojects from "./Components/Pages/Research/ResearchPages/CompletedResearchProjects/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Sidenavwidget />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about-us" element={<About />} />
          <Route path="/our-team/:teamName/:teamId" element={<OurTeam />} />
          <Route path="/training" element={<Traning />} />
          <Route path="/healing" element={<Healing />} />
          <Route path="/media" element={<Media />} />
          <Route path="/media/gallery" element={<Gallery />} />
          <Route path="/media/blogs" element={<Blogs />} />
          <Route
            path="/media/blogs/:blogname/:blogid"
            element={<SingleBlogs />}
          />
          <Route path="/media/events" element={<Events />} />
          <Route
            path="/media/action-that-speakes-about-us"
            element={<ActionSpeakes />}
          />
          <Route
            path="/media/action-that-speakes-about-us/:actionname/:actionid"
            element={<ActionSpeakesSingle />}
          />
          <Route path="/media/youtube-links" element={<Youtube />} />
          <Route path="/media/news" element={<News />} />
          <Route
            path="/about/positive-affirmations"
            element={<Affirmations />}
          />
          <Route path="/projects" element={<Projects />} />
          <Route
            path="/projects/:projectname/:projectid"
            element={<ProjectsSingle />}
          />
          <Route path="/research" element={<Research />} />
          <Route
            path="/research/research-at-unnathi"
            element={<ResearchAtUnnathi />}
          />
          <Route
            path="/research/our-research-team"
            element={<OurResearchTeam />}
          />
          <Route path="/research/publications" element={<Publications />} />
          <Route
            path="/research/register-to-Collaborate"
            element={<Collaborate />}
          />
          <Route
            path="/research/ongoing-research-projects"
            element={<OngoingProjects />}
          />
          <Route
            path="/research/completed-research-projects"
            element={<Completedrojects />}
          />
          <Route path="/donate-us" element={<Donate />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checker" element={<Checker />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
