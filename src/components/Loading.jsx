import React from "react";
import Logo from "../assets/97386129-removebg-preview.png";
import "./style/loading.css";
import Loadingbar from "./Loadingbar";

const Loading = () => {
  return (
    <div className="loading-wrapper">
      <section className="loading-box">
        <img className="logo" src={Logo} alt="Logo" />
        <Loadingbar />
      </section>
    </div>
  );
};

export default Loading;
