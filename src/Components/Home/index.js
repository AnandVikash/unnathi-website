import React from "react";
import About from "./AboutUs";
import Service from "./Services";
import OurTeam from "./OurTeam";
import Testimonials from "./Testimonials";
import OurProcess from "./OurProcess";
import Blog from "./OurBlog";
import Banner from "./Banner";
export default function index() {
  return (
    <div>
      <Banner />
      <About />
      <Service />
      <OurTeam />
      <Testimonials />
      <OurProcess />
      <Blog />
    </div>
  );
}
