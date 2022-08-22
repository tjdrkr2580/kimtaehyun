import React, { useEffect, useState } from "react";
import "./style/greeting.css";
import { FiPower } from "react-icons/fi";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import AnimatedRoutes from "./../components/AnimatedRoutes";
import { Helmet } from "react-helmet";

const Greeting = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setLoading(!loading);
    }, 100);
  }, []);
  const clock = () => {
    let date = new Date();
    let h = String(date.getHours()).padStart(2, "0");
    let m = String(date.getMinutes()).padStart(2, "0");
    let dd = String(date.getDate()).padStart(2, "0");
    let mm = String(date.getMonth() + 1).padStart(2, "0");
    let week = new Array("일", "월", "화", "수", "목", "금", "토");
    let day = new Date().getDay();
    let today = mm + "월" + " " + dd + "일" + " " + week[day] + "요일";
    let time = h + ":" + m;
    document.querySelector(".greeting-clock").innerText = time;
    document.querySelector(".greeting-date").innerText = today;
    setTimeout(clock, 1000);
  };

  if (loading === false) {
    clock();
  }

  return (
    <AnimatedRoutes>
      <Helmet title="TaeH | Greeting" />
      <section className="greeting-wrapper">
        <Link to="/home">
          <div className="home-shift"></div>
        </Link>
        <div className="date">
          <h1 className="greeting-clock">00 : 00</h1>
          <p className="greeting-date">dawdaw</p>
        </div>
        <p className="greeting-advice">
          아무 곳이나 클릭하실 경우 이동할 수 있습니다.
        </p>
        <div className="greeting-btns-layout">
          <ul className="greeting-btns">
            <li>
              <a href="https://github.com/tjdrkr2580/kimtaehyun">
                <img src={Logo} alt="logo" />
              </a>
            </li>
            <li>
              <Link to="/">
                <FiPower size={36} />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </AnimatedRoutes>
  );
};

export default Greeting;
