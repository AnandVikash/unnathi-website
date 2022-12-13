import React from "react";
import About from "./AboutUs/Index";
import AboutFounder from "./AboutFounder/index";
import Projects from "./Projects/index";
import Events from "./Events/index";
import ActionSpeakes from "./ActionSpeakAboutUs/Index";
import Donation from "./Donation/index";
import Blogs from "./Blogs/index";
import Banner from "./Banner/index";
import Counters from "./Counters/index";
import Testimonials from "./Testimonials/index";
import Associates from "../../Assets/ElementsUi/Associates/Index";

export default function Index() {
  return (
    <div>
      <Banner />
      <About />
      <AboutFounder />
      <Projects />
      <ActionSpeakes />
      {/* <Events /> */}
      <Donation />
      <Counters />
      <Testimonials />
      <Associates />
      {/* <Blogs /> */}
    </div>
  );
}
