import React from "react";
import "./About.scss";
import Section_1 from "./Sec1";
import Section_2 from "./Sec2";
import Section_3 from "./Sec3";

export default function About() {
  return (
    <div className="About">
      <Section_1 />
      <Section_2 />
      <Section_3 />
    </div>
  );
}
