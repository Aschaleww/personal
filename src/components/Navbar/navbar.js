import React, { useState } from "react";
import "./navbar.css";
import logo from "../../image/logo.jpg";
import contact from "../../image/contact.jpg";
import menus from "../../image/menus.jpg";
import { Link } from "react-scroll";

const Navbar = () => {
  const [showmenu, setshowmenu] = useState(false);
  return (
    <nav className="menu">
      <img src={logo} alt="" className="imgo" />

      <div className="menuItem">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="list"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="list"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="list"
        >
          Portofolio
        </Link>
        <Link
          activeClass="active"
          to="con"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="list"
        >
          Contact
        </Link>
      </div>
      <button
        className="contact"
        onClick={() => {
          document.getElementById("con").scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contact} alt="" className="image" />
        Contact Me
      </button>

      <img
        src={menus}
        width="40px"
        height="40px"
        alt=""
        className="menus"
        onClick={() => setshowmenu(!showmenu)}
      />

      <div className="navmenu" style={{ display: showmenu ? "flex" : "none" }}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={200}
          className="listItem"
          onClick={() => setshowmenu(false)}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-50}
          duration={200}
          className="listItem"
          onClick={() => setshowmenu(false)}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={200}
          className="listItem"
          onClick={() => setshowmenu(false)}
        >
          Portofolio
        </Link>
        <Link
          activeClass="active"
          to="con"
          spy={true}
          smooth={true}
          offset={-50}
          duration={200}
          className="listItem"
          onClick={() => setshowmenu(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
