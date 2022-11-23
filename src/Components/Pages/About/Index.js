import React from "react";
import Welcome from "./Welcome/Index";
import OurTeam from "./OurTeam/Index";
import OurProjects from "./OurProjects/Index";
import OurPartners from "./OurPartners/Index";
import BannerTitle from "../../Assets/ElementsUi/BannerTitle/Index";
import Associates from "../../Assets/ElementsUi/Associates/Index";
export default function Index() {
  return (
    <>
      <BannerTitle
        title="About Us"
        titleTag="h1"
        titleColor="#fff"
        localImg="banner-4.jpg"
        imgColor="696969"
      />
      <Welcome />
      <OurTeam />
      <Associates />
      {/* <OurProjects /> */}
      {/* <OurPartners /> */}
    </>
  );
}
