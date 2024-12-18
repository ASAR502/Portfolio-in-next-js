"use client";
import React from "react";
import Hero from "./Hero";
import Work from "./Work";
import Cta from "./Cta";
import Skills from "./skills";

export default function HomeIndex() {
  return (
    <div className="relative w-full">
      <div className="w-full z-[60] relative">
        <Hero />

        <Work />
        <Cta />
        {/* <Gallery /> */}
        {/* <Slider /> */}
        <Skills />
      
      </div>
    </div>
  );
}
