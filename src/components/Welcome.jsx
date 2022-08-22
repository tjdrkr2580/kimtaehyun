import React from "react";
import "./style/welcome.css";
import Logo from "../assets/logo2.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Welcome = () => {
  const onClick = (e) => {
    e.target.style.right = "-150%";
  };
  return (
    <section className="welcome-wrapper" onClick={onClick}>
      <header>
        <div>
          <img src={Logo} alt="logo" />
          <span>환영합니다!</span>
        </div>
        <p>
          <AiOutlineArrowRight size={26} />
        </p>
      </header>
      <section>
        <span>늘 앞으로 나아가려는 저는, 김태현입니다.</span>
        <br />
        <span>I am Kim Tae hyun, who always tries to move forward.</span>
      </section>
    </section>
  );
};

export default Welcome;
