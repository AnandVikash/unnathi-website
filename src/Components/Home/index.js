import React from "react";
import About from "./AboutUs";
import Service from "./Services";
import OurTeam from "./OurTeam";
import Testimonials from "./Testimonials";
import OurProcess from "./OurProcess";
export default function index() {
  return (
    <div>
      <About />
      <Service />
      <OurTeam />
      <Testimonials />
      <OurProcess />
    </div>
  );
}
