import React from "react";
import Cstar from "../assets/canvas-star.gif";
import Star from "../assets/star.gif";
import Block from "../assets/block.gif";
import Bottle from "../assets/bottle.gif";
import Spin from "../assets/spin.gif";
import "./style/gallery.css";

const Gallery = () => {
  return (
    <section className="gallery-wrapper">
      <ul className="gallery-line">
        <li style={{ color: "#63cb4e" }}>●</li>
        <li style={{ color: "#f4c04e" }}>●</li>
        <li style={{ color: "#ec6a5f " }}>●</li>
      </ul>
      <section className="gallery-images">
        <img src={Cstar} alt="img1" />
        <img src={Star} alt="img2" />
        <img src={Block} alt="img3" />
        <img src={Bottle} alt="img4" />
        <img src={Spin} alt="img5" />
      </section>
    </section>
  );
};

export default Gallery;
