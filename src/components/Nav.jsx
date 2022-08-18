import React, { useState } from "react";
import "./style/nav.css";
import { FcFolder } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { BsFillTerminalFill } from "react-icons/bs";
import { BsArrow90DegLeft } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { RiFullscreenFill } from "react-icons/ri";
import Folder from "./Folder";
import Music from "./Music";
import Terminal from "./Terminal";
import Document from "./Document";

const Nav = () => {
  const [folder, setFo] = useState(false);
  const [music, setMu] = useState(false);
  const [document, setDo] = useState(false);
  const [terminal, setTe] = useState(false);

  const onClickF = () => {
    setFo(!folder);
    console.log("fo");
  };
  const onClickM = () => {
    setMu(!music);
    console.log("mu");
  };
  const onClickD = () => {
    setDo(!document);
    console.log("do");
  };
  const onClickT = () => {
    setTe(!terminal);
    console.log("te");
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
        <li onClick={onClickF}>
          <FcFolder size={36} />
        </li>
        <li onClick={onClickM}>
          <IoIosSearch size={36} style={{ color: "white" }} />
        </li>
        <li>
          <a
            href="https://www.google.co.kr/search?q=%EC%9D%B8%EC%B2%9C%EC%A0%84%EC%9E%90%EB%A7%88%EC%9D%B4%EC%8A%A4%ED%84%B0%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90"
            target="_blink"
          >
            <FcGoogle size={36} style={{ color: "white" }} />
          </a>
        </li>
        <li onClick={onClickD}>
          <FcDocument size={36} />
        </li>
        <li onClick={onClickT}>
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
      <Folder />
      <Music />
      <Terminal />
      <Document />
    </nav>
  );
};

export default Nav;
