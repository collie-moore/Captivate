import React from "react";

export default function News_home() {
  return (
    <div className="news">
      <h1 className="title">Company News</h1>
      <hr />
      <p className="lead">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour
      </p>
      <ul className="cards">
        <li>
          <img
            src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/captivate-liberty-demo_Free/232105078/web/assets/images/blog.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">4 Steps To Consider Before You Start</a>
          </div>
          <hr />
          <div className="author">
            <h6>
              <i className="fas fa-user"></i> Johnson Smith
            </h6>
            <h6>
              <i className="fas fa-calendar-alt"></i> May 16, 2020
            </h6>
          </div>
        </li>
        <li>
          <img
            src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/captivate-liberty-demo_Free/232105078/web/assets/images/blog1.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Strategic Plan Execution Management</a>
          </div>
          <hr />
          <div className="author">
            <h6>
              <i className="fas fa-user"></i> Alexander
            </h6>
            <h6>
              <i className="fas fa-calendar-alt"></i> May 19, 2020
            </h6>
          </div>
        </li>
        <li>
          <img
            src="https://demo.w3layouts.com/demos_new/template_demo/29-02-2020/captivate-liberty-demo_Free/232105078/web/assets/images/blog2.jpg"
            alt="blog"
          />
          <div className="link">
            <a href="#product">Business Planning, Strategy And Execution</a>
          </div>
          <hr />
          <div className="author">
            <h6>
              <i className="fas fa-user"></i> Elizabeth ker
            </h6>
            <h6>
              <i className="fas fa-calendar-alt"></i> May 21, 2020
            </h6>
          </div>
        </li>
      </ul>
    </div>
  );
}
