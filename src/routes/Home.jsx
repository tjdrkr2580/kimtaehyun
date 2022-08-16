import React from "react";
import AnimatedRoutes from "../components/AnimatedRoutes";
import "./style/home.css";
import Nav from "./../components/Nav";

const Home = () => {
  return (
    <AnimatedRoutes>
      <section className="home-wrapper">
        <Nav />
      </section>
    </AnimatedRoutes>
  );
};

export default Home;
