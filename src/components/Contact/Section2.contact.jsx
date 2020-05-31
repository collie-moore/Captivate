import React from "react";
import { useForm } from "react-hook-form";

export default function Section2_contact() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { name, email } = data;
    alert("Hello " + name + ", we will contact you back at " + email);
  };
  return (
    <div className="section2">
      <div className="title">
        <h1>We Want To Hear From You</h1>
        <hr />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            ref={register}
          />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            ref={register}
          />
          <input
            type="text"
            placeholder="Subject"
            name="subject"
            ref={register}
          />
        </div>
        <textarea
          className="text"
          name="text"
          placeholder="Type your message here"
          ref={register}
        />
        <input className="btn" type="submit" />
      </form>
    </div>
  );
}
