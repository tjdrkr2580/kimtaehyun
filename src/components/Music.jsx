import React from "react";
import Draggable from "react-draggable";
import "./style/music.css";
import Mc from "../assets/mc.jpg";
import Mt from "../assets/m2.jpg";
import Ja from "../assets/ja.jpg";
import In from "../assets/in.jpg";
import Ta from "../assets/ta.jpg";
import He from "../assets/he.jpg";
import En from "../assets/en.jpg";

const Music = ({ setMu, music }) => {
  return (
    <Draggable positionOffset={{ x: "-50%", y: "-50%" }}>
      <section className="music-wrapper">
        <ul className="music-line">
          <li>음악</li>
          <li>
            <ul className="music-btn">
              <li
                onClick={() => {
                  setMu(!music);
                }}
                style={{ color: "#63cb4e" }}
              >
                ●
              </li>
              <li style={{ color: "#f4c04e" }}>●</li>
              <li
                onClick={() => {
                  setMu(!music);
                }}
                style={{ color: "#ec6a5f " }}
              >
                ●
              </li>
            </ul>
          </li>
        </ul>
        <ul className="music-images">
          <li className="music-image">
            <img src={Mc} alt="img1" />
            <p>MC몽 - 죽을 만큼 아파서</p>
          </li>
          <li className="music-image">
            <img src={Mt} alt="img2" />
            <p>M2U - Gypsy Tronic</p>
          </li>
          <li className="music-image">
            <img src={Ja} alt="img3" />
            <p>장윤주 - Fly away</p>
          </li>
          <li className="music-image">
            <img src={In} alt="img4" />
            <p>인순이 - 친구여</p>
          </li>
          <li className="music-image">
            <img src={En} alt="img5" />
            <p>Entoy - Period</p>
          </li>
          <li className="music-image">
            <img src={Ta} alt="img6" />
            <p>Takeuchi - Plastic Love</p>
          </li>
          <li className="music-image">
            <img src={He} alt="img7" />
            <p>헤이즈 - 널 너무 모르고</p>
          </li>
        </ul>
      </section>
    </Draggable>
  );
};

export default Music;
