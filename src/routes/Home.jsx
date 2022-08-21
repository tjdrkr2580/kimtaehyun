import React, { useState } from "react";
import AnimatedRoutes from "../components/AnimatedRoutes";
import "./style/home.css";
import Nav from "./../components/Nav";
import { Helmet } from "react-helmet";
import Gallery from "./../components/Gallery";
import Music from "./../components/Music";
import Terminal from "./../components/Terminal";

const Home = () => {
  const [gallery, setGa] = useState(false);
  const [music, setMu] = useState(false);
  const [terminal, setTe] = useState(false);
  return (
    <AnimatedRoutes>
      <Helmet title="TaeH | Home" />
      <section className="home-wrapper">
        <Nav
          gallery={gallery}
          music={music}
          terminal={terminal}
          setGa={setGa}
          setMu={setMu}
          setTe={setTe}
        />
        {gallery ? <Gallery setGa={setGa} gallery={gallery} /> : null}
        {music ? <Music setMu={setMu} music={music} /> : null}
        {terminal ? (
          <Terminal
            setTe={setTe}
            terminal={terminal}
            gallery={gallery}
            music={music}
            setGa={setGa}
            setMu={setMu}
          />
        ) : null}
      </section>
    </AnimatedRoutes>
  );
};

export default Home;
