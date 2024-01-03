import React from "react";
import "./skills.css";
import UI from "../../image/UI.jpg";
import web from "../../image/web.jpg";
import Appsimg from "../../image/Appsimg.jpg";

const Skills = () => {
  return (
    <section id="skills">
      <h2 className="title">What Can I Do</h2>
      <p className="paras">
        I am an innovative and passionate web developer, dedicated to creating
        visually stunning and user-friendly websites. With a keen eye for detail
        and a strong design sensibility, I bring a unique touch to every
        project. Proficient in HTML, CSS, JavaScript, React, and Java Spring
        Framework, I seamlessly blend technical expertise with creativity.
        Additionally, my proficiency in Adobe Photoshop and Illustrator adds an
        extra layer of design finesse to my work
      </p>
      <div className="skillbars">
        <div className="skillbar">
          <img src={UI} alt="ui design" className="skillimage" />
          <div className="skilltexts">
            <h2>UI/UX Design</h2>
            <p>Here is the demo text for the UI and UX Design</p>
          </div>
        </div>

        <div className="skillbar">
          <img src={web} alt="web design" className="skillimage" />
          <div className="skilltexts">
            <h2>Web Development</h2>
            <p>Web developer in organized and effient ways</p>
          </div>
        </div>
        <div className="skillbar">
          <img src={Appsimg} alt=" application" className="skillimage" />
          <div className="skilltexts">
            <h2>Application Development</h2>
            <p>Web developer in organized and effient ways</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
