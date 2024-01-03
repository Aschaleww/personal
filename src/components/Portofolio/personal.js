import React from "react";
import "./personal.css";
import app1 from "../../image/app1.jpg";
import app2 from "../../image/app2.jpg";
import app3 from "../../image/app3.jpg";
import app4 from "../../image/app4.jpg";
import app5 from "../../image/app5.jpg";
import app6 from "../../image/app6.jpg";

const Personal = () => {
  return (
    <section id="works">
      <h2 className="worktitle">My personal Portofolio</h2>
      <span className="workdesc">
        I take a pride in paying attention to the smallest details ank making
        sure that my work is pixex perfect I am exited to bring my skills and
        experiance to help bussiness achieve their goals and create a strong
        online presence
      </span>

      <div className="workimg">
        <img src={app1} alt="" className="img" />
        <img src={app2} alt="" className="img" />
        <img src={app3} alt="" className="img" />
        <img src={app4} alt="" className="img" />
        <img src={app5} alt="" className="img" />
        <img src={app6} alt="" className="img" />
      </div>
      <button className="see">see more</button>
    </section>
  );
};

export default Personal;
