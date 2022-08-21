import React from "react";
import "./style/music.css";

const Music = ({ setMu, music }) => {
  return (
    <section className="music-wrapper">
      <ul className="gallery-line">
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
    </section>
  );
};

export default Music;
