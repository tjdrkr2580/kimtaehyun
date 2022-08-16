import React, { useEffect } from "react";
import Logo from "../assets/97386129-removebg-preview.png";
import "./style/loading.css";

const Loading = () => {
  useEffect(() => {
    setInterval(() => {
      window.location.href = "/greeting";
    }, 9000);
  });
  return (
    <div className="loading-wrapper">
      <section className="loading-box">
        <img className="logo" src={Logo} alt="Logo" />
        <div className="loading-bar">
          <section className="bar"></section>
        </div>
      </section>
    </div>
  );
};

export default Loading;
