import React from "react";
import "./style/nav.css";
import { FcFolder } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { BsFillTerminalFill } from "react-icons/bs";
import { FiPower } from "react-icons/fi";
import { BsArrow90DegLeft } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { RiFullscreenFill } from "react-icons/ri";

const Nav = () => {
  const pageOff = () => {
    const answer = window.confirm(
      '정말로 TaeH 를 닫으시려면 "확인"을 클릭해주세요.'
    );
    if (answer) {
      window.close();
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
        <li>
          <FcFolder size={36} />
        </li>
        <li>
          <IoIosSearch size={36} style={{ color: "white" }} />
        </li>
        <li>
          <a href="https://google.com" target="_blink">
            <FcGoogle size={36} style={{ color: "white" }} />
          </a>
        </li>
        <li>
          <FcDocument size={36} />
        </li>
        <li style={{ borderRadius: "0%" }}>
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
        <li onClick={pageOff}>
          <FiPower size={24} style={{ color: "white" }} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
