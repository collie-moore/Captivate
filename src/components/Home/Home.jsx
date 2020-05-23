import React from "react";
import Landing from "./Landing";
import About_home from "./About.home";
import Solutions from "./Solutions.home";
import Facts from "./Facts.home";
import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <Landing />
      <About_home />
      <Solutions />
      <Facts />
    </div>
  );
}
