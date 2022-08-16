import React from "react";
import "./style/nav.css";
import { FcFolder } from "react-icons/fc";
import { IoIosSearch } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { FcDocument } from "react-icons/fc";
import { BsFillTerminalFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import Logo from "../assets/97386129-removebg-preview.png";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <ul className="nav-line-1">
        <li>
          <img src={Logo} alt="logo" />
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
          <FcGoogle size={36} style={{ color: "white" }} />
        </li>
      </ul>
      <ul className="nav-line">
        <li>
          <FcDocument size={36} />
        </li>
        <li style={{ borderRadius: "0%" }}>
          <BsFillTerminalFill size={30} style={{ color: "white" }} />
        </li>
      </ul>
      <ul className="nav-line">
        <li>
          <FaRegUser size={24} style={{ color: "white" }} />
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
