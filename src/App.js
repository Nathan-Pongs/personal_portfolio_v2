import './App.css';
import React from "react";
import AnimatedMatrix from "./components/AnimatedMatrix";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";

function App() {
  return (
    <div className="relative w-full">
        <AnimatedMatrix />
        <div className="relative h-full">
          <section id="home" className="h-screen">
            <Header />
            <Banner />
          </section>
          <section id="about" className="bg-[#004068] p-10 pb-10">
            <About />
          </section>
          <section id="skills" className="bg-[#004068] pb-20">
            <Skills />
          </section>
          <section id="projects" className="h-auto pb-20 bg-white">
            <Project />
          </section>
          <section id="contact" className="h-[230px] bg-[#004068]">
            <Footer />
          </section>
        </div>
    </div>
  );
}

export default App;
