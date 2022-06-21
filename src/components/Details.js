import React from "react";
import About from "./About";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Projects from "./Projects";

const Details = () => {
  return (
    <header className="p-0">
        <NavBar/>
        <About/>
        <Projects/>
        <Footer/>
    </header>
  );
};

export default Details;
