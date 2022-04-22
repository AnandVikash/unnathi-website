import React from "react";
import About from "./AboutUs";
import Service from "./Services";
import OurTeam from "./OurTeam";
import Testimonials from "./Testimonials";
import OurProcess from "./OurProcess";
import Blog from "./OurBlog";
import Footer from "../Footer";
export default function index() {
  return (
    <div>
      <About />
      <Service />
      <OurTeam />
      <Testimonials />
      <OurProcess />
      <Blog />
      <Footer />
    </div>
  );
}
