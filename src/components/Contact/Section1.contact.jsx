import React from "react";

export default function Section1_contact() {
  return (
    <div className="section1">
      <div className="title">
        <h1>Get In Touch With Us</h1>
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectet et adipis icing elit. Ab commodi
          iure minus laboriosam placeat quia, dolorem animi. Eveniet
          repudiandae, iure et.
        </p>
      </div>
      <div className="row">
        <div className="first-sec">
          <div>
            <h4>We Are Here For You</h4>
            <p>
              For more information or inquiry about our products, projects and
              pricing please feel free to get in touch with us.
            </p>
          </div>
          <div>
            <div className="show">
              <i className="fas fa-map-marker-alt icon"></i>
              <p>
                <span>Address: </span> 50 street Ave, Omaha, NE 68132, United
                States.
              </p>
            </div>
            <div className="show">
              <i className="fas fa-phone-alt icon"></i>
              <p>
                <span>Phone: </span> +123 45 67 88, +123 45 67 88
              </p>
            </div>
            <div className="show">
              <i className="far fa-envelope-open icon"></i>
              <p>
                <span>Email: </span> Captivate@mail.com
              </p>
            </div>
          </div>
          <div className="social">
            <span>Follow Us </span>
            <i className="fab fa-facebook-f icon"></i>
            <i className="fab fa-instagram icon"></i>
            <i className="fab fa-twitter icon"></i>
            <i className="fab fa-linkedin-in icon"></i>
          </div>
        </div>
        <div className="img-sec">
          <img
            src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/captivate-liberty-demo_Free/232105078/web/assets/images/s1.png"
            alt="busness board"
          />
        </div>
      </div>
    </div>
  );
}
