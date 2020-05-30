import React from "react";
import "./nav-foot.scss";

export default function Footer() {
  return (
    <div className="Footer">
      <ul className="first-sec">
        <li>
          <a href="#" className="logo">
            <i className="fas fa-shield-alt"></i> CAPTIVATE
          </a>
          <p className="lead">
            Lorem ipsum dolor, sit amet consectet et adipis icing elit. Ab
            commodi iure minus laboriosam placeat quia, dolorem animi. Eveniet
            repudiandae, perferendis nesciunt deserunt iure et, consequatur
            optio!
          </p>
        </li>
        <li>
          <h3>QUICK LINKS</h3>
          <p>
            <a href="#link">About company</a>
          </p>
          <p>
            <a href="#link">Explore services</a>
          </p>
          <p>
            <a href="#link">How we work</a>
          </p>
          <p>
            <a href="#link">View projects</a>
          </p>
        </li>
        <li>
          <h3>NEWSLETTER</h3>
          <p>
            By subscribing to our mailing list you will always be updated with
            the latest news from us.
          </p>
        </li>
      </ul>
      <div className="credits">
        <p>© 2020 Captivate. Built by Robert E. Designed by W3Layouts</p>
      </div>
    </div>
  );
}
