import React from "react";
import "./intro.css";
import asche from "../../image/asche.jpg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="myintro">
        <span className="hello">
          Hello, <br />
        </span>
        <span className="text">
          I'M
          <span className="name">
            Aschalew Kebede <br />
          </span>
          <span className="und">Full Stack Java Developer</span>
        </span>
        <p className="para">
          As a proficient Java and Spring Framework developer, I specialize in
          crafting <br />
          robust back-end solutions. My expertise lies in architecting and
          implementing <br />
          scalable and efficient systems, leveraging the power of Java and the,
          versatility <br />
          of the Spring ecosystem.
        </p>
        <br />

        <p className="frontend">
          On the front end, I excel in creating dynamic and user-friendly
          interfaces <br />
          using React and CSS. My commitment to delivering seamless user
          experiences
          <br /> is complemented by a keen eye for design aesthetics and a deep
          understanding <br />
          of front-end technologies.
          <br />
          <br />
        </p>
        <p className="strong">
          I am passionate about building end-to-end solutions that seamlessly
          integrate <br />
          the intricacies of back-end logic with intuitive and visually
          appealing <br />
          front-end interfaces.
        </p>
        <button className="hire">Hire me</button>
      </div>
      <img src={asche} alt="" className="bg" />
    </section>
  );
};

export default Intro;
