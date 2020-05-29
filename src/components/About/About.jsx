import React from "react";
import "./About.scss";
import Section1 from "./Sec1";
import Section2 from "./Sec2";
import Section3 from "./Sec3";

export default function About() {
  return (
    <div className="About">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
}
