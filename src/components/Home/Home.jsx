import React from "react";
import Landing from "./Landing";
import About from "./About.home";
import Solutions from "./Solutions.home";
import Facts from "./Facts.home";
import News from "./News.home";
import "./Home.scss";

export default function Home() {
  return (
    <div className="Home">
      <Landing />
      <About />
      <Solutions />
      <Facts />
      <News />
    </div>
  );
}
