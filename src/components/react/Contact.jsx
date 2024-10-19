import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      {/* <h1 className="title">Hire Me!</h1> */}
      <form action="" className="form" method="post">
        <h2>leave a message</h2>
        <label htmlFor="message">Whats on your mind</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="5"
          required
        ></textarea>
        <div className="input">
          <label htmlFor="name">Your Name</label>
          <input type="name" name="name" id="name" required />
          <label htmlFor="email">Your Email</label>
          <input type="email" name="email" id="email" required />
          <button type="submit">Send to Me</button>
        </div>
      </form>
    </section>
  );
}
