import React from "react";
import Banner from "../components/Banner";
import BannerAbout from "../assets/bannerAbout.svg";
import dropinData from "../data/faq";
import DropinContainer from "../components/DropinContainer";

const AboutPage = () => {
  return (
    <div className="homeContainer">
      <Banner image={BannerAbout} caption={""} />
      <div className="dropinContainer">
        <DropinContainer data={dropinData} />
      </div>
    </div>
  );
};
export default AboutPage;
