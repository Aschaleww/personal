import React, { useRef } from "react";
import "./Contact.css";
import insa from "../../image/insa.jpg";
import Queen from "../../image/Queen.jpg";
import astu from "../../image/astu.png";
import ICT from "../../image/ICT.jpg";

import fb from "../../image/fb.jpg";
import Insta from "../../image/Insta.jpg";
import tw from "../../image/tw.jpg";
import youtube from "../../image/youtube.jpg";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_knfphrl",
        "template_t8thc2x",
        form.current,
        "Hw2QVlD8De9OAnvGV"
      )
      .then(
        (result) => {
          alert("email sent");
          e.target.reset();
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="con">
      <div className="client">
        <h1 className="pagetitle">My Clients </h1>
        <p className="des">
          I have had the opportunity to work with diverse group of companies.
          some of the notable companies i have worked with include.
        </p>
        <div className="images">
          <img src={insa} alt="" className="img" />
          <img src={Queen} alt="" className="img" />
          <img src={astu} alt="" className="img" />
          <img src={ICT} alt="" className="img" />
        </div>
      </div>
      <div id="contacts">
        <h1 className="conpagetitle">Contact Me</h1>
        <span className="descr">
          please fillout the form below to discus any work opportunities
        </span>
        <form className="forms" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="in"
            placeholder="your name"
            name="from_name"
          />
          <input
            type="email"
            className="email"
            placeholder="email"
            name="from_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="your message"
          ></textarea>
          <button type="submit" value="send" className="sub">
            Submit
          </button>

          <div className="links">
            <a href="https://www.facebook.com">
              <img src={fb} alt="" className="link" />
            </a>
            <a href="https://www.twitter.com">
              <img src={tw} alt="" className="link" />
            </a>
            <a href="https://www.instagram.com">
              <img src={Insta} alt="" className="link" />
            </a>
            <a href="https://www.youtube.com">
              <img src={youtube} alt="" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
