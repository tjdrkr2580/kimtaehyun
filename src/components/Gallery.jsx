import React from "react";
import Draggable from "react-draggable";
import Cstar from "../assets/canvas-star.gif";
import Star from "../assets/star.gif";
import Block from "../assets/block.gif";
import Bottle from "../assets/bottle.gif";
import Spin from "../assets/spin.gif";
import Car from "../assets/car.gif";
import Card from "../assets/card.gif";
import Clock from "../assets/clock.gif";
import Ball from "../assets/ball.gif";
import Loading from "../assets/loading.gif";
import Finger from "../assets/finger.gif";
import Menu from "../assets/menu.gif";
import Mouse from "../assets/mouse.gif";
import Scroll from "../assets/scroll.gif";
import "./style/gallery.css";

const Gallery = ({ setGa, gallery }) => {
  return (
    <Draggable positionOffset={{ x: "-50%", y: "-50%" }}>
      <section className="gallery-wrapper">
        <ul className="gallery-line">
          <li>갤러리</li>
          <li>
            <ul className="gallery-btn">
              <li
                onClick={() => {
                  setGa(!gallery);
                }}
                style={{ color: "#63cb4e" }}
              >
                ●
              </li>
              <li style={{ color: "#f4c04e" }}>●</li>
              <li
                onClick={() => {
                  setGa(!gallery);
                }}
                style={{ color: "#ec6a5f " }}
              >
                ●
              </li>
            </ul>
          </li>
        </ul>
        <ul className="gallery-images">
          <a
            href="https://github.com/tjdrkr2580/CSS-Animations"
            target="_blink"
          >
            <li className="gallery-image">
              <img src={Star} alt="img2" />
              <p>Stars</p>
            </li>
          </a>
          <a
            href="https://github.com/tjdrkr2580/CSS-Animations"
            target="_blink"
          >
            <li className="gallery-image">
              <img src={Block} alt="img3" />
              <p>Hov. Block</p>
            </li>
          </a>
          <a
            href="https://github.com/tjdrkr2580/CSS-Animations"
            target="_blink"
          >
            <li className="gallery-image">
              <img src={Bottle} alt="img4" />
              <p>Bottle</p>
            </li>
          </a>
          <a
            href="https://github.com/tjdrkr2580/CSS-Animations"
            target="_blink"
          >
            <li className="gallery-image">
              <img src={Spin} alt="img5" />
              <p>Spin Text</p>
            </li>
          </a>
          <a href="https://github.com/tjdrkr2580/Practice" target="_blink">
            <li className="gallery-image">
              <img src={Car} alt="img6" />
              <p>Drive a Car</p>
            </li>
          </a>
          <a href="https://github.com/tjdrkr2580/Practice" target="_blink">
            <li className="gallery-image">
              <img src={Card} alt="img7" />
              <p>Hover Card</p>
            </li>
          </a>
          <a href="https://github.com/tjdrkr2580/Practice" target="_blink">
            <li className="gallery-image">
              <img src={Clock} alt="img8" />
              <p>Clock</p>
            </li>
          </a>
          <a href="https://github.com/tjdrkr2580/Practice" target="_blink">
            <li className="gallery-image">
              <img src={Finger} alt="img9" />
              <p>Finger Print</p>
            </li>
          </a>
          <a href="https://github.com/tjdrkr2580/Practice" target="_blink">
            <li className="gallery-image">
              <img src={Loading} alt="img10" />
              <p>Loading</p>
            </li>
          </a>
          <a href="https://github.com/tjdrkr2580/Practice" target="_blink">
            <li className="gallery-image">
              <img src={Menu} alt="img11" />
              <p>Menu</p>
            </li>
          </a>
          <a href="https://github.com/tjdrkr2580/Practice" target="_blink">
            <li className="gallery-image">
              <img src={Mouse} alt="img12" />
              <p>Mouse</p>
            </li>
          </a>
          <a href="https://github.com/tjdrkr2580/Practice" target="_blink">
            <li className="gallery-image">
              <img src={Scroll} alt="img13" />
              <p>Scroll Text</p>
            </li>
          </a>
          <a
            href="https://github.com/tjdrkr2580/CSS-Animations"
            target="_blink"
          >
            <li className="gallery-image">
              <img src={Ball} alt="img14" />
              <p>Ball</p>
            </li>
          </a>
        </ul>
      </section>
    </Draggable>
  );
};

export default Gallery;
