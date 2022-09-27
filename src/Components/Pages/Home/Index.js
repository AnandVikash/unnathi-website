import React from "react";
import About from "./AboutUs/index";
import AboutFounder from "./AboutFounder/index";
import Projects from "./Projects/index";
import Events from "./Events/index";
import Donation from "./Donation/index";
import Blogs from "./Blogs/index";
import Banner from "./Banner/index";
import Counters from "./Counters/index";
import Testimonials from "./Testimonials/index";
export default function index() {
  return (
    <div>
      <Banner />
      <About />
      <AboutFounder />
      <Projects />
      <Events />
      <Donation />
      <Counters />
      <Testimonials />
      {/* <Blogs /> */}
      {/* 
      <OurTeam />
 
      <OurProcess />
      <Blog /> */}
    </div>
  );
}
