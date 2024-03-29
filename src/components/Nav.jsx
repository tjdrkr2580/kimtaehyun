import React from "react";
import "./style/nav.css";
import { FcFolder } from "react-icons/fc";
import { FcMusic } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { FcGoogle } from "react-icons/fc";
import { BsFillTerminalFill } from "react-icons/bs";
import { BsArrow90DegLeft } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { RiFullscreenFill } from "react-icons/ri";

const Nav = ({ gallery, music, terminal, setGa, setMu, setTe }) => {
  const onClick = (e) => {
    switch (e.target.id) {
      case "gal":
        setGa(!gallery);
        break;
      case "mus":
        setMu(!music);
        break;
      default:
        setTe(!terminal);
        break;
    }
  };

  return (
    <nav className="nav-wrapper">
      <ul className="nav-line">
        <li>
          <a href="https://github.com/tjdrkr2580/kimtaehyun" target="_blink">
            <img src={Logo} alt="logo" />
          </a>
        </li>
      </ul>
      <ul className="nav-line">
        <li id="gal" onClick={onClick}>
          <FcFolder size={36} />
        </li>
        <li id="mus" onClick={onClick}>
          <FcMusic size={36} />
        </li>
        <li>
          <a
            className="nav-link"
            href="https://www.google.co.kr/search?q=%EC%9D%B8%EC%B2%9C%EC%A0%84%EC%9E%90%EB%A7%88%EC%9D%B4%EC%8A%A4%ED%84%B0%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90"
            target="_blink"
          >
            <FcGoogle size={36} style={{ color: "white" }} />
          </a>
        </li>
        <li>
          <a
            className="nav-link"
            href="https://tjdrkr2580.notion.site/Kim-Tae-Hyun-4ce30c75290f450da94a7ac7590e8c78"
            target="_blink"
          >
            <FcDocument size={36} />
          </a>
        </li>
        <li id="ter" onClick={onClick}>
          <BsFillTerminalFill size={30} style={{ color: "white" }} />
        </li>
      </ul>
      <ul className="nav-line-none">
        <li>
          <Link to="/greeting">
            <BsArrow90DegLeft size={24} style={{ color: "white" }} />
          </Link>
        </li>
        <li
          onClick={() => {
            if (!document.fullscreenElement) {
              document.documentElement.requestFullscreen();
            } else {
              if (document.exitFullscreen) {
                document.exitFullscreen();
              }
            }
          }}
        >
          <RiFullscreenFill size={30} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
