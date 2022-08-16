import React from "react";
import AnimatedRoutes from "../components/AnimatedRoutes";
import "./style/home.css";
import Nav from "./../components/Nav";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <AnimatedRoutes>
      <Helmet title="TaeH | Home" />
      <section className="home-wrapper">
        <Nav />
      </section>
    </AnimatedRoutes>
  );
};

export default Home;
