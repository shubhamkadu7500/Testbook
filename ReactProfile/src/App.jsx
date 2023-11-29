import React from "react";
import "./App.css";
import Header from "./componants/Header/Header";
import Home from "./componants/Home/Home";
import About from "./componants/About/About";
import Skills from "./componants/Skills/Skills";
import Services from "./componants/Services/Services";
const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
    </>
  );
};

export default App;
