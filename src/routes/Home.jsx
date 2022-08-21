import React, { useState } from "react";
import AnimatedRoutes from "../components/AnimatedRoutes";
import "./style/home.css";
import Nav from "./../components/Nav";
import { Helmet } from "react-helmet";

const Home = () => {
  const [folder, setFo] = useState(false);
  const [music, setMu] = useState(false);
  const [document, setDo] = useState(false);
  const [terminal, setTe] = useState(false);
  return (
    <AnimatedRoutes>
      <Helmet title="TaeH | Home" />
      <section className="home-wrapper">
        <Nav
          folder={folder}
          music={music}
          document={document}
          terminal={terminal}
          setFo={setFo}
          setMu={setMu}
          setDo={setDo}
          setTe={setTe}
        />
      </section>
    </AnimatedRoutes>
  );
};

export default Home;
