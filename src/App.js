import React from "react";
import About from "./components/About";
import ArrowButton from "./components/ArrowButton";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Project />
      <ContactUs />
      <ArrowButton />
      <Footer />
    </div>
  );
}

export default App;
