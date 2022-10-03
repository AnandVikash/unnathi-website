import React from "react";
import Welcome from "./Welcome/Index";
import OurTeam from "./OurTeam/Index";
import OurProjects from "./OurProjects/Index";
import OurPartners from "./OurPartners/Index";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
export default function Index() {
  return (
    <>
      <BannerTitle
        title="About Us"
        titleTag="h1"
        titleColor="#fff"
        img="090b2b.png"
        imgColor="696969"
      />
      <Welcome />
      <OurTeam />
      <OurProjects />
      {/* <OurPartners /> */}
    </>
  );
}
