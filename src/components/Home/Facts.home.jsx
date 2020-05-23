import React from "react";

export default function Facts_home() {
  return (
    <div className="Facts">
      <div className="info">
        <h1>Some of Our Company Real Facts.</h1>
        <p>
          Lorem ipsum dolor, sit amet consectet et adipis icing elit. Ab commodi
          iure minus laboriosam placeat quia, dolorem animi. Eveniet
          repudiandae, iure et.
        </p>
      </div>
      <ul className="stats">
        <li>
          <h2>
            <i className="far fa-folder-open"></i>
          </h2>
          <h3>384</h3>
          <p>Projects</p>
        </li>
        <li>
          <h2>
            <i className="fas fa-headphones"></i>
          </h2>
          <h3>270</h3>
          <p>Consultant</p>
        </li>
        <li>
          <h2>
            <i className="fas fa-trophy"></i>
          </h2>
          <h3>150</h3>
          <p>Awards</p>
        </li>
      </ul>
    </div>
  );
}
