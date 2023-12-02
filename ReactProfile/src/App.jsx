import React from "react";
import "./App.css";
import Header from "./componants/Header/Header";
import Home from "./componants/Home/Home";
import About from "./componants/About/About";
import Skills from "./componants/Skills/Skills";
import Services from "./componants/Services/Services";
import Qualification from "./componants/Qualification/Qualification";
import Testimonials from "./componants/Testimonials/Testimonials";
import Contact from "./componants/Contact/Contact";
import Footer from "./componants/Footer/Footer";
import ScrollUp from "./componants/Scrollup/ScrollUp";
import Work from "./componants/Work/Work";
const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default App;
