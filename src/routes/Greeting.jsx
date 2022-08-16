import React, { useEffect, useState } from "react";
import "./style/greeting.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPowerOff } from "@fortawesome/free-solid-svg-icons";

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
    // eslint-disable-next-line no-useless-concat
    let today = mm + "월" + " " + dd + "일" + " " + week[day] + "요일";
    let time = h + ":" + m;
    document.querySelector(".greeting-clock").innerText = time;
    document.querySelector(".greeting-date").innerText = today;
    setTimeout(clock, 60000);
  };

  if (loading === false) {
    clock();
  }

  return (
    <section className="greeting-wrapper">
      <div className="date">
        <h1 className="greeting-clock">00 : 00</h1>
        <p className="greeting-date">dawdaw</p>
      </div>
      <div className="greeting-btns-layout">
        <ul className="greeting-btns">
          <li>
            <FontAwesomeIcon icon={faPowerOff} size="2x" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Greeting;

// import Loading from "./../components/Loading";

/* <>{loading ? <Loading /> : }</> */
