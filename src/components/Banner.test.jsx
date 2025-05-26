import React from "react";
import { getByAltText, getByText, render } from "@testing-library/react";
import Banner from "./Banner";
import BannerAbout from '../assets/BannerAbout.svg'
import BannerImg from "../assets/Banner-img.svg";
import { test } from "vitest";
test("displays banner with image and caption", ()=>{
    const{getByAltText, getByText}=render(
        <Banner image={BannerImg} caption="Chez vous, partout et ailleurs" />
    );
    getByAltText("image bannière");
    getByText("Chez vous, partout et ailleurs");
});