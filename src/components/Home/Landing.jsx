import React from "react";

export default function Landing() {
  return (
    <div className="landing">
      <div className="info-container">
        <div className="info">
          <h1>
            Doing <span>the right thing, at the</span> right time.
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad, dicta?
            Aut, doloremque. Sed, laborum? Molestiae magni beatae consectetur
            mollitia nemo sunt dolore et non, ducimus itaque! Provident itaque
            eum quo. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Similique, impedit.
          </p>
          <a href="#read" className="read-btn">
            READ MORE
          </a>
          <a href="#services" className="service-btn">
            OUR SERVICES
          </a>
        </div>
        <div className="picture">
          <img
            src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/captivate-liberty-demo_Free/232105078/web/assets/images/banner-round.png"
            alt="person"
          />
        </div>
      </div>
    </div>
  );
}
